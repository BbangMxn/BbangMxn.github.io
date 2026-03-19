---
title: Work Framework
tags:
  - project
  - ai-agent
  - roadmap
cssclasses:
  - folder-hub
---

<div class="hub-header">
  <p class="hub-kicker">프로젝트 / 진행 중</p>
  <h2>work를 agent framework 관점에서 다시 정리하는 로드맵</h2>
  <p class="hub-lede">
    이 페이지는 완성된 프로젝트 소개가 아니라, 기존 work 계열 실험을 openclaw 같은 agent 시스템 framework 관점에서 다시 구조화하려는 진행 중 로드맵입니다.
    지금 단계에서는 결과를 과장하기보다 범위, 목표, 다음에 정리할 문서 축을 공개하는 편이 맞다고 판단했습니다.
  </p>
</div>

<section class="hub-section">
  <p class="hub-section-kicker">상태</p>
  <h3>현재 어디까지 정리됐는가</h3>
  <div class="hub-grid">
    <div class="hub-card">
      <span class="hub-label">현재 상태</span>
      <strong>구조 재정의 단계</strong>
      <p>기존 구현을 그대로 소개하기보다 agent runtime, tool orchestration, safety boundary를 어떤 기준으로 다시 나눌지 정리하는 중입니다.</p>
    </div>
    <div class="hub-card">
      <span class="hub-label">핵심 질문</span>
      <strong>무엇이 제품이고 무엇이 프레임워크인가</strong>
      <p>실험용 기능 집합을 그대로 확장할지, 재사용 가능한 framework 계층으로 추출할지부터 다시 정의합니다.</p>
    </div>
    <div class="hub-card">
      <span class="hub-label">출력 목표</span>
      <strong>로드맵과 구조 기준</strong>
      <p>완성된 구현 소개 대신 먼저 설계 축, 책임 경계, 다음 문서 계획을 공개 상태로 정리합니다.</p>
    </div>
    <div class="hub-card">
      <span class="hub-label">공개 방식</span>
      <strong>진행 중 프로젝트</strong>
      <p>이 페이지는 미완성 결과를 숨기지 않고, 어떤 방향으로 재정리 중인지 명시적으로 보여주는 입구 역할을 맡습니다.</p>
    </div>
  </div>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">범위</p>
  <h3>정리할 축</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Runtime</span>
        <p>agent가 어떤 상태와 실행 문맥을 가지는지, 세션과 워크스페이스를 어떤 단위로 나눌지 정리합니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Tools</span>
        <p>tool registration, capability boundary, approval flow를 제품 로직과 어떻게 분리할지 정의합니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Safety</span>
        <p>제안, 승인, 실행, 동기화, 관찰 가능성을 어느 계층에 둘지 정리해 재사용 가능한 안전 기준을 만들 계획입니다.</p>
      </div>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">다음</p>
  <h3>다음에 추가할 문서</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">1</span>
        <p>framework 목표와 비목표를 정의하는 루트 문서</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">2</span>
        <p>runtime, tool, safety 경계를 분리한 아키텍처 초안</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">3</span>
        <p>기존 work 구현에서 재사용 가능한 요소와 버릴 요소를 나누는 비교 문서</p>
      </div>
    </li>
  </ul>
</section>
