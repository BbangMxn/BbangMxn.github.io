---
title: Smart Factory Architecture
tags:
  - portfolio
  - architecture
  - iot
---

Smart Factory는 마이크로서비스나 헥사고날 구조를 전면에 둔 프로젝트가 아닙니다. 저장소 전체는 `research + smartpack`을 같이 둔 **연구형 우산 저장소**이고, 실제 구현체 `smartpack`은 `collector -> pipeline -> processor -> storage -> realtime -> alert -> api`로 이어지는 **파이프라인형 모듈 모놀리스**에 가깝습니다.

## 어떤 아키텍처를 선택했는가

- **저장소 단위**: 연구 문서 + 구현체를 같이 둔 우산 구조
- **구현체 단위**: 하나의 Go 서버
- **내부 구조**: 파이프라인형 모듈 분리
- **아닌 것**: 엄격한 헥사고날 구조, 독립 배포형 마이크로서비스 묶음

이 프로젝트를 헥사고날이라고 부르기 어려운 이유는 `port/in`, `port/out`, `adapter` 같은 인터페이스 중심 구조보다, 실제 시스템 블록인 `collector`, `processor`, `storage`, `realtime`, `alert`가 곧 폴더 이름으로 드러나기 때문입니다.

## 왜 이 구조를 택했는가

- 스마트 팩토리 문제는 CRUD보다 **수집 파이프라인**이 먼저입니다.
- 데이터가 `센서/PLC -> 프로토콜 수집 -> 배치/집계 -> 저장 -> 실시간 전송 -> 알림` 순서로 흐르기 때문에, 그 흐름을 그대로 폴더에 반영하는 편이 읽기 쉽습니다.
- 그래서 이 프로젝트는 추상 계층보다 **물리적 데이터 흐름**을 우선하는 구조를 택했습니다.

## 마이크로서비스인가

아닙니다. `smartpack/cmd/server/main.go` 하나가 전체 시스템을 기동합니다.

- `storage.NewRedisClient()`
- `storage.NewTimescaleDB()`
- `realtime.NewHub()`
- `collector.NewPipeline()`
- `alert.NewEngine()`
- `processor.NewOEECalculator()`
- `api.NewRouter()`

이 모두가 하나의 Go 런타임에서 조립됩니다. 따라서 Smart Factory는 "서비스 여러 개"가 아니라 "하나의 파이프라인 서버 안의 여러 모듈"입니다.

## 실행 구조

```text
PLC / Sensor
  |
MQTTClient / OPCUAClient
  |
Pipeline.Push()
  |
+-------------------------------+
| flushSensorBuffer()           |
| flushPowerBuffer()            |
| checkThresholds()             |
| publishToRedis()              |
+-------------------------------+
  |
TimescaleDB / Redis
  |
RedisSubscriber -> Hub.Broadcast()
  |
Dashboard / API / Alert Engine
```

## 루트 구조

```text
smartfactory/
├── research/
│   ├── planning/
│   ├── docs/
│   └── impl/
├── smartpack/
│   ├── cmd/
│   ├── internal/
│   ├── configs/
│   ├── deployments/
│   └── migrations/
└── README.md
```

- `research/`는 설계 근거입니다.
- `smartpack/`이 실제 백엔드 구현체입니다.
- `research/impl/`은 초기 프로토타입이고, `smartpack/`이 더 정리된 서버 구조입니다.

## `smartpack` 구조

```text
smartpack/
├── cmd/server/
├── internal/
│   ├── api/
│   ├── collector/
│   ├── processor/
│   ├── storage/
│   ├── realtime/
│   └── alert/
├── configs/
├── deployments/
├── migrations/
└── pkg/
```

## 폴더별 책임과 대표 메서드

### `cmd/server/main.go`

- 역할: 전체 시스템 조립
- 대표 메서드:
  - `main()`
- 실제 책임:
  - 설정 로드
  - Redis/TimescaleDB 연결
  - WebSocket Hub 기동
  - Redis Subscriber 기동
  - Data Pipeline 기동
  - Alert Engine, OEE Calculator, Aggregator, MQTT, OPC UA, API Router 초기화

### `internal/api/`

- 역할: 외부 HTTP/WebSocket 입구
- 대표 메서드:
  - `NewRouter(redis, db, mode)`
  - `setupRoutes()`
  - `Engine()`
- handler 대표 메서드:
  - `SensorHandler.List()`
  - `SensorHandler.Get()`
  - `SensorHandler.GetData()`
  - `SensorHandler.GetStats()`
- 실제 책임:
  - 대시보드와 외부 API가 보는 조회 입구
  - `/ws` WebSocket 업그레이드 연결

### `internal/collector/mqtt.go`

- 역할: MQTT 수집기
- 대표 메서드:
  - `NewMQTTClient(...)`
  - `Connect()`
  - `Start()`
  - `handleMessage(...)`
  - `Publish(...)`
  - `SubscribeDynamic(...)`
- 실제 책임:
  - MQTT 브로커 연결
  - 토픽 매핑 관리
  - 수신 메시지를 `Pipeline.Push()`용 DataPoint로 변환

### `internal/collector/opcua.go`

- 역할: OPC UA 수집기
- 대표 메서드:
  - `NewOPCUAClient(...)`
  - `Connect()`
  - `Start()`
  - `StartWithSubscription()`
  - `pollAll()`
  - `readNode(...)`
  - `processValue(...)`
  - `WriteNode(...)`
- 실제 책임:
  - PLC/장비 노드 읽기
  - polling과 subscription 두 방식 지원
  - 수집 값을 Pipeline에 전달

### `internal/collector/pipeline.go`

- 역할: 시스템의 핵심 데이터 버스
- 대표 메서드:
  - `NewPipeline(...)`
  - `Start()`
  - `Stop()`
  - `Push(dp)`
  - `processWorker()`
  - `flushWorker()`
  - `alertWorker()`
  - `checkThresholds(dp)`
  - `flushSensorBuffer()`
  - `flushPowerBuffer()`
  - `publishToRedis(dp)`
  - `GetAlertChannel()`
- 실제 책임:
  - 수집된 데이터를 버퍼링
  - 배치 flush
  - Redis publish
  - 임계치 검사
  - 알림 이벤트 생성

### `internal/processor/`

- 역할: 운영 지표 계산
- 대표 메서드:
  - `NewSensorAggregator(...)`
  - `Push(sensorID, value)`
  - `aggregateAll()`
  - `calculate(values)`
  - `NewProductionAggregator(...)`
  - `NewOEECalculator(...)`
  - `UpdateStatus(...)`
  - `UpdateProduction(...)`
  - `calculate(equipmentID)`
- 실제 책임:
  - 센서 집계
  - 생산 요약
  - OEE 계산
  - 계산 결과 Redis 반영

### `internal/storage/`

- 역할: 영속 저장과 캐시
- `timescale.go` 대표 메서드:
  - `NewTimescaleDB(...)`
  - `InsertSensorDataBatch(...)`
  - `InsertPowerDataBatch(...)`
  - `InsertAlarm(...)`
  - `GetHourlySensorStats(...)`
  - `GetDailyProduction(...)`
- `redis.go` 대표 메서드:
  - `NewRedisClient(...)`
  - `SetEquipmentStatus(...)`
  - `SetSensorValue(...)`
  - `Publish(...)`
  - `Subscribe(...)`
  - `PublishAlert(...)`
  - `SetCache(...)`
  - `GetCache(...)`
- 실제 책임:
  - TimescaleDB는 장기 시계열 저장
  - Redis는 최신 상태, pub/sub, 캐시

### `internal/realtime/`

- 역할: 실시간 전달 계층
- `hub.go` 대표 메서드:
  - `NewHub()`
  - `Run()`
  - `Broadcast(...)`
  - `BroadcastAlert(...)`
  - `HandleWebSocket(...)`
  - `Register(client)`
- `subscriber.go` 대표 메서드:
  - `NewRedisSubscriber(...)`
  - `AddChannels(...)`
  - `Start()`
  - `handleMessage(msg)`
  - `mapRedisToWebSocket(...)`
- 실제 책임:
  - Redis pub/sub 메시지를 WebSocket 브로드캐스트로 변환
  - 대시보드 실시간 업데이트

### `internal/alert/`

- 역할: 알림 엔진
- `engine.go` 대표 메서드:
  - `NewEngine(...)`
  - `AddRule(...)`
  - `AddNotifier(...)`
  - `Evaluate(...)`
  - `processAlert(...)`
  - `LoadRulesFromDB(...)`
- `notifier.go` 대표 메서드:
  - `NewWebhookNotifier(...)`
  - `NewSlackNotifier(...)`
  - `NewEmailNotifier(...)`
  - `Notify(alert)`
- 실제 책임:
  - 임계치 룰 평가
  - Slack, Email, Webhook 알림 발송

### `research/`

- 역할: 구현 이전의 설계 근거
- 실제 책임:
  - `planning/`: 산업 분석, 통신 표준, 시스템 설계
  - `docs/architecture/overview.md`: 전체 계층 아키텍처
  - `docs/protocols/MQTT.md`: 프로토콜 판단 근거
  - `impl/`: 초기 프로토타입 구현

## 이 구조에서 중요한 포인트

1. Smart Factory는 헥사고날보다 **파이프라인 중심 구조**가 더 정확합니다.
2. 핵심은 `collector -> pipeline -> processor -> storage -> realtime -> alert` 순서입니다.
3. `research`와 `smartpack`을 같이 두어 설계 근거와 구현이 분리되지 않습니다.
4. 따라서 이 프로젝트는 "구현 저장소"보다 "설계 근거가 붙은 백엔드 파이프라인 프로젝트"로 설명하는 편이 맞습니다.

## 읽기 순서

1. `research/docs/architecture/overview.md`로 전체 계층을 봅니다.
2. `smartpack/cmd/server/main.go`로 실제 조립 순서를 봅니다.
3. `internal/collector/pipeline.go`를 먼저 읽어 데이터 중심 경로를 잡습니다.
4. `internal/storage/`와 `internal/realtime/`로 저장과 실시간 전달을 봅니다.
5. 마지막에 `internal/alert/`와 `internal/processor/`를 읽어 운영 지표와 알림 흐름을 연결합니다.
