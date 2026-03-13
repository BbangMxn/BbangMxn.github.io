---
title: GitHub Pages 배포 구조
tags:
  - github-pages
  - deployment
  - quartz
cssclasses:
  - research-note
---

## 현재 구성

- 저장소: `BbangMxn.github.io`
- 배포 방식: GitHub Actions
- 정적 사이트 엔진: Quartz

## 기억할 점

- 사용자 사이트 저장소 이름은 `<username>.github.io` 형식이어야 합니다.
- 첫 배포 후 저장소 Settings > Pages에서 소스를 `GitHub Actions`로 바꿔야 합니다.
- `main` 브랜치에 푸시하면 워크플로가 빌드와 배포를 처리합니다.

## 관련 문서

- [[projects/quartz-wiki-site/obsidian-publishing-workflow|Obsidian + Quartz 작성 흐름]]
- [[projects/quartz-wiki-site/first-setup-log|첫 세팅 로그]]
