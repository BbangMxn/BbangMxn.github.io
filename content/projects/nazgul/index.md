---
title: Nazgul
tags:
  - portfolio
  - rag
  - spring-boot
  - react
  - ai
cssclasses:
  - folder-hub
---

<div class="hub-header">
  <p class="hub-kicker">Projects / RAG Prototype</p>
  <h2>취미 기반 SNS에서 출발해 개인화 RAG 구조를 연구하는 프로토타입</h2>
  <p class="hub-lede">
    단순한 SNS 구현에서 멈추지 않고, 취미 커뮤니티 데이터를 바탕으로 Card, Chunk, Relation, Trace 구조가 실제로 동작하는지 검증하기 위해 확장한 프로젝트입니다.
  </p>
</div>

<section class="hub-section">
  <p class="hub-section-kicker">Overview</p>
  <h3>프로젝트 개요</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Goal</span>
        <p>취미 커뮤니티 도메인에서 개인화된 RAG 검색과 추천 구조가 실제로 연결되는지 검증</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Role</span>
        <p>1인 개발로 제품 방향, 프론트엔드, 백엔드, 도메인 설계, 로컬 AI 실험, 문서화를 함께 진행</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">State</span>
        <p>초기 연구 프로토타입 단계이며, SNS MVP와 로컬 RAG 파이프라인 연결까지는 검증한 상태</p>
      </div>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Source</p>
  <h3>원본 위치</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <a href="https://github.com/BbangMxn/Nazgul">
        <span class="hub-label">GitHub</span>
        <strong>BbangMxn/Nazgul</strong>
        <p>취미 SNS MVP와 Java/Spring Boot 기반 RAG 실험 서버를 함께 담은 공개 저장소입니다.</p>
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
        <span class="hub-label">SNS MVP</span>
        <p>44개 취미와 9개 카테고리를 바탕으로 홈 피드, 탐색, 프로필, 게시물 작성, 취미 선택 구조를 만들었습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">RAG Model</span>
        <p>HobbyCard, ContentChunk, HobbyCardRelation, RecommendationTrace로 이어지는 Card-first 구조를 설계했습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Local Experiment</span>
        <p>SQLite와 Ollama 기반으로 검색 후보, 근거 chunk, 답변, 추적 로그가 실제로 이어지는 파이프라인을 검증했습니다.</p>
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
        <p>2026년 3월 12일 기준, <code>러닝 초보 루틴</code> 질의에서 카드 3개와 추천 포스트 3개를 반환하는 초기 연결을 확인했습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Benchmark</span>
        <p>SQLite와 Ollama(qwen3:8b) 조합에서 평균 60,531ms 수준으로 느리지만, Card -> Chunk -> Answer -> Trace 흐름 자체는 검증했습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Limit</span>
        <p>정량 평가 지표, 데이터셋 규모, 복합 질의 랭킹 안정성은 아직 보완이 필요한 상태입니다.</p>
      </div>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Structure</p>
  <h3>저장소 구조</h3>

```text
Nazgul/
├── client/   # 취미 SNS 프론트엔드
├── server/   # Java/Spring Boot 기반 RAG 실험 서버
└── docs/     # 이미지 및 보조 문서
```

</section>
