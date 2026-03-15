---
title: Worker
tags:
  - portfolio
  - ai-agent
  - go
  - nextjs
  - workflow
cssclasses:
  - folder-hub
---

<div class="hub-header">
  <p class="hub-kicker">Projects / AI Workspace</p>
  <h2>Worker는 메일 도구를 하나 더 만드는 대신, 업무 도구 자체를 AI 워크스페이스로 다시 설계하며 과도한 구조를 직접 검증한 프로젝트입니다</h2>
  <p class="hub-lede">
    처음 목표는 이메일, 캘린더, 연락처를 한 화면에 모으는 것이었지만, 구현을 진행할수록 더 중요한 문제는 AI Agent가 실제 업무 도구 안에서 어떻게 안전하게 동작해야 하는가였습니다. Worker는 기능 구현뿐 아니라 어떤 구조가 과했고 무엇을 줄여야 했는지까지 함께 남긴 프로젝트입니다.
  </p>
</div>

<section class="hub-section">
  <p class="hub-section-kicker">Why This Project</p>
  <h3>왜 이 프로젝트를 다시 보게 되었는가</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Problem</span>
        <p>업무 도구는 이메일, 캘린더, 연락처가 분리되어 있고, 사용자는 분류와 정리를 반복해서 직접 해야 합니다. 단순 메일 클라이언트 구현만으로는 이 문제를 충분히 다뤘다고 보기 어려웠습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Shift</span>
        <p>그래서 Worker는 화면 통합 프로젝트가 아니라, AI Agent가 실제 업무 흐름 안에서 제안과 실행을 어떻게 다뤄야 하는지 검증하는 워크스페이스 실험으로 방향이 바뀌었습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Scope</span>
        <p>1인 개발로 제품 방향, 프론트엔드, 백엔드, AI 파이프라인, 데이터 설계, 문서화를 맡았고, 현재는 동작 검증을 마친 뒤 구조를 다시 정리하는 단계입니다.</p>
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
        <p>AI가 바로 작업을 실행하지 않도록 Proposal 기반 구조를 택했습니다. 이메일 전송이나 일정 생성은 실수 비용이 크기 때문에, 자동화보다도 확인 가능한 안전 장치가 먼저라고 판단했기 때문입니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Decision 2</span>
        <p>이메일 분류에서 모든 요청을 바로 LLM으로 보내지 않고 7단계 분류 파이프라인을 만들었습니다. 비용을 줄이는 것뿐 아니라, 어떤 규칙이 실제로 유효한지 먼저 확인하고 싶었기 때문입니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Decision 3</span>
        <p>PostgreSQL, MongoDB, Redis, Neo4j를 역할별로 나눴지만, 검증이 끝난 뒤에는 이 구성이 과했다는 점도 함께 확인했습니다. Worker는 복잡한 구조를 채택한 경험과 그것을 다시 줄이려는 판단까지 포함하는 프로젝트입니다.</p>
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
        <span class="hub-label">Workspace</span>
        <p>이메일, 캘린더, 연락처, AI 채팅과 명령 인터페이스를 하나의 UI로 묶었고, 업무 도구를 분리된 앱이 아니라 하나의 워크스페이스로 다루는 흐름은 실제로 확인했습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Observed</span>
        <p>이메일 자동 번역, 분류, 요약, Gmail 실시간 동기화, RAG 기반 개인화 답장 구조는 동작을 확인했고, 7단계 분류 구조로 LLM 호출량을 약 75% 줄이는 방향도 검증했습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Scope</span>
        <p>특히 Proposal 생성, 분류 파이프라인, SSE 기반 동기화, 문체 학습과 개인화 답장까지 한 흐름으로 이어지는지 확인한 것이 이 프로젝트의 실제 검증 범위입니다.</p>
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
        <p>Proposal 생성은 가능하지만 실제 실행 연결은 일부 미완성이고, Outlook 동기화도 아직 보완이 필요합니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Risk</span>
        <p>Neo4j를 포함한 4개 DB 운영은 개인 프로젝트 기준으로 복잡도가 높았고, 유지 비용이 실제 이득보다 커질 수 있다는 점이 분명해졌습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Next</span>
        <p>다음 단계는 구조를 더 단순하게 줄이는 것입니다. PostgreSQL, MongoDB, Redis 중심으로 재정리하고, Proposal 실행 플로우를 완성하는 쪽이 현재 기준의 우선순위입니다.</p>
      </div>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Source</p>
  <h3>원본과 연결 지점</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <a href="https://github.com/BbangMxn/worker">
        <span class="hub-label">GitHub</span>
        <strong>BbangMxn/worker</strong>
        <p>AI 워크스페이스 실험 전체를 담은 공개 저장소입니다.</p>
      </a>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Structure</p>
  <h3>프로젝트 구조</h3>

```text
worker/
├── worker_client/   # Next.js 14 frontend
├── worker_server/   # Go backend
└── docs/            # 로드맵 및 설계 문서
```

</section>
