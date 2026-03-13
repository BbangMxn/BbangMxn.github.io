---
title: 캐시 구조와 시스템 설계
tags:
  - research
  - cache
  - architecture
cssclasses:
  - research-note
---

## 캐시의 기본 분류

캐시는 자주 접근하는 데이터를 미리 복사해 두는 임시 저장소이며, 빠른 접근을 위해 저장 공간과 비용을 교환하는 구조다. 본 연구에서는 이를 크게 Local Cache와 Global Cache로 구분한다.  
(출처: [Cache](https://www.notion.so/2f40de9c810b8089847ff5ae50395958))

| 구분 | Local Cache | Global Cache |
| --- | --- | --- |
| 위치 | 애플리케이션 메모리 (Heap) | 별도 캐시 서버 |
| 속도 | 빠름 | 네트워크 지연 존재 |
| 데이터 공유 | 불가 | 서버 간 공유 가능 |
| 영속성 | 재시작 시 초기화 | 설정에 따라 유지 가능 |
| 대표 예시 | Caffeine, Guava | Redis, Memcached |

## 3-Tier 캐싱 구조

실무 적용 관점에서 가장 중요한 부분은 단일 캐시 도입 여부가 아니라 계층 간 역할 분리다. 현재 정리된 구조는 L1 In-Memory, L2 Redis, L3 Query Cache로 나뉘며, 각 계층의 책임은 다음과 같다.  
(출처: [Profile](https://www.notion.so/3150de9c810b802a971aef25ead16a59), [포트폴리오](https://www.notion.so/2f30de9c810b80c3bd8afc39e3733449))

| 계층 | 역할 | 응답 시간 | 기대 히트율 |
| --- | --- | --- | --- |
| L1 (In-Memory) | 가장 빈번한 Hot Data 처리 | ~1ms | 70% |
| L2 (Redis) | 인스턴스 간 공유 캐시 | ~5ms | 20% |
| L3 (Query Cache) | 집계 결과, Materialized View 보관 | ~50ms | 5% |

이 구조는 전체 히트율 92%, 평균 응답 시간 10ms 이하라는 목표를 설명하는 핵심 근거가 된다. 즉, 가장 빠른 계층이 대부분의 요청을 처리하고, 공유성 또는 계산 비용이 큰 데이터만 하위 계층으로 흘려보내는 방식이다.  
(출처: [Profile](https://www.notion.so/3150de9c810b802a971aef25ead16a59))

## Local Cache를 지탱하는 자료구조

Local Cache는 자료구조 선택에 따라 동작 특성이 크게 달라진다. 핵심 자료구조는 다음과 같다.  
(출처: [Cache](https://www.notion.so/2f40de9c810b8089847ff5ae50395958))

| 자료구조 | 용도 | 시간복잡도 |
| --- | --- | --- |
| HashMap | 키-값 저장 | O(1) 조회 |
| Doubly Linked List | 접근 순서 추적 (LRU) | O(1) 삽입/삭제 |
| Min-Heap | 빈도 추적 (LFU) | O(log n) |
| Circular Buffer | CLOCK 계열 정책 | O(1) |

## Eviction Policy 비교

Eviction Policy는 캐시가 꽉 찼을 때 무엇을 버릴지 결정하는 규칙이다. 이 연구에서 다루는 기본 정책은 아래와 같다.  
(출처: [Cache](https://www.notion.so/2f40de9c810b8089847ff5ae50395958))

| 정책 | 핵심 아이디어 | 장점 | 한계 |
| --- | --- | --- | --- |
| LRU | 가장 오래 접근하지 않은 항목 제거 | 보편적이고 균형 잡힘 | Scan 패턴에 취약 |
| LFU | 접근 빈도가 가장 낮은 항목 제거 | 빈도 기반 최적화 | Churn 상황에서 오판 가능 |
| FIFO | 가장 먼저 들어온 항목 제거 | 구현이 가장 단순 | 최근성 반영 부족 |
| CLOCK | LRU를 근사하는 순환 포인터 방식 | 메모리 효율적 | 구현에 따라 성능 편차 존재 |

## 쓰기 전략과 무효화 전략

캐시는 읽기 최적화만으로 끝나지 않는다. 정합성을 어떻게 관리할 것인지가 구조 설계의 핵심이다. 현재 정리된 실무 전략은 다음과 같다.  
(출처: [포트폴리오](https://www.notion.so/2f30de9c810b80c3bd8afc39e3733449))

### 쓰기 전략

| 전략 | 적용 상황 | 구현 방식 | 기대 효과 |
| --- | --- | --- | --- |
| Cache-Aside | 읽기 중심 API | Redis GET 후 miss 시 DB 조회 및 SET | 응답 시간 단축 |
| Write-Through | 정합성이 중요한 데이터 | DB와 캐시를 동시에 갱신 | 불일치 최소화 |
| Write-Behind | 쓰기 부하가 높은 구간 | Redis Streams를 통한 비동기 반영 | DB 부하 분산 |

### 무효화 전략

- 이벤트 기반 무효화: 데이터 변경 시 Pub/Sub으로 관련 캐시를 즉시 삭제한다.
- 계층적 무효화: 상위 데이터 변경 시 하위 캐시를 함께 제거한다.
- Staggered TTL: 랜덤 TTL을 주어 stampede를 완화한다.

## 설계 원칙

이 연구에서 도출한 설계 원칙은 다음과 같다.

1. L1은 속도, L2는 공유성, L3는 계산 비용 절감을 담당하도록 책임을 분리한다.
2. 알고리즘 선택보다 먼저 무효화 전략과 데이터 흐름을 정의한다.
3. 전체 시스템에서 캐시의 목표를 "히트율 극대화"가 아니라 "병목 구간의 비용 절감"으로 둔다.

## Sources

- [Cache](https://www.notion.so/2f40de9c810b8089847ff5ae50395958)
- [Profile](https://www.notion.so/3150de9c810b802a971aef25ead16a59)
- [포트폴리오](https://www.notion.so/2f30de9c810b80c3bd8afc39e3733449)
