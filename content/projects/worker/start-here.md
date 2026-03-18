---
title: Worker Start Here
tags:
  - portfolio
  - guide
  - workflow
---

Worker는 화면 통합, AI 안전장치, 메일 분류 파이프라인이 같이 있는 프로젝트라서 읽는 순서를 잡아 주는 편이 좋습니다. 이 폴더는 "AI가 업무 도구 안에서 실제로 어떤 위치를 가져야 하는가"를 읽는 입구입니다.

## 전제

- Worker의 핵심은 AI 기능 수가 아니라 AI를 어디까지 허용할지 정한 제품 제약이라는 점
- 워크스페이스 UI, 동기화 백엔드, Proposal 안전장치가 같이 읽혀야 구조가 보인다는 점
- 분류 파이프라인은 단순 자동화가 아니라 운영 정책 문서라는 점

## 읽기 순서

1. [Worker 메인 페이지](./index)
2. [Folder Feature Map](./folder-feature-map)
3. [Proposal Safety](./proposal-safety)
4. [Classification Pipeline](./classification-pipeline)

## 문서 역할

### `index.md`

- 왜 이 프로젝트가 메일 앱이 아니라 AI 워크스페이스 실험인지 설명합니다.
- 핵심 주장과 관측 범위를 한 페이지에서 닫습니다.

### `folder-feature-map.md`

- 각 폴더가 실제로 어떤 제품 기능을 담당하는지 설명합니다.
- 프론트엔드 위젯, 서버 입력 어댑터, 분류 파이프라인, Provider 연동을 기능 축으로 다시 읽는 문서입니다.

### `proposal-safety.md`

- AI가 바로 작업을 실행하지 않도록 만든 이유를 설명합니다.
- 제안 단계가 어떤 제품 안전장치 역할을 하는지 읽는 문서입니다.

### `classification-pipeline.md`

- 규칙 기반 분류와 LLM 분류를 왜 나눴는지 설명합니다.
- 비용 절감과 설명 가능성을 함께 본 구현 문서입니다.

## 개발 흐름

1. 먼저 이메일, 캘린더, 연락처를 한 화면으로 묶는 워크스페이스 UI를 만들었습니다.
2. 백엔드에서 Gmail 동기화와 SSE 기반 상태 전송을 연결했습니다.
3. 분류와 요약, 번역, 답장 흐름을 단계적으로 붙였습니다.
4. 마지막으로 Proposal 단계를 넣어 AI 실행을 통제하고, 동시에 구조가 과했는지도 점검했습니다.

## 핵심 결론

- Worker의 핵심은 AI 기능을 많이 붙인 것이 아니라, AI를 업무 흐름 안에 어디까지 허용할지 정한 점입니다.
- 이 프로젝트는 자동화보다 안전한 배치와 재단순화 판단이 중요합니다.
- 그래서 하위 문서도 기능 소개보다 제품 제약과 처리 순서를 중심으로 읽는 편이 맞습니다.
- 실제 폴더와 프로세스 경계부터 잡고 싶다면 [Worker 메인 페이지](./index)의 아키텍처 섹션 다음 [Folder Feature Map](./folder-feature-map)으로 들어가는 편이 더 빠릅니다.
