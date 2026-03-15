---
title: BagInCoffee
tags:
  - portfolio
  - flutter
  - rust
  - supabase
  - product
cssclasses:
  - folder-hub
---

<div class="hub-header">
  <p class="hub-kicker">Projects / Coffee Community</p>
  <h2>BagInCoffee는 커뮤니티 앱을 만드는 데서 멈추지 않고, 제품을 만들며 SvelteKit에서 Flutter로 전환하고 장비 도메인을 분리해야 한다는 판단까지 검증한 프로젝트입니다</h2>
  <p class="hub-lede">
    처음에는 커피 커뮤니티를 빠르게 검증하는 것이 목표였지만, 실제로 제품을 확장하려고 하자 웹 중심 구조와 단일 백엔드만으로는 한계가 분명해졌습니다. BagInCoffee는 기능 구현뿐 아니라, 어떤 시점에 클라이언트와 도메인 구조를 다시 나눠야 하는지를 보여주는 프로젝트입니다.
  </p>
</div>

<section class="hub-section">
  <p class="hub-section-kicker">Why This Project</p>
  <h3>왜 이 프로젝트를 다시 설계했는가</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Problem</span>
        <p>커뮤니티, 가이드, 브루잉 기록, 장비 탐색을 하나의 제품 경험으로 묶고 싶었지만, 웹 프로토타입만으로는 실제 사용성을 충분히 검증하기 어려웠습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Shift</span>
        <p>그래서 BagInCoffee는 단순 웹 서비스가 아니라, 제품을 만들면서 어떤 클라이언트가 맞는지, 어떤 데이터는 별도 서비스로 분리해야 하는지를 검증하는 프로젝트로 바뀌었습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Scope</span>
        <p>1인 개발로 제품 방향, UI 설계, 프론트엔드, 백엔드, 데이터 모델링, 아키텍처 분리를 직접 진행했고, 현재는 제품 실험과 구조 검증을 마친 상태입니다.</p>
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
        <p>SvelteKit에서 Flutter로 전환했습니다. 빠른 웹 검증에는 SvelteKit이 유리했지만, 웹과 모바일을 함께 가져가려면 Flutter가 더 일관된 사용자 경험을 만들 수 있다고 판단했기 때문입니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Decision 2</span>
        <p>장비, 브랜드, 제품 스펙 영역은 BagInDB로 분리했습니다. 커뮤니티 데이터와 장비 데이터는 요구사항이 달라 하나의 백엔드에 계속 쌓는 편이 오히려 유지보수에 불리하다고 봤기 때문입니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Decision 3</span>
        <p>인증은 Supabase를 공통 축으로 두고, 정적 자산과 도메인 서비스를 분리했습니다. 여러 클라이언트와 하위 서비스를 묶으려면 인증 기준점이 분명해야 한다고 판단했기 때문입니다.</p>
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
        <span class="hub-label">Product Flow</span>
        <p>소셜 피드, 중첩 댓글, 가이드와 매거진 콘텐츠, 브루잉 기록, 브랜드와 장비 탐색을 하나의 커뮤니티 흐름으로 연결할 수 있음을 확인했습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Observed</span>
        <p>Flutter 전환 이후 하나의 코드베이스로 웹과 모바일을 함께 가져갈 수 있는 방향을 검증했고, 브랜드 67개, 카테고리 34개, 제품 62개, 3개 언어 지원 수준까지 구조를 확장했습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Connected Scope</span>
        <p>커뮤니티 서비스와 장비 데이터 API를 실제로 분리하고, 장비 API 쪽에서는 캐시 적중률 85% 이상을 목표로 한 응답 구조까지 연결했습니다.</p>
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
        <p>구조 검증은 진행했지만, 아직 이 프로젝트를 완성된 제품으로 보기보다는 클라이언트 전환과 도메인 분리 판단을 검증한 상태에 가깝습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Risk</span>
        <p>클라이언트와 서비스 경계는 분명해졌지만, 실제 운영에서 어떤 조합이 가장 단순하고 유지 가능한지는 더 확인이 필요합니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Next</span>
        <p>다음 단계는 이 구조를 제품 관점에서 더 다듬는 것입니다. BagInCoffee는 지금 기준으로는 기능 목록보다도 제품과 구조의 경계를 다시 정한 경험이 핵심입니다.</p>
      </div>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Source</p>
  <h3>원본과 연결 지점</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <a href="https://github.com/BbangMxn/BagInCoffee">
        <span class="hub-label">GitHub</span>
        <strong>BbangMxn/BagInCoffee</strong>
        <p>커뮤니티 클라이언트와 하위 서비스 분리 흐름을 담은 공개 저장소입니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="../bagindb">
        <span class="hub-label">Connected</span>
        <strong>BagInDB</strong>
        <p>장비, 브랜드, 제품 스펙 영역은 별도 도메인 서비스로 분리해 연결했습니다.</p>
      </a>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Structure</p>
  <h3>저장소 구조</h3>

```text
BagInCoffee/
├── BagInCoffee-App/   # Flutter Web + Mobile client
├── BagInCoffee-Web/   # 초기 SvelteKit 프로토타입
├── BagInDB/           # 장비 도메인 백엔드
├── screenshots/
└── README.md
```

</section>
