---
title: Java Object Research
tags:
  - research
  - java
  - jvm
  - object-model
cssclasses:
  - folder-hub
---

<div class="hub-header">
  <p class="hub-kicker">Research / Java Object</p>
  <h2>객체 모델이 만드는 JVM 비용을 추적합니다</h2>
  <p class="hub-lede">
    이 폴더는 JVM 구조 이해에서 시작해 객체 헤더, 참조 추적, 메모리 오버헤드,
    그리고 대안 설계 방향까지 한 흐름으로 읽을 수 있게 구성한 연구 허브입니다.
  </p>
</div>

<section class="hub-section">
  <p class="hub-section-kicker">Start Here</p>
  <h3>먼저 읽을 문서</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <a href="./start-here">
        <span class="hub-label">Index</span>
        <strong>Start Here</strong>
        <p>왜 이 연구를 했는지, 읽는 순서가 어떻게 되는지, 먼저 잡아둘 핵심 관찰이 무엇인지 정리한 시작 문서입니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="./01 JVM">
        <span class="hub-label">Topic</span>
        <strong>JVM 구조 개요</strong>
        <p>클래스 로딩, 메모리 영역, 실행 엔진을 먼저 정리합니다.</p>
      </a>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Core Notes</p>
  <h3>핵심 연구 문서</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <a href="./02 JVM문제점 분석">
        <span class="hub-label">Analysis</span>
        <strong>JVM 구조적 한계 분석</strong>
        <p>GC와 힙 기반 객체 모델에서 오는 구조적 비용을 분석합니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="./03 설계">
        <span class="hub-label">Design</span>
        <strong>연구 목표와 설계 방향</strong>
        <p>JVM 구조를 어떻게 재해석할지 설계 질문을 정리합니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="./04 객체 실험1">
        <span class="hub-label">Experiment</span>
        <strong>객체 오버헤드 실험</strong>
        <p>객체 헤더와 배열 참조 구조가 만드는 메모리 비용을 실험합니다.</p>
      </a>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Key Result</p>
  <h3>이 폴더에서 먼저 확인할 것</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Observed</span>
        <p>핵심은 Java의 객체 추상화가 무료가 아니라는 점입니다. 헤더, 정렬, 참조 기반 배열 구조가 실제 데이터보다 큰 오버헤드를 만들 수 있다는 관찰을 실험까지 연결해 보여줍니다.</p>
      </div>
    </li>
  </ul>
</section>
