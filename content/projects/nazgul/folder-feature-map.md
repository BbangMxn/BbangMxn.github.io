---
title: Nazgul Folder Feature Map
tags:
  - portfolio
  - guide
  - rag
  - spring-boot
---

Nazgul은 제품 화면과 RAG 실험 서버가 같이 있어 폴더가 곧 기능 전환 기록입니다. 이 문서는 "각 폴더가 실제로 어떤 제품 기능이나 연구 기능을 맡는가"를 정리합니다.

## 먼저 어디부터 볼까

1. `client/src/pages`: 원래 제품이 어떤 화면을 가졌는지 먼저 봅니다.
2. `client/src/components`, `stores`, `lib`: 화면이 어떤 입력 상태를 가지는지 봅니다.
3. `server/src/main/java/com/nazgul/rag`: 검색 질의 처리 계층을 봅니다.
4. `server/src/main/java/com/nazgul/optimization`: 데이터 생성, 추천, trace 기록 계층을 봅니다.
5. `server/src/main/java/com/nazgul/common`: 공통 예외와 기반 코드를 확인합니다.

## 루트 폴더 기능

### `client`

- React/Vite 기반 프론트엔드입니다.
- 취미 SNS 화면, 탐색 화면, 취미 선택, 프로필, 게시물 읽기 같은 사용자 경험이 여기에 들어 있습니다.

### `server`

- Spring Boot 기반 백엔드입니다.
- 검색 질의 처리, 카드/청크 생성, 추천, trace 기록, 영속화가 이 폴더에 들어 있습니다.

### `docs`

- 화면 캡처와 보조 이미지 자산을 둔 폴더입니다.
- 연구 기능을 실행하는 폴더는 아니지만, 제품이 실제로 존재했다는 증거 자료 역할을 합니다.

## `client` 폴더별 기능

### `src/pages`

- 실제 제품 화면 단위 기능을 담당하는 폴더입니다.
- 페이지별 역할:
  - `HomePage.tsx`: 홈 피드와 커뮤니티 출발점
  - `ExplorePage.tsx`: 탐색 경험과 검색 진입
  - `HobbiesPage.tsx`: 취미 선택과 개인화 입력
  - `ProfilePage.tsx`: 사용자 프로필과 활동 보기
  - `PostDetailPage.tsx`: 게시물 상세 보기
  - `LoginPage.tsx`, `SignupPage.tsx`: 인증 진입
- Nazgul이 왜 단순 연구가 아니라 실제 제품 도메인 위에서 출발했는지 가장 먼저 보여 주는 폴더입니다.

### `src/components`

- 페이지를 구성하는 재사용 UI 컴포넌트 폴더입니다.
- `Layout`, `PostCard`, `PostComposer`, `HobbyChip`, `Avatar`, `LoadingSpinner` 같은 조각이 들어 있습니다.
- 제품 경험을 카드와 취미 단위로 어떻게 보여 줬는지 보려면 이 폴더가 중요합니다.

### `src/stores`

- 프론트엔드 상태 저장소 폴더입니다.
- 현재 `authStore.ts`가 인증 상태와 세션 흐름을 관리합니다.
- 페이지가 어떤 사용자 상태를 기준으로 작동하는지 확인할 때 봅니다.

### `src/lib`

- API 호출과 공용 유틸리티를 둡니다.
- `api.ts`는 서버 통신, `utils.ts`는 프론트엔드 보조 로직을 담당합니다.
- 프론트엔드와 백엔드가 어디서 접속되는지 보려면 여기부터 읽으면 됩니다.

### `src/types`

- 페이지와 컴포넌트가 공유하는 타입을 둡니다.
- 프론트엔드 도메인 모델을 안정적으로 유지하는 기반 폴더입니다.

## `server` 폴더별 기능

### `common`

- 공통 예외 처리와 서버 전역 기반 코드를 모읍니다.
- `GlobalExceptionHandler` 같은 클래스가 예외를 통합합니다.
- 각 모듈의 기능이라기보다 서버 전체 안정성을 받치는 폴더입니다.

### `rag`

- 검색 질의를 받아 Card -> Chunk -> Answer 흐름으로 처리하는 핵심 모듈입니다.
- Nazgul에서 "사용자 질문에 답을 만드는 기능"은 대부분 이 폴더에 들어 있습니다.
- 하위 기능:
  - `adapter/in/web`: HTTP 검색 진입점
    `RagQueryController.search`가 질의를 받습니다.
  - `application/service`: 검색 유스케이스 조립
    `RagSearchService.search`, `createScope`, `normalizeQuery`, `normalizeLimit`가 대표적입니다.
  - `application/port/in`, `application/port/out`: 내부 유스케이스와 외부 의존성 계약
  - `adapter/out/persistence`: 카드, 청크, trace를 저장하거나 검색합니다.
    `RagPersistenceAdapter.searchCards`, `searchChunks`, `save`가 핵심입니다.
  - `adapter/out/ai`, `adapter/out/index`: LLM과 인덱싱 연결
  - `domain/entity`, `domain/vo`, `domain/enums`: 카드, 청크, 문서, 질의, 근거, 스코프 모델
  - `config`: 모듈 설정
- 검색 기능 자체를 읽고 싶으면 이 폴더를 제일 먼저 보면 됩니다.

### `optimization`

- 검색 실험을 위한 데이터 생성, 추천, trace 기록을 담당하는 모듈입니다.
- 연구 기능 관점에서는 "질의 처리 이전에 어떤 지식 자산을 만들고 어떻게 추천 실험을 돌리는가"를 맡습니다.
- 대표 서비스는 `HobbyRagApplicationService`이고, 핵심 메서드는 아래와 같습니다.
  - `createChunk`
  - `createCard`
  - `link`
  - `recordTrace`
  - `ingest`
  - `search`
  - `recommend`
  - `run`
- 루트 구조는 `adapter`, `application`, `config`, `domain`으로 나뉘며, `rag`보다 더 실험 운영에 가깝습니다.

### `src/main/resources`, `scripts`, `supabase`

- `resources`: 애플리케이션 설정과 런타임 리소스
- `scripts`: 로컬 실행이나 보조 작업 스크립트
- `supabase`: 인증이나 데이터 연동용 설정 축
- 메인 기능 폴더는 아니지만 개발 환경 재현에 필요합니다.

## 이 페이지를 어떻게 써야 하나

- 제품 출발점을 보고 싶으면 `client/src/pages -> components -> stores` 순서로 봅니다.
- 검색 서버를 보고 싶으면 `server/rag -> server/optimization -> common` 순서가 가장 빠릅니다.
- 제품에서 연구로 어떻게 넘어갔는지 보려면 `ExplorePage/HobbiesPage -> rag -> optimization` 흐름으로 읽는 편이 좋습니다.

## 같이 보면 좋은 문서

- [Architecture](./architecture)
- [Retrieval Map](./retrieval-map)
- [Research Notes](./research-notes)
- [Technical Design](./technical-design)
