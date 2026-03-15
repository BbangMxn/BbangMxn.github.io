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
  <h2>Nazgul은 SNS MVP를 만드는 데서 멈추지 않고, 취미 커뮤니티 문제를 개인화 RAG 연구 문제로 다시 정의한 프로젝트입니다</h2>
  <p class="hub-lede">
    처음에는 취미 기반 SNS를 구현하는 것이 목표였지만, 검색과 추천을 단순 피드 문제로 다루는 방식으로는 한계가 명확했습니다. 그래서 Nazgul은 제품 구현 프로젝트에서 출발해, 커뮤니티 데이터를 어떻게 더 구조적으로 검색하고 설명할 수 있는지 검증하는 연구형 프로젝트로 방향을 바꿨습니다.
  </p>
</div>

<section class="hub-section">
  <p class="hub-section-kicker">Why This Project</p>
  <h3>왜 이 프로젝트를 다시 정의했는가</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Problem</span>
        <p>취미 기반 SNS를 만들다 보니, 단순 CRUD와 피드 추천만으로는 사용자가 실제로 정보를 탐색하고 활용하는 문제를 설명하기 어려웠습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Shift</span>
        <p>그래서 Nazgul은 취미 SNS를 완성하는 프로젝트가 아니라, 취미 커뮤니티 문제를 개인화 RAG 구조로 다시 풀어볼 수 있는지 검증하는 프로젝트로 방향을 전환했습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Scope</span>
        <p>1인 개발로 제품 방향, 프론트엔드, 백엔드, 도메인 설계, 로컬 AI 실험, 문서화를 직접 맡았고, 현재는 초기 연구 프로토타입 단계입니다.</p>
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
        <p>단순 chunk 검색 대신 Card-first 구조를 택했습니다. 취미 커뮤니티 데이터는 의미 단위와 관계를 먼저 세우지 않으면 검색 결과가 쉽게 파편화된다고 판단했기 때문입니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Decision 2</span>
        <p>카드만으로 답을 만들지 않고 chunk를 grounding으로 남겼습니다. 설명 가능한 검색 구조를 만들려면 근거 텍스트가 반드시 따라와야 한다고 봤기 때문입니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Decision 3</span>
        <p>결과만 저장하지 않고 RecommendationTrace를 분리했습니다. 연구형 프로젝트에서는 정답보다도 실패와 지연, 후보 선택 과정을 나중에 다시 볼 수 있어야 한다고 판단했기 때문입니다.</p>
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
        <span class="hub-label">MVP Base</span>
        <p>44개 취미와 9개 카테고리를 바탕으로 홈 피드, 탐색, 프로필, 게시물 작성, 취미 선택 구조를 만들었고, 이 도메인을 RAG 실험의 베이스로 활용할 수 있음을 확인했습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Observed Flow</span>
        <p>2026년 3월 12일 기준, <code>러닝 초보 루틴</code> 질의에서 카드 3개와 추천 포스트 3개를 반환하며 Card -> Chunk -> Answer -> Trace 흐름이 실제로 이어지는 것을 확인했습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Benchmark</span>
        <p>SQLite와 Ollama(qwen3:8b) 조합에서 평균 60,531ms 수준으로 느렸지만, 병목이 어디 있는지와 현재 검증 범위가 어디까지인지는 분명하게 잡을 수 있었습니다.</p>
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
        <p>정량 평가 지표인 Recall@k, MRR, nDCG 수준의 비교는 아직 충분하지 않고, 데이터셋 자체도 연구를 일반화하기에는 작습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Risk</span>
        <p>복합 질의의 랭킹 안정성은 아직 부족하고, 현재 실험은 로컬 Ollama 응답 시간에 크게 의존해 실사용 성능을 말할 단계는 아닙니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Next</span>
        <p>다음 단계는 더 큰 데이터셋과 정량 평가 체계를 붙여서, 지금의 구조적 판단이 실제 검색 품질 개선으로 이어지는지 확인하는 것입니다.</p>
      </div>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Source</p>
  <h3>원본과 세부 문서</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <a href="https://github.com/BbangMxn/Nazgul">
        <span class="hub-label">GitHub</span>
        <strong>BbangMxn/Nazgul</strong>
        <p>취미 SNS MVP와 Java/Spring Boot 기반 RAG 실험 서버를 함께 담은 공개 저장소입니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Note</span>
        <p>세부 설계와 작업 문서는 하위 문서에 두고, 메인 페이지는 왜 이 프로젝트가 연구형 설득 문서로 읽혀야 하는지에 집중합니다.</p>
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
