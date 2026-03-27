---
title: Nazgul Related Systems
tags:
  - portfolio
  - rag
  - research
  - references
cssclasses:
  - research-note
---

Nazgul의 retrieval 구조를 정리하면서 참고한 외부 시스템 비교 메모입니다. 어떤 아이디어를 가져왔고, 무엇은 아직 가져오지 않았는지 빠르게 정리합니다.

## 1. RAPTOR (Tree 기반 계층 RAG)

- 문서를 요약 트리로 구조화
- 상위 노드 → 하위 노드 탐색
- Chunk-only 한계를 해결하려는 시도

✔️ 계층화 아이디어는 동일

❌ 하지만 “의미 객체 + 버전 + 의존성 + 증분 업데이트”까지는 안 감

---

## 2. GraphRAG (Microsoft)

- 엔티티 추출 → 관계 그래프 → 커뮤니티 요약
- 전역 질문(global query)에 강함

✔️ 엔티티를 1급 객체로 다룸

✔️ 관계 중심 구조

❌ 그러나 운영/증분 업데이트 설계가 핵심 목표는 아님

❌ 비용/underperform 이슈 보고됨

최근 연구들에서는:

> GraphRAG가 항상 Vanilla RAG보다 낫지 않다
> 
> → 조건이 맞을 때만 이득

이게 굉장히 중요한 시사점.

---

## 3. Cursor / Windsurf (코드 도메인)

- Merkle Tree 기반 증분 인덱싱
- CodeMap이라는 구조적 요약 아티팩트 사용

✔️ “전체를 읽지 않는다”

✔️ “의미 구조를 먼저 잡는다”

✔️ “변경량 비례 업데이트”

이건 사실 Entity Card 형태로 설계한 형태와 유사하다.

---

## 4. Claude Projects (Anthropic)

- 컨텍스트 한계 도달 시 자동 RAG 모드
- 하이브리드 검색 + rerank

✔️ 정책 기반 검색 모드 전환

✔️ 항상 전체를 읽지 않음

하지만 Card 같은 의미 단위 저장 개념은 없음.

---

## 5. LlamaIndex StorageContext

- docstore / vectorstore / graphstore 분리
- multi-store 아키텍처

✔️ 저장소 분리 개념 존재

❌ 그러나 의미 단위 설계 자체는 프레임워크에 위임
