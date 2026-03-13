---
title: Cache Research
tags:
  - research
  - cache
  - performance
  - system-design
cssclasses:
  - research-note
---

## 연구 개요

이 문서는 캐시를 단순한 성능 튜닝 기법이 아니라, 데이터 접근 비용을 계층적으로 재설계하는 시스템 문제로 다룬다. 연구의 출발점은 반복 조회가 많은 백엔드 서비스에서 데이터베이스 부하와 응답 지연을 동시에 줄일 수 있는 구조를 찾는 것이었으며, 이를 위해 Local Cache, Redis 기반 Global Cache, Query Cache를 포함한 다층 캐시 구조와 여러 eviction 정책을 함께 검토했다. 또한 14개 캐시 알고리즘과 26개 시나리오의 벤치마크 결과를 통해, 히트율 차이보다 스루풋, 구현 복잡도, 워크로드 적합성이 실전 의사결정에 더 큰 영향을 준다는 점을 확인했다.  
(출처: [Cache](https://www.notion.so/2f40de9c810b8089847ff5ae50395958), [벤치마크 결과 (C vs Java)](https://www.notion.so/2f50de9c810b81ecbe99f75cc8ec8560), [Profile](https://www.notion.so/3150de9c810b802a971aef25ead16a59), [포트폴리오](https://www.notion.so/2f30de9c810b80c3bd8afc39e3733449))

## 연구 질문

1. 데이터베이스 조회 병목을 줄이기 위해 어떤 계층형 캐시 구조가 가장 실용적인가?
2. 알고리즘별 히트율 차이가 실제 시스템 설계 의사결정에 충분히 큰가?
3. 실무에서는 히트율, 실행 시간, 구현 복잡도 중 무엇을 우선해야 하는가?
4. 향후 AI 기반 캐싱은 기존 규칙 기반 정책을 어디까지 대체할 수 있는가?

## 핵심 결과 요약

- L1 In-Memory, L2 Redis, L3 Query Cache로 역할을 분리했을 때 응답 시간과 공유성의 균형이 가장 좋았다.
- 14개 알고리즘의 평균 히트율 차이는 `42.96% ~ 44.60%` 범위로 압축되어 있었다.
- 실무 의사결정에서는 히트율 1~2%p보다 스루풋, 메모리 오버헤드, 구현 난이도가 더 중요했다.
- `CLOCK`은 Java 환경에서만 유의미하게 빠른 결과를 보여 런타임 특성의 영향을 확인할 수 있었다.
- 향후에는 LeCaR 같은 경량 적응형 기법부터 시작해 예측 기반 캐싱으로 확장하는 경로가 현실적이다.

## 읽는 순서

1. [[01 research|연구 배경과 목적]]
   연구 질문, 목적, 평가 기준을 먼저 정리한 문서다.
2. [[research/Cache/02-cache-taxonomy-and-system-design|캐시 구조와 시스템 설계]]
   계층 구조, 자료구조, 무효화 전략을 구조적으로 정리한다.
3. [[research/Cache/03-benchmark-method-and-results|벤치마크 설계와 결과]]
   알고리즘 비교 실험과 결과를 수치 중심으로 보여준다.
4. [[research/Cache/04-discussion-and-implications|해석과 실무 시사점]]
   평균값의 함정과 실무 선택 기준을 해석한다.
5. [[research/Cache/05-future-work|향후 연구 방향]]
   적응형 캐싱과 예측 기반 접근으로의 확장 방향을 정리한다.

## 읽기 안내

- 빠르게 전체 맥락만 보려면 `연구 배경과 목적`과 `해석과 실무 시사점`만 먼저 읽어도 된다.
- 실제 설계 근거가 필요하면 `캐시 구조와 시스템 설계`, `벤치마크 설계와 결과`를 이어서 보면 된다.
- 연구 확장 방향까지 포함해 보려면 마지막 `향후 연구 방향`까지 읽으면 된다.

## Sources

- [Cache](https://www.notion.so/2f40de9c810b8089847ff5ae50395958)
- [벤치마크 결과 (C vs Java)](https://www.notion.so/2f50de9c810b81ecbe99f75cc8ec8560)
- [Profile](https://www.notion.so/3150de9c810b802a971aef25ead16a59)
- [포트폴리오](https://www.notion.so/2f30de9c810b80c3bd8afc39e3733449)
