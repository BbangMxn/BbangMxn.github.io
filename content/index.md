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
    <p class="eyebrow">Backend Developer</p>
    <h1>이문규의 포트폴리오</h1>
    <p class="lede">
      캐시, JVM, 문서 시스템을 중심으로 작업한 내용과 연구 기록을 정리합니다.
      홈은 결과물을 빠르게 보여주고, 내부 섹션은 Obsidian 기반 작업 대시보드처럼 연결해 두었습니다.
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
      <li><strong>Current Site</strong><span>Portfolio landing + section dashboards</span></li>
    </ul>
  </div>
</div>

<section class="landing-section">
  <div class="section-copy">
    <p class="section-kicker">Sections</p>
    <h2>세 개의 입구로 단순하게 나눴습니다</h2>
    <p>프로젝트, 리서치, 위키를 역할별로 분리해서 처음 들어와도 어디를 봐야 하는지 바로 알 수 있게 구성했습니다.</p>
  </div>
  <div class="card-grid">
    <a class="landing-card" href="./projects">
      <span class="card-kicker">Projects</span>
      <strong>결과물과 사례</strong>
      <p>만든 시스템을 문제 정의, 구조 선택, 구현 결과 중심으로 정리합니다.</p>
    </a>
    <a class="landing-card" href="./research">
      <span class="card-kicker">Research</span>
      <strong>실험과 비교 노트</strong>
      <p>캐시, JVM, 설계 초안처럼 진행 중인 탐구 과정을 기록합니다.</p>
    </a>
    <a class="landing-card" href="./wiki">
      <span class="card-kicker">Wiki</span>
      <strong>기준 문서와 지식 정리</strong>
      <p>반복해서 보는 개념과 운영 기준을 오래 유지하는 문서 영역입니다.</p>
    </a>
  </div>
</section>

<section class="landing-section">
  <div class="section-copy">
    <p class="section-kicker">Selected</p>
    <h2>먼저 보면 좋은 문서</h2>
    <p>현재 사이트 구조와 집중 주제를 가장 빠르게 보여주는 문서만 앞에 배치했습니다.</p>
  </div>
  <div class="card-grid">
    <a class="landing-card" href="./projects/quartz-wiki-site">
      <span class="card-kicker">Project</span>
      <strong>Quartz 기반 개인 위키 구축</strong>
      <p>이 사이트 자체를 어떻게 만들고 운영하는지 정리한 프로젝트 문서입니다.</p>
    </a>
    <a class="landing-card" href="./research/Cache">
      <span class="card-kicker">Research</span>
      <strong>Cache Research</strong>
      <p>캐시 구조와 무효화 전략을 중심으로 정리 중인 대표 리서치 묶음입니다.</p>
    </a>
    <a class="landing-card" href="./wiki/obsidian-workflow">
      <span class="card-kicker">Workflow</span>
      <strong>Obsidian Workflow</strong>
      <p>작성부터 퍼블리시까지 이어지는 현재 문서 작업 흐름을 설명합니다.</p>
    </a>
  </div>
</section>
