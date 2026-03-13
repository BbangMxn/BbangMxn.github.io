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

- 떠오른 아이디어나 실험 메모는 `research/`에 먼저 저장
- 오래 유지할 지식은 `wiki/`로 정리하기
- 결과물은 `projects/`에 사례로 남기기
- 새 문서는 기존 문서와 최소 1개 이상 링크 연결하기
