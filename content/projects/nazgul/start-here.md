---
title: Nazgul Start Here
tags:
  - portfolio
  - guide
  - rag
---

Nazgul은 메인 페이지 하나만 보면 제품 재정의까지는 보이지만, 실제 연구 흐름은 하위 문서까지 같이 봐야 명확합니다. 이 폴더는 "취미 SNS를 왜 retrieval 연구 문제로 다시 읽었는가"를 단계별로 따라가게 만드는 입구입니다.

## 전제

- Nazgul의 출발점은 RAG 실험이 아니라 취미 SNS 제품 도메인이었다는 점
- retrieval 구조는 제품 입력과 탐색 경험을 다시 해석하면서 생긴 연구 계층이라는 점
- 세부 연구 문서는 메인 주장과 검증 범위를 보강하는 자료라는 점

## 읽기 순서

1. [Nazgul 메인 페이지](./index)
2. [Folder Feature Map](./folder-feature-map)
3. [Retrieval Map](./retrieval-map)
4. [Research Notes](./research-notes)
5. [Technical Design](./technical-design)

## 문서 역할

### `index.md`

- 왜 이 프로젝트가 단순 SNS MVP가 아니라 연구형 전환 사례인지 설명합니다.
- 핵심 주장과 증거를 한 페이지에서 닫습니다.

### `folder-feature-map.md`

- 각 폴더를 열었을 때 실제로 어떤 제품 기능과 연구 기능이 나오는지 설명합니다.
- `pages`, `components`, `rag`, `optimization`, `common`을 기능 축으로 읽는 문서입니다.

### `retrieval-map.md`

- 실제 검색 파이프라인을 짧게 압축합니다.
- Entity Card, Chunk, Answer, Trace가 왜 따로 존재하는지 읽는 문서입니다.

### `research-notes.md`

- 연구 메모와 설계 문서를 한 번에 묶는 허브입니다.
- 메인 페이지가 주장이라면, 이 문서는 그 주장을 뒷받침하는 배경 자료의 입구입니다.

### 세부 연구 문서

- [Entity Card RAG](./entity-card-rag): 카드 중심 retrieval 구조를 왜 제안했는지 설명하는 개념 메모
- [Retrieval Engine Design](./retrieval-engine-design): retrieval 엔진을 어떻게 운영 가능하게 만들지 정리한 구현 메모
- [Related Systems](./related-systems): RAPTOR, GraphRAG, Cursor 계열 시스템을 비교한 참고 메모
- [Technical Design](./technical-design): 데이터 모델, DB, Tool API를 가장 구체적으로 적어 둔 기술 설계 문서

## 개발 흐름

1. 먼저 취미 SNS 화면과 도메인을 실제로 만들었습니다.
2. 이후 탐색 경험과 개인화 입력을 검색 문제로 다시 보기 시작했습니다.
3. 서버에서는 Entity Card 기반 검색 구조를 만들고 Trace를 남겼습니다.
4. 느린 실험 결과까지 남겨, 현재 구조가 어디까지 유효한지 확인했습니다.

## 핵심 결론

- Nazgul의 출발점은 RAG 연구가 아니라 실제 제품 도메인이었습니다.
- 그래서 이 프로젝트는 검색 알고리즘 설명보다 문제 재정의 과정이 더 중요합니다.
- 하위 연구 문서는 결과를 뒷받침하는 연구 흔적이고, 메인 페이지는 그 연구를 왜 했는지 설명하는 한 페이지입니다.
- 저장소 구조와 모듈부터 읽고 싶다면 [Nazgul 메인 페이지](./index)의 아키텍처 섹션 다음 [Folder Feature Map](./folder-feature-map)을 먼저 보는 편이 맞습니다.

## 추후 목표

- 임베딩에 대한 시스템 최적화를 진행
- RAG의 시스템을 skils 와 결합하여 직접 검색 조회 같은 다양한 부분을 LLM이 직접 하도록 하는 형태를 최적화 하는 것을 목표로 진행
- 로컬에서 RAG 시스템으로 이식하는것을 목표로 진행합니다.
