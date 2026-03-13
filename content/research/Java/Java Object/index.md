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
  <h2>Java 객체 모델과 JVM 비용 구조를 연구하는 허브입니다</h2>
  <p class="hub-lede">
    JVM 구조 이해에서 시작해 객체 오버헤드와 설계 방향까지 이어지는 문서를 한 흐름으로 정리합니다.
  </p>
</div>

<section class="hub-section">
  <p class="hub-section-kicker">Start Here</p>
  <h3>먼저 읽으면 좋은 문서</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <a href="./00 Index">
        <span class="hub-label">Index</span>
        <strong>00 Index</strong>
        <p>전체 연구 지도와 읽는 순서를 빠르게 확인할 수 있는 시작 문서입니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="./01 JVM">
        <span class="hub-label">Topic</span>
        <strong>JVM 구조 개요</strong>
        <p>클래스 로딩, 메모리 영역, 실행 엔진을 중심으로 Java 실행 구조를 먼저 정리합니다.</p>
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
        <p>실행 계층 증가, GC, 힙 기반 객체 모델에서 오는 구조적 비용을 분석합니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="./03 설계">
        <span class="hub-label">Design</span>
        <strong>연구 목표와 설계 방향</strong>
        <p>JVM 구조를 어떤 방향으로 재해석하고 확장할지 설계 질문을 정리합니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="./04 객체 실험1">
        <span class="hub-label">Experiment</span>
        <strong>객체 오버헤드 실험</strong>
        <p>객체 헤더와 배열 참조 구조가 메모리 오버헤드로 이어지는 과정을 실험으로 정리합니다.</p>
      </a>
    </li>
  </ul>
</section>
