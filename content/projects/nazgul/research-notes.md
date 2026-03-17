---
title: Nazgul Research Notes
tags:
  - portfolio
  - rag
  - research
cssclasses:
  - folder-hub
---

<div class="hub-header">
  <p class="hub-kicker">Nazgul / Research Notes</p>
  <h2>메인 포트폴리오 문서와 별도로 연구 메모를 묶어 둡니다</h2>
  <p class="hub-lede">
    Nazgul은 제품 재정의가 핵심인 프로젝트이지만, 그 배경에는 retrieval 구조와 로컬 RAG 실험을 정리한 연구 메모가 같이 있습니다.
    이 페이지는 메인 주장과 보조 연구 자료의 경계를 나누고, 어떤 문서를 어떤 순서로 읽어야 하는지 정리하는 입구입니다.
  </p>
</div>

<section class="hub-section">
  <p class="hub-section-kicker">Read First</p>
  <h3>연구 흐름을 가장 짧게 보는 순서</h3>
  <div class="hub-grid">
    <a class="hub-card" href="./retrieval-map">
      <span class="hub-label">Compressed View</span>
      <strong>Retrieval Map</strong>
      <p>Card, Chunk, Answer, Trace가 왜 따로 존재하는지 가장 짧게 압축한 문서입니다.</p>
    </a>
    <a class="hub-card" href="./technical-design">
      <span class="hub-label">Implementation View</span>
      <strong>Technical Design</strong>
      <p>Entity, DB, retrieval, Tool API를 로컬 실험 기준으로 어떻게 고정할지 정리한 구현 설계 문서입니다.</p>
    </a>
    <a class="hub-card" href="./entity-card-rag">
      <span class="hub-label">Concept View</span>
      <strong>Entity Card RAG</strong>
      <p>왜 chunk-only RAG가 아니라 Entity Card 중심 구조로 가려 했는지 개념 배경을 설명하는 문서입니다.</p>
    </a>
  </div>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Notes</p>
  <h3>연구 메모별 역할</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <a href="./retrieval-map">
        <span class="hub-label">Map</span>
        <strong>Retrieval Map</strong>
        <p>메인 페이지와 가장 가까운 기술 문서입니다. 현재 검색 흐름을 제품 문제와 연결해서 읽게 만드는 압축본입니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="./technical-design">
        <span class="hub-label">Design</span>
        <strong>Technical Design</strong>
        <p>저장소, Entity, 관계, hybrid retrieval, Tool API까지 구현 기준을 가장 구체적으로 적어 둔 설계 문서입니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="./retrieval-engine-design">
        <span class="hub-label">Execution</span>
        <strong>Retrieval Engine Design</strong>
        <p>운영 가능한 RAG 엔진을 만들기 위해 Retrieval Unit, trace, 테스트 분리를 어떤 순서로 고정할지 정리한 메모입니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="./entity-card-rag">
        <span class="hub-label">Concept</span>
        <strong>Entity Card RAG</strong>
        <p>Entity Card, graph-assisted retrieval, evidence pointer 구조를 왜 제안했는지 개념 아키텍처 차원에서 설명합니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="./related-systems">
        <span class="hub-label">Reference</span>
        <strong>Related Systems</strong>
        <p>RAPTOR, GraphRAG, Cursor/Windsurf, Claude Projects 같은 외부 시스템과 비교한 참고 메모입니다.</p>
      </a>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Boundary</p>
  <h3>메인 포트폴리오 문서와의 경계</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Main Page</span>
        <p><a href="./index">Nazgul 메인 페이지</a>는 왜 이 프로젝트가 SNS MVP가 아니라 retrieval 연구형 프로젝트가 되었는지 설명하는 문서입니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Architecture</span>
        <p><a href="./architecture">Architecture</a>는 코드 구조와 폴더 책임을 잡는 문서입니다. 제품 입력과 실험 서버를 어디서 나눠 읽어야 하는지 설명합니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Research Notes</span>
        <p>이 페이지 아래 문서들은 개념 메모, 설계 메모, 참고 비교 자료입니다. 메인 주장보다는 배경과 구현 기준을 보강하는 역할에 가깝습니다.</p>
      </div>
    </li>
  </ul>
</section>
