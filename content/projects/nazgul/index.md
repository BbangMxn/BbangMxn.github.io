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
    처음에는 취미 기반 SNS를 구현하는 것이 목표였지만, 검색과 추천을 단순 피드 문제로 다루는 방식으로는 한계가 분명했습니다.
    그래서 Nazgul은 커뮤니티 MVP에서 출발해, 취미 데이터를 어떻게 더 구조적으로 검색하고 개인화된 추천 근거와 trace까지 남길 수 있는지 검증하는 연구형 프로젝트로 방향을 바꿨습니다.
  </p>
</div>

<section class="hub-section nazgul-flow-section">
  <p class="hub-section-kicker">Product Flow</p>
  <h3>세 장의 화면으로 먼저 읽히는 제품 흐름</h3>
  <p class="hub-lede nazgul-flow-intro">
    Nazgul이 왜 단순 SNS MVP에서 멈추지 않았는지는 이 세 장의 화면으로 가장 먼저 설명됩니다.
    커뮤니티가 실제로 존재했고, 탐색 경험이 있었고, 개인화 입력이 분명했기 때문에 이후 검색과 추천을 RAG 문제로 다시 정의할 수 있었습니다.
  </p>
  <div class="nazgul-flow">
    <article class="nazgul-flow-step">
      <div class="nazgul-flow-step-media">
        <img src="/projects/nazgul/image/nazgul-home.jpg" alt="Nazgul 홈 피드 화면" />
      </div>
      <div class="nazgul-flow-step-body">
        <div class="nazgul-flow-step-header">
          <span class="nazgul-flow-step-number">01</span>
          <div class="nazgul-flow-step-title">
            <span class="hub-label">Community Base</span>
            <strong>홈 피드로 커뮤니티의 출발점을 만들었습니다</strong>
          </div>
        </div>
        <p>사용자가 어떤 취미 포스트를 보고 반응하는지 먼저 제품 화면으로 만들었기 때문에, Nazgul은 처음부터 실제 사용자 흐름을 가진 도메인 위에서 출발할 수 있었습니다.</p>
        <p class="nazgul-flow-step-note">이 화면이 있었기 때문에 이후 검색과 추천 문제를 추상 피드가 아니라 실제 커뮤니티 행동 위에서 다시 정의할 수 있었습니다.</p>
      </div>
    </article>
    <article class="nazgul-flow-step">
      <div class="nazgul-flow-step-media">
        <img src="/projects/nazgul/image/nazgul-explore.png" alt="Nazgul 탐색 화면" />
      </div>
      <div class="nazgul-flow-step-body">
        <div class="nazgul-flow-step-header">
          <span class="nazgul-flow-step-number">02</span>
          <div class="nazgul-flow-step-title">
            <span class="hub-label">Search Experience</span>
            <strong>탐색 화면으로 검색을 제품 경험으로 묶었습니다</strong>
          </div>
        </div>
        <p>탐색 탭이 실제로 존재했기 때문에, Nazgul은 단순 벡터 조회 결과를 나열하는 대신 사용자가 어떤 카드와 포스트를 어떤 순서로 만나야 하는지까지 함께 설계할 수 있었습니다.</p>
        <p class="nazgul-flow-step-note">이 구간이 있었기 때문에 검색은 단순 조회 기능이 아니라 카드 배치와 추천 흐름까지 포함한 제품 문제로 읽히게 됐습니다.</p>
      </div>
    </article>
    <article class="nazgul-flow-step">
      <div class="nazgul-flow-step-media">
        <img src="/projects/nazgul/image/nazgul-hobbies.png" alt="Nazgul 취미 선택 화면" />
      </div>
      <div class="nazgul-flow-step-body">
        <div class="nazgul-flow-step-header">
          <span class="nazgul-flow-step-number">03</span>
          <div class="nazgul-flow-step-title">
            <span class="hub-label">Personalization Input</span>
            <strong>취미 선택 구조로 개인화 입력을 명확히 남겼습니다</strong>
          </div>
        </div>
        <p>사용자가 어떤 취미를 선택하고 유지하는지가 화면 단위로 드러나 있었기 때문에, Nazgul은 RAG 카드와 추천 결과를 사용자 관심사와 연결해 설명할 수 있었습니다.</p>
        <p class="nazgul-flow-step-note">이 입력 구조가 있었기 때문에 개인화는 추측이 아니라 실제 UI 상태를 근거로 설명 가능한 모델이 됐습니다.</p>
      </div>
    </article>
  </div>
  <div class="nazgul-flow-summary">
    <span class="hub-label">Observed Query</span>
    <strong>2026년 3월 12일 기준, 카드 3개와 추천 포스트 3개를 반환하며 평균 60,531ms를 기록했습니다</strong>
    <p><code>러닝 초보 루틴</code> 질의에서 <code>Card -&gt; Chunk -&gt; Answer -&gt; Trace</code> 흐름이 실제로 이어졌고, 지금은 이 결과를 기준으로 병목 지점과 다음 검증 범위를 좁히고 있습니다.</p>
  </div>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Why This Project</p>
  <h3>왜 이 프로젝트를 다시 정의했는가</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Problem</span>
        <p>처음 만든 취미 SNS MVP는 홈 피드와 탐색 흐름은 있었지만, 검색과 추천을 피드 보강 수준으로만 다루고 있어 이후 AI와 연결할 근거 구조가 부족했습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Shift</span>
        <p>그래서 Nazgul은 단순 커뮤니티 사이트가 아니라, 취미 데이터를 Entity Card와 Trace 중심 retrieval 구조로 다시 정의하고 LLM과 연결하는 연구형 프로젝트로 목표를 바꿨습니다.</p>
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
        <p>단순 chunk 검색 대신 Entity Card 구조를 택했습니다. 취미 도메인을 바로 청크로 평탄화하면 맥락과 출처 설명이 약해진다고 봤기 때문입니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Decision 2</span>
        <p>카드를 중심으로 계층형 retrieval을 설계했습니다. 취미를 하나의 카테고리 축으로 묶고, 도서관처럼 관리 가능한 단위로 유지해야 검색 결과와 추천 근거를 함께 설명하기 쉬웠기 때문입니다.</p>
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
        <p>SQLite와 Ollama(qwen3:8b) 조합에서 평균 60,531ms로 느렸지만, 그 덕분에 현재 병목이 어디 있고 이 구조가 어디까지 검증된 상태인지는 분명하게 잡을 수 있었습니다.</p>
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
  <p class="hub-section-kicker">Development Flow</p>
  <h3>실제로 어떤 순서로 개발했는가</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Step 1</span>
        <strong>처음에는 취미 SNS를 실제 제품 화면으로 먼저 만들었습니다</strong>
        <p>홈 피드, 탐색, 프로필, 게시물 작성, 취미 선택 구조를 먼저 구현해서 도메인 기반을 만들었습니다. 이 단계가 있었기 때문에 이후 검색 문제를 추상 연구가 아니라 실제 사용자 흐름 위에서 다시 정의할 수 있었습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Step 2</span>
        <strong>탐색 경험과 개인화 입력을 남긴 뒤, 이를 RAG 입력 구조로 재해석했습니다</strong>
        <p>탐색 화면과 취미 선택 UI를 단순 화면이 아니라 검색과 추천의 입력으로 보기 시작했습니다. 그래서 개인화는 추측이 아니라 실제 UI 상태에서 가져오는 맥락이 됐습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Step 3</span>
        <strong>서버 쪽에서는 Entity Card에서 Chunk, Answer, Trace로 이어지는 검색 파이프라인을 만들었습니다</strong>
        <p><a href="./retrieval-map">Retrieval Map</a>처럼 질의를 바로 청크에 던지지 않고 카드 중심 중간 계층을 뒀습니다. 그리고 RecommendationTrace를 남겨 어떤 후보가 선택됐는지 다시 볼 수 있게 했습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Step 4</span>
        <strong>로컬 환경에서 느린 실험 결과까지 남기며 병목과 연구 범위를 같이 기록했습니다</strong>
        <p>SQLite와 Ollama 기반 실험은 느렸지만, 어떤 병목이 있고 현재 구조가 어디까지 유효한지 확인할 수 있었습니다. 더 자세한 설계는 <a href="./start-here">Start Here</a>, <a href="./retrieval-map">Retrieval Map</a>, <a href="./04%20Technical%20Design%20Document">Technical Design Document</a>에서 이어집니다.</p>
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
        <p>메인 페이지는 문제 재정의와 검증 범위에 집중하고, 세부 retrieval 설계는 하위 문서로 분리해 두었습니다.</p>
      </div>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Architecture</p>
  <h3>구조 설명은 별도 페이지에서 다룹니다</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <a href="./architecture">
        <span class="hub-label">Code Structure</span>
        <strong>Nazgul Architecture</strong>
        <p><code>client</code>가 만드는 제품 입력과 <code>server/rag</code>가 수행하는 retrieval 실험 구조를 별도 페이지에서 나눠 설명합니다.</p>
      </a>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Structure</p>
  <h3>저장소 구조</h3>

```text
Nazgul/
├── client/   # 취미 SNS 프론트엔드
│   └── src/{pages,components,stores,lib,types}
├── server/   # Java/Spring Boot 기반 RAG 실험 서버
│   ├── docs/
│   ├── scripts/
│   └── src/main/java/com/nazgul/{common,optimization,rag}
└── docs/     # 이미지 및 보조 문서
```

<p>루트 구조만 보면 단순하지만, 실제 핵심은 `client`가 만드는 제품 맥락과 `server/rag`가 수행하는 retrieval 실험이 어떻게 분리되는가에 있습니다. 이 흐름은 <a href="./architecture">Architecture</a>에서 모듈 기준으로 이어서 설명합니다.</p>

</section>
