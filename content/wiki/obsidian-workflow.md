---
title: Obsidian Workflow
tags:
  - obsidian
  - workflow
  - quartz
---

## 로컬 작성

- `content/`를 Obsidian vault처럼 열 수 있습니다.
- Quartz는 `[[위키링크]]`, callout, Mermaid 같은 Obsidian 스타일 문법을 지원합니다.

## 배포 흐름

1. 로컬에서 문서 작성
2. `npm run dev`로 미리보기
3. 커밋 후 GitHub에 푸시
4. GitHub Actions가 `public/` 산출물을 빌드하고 GitHub Pages에 배포

## 추천 습관

- 떠오른 아이디어는 `wiki/` 초안으로 먼저 저장
- 완성된 기록은 `journal/`에 날짜별로 남기기
- 새 문서는 기존 문서와 최소 1개 이상 링크 연결하기
