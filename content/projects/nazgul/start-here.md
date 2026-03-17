---
title: Start Here
tags:
  - portfolio
  - guide
  - rag
---

# Nazgul 읽는 순서

Nazgul은 메인 페이지 하나만 보면 제품 재정의까지는 보이지만, 실제 연구 흐름은 하위 문서까지 같이 봐야 명확합니다. 이 폴더는 "취미 SNS를 왜 RAG 문제로 다시 읽었는가"를 단계별로 따라가게 만드는 입구입니다.

## 추천 읽기 순서

1. [Nazgul 메인 페이지](./index)
2. [Architecture](./architecture)
3. [Retrieval Map](./retrieval-map)
4. [Library RAG](./01%20Library%20RAG)
5. [Page](./02%20Page)
6. [Research data](./03%20Research%20data)
7. [Technical Design Document](./04%20Technical%20Design%20Document)

## 문서별 역할

### `index.md`

- 왜 이 프로젝트가 단순 SNS MVP가 아니라 연구형 전환 사례인지 설명합니다.
- 핵심 주장과 증거를 한 페이지에서 닫습니다.

### `architecture.md`

- `client`와 `server`가 각각 어떤 책임을 맡는지, 그리고 `rag` 모듈이 서버 안에서 어떻게 읽히는지 설명합니다.
- 제품 도메인과 RAG 실험 구조를 같이 잡는 코드 기준 입구 문서입니다.

### `retrieval-map.md`

- 실제 검색 파이프라인을 짧게 압축합니다.
- Entity Card, Chunk, Answer, Trace가 왜 따로 존재하는지 읽는 문서입니다.

### 기존 연구 문서 4종

- 더 긴 설계 문서와 실험 메모입니다.
- 메인 페이지가 주장이라면, 이 문서들은 그 주장의 배경과 실험 노트입니다.

## 개발 순서를 짧게 요약하면

1. 먼저 취미 SNS 화면과 도메인을 실제로 만들었습니다.
2. 이후 탐색 경험과 개인화 입력을 검색 문제로 다시 보기 시작했습니다.
3. 서버에서는 Entity Card 기반 검색 구조를 만들고 Trace를 남겼습니다.
4. 느린 실험 결과까지 남겨, 현재 구조가 어디까지 유효한지 확인했습니다.

## 이 폴더를 읽고 얻어야 하는 결론

- Nazgul의 출발점은 RAG 연구가 아니라 실제 제품 도메인이었습니다.
- 그래서 이 프로젝트는 검색 알고리즘 설명보다 문제 재정의 과정이 더 중요합니다.
- 하위 문서는 결과를 뒷받침하는 연구 흔적이고, 메인 페이지는 그 연구를 왜 했는지 설명하는 한 페이지입니다.
- 저장소 구조와 모듈부터 읽고 싶다면 [Architecture](./architecture)을 먼저 보는 편이 맞습니다.
