---
title: Portfolio Standard
tags:
  - wiki
  - portfolio
  - standard
cssclasses:
  - folder-hub
---

<div class="hub-header">
  <p class="hub-kicker">Wiki / Standard</p>
  <h2>포트폴리오 문서를 같은 형식으로 읽히게 만드는 기준</h2>
  <p class="hub-lede">
    프로젝트를 많이 늘리는 것보다, 각 문서가 같은 질문에 답하게 만드는 편이 더 중요합니다. 이 문서는 홈, Projects, Research, Wiki가 어떤 역할을 갖고 프로젝트 페이지가 어떤 구조를 따라야 하는지 정리합니다.
  </p>
</div>

<section class="hub-section">
  <p class="hub-section-kicker">Sections</p>
  <h3>섹션 역할</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Home</span>
        <p>방문자가 무엇을 만들었는지 빠르게 파악하는 입구입니다. 대표 프로젝트 2~3개와 사이트 읽는 순서만 보여줍니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Projects</span>
        <p>문제, 구조, 결과가 정리된 최종 사례만 둡니다. 저장소가 있다고 바로 올리지 않고, 설명 가능한 것만 넣습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Research</span>
        <p>실험 중인 구조와 비교, 아이디어, 설계 초안을 쌓는 공간입니다. 충분히 설명 가능해지면 Projects나 Wiki로 이동합니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Wiki</span>
        <p>오래 유지할 기준 문서만 둡니다. 반복해서 참조할 규칙, 개념, 운영 방식이 여기에 들어갑니다.</p>
      </div>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Project Page</p>
  <h3>프로젝트 페이지 기본 구조</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Header</span>
        <p>한 줄로 프로젝트 정체성을 말합니다. 무엇을 만들었는지보다 어떤 문제를 어떤 방식으로 다뤘는지가 먼저 보여야 합니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Overview</span>
        <p><strong>Goal</strong>, <strong>Role</strong>, <strong>State</strong> 세 개의 카드로 프로젝트의 범위와 현재성을 먼저 설명합니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Source</span>
        <p>GitHub 원본 위치와 관련 프로젝트를 연결합니다. 저장소가 비어 있거나 설명이 부족하면 아직 가져오지 않습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Built</span>
        <p>기능 목록이 아니라 핵심 구현 축 3개 정도만 적습니다. 사용자가 이 프로젝트의 구조를 이해할 수 있을 정도면 충분합니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Results</span>
        <p>가능하면 관측값 하나와 배운 점 하나를 남깁니다. 수치가 없어도, 무엇이 검증됐고 무엇이 남았는지는 분명히 적습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Structure</span>
        <p>저장소 구조나 하위 모듈이 있다면 코드 블록 하나로 끝냅니다. 세부 구현은 하위 문서에서 다룹니다.</p>
      </div>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Import Rules</p>
  <h3>GitHub 저장소를 가져오는 기준</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Include</span>
        <p>README가 있고, 역할과 결과를 설명할 수 있으며, 현재 포트폴리오 서사와 연결되는 공개 저장소만 가져옵니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Hold</span>
        <p>빈 저장소, 메모만 있는 저장소, 아직 방향이 불명확한 저장소는 보류합니다. DataPipline 같은 경우가 여기에 해당합니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Exclude</span>
        <p>현재 포트폴리오 메시지와 맞지 않거나, 지금 보여주고 싶지 않은 저장소는 허브에 올리지 않습니다. 예시는 그때그때 제외합니다.</p>
      </div>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Writing</p>
  <h3>문장 규칙</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">One Line</span>
        <p>첫 문장은 기술 이름 나열이 아니라 문제와 방향을 한 문장으로 요약합니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Three Axes</span>
        <p>각 프로젝트는 가능하면 문제 정의, 구조 선택, 결과 혹은 회고의 세 축으로 읽혀야 합니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Naming</span>
        <p>프로젝트 루트 문서는 기본적으로 <code>index.md</code>를 사용하고, 하위 작업 문서만 번호를 붙입니다.</p>
      </div>
    </li>
  </ul>
</section>
