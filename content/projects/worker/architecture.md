---
title: Architecture
tags:
  - portfolio
  - architecture
  - ai-agent
---

# Worker Architecture

Worker는 프론트엔드와 백엔드가 분리된 정도가 아니라, 백엔드 안에서도 `API 프로세스`와 `Worker 프로세스`가 나뉘고, 그 안에 `AI Agent`, `분류 파이프라인`, `외부 동기화`, `여러 저장소`가 함께 들어 있는 복합 구조입니다. 그래서 이 프로젝트는 먼저 큰 프로세스 경계를 잡고, 그다음 폴더를 읽는 편이 맞습니다.

## 가장 먼저 잡아야 하는 세 층

- `worker_client/`는 업무 워크스페이스 UI입니다.
- `worker_server/`는 Go 기반 헥사고날 백엔드입니다.
- `docs/`는 이 구조가 왜 이렇게 나뉘었는지 설명하는 설계 문서입니다.

## 실행 아키텍처

```text
Next.js Workspace
  |
HTTP / SSE
  |
API Mode (Fiber)
  |
Core Service / AI Agent
  |
+------------------------------+
| PostgreSQL / MongoDB / Redis |
| Neo4j / Gmail / Calendar     |
| OpenAI / pgvector            |
+------------------------------+
  |
Redis Streams
  |
Worker Mode
  |
Sync / Classification / Proposal execution support
```

- API 모드는 사용자 요청, SSE, Webhook을 처리합니다.
- Worker 모드는 Redis Stream 기반 비동기 작업과 스케줄링을 맡습니다.
- AI Agent는 읽기 작업과 쓰기 작업을 구분하고, 쓰기 작업은 Proposal로 한 번 더 멈춥니다.
- 이 구조 덕분에 Worker는 단순 메일 앱이 아니라 `실행 안전장치를 가진 업무 자동화 서버`가 됩니다.

## 루트 폴더 역할

```text
worker/
├── docs/             # ARCHITECTURE, DATABASE, DEPLOYMENT, ROADMAP
├── worker_client/    # Next.js 14 frontend
├── worker_server/    # Go backend
└── README.md
```

- 루트에서는 `문서 -> 서버 -> 클라이언트` 순서로 읽는 편이 좋습니다.
- 이 프로젝트는 기능이 많아서 코드부터 들어가면 길을 잃기 쉽기 때문입니다.

## 프론트엔드는 워크스페이스 UI 계층으로 읽습니다

```text
worker_client/src/
├── app/              # App Router, auth/workspace routes
├── widgets/          # email-list, compose, command-palette, sidebar
├── entities/         # email, calendar, contact, document
├── shared/           # ui, hooks, config, types
└── lib/supabase/     # auth/session helper
```

- `app/`은 로그인과 워크스페이스 라우팅 진입입니다.
- `widgets/`는 실제 화면 단위 조합입니다.
- `entities/`는 이메일, 일정, 연락처 같은 도메인 표현 계층입니다.
- `shared/`는 공통 UI와 타입을 모아, `app -> widgets -> entities -> shared` 방향으로 읽게 만듭니다.

## 백엔드는 프로세스 경계와 헥사고날 계층을 같이 봐야 합니다

```text
worker_server/
├── main.go
├── internal/bootstrap/
├── adapter/{in,out}
├── core/
│   ├── agent/
│   ├── domain/
│   ├── port/
│   └── service/
├── infra/
├── migrations/
├── pkg/
└── document/
```

- `main.go`는 `api`, `worker`, `all` 모드 진입점입니다.
- `internal/bootstrap/`은 모든 의존성을 수동으로 조립하는 조립 공장 역할을 합니다.
- `adapter/in`은 HTTP와 worker processor 같은 입력 경계입니다.
- `adapter/out`은 DB, 외부 API, 메시징 같은 출력 경계입니다.
- `core/`는 이 프로젝트의 실제 제품 판단이 있는 곳입니다.

## `core/` 안에서 중요한 폴더

```text
core/
├── agent/            # orchestrator, llm, rag, tools, session
├── domain/           # email, contact, calendar, sync, profile 등 도메인 모델
├── port/
│   ├── in/           # use case 인터페이스
│   └── out/          # repository/provider 인터페이스
└── service/
    ├── classification/
    ├── email/
    ├── auth/
    ├── search/
    ├── todo/
    └── common/
```

- `agent/`는 자연어 요청을 해석하고 tool 호출과 proposal을 조율하는 중심부입니다.
- `service/classification/`은 RFC 규칙과 LLM fallback을 묶은 7단계 분류 파이프라인 핵심입니다.
- `domain/`은 이메일, 일정, 동기화 상태 같은 업무 엔티티를 정의합니다.
- `port/` 분리가 뚜렷해서, Worker는 외부 연동이 많아도 코어 의존성을 비교적 분명하게 유지하려고 했다는 점이 보입니다.

## 이 구조가 남긴 장점과 한계

- 장점은 AI Agent, Gmail 동기화, 분류, RAG personalization을 서로 다른 계층으로 나눠 설명할 수 있다는 점입니다.
- 한계는 PostgreSQL, MongoDB, Redis, Neo4j까지 넓어진 저장소 구성이 개인 프로젝트 기준으로 과했다는 점입니다.
- 그래서 이 프로젝트는 `복잡한 구조를 구현한 경험`과 `그 구조를 다시 줄이려는 판단`을 함께 보여 줍니다.

## 코드를 읽는 추천 순서

1. `docs/ARCHITECTURE.md`로 프로세스와 포트/어댑터 구조를 먼저 잡습니다.
2. `worker_server/main.go`와 `internal/bootstrap/`으로 실행 모드와 조립 순서를 확인합니다.
3. `core/agent/`에서 Proposal, tool registry, session 흐름을 읽습니다.
4. `core/service/classification/`과 `document/MAIL_SYNC.md`로 실제 자동화 경로를 봅니다.
5. 마지막에 `worker_client/src/app/(workspace)/`와 `widgets/`를 보며 UI가 어떤 서버 흐름을 받는지 연결합니다.
