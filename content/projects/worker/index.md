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
  <h2>이메일, 캘린더, 연락처와 AI Agent를 한 화면으로 묶은 업무 자동화 실험</h2>
  <p class="hub-lede">
    단순 메일 클라이언트를 만드는 대신, 업무 도구 자체를 AI와 함께 다시 설계해보는 방향으로 진행한 프로젝트입니다. 기능 구현뿐 아니라 과도한 구조를 직접 겪고 다시 단순화하려는 판단까지 함께 남겼습니다.
  </p>
</div>

<section class="hub-section">
  <p class="hub-section-kicker">Overview</p>
  <h3>프로젝트 개요</h3>
  <div class="hub-note">
    <span class="hub-label">Summary</span>
    <p>1인 개발로 제품 방향, 프론트엔드, 백엔드, AI 파이프라인, 데이터 설계, 문서화를 맡았습니다. 현재는 동작 검증을 마쳤고 구조를 다시 정리하는 단계입니다.</p>
  </div>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Stack</span>
        <p>Go 1.24, Fiber, Next.js 14, PostgreSQL, MongoDB, Redis, Neo4j, OpenAI, pgvector</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Goal</span>
        <p>이메일, 캘린더, 연락처를 통합하고 자연어 기반 AI Agent가 작업을 제안하거나 실행하는 워크스페이스를 실험</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">State</span>
        <p>자동 번역, 분류, 요약, 실시간 동기화, RAG 기반 개인화 답장 구조까지 검증했지만 일부 실행 플로우는 재설계 중</p>
      </div>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Source</p>
  <h3>원본 위치</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Local</span>
        <p><code>C:\Users\jixso\Desktop\zed\MyData\worker</code></p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">GitHub</span>
        <p><a href="https://github.com/BbangMxn/worker">BbangMxn/worker</a></p>
      </div>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Built</p>
  <h3>구현한 것</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Workspace</span>
        <p>이메일, 캘린더, 연락처, AI 채팅과 명령 인터페이스를 하나의 UI에 묶었습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Agent</span>
        <p>자연어 명령을 해석하고 도구 실행 계획을 세운 뒤, 바로 실행하지 않고 Proposal 기반으로 사용자 확인을 거치게 했습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Classification</span>
        <p>RFC 헤더, 도메인, 제목 패턴, 사용자 규칙, known domain DB를 먼저 통과시키고 마지막에만 LLM fallback을 두는 7단계 이메일 분류 파이프라인을 만들었습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Realtime</span>
        <p>Gmail Pub/Sub, historyId 기반 델타 수집, SSE 브로드캐스트를 묶어 실시간 동기화 흐름을 구성했습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Personalization</span>
        <p>사용자가 보낸 이메일을 분석해 문체를 학습하고, 유사 이메일 검색과 답장 생성을 연결하는 RAG personalization 구조를 실험했습니다.</p>
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
        <p>이메일 자동 번역, 분류, 요약은 동작을 확인했고, 7단계 분류 구조로 LLM 호출량을 약 75% 줄이는 방향을 확인했습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Sync</span>
        <p>Gmail 실시간 동기화와 RAG 기반 개인화 답장 구조는 검증을 마쳤습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Limit</span>
        <p>Proposal 실행 연결, Outlook 동기화 보완, 다중 DB 운영 복잡도 축소가 남아 있습니다.</p>
      </div>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Retrospective</p>
  <h3>기술보다 중요한 판단</h3>
  <div class="hub-note">
    <span class="hub-label">Learning</span>
    <p>Neo4j를 유지할 이유가 충분한지, PostgreSQL과 MongoDB와 Redis만으로 줄일 수 있는지, 분류 파이프라인의 유지 비용이 실제 이득보다 큰지까지 스스로 다시 따져보게 만든 프로젝트입니다.</p>
  </div>
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
