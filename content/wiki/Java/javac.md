---
title: javac
tags:
  - wiki
  - java
  - compiler
---

`javac`는 텍스트로 작성된 Java 소스 파일을 JVM이 실행할 수 있는 바이트코드로 컴파일하는 명령어다.

## 역할

- `.java` 파일을 읽는다.
- 컴파일 결과를 `.class` 파일로 만든다.
- 생성된 `.class` 파일은 `java` 명령어로 실행할 수 있다.

## 기본 흐름

```text
.java source
  -> javac
  -> .class bytecode
  -> java
  -> JVM execution
```

## Related

- [[01 JVM|JVM 구조 개요]]
