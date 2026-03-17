---
title: Smart Factory Architecture
tags:
  - portfolio
  - architecture
  - iot
---

Smart Factory는 구현 저장소 하나만 읽는 프로젝트가 아니라, `왜 이런 시스템을 택했는가`를 설명하는 연구 폴더와 `그 판단을 코드로 옮긴 구현 폴더`가 같이 있는 프로젝트입니다. 그래서 이 저장소는 먼저 `연구`, 그 다음 `구현` 순서로 읽는 편이 맞습니다.

## 개요

- `research/`는 문제 정의와 프로토콜 선택 근거를 남깁니다.
- `smartpack/`은 실제 수집, 적재, 실시간 전송 흐름을 구현합니다.
- 즉 이 프로젝트는 코드베이스 하나보다 `설계 근거 + 구현 구조`를 한 저장소에 같이 둔 형태입니다.

## 실행 구조

```text
PLC / Sensor
  |
OPC UA / MQTT Collector
  |
Pipeline / Processor
  |
TimescaleDB ------ Redis
  |                |
  +------ API / Realtime Hub
                   |
             Dashboard / Alert
```

- 수집 계층은 프로토콜 다양성을 감당합니다.
- 처리 계층은 데이터를 정규화하고 OEE 같은 운영 지표를 계산합니다.
- 저장 계층은 `TimescaleDB = 장기 시계열`, `Redis = 빠른 상태/캐시`로 역할이 나뉩니다.
- 이후 결과는 API, WebSocket, Alert 엔진으로 전달됩니다.

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
│   ├── migrations/
│   └── pkg/
└── README.md
```

- `research/planning/`은 산업 분석, 통신 표준 비교, 시스템 계획 문서가 있는 곳입니다.
- `research/docs/`는 아키텍처와 프로토콜 관련 보조 문서입니다.
- `research/impl/`은 초기 프로토타입 구현 축입니다.
- `smartpack/`은 실제 서비스 구조를 더 또렷하게 보여 주는 구현체입니다.

## 연구 폴더

```text
research/
├── planning/        # industry_analysis, system_plan, implementation_plan
├── docs/
│   ├── architecture/
│   └── protocols/
└── impl/            # 초기 Go 프로토타입
```

- Smart Factory는 구현보다도 `어떤 표준과 저장 구조를 택할 것인가`가 먼저였기 때문에 연구 폴더가 중요합니다.
- `planning/`을 읽으면 왜 다중 프로토콜과 시계열 저장을 같이 봤는지 이해할 수 있습니다.
- `docs/architecture`와 `docs/protocols`는 연구 근거를 구현과 분리해 보존하는 역할을 합니다.

## 구현 폴더

```text
smartpack/
├── cmd/server/      # 서버 엔트리포인트
├── internal/
│   ├── collector/   # mqtt.go, opcua.go, pipeline.go
│   ├── processor/   # aggregator.go, oee.go
│   ├── storage/     # timescale.go, redis.go
│   ├── realtime/    # hub.go, subscriber.go
│   ├── api/         # router, handlers, middleware
│   └── alert/       # engine.go, notifier.go
├── configs/
├── deployments/
└── migrations/
```

- `collector/`는 현장 데이터 입력 계층입니다.
- `processor/`는 입력된 값을 운영 지표로 바꾸는 계산 계층입니다.
- `storage/`는 시계열 저장과 캐시를 역할별로 나눕니다.
- `realtime/`은 최신 상태를 빠르게 흘려보내는 경로입니다.
- `api/`와 `alert/`는 운영자에게 결과를 전달하는 출력 계층입니다.

## 구조 의미

- 이 프로젝트는 처음부터 CRUD 서버가 아니라 `수집 -> 처리 -> 저장 -> 전송` 파이프라인으로 조직돼 있습니다.
- 연구 폴더와 구현 폴더를 같이 둔 덕분에, 아키텍처 선택 근거가 코드에서 분리되지 않습니다.
- `internal/` 하위 모듈 이름이 곧 시스템 블록 이름이어서, 저장소 구조만 봐도 전체 데이터 흐름을 재구성할 수 있습니다.

## 읽기 순서

1. 루트 `README.md`로 전체 문제 범위를 먼저 잡습니다.
2. `research/planning/system_plan.md`와 `communication_standards.md`로 설계 근거를 봅니다.
3. `smartpack/cmd/server/`에서 실제 서버 진입을 확인합니다.
4. `smartpack/internal/collector -> processor -> storage -> realtime` 순서로 파이프라인을 따라갑니다.
5. 마지막에 `api/`와 `alert/`를 보면서 운영자에게 어떻게 드러나는지 확인합니다.
