---
title: Bbang
tags:
  - home
  - portfolio
cssclasses:
  - landing-page
---

<div class="hero-grid">
  <div class="hero-copy">
    <p class="eyebrow">Backend Portfolio</p>
    <h1>백엔드 구조를 만들고, 실험하고, 문서로 남깁니다</h1>
    <p class="lede">
      Bbang은 프로젝트 결과물, 리서치 노트, 위키 문서를 한 흐름으로 연결한 개인 포트폴리오입니다.
      Obsidian에서 작성한 메모를 Quartz로 퍼블리시하면서, 캐시 구조와 JVM 같은 주제를 실제 작업과 함께 정리합니다.
    </p>
    <div class="hero-actions">
      <a class="landing-button primary" href="./projects">Projects</a>
      <a class="landing-button secondary" href="./research">Research</a>
      <a class="landing-button secondary" href="./about">About</a>
    </div>
  </div>
  <div class="hero-panel">
    <div class="hero-profile">
      <img src="./static/profile.png" alt="Bbang profile" />
      <div>
        <p class="panel-label">Profile</p>
        <strong>이문규</strong>
        <span>Backend Developer</span>
      </div>
    </div>
    <ul class="panel-list">
      <li><strong>Focus</strong><span>Cache, JVM, Backend Architecture</span></li>
      <li><strong>Workflow</strong><span>Obsidian -> Quartz -> GitHub Pages</span></li>
      <li><strong>Writing Style</strong><span>구현 기록과 기술 문서를 같은 구조에서 관리</span></li>
    </ul>
  </div>
</div>

<div class="landing-metrics">
  <div class="metric-card">
    <span class="metric-value">Projects</span>
    <p>완성한 결과물과 구조 선택의 이유를 사례 중심으로 정리합니다.</p>
  </div>
  <div class="metric-card">
    <span class="metric-value">Research</span>
    <p>실험, 비교, 메모를 쌓아 설계 방향과 검증 과정을 남깁니다.</p>
  </div>
  <div class="metric-card">
    <span class="metric-value">Wiki</span>
    <p>오래 유지할 개념 문서와 운영 기준을 별도 허브로 정리합니다.</p>
  </div>
</div>

<section class="landing-section">
  <div class="section-copy">
    <p class="section-kicker">Selected Work</p>
    <h2>지금 보고 싶은 작업부터 바로 들어갈 수 있게 구성했습니다</h2>
    <p>프로젝트 문서만 따로 떼어내지 않고, 그 뒤에 있는 실험과 기준 문서까지 연결해서 보여줍니다.</p>
  </div>
  <div class="card-grid">
    <a class="landing-card" href="./projects/quartz-wiki-site">
      <span class="card-kicker">Project</span>
      <strong>Quartz 기반 개인 위키 구축</strong>
      <p>옵시디언 작성 흐름과 GitHub Pages 배포를 하나의 포트폴리오 사이트로 연결한 프로젝트입니다.</p>
    </a>
    <a class="landing-card" href="./research/Cache">
      <span class="card-kicker">Research</span>
      <strong>Cache Research</strong>
      <p>캐시 계층 구조, 무효화 전략, 비교 관점을 논문형 구조로 정리한 리서치 묶음입니다.</p>
    </a>
    <a class="landing-card" href="./wiki/obsidian-workflow">
      <span class="card-kicker">Workflow</span>
      <strong>Obsidian Workflow</strong>
      <p>문서 작성, 링크 관리, 로컬 미리보기, 배포까지 이어지는 실제 작성 흐름을 설명합니다.</p>
    </a>
  </div>
</section>

<section class="landing-section">
  <div class="section-copy">
    <p class="section-kicker">Structure</p>
    <h2>홈은 포트폴리오이고, 내부는 계속 자라는 작업 저장소입니다</h2>
    <p>메인 화면은 결과물을 보여주는 입구로 두고, 각 폴더는 독립적인 대시보드처럼 동작하게 구성했습니다.</p>
  </div>
  <div class="card-grid">
    <a class="landing-card" href="./projects">
      <span class="card-kicker">Projects</span>
      <strong>만든 결과물과 사례 정리</strong>
      <p>작업한 시스템을 왜 그런 방식으로 만들었는지까지 같이 읽을 수 있는 섹션입니다.</p>
    </a>
    <a class="landing-card" href="./research">
      <span class="card-kicker">Research</span>
      <strong>진행 중인 실험과 비교 노트</strong>
      <p>아직 정리 중인 주제와 검증 과정을 남기고, 충분히 쌓이면 프로젝트나 위키로 연결합니다.</p>
    </a>
    <a class="landing-card" href="./wiki">
      <span class="card-kicker">Wiki</span>
      <strong>오래 유지할 기술 문서</strong>
      <p>트러블슈팅, 운영 기준, 개념 정리를 다시 찾기 쉬운 형태로 유지합니다.</p>
    </a>
  </div>
</section>

<section class="landing-section compact">
  <div class="section-copy">
    <p class="section-kicker">Current Focus</p>
    <h2>최근 정리하고 있는 핵심 문서</h2>
  </div>
  <div class="focus-links">
    <a href="./about">프로필과 작업 방향</a>
    <a href="./research/Cache">Cache Research</a>
    <a href="./research/Java">Java Runtime Research</a>
    <a href="./wiki/github-pages">GitHub Pages 운영 메모</a>
    <a href="./wiki/Java">Java Wiki</a>
    <a href="./start-here">Start Here</a>
  </div>
</section>
