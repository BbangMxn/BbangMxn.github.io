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
  <h2>Go와 TimescaleDB, Redis로 설계한 스마트 팩토리 모니터링 플랫폼 연구</h2>
  <p class="hub-lede">
    OPC UA와 MQTT 기반 데이터 수집, 시계열 저장, 실시간 WebSocket 모니터링, 이상 알림까지 이어지는 IoT 파이프라인을 연구와 구현으로 함께 정리한 프로젝트입니다.
  </p>
</div>

<section class="hub-section">
  <p class="hub-section-kicker">Overview</p>
  <h3>프로젝트 개요</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Goal</span>
        <p>산업 장비 데이터를 수집하고 OEE를 계산하며, 실시간 모니터링과 이상 알림까지 연결되는 스마트 팩토리 플랫폼 구조 검증</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Role</span>
        <p>연구 문서와 실제 구현체를 함께 정리하며 아키텍처, 프로토콜 분석, 백엔드 구현 방향을 직접 설계</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">State</span>
        <p>연구와 구현이 같이 들어있는 저장소 형태로 구조화되어 있고, 프로토콜 비교와 시스템 설계 문서가 포함된 상태</p>
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
  <p class="hub-section-kicker">Built</p>
  <h3>구현한 것</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Collection</span>
        <p>OPC UA와 MQTT를 통해 PLC와 센서 데이터를 수집하는 다중 프로토콜 Collector 구조를 설계했습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Monitoring</span>
        <p>TimescaleDB 기반 시계열 저장, Redis 캐시, WebSocket 실시간 스트림을 묶어 대시보드 흐름을 구성했습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Alerting</span>
        <p>OEE 계산과 이상 감지, Slack과 Email 알림까지 이어지는 운영 관점의 기능을 포함했습니다.</p>
      </div>
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
