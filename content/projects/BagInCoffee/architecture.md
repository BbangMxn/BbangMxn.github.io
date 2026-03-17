---
title: Architecture
tags:
  - portfolio
  - architecture
  - flutter
---

# BagInCoffee Architecture

BagInCoffee는 하나의 앱 폴더만 보면 이해되는 프로젝트가 아닙니다. 이 저장소는 `웹 프로토타입 -> Flutter 전환 -> 장비 도메인 분리`가 모두 남아 있는 우산 구조라서, 루트 폴더 자체가 아키텍처 설명 역할을 합니다.

## 먼저 잡아야 하는 구조

- `BagInCoffee-App/`은 현재 기준의 메인 클라이언트입니다.
- `BagInCoffee-Web/`은 폐기된 잔해가 아니라 초기 제품 검증을 맡았던 SvelteKit 프로토타입입니다.
- `BagInDB/`는 브랜드, 카테고리, 제품 스펙처럼 읽기 중심 장비 도메인을 분리한 백엔드입니다.
- 즉 이 저장소는 단일 앱이 아니라 `클라이언트 2세대 + 분리된 장비 서비스`를 한 리포에서 같이 관리한 구조입니다.

## 실행 아키텍처

```text
User
  |
Flutter App --------------------+
  |                             |
  |                   Supabase Auth / Community data
  |                             |
  +---- Equipment browse ------> BagInDB (Rust API)
  |                             |
  +---- Upload / images ------> Cloudflare R2
  |
Legacy reference: BagInCoffee-Web (initial SvelteKit prototype)
```

- 커뮤니티 경험과 인증은 Supabase를 기준점으로 읽는 편이 맞습니다.
- 장비 탐색은 Flutter 안에 화면으로 들어가 있지만, 실제 데이터 경계는 `BagInDB` 쪽에 있습니다.
- `BagInCoffee-Web`은 현재 운영 경로라기보다, 어떤 화면과 흐름을 먼저 검증했는지 보여 주는 이전 세대 클라이언트입니다.

## 루트 폴더 역할

```text
BagInCoffee/
├── BagInCoffee-App/   # Flutter Web + Mobile client
├── BagInCoffee-Web/   # 초기 SvelteKit 프로토타입
├── BagInDB/           # 장비 도메인 백엔드
├── screenshots/       # 포트폴리오와 README용 증거 이미지
└── README.md
```

- 루트에서 가장 중요한 것은 폴더 수보다 `세 개의 책임이 왜 나뉘었는가`입니다.
- `App`은 현재 제품 방향, `Web`은 검증 기록, `BagInDB`는 분리된 도메인 경계로 읽어야 합니다.

## Flutter 클라이언트는 이렇게 읽는 편이 맞습니다

```text
BagInCoffee-App/lib/
├── main.dart        # 앱 시작점
├── app.dart         # 앱 셸과 라우팅 진입
├── api/             # posts, guides, products 등 API 래퍼
├── core/            # providers, network, theme, services
├── features/        # auth, home, equipment, guide, post, profile, recode
└── shared/          # 공용 모델과 레이아웃 위젯
```

- `core/`는 인증 상태, 네트워크 클라이언트, 테마, 공통 서비스를 모으는 기반 계층입니다.
- `features/`는 화면과 도메인 기능을 기준으로 나뉘며, 특히 `equipment/`에서 BagInDB 분리 이유가 가장 잘 드러납니다.
- `shared/`는 여러 기능이 같이 쓰는 모델과 위젯을 두는 공용 영역입니다.
- `api/`가 넓게 퍼져 있기 때문에, 이 프로젝트는 완전한 클린 아키텍처보다 빠른 제품 조립과 기능 단위 분리가 더 우선이었던 구조로 읽는 편이 맞습니다.

## 초기 웹 프로토타입은 왜 여전히 중요했는가

```text
BagInCoffee-Web/src/
├── routes/          # feed, equipment, guide, marketplace, profile
└── lib/
    ├── api/
    ├── components/
    ├── server/      # database, storage, supabase
    ├── services/
    ├── stores/
    └── types/
```

- `routes/`를 보면 피드, 장비, 가이드, 마켓플레이스까지 이미 제품 표면이 꽤 넓게 검증됐다는 점을 확인할 수 있습니다.
- `lib/server/`를 보면 당시에는 인증, 업로드, 데이터 접근이 웹 애플리케이션 안에 더 밀접하게 묶여 있었다는 점이 드러납니다.
- 그래서 이 폴더는 단순 이전 버전이 아니라, 이후 Flutter 전환과 BagInDB 분리 판단의 출발점입니다.

## BagInDB는 여기서 별도 축이 됩니다

- 루트 안에 같이 들어 있지만 책임은 분명히 다릅니다.
- BagInCoffee 쪽에서는 장비 탐색 화면과 인증 연결만 보면 되고, 장비 데이터 자체의 계층은 [BagInDB Architecture](../bagindb/architecture)에서 따로 읽는 편이 맞습니다.
- 이 분리가 BagInCoffee 전체 구조에서 가장 중요한 설계 변화입니다.

## 코드를 읽는 추천 순서

1. 루트 `README.md`로 저장소가 왜 세 갈래인지 먼저 잡습니다.
2. `BagInCoffee-App/lib/main.dart`와 `app.dart`에서 현재 메인 클라이언트 진입을 봅니다.
3. `BagInCoffee-App/lib/core/`와 `features/equipment/`로 현재 클라이언트 경계가 어떻게 잡혔는지 확인합니다.
4. `BagInCoffee-Web/src/routes/`와 `src/lib/server/`로 초기 웹 구조가 무엇을 검증했는지 봅니다.
5. 장비 도메인 분리 이유가 궁금하면 `BagInDB/`와 [Domain Separation](./domain-separation)을 이어서 봅니다.
