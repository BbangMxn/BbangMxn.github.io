---
title: JVM 구조 개요
tags:
  - java
  - jvm
  - research
cssclasses:
  - research-note
---

## JVM이란?

**JVM(Java Virtual Machine)** 은 Java 프로그램을 특정 운영체제에 종속되지 않도록 실행하기 위해 설계된 가상 실행 환경이다.

Java 소스 코드는 바로 실행되지 않고 다음 단계를 거친다.

```text
Java Source Code
        ->
     javac
        ->
   Bytecode (.class)
        ->
       JVM
        ->
   Machine Code
```

이 구조 덕분에 Java는 플랫폼 독립성, 바이트코드 기반 실행 모델, 자동 메모리 관리라는 특성을 가진다. 즉 JVM은 단순한 실행기가 아니라 언어 실행 플랫폼에 가깝다.

## 왜 중요한가

JVM을 이해하면 Java 성능 문제를 단순히 언어의 빠르기나 느리기로 보지 않고, 클래스 로딩, 메모리 모델, 실행 엔진, JIT 최적화 같은 계층으로 나눠 해석할 수 있다.

## 1. JVM 시스템 구조

JVM의 내부 구조는 크게 다음 다섯 구성요소로 나뉜다.

```text
JVM Architecture
- Class Loader
- Runtime Data Areas
- Execution Engine
- Native Interface
- Native Libraries
```

이 중 Java 프로그램 실행의 핵심은 `Class Loader`, `Runtime Data Areas`, `Execution Engine` 세 부분이다.

## 2. Class Loader

Class Loader는 `.class` 파일을 JVM 메모리로 로딩하는 역할을 담당한다.

JVM은 프로그램 시작 시 모든 클래스를 한 번에 로딩하지 않는다. 필요할 때마다 동적으로 클래스 로딩을 수행한다.

### 클래스 로딩 단계

1. `Loading`
2. `Linking`
3. `Initialization`

### Loading

- `.class` 파일을 읽는다.
- JVM 메모리에 클래스 구조를 생성한다.
- 이 과정에서 `Class` 객체가 만들어진다.

### Linking

Linking은 다시 세 단계로 나뉜다.

- `Verification`
- `Preparation`
- `Resolution`

`Verification`은 class file이 JVM 명세에 맞는지 검사하는 단계다. 보안과 무결성을 위한 구조 검사, 타입 안전성 검사 등이 여기에 포함된다.

`Preparation`은 static 변수에 대한 메모리 할당을 수행하는 단계다. 이 시점에는 실제 초기값이 아니라 기본값만 들어간다.

```java
static int x = 30;
```

Preparation 단계에서는 `x = 0` 이다.

`Resolution`은 Constant Pool의 symbolic reference를 실제 참조로 바꾸는 단계다.

### Initialization

클래스의 static 초기화 코드가 실행된다.

```java
class A {
    static int x = 30;
}
```

이 단계에서 `x = 30` 이 반영된다.

## 3. Class Loader 종류

### Bootstrap ClassLoader

JVM의 최상위 클래스 로더로, `java.lang`, `java.util`, `java.io` 같은 핵심 Java 라이브러리를 로딩한다.

### Platform ClassLoader

JDK의 플랫폼 라이브러리를 로딩한다. 예를 들면 `javax.*`, `java.sql.*` 계열이 있다.

### Application ClassLoader

사용자가 작성한 애플리케이션 클래스를 로딩한다. 대부분의 일반적인 사용자 코드는 이 로더를 통해 적재된다.

## 4. Runtime Data Areas

JVM 실행 중 사용되는 메모리 영역을 Runtime Data Areas라고 한다.

```text
Runtime Data Areas
- Method Area
- Heap
- Java Stack
- PC Register
- Native Method Stack
```

### Heap

객체 인스턴스가 저장되는 영역이다.

- Garbage Collection 대상
- 모든 thread가 공유

### Java Stack

각 thread마다 하나씩 존재한다.

- method 호출 정보
- local variables
- operand stack

### Method Area

클래스 메타데이터, method 정보, static 변수, runtime constant pool이 저장된다. HotSpot JVM에서는 Metaspace로 구현된다.

### PC Register

각 thread가 현재 실행 중인 bytecode 위치를 저장한다.

### Native Method Stack

JNI를 통해 C 또는 C++ 코드를 실행할 때 사용하는 스택이다.

## 5. Execution Engine

Execution Engine은 JVM이 실제로 바이트코드를 실행하는 엔진이다.

### Interpreter

바이트코드를 한 줄씩 해석하며 실행한다.

- 장점: 빠른 시작 속도
- 단점: 반복 실행 시 성능 저하

### JIT Compiler

자주 실행되는 코드를 native machine code로 컴파일한다.

대표적인 JIT 최적화는 다음과 같다.

- method inlining
- loop optimization
- escape analysis

## 6. JVM 실행 흐름

1. JVM 시작
2. Class Loader 동작
3. Runtime Memory 생성
4. `main()` 메서드 호출
5. Bytecode Interpreter 실행
6. JIT Compiler 최적화
7. Garbage Collection 수행

## 핵심 정리

JVM 연구의 핵심은 다음 세 가지를 이해하는 것이다.

1. Class Loading System
2. Runtime Memory Model
3. Execution Engine

## Related

- [[02 JVM문제점 분석|JVM 구조적 한계 분석]]
- [[wiki/Java/javac|javac]]
