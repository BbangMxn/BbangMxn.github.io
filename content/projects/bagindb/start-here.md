---
title: BagInDB Start Here
tags:
  - portfolio
  - guide
  - backend
---

BagInDB는 장비 API를 하나 만든 프로젝트보다, 장비 도메인을 별도 서비스로 떼어냈을 때 어떤 계층과 어떤 최적화 대상이 생기는지를 읽는 프로젝트입니다. 이 폴더는 구현 파일 설명보다 도메인 읽는 법을 먼저 정리합니다.

## 전제

- 이 프로젝트의 출발점은 독립 서비스가 아니라 BagInCoffee 내부 문제였습니다.
- 핵심은 장비 데이터를 CRUD로 관리하는 것이 아니라 탐색형 API로 다루는 것이었습니다.
- Rust, JSONB, Redis 선택은 기술 취향보다 읽기 패턴과 운영 비용에서 나온 판단입니다.

## 읽기 순서

1. [BagInDB 메인 페이지](./index)
2. [BagInDB Spec](./spec)
3. [Folder Feature Map](./folder-feature-map)
4. [API Surface](./api-surface)
5. [Cache Strategy](./cache-strategy)
6. [BagInCoffee](../BagInCoffee)

## 문서 역할

### `index.md`

- 왜 장비 도메인을 따로 떼어냈는지 설명합니다.
- 서비스 경계와 기술 선택의 결론을 한 페이지에서 닫습니다.

### `spec.md`

- 장비 도메인을 독립 서비스로 볼지 결정할 때 먼저 고정한 기준 문서입니다.
- 문제, 목표, 핵심 결정, acceptance 기준을 가장 짧게 읽는 문서입니다.

### `folder-feature-map.md`

- 각 폴더를 열었을 때 실제로 어떤 기능이 나오는지 설명합니다.
- `handlers`, `middleware`, `cache`, `models`, `supabase`를 기능 단위로 읽는 문서입니다.

### `api-surface.md`

- 어떤 조회 API를 중심에 두었는지 설명합니다.
- `routes`, `handlers`, `cache/db`, `models` 계층이 왜 그렇게 나뉘는지 읽는 문서입니다.

### `cache-strategy.md`

- Redis를 부가 기능이 아니라 핵심 응답 전략으로 다룬 이유를 설명합니다.
- 어떤 조회가 캐시에 잘 맞았고 어디서 미스가 생겼는지 정리합니다.

## 개발 흐름

1. 장비 데이터를 커뮤니티 기능과 다른 도메인으로 분리했습니다.
2. 읽기 중심 API 형태를 먼저 잡고 JSONB로 유연한 스펙 모델을 선택했습니다.
3. Redis를 붙여 반복 조회를 줄이고, 어떤 요청이 캐시 대상인지 관찰했습니다.
4. 이 과정 전체를 서비스 경계 검증 사례로 문서화했습니다.

## 핵심 결론

- BagInDB의 핵심은 기술 스택이 아니라 장비 탐색을 독립 도메인으로 읽어낸 점입니다.
- 구현은 `메인 페이지의 아키텍처 섹션 -> Folder Feature Map -> API Surface -> Cache Strategy -> 상위 제품 연결` 순서로 이해하는 편이 맞습니다.
- 결국 이 프로젝트는 "장비 도메인은 어떤 백엔드여야 하는가"에 대한 답을 찾는 과정입니다.
- 코드부터 읽고 싶다면 [BagInDB 메인 페이지](./index)의 아키텍처 섹션 다음 [Folder Feature Map](./folder-feature-map)으로 들어가는 편이 더 빠릅니다.
