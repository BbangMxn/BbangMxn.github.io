---
title: JVM 구조적 한계 분석
tags:
  - research
  - java
  - jvm
  - runtime
cssclasses:
  - research-note
---

## 1. Java Runtime의 구조적 한계

Java는 높은 생산성과 안정성을 제공하지만, 런타임 기반 실행 구조인 JVM 때문에 몇 가지 구조적 성능 비용이 발생한다.

이 문서의 관심사는 Java를 단순히 느린 언어로 평가하는 것이 아니다. 오히려 JVM이 어떤 비용을 치르면서 이식성과 안정성을 얻는지 분해해서 보고, 그 구조를 새로운 실행 환경에 맞게 다시 해석할 수 있는지 검토하는 데 있다.

특히 다음 질문을 중심으로 연구를 진행한다.

- JVM 구조는 새로운 하드웨어 아키텍처에서 어떻게 활용될 수 있는가?
- 기존 JVM의 성능 오버헤드를 줄이기 위한 새로운 실행 모델은 가능한가?
- 통일된 런타임 플랫폼으로서 JVM은 어떤 방향으로 발전할 수 있는가?

## 1.1 실행 계층 증가로 인한 오버헤드

Java 프로그램은 다음과 같은 실행 단계를 거친다.

```text
Java Source
   ->
javac Compiler
   ->
Bytecode
   ->
JVM Interpreter
   ->
JIT Compilation
   ->
Native Machine Code
```

이 구조는 플랫폼 독립성과 안전성을 제공하지만 동시에 다음과 같은 오버헤드를 유발한다.

- 바이트코드 해석 비용
- JIT 컴파일 비용
- 런타임 프로파일링 비용

특히 프로그램 초기 실행 단계에서는 JIT 워밍업 문제가 발생한다.

## 1.2 Garbage Collection 비용

Java는 자동 메모리 관리(GC)를 사용한다.

장점은 다음과 같다.

- 메모리 안전성
- 개발 생산성

하지만 다음과 같은 비용도 존재한다.

- 객체 생성이 많을수록 GC 압력이 증가
- GC pause 가능성
- 메모리 레이턴시 증가

특히 대량 객체 생성 패턴에서는 성능 저하가 두드러질 수 있다.

## 1.3 Heap 기반 객체 모델

Java의 객체는 대부분 Heap에 생성된다.

```java
Object obj = new Object();
```

Heap 기반 객체 모델은 다음 문제를 유발할 수 있다.

- pointer indirection 증가
- CPU cache locality 감소
- 메모리 접근 비용 증가

이 문제는 대규모 객체 그래프에서 특히 크게 나타난다.

## 1.4 JIT Warmup 문제

JVM은 실행 중 프로파일링을 수행하여 자주 실행되는 코드(hot code)를 최적화한다.

```text
bytecode
   ->
profiling
   ->
JIT compilation
```

이 구조는 장기 실행 프로그램에서는 높은 성능을 제공하지만 다음 환경에서는 워밍업 비용이 더 크게 느껴질 수 있다.

- 짧은 실행 프로그램
- CLI 도구
- serverless 환경

## 중간 정리

JVM의 비용은 하나의 원인이 아니라, 실행 계층 증가, 힙 중심 객체 모델, GC, JIT 워밍업이 함께 겹치며 나타난다. 그래서 개선 방향도 단일 최적화가 아니라 실행 모델 전체를 다시 보는 쪽으로 이어진다.

## Related

- [[01 JVM|JVM 구조 개요]]
- [[03 설계|연구 목표와 설계 방향]]
