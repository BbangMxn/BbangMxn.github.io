---
title: Worker Folder Feature Map
tags:
  - portfolio
  - guide
  - workflow
  - ai-agent
---

Worker는 프론트엔드, 백엔드, AI 파이프라인이 한 저장소 안에 같이 있어 폴더 기능을 먼저 잡는 편이 좋습니다. 이 문서는 "각 폴더가 실제로 어떤 제품 기능을 담당하는가"를 빠르게 읽게 만드는 맵입니다.

## 먼저 어디부터 볼까

1. `worker_client/src/app`: 화면과 진입 경로를 먼저 봅니다.
2. `worker_client/src/widgets`: 실제 워크스페이스 기능 블록을 봅니다.
3. `worker_server/main.go`: 서버가 어떤 모드로 실행되는지 봅니다.
4. `worker_server/internal/bootstrap`: API와 워커 런타임이 어떻게 조립되는지 봅니다.
5. `worker_server/adapter/in`, `core`, `adapter/out`: 요청, 판단, 외부 연동 순서를 잡습니다.
6. `docs`: 구조와 배포 문서를 확인합니다.

## 루트 폴더 기능

### `worker_client`

- Next.js 기반 워크스페이스 프론트엔드입니다.
- 이메일, 문서, 캘린더, 연락처를 하나의 제품 화면으로 묶는 기능이 여기 있습니다.

### `worker_server`

- Go 기반 백엔드와 AI 실행 계층입니다.
- 메일 동기화, 분류, Proposal, 외부 Provider 연동, 실시간 스트림이 이 폴더에 들어 있습니다.

### `docs`

- 구조, 데이터베이스, 배포, 로드맵 문서를 둔 설명 폴더입니다.
- 코드 기능을 실행하지는 않지만 저장소가 왜 이렇게 무거워졌는지 이해하는 기준점입니다.

## `worker_client` 폴더별 기능

### `src/app`

- App Router 진입점과 레이아웃 계층입니다.
- `(auth)`는 로그인과 인증 화면, `(workspace)`는 실제 업무 워크스페이스 화면을 담당합니다.
- `layout.tsx`, `page.tsx`, `auth`, `workspace` 구성이 사용자 이동 흐름을 결정합니다.

### `src/widgets`

- 화면에서 바로 보이는 기능 단위 위젯을 모은 폴더입니다.
- 이메일 리스트와 상세, 캘린더 뷰, 커맨드 팔레트, 작성창, 연락처 상세, 문서 상세, 분할 화면이 여기서 조립됩니다.
- 폴더별 기능 예시:
  - `email-list`, `email-detail`: 메일함과 상세 읽기
  - `calendar-view`, `calendar-sidebar`: 일정 조회와 보조 탐색
  - `compose`: 메일 작성
  - `command-palette`: 빠른 명령 실행
  - `split-view`: 여러 업무 패널을 동시에 보여 주는 레이아웃
- 워크스페이스가 실제로 어떤 도구 묶음인지 이해하려면 이 폴더가 가장 중요합니다.

### `src/entities`

- 이메일, 연락처, 문서, 캘린더 같은 도메인 단위 UI 모델을 둡니다.
- 각 기능이 공유하는 타입, 표시 규칙, 작은 도메인 로직이 이곳에 모입니다.
- 하위 폴더는 `email`, `contact`, `document`, `calendar`로 나뉘어 있습니다.

### `src/shared`

- 공통 UI와 설정, 훅, 타입을 모으는 공용 계층입니다.
- 버튼이나 패널 같은 시각 컴포넌트뿐 아니라 앱 전체에서 재사용되는 설정이 들어갑니다.
- `config`, `hooks`, `lib`, `types`, `ui`를 보면 프론트엔드 공통 기반이 보입니다.

### `src/lib`

- 외부 서비스와 붙는 클라이언트 헬퍼를 둡니다.
- 현재는 `supabase`가 있어 인증과 세션 기반 기능의 진입점 역할을 합니다.

## `worker_server` 폴더별 기능

### `main.go`

- 서버의 최상위 엔트리 포인트입니다.
- `main`, `runAPI`, `runWorker`가 실행 모드를 고르고, `api`, `worker`, `all` 모드를 분기합니다.
- 이 파일을 보면 Worker가 단일 서버이면서도 두 런타임을 함께 가진다는 점이 바로 드러납니다.

### `internal/bootstrap`

- 런타임 조립 계층입니다.
- API 서버, 백그라운드 워커, 공통 의존성을 실제로 생성합니다.
- 대표 메서드:
  - `NewAPI`
  - `NewWorker`
  - `Worker.Start`
  - `Worker.Stop`
  - `Worker.Submit`
- 시스템을 실행 가능한 상태로 만드는 기능이 이 폴더에 집중됩니다.

### `adapter/in/http`

- 외부 HTTP 요청과 SSE 같은 입력 어댑터 폴더입니다.
- 메일 조회, 메일 전송, 답장, 검색, 동기화 트리거 같은 API 기능이 여기서 시작됩니다.
- 대표 메서드:
  - `NewMailHandler`
  - `Register`
  - `ListEmails`
  - `GetEmail`
  - `SearchEmails`
  - `SendEmail`
  - `ReplyEmail`
  - `TriggerSync`
- 사용자 기능 관점에서는 "화면에서 누른 액션이 서버에 처음 닿는 곳"입니다.

### `adapter/in/worker`

- 백그라운드 작업과 큐 입력을 처리하는 어댑터입니다.
- 메일 이벤트나 분류 작업이 워커로 들어왔을 때 실제 처리 진입점을 맡습니다.
- 대표 메서드:
  - `NewHandler`
  - `Process`
  - `ParsePayload`

### `core/agent`

- AI Agent의 오케스트레이션 계층입니다.
- 분류 결과를 바탕으로 응답을 만들고, Proposal을 생성하거나 실행 결정을 연결합니다.
- 대표 메서드:
  - `NewOrchestrator`
  - `Process`
  - `ConfirmProposal`
  - `RejectProposal`
  - `detectIntent`
  - `gatherContext`
  - `generateResponse`
  - `executeProposal`
- Worker의 핵심 제품 차별점은 이 폴더에서 가장 잘 보입니다.

### `core/service/classification`

- 규칙 기반 분류와 LLM 분류를 조합하는 파이프라인 폴더입니다.
- 보내는 사람, 제목, 도메인, 우선순위, RFC 룰을 단계적으로 적용합니다.
- 대표 메서드:
  - `NewPipeline`
  - `Classify`
  - `ClassifyLegacy`
  - `classifyByDomain`
  - `classifyByLLMWithUserRules`
  - `UpdateSenderProfile`
- 메일 자동화가 곧바로 AI 호출이 아니게 만든 핵심 비용 제어 계층입니다.

### `core/domain`

- 메일, Proposal, 분류 결과 같은 핵심 도메인 모델을 둡니다.
- 비즈니스 규칙의 데이터 경계를 정의하는 폴더라서, 다른 계층이 어떤 값을 주고받는지 이해할 때 필요합니다.

### `core/port`

- 헥사고날 구조의 포트 인터페이스를 정의합니다.
- 외부 Provider, 저장소, AI 서비스가 무엇을 구현해야 하는지 계약을 제공합니다.

### `adapter/out/provider`

- Gmail, Outlook, Calendar 등 외부 SaaS 연동 기능을 모은 폴더입니다.
- 대표 메서드:
  - `InitialSync`
  - `IncrementalSync`
  - `Watch`
  - `ListMessages`
  - `GetMessage`
  - `GetMessageBody`
  - `Send`
  - `Reply`
  - `BatchModify`
  - `CreateUploadSession`
- 실제 업무 도구와 이어지는 외부 연동 기능은 대부분 여기서 구현됩니다.

### `adapter/out/persistence`

- PostgreSQL, MongoDB 등 저장소 접근을 담당하는 출력 어댑터입니다.
- 메일 저장, 문서 저장, Proposal 기록 같은 영속화 기능이 이 폴더에 들어갑니다.

### `adapter/out/realtime`

- SSE나 스트리밍 형태로 상태를 브로드캐스트하는 출력 어댑터입니다.
- 동기화 결과와 처리 상태를 프론트엔드로 밀어 주는 기능을 맡습니다.

### `adapter/out/messaging`

- 워커와 외부 메시징 계층을 잇는 폴더입니다.
- 이벤트 전달이나 비동기 처리 연결 기능을 담당합니다.

### `infra`, `config`, `pkg`, `migrations`

- `infra`, `config`: 환경 변수, 공통 설정, 외부 클라이언트 초기화
- `pkg`: 공용 유틸리티와 재사용 코드
- `migrations`: 데이터베이스 스키마 변경 이력
- 기능 폴더는 아니지만 서버를 운영 가능한 상태로 유지하는 기반 계층입니다.

## 이 페이지를 어떻게 써야 하나

- 제품 화면을 보고 싶으면 `worker_client/src/app -> widgets -> entities` 순서로 읽습니다.
- AI 처리 흐름을 보고 싶으면 `main.go -> internal/bootstrap -> adapter/in -> core -> adapter/out` 순서가 가장 빠릅니다.
- 비용 제어와 안전장치를 보고 싶으면 `core/service/classification`과 `core/agent`를 같이 보면 됩니다.

## 같이 보면 좋은 문서

- [Architecture](./architecture)
- [Proposal Safety](./proposal-safety)
- [Classification Pipeline](./classification-pipeline)
