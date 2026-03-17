---
title: Start Here
tags:
  - portfolio
  - guide
  - iot
---

# Smart Factory 읽는 순서

Smart Factory는 구현 저장소이면서 동시에 연구 노트입니다. 그래서 코드를 읽기 전에 어떤 프로토콜과 저장 구조를 택했는지 먼저 보는 편이 맞습니다. 이 문서는 연구 문서와 구현체가 왜 한 저장소에 같이 있는지 설명하는 입구입니다.

## 먼저 볼 문서

1. [Smart Factory 메인 페이지](./index)
2. [Architecture](./architecture)
3. [Protocol Stack](./protocol-stack)
4. [Timeseries Pipeline](./timeseries-pipeline)

## 문서별 역할

### `index.md`

- 이 프로젝트가 기능 목록보다 설계 검토 프로젝트라는 점을 설명합니다.
- 어떤 문제를 어떤 구성으로 풀려 했는지 한 페이지에서 닫습니다.

### `architecture.md`

- `research`와 `smartpack`이 왜 분리되어 있는지, 구현체는 어떤 파이프라인 기준으로 읽어야 하는지 설명합니다.
- 연구 문서와 실제 코드 구조를 연결하는 저장소 입구 문서입니다.

### `protocol-stack.md`

- 수집 계층에서 어떤 프로토콜 조합을 가정했는지 설명합니다.
- OPC UA와 MQTT를 왜 함께 봤는지 읽는 문서입니다.

### `timeseries-pipeline.md`

- 수집 이후 데이터가 어떤 흐름으로 저장, 캐시, 실시간 전송되는지 설명합니다.
- TimescaleDB, Redis, WebSocket, Dashboard가 왜 같은 그림 안에 있어야 하는지 정리합니다.

## 개발 순서를 짧게 요약하면

1. 먼저 산업 문제와 요구사항을 분석했습니다.
2. 다음으로 통신 표준과 수집 전략을 비교했습니다.
3. 이후 시계열 적재와 실시간 전송 아키텍처를 설계했습니다.
4. 마지막에 이 흐름을 구현 구조와 배포 단위로 정리했습니다.

## 이 폴더를 읽고 얻어야 하는 결론

- Smart Factory의 강점은 운영 수치보다도 문제 범위를 구조적으로 잡아낸 데 있습니다.
- 연구와 구현을 분리하지 않은 이유는 설계 근거 자체가 구현만큼 중요했기 때문입니다.
- 따라서 이 폴더는 코드보다 판단 기준을 먼저 보여 주는 문서 집합으로 읽어야 합니다.
- 코드까지 내려가려면 [Architecture](./architecture)에서 `research -> smartpack` 순서를 먼저 잡는 편이 좋습니다.
