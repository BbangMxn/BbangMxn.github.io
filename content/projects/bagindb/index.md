---
title: BagInDB
tags:
  - portfolio
  - rust
  - backend
  - redis
cssclasses:
  - folder-hub
---
<div class="hub-header">
  <p class="hub-kicker">Projects / Domain API</p>
  <h2>BagInDB는 장비 API를 하나 만든 프로젝트가 아니라, 왜 커뮤니티와 장비 데이터를 분리해야 했는지를 서비스 경계 관점에서 검증한 프로젝트입니다</h2>
  <p class="hub-lede">
    커뮤니티 서비스와 장비 데이터 서비스는 같은 저장소 안에 둘 수는 있어도 같은 성격의 도메인은 아니었습니다. 
    BagInDB는 반복 조회가 많고 구조가 자주 변하는 장비 데이터를 Rust, PostgreSQL JSONB, Redis 조합으로 분리하는 편이 맞는지 직접 확인하기 위해 만든 프로젝트입니다.
  </p>
</div>

<section class="hub-section">
  <p class="hub-section-kicker">Proof</p>
  <h3>메인 페이지에서 바로 확인할 수 있는 증거</h3>
  <div class="hub-proof-grid">
    <div class="hub-proof-card">
      <div class="hub-proof-media">
        <pre class="hub-proof-code"><code>BagInCoffee Client
        |
Community Flow
        |
     BagInDB
   /          \
JSONB Specs   Redis Cache
        |
   Product Search</code></pre>
      </div>
      <span class="hub-label">Boundary Proof</span>
      <strong>커뮤니티 흐름과 장비 탐색 흐름의 리듬이 달랐기 때문에, BagInDB를 별도 도메인 서비스로 분리하는 편이 맞았습니다</strong>
      <p>BagInDB는 단순 CRUD 서버가 아니라, 브랜드와 제품 스펙 탐색을 커뮤니티 피드와 다른 데이터 경계로 옮겨야 한다는 판단을 백엔드 구조로 증명한 프로젝트입니다.
      추가적으로 다양한 데이터를 llm을 통한 데이터 수집을 통해 자료에 없더라도 검증 후 탐색이라는 LLM 기반 데이터와 RAG 형태를 결합한 새로운 형태로 개선을 하고 싶습니다.
      </p>
    </div>
    <div class="hub-proof-card">
      <span class="hub-label">Observed Metrics</span>
      <strong>캐시 적중 시 10ms 이하 응답, 캐시 적중률 85% 이상, 15개 이상 엔드포인트와 다국어 모델링까지 연결했습니다</strong>
      <p>브랜드, 카테고리, 제품 목록과 상세, 필터 검색, 실제로 DB를 튜닝하고 다양한 검색엔진을 추가하면 테스트하고 원리를 분석하여 최적화를 진행했습니다..</p>
    </div>
  </div>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Why This Project</p>
  <h3>왜 별도 도메인 서비스가 필요했는가</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Problem</span>
        <p>커뮤니티 데이터는 사용자와 콘텐츠 중심이지만, 장비 데이터는 브랜드, 카테고리, 제품 스펙, 필터 검색, 다국어 표현처럼 다른 요구사항을 갖고 있었습니다. 커피라는 취미 자체가 규모가 작지만 활발하게 해외 직구가 진행되다 보니 필요한 상품의 가격을 추적하고 공유하는 목표가 필요했습니다. 그러나 상품이 생각보다 많아 다나와를 크롤링해 데이터를 정리하다 보니 만개가 넘는 기구 원두가 존재 하였습니다.
        </p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Shift</span>
        <p>그래서 BagInDB는 단순 부속 API가 아니라, 커뮤니티 서비스와 다른 리듬으로 동작하는 장비 도메인을 분리할 수 있는지 검증하는 별도 서비스가 되었습니다. 추후 확장을 목표로 하는 메인 시스템을 구축하는 방향으로 나아가게 되었습니다.
        
        </p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Scope</span>
        <p>1인 개발로 데이터 모델링, API 설계, 캐싱 전략, JWT 검증, 문서화를 직접 맡았고, 현재는 독립 서비스로 유지 가능한 구조를 확인한 상태입니다. </p>
      </div>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Key Decisions</p>
  <h3>설계 방향</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Decision 1</span>
        <p>장비 도메인을 커뮤니티 백엔드와 분리했습니다. 처음에는 Java spring boot를 이용한 백엔드로써 개발이 되었지만 작은 Nas 서버에서 구동하기 위한 시스템으로써 최소ㅇ한의 리소스와 최소한의 오버헤드를 목표로 잡다보니 java와 같은 시스템이 알맞지 않았습니다. 그래서 Rust같은 제품 안의 데이터라고 해도 접근 패턴과 변경 방식이 다르면 서비스 경계를 나누는 편이 더 낫다고 판단했기 때문입니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Decision 2</span>
        <p>정규화 중심 스키마만 고집하지 않고 JSONB 기반 스펙 저장을 택했습니다. 카테고리별로 필요한 속성이 달라, 유연성을 포기하는 편이 더 큰 비용이라고 봤기 때문입니다. 여기서 상품을 다룰려다 보니 시스템이 범용성을 띄어야했다고 판단을 하고 JSONB를 사용했습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Decision 3</span>
        <p>Rust와 Redis 조합을 선택했습니다. 반복 조회가 많은 API를 낮은 리소스로 운영하려면, 응답 비용과 캐시 전략을 처음부터 함께 설계하는 편이 맞다고 판단했습니다.</p>
      </div>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">What Was Proven</p>
  <h3>구현 방식</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Observed</span>
        <p>브랜드, 카테고리, 제품 목록과 상세, 필터 기반 조회, JWT 검증 흐름까지 장비 데이터 API 전반을 실제로 연결했습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Metrics</span>
        <p>캐시에 대해서 최신 상품에 대한 캐시는 성공률이 좋았지만 부족한 인기있는 상품을 제외한 상품 조회의 경우에 캐시 미스가 발생하는 방식이 생겼습니다. </p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Scope</span>
        <p>핵심은 CRUD가 아니라 장비 데이터의 다국어 모델링, 캐싱, 무효화, 분리 운영 가능성까지 함께 확인했다는 점입니다.</p>
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
        <p>현재는 도메인 분리와 API 구조 검증이 핵심이며, 장기 운영 기준으로 어떤 무효화 정책과 데이터 관리 전략이 가장 단순한지는 더 다듬어야 합니다. HDD와 SSD에 대해서 선택이 필요하다고 생각을 합니다. 장기적으로 보았을때는 SSD가 맞을 수도 있다라는 생각이 들었습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Risk</span>
        <p>JSONB와 캐시 전략은 유연하지만, 스키마 관리와 무효화 기준이 느슨하면 운영 복잡도가 올라갈 수 있다는 점도 같이 인식하고 있습니다. 그러나 LLM을 연결해 추천해주는 시스템을 추가한다고 했을때 알맞는 데이터의 형태는 아니라고 생각을 합니다. 이러한 시스템을 최근 연구했던 RAG 시스템을 결합하는 방식으로써 나아가야한다고 생각을 합니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Next</span>
        <p>다음 단계에서넌 더 많은 시스템을 최적화 하는 부분이 필요하다고 생각을 합니다 LLM의 시대가 오면서 RAG와 SSD를 사용해 캐시의 비용을 줄이고 데이터를 최적화하는 방식이 필요하다고 생각이 들었습니다.</p>
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
        <strong>커뮤니티 백엔드 안에 있던 장비 데이터를 먼저 별도 도메인으로 떼어냈습니다</strong>
        <p>출발점은 BagInCoffee 내부 기능이었습니다. 하지만 장비 데이터는 반복 조회와 탐색 중심이라 커뮤니티 데이터와 다른 요구를 가지기 때문에, 별도 서비스로 분리하는 편이 더 맞다고 판단했습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Step 2</span>
        <strong>쓰기보다 읽기가 많은 도메인에 맞춰 탐색형 API와 JSONB 모델을 먼저 설계했습니다</strong>
        <p><a href="./api-surface">브랜드, 카테고리, 제품 상세, 필터 검색 API</a>를 먼저 잡고, 카테고리별로 달라지는 속성은 JSONB 기반으로 다뤘습니다. 정규화보다 유연성이 더 중요한 도메인이라고 봤기 때문입니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Step 3</span>
        <strong>라우트, 핸들러, 데이터 계층, 모델, 캐시를 분리해 저비용 조회 경로를 만들었습니다</strong>
        <p>`routes -> handlers -> cache/db -> models` 흐름으로 계층을 나눴고, 반복 조회가 많은 API는 Redis를 붙여 응답 비용을 줄이려 했습니다. Rust를 선택한 이유도 낮은 리소스로 이 경로를 운영하기 위해서였습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Step 4</span>
        <strong>캐시가 잘 맞는 조회와 안 맞는 조회를 분리해서 관찰했고, 그 결과를 다음 설계로 남겼습니다</strong>
        <p><a href="./cache-strategy">Cache Strategy</a>에 정리했듯 인기 상품에서는 캐시 효과가 컸지만 꼬리 조회에서는 캐시 미스가 늘었습니다. 그래서 이 페이지는 단순 구현 소개가 아니라 어떤 최적화가 실제로 유효했는지까지 함께 보여 주는 한 페이지가 됩니다.</p>
      </div>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Source</p>
  <h3>원본과 연결 지점</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <a href="https://github.com/BbangMxn/BagInCoffee/tree/main/BagInDB">
        <span class="hub-label">GitHub</span>
        <strong>BagInCoffee / BagInDB</strong>
        <p>BagInCoffee 저장소 안에서 장비 도메인 서비스를 별도 디렉터리로 분리해 관리하고 있습니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="../BagInCoffee">
        <span class="hub-label">Parent</span>
        <strong>BagInCoffee</strong>
        <p>커뮤니티와 장비 데이터를 한 서비스에 두지 않고, 장비 영역만 따로 떼어낸 상위 프로젝트입니다.</p>
      </a>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Architecture</p>
  <h3>요청 흐름과 파일 구조는 별도 페이지에서 봅니다</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <a href="./architecture">
        <span class="hub-label">Code Structure</span>
        <strong>BagInDB Architecture</strong>
        <p><code>main -> routes -> handlers -> cache/db -> models</code> 흐름과 Supabase migration 구조를 한 페이지에서 정리합니다.</p>
      </a>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Structure</p>
  <h3>프로젝트 구조</h3>

```text
BagInDB/
├── src/
│   ├── main.rs
│   ├── routes/
│   ├── handlers/
│   ├── middleware/
│   ├── cache/
│   ├── db/
│   └── models/
├── supabase/
│   └── migrations/
├── DB_SCHEMA.md
├── DB_STRUCTURE.md
├── JSONB_FILTER_GUIDE.md
├── README.md
└── Cargo.toml
```

<p>짧은 트리보다 실제 요청 경계와 폴더 역할이 더 중요합니다. 서버가 어떻게 조립되고 어떤 계층을 거쳐 응답이 나가는지는 <a href="./architecture">Architecture</a>에서 따로 정리했습니다.</p>

</section>
