---
title: Smart Factory Folder Feature Map
tags:
  - portfolio
  - guide
  - iot
  - backend
---

Smart Factory는 연구 문서와 구현체가 같은 저장소에 있기 때문에, 폴더를 기능 축으로 읽는 편이 중요합니다. 이 문서는 "각 폴더가 연구인지 구현인지, 그리고 실제로 어떤 시스템 기능을 맡는지"를 정리합니다.

## 먼저 어디부터 볼까

1. `research/planning`: 어떤 문제를 상정했는지 먼저 봅니다.
2. `research/docs`: 구조와 프로토콜 판단 근거를 봅니다.
3. `smartpack/cmd/server`: 실행 진입점을 봅니다.
4. `smartpack/internal/collector`: 현장 데이터가 어떻게 들어오는지 봅니다.
5. `smartpack/internal/processor`, `storage`, `realtime`, `alert`: 처리와 운영 계층을 봅니다.

## 루트 폴더 기능

### `research`

- 산업 문제 정의와 구조 판단을 모은 연구 축입니다.
- 아직 코드를 열기 전이라도 어떤 프로토콜과 저장 전략을 가정했는지 이 폴더에서 먼저 볼 수 있습니다.

### `smartpack`

- 실제 Go 구현체입니다.
- 센서 수집, 배치 적재, 집계, 시계열 저장, 실시간 전송, 알림이 모두 이 폴더에서 동작합니다.

## `research` 폴더별 기능

### `planning`

- 프로젝트 범위와 산업 요구사항을 잡는 기획 문서 폴더입니다.
- `industry_analysis_2025.md`, `system_plan.md`, `communication_standards.md`, `recommended_standards.md`, `implementation_plan.md`가 들어 있습니다.
- 이 폴더는 "무엇을 만들 것인가"와 "왜 그 표준을 택하는가"를 설명합니다.

### `docs/architecture`

- 구조 개요 문서를 둡니다.
- `overview.md`에서 전체 시스템 그림을 압축해 볼 수 있습니다.

### `docs/protocols`

- MQTT 같은 통신 프로토콜 분석을 둡니다.
- 프로토콜을 구현 세부가 아니라 시스템 설계 판단으로 다루는 폴더입니다.

### `impl`

- 구현 스냅샷이나 초기 설계 기반 코드를 정리한 폴더입니다.
- `cmd`, `configs`, `internal`, `pkg`가 있어 연구와 실제 구현 사이의 중간 기록 역할을 합니다.

## `smartpack` 폴더별 기능

### `cmd/server`

- 서버 바이너리 진입점입니다.
- `main.go`가 전체 시스템을 올리고 `internal`의 모듈을 연결합니다.
- 시스템을 실행 가능한 단위로 보는 시작점입니다.

### `internal/api`

- 외부 API와 대시보드 조회 기능을 담당합니다.
- `router.go`의 `NewRouter`, `setupRoutes`, `Engine`이 전체 라우터를 조립합니다.
- `handlers`는 센서 상태, 히스토리, 통계 같은 조회 기능을 제공합니다.
  대표 메서드는 `List`, `Get`, `GetData`, `GetStats`입니다.
- `middleware`는 인증이나 요청 공통 처리 계층입니다.

### `internal/collector`

- 현장 데이터 수집의 핵심 폴더입니다.
- 하위 파일별 기능:
  - `mqtt.go`: MQTT broker 연결과 구독
    대표 메서드는 `NewMQTTClient`, `Connect`, `Start`, `handleMessage`, `Publish`, `SubscribeDynamic`입니다.
  - `opcua.go`: OPC UA 장비 연결과 폴링/구독
    대표 메서드는 `NewOPCUAClient`, `Connect`, `Start`, `StartWithSubscription`, `pollAll`, `readNode`, `processValue`, `WriteNode`입니다.
  - `pipeline.go`: 수집 데이터를 버퍼링하고 후속 계층으로 넘깁니다.
    대표 메서드는 `NewPipeline`, `Start`, `Stop`, `Push`, `processWorker`, `flushWorker`, `alertWorker`, `checkThresholds`, `flushSensorBuffer`, `flushPowerBuffer`, `publishToRedis`, `GetAlertChannel`입니다.
- 이 폴더는 공장 데이터가 시스템 안으로 들어오는 입구 전체입니다.

### `internal/processor`

- 수집된 데이터를 집계하고 KPI를 계산하는 폴더입니다.
- `aggregator.go`는 센서와 생산량 집계를 맡고, `oee.go`는 설비 종합 효율 계산을 맡습니다.
- 대표 메서드:
  - `NewSensorAggregator`, `Push`, `aggregateAll`, `calculate`
  - `NewOEECalculator`, `Start`, `Stop`, `UpdateStatus`, `UpdateProduction`, `calculate`
- 원시 데이터를 운영 지표로 바꾸는 기능이 이 폴더에 있습니다.

### `internal/storage`

- 시계열 DB와 캐시 저장소를 담당합니다.
- `timescale.go`는 배치 적재와 통계 조회를 맡습니다.
  대표 메서드는 `NewTimescaleDB`, `InsertSensorDataBatch`, `InsertPowerDataBatch`, `InsertAlarm`, `GetHourlySensorStats`, `GetDailyProduction`입니다.
- `redis.go`는 상태 캐시와 pub/sub를 맡습니다.
  대표 메서드는 `NewRedisClient`, `SetEquipmentStatus`, `SetSensorValue`, `Publish`, `Subscribe`, `PublishAlert`, `SetCache`, `GetCache`입니다.

### `internal/realtime`

- WebSocket 실시간 전송 계층입니다.
- `hub.go`는 연결된 클라이언트를 관리하고, `subscriber.go`는 Redis 메시지를 WebSocket 이벤트로 바꿉니다.
- 대표 메서드:
  - `NewHub`, `Run`, `Broadcast`, `BroadcastAlert`, `HandleWebSocket`, `Register`
  - `NewRedisSubscriber`, `AddChannels`, `Start`, `handleMessage`, `mapRedisToWebSocket`
- 대시보드가 실시간으로 갱신되는 기능은 이 폴더에서 완성됩니다.

### `internal/alert`

- 이상 상황 감지와 알림 전송 계층입니다.
- `engine.go`는 룰 평가, `notifier.go`는 전송 수단을 담당합니다.
- 대표 메서드:
  - `NewEngine`, `AddRule`, `AddNotifier`, `Evaluate`, `processAlert`, `LoadRulesFromDB`
  - `NewWebhookNotifier`, `NewSlackNotifier`, `NewEmailNotifier`, `Notify`
- 운영 관점에서 이 폴더는 "언제 사람에게 알려 줄 것인가"를 결정합니다.

### `deployments/docker`

- 컨테이너 실행과 배포 묶음을 관리합니다.
- 실제 기능을 구현하지는 않지만 연구 구조를 실행 환경으로 옮기는 마지막 폴더입니다.

## 이 페이지를 어떻게 써야 하나

- 설계 근거를 먼저 보려면 `research/planning -> research/docs -> smartpack` 순서로 읽습니다.
- 실행 흐름을 보려면 `cmd/server -> collector -> processor -> storage/realtime -> alert -> api` 순서가 가장 빠릅니다.
- 운영 경보와 실시간 대시보드를 보고 싶으면 `collector/pipeline -> storage/redis -> realtime -> alert`를 같이 보면 됩니다.

## 같이 보면 좋은 문서

- [Smart Factory 메인 페이지](./index)
- [Protocol Stack](./protocol-stack)
- [Timeseries Pipeline](./timeseries-pipeline)
