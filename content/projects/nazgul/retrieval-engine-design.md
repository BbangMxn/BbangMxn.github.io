---
title: Retrieval Engine Design
tags:
  - portfolio
  - rag
  - research
  - design
cssclasses:
  - research-note
---

# Retrieval Engine Design

Nazgul의 retrieval 엔진을 제품과 실험 양쪽에서 성립하게 만들기 위해 정리한 구현 메모입니다. 검색 단위, trace, 테스트 가능성, 개발 순서를 어떻게 고정할지에 집중합니다.

## 목표

> “운영 가능한 RAG 엔진”을 만들기 위해,
> 
> **Retrieval Unit(검색 단위)** 을 어떤 구조로 설계해야 하는가?

## 1. v1 개발 목표를 “논문/제품” 둘 다 만족하도록 고정

### 1.1 목표

- **실제 LLM 연결**(Answer 생성은 실제로)
- Retrieval은 **결정적/추적 가능**(Trace 기반 디버깅)
- **Token budget 강제**
- **근거(citation) 강제**
- **증분 업데이트**(전체 재인덱싱 금지)
- 그래프는 “있으면 좋음”이 아니라 **폭발 방지 정책 포함한 제한적 적용**

### 1.2 비목표

- 멀티테넌트/대규모 분산
- “모든 파일 100% 임베딩” 강제
- Neo4j 같은 전용 그래프 DB 강제 (v1은 adjacency table로 충분)

---

## 2 설계의 핵심 결론: “Retrieval Unit은 2계층이어야 한다”

너의 문서에서 Card를 최소 단위로 두었는데, **논문적으로도/제품적으로도** 결국 이 구조가 가장 안전하다:

- **Entity Card = 압축/라우팅 단위 (Compression / Routing)**
- **Evidence Chunk = 인용/검증 단위 (Grounding / Citation)**

즉, 최종 컨텍스트는 항상:

**Context = Selected Cards + Evidence Snippets**

이걸 개발 설계의 불변 조건으로 박아야 테스트가 성립한다

---

## 3. 전체 아키텍처를 “Offline / Online / Observability” 3면으로 고정

### 3.1 Offline: 인덱싱 파이프라인 (재현 가능해야 함)

**Source → Normalize → Segment(Chapter) → Chunk → Cardify → Embed → Index**

여기서 핵심은 “정본”과 “서빙 인덱스”를 분리하는 거야.

- **Canonical Store(정본)**: JSONL 스냅샷 (재빌드 가능, 감사 가능)
- **Serving Store(서빙)**: DB/Vector/FTS/Graph 인덱스 (교체 가능)

### 3.2 Online: 질의 파이프라인 (항상 trace를 남겨야 함)

**Policy → Card Retrieve → Graph Expand(옵션) → Budget Select → Scoped Chunk Retrieve → Evidence Fetch → Answer(LLM) → Trace**

### 3.3 Observability: 운영 레이어 (이게 논문에서도 강점)

- Query trace 저장
- 토큰/지연/Hit-rate/Update-cost 지표화
- 실패 원인 분류(검색 실패/근거 부족/스코프 실패/생성 실패)

---

## 4. 데이터 모델을 “테스트 가능한 형태”로 확정

### 4.1 Canonical JSONL (정본)

v1에서 최소로 필요한 파일만 고정하자:

- `docs.jsonl`
- `chapters.jsonl`
- `chunks.jsonl`
- `cards.jsonl`
- `edges.jsonl` (선택, 그래프 쓸 거면 필수)
- `query_traces.jsonl`

### 4.2 Evidence Locator는 반드시 표준화

모든 근거는 “원문 위치”가 있어야 테스트가 가능해.

- `source_type`
- `path_or_url`
- `rev` (git sha / timestamp)
- `line_start`, `line_end` (또는 byte range)
- `content_hash`
- `captured_at`

이 locator가 있어야:

- 답변이 근거를 제대로 썼는지 검증 가능
- 업데이트 시 어떤 chunk가 바뀌었는지 판별 가능

---

## 5. 온라인 Retrieval 알고리즘을 “구현용으로” 확정

여기서 흔들리면 개발이 시작을 못 한다. v1은 아래로 고정하자.

### v1 Query Flow (고정)

1. **PolicyEngine**: 쿼리 타입 추정(간단 규칙 + LLM 보조 가능)
2. **Card Retrieve**: hybrid(FTS + vector)로 topK 카드 후보
3. **Graph Expand(옵션)**: depth=1~2, allowlist + max_nodes로 제한
4. **Budget Select**: 토큰 예산 B 안에서 카드 부분집합 선택
5. **Scope Build**: 선택된 card가 가리키는 doc/chapter/card scope 생성
6. **Chunk Retrieve(Scoped)**: scope 안에서만 근거 chunk 검색
7. **Evidence Fetch**: locator로 원문 스니펫 로딩
8. **Answer(LLM)**: Cards + Evidence로 답변 + citation 생성
9. **Trace 저장**

여기서 중요한 포인트:

- **Chunk 검색은 무조건 scope 제한** (안 그러면 노이즈가 폭발함)
- **LLM은 “검색”이 아니라 “답변 생성 + 근거 정리”에 집중**시키는 게 v1 성공 확률이 높음

---

## 6. “실제 LLM 연결”을 하면서도 TDD가 되게 하는 설계

LLM을 연결하면 테스트가 흔들리는 게 정상이다. 그래서 구조를 이렇게 분리해.

### 6.1 LLM 의존 컴포넌트 분리

LLM이 들어가는 지점은 보통 4개인데, v1에서는 2개만 “필수”로 두는 게 좋다.

- 필수
    - **Answer Generator**
    - (선택) **Reranker**
- v1에서는 offline로 미루는 편이 안전
    - Entity extraction/cardify
    - Relation extraction

이렇게 해야 “LLM이 흔들려도 retrieval 시스템은 고정”된다.

### 6.2 테스트 분리 원칙

- **Unit / Integration 테스트는 LLM을 stub(모의)로**
    
    → 결정적, 빠름, CI 가능
    
- **LLM 연결 테스트는 별도 “E2E suite”로**
    
    → 비용/변동성 감안하고 nightly 또는 수동 실행
    

### 6.3 LLM 호출 안정화 규칙(현실적인 운영 포인트)

- temperature=0 (가능한 범위)
- prompt_version 고정 + trace에 기록
- 응답 캐시(입력+prompt_version 해시 키)
- 타임아웃/재시도/서킷브레이커
- 모델 장애 시 fallback(짧은 답변 + 근거만 반환)도 설계

---

## 7. 이제 “검증/테스트”를 설계로부터 역으로 뽑자

너가 원하는 건 “RAG를 완성하도록 TDD”니까, 성공 조건을 **테스트 가능한 불변 조건**으로 박아야 해.

### v1 불변 조건(테스트 항목으로 고정)

- **Budget**: `context_tokens <= B`
- **Evidence**: 핵심 주장마다 evidence locator 존재
- **Scope**: chunk retrieval은 항상 scope 필터 적용
- **Trace**: 모든 query는 trace 생성
- **Incremental**: 변경 시 affected set만 재처리

이 5개가 통과하면 “RAG 엔진이 완성”된 거야.

(답변 품질은 그 다음 단계에서 최적화.)

---

## 8. 개발 순서를 “실패하지 않는 순서”로 고정

여기서 한 번 더 생각해보면, 많은 팀이 실패하는 이유는 “그래프/카드부터” 만져서야.

v1은 아래 “얇은 수직 슬라이스(thin slice)”로 가면 성공 확률이 급상승한다.

### Step 1 — Retrieval 최소 완성(LLM 포함)

- ingest(문서 1~2종) → chunk → embed → vector search
- scoped chunk search
- evidence fetch
- LLM answer + citation
- trace 저장

### Step 2 — Token budget + dedup

- 컨텍스트 패키징에서 budget 강제
- 중복 제거

### Step 3 — Incremental update

- content_hash 비교
- affected chapters/chunks만 갱신
- 재임베딩 최소화

### Step 4 — Card layer 도입

- chunk → cardify(초기엔 rule-based도 가능)
- card retrieval → scope build → chunk retrieval

### Step 5 — Graph expansion(마지막)

- edges 테이블
- depth=1~2
- max_nodes/max_edges
- “이득 있는 경우만” 정책화

---

## 9. 너한테 지금 필요한 “다음 산출물” 3개

이제 “설계를 완성”하려면 문서에 아래 3개가 추가되면 된다. (이게 개발의 기준선이 됨)

1. **Interface Spec**
    - DocumentStore / ChunkStore / CardStore / RelationStore / VectorIndex / LLMClient
    - 각 메서드 시그니처와 입력/출력(특히 filter/scope)
2. **Trace Schema**
    - candidate cards/chunks, selected, evidence_used, token/latency, prompt_version, model
3. **Test Plan + Golden Set Format**
    - 골든 데이터(문서/쿼리/기대 evidence locator/기대 budget/기대 trace 필드)
