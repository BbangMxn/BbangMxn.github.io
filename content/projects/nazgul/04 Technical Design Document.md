# 0. 목표와 범위

### 목표

- 개인 PC(범용 환경)에서 동작하는 **로컬 RAG** 구축
- 대화형 LLM이 **Tool 호출**로 검색/열람/인용을 수행
- 이후 **Code 특화(심볼/참조/패치/테스트)**로 확장 가능

### 비목표(초기)

- 대규모 분산/멀티테넌트
- 전용 그래프DB/검색엔진 운영 강제
- “전체 파일 100% 임베딩”을 초기 완성 조건으로 두지 않음

---

## 1. Entity 설계

### 1.1 Entity Card 핵심 정의

Entity Card는 “검색/컨텍스트 주입/관계 확장”의 최소 단위이다.

### Entity Types (초기)

- `document` : 파일 자체(근거의 루트)
- `chunk` : 인용 가능한 텍스트 범위
- `entity` : 의미 단위 카드 (concept/api/module/evidence/rule)
- `symbol` : 코드 특화 엔티티 (function/class/variable/module)

> 초기에는 `entity`와 `symbol`을 통합해도 되지만, 타입은 분리해두는 게 확장에 유리합니다.

### 1.2 Entity Card 스키마(논리)

- `id` (UUID)
- `type` (enum)
- `name/title`
- `summary`
- `content` (옵션)
- `source_ref` (doc_id, chunk_id, line range)
- `version`
- `token_size`
- `created_at / updated_at`

### 1.3 Relation(그래프) 설계

관계는 “LLM이 추론하는 암묵 지식”이 아니라 “시스템이 제공하는 명시적 구조”다.

### Relation Types (범용)

- `depends_on`
- `references`
- `supports`
- `contradicts`
- `implements`
- `version_of`

### Relation Types (Code 특화 확장)

- `calls`
- `imports`
- `defines`
- `extends`
- `tests`

### Graph 정책(초기 고정)

- 확장 depth: 기본 `1~2 hop`
- 확장 조건: `relation_type allowlist + weight threshold`
- 폭발 방지: `max_nodes`, `max_edges` 제한

---

## 2. DB 형태 설계 (로컬-퍼스트 기준)

### 2.1 선택 전략

초기 구현은 **SQLite(단일 파일)** 를 Source of Truth로 한다.

- 키워드 검색: `FTS5`
- 벡터 검색: 초기엔 “외부 인덱스(예: hnswlib)”를 권장(플러그인), 필요하면 SQLite 확장/pgvector로 교체
- 그래프: `relations` adjacency 테이블 + 재귀 CTE

> 핵심: “DB 교체”를 염두에 두고 **Storage 인터페이스**를 먼저 고정한다.

---

## 2.2 스키마 (SQLite)

### documents

```sql
CREATETABLE documents (
  doc_id       TEXTPRIMARYKEY,
  uri          TEXTNOTNULL,-- file:///..., repo://...
path         TEXT,
  mime         TEXT,
  title        TEXT,
  size_bytesINTEGER,
  mtime_epochINTEGER,
  sha256       TEXT,
  source_type  TEXTNOTNULL,-- filesystem|git|manual
  status       TEXTNOTNULLDEFAULT'active',
  created_atINTEGERNOTNULL,
  updated_atINTEGERNOTNULL
);

CREATE INDEX idx_documents_pathON documents(path);
CREATE INDEX idx_documents_shaON documents(sha256);
```

### chunks (인용/근거 단위)

```sql
CREATETABLE chunks (
  chunk_id    TEXTPRIMARYKEY,
  doc_id      TEXTNOTNULLREFERENCES documents(doc_id),
  chunk_indexINTEGERNOTNULL,
  content     TEXTNOTNULL,
  start_lineINTEGER,
  end_lineINTEGER,
  start_byteINTEGER,
  end_byteINTEGER,
  token_sizeINTEGER,
  created_atINTEGERNOTNULL,
  updated_atINTEGERNOTNULL,
UNIQUE(doc_id, chunk_index)
);

CREATE INDEX idx_chunks_docON chunks(doc_id);
```

### entities (Entity Card / Symbol 통합 테이블)

```sql
CREATETABLE entities (
  entity_id    TEXTPRIMARYKEY,
  doc_id       TEXTREFERENCES documents(doc_id),
  chunk_id     TEXTREFERENCES chunks(chunk_id),
  type         TEXTNOTNULL,-- concept|api|module|evidence|rule|symbol
  name         TEXTNOTNULL,
  summary      TEXT,
  content      TEXT,
language     TEXT,-- code only
  symbol_kind  TEXT,-- function|class|variable|module
  signature    TEXT,
  versionINTEGERNOTNULLDEFAULT1,
  token_sizeINTEGER,
  created_atINTEGERNOTNULL,
  updated_atINTEGERNOTNULL
);

CREATE INDEX idx_entities_docON entities(doc_id);
CREATE INDEX idx_entities_typeON entities(type);
CREATE INDEX idx_entities_nameON entities(name);
```

### relations (그래프)

```sql
CREATETABLE relations (
  source_entity_id  TEXTNOTNULLREFERENCES entities(entity_id),
  target_entity_id  TEXTNOTNULLREFERENCES entities(entity_id),
  relation_type     TEXTNOTNULL,
  weightREALNOTNULLDEFAULT1.0,
  evidence_chunk_id TEXTREFERENCES chunks(chunk_id),
  created_atINTEGERNOTNULL,
PRIMARYKEY(source_entity_id, target_entity_id, relation_type)
);

CREATE INDEX idx_rel_srcON relations(source_entity_id);
CREATE INDEX idx_rel_tgtON relations(target_entity_id);
CREATE INDEX idx_rel_typON relations(relation_type);
```

### FTS5 (키워드 검색)

```sql
CREATE VIRTUALTABLE chunks_ftsUSING fts5(
  chunk_id UNINDEXED,
  doc_id   UNINDEXED,
  content
);

CREATE VIRTUALTABLE entities_ftsUSING fts5(
  entity_id UNINDEXED,
  type      UNINDEXED,
  name,
  summary,
  signature
);
```

### embeddings (원본 저장 + 재빌드 대비)

```sql
CREATETABLE embeddings (
  object_type TEXTNOTNULL,-- chunk|entity
  object_id   TEXTNOTNULL,
  model       TEXTNOTNULL,
  dimsINTEGERNOTNULL,
  vector_blob BLOBNOTNULL,-- float32 bytes
  updated_atINTEGERNOTNULL,
PRIMARYKEY(object_type, object_id, model)
);
```

---

## 3. Retrieval 설계 (RAG 동작 정의)

### 3.1 인덱싱 정책(초기 고정)

- 키워드(FTS): **100% 인덱싱**
- 임베딩: **점진적**
    - 기본: md/txt/README + docs 폴더
    - 옵션: 코드 전체, PDF 텍스트 추출 가능분
- 업데이트: `sha256` 또는 `mtime+size` 기반 증분 인덱싱

### 3.2 검색 정책(초기 고정)

- 기본: `hybrid`
    - sparse(FTS TopK) + dense(Vector TopK) → merge(RRF 또는 가중합)
- dense가 없는 대상은 sparse만 사용
- 결과는 항상 **citation 가능한 스니펫(파일/라인/해시)**로 정규화

### 3.3 그래프 확장 정책

- seed(상위 K)에서 entity를 잡고
- `1~2 hop` 확장
- type/edge allowlist + weight threshold로 pruning

---

## 4. 언어(코드) 설계: 모듈/인터페이스 고정

### 4.1 패키지 구조(권장)

```
/core
  /domain        (Entity, Relation, Document, Chunk 모델)
  /storage       (SQLiteRepository)
  /index
    /fts         (FTS indexing/search)
    /vector      (VectorIndex interface + hnswlib impl)
  /retrieval     (HybridSearch, GraphExpand, ContextPackager)
  /ingestion     (Scanner, Parser, Chunker, Embedder, EntityExtractor)
  /tools         (Tool API layer: search/open/read/cite)
  /security      (allowlist, ignore_globs, approval policy)
```

### 4.2 Storage 인터페이스(교체 가능 설계)

- `DocumentStore`
- `ChunkStore`
- `EntityStore`
- `RelationStore`
- `EmbeddingStore`

> 구현체: `SQLite*Store`로 시작 → 나중에 Postgres로 교체 가능

### 4.3 VectorIndex 인터페이스(핵심)

- `upsert(id, vector, metadata)`
- `delete(id)`
- `search(query_vector, k, filter?) -> [(id, score)]`
- `save()/load()`

### 4.4 Tool API(범용 → code 특화)

### 범용(Read-only) 최소 툴

- `search(query, mode, filters, top_k)`
- `open_document(uri)`
- `read_range(uri, start_line, end_line)`
- `get_snippets(result_ids)` (인용 스니펫 정규화)
- `get_metadata(uri)`
- `list_dir(path)`
- `health()`

### Code 특화(2단계)

- `search_symbol(name, kind, language)`
- `find_references(symbol_id)`
- `project_outline(root)`
- `git_status(root)` / `git_diff(root)`

> write/exec는 3단계로 미루고 “승인 기반”으로 분리