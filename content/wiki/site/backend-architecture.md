---
title: 백엔드 아키텍처 기준
tags:
  - wiki
  - architecture
  - backend
  - portfolio
cssclasses:
  - research-note
---

이 포트폴리오가 백엔드 포트폴리오로 읽히려면, 프로젝트 메인 페이지에 기술 스택이 많은 것만으로는 부족합니다. 각 백엔드 프로젝트가 `어떤 경계를 분리했고`, `요청과 작업이 어디를 지나며`, `저장소와 외부 연동을 어떻게 나눴는지`가 문서와 폴더 구조에서 같이 보여야 합니다.

## 왜 더 자세해야 하는가

- 프론트엔드 프로젝트는 화면 증거만으로도 어느 정도 전달되지만, 백엔드 프로젝트는 실행 화면만으로 구조 판단이 잘 드러나지 않습니다.
- 그래서 백엔드 문서는 최소한 `시스템 경계`, `요청 흐름`, `비동기 흐름`, `저장소 분리`, `운영 문서 축`까지 같이 보여줘야 합니다.
- 현재 포트폴리오에서 이 역할을 맡는 대표 프로젝트는 [BagInDB](../../projects/bagindb), [Worker](../../projects/worker), [Nazgul](../../projects/nazgul), [Smart Factory](../../projects/smartfactory)입니다.

## 공통으로 보여줘야 하는 6개 층

### 1. 시스템 경계

- 이 백엔드가 어떤 상위 제품에서 왜 분리됐는지 먼저 보여줘야 합니다.
- 예시는 BagInDB의 `커뮤니티와 장비 도메인 분리`, Worker의 `업무 UI와 실행 서버 분리`, Nazgul의 `제품 입력과 RAG 서버 분리`, Smart Factory의 `연구와 구현 분리`입니다.
- 독자는 이 단계에서 이미 "왜 이 서버가 존재하는가"를 이해해야 합니다.

### 2. 입력 경계

- HTTP, SSE, Webhook, Collector, Queue Consumer처럼 시스템에 들어오는 입구를 먼저 보여줘야 합니다.
- 예시는 BagInDB의 `routes -> middleware`, Worker의 `adapter/in + api mode`, Nazgul의 `rag.adapter.in.web`, Smart Factory의 `collector`입니다.
- 백엔드 문서에서 입력 경계가 빠지면 폴더 이름이 있어도 실제 요청 흐름이 잘 읽히지 않습니다.

### 3. 코어 계층

- 서비스, 유스케이스, 도메인, 에이전트, 파이프라인처럼 실제 판단이 있는 계층을 따로 보여줘야 합니다.
- Worker는 `core/agent`, `core/service`, `domain`, `port`가 중심이고, Nazgul은 `application/service`, `domain`, `adapter` 분리가 핵심입니다.
- BagInDB처럼 작은 서비스라도 `handlers`, `db`, `cache`, `models` 중 어디가 조립 계층이고 어디가 데이터 계층인지 분명해야 합니다.

### 4. 저장소와 외부 연동

- DB, cache, index, AI provider, third-party API를 같은 블록으로 뭉개지 말고 역할별로 나눠서 적어야 합니다.
- Worker는 PostgreSQL, MongoDB, Redis, Neo4j, Gmail, Calendar, OpenAI를 함께 다루므로 저장소와 외부 연동 분리가 특히 중요합니다.
- Nazgul은 `adapter/out/{persistence,index,ai}`, Smart Factory는 `TimescaleDB`, `Redis`, `WebSocket`, `Alert` 분리가 구조를 설명하는 핵심입니다.

### 5. 비동기와 실시간 경로

- 백엔드는 동기 요청만으로 설명되지 않는 경우가 많기 때문에, 비동기 경로를 별도 구조로 드러내야 합니다.
- Worker는 `Redis Streams -> Worker Mode`, Smart Factory는 `collector -> processor -> realtime`, Nazgul은 `trace` 생성과 실험 파이프라인이 여기에 해당합니다.
- 이 축이 빠지면 서버가 단순 CRUD처럼 과소 설명됩니다.

### 6. 운영 문서와 스키마 축

- 마이그레이션, 배포 문서, 스키마 문서, 실험 스크립트는 백엔드 프로젝트에서 코어 못지않게 중요합니다.
- BagInDB의 `supabase/migrations`, Worker의 `migrations`와 `document/`, Nazgul의 `application-sqlite.yml`과 `db/migration/`, Smart Factory의 `research/planning`과 `deployments/`가 이 역할을 맡습니다.
- 백엔드 포트폴리오에서는 "코드만 있다"보다 "운영 기준까지 남겼다"가 훨씬 설명력이 큽니다.

## 현재 프로젝트별 매핑

| 프로젝트      | 입력 경계                     | 코어 계층                                 | 저장/외부 연동                                   | 비동기/실시간               |
| ------------- | ----------------------------- | ----------------------------------------- | ------------------------------------------------ | --------------------------- |
| BagInDB       | `routes`, `middleware`        | `handlers`, `db`, `models`                | PostgreSQL JSONB, Redis                          | 캐시 적중 경로              |
| Worker        | `adapter/in`, `api mode`, SSE | `core/agent`, `service`, `domain`, `port` | PostgreSQL, MongoDB, Redis, Neo4j, Gmail, OpenAI | Redis Streams, worker mode  |
| Nazgul        | `adapter/in/web`              | `application/service`, `domain`           | persistence, index, AI                           | trace 생성, 실험 파이프라인 |
| Smart Factory | `collector`, `api`            | `processor`, `pipeline`, `alert`          | TimescaleDB, Redis                               | realtime hub, alert flow    |

## 문서 배치 기준

### 메인 페이지 `index.md`

- 문제 재정의, 핵심 판단, 실제 검증 범위를 요약합니다.
- 백엔드 프로젝트라도 메인 페이지는 저장소 설명보다 "왜 이 구조를 택했는가"를 먼저 말해야 합니다.

### 메인 페이지 `index.md`의 아키텍처 섹션

- 별도 `architecture.md`를 두지 않고, 메인 페이지 안에서 구조 선택과 실행 흐름을 먼저 보여 줍니다.
- 백엔드 프로젝트라면 반드시 `요청이 어디서 들어와 어디서 끝나는가`, `왜 이 구조를 택했는가`, `핵심 경계가 무엇인가`를 메인 페이지에서 바로 보여 줘야 합니다.

### 보조 상세 문서

- API가 핵심이면 `api-surface.md`
- 캐시가 핵심이면 `cache-strategy.md`
- 분류/제안 같은 파이프라인이 핵심이면 `classification-pipeline.md`, `proposal-safety.md`
- 검색 흐름이 핵심이면 `retrieval-map.md`, `technical-design.md`
- 수집/시계열 경로가 핵심이면 `protocol-stack.md`, `timeseries-pipeline.md`

현재 저장소는 이미 이 패턴을 부분적으로 갖고 있고, 이제는 그것을 더 의식적으로 유지하면 됩니다.

## 백엔드 프로젝트 폴더 문서 규격

```text
content/projects/<backend-project>/
├── index.md
├── start-here.md
├── image/
├── folder-feature-map.md       # 폴더 기능이 핵심일 때
├── api-surface.md            # API 계약이 핵심일 때
├── cache-strategy.md         # 캐시/성능이 핵심일 때
├── classification-pipeline.md
├── proposal-safety.md
├── retrieval-map.md
├── technical-design.md
├── protocol-stack.md
└── timeseries-pipeline.md
```

- 모든 프로젝트가 이 파일을 다 가질 필요는 없습니다.
- 대신 "어떤 판단 축이 이 프로젝트의 핵심인가"에 맞춰 2~4개 정도의 보조 문서를 유지하는 편이 좋습니다.
- 프로젝트 메인 페이지에서 그 보조 문서로 내려가는 링크가 있어야 백엔드 깊이가 드러납니다.

## 이 사이트에서 특히 더 보강해야 하는 포인트

1. Worker와 BagInDB처럼 서버가 중심인 프로젝트는 메인 허브에서도 백엔드 층을 한 번 더 선명하게 드러내야 합니다.
2. Nazgul은 검색 실험이 핵심이므로 `server/rag`의 입구, 코어, trace 계층을 계속 강조하는 편이 맞습니다.
3. Smart Factory는 연구형 구조지만, 실제 백엔드 파이프라인인 `collector -> processor -> storage -> realtime -> alert`를 더 전면에 둬야 합니다.
4. 앞으로 새 백엔드 프로젝트를 추가할 때는 `index(아키텍처 포함) -> start-here -> 핵심 파이프라인 문서` 구성을 기본값으로 삼는 편이 좋습니다.

## 추천 읽기 순서

1. [BagInDB](../../projects/bagindb) 메인 페이지의 아키텍처 섹션으로 작은 읽기 중심 API 구조를 봅니다.
2. [Worker](../../projects/worker) 메인 페이지의 아키텍처 섹션으로 프로세스 분리와 헥사고날 구조를 봅니다.
3. [Nazgul](../../projects/nazgul) 메인 페이지의 아키텍처 섹션으로 RAG 서버 모듈 분리를 봅니다.
4. [Smart Factory](../../projects/smartfactory) 메인 페이지의 아키텍처 섹션으로 파이프라인형 백엔드 구조를 봅니다.
5. 그 다음 이 문서를 기준으로 각 프로젝트 메인 페이지가 어느 정도까지 백엔드 포트폴리오로 읽히는지 다시 점검하면 됩니다.
