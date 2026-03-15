---
title: Smart Factory
tags:
  - portfolio
  - go
  - iot
  - timescaledb
cssclasses:
  - folder-hub
---

<div class="hub-header">
  <p class="hub-kicker">Projects / IoT Platform</p>
  <h2>Smart Factory는 IoT 모니터링 기능 목록을 정리한 프로젝트가 아니라, 연구와 구현을 한 저장소 안에 묶어 스마트 팩토리 문제를 어떻게 다뤄야 하는지 검토한 프로젝트입니다</h2>
  <p class="hub-lede">
    스마트 팩토리 문제는 단순 대시보드 구현이 아니라, 어떤 프로토콜로 데이터를 수집하고 어떤 저장소에 쌓고 어떤 방식으로 실시간성과 운영성을 맞출 것인가의 문제에 가깝습니다. 이 프로젝트는 그 판단을 연구 문서와 구현 구조를 함께 두는 방식으로 정리했습니다.
  </p>
</div>

<section class="hub-section">
  <p class="hub-section-kicker">Why This Project</p>
  <h3>왜 연구와 구현을 함께 묶었는가</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Problem</span>
        <p>스마트 팩토리 시스템은 장비 데이터 수집, 프로토콜 선택, 시계열 저장, 실시간 모니터링, 이상 알림이 모두 연결되어야 해서 구현보다 설계 판단이 먼저 필요한 영역이었습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Approach</span>
        <p>그래서 Smart Factory는 구현체만 두는 대신, 산업 분석과 통신 표준 비교, 시스템 설계, 프로토타입 구현을 한 저장소 안에서 함께 다루는 구조를 택했습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Scope</span>
        <p>연구 문서와 실제 구현체를 함께 정리하며 아키텍처, 프로토콜 분석, 백엔드 구현 방향을 직접 설계했고, 현재는 연구와 구현이 같이 들어있는 저장소 형태로 구조화되어 있습니다.</p>
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
        <p>OPC UA와 MQTT를 함께 다루는 다중 프로토콜 구조를 전제로 잡았습니다. 스마트 팩토리에서는 한 가지 프로토콜만 기준으로 삼는 편이 실제 환경을 충분히 설명하지 못한다고 봤기 때문입니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Decision 2</span>
        <p>시계열 데이터 저장을 위해 TimescaleDB를 중심에 두고 Redis와 WebSocket을 연결했습니다. 단순 CRUD 저장소보다 시간축과 실시간성을 먼저 고려해야 한다고 판단했기 때문입니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Decision 3</span>
        <p>구현체만 두지 않고 연구 문서를 함께 뒀습니다. 이 영역은 아키텍처와 표준 선택의 근거가 구현만큼 중요하다고 봤기 때문입니다.</p>
      </div>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">What Was Proven</p>
  <h3>무엇이 실제로 정리되고 연결됐는가</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Observed Scope</span>
        <p>산업 분석, 통신 표준 비교, 시스템 설계, 실제 구현체를 하나의 저장소 안에 연결해, 문제를 연구 단계와 구현 단계로 분리하지 않고 다룰 수 있는 구조를 만들었습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Flow</span>
        <p>OPC UA/MQTT Collector, Pipeline, TimescaleDB, Redis Cache, WebSocket Dashboard, Alert 흐름으로 이어지는 전체 아키텍처를 문서와 구조 양쪽에서 정리했습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Coverage</span>
        <p>핵심 가치는 운영 중인 대규모 수치보다도, 어떤 문제를 어떤 구성으로 풀어야 하는지에 대한 설계 범위를 분명히 잡았다는 데 있습니다.</p>
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
        <p>이 프로젝트는 구조와 방향을 정리하는 데 강점이 있지만, 아직 운영 지표나 대규모 실사용 검증을 말할 단계는 아닙니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Risk</span>
        <p>다중 프로토콜과 실시간 흐름은 설계가 복잡해지기 쉬워, 구현이 늘어날수록 실제 운영 복잡도를 어떻게 제어할지가 중요한 과제로 남아 있습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Next</span>
        <p>다음 단계는 현재 정리된 설계가 실제 구현과 운영 시나리오에서 얼마나 일관되게 유지되는지 더 구체적으로 검증하는 것입니다.</p>
      </div>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Source</p>
  <h3>원본 위치</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <a href="https://github.com/BbangMxn/smartfactory">
        <span class="hub-label">GitHub</span>
        <strong>BbangMxn/smartfactory</strong>
        <p>연구 문서와 실제 구현체를 한 저장소에 담아 스마트 팩토리 시스템을 단계적으로 검증한 프로젝트입니다.</p>
      </a>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Structure</p>
  <h3>저장소 구조</h3>

```text
smartfactory/
├── research/
│   ├── planning/
│   ├── docs/
│   └── impl/
└── smartpack/
    ├── cmd/
    ├── internal/
    └── deployments/
```

</section>
