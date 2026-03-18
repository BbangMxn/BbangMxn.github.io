---
title: BagInDB Folder Feature Map
tags:
  - portfolio
  - guide
  - backend
  - rust
---

BagInDB를 아키텍처 관점이 아니라 기능 관점으로 읽고 싶을 때 보는 문서입니다. 이 페이지는 "이 폴더를 열면 어떤 기능이 나오고, 어디서부터 읽어야 하는가"를 정리합니다.

## 먼저 어디부터 볼까

1. `src/main.rs`: 서버가 어떤 의존성을 올리고 어떤 라우트를 붙이는지 봅니다.
2. `src/routes`: 외부에 노출되는 HTTP 계약을 먼저 확인합니다.
3. `src/handlers`: 브랜드, 카테고리, 제품, 가격 기능이 실제로 구현되는 곳입니다.
4. `src/cache`, `src/db`, `src/models`: 응답 최적화와 데이터 형태를 봅니다.
5. `supabase`: 로컬 스키마와 시드 데이터를 확인합니다.
6. `docs`: 운영과 배포 설명을 봅니다.

## 루트 폴더 기능

### `src`

- 실제 API 서버 코드가 들어 있는 런타임 폴더입니다.
- 사용자 기능 기준으로 보면 이 폴더가 곧 BagInDB 제품 자체입니다.
- 읽기 시작점은 `main.rs`이고, 이후 `routes -> handlers -> cache/db/models` 순서가 가장 자연스럽습니다.

### `supabase`

- 데이터베이스를 로컬에서 재현하기 위한 설정 폴더입니다.
- `migrations`는 테이블과 인덱스를 올리고, `seed.sql`은 초기 데이터를 채웁니다.
- 코드 기능을 바꾸는 폴더는 아니지만, 제품 검색 결과가 어떤 스키마 위에서 만들어지는지 확인하는 데 필요합니다.

### `docs`

- 배포, 스키마, JSONB 필터링 같은 운영 문서를 모아 둔 설명 폴더입니다.
- 런타임 요청을 처리하지는 않지만, 왜 JSONB와 Redis를 같이 택했는지 이해할 때 보조 자료가 됩니다.

## `src` 폴더별 기능

### `main.rs`

- 서버 부팅과 공통 의존성 초기화를 맡는 엔트리 포인트입니다.
- 데이터베이스 풀과 캐시 클라이언트를 만든 뒤 라우터를 조립하는 기능이 여기서 시작됩니다.
- 이 파일을 보면 "이 서버가 무엇을 외부 의존성으로 보고 있는가"가 가장 먼저 드러납니다.

### `routes`

- HTTP 엔드포인트를 정의하고 핸들러를 연결하는 폴더입니다.
- 페이지 기능 관점에서는 브랜드 조회 페이지, 카테고리 페이지, 제품 상세 페이지가 어떤 URL로 열리는지 정하는 계층입니다.
- 대표 메서드:
  - `create_routes`: 전체 API 트리를 조립합니다.
  - `inject_pool`: 데이터베이스 풀을 앱 상태에 넣습니다.
  - `health_check`: 서버 상태 확인 엔드포인트를 제공합니다.
- 이 폴더를 먼저 보면 외부 계약을 바로 잡을 수 있습니다.

### `handlers`

- 실제 사용자 기능이 구현되는 핵심 폴더입니다.
- API 관점에서는 "라우트가 받은 요청을 어떤 비즈니스 기능으로 바꾸는가"를 담당합니다.
- 하위 파일별 기능:
  - `brand_handler.rs`: 브랜드 목록, 상세, 생성, 수정, 삭제 기능을 맡습니다.
    대표 메서드는 `apply_brand_filters`, `list_brands`, `get_brand`, `create_brand`, `update_brand`, `delete_brand`입니다.
  - `product_category_handler.rs`: 제품 카테고리 목록과 관리 기능을 맡습니다.
  - `product_handler.rs`: 제품 목록, 필터 검색, 상세, 스펙 조회를 맡습니다.
    대표 메서드는 `apply_product_filters`, `list_products`, `get_product`, `get_product_specs`, `create_product`, `update_product`, `delete_product`입니다.
  - `product_pricing_handler.rs`: 현재 가격과 가격 히스토리 기능을 맡습니다.
    대표 메서드는 `get_current_pricing_for_product`, `get_price_history_for_product`입니다.
  - `cache_handler.rs`: 캐시 점검이나 무효화처럼 운영 보조 기능을 노출합니다.
- 기능이 실제로 어떻게 보이는지 가장 빨리 이해하려면 이 폴더를 읽는 편이 맞습니다.

### `middleware`

- 인증과 권한 검사를 담당하는 폴더입니다.
- 페이지 기능으로 보면 관리자 전용 쓰기 기능과 일반 조회 기능을 나누는 관문입니다.
- 대표 메서드:
  - `auth_middleware`: 기본 인증 여부를 검사합니다.
  - `admin_middleware`: 관리자 권한을 검사합니다.
  - `moderator_middleware`: 운영자 권한을 검사합니다.
  - `verify_supabase_token`: Supabase 토큰을 검증합니다.
- 제품 쓰기 기능을 읽을 때는 이 폴더까지 같이 봐야 실제 권한 모델이 보입니다.

### `cache`

- Redis 캐시 키 설계와 캐시 읽기/쓰기 기능을 담당합니다.
- 반복 조회가 많은 브랜드, 제품, 가격 조회를 빠르게 만들기 위한 성능 계층입니다.
- 대표 메서드:
  - `CacheClient::new`
  - `CacheClient::get`
  - `CacheClient::set`
  - `CacheClient::delete`
  - `CacheClient::delete_pattern`
  - `CacheClient::flush_all`
- 이 폴더는 기능 자체보다 응답 속도와 무효화 전략을 설명하는 데 중요합니다.

### `db`

- 데이터베이스 연결과 공통 인프라 초기화를 맡습니다.
- 현재 구조에서는 쿼리 로직이 핸들러 안에도 분산돼 있으므로, 이 폴더는 저장소 추상화보다 연결 수명 관리 역할이 더 큽니다.
- 대표 메서드는 `create_pool`입니다.
- 서버가 어떤 방식으로 PostgreSQL에 붙는지 확인할 때 먼저 보면 됩니다.

### `models`

- 브랜드, 제품, 카테고리, 가격 같은 데이터 구조를 정의합니다.
- API 응답과 DB 행이 어떤 필드 구조를 가지는지 고정하는 폴더입니다.
- 하위 파일별 기능:
  - `brand.rs`: 브랜드 기본 모델과 응답 구조
  - `product.rs`: 제품 상세와 스펙 구조
  - `product_category.rs`: 카테고리 모델
  - `product_pricing.rs`: 가격, 가격 이력 모델
- 필터나 캐시보다 먼저 데이터 의미를 보고 싶다면 이 폴더부터 읽어도 됩니다.

## 이 페이지를 어떻게 써야 하나

- 기능 흐름을 보고 싶으면 `routes -> handlers -> cache/db -> models` 순서로 읽습니다.
- 권한과 쓰기 기능을 보고 싶으면 `middleware`와 `handlers`를 같이 봅니다.
- 데이터 설계와 실행 환경까지 포함해 보고 싶으면 `models -> supabase -> docs` 순서가 더 낫습니다.

## 같이 보면 좋은 문서

- [Architecture](./architecture)
- [API Surface](./api-surface)
- [Cache Strategy](./cache-strategy)
