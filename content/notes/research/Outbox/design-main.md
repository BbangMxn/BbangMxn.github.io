---
title: Outbox 구현 방식
lang: ko
tags:
  - research
  - outbox
  - system-design
cssclasses:
  - research-note
aliases:
  - research/Outbox/design-main
---

## 연구 목적

각 패턴의 개념과 동작 원리를 이해하고, 설계 차이·장단점·적합한 사용 상황을 정리합니다.

공통 요구사항과 용어는 [공통 틀](./common.md)을 참고합니다.

## 구현 방식 분류

### Polling Publisher

- [단일 Worker](./Polling%20Publisher/단일%20Worker.md)
- [행 잠금 기반](./Polling%20Publisher/행%20잠금%20기반.md)
- [Lease 기반](./Polling%20Publisher/Lease%20기반.md)
- [알림으로 폴링 보조](./Polling%20Publisher/알림으로%20폴링%20보조.md)

### Transaction Log Tailing

- [PostgreSQL WAL 기반 CDC](./Transaction%20Log%20Tailing/PostgreSQL%20WAL%20기반%20CDC.md)
- [DB가 제공하는 변경 스트림 활용](./Transaction%20Log%20Tailing/DB가%20제공하는%20변경%20스트림%20활용.md)

### 추가 구현 변형

- [커밋 후 즉시 발행 시도 + 백그라운드 복구](./추가%20구현%20변형/커밋%20후%20즉시%20발행%20시도%20+%20백그라운드%20복구.md)
- [트랜잭션 로그에 이벤트 직접 기록](./추가%20구현%20변형/트랜잭션%20로그에%20이벤트%20직접%20기록.md)

## 공통 학습 틀

| 항목 | 정리할 내용 |
| --- | --- |
| 핵심 아이디어 | 이 패턴이 해결하려는 문제와 접근 방식 |
| 구성 요소와 흐름 | 메시지 저장부터 발행까지의 역할과 처리 순서 |
| 트랜잭션과 동시성 | 트랜잭션 경계와 여러 Worker의 처리 조정 방식 |
| 실패와 복구 | 중단, 재시도, 중복 처리를 다루는 원리 |
| 장점과 제약 | 설계로 얻는 이점과 함께 고려할 한계 |
| 사용 상황 | 적합한 요구사항과 환경 |
| 다른 패턴과의 관계 | 차이점, 확장 관계와 결합 가능성 |

## 읽고 정리하는 방법

- 각 패턴이 등장한 배경과 해결하려는 문제부터 살펴봅니다.
- 정상 처리와 장애 상황의 흐름을 함께 정리합니다.
- 패턴의 일반적인 개념과 특정 DB·라이브러리의 동작을 구분합니다.
- 참고한 자료와 남은 질문을 각 문서에 기록합니다.

[Outbox 연구로](./index.md)
