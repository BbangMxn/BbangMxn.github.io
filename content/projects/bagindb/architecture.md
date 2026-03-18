---
title: BagInDB Architecture
tags:
  - portfolio
  - architecture
  - rust
---

BagInDB는 큰 플랫폼을 잘게 쪼갠 마이크로서비스 묶음이 아닙니다. `BagInCoffee`에서 장비 도메인만 떼어낸 **도메인 분리형 단일 API 서비스**이고, 내부 구조는 `routes -> middleware -> handlers -> cache/db -> models`로 흐르는 **레이어드 아키텍처**에 가깝습니다.

## 어떤 아키텍처를 선택했는가

- **서비스 단위**: 장비 도메인을 위한 단일 배포 서비스
- **내부 구조**: Axum 기반 레이어드 API 아키텍처
- **운영 성격**: 읽기 중심 조회 API + Redis 캐시 앞단
- **아닌 것**: 풀 헥사고날 아키텍처, 다수 서비스로 쪼갠 마이크로서비스 군

BagInDB를 헥사고날이라고 부르기 어려운 이유는 `port`, `usecase`, `adapter` 같은 추상 계층보다 `routes`, `handlers`, `db`, `cache`가 직접적으로 드러나는 구조이기 때문입니다. 대신 장점은 요청이 어디서 들어와 어디서 끝나는지가 매우 직관적이라는 점입니다.

## 왜 이 구조를 택했는가

- 장비 도메인은 커뮤니티 서비스보다 **반복 조회**와 **필터 검색**이 더 중요했습니다.
- 그래서 먼저 `외부 계약(routes)`과 `요청 처리(handlers)`를 분리하고, 병목이 생기는 조회 구간을 `cache`와 `db`로 분리하는 편이 맞았습니다.
- 복잡한 추상화보다 `브랜드/카테고리/제품/가격` API를 빠르게 나누고, 캐시 무효화 지점을 명확하게 잡는 쪽이 이 프로젝트 목적에 더 맞았습니다.

## 마이크로서비스인가

엄밀히 말하면 **플랫폼 전체에서는 분리된 도메인 서비스**지만, BagInDB 저장소 자체는 **단일 서비스**입니다.

- 하나의 `main.rs`가 서버를 기동합니다.
- 하나의 라우터가 모든 엔드포인트를 조립합니다.
- PostgreSQL과 Redis를 직접 붙인 단일 런타임입니다.

즉 "여러 개의 작은 서비스"가 아니라, "장비 도메인만 분리한 하나의 서비스"로 읽는 편이 정확합니다.

## 실행 흐름

```text
BagInCoffee Client
  |
routes::create_routes()
  |
auth_middleware / admin_middleware
  |
brand_handler / product_handler / category_handler / pricing_handler
  |
+-----------------------------+
| CacheClient::get / set      |
| db::create_pool() -> sqlx   |
| models::* serialization     |
+-----------------------------+
  |
PostgreSQL JSONB / Redis
```

- 조회 요청은 보통 `handler -> cache -> db -> cache -> response` 순서로 흐릅니다.
- 변경 요청은 `handler -> db write -> cache delete_pattern` 흐름으로 무효화를 동반합니다.

## 루트 구조

```text
BagInDB/
├── src/
├── docs/
├── supabase/
│   ├── migrations/
│   └── seed.sql
├── README.md
├── DB_SCHEMA.md
├── DB_STRUCTURE.md
├── JSONB_FILTER_GUIDE.md
├── DEPLOYMENT.md
└── Cargo.toml
```

- `src/`는 런타임 코드입니다.
- `supabase/migrations/`는 스키마 변경 이력입니다.
- 루트 문서는 이 서비스가 코드만 있는 API가 아니라, DB 구조와 운영 기준까지 함께 남긴 프로젝트라는 점을 보여 줍니다.

## src 구조

```text
src/
├── main.rs
├── routes/
├── middleware/
├── handlers/
├── cache/
├── db/
└── models/
```

## 폴더별 책임과 대표 메서드

### `main.rs`

- 역할: 런타임 부트스트랩
- 대표 메서드:
  - `main()`
- 실제 책임:
  - `.env` 로드
  - `db::create_pool()`로 PostgreSQL 풀 생성
  - `CacheClient::new()`로 Redis 초기화
  - `flush_all()`로 기동 시 오래된 캐시 비우기
  - `routes::create_routes()`로 라우터 조립

### `routes/`

- 역할: 외부 HTTP 계약 조립
- 대표 메서드:
  - `create_routes(pool, cache)`
  - `inject_pool(...)`
  - `health_check()`
- 실제 책임:
  - 브랜드/카테고리/제품/가격 라우트를 한 Router에 연결
  - `PgPool`, `CacheClient`를 request extension으로 주입
  - 인증 미들웨어와 관리자 권한 미들웨어를 라우트 그룹에 부착

### `middleware/`

- 역할: 인증과 권한 경계
- 대표 메서드:
  - `auth_middleware(...)`
  - `admin_middleware(...)`
  - `moderator_middleware(...)`
  - `verify_supabase_token(...)`
- 실제 책임:
  - Supabase JWT 검증
  - 사용자 ID 추출
  - 관리자/모더레이터 권한 확인
  - 쓰기 API와 운영 API를 조회 API와 분리

### `handlers/brand_handler.rs`

- 역할: 브랜드 엔드포인트 조립
- 대표 메서드:
  - `apply_brand_filters(...)`
  - `list_brands(...)`
  - `get_brand(...)`
  - `create_brand(...)`
  - `update_brand(...)`
  - `delete_brand(...)`
- 실제 책임:
  - 쿼리 파라미터를 SQL 조건으로 변환
  - 목록/상세 조회
  - 관리자 권한이 필요한 쓰기 경로 처리

### `handlers/product_handler.rs`

- 역할: 제품 검색과 상세 조회의 중심
- 대표 메서드:
  - `apply_product_filters(...)`
  - `list_products(...)`
  - `get_product(...)`
  - `get_product_specs(...)`
  - `create_product(...)`
  - `update_product(...)`
  - `delete_product(...)`
- 실제 책임:
  - 필터 기반 목록 조회
  - JSONB 스펙 조회
  - 읽기 경로에서 캐시를 먼저 타고, 없으면 DB를 조회하는 패턴 유지

### `handlers/product_category_handler.rs`

- 역할: 카테고리 도메인 처리
- 대표 메서드:
  - `list_product_categories(...)`
  - `get_product_category(...)`
  - `create_product_category(...)`
  - `delete_product_category(...)`

### `handlers/product_pricing_handler.rs`

- 역할: 가격과 가격 이력 처리
- 대표 메서드:
  - `list_product_pricing(...)`
  - `get_product_pricing(...)`
  - `get_price_history_for_product(...)`
  - `get_current_pricing_for_product(...)`
  - `create_product_pricing(...)`
  - `update_product_pricing(...)`
  - `delete_product_pricing(...)`
- 실제 책임:
  - 현재 유효 가격과 가격 이력을 분리해 다룸
  - 제품 상세와 가격 조회를 따로 최적화

### `cache/`

- 역할: Redis 캐시 계층
- 대표 메서드:
  - `CacheClient::new(...)`
  - `CacheClient::get(...)`
  - `CacheClient::set(...)`
  - `CacheClient::delete(...)`
  - `CacheClient::delete_pattern(...)`
  - `CacheClient::flush_all(...)`
  - `keys::products_list(...)`, `keys::product(...)`, `keys::product_specs(...)`
- 실제 책임:
  - 캐시 직렬화/역직렬화
  - 목록/상세/스펙/가격 캐시 키 규격 고정
  - 변경 이후 패턴 기반 무효화

### `db/`

- 역할: PostgreSQL 연결과 조회 실행 기반
- 대표 메서드:
  - `create_pool()`
- 실제 책임:
  - `max_connections`, `min_connections`, `idle_timeout` 같은 풀 정책 관리
  - sqlx 기반 쿼리 실행을 위한 공통 연결점 제공

### `models/`

- 역할: DB 결과와 API 응답 구조 정의
- 대표 메서드:
  - `deserialize_optional_uuid(...)` 같은 serde 보조 함수
- 실제 책임:
  - `Brand`, `Product`, `ProductCategory`, `ProductPricing` 모델 정의
  - JSONB 스펙과 다국어 필드를 응답 친화적으로 유지

### `supabase/migrations/`

- 역할: 스키마와 운영 기준의 일부
- 실제 책임:
  - 초기 스키마
  - spec 테이블 추가
  - RLS 정책
  - 가격 정보 확장
  - 관리자 정책 반영

## 이 구조에서 중요한 포인트

1. BagInDB는 헥사고날 추상화보다 **요청 경로를 직접 읽게 만드는 구조**를 택했습니다.
2. 캐시는 보조가 아니라 `list/get/specs/pricing` 조회의 핵심 경로입니다.
3. `supabase/migrations/`가 같은 저장소 안에 있어 데이터 모델 변화도 아키텍처 일부로 읽을 수 있습니다.
4. 이 문서를 읽을 때는 “폴더가 예쁜가”보다 “요청이 어디를 지나며 어디서 무효화되는가”를 먼저 보는 편이 맞습니다.

## 읽기 순서

1. `main.rs`에서 서버 기동 순서를 봅니다.
2. `routes/mod.rs`에서 어떤 엔드포인트 그룹이 있는지 확인합니다.
3. `middleware/auth.rs`로 인증/권한 경계를 봅니다.
4. `product_handler.rs`와 `brand_handler.rs`로 핵심 조회 흐름을 봅니다.
5. `cache/mod.rs`와 `db/pool.rs`로 성능과 연결 정책을 확인합니다.
6. 마지막에 `supabase/migrations/`와 `DB_STRUCTURE.md`로 스키마 축을 봅니다.
