---
title: 사이트 페이지 아키텍처
tags:
  - wiki
  - architecture
  - quartz
  - fsd
cssclasses:
  - research-note
aliases:
  - wiki/site/page-architecture
---

## 렌더링 흐름

```text
content/**/*.md
  → Quartz 파싱·링크 처리
  → ContentPage / FolderPage
  → quartz.layout.ts → quartz/app/layouts/quartz.ts
  → 내비게이션 + 문서 본문 + 필요한 문서 목록
  → public/**/*.html
```

## 페이지 역할

| 페이지 | 본문 | 추가 구성 |
| --- | --- | --- |
| 홈 | 한국어·일본어 index.md | 대표 기록과 연락 링크 |
| 소개 | about.md | 스킬셋과 프로젝트 연결 |
| 포트폴리오 | projects/index.md | 프로젝트 루트 문서 목록 |
| 공부 기록 | notes.md | 주제별 문서 목록 |
| Contact Me | contact.md | 이메일·GitHub |
| 상세 문서 | 각 프로젝트·주제의 Markdown | 문서 종류에 따른 그래프·백링크·목차 |

## 목록 규칙

- 포트폴리오는 `projects/<project>/index.md`와 `Index.md`를 포함합니다.
- 프로젝트 내부의 설계·구현 문서는 프로젝트 목록에 중복으로 올리지 않습니다.
- 프로젝트 목록 안에서 일반 프로젝트·해커톤·캡스톤을 나누어 표시합니다.
- 공부 기록은 `notes/research`와 `notes/wiki`를 주제별로 묶습니다. 사이트 운영 문서와 포트폴리오 작성 가이드는 제외합니다.
- 각 묶음 안에서는 최근 수정 순으로 정렬합니다.
- 일본어 목록도 원문 문서로 연결합니다. 번역과 원문을 중복 나열하지 않습니다.
- `draft: true`인 문서는 빌드와 목록에서 제외합니다.

## 스타일과 진입점

화면은 메인 포트폴리오와 기본 Markdown 두 타입입니다. 홈에는 `portfolio-page`, 나머지 문서에는 `markdown-page` 클래스를 렌더러가 부여합니다.

홈은 소개·스킬셋·프로젝트·Contact Me를 스위스 스타일로 구성합니다. 기본 Markdown 화면은 제목·본문·표·코드·이미지와 데스크톱 목차를 지원합니다.

프로젝트와 공부 목록의 `archive-index`는 Quartz 기본 폴더 목록을 숨기고 사이트의 목록 위젯을 표시합니다.

기존 상세 문서의 `folder-hub`, `research-note`는 유지합니다. 새 콘텐츠를 쓸 때 기존 글의 스타일을 선택할 수 있습니다.

[폴더 구조](./folder-structure.md)
