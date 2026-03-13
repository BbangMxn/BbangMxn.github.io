---
title: Quartz 기반 개인 위키 구축
tags:
  - portfolio
  - quartz
  - github-pages
---

Obsidian처럼 쓰는 로컬 메모 환경과 GitHub Pages 배포를 하나로 묶기 위해 만든 위키형 블로그 구조다.

## Goal

- 메모 작성은 가볍게
- 퍼블리시는 자동으로
- 결과물은 포트폴리오처럼 보이게

## Stack

- Quartz
- GitHub Pages
- GitHub Actions
- Obsidian-style Markdown workflow

## What changed

- `content/`를 중심으로 문서를 관리
- `wiki`, `journal`, `projects`로 콘텐츠 성격을 분리
- `main` 브랜치 푸시만으로 자동 배포되게 구성

## Why this structure

기술 블로그만 있으면 시간이 지나며 글이 쌓이고, 위키만 있으면 개인 작업의 맥락이 약해진다.
그래서 결과물은 포트폴리오처럼 보이고, 내부는 위키처럼 연결되는 하이브리드 구조를 택했다.
