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
  <h2>BagInDB는 장비 API를 하나 만든 프로젝트가 아니라, 왜 커뮤니티와 장비 데이터를 분리해야 했는지를 서비스 경계 관점에서 검증한 프로젝트입니다</h2>
  <p class="hub-lede">
    커뮤니티 서비스와 장비 데이터 서비스는 같은 저장소 안에 둘 수는 있어도 같은 성격의 도메인은 아니었습니다. BagInDB는 반복 조회가 많고 구조가 자주 변하는 장비 데이터를 Rust, PostgreSQL JSONB, Redis 조합으로 분리하는 편이 맞는지 직접 확인하기 위해 만든 프로젝트입니다.
  </p>
</div>

<section class="hub-section">
  <p class="hub-section-kicker">Proof</p>
  <h3>메인 페이지에서 바로 확인할 수 있는 증거</h3>
  <div class="hub-proof-grid">
    <div class="hub-proof-card">
      <div class="hub-proof-media">
        <pre class="hub-proof-code"><code>BagInCoffee Client
        |
Community Flow
        |
     BagInDB
   /          \
JSONB Specs   Redis Cache
        |
   Product Search</code></pre>
      </div>
      <span class="hub-label">Boundary Proof</span>
      <strong>커뮤니티 흐름과 장비 탐색 흐름의 리듬이 달랐기 때문에, BagInDB를 별도 도메인 서비스로 분리하는 편이 맞았습니다</strong>
      <p>BagInDB는 단순 CRUD 서버가 아니라, 브랜드와 제품 스펙 탐색을 커뮤니티 피드와 다른 데이터 경계로 옮겨야 한다는 판단을 백엔드 구조로 증명한 프로젝트입니다.</p>
    </div>
    <div class="hub-proof-card">
      <span class="hub-label">Observed Metrics</span>
      <strong>캐시 적중 시 10ms 이하 응답, 캐시 적중률 85% 이상, 15개 이상 엔드포인트와 다국어 모델링까지 연결했습니다</strong>
      <p>브랜드, 카테고리, 제품 목록과 상세, 필터 검색, JWT 검증 흐름을 실제로 구성하면서 JSONB와 Redis 조합이 이 도메인에 유효한지 검증했습니다.</p>
    </div>
  </div>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Why This Project</p>
  <h3>왜 별도 도메인 서비스가 필요했는가</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Problem</span>
        <p>커뮤니티 데이터는 사용자와 콘텐츠 중심이지만, 장비 데이터는 브랜드, 카테고리, 제품 스펙, 필터 검색, 다국어 표현처럼 다른 요구사항을 갖고 있었습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Shift</span>
        <p>그래서 BagInDB는 단순 부속 API가 아니라, 커뮤니티 서비스와 다른 리듬으로 동작하는 장비 도메인을 분리할 수 있는지 검증하는 별도 서비스가 되었습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Scope</span>
        <p>1인 개발로 데이터 모델링, API 설계, 캐싱 전략, JWT 검증, 문서화를 직접 맡았고, 현재는 독립 서비스로 유지 가능한 구조를 확인한 상태입니다.</p>
      </div>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Key Decisions</p>
  <h3>무엇을 구현했는가보다 무엇을 판단했는가</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Decision 1</span>
        <p>장비 도메인을 커뮤니티 백엔드와 분리했습니다. 같은 제품 안의 데이터라고 해도 접근 패턴과 변경 방식이 다르면 서비스 경계를 나누는 편이 더 낫다고 판단했기 때문입니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Decision 2</span>
        <p>정규화 중심 스키마만 고집하지 않고 JSONB 기반 스펙 저장을 택했습니다. 카테고리별로 필요한 속성이 달라, 유연성을 포기하는 편이 더 큰 비용이라고 봤기 때문입니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Decision 3</span>
        <p>Rust와 Redis 조합을 선택했습니다. 반복 조회가 많은 API를 낮은 리소스로 운영하려면, 응답 비용과 캐시 전략을 처음부터 함께 설계하는 편이 맞다고 판단했습니다.</p>
      </div>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">What Was Proven</p>
  <h3>무엇이 실제로 연결됐는가</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Observed</span>
        <p>브랜드, 카테고리, 제품 목록과 상세, 필터 기반 조회, JWT 검증 흐름까지 장비 데이터 API 전반을 실제로 연결했습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Metrics</span>
        <p>캐시 적중 시 10ms 이하 응답, 캐시 적중률 85% 이상, 다국어 지원과 15개 이상 엔드포인트 구성을 확인하며, 이 도메인이 독립 API로 성립할 수 있음을 검증했습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Scope</span>
        <p>핵심은 CRUD가 아니라 장비 데이터의 다국어 모델링, 캐싱, 무효화, 분리 운영 가능성까지 함께 확인했다는 점입니다.</p>
      </div>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Limits and Next</p>
  <h3>무엇이 아직 남아 있는가</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Limit</span>
        <p>현재는 도메인 분리와 API 구조 검증이 핵심이며, 장기 운영 기준으로 어떤 무효화 정책과 데이터 관리 전략이 가장 단순한지는 더 다듬어야 합니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Risk</span>
        <p>JSONB와 캐시 전략은 유연하지만, 스키마 관리와 무효화 기준이 느슨하면 운영 복잡도가 올라갈 수 있다는 점도 같이 인식하고 있습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Next</span>
        <p>다음 단계는 분리한 이유를 더 강하게 만드는 것입니다. 실제 제품 흐름 안에서 장비 API가 어떤 방식으로 소비되는지까지 더 구체적으로 연결할 필요가 있습니다.</p>
      </div>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Source</p>
  <h3>원본과 연결 지점</h3>
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
