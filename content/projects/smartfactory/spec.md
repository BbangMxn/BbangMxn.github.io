---
title: Smart Factory Spec
tags:
  - portfolio
  - spec
  - iot
---

Smart Factory는 대시보드 기능을 먼저 만들기보다, 어떤 프로토콜과 저장 구조를 성공으로 볼지 spec으로 먼저 고정한 뒤 연구와 구현을 같이 전개했습니다. 이 문서는 그 판단 기준을 가장 짧게 정리합니다.

## Problem

- 스마트 팩토리 시스템은 장비 데이터 수집, 프로토콜 선택, 시계열 저장, 실시간 전송, 알림이 한 번에 연결되어야 해서 구현보다 설계 판단이 먼저 필요했습니다.
- 한 가지 프로토콜이나 한 종류의 저장소만 기준으로 잡으면 실제 현장 구조를 충분히 설명하기 어려웠습니다.

## Goal

- 수집부터 저장, 실시간 모니터링, 알림까지 이어지는 파이프라인을 하나의 시스템으로 설명할 수 있어야 했습니다.
- 연구 문서와 구현 구조가 끊어지지 않게, 선택 근거와 실행 구조를 같은 저장소 안에서 읽을 수 있어야 했습니다.

## Decision

- 수집 계층은 OPC UA와 MQTT를 함께 다루는 다중 프로토콜 구조를 전제로 잡았습니다.
- 저장과 전달 계층은 TimescaleDB, Redis, WebSocket으로 나눠 시계열성과 실시간성을 함께 다뤘습니다.
- 연구 문서와 구현체를 분리하지 않고 한 저장소 안에서 연결해, 설계 근거와 구현 방향을 같이 남겼습니다.

## Acceptance Criteria

- Collector, Pipeline, Storage, Realtime, Alert 흐름이 한 시스템 그림으로 이어져야 합니다.
- 프로토콜 선택과 저장 구조 선택의 이유가 문서로 분명하게 남아 있어야 합니다.
- 연구 문서와 구현체 폴더가 같은 아키텍처 기준으로 읽혀야 합니다.
- 운영 수치가 없어도 어떤 범위까지 설계를 검증했는지는 분명하게 설명 가능해야 합니다.

## Out Of Scope

- 대규모 운영 환경에서의 실사용 지표
- 특정 공장 현장에 맞춘 완결 배포 구성

## 연결 문서

- [Smart Factory 메인 페이지](./index)
- [Folder Feature Map](./folder-feature-map)
- [Protocol Stack](./protocol-stack)
- [Timeseries Pipeline](./timeseries-pipeline)
