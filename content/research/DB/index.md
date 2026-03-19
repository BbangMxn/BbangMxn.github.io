---
title: DB 연구 로드맵
tags:
  - research
  - database
  - roadmap
cssclasses:
  - folder-hub
---

<div class="hub-header">
  <p class="hub-kicker">연구 / DB</p>
  <h2>DB 최적화와 구조 판단을 위한 진행 중 트랙</h2>
  <p class="hub-lede">
    이 트랙은 데이터베이스를 단순 사용법이 아니라 비용 구조와 운영 전략의 문제로 다시 정리하려는 연구 로드맵입니다.
    현재는 PostgreSQL을 기준 축으로 두고 인덱스, 옵티마이저, 클러스터링, 레플리케이션, 샤딩을 어떤 순서로 이해하고 비교할지 공개 상태로 관리합니다.
  </p>
</div>

<section class="hub-section">
  <p class="hub-section-kicker">상태</p>
  <h3>현재 어디까지 왔는가</h3>
  <div class="hub-grid">
    <div class="hub-card">
      <span class="hub-label">기준 DB</span>
      <strong>PostgreSQL 중심</strong>
      <p>실험과 정리는 PostgreSQL을 기준 축으로 시작합니다. 이후 비교가 필요할 때 다른 시스템으로 확장합니다.</p>
    </div>
    <div class="hub-card">
      <span class="hub-label">현재 상태</span>
      <strong>로드맵 공개 단계</strong>
      <p>빈 메모를 쌓아 두는 대신, 지금은 질문과 읽는 순서, 다음에 정리할 범위를 먼저 공개합니다.</p>
    </div>
    <div class="hub-card">
      <span class="hub-label">핵심 질문</span>
      <strong>무엇을 먼저 최적화해야 하는가</strong>
      <p>인덱스 설계, 옵티마이저 이해, 데이터 배치, 복제, 분산 확장 중 어떤 축이 실제 병목과 운영 비용을 바꾸는지 정리합니다.</p>
    </div>
    <div class="hub-card">
      <span class="hub-label">출력 목표</span>
      <strong>설계 기준 문서</strong>
      <p>각 주제는 개념 요약보다도 시스템 선택 기준과 실무적인 판단 포인트를 남기는 문서로 발전시키는 것이 목표입니다.</p>
    </div>
  </div>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">입구</p>
  <h3>먼저 읽을 문서</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <a href="./01-초록">
        <span class="hub-label">배경</span>
        <strong>DB 연구 배경</strong>
        <p>왜 DB를 따로 연구 트랙으로 분리했고, 어떤 질문과 범위에서 시작하는지 먼저 정리한 출발점입니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="./02_1-Index">
        <span class="hub-label">1단계</span>
        <strong>인덱스</strong>
        <p>가장 먼저 정리할 주제입니다. 조회 비용을 실제로 바꾸는 인덱스 구조와 트레이드오프를 다룹니다.</p>
      </a>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">로드맵</p>
  <h3>다음 정리 순서</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <a href="./02_1-Index">
        <span class="hub-label">Planned</span>
        <strong>인덱스</strong>
        <p>B-Tree, Hash, GIN, BRIN, 복합 인덱스, 부분 인덱스까지 어떤 조건에서 선택이 갈리는지 정리합니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="./02_2-Optimizer">
        <span class="hub-label">Planned</span>
        <strong>옵티마이저</strong>
        <p>쿼리 플랜이 어떤 통계와 비용 모델을 바탕으로 선택되는지, 실행 계획을 어떻게 읽을지 정리합니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="./02_3-Clustering">
        <span class="hub-label">Planned</span>
        <strong>클러스터링</strong>
        <p>데이터 배치와 물리 정렬이 읽기 비용과 쓰기 비용에 어떤 영향을 주는지부터 정리합니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="./02_4-Replication">
        <span class="hub-label">Planned</span>
        <strong>레플리케이션</strong>
        <p>복제가 읽기 확장과 장애 대응에 어떤 이점을 주고 어떤 운영 복잡도를 만드는지 다룹니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="./02_5-Sharding">
        <span class="hub-label">Planned</span>
        <strong>샤딩</strong>
        <p>분산 확장이 실제로 필요한 시점과 샤드 키, 재분배, 쿼리 복잡도를 어떤 기준으로 봐야 하는지 정리합니다.</p>
      </a>
    </li>
  </ul>
</section>
