---
title: Nazgul Entity Card RAG
tags:
  - portfolio
  - rag
  - research
cssclasses:
  - research-note
---

> 개인 연구 목적
## Abstract

본 연구는 기존 Retrieval-Augmented Generation(RAG)의 구조적 한계를 분석하고, 이를 해결하기 위한 계층형 그래프 기반 Entity Card 아키텍처를 제안한다. 기존 RAG는 문서 단위 또는 청크 단위 임베딩 검색에 의존하며, 이로 인해 토큰 비효율, 정보 단절, 관계 추적 불가, 업데이트 시 재임베딩 과부하 등의 문제가 발생한다. 본 연구는 문서를 의미적 최소 단위(Entity Card)로 구조화하고, 이를 관계 그래프로 구성하여 Retrieval 과정을 유사도 기반 검색에서 그래프 기반 탐색으로 확장하는 구조를 제안한다. 제안 구조는 토큰 효율성, 유지보수성, 부분 업데이트 가능성, 지식 추적성을 동시에 개선하는 것을 목표로 한다.

---

## 1. Introduction

## 1.1 Background

Large Language Model은 고정된 context window를 가지며, 외부 지식 확장을 위해 RAG 구조가 사용된다. 일반적인 RAG는 다음과 같은 구조를 가진다:

Query → Embedding → Vector Search → TopK Chunk → LLM

이 방식은 단순하고 확장 가능하지만, 문서의 구조적 의미와 관계성을 반영하지 못한다.

---

## 1.2 Problem Statement

기존 RAG 구조는 다음과 같은 한계를 가진다:

1. Token Explosion
    
    검색된 청크가 중복 정보를 포함하며 토큰 낭비 발생
    
2. Context Fragmentation
    
    관계가 있는 정보가 분리되어 LLM이 재구성해야 함
    
3. Update Cascade
    
    문서 일부 수정 시 전체 재임베딩 필요
    
4. Lack of Structural Awareness
    
    문서 간 의존성, 반박 관계, 버전 관계 추적 불가
    

---

## 1.3 Research Objective

본 연구의 목표는 다음과 같다:

- 의미적 최소 단위(Entity Card) 기반 지식 구조 설계
- 관계 그래프 기반 Retrieval 모델 설계
- 부분 업데이트 가능한 RAG 구조 구현
- 토큰 사용량 및 지연 감소 검증

---

## 1.4 Contributions

본 연구의 기여는 다음과 같다.

1. **Token-bounded Retrieval Unit으로서 Entity Card 정의**

- 문서/청크 중심 retrieval에서 벗어나, LLM 컨텍스트 주입을 위한 “고정 크기(토큰 예산) 의미 단위”를 1급 객체로 정의한다.
    
- 각 Card는 요약(semantic compression)과 근거 포인터(evidence locator), 버전 정보를 포함한다.
    

2. **Dual Retrieval Unit 설계(Card + Evidence Chunk)**

- Card는 “의미/정책/관계” 중심의 후보 압축 단위, Chunk는 “검증 가능한 원문 근거” 단위로 분리한다.
    
- 최종 답변 컨텍스트는 Card 집합 + 근거 스니펫으로 구성되며, citation/traceability를 내장한다.
    

3. **Graph-assisted Retrieval을 Token Budget 제약 하에 정식화**

- 시드 카드에서 그래프 확장(k-hop)을 수행하되, 최종 선택은 토큰 예산 B를 만족하는 부분집합 선택 문제로 정의한다.

4. **부분 업데이트 가능한 인덱싱/서빙 모델**

- 문서 변경 시 전체 재임베딩이 아니라 “영향 범위(affected set)” 기반으로 Card/Chunk 단위만 갱신하는 업데이트 정책을 제안한다.

5. **운영 가능성(Observability)을 위한 Retrieval Trace 구조 제시**

- 검색 후보, 선택 결과, 근거 사용, 토큰/지연을 추적 가능한 형태로 기록하여 디버깅 및 평가 자동화를 가능하게 한다.

---

## 2. Conceptual Architecture

---

## 2.1 Hierarchical Knowledge Model

본 구조는 4계층으로 구성된다:

1. Book – 문서 단위 컨테이너
2. Chapter – 논리적 그룹 단위
3. Entity Card – 의미적 최소 단위
4. Library – Entity 간 관계 그래프

---

## 2.2 Entity Card Definition

Entity Card는 LLM 컨텍스트 주입의 최소 단위이다.

### Entity Card Specification

```
{
  "id":"entity_uuid",
  "type":"concept | module | api | evidence | rule",
  "title":"Entity Name",
  "summary":"Compressed semantic description",
  "content":"Optional detailed description",
  "embedding":"vector",
  "relations": {
    "depends_on": [],
    "supports": [],
    "contradicts": [],
    "implements": [],
    "version_of": []
  },
  "evidence": [],
  "version":"v1.0",
  "updated_at":"timestamp"
}
```

---

## 2.3 Design Principles

1. Atomicity
    
    하나의 Card는 하나의 명확한 의미만 가진다.
    
2. Partial Mutability
    
    Card는 버전 단위로 관리되며, 수정 시 재임베딩은 해당 Card만 수행한다.
    
3. Explicit Relations
    
    모든 관계는 명시적 Edge로 저장된다.
    
4. Context Packaging
    
    LLM에 전달되는 컨텍스트는 Card 집합 단위로 구성된다.
    

---

## 2.4 Dual Retrieval Units: Entity Card vs Evidence Chunk

본 연구는 Retrieval 단위를 목적에 따라 2계층으로 분리한다.

- **Entity Card (Compression / Routing Unit)**
    - 의미를 압축한 최소 단위이며, 상위 검색 및 컨텍스트 패키징의 중심 단위이다.
    - “무엇이 중요한가(핵심 주장/요약/관계)”를 담는다.
- **Evidence Chunk (Grounding / Citation Unit)**
    - 원문에서 인용 가능한 텍스트 범위이며, 답변의 근거로 사용된다.
    - “어디에 근거가 있는가(원문 위치)”를 제공한다.

즉, 최종 컨텍스트는 다음으로 구성된다.

> Context = {Selected Entity Cards} ∪ {Evidence Snippets}

### 2.4.1 Evidence Locator Specification

근거는 항상 “원문 위치”를 포함해야 하며, 재현 가능해야 한다.

```json
{
  "source_type": "repo | wiki | pdf | html | notion",
  "path_or_url": "string",
  "rev": "git_sha | version | timestamp",
  "section_id": "optional",
  "line_start": 0,
  "line_end": 0,
  "content_hash": "sha256",
  "captured_at": "timestamp"
}
```

---

### 2.4.2 Updated Entity Card Schema (with Evidence Pointers)

Entity Card는 근거 포인터를 포함하며, 원문 텍스트를 직접 중복 저장하지 않는다(선택적).

```sql
{
  "id": "entity_uuid",
  "type": "concept | module | api | evidence | rule",
  "title": "Entity Name",
  "summary": "Compressed semantic description",
  "claims": ["atomic statements..."],
  "relations": {
    "depends_on": [],
    "supports": [],
    "contradicts": [],
    "implements": [],
    "version_of": [],
    "references": []
  },
  "evidence_refs": [
    { "locator": { "...": "..." }, "note": "why this evidence supports the claim" }
  ],
  "version": "v1.0",
  "token_size": 0,
  "updated_at": "timestamp"
}
```

---

## 3. Graph Construction Model

---

## 3.1 Node Types

- Concept
- API
- Dataset
- Rule
- Evidence
- Implementation

---

## 3.2 Edge Types

- depends_on
- supports
- contradicts
- implements
- version_of
- references

---

## 3.3 Graph Storage Strategy

선택지:

1. Neo4j (Property Graph)
2. PostgreSQL + adjacency table
3. Hybrid (Vector DB + Graph DB)

초기 구현 전략:

- Vector Search: pgvector
- Graph: PostgreSQL adjacency list
- 이후 필요 시 Neo4j 확장

---

## 4. Retrieval Algorithm

---

## 4.1 Baseline (Naive RAG)

1. Query Embedding
2. Vector Search
3. TopK 반환
4. LLM 입력

복잡도: O(logN) 검색 + TopK 정렬

---

## 4.2 Proposed Graph-based Retrieval

지금 4.2는 Card만 뽑고 끝처럼 보이는데, 위 2.4를 반영해서 **Evidence Chunk retrieval 단계**를 끼워 넣어야 논리 완성도가 올라가.

**4.2 Algorithm 단계 교체(권장)**

```markdown
1. Query Embedding 생성
2. Seed Entity Card TopK 검색
3. Relation Depth Expansion (d ≤ k)
4. Subgraph 생성 및 Card 후보 집합 구성
5. Token Budget 기반 Card Selection
6. (추가) Selected Cards로 Scope 제한 후 Evidence Chunk 검색
7. Evidence Fetch (locator 기반 원문 스니펫 로딩)
8. Context Packaging (Cards + Evidence)
9. LLM 전달
```

---

### Pseudocode

```
seed_entities = vector_search(query_embedding, k)

subgraph = expand_graph(seed_entities, depth=d)

ranked_cards = rerank_by_relevance(subgraph)

selected_cards = apply_token_budget(ranked_cards)

return selected_cards
```

---

## 4.3 Complexity Analysis

Vector Search: O(logN)

Graph Expansion: O(V + E) within depth limit

Context Packaging: O(K)

Worst Case: Dense graph에서 확장 비용 증가

Mitigation: Depth 제한 + relevance pruning

---

## 5. Memory and Update Strategy

---

## 5.1 Update Policy

- Entity 수정 시 해당 Card만 재임베딩
- Relation 변경 시 Graph index만 수정

---

## 5.2 Embedding Drift Handling

- Version 기반 embedding 관리
- Drift threshold 설정
- 주기적 re-index 전략

---

## 5.3 Token Budget Strategy

- Card 단위 토큰 계산
- Dynamic pruning
- Summary fallback mode

---

## 6. Implementation Plan

---

## Phase 1: Entity Extraction

- 기존 문서 → Chunk 분해
- LLM 기반 Entity 후보 추출
- Card 생성

---

## Phase 2: Graph Construction

- Relation 자동 추론
- 수동 보정

---

## Phase 3: Hybrid Retrieval

- Vector + Graph 확장
- Context 구성

---

## Phase 4: Evaluation

비교 대상:

- Naive RAG
- Summary RAG
- Entity Graph RAG

평가 지표:

- 평균 토큰 사용량
- 평균 응답 시간
- 정확도
- Update 처리 시간

---

## 7. Expected Advantages

1. Token Efficiency
2. Partial Update 가능
3. Structural Awareness
4. Knowledge Traceability
5. 유지보수성 향상

---

## 8. Limitations

- Graph 과확장 위험
- Relation 품질 의존성
- 초기 구축 비용 증가
- Entity Granularity 조정 문제

---

## 9. Conclusion

본 연구는 RAG 구조를 단순 검색 모델에서 구조 인식형 그래프 탐색 모델로 확장하는 아키텍처를 제안하였다. Entity Card 기반 계층형 설계는 토큰 효율성, 유지보수성, 관계 추적성을 개선할 수 있으며, 향후 Knowledge Operating System으로 확장 가능성을 가진다.

---

## Related Notes

- [Technical Design](./technical-design)
- [Related Systems](./related-systems)
- [Retrieval Engine Design](./retrieval-engine-design)
