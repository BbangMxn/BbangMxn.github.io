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
  <h2>커피 커뮤니티 서비스를 만들면서 클라이언트 전환과 도메인 분리를 함께 검증한 멀티플랫폼 프로젝트</h2>
  <p class="hub-lede">
    피드, 가이드, 장비 탐색, 브루잉 기록을 하나의 경험으로 묶으려 했고, 개발 과정에서 SvelteKit에서 Flutter로 전환하고 장비 영역은 BagInDB로 분리했습니다.
  </p>
</div>

<section class="hub-section">
  <p class="hub-section-kicker">Overview</p>
  <h3>프로젝트 개요</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Goal</span>
        <p>커피 커뮤니티 서비스를 웹과 모바일에서 일관되게 제공하고, 콘텐츠와 장비 탐색을 하나의 제품 흐름으로 검증</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Role</span>
        <p>1인 개발로 제품 방향, UI 설계, 프론트엔드, 백엔드, 데이터 모델링, 아키텍처 분리를 직접 진행</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">State</span>
        <p>제품 실험과 구조 검증을 마쳤고, Flutter 전환과 장비 도메인 분리까지 실제로 경험한 상태</p>
      </div>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Source</p>
  <h3>원본 위치</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">GitHub</span>
        <p><a href="https://github.com/BbangMxn/BagInCoffee">BbangMxn/BagInCoffee</a></p>
      </div>
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
  <p class="hub-section-kicker">Built</p>
  <h3>구현한 것</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Community</span>
        <p>소셜 피드, 중첩 댓글, 가이드와 매거진 콘텐츠, 브루잉 기록, 브랜드와 장비 탐색을 하나의 커뮤니티 흐름으로 구성했습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Migration</span>
        <p>초기 SvelteKit 웹 프로토타입에서 Flutter Web과 Mobile 중심 구조로 전환해 하나의 코드베이스로 확장 가능성을 검증했습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Split</span>
        <p>인증과 커뮤니티는 Supabase에 두고, 장비와 브랜드 데이터는 BagInDB로 분리해 도메인 경계를 명확히 만들었습니다.</p>
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
        <span class="hub-label">Data</span>
        <p>브랜드 67개, 카테고리 34개, 제품 62개, 3개 언어 지원까지 구조 검증을 진행했습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Cache</span>
        <p>장비 API까지 확장하며 캐시 적중률 85% 이상을 목표로 데이터 응답 구조를 설계했습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Learning</span>
        <p>이 프로젝트의 핵심은 기능 나열보다, 제품을 만들면서 기술 스택과 도메인 분리를 다시 판단한 경험에 있습니다.</p>
      </div>
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
