---
title: TASK Template
tags:
  - docs
  - template
  - task
---

공통 작업 문서 form입니다. `spec.md`와 `design.md`를 실제 구현 단위로 나눌 때 이 구조를 복사해서 `task.md`로 사용합니다.

## Usage Rules

- 작업은 검증 가능한 단위로 쪼갠다.
- 구현 항목마다 완료 조건을 적는다.
- 의존성이 있으면 순서를 명시한다.
- 테스트와 배포 체크리스트를 작업 본문과 분리해서 관리한다.

- Document Version: v0.1
- Status: Draft
- Owner:
- Created At:
- Updated At:
- Related Spec:
- Related Design:

---

# 1. Overview

## 1.1 Purpose
이 문서는 구현 작업을 실제 실행 가능한 단위로 분해하고, 순서와 검증 기준을 명확히 하기 위해 작성한다.

## 1.2 Delivery Goal
이번 작업에서 실제로 배포하거나 확인할 결과물은 다음과 같다.

- 
- 
- 

## 1.3 Assumptions
- 
- 
- 

---

# 2. Milestones

| Milestone | Description | Done Condition |
| --- | --- | --- |
| M1 |  |  |
| M2 |  |  |
| M3 |  |  |

---

# 3. Task Breakdown

| ID | Task | Priority | Depends On | Status |
| --- | --- | --- | --- | --- |
| T-001 |  | High |  | Todo |
| T-002 |  | High | T-001 | Todo |
| T-003 |  | Medium |  | Todo |
| T-004 |  | Low |  | Todo |

---

# 4. Task Details

## T-001
- Goal:
- Input / Context:
- Implementation Notes:
- Done Condition:
- Risk:

## T-002
- Goal:
- Input / Context:
- Implementation Notes:
- Done Condition:
- Risk:

## T-003
- Goal:
- Input / Context:
- Implementation Notes:
- Done Condition:
- Risk:

---

# 5. Development Checklist

- [ ] 스키마 또는 계약 변경 여부를 확인했다.
- [ ] 필요한 환경 변수와 시크릿을 정리했다.
- [ ] 로그와 에러 처리 방식을 구현 범위에 포함했다.
- [ ] 기존 기능 회귀 가능성을 점검했다.

---

# 6. Validation Checklist

- [ ] 핵심 시나리오가 동작한다.
- [ ] 예외 시나리오가 정의한 방식으로 처리된다.
- [ ] 로그와 메트릭을 확인할 수 있다.
- [ ] 문서와 구현 결과가 일치한다.

## 6.1 Test Cases
- Test 1:
- Test 2:
- Test 3:

---

# 7. Release Checklist

- [ ] 배포 순서를 확인했다.
- [ ] 롤백 조건을 정의했다.
- [ ] 운영자에게 필요한 공지 사항을 정리했다.
- [ ] 모니터링 포인트를 배포 직후 확인할 수 있다.

## 7.1 Rollback Trigger
- 
- 

---

# 8. Notes

## 8.1 Blockers
- 
- 

## 8.2 Follow-Up
- 
- 
