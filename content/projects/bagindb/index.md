---
title: BagInDB
tags:
  - portfolio
  - rust
  - backend
  - redis
cssclasses:
  - folder-hub
---
<div class="hub-header">
  <p class="hub-kicker">Projects / Domain API</p>
  <h2>BagInCoffee에서 분리한 장비 도메인을 Rust로 설계한 저리소스 장비 데이터 API</h2>
  <p class="hub-lede">
    브랜드, 카테고리, 제품 스펙처럼 반복 조회가 많고 구조가 자주 변하는 데이터를 커뮤니티 서비스와 분리해 독립 API로 운영할 수 있는지 검증한 프로젝트입니다.
  </p>
</div>

<section class="hub-section">
  <p class="hub-section-kicker">Overview</p>
  <h3>프로젝트 개요</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Goal</span>
        <p>커피 장비 데이터를 위한 별도 백엔드 서비스를 설계하고, 반복 조회에 강한 API 구조를 검증</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Role</span>
        <p>1인 개발로 데이터 모델링, API 설계, 캐싱 전략, JWT 검증, 문서화를 직접 진행</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">State</span>
        <p>장비 도메인 백엔드 프로토타입으로 동작 검증을 마쳤고, 독립 서비스로 유지 가능한 구조를 확인한 상태</p>
      </div>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Source</p>
  <h3>원본 위치</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <a href="https://github.com/BbangMxn/BagInCoffee/tree/main/BagInDB">
        <span class="hub-label">GitHub</span>
        <strong>BagInCoffee / BagInDB</strong>
        <p>BagInCoffee 저장소 안에서 장비 도메인 서비스를 별도 디렉터리로 분리해 관리하고 있습니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="../BagInCoffee">
        <span class="hub-label">Parent</span>
        <strong>BagInCoffee</strong>
        <p>커뮤니티와 장비 데이터를 한 서비스에 두지 않고, 장비 영역만 따로 떼어낸 상위 프로젝트입니다.</p>
      </a>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Built</p>
  <h3>구현한 것</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">API</span>
        <p>브랜드, 카테고리, 제품 목록과 상세, 필터 기반 조회, JWT 검증 흐름까지 장비 데이터 API 전반을 구성했습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Data</span>
        <p>카테고리마다 구조가 다른 제품 스펙을 위해 PostgreSQL JSONB 기반 다국어 필드를 설계했습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Cache</span>
        <p>브랜드와 제품 조회처럼 반복 요청이 많은 엔드포인트에 Redis 캐시 계층을 두고 무효화 전략을 적용했습니다.</p>
      </div>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Results</p>
  <h3>현재까지 확인한 지점</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Observed</span>
        <p>캐시 적중 시 10ms 이하 응답, 캐시 적중률 85% 이상, 다국어 지원과 15개 이상 엔드포인트 구성을 확인했습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Why Split</span>
        <p>커뮤니티와 장비 데이터는 요구사항이 달라, 한 서버에 계속 쌓기보다 별도 도메인 서비스로 나누는 편이 더 적합하다는 판단을 검증했습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Learning</span>
        <p>이 프로젝트는 Rust API 구현뿐 아니라, 제품 구조를 서비스 경계 단위로 다시 나누는 설계 경험을 보여줍니다.</p>
      </div>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Structure</p>
  <h3>프로젝트 구조</h3>

```text
BagInDB/
├── src/
│   ├── routes/
│   ├── models/
│   ├── repository/
│   └── cache/
├── docs/
├── Cargo.toml
└── README.md
```

</section>
