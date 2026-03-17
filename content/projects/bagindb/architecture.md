---
title: BagInDB Architecture
tags:
  - portfolio
  - architecture
  - rust
---

BagInDB는 크기가 큰 백엔드가 아니라, 읽기 중심 장비 도메인을 별도 서비스로 떼어냈을 때 어떤 계층이 필요한지를 보여 주는 작은 서비스입니다. 그래서 이 프로젝트는 폴더 수보다 `요청이 어디를 거쳐 응답으로 나가는가`를 먼저 잡고 읽는 편이 맞습니다.

## 경계

- 외부 클라이언트는 브랜드, 카테고리, 제품 탐색 요청을 BagInDB로 보냅니다.
- BagInDB는 커뮤니티 로직을 갖지 않고, 장비 데이터 조회와 응답 최적화에 집중합니다.
- 핵심 관심사는 `탐색형 응답`, `JSONB 기반 스펙`, `캐시 적중 구간`입니다.

## 실행 구조

```text
BagInCoffee Client
  |
routes
  |
middleware
  |
handlers
  |
+-------------------+
| cache             |
| db                |
| models            |
+-------------------+
  |
PostgreSQL JSONB / Redis
```

- `routes/`는 외부 계약을 드러내는 URL 진입점입니다.
- `middleware/`는 인증과 공통 요청 처리를 묶는 경계입니다.
- `handlers/`는 실제 요청별 처리 흐름을 조립하는 계층입니다.
- `cache/`, `db/`, `models/`는 응답을 빠르게 만들기 위한 내부 하위 계층입니다.

## 루트 구조

```text
BagInDB/
├── src/
├── supabase/        # migration, seed, local config
├── docs/            # 보조 문서
├── DB_SCHEMA.md
├── DB_STRUCTURE.md
├── JSONB_FILTER_GUIDE.md
├── Cargo.toml
└── README.md
```

- `src/`는 실제 서버 코드입니다.
- `supabase/`는 데이터베이스 초기화와 마이그레이션 관리 축입니다.
- 루트의 여러 `.md` 문서는 이 프로젝트가 코드만 있는 서버가 아니라, 데이터 구조와 운영 기준까지 같이 남긴 실험이라는 점을 보여 줍니다.

## 소스 구조

```text
src/
├── main.rs          # 앱 부트스트랩
├── routes/          # 엔드포인트 라우팅
├── handlers/        # 요청별 처리 로직
├── middleware/      # 인증과 공통 요청 처리
├── cache/           # Redis 재사용 경로
├── db/              # PostgreSQL 접근과 조회 조합
└── models/          # 브랜드, 카테고리, 제품 응답 모델
```

- `main.rs`는 이 서비스가 어떤 저장소와 미들웨어를 묶어 실행되는지 보는 시작점입니다.
- `routes/`와 `handlers/`를 나눈 덕분에 URL 계약과 요청 처리 흐름이 분리됩니다.
- `db/`는 정규화된 테이블보다 `탐색형 조회 조합`을 읽는 위치에 가깝습니다.
- `models/`는 카테고리마다 달라지는 장비 스펙을 응답 친화적으로 표현하는 계층입니다.
- `cache/`가 따로 분리돼 있기 때문에, 이 서버는 처음부터 캐시를 보조가 아니라 핵심 경로로 다뤘다는 점이 드러납니다.

## 구조 의미

- `repository/`처럼 추상 이름보다 `handlers`, `db`, `cache`를 앞에 둔 구조는 실제 병목이 어디 있는지 더 직접적으로 보여 줍니다.
- `supabase/migrations/`가 루트에서 함께 관리되기 때문에, 데이터 모델 변경도 서비스 코드와 같이 읽게 됩니다.
- 장비 데이터가 커뮤니티 서비스 안의 부속 테이블이 아니라 독립 서비스로 취급된다는 점이 폴더 경계에서 바로 드러납니다.

## 읽기 순서

1. `README.md`와 `DB_STRUCTURE.md`로 이 서비스가 어떤 데이터 문제를 푸는지 먼저 봅니다.
2. `src/main.rs`에서 서버가 어떤 구성요소를 묶어 시작되는지 확인합니다.
3. `src/routes/`와 `src/handlers/`에서 API 표면과 요청 흐름을 따라갑니다.
4. `src/cache/`와 `src/db/`에서 캐시 적중 경로와 DB 조회 책임을 봅니다.
5. 스키마 변화와 실제 데이터 준비는 `supabase/migrations/`와 `seed.sql`에서 확인합니다.
