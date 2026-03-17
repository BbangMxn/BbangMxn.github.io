---
title: Architecture
tags:
  - portfolio
  - architecture
  - rag
---

# Nazgul Architecture

Nazgul은 프론트엔드와 백엔드가 단순히 분리된 프로젝트가 아닙니다. `취미 SNS 도메인`을 유지하는 클라이언트와, 그 도메인을 `RAG 실험 서버`로 다시 읽는 백엔드가 서로 다른 책임을 맡고 있습니다. 그래서 이 프로젝트는 먼저 `제품 입력을 만드는 쪽`과 `검색 구조를 실험하는 쪽`을 나눠서 봐야 합니다.

## 먼저 잡아야 하는 두 축

- `client/`는 취미 선택, 홈 피드, 탐색 같은 제품 입력을 만드는 영역입니다.
- `server/`는 그 입력을 활용해 카드 중심 retrieval을 실험하는 Java/Spring Boot 서버입니다.
- `docs/`는 제품 화면 증거를 모아 두는 정적 자산 폴더입니다.

## 실행 아키텍처

```text
User hobby selection / search query
  |
React Client
  |
rag.adapter.in.web
  |
rag.application.service
  |
rag.domain (Card, Chunk, Relation, Trace)
  |
rag.adapter.out (persistence / index / AI)
  |
Answer + RecommendationTrace
```

- 클라이언트는 제품 맥락을 만들고, 서버는 그 맥락을 검색 파이프라인으로 재해석합니다.
- 서버 안에서는 `질의 -> 카드 후보 -> 청크 근거 -> 답변/추천 -> trace` 흐름을 계층으로 나눠 둡니다.
- `optimization` 모듈은 메인 제품 경로라기보다 구조 실험과 최적화 아이디어를 별도 모듈로 분리한 축입니다.

## 루트 폴더 역할

```text
Nazgul/
├── client/          # 취미 SNS 프론트엔드
├── server/          # Spring Boot 기반 RAG 실험 서버
├── docs/            # README 이미지와 시각 증거
└── README.md
```

- 루트가 단순해 보이는 대신, 각 폴더 안에서 책임이 아주 다르게 갈립니다.
- 이 프로젝트를 읽을 때는 먼저 `client`로 도메인 입력을 보고, 그 다음 `server`로 문제 재정의를 따라가는 편이 맞습니다.

## 클라이언트 구조는 제품 표면을 보여 줍니다

```text
client/src/
├── pages/
├── components/
├── stores/
├── lib/
└── types/
```

- `pages/`는 홈, 탐색, 프로필, 취미 선택 같은 실제 제품 화면 진입점입니다.
- `components/`는 SNS 경험을 구성하는 UI 조각입니다.
- `stores/`는 취미 선택과 화면 상태처럼 제품 맥락을 유지하는 위치입니다.
- 그래서 Nazgul 클라이언트는 완성된 서비스보다도, RAG 입력이 어디서 생성되는지를 보여 주는 도메인 베이스로 읽는 편이 맞습니다.

## 서버 구조는 헥사고날 모듈 두 개로 나뉩니다

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

- `common/`은 전역 예외와 공통 인프라를 둡니다.
- `rag/`는 현재 포트폴리오에서 핵심인 검색/추천 실험 모듈입니다.
- `optimization/`은 성능과 구조 실험을 분리한 보조 모듈입니다.
- `resources/`에는 SQLite 기반 실험 설정과 마이그레이션이 들어 있습니다.

## `rag/` 모듈은 이렇게 읽습니다

```text
rag/
├── adapter/
│   ├── in/web
│   └── out/{ai,index,persistence}
├── application/
│   ├── port/
│   └── service/
├── config/
└── domain/
    ├── entity/
    ├── enums/
    └── vo/
```

- `adapter/in/web`는 HTTP 요청이 들어오는 입구입니다.
- `application/service`는 retrieval 흐름을 실제 유스케이스로 조합하는 계층입니다.
- `domain/entity`에는 Card, Chunk, Relation, Trace 같은 핵심 모델이 있습니다.
- `adapter/out`을 저장소, 인덱스, AI 쪽으로 나눈 덕분에 검색 실험과 외부 구현이 분리됩니다.

## 이 구조가 Nazgul답게 보이는 이유

- 제품 도메인을 만드는 `client/`와 retrieval을 실험하는 `server/`가 명확히 갈려 있습니다.
- 서버 안에서도 `rag`를 하나의 모듈로 묶어 둬서, 이 프로젝트의 중심이 SNS 기능 추가가 아니라 검색 구조 실험이라는 점이 드러납니다.
- `scripts/`와 `application-sqlite.yml`이 함께 있기 때문에, 로컬 실험 프로젝트라는 성격도 파일 구조에서 바로 보입니다.

## 코드를 읽는 추천 순서

1. 루트 `README.md`로 프로젝트가 왜 SNS에서 RAG로 확장됐는지 먼저 잡습니다.
2. `client/src/pages/`와 `stores/`로 제품 입력이 어떻게 만들어지는지 봅니다.
3. `server/docs/server-structure.md`와 `rag-hexagonal-architecture` 계열 문서로 서버 읽는 법을 먼저 확인합니다.
4. `server/src/main/java/com/nazgul/rag/`에서 `adapter -> application -> domain` 순서로 파이프라인을 따라갑니다.
5. 더 깊게 들어갈 때만 `optimization/` 모듈과 `scripts/`를 봐도 충분합니다.
