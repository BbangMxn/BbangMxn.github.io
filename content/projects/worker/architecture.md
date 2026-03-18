---
title: Worker Architecture
tags:
  - portfolio
  - architecture
  - ai-agent
---

Worker는 마이크로서비스 묶음이 아닙니다. `worker_server` 하나를 중심으로 `api` 모드와 `worker` 모드를 나눈 **모듈러 모놀리스**이고, 내부 코드는 `adapter -> port -> core -> port -> adapter`로 흐르는 **헥사고날 아키텍처**를 분명하게 채택하고 있습니다.

## 어떤 아키텍처를 선택했는가

- **서비스 단위**: 하나의 백엔드 애플리케이션
- **런타임 구조**: `api`, `worker`, `all` 모드로 나뉜 듀얼 프로세스
- **내부 구조**: Ports & Adapters 기반 헥사고날 아키텍처
- **아닌 것**: 독립 배포 단위를 여러 개로 나눈 마이크로서비스

`docs/ARCHITECTURE.md`도 직접 `Hexagonal Architecture (Ports & Adapters)`라고 선언하고 있고, 실제 코드도 `core/domain`, `core/service`, `core/port`, `adapter/in`, `adapter/out` 구조를 그대로 따릅니다.

## 왜 마이크로서비스가 아닌가

- `main.go` 하나가 모든 모드를 기동합니다.
- `--mode=all`이면 같은 프로세스 집합에서 API와 Worker를 함께 실행할 수 있습니다.
- `internal/bootstrap`에서 모든 의존성을 한 번에 조립합니다.
- `worker_server` 내부의 도메인 모델과 서비스가 모든 입구/출구 어댑터에 공유됩니다.

즉 프로세스는 분리됐지만, **배포 단위와 코어는 하나**입니다. 그래서 Worker를 "헥사고날 모듈러 모놀리스"라고 부르는 편이 가장 정확합니다.

## 왜 이 구조를 택했는가

- 이메일, 캘린더, 연락처, AI Agent, 동기화, 분류, 제안 확인이 모두 한 도메인 안에서 강하게 연결돼 있습니다.
- 그러나 HTTP 요청 처리와 Redis Stream 비동기 작업은 실행 모델이 달라 분리할 필요가 있었습니다.
- 그래서 코어 도메인은 하나로 유지하고, `adapter/in/http`와 `adapter/in/worker`를 나눈 구조가 적합했습니다.

## 실행 구조

```text
main.go
  |
  +-- runAPI() ----------------------------+
  |                                        |
  |                                bootstrap.NewAPI()
  |                                        |
  |                                adapter/in/http/*
  |                                        |
  |                                core/service + core/agent
  |                                        |
  |                         adapter/out/persistence/provider/realtime
  |
  +-- runWorker() -------------------------+
                                           |
                                   bootstrap.NewWorker()
                                           |
                                   adapter/in/worker/*
                                           |
                                   core/service/classification
                                           |
                                   adapter/out/messaging/provider
```

## 루트 구조

```text
worker/
├── docs/
├── worker_client/
├── worker_server/
└── README.md
```

- `worker_client`는 워크스페이스 UI입니다.
- `worker_server`가 실제 아키텍처 중심입니다.
- `docs/ARCHITECTURE.md`, `document/MAIL_SYNC.md`, `document/REALTIME_PUSH.md` 같은 문서가 구조 설명을 보강합니다.

## `worker_server` 구조

```text
worker_server/
├── main.go
├── internal/bootstrap/
├── adapter/
│   ├── in/{http,worker}
│   └── out/{persistence,provider,messaging,realtime,graph,mongodb}
├── core/
│   ├── agent/
│   ├── domain/
│   ├── port/{in,out}
│   └── service/
├── infra/
├── migrations/
├── pkg/
└── document/
```

## 폴더별 책임과 대표 메서드

### `main.go`

- 역할: 실행 모드 진입점
- 대표 메서드:
  - `main()`
  - `runAPI(cfg)`
  - `runWorker(cfg)`
- 실제 책임:
  - `--mode=api|worker|all` 분기
  - graceful shutdown
  - API와 Worker의 생명주기 관리

### `internal/bootstrap/`

- 역할: 수동 DI와 런타임 조립
- 대표 메서드:
  - `NewAPI(cfg)`
  - `NewWorker(cfg)`
  - `Worker.Start()`
  - `Worker.Stop()`
  - `Worker.Submit(...)`
- 실제 책임:
  - DB, Redis, MongoDB, Neo4j, Provider, LLM, Service, Handler를 순서대로 조립
  - API 서버와 Worker 풀을 각각 초기화

### `adapter/in/http/`

- 역할: HTTP 입구
- 대표 메서드:
  - `NewMailHandler(...)`
  - `Register(app)`
  - `ListEmails(c)`
  - `GetEmail(c)`
  - `SearchEmails(c)`
  - `SendEmail(c)`
  - `ReplyEmail(c)`
  - `TriggerSync(c)`
- 실제 책임:
  - REST/SSE/Webhook 요청을 Fiber handler로 수신
  - 요청을 core use case 호출로 변환
  - 입력 파라미터와 응답 포맷 정리

### `adapter/in/worker/`

- 역할: 비동기 작업 입구
- 대표 메서드:
  - `NewHandler(...)`
  - `Process(ctx, msg)`
  - `ParsePayload[T](msg)`
- 실제 책임:
  - Redis Stream 메시지 역직렬화
  - 동기화, 분류, RAG, webhook 후속 작업을 코어 서비스로 전달

### `core/agent/`

- 역할: AI Agent 코어
- 대표 메서드:
  - `NewOrchestrator(...)`
  - `Process(ctx, req)`
  - `ConfirmProposal(ctx, userID, proposalID)`
  - `RejectProposal(ctx, userID, proposalID)`
  - `detectIntent(...)`
  - `gatherContext(...)`
  - `generateResponse(...)`
  - `executeProposal(...)`
- 실제 책임:
  - 자연어 요청 해석
  - 읽기/쓰기 작업 분기
  - Proposal 안전장치 유지
  - Tool registry와 RAG 컨텍스트 조합

### `core/service/classification/`

- 역할: 이메일 분류 파이프라인
- 대표 메서드:
  - `NewPipeline(...)`
  - `Classify(ctx, input)`
  - `ClassifyLegacy(...)`
  - `classifyByDomain(...)`
  - `classifyByLLMWithUserRules(...)`
  - `UpdateSenderProfile(...)`
- 실제 책임:
  - RFC 규칙, 도메인 규칙, 사용자 규칙, LLM fallback을 단계적으로 적용
  - LLM 호출을 마지막 단계로 미루는 7단계 파이프라인 유지

### `core/port/`

- 역할: 코어가 보는 인터페이스
- 실제 책임:
  - `port/in`은 `EmailUseCase`, `CalendarUseCase`, `AIUseCase` 같은 유스케이스 계약
  - `port/out`은 `EmailRepositoryPort`, `EmailProviderPort`, `MessageQueuePort`, `CachePort`, `SSEPort` 같은 외부 계약

### `adapter/out/provider/`

- 역할: Gmail/Outlook/Calendar 외부 연동
- 대표 메서드:
  - `InitialSync(...)`
  - `IncrementalSync(...)`
  - `Watch(...)`
  - `GetMessage(...)`
  - `GetMessageBody(...)`
  - `ListMessages(...)`
  - `Send(...)`
  - `Reply(...)`
  - `BatchModify(...)`
  - `CreateUploadSession(...)`
- 실제 책임:
  - 외부 메일/캘린더 API 호출
  - OAuth 토큰 사용
  - watch 갱신과 delta sync 연결

### `adapter/out/persistence/`, `mongodb/`, `graph/`, `messaging/`, `realtime/`

- 역할: 코어의 출구 어댑터
- 실제 책임:
  - PostgreSQL: 메일/설정/분류/동기화 상태 저장
  - MongoDB: 메일 본문/리포트 저장
  - Neo4j: 개인화/관계 그래프 저장
  - Redis Stream: 비동기 메시지 생산/소비
  - SSE: 클라이언트 실시간 이벤트 브로드캐스트

### `infra/`, `pkg/`, `migrations/`, `document/`

- 역할: 횡단 관심사와 운영 축
- 실제 책임:
  - `infra/middleware`: 인증, 감사, 검증, rate limit
  - `pkg/`: logger, redis cache, circuit breaker, metrics 같은 공통 기술 모듈
  - `migrations/`: 스키마 진화
  - `document/`: 메일 동기화, 실시간 푸시, worker pool 구조 설명

## 이 구조에서 핵심 판단

1. Worker는 **헥사고날 구조를 실제로 선택한 프로젝트**입니다.
2. 그러나 배포 단위는 하나라서 **마이크로서비스가 아니라 모듈러 모놀리스**입니다.
3. `api mode`와 `worker mode`를 나눠 **동기 요청**과 **비동기 작업**을 분리했습니다.
4. Proposal, classification, sync, provider adapter가 각각 분리되어 있어 **AI 자동화 안전장치**를 폴더 구조만으로도 읽을 수 있습니다.

## 읽기 순서

1. `docs/ARCHITECTURE.md`로 큰 틀을 잡습니다.
2. `main.go`에서 `api/worker/all` 모드를 확인합니다.
3. `internal/bootstrap/`으로 의존성 조립 순서를 봅니다.
4. `core/agent/worker_orchestrator.go`에서 AI 제안 흐름을 봅니다.
5. `core/service/classification/worker_classification_pipeline.go`에서 분류 파이프라인을 봅니다.
6. `adapter/in/http/worker_email_handler.go`와 `adapter/out/provider/worker_gmail_adapter.go`를 연결해서 실제 요청-외부연동 경로를 확인합니다.
