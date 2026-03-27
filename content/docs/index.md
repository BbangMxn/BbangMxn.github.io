---
title: 문서 템플릿
tags:
  - docs
  - template
  - workflow
cssclasses:
  - folder-hub
---

<div class="hub-header">
  <p class="hub-kicker">문서 / 공통</p>
  <h2>반복해서 쓰는 문서 form을 한곳에 모아 둔 템플릿 허브</h2>
  <p class="hub-lede">
    이 섹션은 프로젝트마다 같은 형식으로 써야 하는 문서를 정리한 공통 템플릿 모음입니다.
    구현 전에 문제와 범위를 고정하는 문서부터, 설계와 작업 단위를 나누는 문서까지 여기서 기준을 맞춥니다.
  </p>
</div>

<section class="hub-section">
  <p class="hub-section-kicker">기본 흐름</p>
  <h3>먼저 볼 세 문서</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <a href="./spec">
        <span class="hub-label">Spec</span>
        <strong>SPEC Template</strong>
        <p>문제를 먼저 정의하고 범위, 제약, 성공 기준을 고정하는 기본 명세 문서입니다. 구현 전 단계의 기준점입니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="./design">
        <span class="hub-label">Design</span>
        <strong>DESIGN Template</strong>
        <p>Spec에서 확정된 범위를 실제 구조와 컴포넌트, 데이터 흐름, 기술 선택으로 풀어내는 설계 문서입니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="./task">
        <span class="hub-label">Task</span>
        <strong>TASK Template</strong>
        <p>구현할 작업을 체크 가능한 단위로 쪼개고 우선순위, 의존성, 검증 기준을 붙이는 실행 문서입니다.</p>
      </a>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">사용 규칙</p>
  <h3>공통 문서 운영 원칙</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">순서</span>
        <p>기본 순서는 <code>spec.md</code>, <code>design.md</code>, <code>task.md</code>입니다. 설계와 작업은 명세보다 먼저 나오지 않습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">빈칸 금지</span>
        <p>해당 사항이 없으면 비워 두지 말고 <code>N/A</code>와 이유를 적습니다. 템플릿을 비워 두면 나중에 해석 차이가 커집니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">검증 가능</span>
        <p>성공 기준, 오류 처리, 성능 목표는 반드시 테스트나 운영 지표로 확인 가능한 문장으로 적습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">복사 기준</span>
        <p>새 프로젝트 문서를 만들 때는 여기 있는 폼을 복사해서 프로젝트 폴더 안의 같은 파일명으로 가져갑니다.</p>
      </div>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">파일 규칙</p>
  <h3>권장 파일 이름</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">명세</span>
        <p>구현 전에 문제와 범위를 고정하는 문서는 <code>spec.md</code>를 사용합니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">설계</span>
        <p>구조와 데이터 흐름, API 변경을 설명하는 문서는 <code>design.md</code>를 사용합니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">작업</span>
        <p>구현 단위와 일정, 검증 체크리스트를 정리하는 문서는 <code>task.md</code>를 사용합니다.</p>
      </div>
    </li>
  </ul>
</section>
