---
title: Start Here
tags:
  - guide
  - workflow
---

이 사이트는 `content/` 폴더를 중심으로 관리합니다. 로컬에서는 이 폴더를 Obsidian vault처럼 열고, 웹에서는 Quartz가 위키 형태로 렌더링합니다.

## 권장 흐름

1. `content/` 안에서 Markdown 문서를 작성합니다.
2. 문서 연결은 `[[문서명]]` 또는 `[[경로/문서명|표시 이름]]`으로 만듭니다.
3. 로컬 미리보기는 `npm run dev`로 확인합니다.
4. 완료되면 커밋하고 `main`에 푸시합니다.

## 폴더 규칙

- [[projects/index|projects]]: 결과물, 사례, 포트폴리오용 정리
- [[research/index|research]]: 실험 메모, 로그, 비교 기록
- [[wiki/index|wiki]]: 개념 정리, 트러블슈팅, 치트시트

## 메타데이터 예시

```md
---
title: GitHub Pages 운영 메모
tags:
  - github-pages
  - quartz
---
```
