---
title: 프로젝트 포트폴리오
tags:
  - portfolio
  - projects
cssclasses:
  - folder-hub
---

<div class="hub-header">
  <p class="hub-kicker">프로젝트</p>
  <h2>구조 판단이 남은 프로젝트</h2>
  <p class="hub-lede">
    이 섹션은 기능 목록보다 구조 판단을 먼저 읽게 하는 프로젝트 포트폴리오입니다.
    대표 프로젝트 3개로 제품 구조 전환, 업무 자동화 파이프라인, 검색 구조 재정의를 먼저 보여주고,
    나머지 프로젝트는 분리된 도메인과 운영 경험을 보강하는 축으로 배치했습니다.
  </p>
</div>

<section class="hub-section">
  <p class="hub-section-kicker">읽는 기준</p>
  <h3>어떤 기준으로 읽을지 먼저 고를 수 있습니다</h3>
  <div class="hub-grid">
    <a class="hub-card" href="./BagInCoffee/architecture">
      <span class="hub-label">구조 먼저</span>
      <strong>BagInCoffee 아키텍처</strong>
      <p>클라이언트 전환과 도메인 분리처럼 제품 구조가 어떻게 갈라졌는지부터 보고 싶다면 여기서 시작하면 됩니다.</p>
    </a>
    <a class="hub-card" href="./worker/start-here">
      <span class="hub-label">흐름 먼저</span>
      <strong>Worker 시작 가이드</strong>
      <p>판단이 어떤 순서로 쌓였는지, 그리고 어떤 흐름으로 AI 워크스페이스가 만들어졌는지 따라가는 입구입니다.</p>
    </a>
    <a class="hub-card" href="./nazgul/retrieval-map">
      <span class="hub-label">연구 먼저</span>
      <strong>Nazgul 검색 흐름</strong>
      <p>검색 실험 구조와 trace 흐름부터 짧게 보고 싶을 때 바로 들어가는 기술 입구입니다.</p>
    </a>
  </div>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">대표</p>
  <h3>구조 판단이 먼저 보이는 대표 프로젝트</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <a href="./BagInCoffee">
        <span class="hub-label">제품 전환</span>
        <strong>BagInCoffee</strong>
        <p>웹 프로토타입에서 Flutter로 전환하고, 인증과 장비 도메인을 언제 분리해야 하는지 구조적으로 검증한 프로젝트입니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="./worker">
        <span class="hub-label">업무 자동화</span>
        <strong>Worker</strong>
        <p>업무 도구 안에 AI Agent를 넣을 때 Proposal 안전장치, 분류 파이프라인, 동기화 경계를 어떻게 나눴는지 보여주는 프로젝트입니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="./nazgul">
        <span class="hub-label">검색 실험</span>
        <strong>Nazgul</strong>
        <p>취미 SNS 아이디어를 검색 문제로 다시 정의하고, ingest, retrieval, trace 구조까지 검증한 프로젝트입니다.</p>
      </a>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">보조</p>
  <h3>대표 구조를 보강하는 보조 프로젝트</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <a href="./bagindb">
        <span class="hub-label">도메인 분리</span>
        <strong>BagInDB</strong>
        <p>BagInCoffee에서 분리한 장비 도메인을 Rust API, PostgreSQL JSONB, Redis 캐시 계층으로 설계한 백엔드 프로젝트입니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="./smartfactory">
        <span class="hub-label">IoT 연구</span>
        <strong>Smart Factory</strong>
        <p>다중 프로토콜 수집, 시계열 저장, 실시간 모니터링을 한 구조 안에서 연결해 본 연구 및 구현 프로젝트입니다.</p>
      </a>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">구조 축</p>
  <h3>프로젝트를 읽는 구조 축</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">제품 축</span>
        <p><a href="./BagInCoffee">BagInCoffee</a>는 제품 구조 전환과 도메인 분리 시점을 보여주고, 분리된 장비 영역은 <a href="./bagindb">BagInDB</a>에서 백엔드 설계 깊이로 이어집니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">업무 축</span>
        <p><a href="./worker">Worker</a>는 업무 자동화에 AI를 붙일 때 필요한 제안, 분류, 동기화 경계, 구조 재단순화 판단을 보여주는 축입니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">검색 축</span>
        <p><a href="./nazgul">Nazgul</a>은 제품 문제를 검색/RAG 문제로 다시 정의하며, 설명 가능한 근거와 trace를 남기는 검색 구조를 검증한 축입니다.</p>
      </div>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">아키텍처</p>
  <h3>구조부터 읽는 입구</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <a href="./BagInCoffee/architecture">
        <span class="hub-label">제품 구조</span>
        <strong>BagInCoffee 아키텍처</strong>
        <p>Flutter 클라이언트, Supabase 인증, 도메인 분리 지점까지 제품 구조를 먼저 읽을 수 있습니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="./worker/architecture">
        <span class="hub-label">업무 구조</span>
        <strong>Worker 아키텍처</strong>
        <p>Electron 데스크톱, 백엔드 API, AI 실행 흐름이 어떻게 연결되는지 구조 기준으로 정리한 페이지입니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="./nazgul/architecture">
        <span class="hub-label">검색 구조</span>
        <strong>Nazgul 아키텍처</strong>
        <p>ingest, retrieval, trace 생성이 어떤 흐름으로 맞물리는지 RAG 구조 관점에서 바로 들어갈 수 있습니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="./bagindb/architecture">
        <span class="hub-label">도메인 구조</span>
        <strong>BagInDB 아키텍처</strong>
        <p>routes, handlers, cache, database 계층으로 분리된 장비 도메인 백엔드 구조를 따로 설명합니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="./smartfactory/architecture">
        <span class="hub-label">플랫폼 구조</span>
        <strong>Smart Factory 아키텍처</strong>
        <p>수집 프로토콜, 시계열 파이프라인, 운영 대시보드까지 연구형 IoT 구조를 한 번에 읽을 수 있습니다.</p>
      </a>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">개발 흐름</p>
  <h3>개발 순서를 읽는 입구</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <a href="./BagInCoffee/start-here">
        <span class="hub-label">제품 흐름</span>
        <strong>BagInCoffee 시작 가이드</strong>
        <p>웹 프로토타입에서 Flutter 전환, 그리고 장비 도메인 분리까지 어떤 순서로 판단했는지부터 읽을 수 있습니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="./worker/start-here">
        <span class="hub-label">업무 흐름</span>
        <strong>Worker 시작 가이드</strong>
        <p>AI가 실제 업무 도구 안에서 어떻게 제안, 분류, 동기화 흐름으로 배치됐는지 개발 경로를 따라갈 수 있습니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="./nazgul/start-here">
        <span class="hub-label">연구 흐름</span>
        <strong>Nazgul 시작 가이드</strong>
        <p>취미 SNS에서 RAG 연구형 프로젝트로 문제를 다시 정의한 과정과 세부 문서 연결을 먼저 보여 줍니다.</p>
      </a>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">기준</p>
  <h3>정리 기준</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <a href="../wiki/portfolio-standard">
        <span class="hub-label">문서 기준</span>
        <strong>포트폴리오 기준</strong>
        <p>프로젝트를 어떤 형식으로 정리할지가 아니라, 어떤 판단을 어떻게 설득할지에 대한 공통 기준은 Wiki 문서로 유지합니다.</p>
      </a>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">연결</p>
  <h3>깊이를 보여주는 연결 섹션</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <a href="../research">
        <span class="hub-label">연구</span>
        <strong>연구</strong>
        <p>프로젝트 판단을 뒷받침하는 캐시, JVM, 설계 연구를 이어서 읽을 수 있습니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="../wiki">
        <span class="hub-label">참조</span>
        <strong>위키</strong>
        <p>반복해서 참고하는 개념과 운영 기준을 모아둔 섹션입니다.</p>
      </a>
    </li>
  </ul>
</section>
