---
title: Bbang
cssclasses:
  - portfolio-home
---

<section class="portfolio-intro portfolio-hero">
  <div class="portfolio-hero-main">
    <div class="portfolio-identity">
      <span class="portfolio-name">Bbang / 호빵맨</span>
      <span class="portfolio-role">Backend-centered Product Engineer</span>
    </div>
    <h1>백엔드 구조와 제품 경계를 spec-driven으로 빠르게 구현합니다.</h1>
    <p class="portfolio-lede">
      검색 구조, 제품 전환, 캐시 전략, AI 업무 자동화처럼 먼저 경계를 다시 정의해야 하는 문제를 다룹니다.
      acceptance 기준을 먼저 닫고, 구현과 검증, 문서화까지 한 흐름으로 연결하는 편입니다.
    </p>
    <div class="portfolio-chip-list">
      <span class="portfolio-chip">Java / Spring Boot</span>
      <span class="portfolio-chip">Go</span>
      <span class="portfolio-chip">TypeScript / React / Next.js</span>
      <span class="portfolio-chip">Flutter</span>
      <span class="portfolio-chip">RAG / Cache / Workflow</span>
    </div>
    <div class="portfolio-actions">
      <a class="portfolio-action primary" href="./projects">프로젝트 보기</a>
      <div class="portfolio-contact-strip">
        <a class="portfolio-contact-chip" href="mailto:jixso6484@gmail.com">
          <span>Email</span>
          <code>jixso6484@gmail.com</code>
        </a>
        <a class="portfolio-contact-chip" href="https://github.com/BbangMxn">
          <span>GitHub</span>
          <code>github.com/BbangMxn</code>
        </a>
      </div>
      <p class="portfolio-link-strip">
        <a href="./resume">이력 요약</a>
        <span>·</span>
        <a href="./about">소개</a>
        <span>·</span>
        <a href="./start-here">읽기 가이드</a>
        <span>·</span>
        <a href="./docs">문서 폼</a>
      </p>
    </div>
    <div class="portfolio-meta-strip">
      <p>
        <span>강한 문제</span>
        검색 구조 · 도메인 분리 · 캐시 전략 · AI workflow safety
      </p>
      <p>
        <span>작업 기준</span>
        Spec -> Acceptance -> Implementation -> Documentation
      </p>
    </div>
  </div>
</section>

<section class="portfolio-block">
  <p class="portfolio-block-kicker">빠른 정보</p>
  <h2>메인에서 바로 잡히는 기준</h2>
  <div class="portfolio-grid portfolio-facts-grid">
    <article class="portfolio-card">
      <span class="portfolio-badge">포지션</span>
      <strong>Backend-centered Product Engineer</strong>
      <p>백엔드 구조, 제품 경계, 구현 범위, 문서화를 한 흐름으로 묶는 역할을 지향합니다.</p>
    </article>
    <article class="portfolio-card">
      <span class="portfolio-badge">강한 문제</span>
      <strong>검색 구조, 도메인 분리, 캐시 전략, AI workflow</strong>
      <p>단순 기능 구현보다 먼저 구조와 운영 경계를 다시 정해야 하는 문제를 주로 다룹니다.</p>
    </article>
    <article class="portfolio-card">
      <span class="portfolio-badge">작업 방식</span>
      <strong>Spec-driven, 1인 개발 중심, 구현과 문서 병행</strong>
      <p>문제, 목표, acceptance 기준을 먼저 닫고 구현하며, 판단 과정과 한계를 프로젝트 문서로 남깁니다.</p>
    </article>
    <article class="portfolio-card">
      <span class="portfolio-badge">핵심 기술</span>
      <strong>Java, Spring Boot, Go, TypeScript, Flutter, Redis, SQLite</strong>
      <p>프로젝트에 따라 검색 실험, 제품 전환, 캐시 연구, 업무 자동화 구조를 이 조합으로 풀었습니다.</p>
    </article>
  </div>
</section>

<section class="portfolio-block">
  <p class="portfolio-block-kicker">대표 프로젝트</p>
  <h2>이 네 프로젝트가 메인 설명입니다</h2>
  <div class="portfolio-grid portfolio-project-grid">
    <a class="portfolio-project-card" href="./projects/nazgul">
      <span class="portfolio-badge">검색 구조</span>
      <strong>Nazgul</strong>
      <p>취미 커뮤니티를 RAG 문제로 다시 정의하고, retrieval과 trace를 실제 질의 기준으로 검증한 프로젝트입니다.</p>
      <div class="portfolio-card-specs">
        <p><span>언어</span>TypeScript · Java · SQL</p>
        <p><span>스택</span>React · Spring Boot · SQLite · Ollama</p>
      </div>
      <p class="portfolio-card-meta">44개 취미 · 9개 카테고리 · Card -&gt; Chunk -&gt; Answer -&gt; Trace · 평균 60,531ms 관찰</p>
      <p class="portfolio-card-role">역할: 제품 화면, Java 서버, 로컬 AI 실험, 문서화</p>
    </a>
    <a class="portfolio-project-card" href="./projects/BagInCoffee">
      <span class="portfolio-badge">제품 전환</span>
      <strong>BagInCoffee</strong>
      <p>웹 프로토타입에서 Flutter 전환과 BagInDB 분리 시점을 실제 제품 흐름으로 설명한 프로젝트입니다.</p>
      <div class="portfolio-card-specs">
        <p><span>언어</span>Dart · TypeScript · Rust · SQL</p>
        <p><span>스택</span>Flutter · SvelteKit · Supabase · BagInDB</p>
      </div>
      <p class="portfolio-card-meta">67개 브랜드 · 34개 카테고리 · 62개 제품 · 3개 언어 · 클라이언트 전환 검증</p>
      <p class="portfolio-card-role">역할: 제품 방향, 클라이언트, 데이터 모델링, 도메인 분리</p>
    </a>
    <a class="portfolio-project-card" href="./projects/worker">
      <span class="portfolio-badge">AI Workflow</span>
      <strong>Worker</strong>
      <p>업무 도구 안에서 AI가 바로 실행하지 않도록 Proposal과 분류, 동기화를 안전하게 묶은 워크스페이스 실험입니다.</p>
      <div class="portfolio-card-specs">
        <p><span>언어</span>TypeScript · Go · SQL</p>
        <p><span>스택</span>Next.js · Go · PostgreSQL · MongoDB · Gmail Sync</p>
      </div>
      <p class="portfolio-card-meta">Proposal · Gmail sync · 7단계 분류 · personalized reply · 구조 단순화 진행 중</p>
      <p class="portfolio-card-role">역할: Next.js UI, Go 백엔드, AI 파이프라인, 데이터 설계</p>
    </a>
    <a class="portfolio-project-card" href="./research/Cache">
      <span class="portfolio-badge">캐시 연구</span>
      <strong>Cache Research</strong>
      <p>캐시를 단순 성능 튜닝이 아니라 데이터 접근 비용을 재설계하는 시스템 문제로 다루고, 계층형 캐시와 eviction 정책을 비교한 연구입니다.</p>
      <div class="portfolio-card-specs">
        <p><span>언어</span>Java · C</p>
        <p><span>스택</span>In-Memory Cache · Redis · Query Cache · Benchmark</p>
      </div>
      <p class="portfolio-card-meta">L1 In-Memory · L2 Redis · L3 Query Cache · 14개 알고리즘 · 26개 시나리오</p>
      <p class="portfolio-card-role">역할: 캐시 구조 설계, 벤치마크 해석, 실무 선택 기준 정리</p>
    </a>
  </div>
</section>

<section class="portfolio-block">
  <p class="portfolio-block-kicker">기술 축</p>
  <h2>문제에 따라 이 조합을 씁니다</h2>
  <div class="portfolio-grid portfolio-facts-grid">
    <article class="portfolio-card">
      <span class="portfolio-badge">Search / AI</span>
      <strong>Java, Spring Boot, SQLite, Ollama</strong>
      <p>Entity Card 기반 retrieval, trace, recommendation flow를 설계하고 느린 실험 결과까지 근거로 남깁니다.</p>
    </article>
    <article class="portfolio-card">
      <span class="portfolio-badge">Product</span>
      <strong>Flutter, TypeScript, SvelteKit, Supabase</strong>
      <p>제품 경험을 먼저 검증하고, 클라이언트 전략과 도메인 경계를 다시 나누는 전환 작업을 수행했습니다.</p>
    </article>
    <article class="portfolio-card">
      <span class="portfolio-badge">Cache Research</span>
      <strong>In-Memory, Redis, Query Cache, CLOCK, LeCaR</strong>
      <p>다층 캐시 구조와 eviction 정책을 히트율보다 스루풋, 구현 복잡도, workload 적합성 기준으로 비교합니다.</p>
    </article>
    <article class="portfolio-card">
      <span class="portfolio-badge">Workflow</span>
      <strong>Next.js, Go, PostgreSQL, MongoDB, Gmail sync</strong>
      <p>AI가 실제 업무 도구 안에서 안전하게 동작하도록 Proposal, 분류, 동기화, 실행 경계를 설계합니다.</p>
    </article>
  </div>
</section>

<section class="portfolio-block">
  <p class="portfolio-block-kicker">연구 자료</p>
  <h2>RAG와 Cache는 여기서 바로 이어집니다</h2>
  <div class="portfolio-grid portfolio-project-grid">
    <a class="portfolio-project-card" href="./projects/nazgul/research-notes">
      <span class="portfolio-badge">RAG Research</span>
      <strong>Nazgul Research Notes</strong>
      <p>제품 메인 주장과 분리된 형태로 retrieval 구조, Entity Card RAG, technical design, 외부 시스템 비교를 정리한 연구 입구입니다.</p>
      <p class="portfolio-card-meta">Retrieval Map · Entity Card RAG · Technical Design · Related Systems</p>
      <p class="portfolio-card-role">역할: retrieval 구조 정리, 연구 메모 압축, 구현 기준 문서화</p>
    </a>
    <a class="portfolio-project-card" href="./research/Cache">
      <span class="portfolio-badge">Cache Research</span>
      <strong>Cache Research</strong>
      <p>계층형 캐시 구조, eviction 알고리즘, 벤치마크 해석, 향후 적응형 캐시 확장 방향까지 한 흐름으로 읽을 수 있는 연구 허브입니다.</p>
      <p class="portfolio-card-meta">3-tier cache · 14 algorithms · 26 scenarios · benchmark interpretation</p>
      <p class="portfolio-card-role">역할: 시스템 설계 관점 재정의, 성능 비교, 후속 연구 방향 정리</p>
    </a>
  </div>
</section>

<section class="portfolio-block">
  <p class="portfolio-block-kicker">읽기 경로</p>
  <h2>이 순서로 보면 빠릅니다</h2>
  <ul class="portfolio-list">
    <li class="portfolio-item">
      <a href="./resume">
        <span class="portfolio-badge">요약</span>
        <strong>이력 요약</strong>
        <p>포지션, 강한 문제, 대표 프로젝트를 가장 짧게 훑으려면 이 페이지가 가장 빠릅니다.</p>
      </a>
    </li>
    <li class="portfolio-item">
      <a href="./projects">
        <span class="portfolio-badge">프로젝트</span>
        <strong>프로젝트 허브</strong>
        <p>대표 프로젝트를 문제, 역할, 판단, 검증 범위 기준으로 이어서 훑어보는 메인 허브입니다.</p>
      </a>
    </li>
    <li class="portfolio-item">
      <a href="./about">
        <span class="portfolio-badge">소개</span>
        <strong>Bbang 소개</strong>
        <p>잘 맞는 문제와 환경, 일하는 방식, 어떤 팀에서 강점이 드러나는지를 더 자세히 정리한 페이지입니다.</p>
      </a>
    </li>
    <li class="portfolio-item">
      <a href="./start-here">
        <span class="portfolio-badge">가이드</span>
        <strong>읽기 가이드</strong>
        <p>사이트 전체를 어떤 순서로 읽으면 빠른지와 추천 진입 경로를 짧게 정리한 문서입니다.</p>
      </a>
    </li>
    <li class="portfolio-item">
      <a href="./research">
        <span class="portfolio-badge">연구</span>
        <strong>연구</strong>
        <p>프로젝트 판단의 배경이 되는 캐시, JVM, 검색 구조 같은 기술 실험과 연구 노트를 모아 둔 섹션입니다.</p>
      </a>
    </li>
    <li class="portfolio-item">
      <a href="./wiki">
        <span class="portfolio-badge">기준</span>
        <strong>위키</strong>
        <p>반복해서 참고하는 개념, 글 규격, 운영 기준처럼 오래 남길 문서를 정리한 참조 섹션입니다.</p>
      </a>
    </li>
  </ul>
  <div class="portfolio-note">
    <span class="portfolio-badge">보조 경로</span>
    <p>
      공통 문서 form은 <a href="./docs">docs</a>, 공개 가능한 짧은 기록은 <a href="./Diary">다이어리</a>, 오래 남길 기준은 <a href="./wiki">위키</a>에서 이어집니다.
    </p>
  </div>
</section>
