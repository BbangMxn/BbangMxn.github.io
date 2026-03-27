---
title: DESIGN Template
tags:
  - docs
  - template
  - design
---

공통 설계 문서 form입니다. `spec.md`에서 확정한 문제와 범위를 구현 구조로 바꿀 때 이 구조를 복사해서 `design.md`로 사용합니다.

## Usage Rules

- `spec.md`가 먼저 확정된 뒤 작성한다.
- 기술 선택은 반드시 근거와 trade-off를 함께 적는다.
- 구조 설명은 컴포넌트, 데이터 흐름, 실패 처리 기준이 빠지지 않아야 한다.
- 코드 수준 구현 설명보다 시스템 경계와 책임 분리가 먼저 와야 한다.

- Document Version: v0.1
- Status: Draft
- Owner:
- Created At:
- Updated At:
- Related Spec:

---

# 1. Overview

## 1.1 Purpose
이 문서는 `spec.md`에서 정의한 요구사항을 실제 구현 가능한 구조로 구체화하기 위해 작성한다.

## 1.2 Design Summary
- 
- 
- 

## 1.3 Non-Purpose
- 세부 함수 구현 코드
- 실제 마이그레이션 실행 로그
- 운영 매뉴얼 전체

---

# 2. Architecture

## 2.1 System Context
- Client:
- API:
- Worker / Batch:
- Database / Cache:
- External Systems:

## 2.2 High-Level Components

| Component | Responsibility | Notes |
| --- | --- | --- |
| API Layer |  |  |
| Domain Layer |  |  |
| Persistence Layer |  |  |
| Worker |  |  |
| External Adapter |  |  |

## 2.3 Boundaries
- 어디서 요청을 받는가:
- 어디서 비즈니스 규칙을 처리하는가:
- 어디서 상태를 저장하는가:
- 어디서 외부 시스템과 통신하는가:

---

# 3. Data Flow

## 3.1 Main Flow
1. 
2. 
3. 
4. 

## 3.2 Failure Flow
1. 
2. 
3. 

## 3.3 Idempotency / Ordering
- Idempotency Key:
- Ordering Rule:
- Duplicate Handling:

---

# 4. Component Design

## 4.1 API / Interface

| Interface | Input | Output | Validation |
| --- | --- | --- | --- |
|  |  |  |  |
|  |  |  |  |

## 4.2 Domain Logic
- Core Rule 1:
- Core Rule 2:
- State Transition:
- Permission Rule:

## 4.3 Storage Design

| Entity / Table | Change | Reason |
| --- | --- | --- |
|  |  |  |
|  |  |  |

## 4.4 External Dependency

| System | Purpose | Timeout | Retry | Fallback |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
|  |  |  |  |  |

---

# 5. Non-Functional Design

## 5.1 Performance Strategy
- Bottleneck 예상 지점:
- Cache 전략:
- 비동기 처리 필요 여부:

## 5.2 Reliability Strategy
- Retry 정책:
- Timeout 정책:
- Circuit Breaker / Fallback:
- Recovery 전략:

## 5.3 Security Strategy
- Authentication:
- Authorization:
- Sensitive Data Handling:
- Secret Management:

## 5.4 Observability Strategy
- Logging:
- Metrics:
- Trace:
- Alert:

---

# 6. Trade-Offs

## 6.1 Considered Options

| Option | Pros | Cons | Decision |
| --- | --- | --- | --- |
| A |  |  |  |
| B |  |  |  |

## 6.2 Chosen Approach
- 
- 

---

# 7. Risks

| Risk | Impact | Mitigation |
| --- | --- | --- |
|  |  |  |
|  |  |  |

---

# 8. Test Strategy

## 8.1 Required Tests
- Unit Test:
- Integration Test:
- Contract Test:
- E2E / Scenario Test:

## 8.2 Verification Points
- [ ] 주요 성공 시나리오가 재현된다.
- [ ] 예외 시나리오가 정의된 에러 처리로 닫힌다.
- [ ] 성능 기준을 만족한다.
- [ ] 로그와 메트릭이 필요한 정보를 남긴다.

---

# 9. Rollout Plan

## 9.1 Release Strategy
- Feature Flag:
- Migration:
- Deployment Order:

## 9.2 Rollback Plan
- Rollback Trigger:
- Rollback Method:
- Data Recovery:

---

# 10. Open Questions

- 
- 
- 
