---
title: Nazgul Spec
tags:
  - portfolio
  - spec
  - rag
---

Nazgul은 기능을 더 붙이는 SNS 프로젝트로 남기지 않기 위해, 먼저 검색 문제를 어떻게 다시 정의할지 spec으로 고정한 뒤 구현을 이어갔습니다. 이 문서는 retrieval 구조를 어떤 성공 조건으로 설계했는지 가장 짧게 정리합니다.

## Problem

- 취미 SNS MVP에는 홈 피드와 탐색 흐름이 있었지만, 검색과 추천을 설명 가능한 AI 문제로 연결할 구조가 부족했습니다.
- 질의를 바로 chunk 검색으로 보내면 취미 도메인의 맥락, 출처, 추천 근거를 같이 설명하기 어려웠습니다.

## Goal

- 취미 선택과 탐색 경험을 retrieval 입력 구조로 다시 읽어, 개인화 검색과 추천의 근거를 남길 수 있어야 했습니다.
- 답만 반환하는 시스템이 아니라 Card, Chunk, Answer, Trace까지 관측 가능한 연구 구조를 만들어야 했습니다.

## Decision

- 취미 도메인을 바로 청크로 평탄화하지 않고 Entity Card 계층을 먼저 두었습니다.
- 검색 파이프라인은 Card -> Chunk -> Answer -> Trace 순서로 나누고, 각 단계의 역할을 분리했습니다.
- RecommendationTrace를 분리해 실패, 지연, 후보 선택 과정을 나중에 다시 볼 수 있게 했습니다.

## Acceptance Criteria

- 홈, 탐색, 취미 선택 같은 제품 입력이 검색과 추천의 맥락으로 실제 연결되어야 합니다.
- 대표 질의에서 카드와 추천 포스트, 답변, trace가 한 흐름으로 반환되어야 합니다.
- 결과만 저장하는 것이 아니라 근거와 선택 과정을 다시 볼 수 있어야 합니다.
- 병목과 다음 평가 범위를 관찰할 수 있을 정도로 연구 구조가 문서와 구현 양쪽에서 정리되어야 합니다.

## Out Of Scope

- 상용 수준의 응답 속도
- 대규모 데이터셋과 완전한 정량 평가 체계

## 연결 문서

- [Nazgul 메인 페이지](./index)
- [Folder Feature Map](./folder-feature-map)
- [Retrieval Map](./retrieval-map)
- [Research Notes](./research-notes)
- [Technical Design](./technical-design)
