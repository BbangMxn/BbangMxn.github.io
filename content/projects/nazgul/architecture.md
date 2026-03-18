---
title: Nazgul Architecture
tags:
  - portfolio
  - architecture
  - rag
---

Nazgul은 저장소 전체로 보면 `client + server`를 같이 둔 **제품형 모놀리스 저장소**이고, 서버 쪽으로 들어가면 `common`, `optimization`, `rag` 모듈을 가진 **Spring Boot 모듈러 모놀리스**입니다. 그중 `rag`와 `optimization` 모듈 내부는 `adapter / application / domain` 구조를 따르는 **헥사고날 아키텍처**입니다.

## 어떤 아키텍처를 선택했는가

- **저장소 단위**: 클라이언트와 서버를 같이 둔 제품 저장소
- **서버 단위**: 단일 Spring Boot 애플리케이션
- **모듈 단위**: `rag`, `optimization`의 헥사고날 모듈
- **아닌 것**: `rag-service`, `recommend-service`, `trace-service`처럼 나뉜 마이크로서비스

Nazgul을 마이크로서비스라고 부르기 어려운 이유는 `server`가 하나의 Spring Boot 프로세스로 뜨고, 모듈들이 같은 런타임과 같은 설정, 같은 저장소 계층을 공유하기 때문입니다.

## 왜 이 구조를 택했는가

- Nazgul의 핵심은 SNS 기능을 많이 만드는 것이 아니라, 취미 도메인을 검색/RAG 구조로 다시 정의하는 것이었습니다.
- 그래서 `rag` 안에서는 입력, 유스케이스, 저장, 도메인을 분리하는 헥사고날 구조가 필요했습니다.
- 동시에 `optimization` 모듈은 ingest, benchmark, recommend 같은 실험성 유스케이스를 별도로 유지할 필요가 있었습니다.

## 서버 구조를 한 줄로 요약하면

- `common`: 공통 예외와 기반
- `rag`: 검색과 trace의 정식 모듈
- `optimization`: ingest, benchmark, 추천 확장 실험 모듈

## 실행 구조

```text
React Client
  |
RagQueryController.search()
  |
RagSearchService.search()
  |
RagPersistenceAdapter.searchCards()
  |
createScope(cards)
  |
RagPersistenceAdapter.searchChunks()
  |
RagPersistenceAdapter.save(trace)
  |
RagSearchResponse
```

확장 실험은 별도 `optimization` 모듈에서 다음 흐름으로 움직입니다.

```text
HobbyRagApplicationService.ingest/search/recommend/run
  |
application port/in
  |
application service
  |
port/out
  |
ai / persistence / lock / solver adapters
```

## 루트 구조

```text
Nazgul/
├── client/
├── server/
└── docs/
```

- `client`는 취미 SNS 입력을 만드는 프론트엔드입니다.
- `server`가 실제 백엔드 아키텍처 중심입니다.
- `docs/images/`는 제품 증거 이미지입니다.

## `server` 구조

```text
server/
├── docs/
├── scripts/
├── src/main/java/com/nazgul/
│   ├── common/
│   ├── optimization/
│   └── rag/
└── src/main/resources/
    ├── application.yml
    ├── application-sqlite.yml
    └── db/migration/
```

## `rag` 모듈 구조

```text
rag/
├── adapter/
│   ├── in/web
│   └── out/persistence
├── application/
│   ├── port/{in,out}
│   └── service/
├── config/
└── domain/
    ├── entity/
    ├── enums/
    └── vo/
```

이 구조는 `server/docs/rag-hexagonal-architecture.md`의 설명과 실제 코드가 일치합니다.

## 폴더별 책임과 대표 메서드

### `server/src/main/java/com/nazgul/common/`

- 역할: 공통 예외와 서버 기반
- 실제 책임:
  - 전역 예외 처리
  - 모듈 공통적으로 필요한 기반 코드 유지

### `rag/adapter/in/web/`

- 역할: HTTP 입력 어댑터
- 대표 메서드:
  - `RagQueryController.search(...)`
- 실제 책임:
  - 외부 검색 요청을 `SearchRagUseCase` 호출로 변환
  - 웹 응답 DTO(`RagSearchResponse`) 생성

### `rag/application/service/`

- 역할: 검색 유스케이스 오케스트레이션
- 대표 메서드:
  - `RagSearchService.search(query)`
  - `createScope(cards)`
  - `normalizeQuery(query)`
  - `normalizeLimit(requestedLimit, defaultLimit)`
- 실제 책임:
  - 카드 먼저 검색
  - 카드 결과로 `RetrievalScope` 생성
  - 범위 기반 청크 검색
  - 검색 결과와 trace를 함께 조립

### `rag/application/port/in`

- 역할: 서버가 제공하는 유스케이스 계약
- 실제 책임:
  - `SearchRagUseCase`
  - `SearchRagQuery`
  - `SearchRagResult`

### `rag/application/port/out`

- 역할: 검색 서비스가 기대하는 외부 계약
- 실제 책임:
  - `LoadRagCardPort`
  - `LoadRagChunkPort`
  - `SaveRagQueryTracePort`

### `rag/adapter/out/persistence/`

- 역할: JPA 기반 영속화 어댑터
- 대표 메서드:
  - `searchCards(query, limit)`
  - `searchChunks(query, scope, limit)`
  - `save(trace)`
- 실제 책임:
  - 카드/청크 검색
  - 검색 추적 로그 저장
  - JPA Entity와 도메인 Entity 변환

### `rag/domain/`

- 역할: 검색 핵심 도메인 모델
- 실제 책임:
  - `RagCard`, `RagChunk`, `RagDocument`, `RagChapter`, `RagCardRelation`, `RagQueryTrace`
  - `RagCardType`, `RagRelationType`, `RagDocumentSourceType`
  - `EvidenceRef`, `RetrievalScope`

### `optimization/application/service/`

- 역할: ingest, 추천, 벤치마크 같은 실험 유스케이스
- 대표 메서드:
  - `createChunk(...)`
  - `createCard(...)`
  - `link(...)`
  - `recordTrace(...)`
  - `ingest(...)`
  - `search(...)`
  - `recommend(...)`
  - `run(...)`
- 실제 책임:
  - 취미 콘텐츠를 카드/청크로 변환
  - 관계 확장
  - 추천 포스트 ID 생성
  - 벤치마크와 실험 흐름 유지

### `optimization/adapter/out/`

- 역할: 실험용 외부 어댑터
- 실제 책임:
  - AI 요약/재랭킹 어댑터
  - Redis 락
  - 메모리 저장소
  - JPA persistence 어댑터
  - solver 어댑터

### `server/docs/`, `scripts/`, `resources/`

- 역할: 운영과 실험 축
- 실제 책임:
  - `rag-hexagonal-architecture.md`, `server-structure.md`로 구조 설명
  - `start-hobby-rag-sqlite.ps1`, `test-hobby-rag.ps1`로 로컬 실험 실행
  - `application-sqlite.yml`, `db/migration/`으로 로컬 실험 DB 관리

## 이 구조에서 중요한 포인트

1. Nazgul 서버는 **단일 Spring Boot 애플리케이션**입니다.
2. 하지만 내부 모듈, 특히 `rag`는 **헥사고날 구조**를 명확히 사용합니다.
3. `optimization`은 정식 검색 모듈과 별도로 **실험성 유스케이스를 격리**하는 역할을 합니다.
4. 따라서 Nazgul은 “검색 마이크로서비스”가 아니라, **모듈러 모놀리스 안에 헥사고날 검색 모듈을 넣은 구조**로 설명하는 편이 맞습니다.

## 읽기 순서

1. `server/docs/server-structure.md`로 서버 전체 모듈을 봅니다.
2. `server/docs/rag-hexagonal-architecture.md`로 `rag` 모듈 구조를 먼저 잡습니다.
3. `RagQueryController.search()`에서 HTTP 입구를 봅니다.
4. `RagSearchService.search()`에서 카드-청크-trace 흐름을 확인합니다.
5. `RagPersistenceAdapter.searchCards()/searchChunks()/save()`로 실제 영속화 경로를 봅니다.
6. 마지막에 `HobbyRagApplicationService.ingest()/recommend()/run()`을 읽고 실험 확장 축을 연결합니다.
