---
title: Bbang
cssclasses:
  - portfolio-home
---

<section class="portfolio-intro">
  <p class="portfolio-kicker">Portfolio</p>
  <h1>제품 문제를 구조 판단, 운영 tradeoff, 검증 근거로 설명합니다</h1>
  <p class="portfolio-lede">
    이 사이트는 단독으로 읽혀도 지원자의 문제 정의 방식과 구조 판단이 보이도록 만든 포트폴리오입니다.
    구현 목록보다 서비스 경계, 데이터 흐름, 캐시, AI 안전장치 같은 백엔드 선택을 먼저 보여주고,
    그 선택이 어떤 화면과 관측값으로 검증됐는지까지 한 흐름으로 정리했습니다.
  </p>
  <ul class="portfolio-meta">
    <li><strong>Role</strong><span>백엔드 제품개발</span></li>
    <li><strong>Strong Problems</strong><span>제품 구조 전환, 업무 자동화, retrieval-backed backend, 데이터 도메인 분리</span></li>
    <li><strong>Why This Fits</strong><span>제품 문제를 구현 목록이 아니라 구조 선택과 운영 tradeoff로 설명하고, 근거와 한계를 같이 공개합니다.</span></li>
    <li><strong>Representative</strong><span><a href="./projects/BagInCoffee">BagInCoffee</a> / <a href="./projects/worker">Worker</a> / <a href="./projects/nazgul">Nazgul</a></span></li>
  </ul>
  <div class="portfolio-actions">
    <a class="portfolio-button primary" href="./projects">Projects</a>
    <a class="portfolio-button" href="./about">About</a>
    <a class="portfolio-button" href="./research">Research</a>
    <a class="portfolio-button" href="./start-here">Start Here</a>
  </div>
</section>

<section class="portfolio-block">
  <p class="portfolio-block-kicker">Read First</p>
  <h2>가장 빠른 세 가지 입구</h2>
  <div class="portfolio-grid">
    <a class="portfolio-card" href="./projects">
      <span class="portfolio-badge">Hub</span>
      <strong>Projects</strong>
      <p>대표 프로젝트와 보조 프로젝트를 구조 축 기준으로 정리한 허브입니다. 전체 지형을 가장 빨리 파악하려면 여기서 시작하는 편이 맞습니다.</p>
    </a>
    <a class="portfolio-card" href="./start-here">
      <span class="portfolio-badge">Guide</span>
      <strong>Start Here</strong>
      <p>구조부터 읽을지, 개발 순서부터 읽을지, 연구 배경까지 볼지에 따라 가장 짧은 읽기 경로를 안내합니다.</p>
    </a>
    <a class="portfolio-card" href="./about">
      <span class="portfolio-badge">Profile</span>
      <strong>About</strong>
      <p>한 줄 역할 정의, 강점, 다루는 문제, 추천 프로젝트를 먼저 확인하고 싶을 때 보는 resume-lite 문서입니다.</p>
    </a>
  </div>
</section>

<section class="portfolio-block">
  <p class="portfolio-block-kicker">Architecture First</p>
  <h2>구조부터 읽고 싶다면</h2>
  <ul class="portfolio-list">
    <li class="portfolio-item">
      <a href="./projects/BagInCoffee/architecture">
        <span class="portfolio-badge">Product Architecture</span>
        <strong>BagInCoffee Architecture</strong>
        <p>웹 프로토타입에서 Flutter로 전환하고 장비 도메인을 BagInDB로 분리한 구조를 먼저 읽을 수 있습니다.</p>
      </a>
    </li>
    <li class="portfolio-item">
      <a href="./projects/worker/architecture">
        <span class="portfolio-badge">Workflow Architecture</span>
        <strong>Worker Architecture</strong>
        <p>업무 워크스페이스 안에서 AI 제안, 분류, 동기화가 어떤 경계로 나뉘는지 구조 기준으로 정리한 페이지입니다.</p>
      </a>
    </li>
    <li class="portfolio-item">
      <a href="./projects/nazgul/architecture">
        <span class="portfolio-badge">Retrieval Architecture</span>
        <strong>Nazgul Architecture</strong>
        <p>취미 SNS 도메인과 RAG 실험 서버가 어떻게 나뉘는지, 그리고 retrieval 계층을 어떻게 읽어야 하는지 보여줍니다.</p>
      </a>
    </li>
  </ul>
</section>

<section class="portfolio-block">
  <p class="portfolio-block-kicker">Featured</p>
  <h2>대표 프로젝트 3개</h2>
  <ul class="portfolio-list">
    <li class="portfolio-item">
      <a href="./projects/BagInCoffee">
        <span class="portfolio-badge">Project</span>
        <strong>BagInCoffee</strong>
        <p>웹 프로토타입에서 Flutter로 전환하고, 인증과 장비 도메인을 언제 분리해야 하는지 구조적으로 검증한 프로젝트입니다.</p>
      </a>
    </li>
    <li class="portfolio-item">
      <a href="./projects/worker">
        <span class="portfolio-badge">Project</span>
        <strong>Worker</strong>
        <p>업무 도구 안에 AI Agent를 넣을 때 Proposal 안전장치, 분류 파이프라인, 동기화 경계를 어떻게 나눴는지 보여주는 프로젝트입니다.</p>
      </a>
    </li>
    <li class="portfolio-item">
      <a href="./projects/nazgul">
        <span class="portfolio-badge">Project</span>
        <strong>Nazgul</strong>
        <p>취미 SNS 아이디어를 retrieval 문제로 다시 정의하고, Entity Card 기반 검색 구조와 trace 흐름까지 검증한 프로젝트입니다.</p>
      </a>
    </li>
  </ul>
</section>

<section class="portfolio-block">
  <p class="portfolio-block-kicker">Depth</p>
  <h2>프로젝트 판단을 지지하는 기술 깊이</h2>
  <ul class="portfolio-list">
    <li class="portfolio-item">
      <a href="./research/Cache">
        <span class="portfolio-badge">Research</span>
        <strong>Cache Research</strong>
        <p>캐시를 성능 팁이 아니라 데이터 접근 비용을 재설계하는 시스템 문제로 다루며, 실무 선택 기준이 무엇인지 정리한 연구입니다.</p>
      </a>
    </li>
    <li class="portfolio-item">
      <a href="./research/Java/Java-Object/start-here">
        <span class="portfolio-badge">Research</span>
        <strong>Java Object Research</strong>
        <p>JVM 객체 모델이 실제 메모리 비용과 설계 판단에 어떤 제약을 만드는지 추적하며, 런타임 비용을 구조 관점에서 해석한 연구입니다.</p>
      </a>
    </li>
  </ul>
</section>

<section class="portfolio-block">
  <p class="portfolio-block-kicker">Sections</p>
  <h2>포트폴리오를 읽는 길</h2>
  <ul class="portfolio-list">
    <li class="portfolio-item">
      <a href="./projects">
        <span class="portfolio-badge">Projects</span>
        <strong>판단이 정리된 결과물</strong>
        <p>구현 결과보다 문제 재정의와 구조 선택의 근거가 먼저 보이는 프로젝트 문서를 모아둡니다.</p>
      </a>
    </li>
    <li class="portfolio-item">
      <a href="./research">
        <span class="portfolio-badge">Research</span>
        <strong>질문과 실험의 입구</strong>
        <p>아직 결론이 나지 않은 주제를 정리하되, 왜 중요한지와 어디서부터 읽어야 하는지를 먼저 보여줍니다.</p>
      </a>
    </li>
    <li class="portfolio-item">
      <a href="./wiki">
        <span class="portfolio-badge">Wiki</span>
        <strong>공통 기준과 참조 문서</strong>
        <p>반복해서 참고하는 개념, 글 규격, 운영 기준을 오래 남길 형태로 유지합니다.</p>
      </a>
    </li>
    <li class="portfolio-item">
      <a href="./Diary">
        <span class="portfolio-badge">Diary</span>
        <strong>공개 가능한 짧은 기록</strong>
        <p>결과물보다는 관찰과 판단 변화에 가까운 짧은 기록만 제한적으로 공개합니다.</p>
      </a>
    </li>
  </ul>
</section>
