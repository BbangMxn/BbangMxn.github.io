---
title: 사이트 페이지 아키텍처
tags:
  - wiki
  - architecture
  - quartz
  - page
cssclasses:
  - research-note
---

이 사이트의 페이지 구조는 단순히 Markdown 파일 위치로만 결정되지 않습니다. 실제 페이지 타입은 `quartz.config.ts`의 emitter, `quartz.layout.ts`의 레이아웃, 그리고 각 문서 frontmatter의 `cssclasses`가 같이 결정합니다.

## 핵심 흐름

```text
content/**/*.md
  -> transformers (frontmatter, link, toc, description ...)
  -> emitters
     - ContentPage
     - FolderPage
     - TagPage
  -> quartz.layout.ts
  -> Content.tsx / FolderContent.tsx / TagContent.tsx
  -> quartz/styles/custom.scss + pages/*
  -> public HTML
```

- `quartz.config.ts`는 `ContentPage`, `FolderPage`, `TagPage`를 모두 켭니다.
- `quartz.layout.ts`는 `defaultContentPageLayout`과 `defaultListPageLayout` 두 축을 제공합니다.
- `quartz/components/pages/Content.tsx`는 frontmatter의 `cssclasses`를 `<article>`에 그대로 붙입니다.
- `quartz/components/pages/FolderContent.tsx`는 폴더용 `index.md` 본문과 자동 생성된 `PageList`를 한 페이지에 합칩니다.

## 페이지 패밀리

### 1. 홈 페이지: `portfolio-home`

- 대표 경로는 `content/index.md` 하나입니다.
- 홈은 지원자 요약, 대표 프로젝트, 다음 읽기 경로를 한 화면에 압축하는 역할만 맡습니다.
- `quartz/styles/pages/_folio-shell.scss`가 기본 페이지 헤더와 우측 사이드바를 숨기고, 메인 홈 레이아웃을 별도 셸로 바꿉니다.
- `quartz/styles/pages/_portfolio.scss`가 hero, block, note, list 카드의 시각 계층을 정의합니다.

### 2. 허브 페이지: `folder-hub`

- 섹션 루트와 프로젝트 루트에 가장 많이 쓰는 타입입니다.
- 대표 경로는 `content/projects/index.md`, `content/research/index.md`, `content/wiki/index.md`, `content/about.md`, `content/start-here.md`, `content/Diary/index.md`입니다.
- 프로젝트 하위에서는 `content/projects/<project>/index.md`가 같은 타입을 씁니다.
- `FolderPage` emitter가 생성한 페이지에서 `FolderContent.tsx`가 본문 아래에 자동 목록을 붙여 주므로, 허브 소개와 실제 하위 문서 목록이 한 페이지에 같이 나타납니다.
- 즉 `folder-hub`는 "설명 + 내비게이션"을 동시에 맡는 폴더 입구 타입입니다.

### 3. 일반 상세 페이지: 기본 detail

- `cssclasses`를 주지 않은 일반 문서는 기본 상세 페이지로 렌더됩니다.
- 대표 경로는 `content/projects/*/architecture.md`, `content/projects/*/start-here.md`, 각종 설명형 Markdown 문서입니다.
- 이 타입은 `defaultContentPageLayout`을 그대로 사용하므로 breadcrumbs, title, content meta, tag list, TOC, backlinks, graph가 유지됩니다.
- 프로젝트 메인 허브에서 다 담지 못하는 구조 해설, 읽기 순서, 세부 설계는 이 타입으로 분리하는 편이 맞습니다.

### 4. 연구 노트 페이지: `research-note`

- 연구 메모와 기술 노트에 쓰는 타입입니다.
- 대표 경로는 `content/research/**`, `content/projects/nazgul/retrieval-map.md`, `content/projects/nazgul/technical-design.md` 같은 문서입니다.
- `quartz/styles/pages/_detail.scss`가 `article.research-note`의 heading rhythm, blockquote, table, 우측 패널 간격을 별도로 조정합니다.
- 이 타입은 정보 밀도는 높지만 기본 헤더와 TOC를 유지해야 하는 문서에 적합합니다.

### 5. 생성 페이지: 폴더/태그 리스트

- Quartz는 실제 폴더마다 `FolderPage`를, 태그마다 `TagPage`를 자동 생성합니다.
- 폴더에 `index.md`가 있으면 그 파일이 공식 진입이 되고, 없으면 Quartz가 synthetic folder description을 만듭니다.
- 현재 사이트는 의도적으로 섹션마다 `index.md`를 두어 synthetic 페이지가 전면에 나오지 않게 운영합니다.

## 백엔드 중심 프로젝트에서 늘어나는 페이지

- 백엔드 프로젝트는 메인 허브 한 장으로 끝나면 깊이가 잘 안 보입니다.
- 그래서 현재 구조에서는 `index.md` 아래에 최소 `architecture.md`를 두고, 필요하면 API 표면, 캐시 전략, 파이프라인, trace 설계 문서를 더 붙이는 편이 맞습니다.
- 이때 메인 허브는 주장과 검증 범위를 맡고, 상세 문서는 실행 흐름과 폴더 책임을 맡습니다.
- 공통 기준은 [백엔드 아키텍처 기준](./backend-architecture) 문서에 따로 정리했습니다.

## 실제 경로 매핑

| 경로 패턴                               | 페이지 타입                      | 역할                  |
| --------------------------------------- | -------------------------------- | --------------------- | -------------------------------- | ---------------- |
| `content/index.md`                      | `portfolio-home`                 | 지원자 홈             |
| `content/*/index.md`                    | `folder-hub`                     | 섹션 허브             |
| `content/projects/*/index.md`           | `folder-hub`                     | 프로젝트 메인 허브    |
| `content/projects/*/architecture.md`    | 기본 detail                      | 구조 설명             |
| `content/projects/*/start-here.md`      | 기본 detail 또는 허브 보조 문서  | 읽기 순서             |
| `content/projects/\*/(api-surface       | cache-strategy                   | technical-design).md` | 기본 detail 또는 `research-note` | 백엔드 세부 설계 |
| `content/research/**/*.md` 중 깊은 노트 | `research-note`                  | 연구 메모             |
| `content/wiki/site/*.md` 같은 구현 문서 | `research-note` 또는 기본 detail | 운영/구현 기준        |

## 레이아웃 책임 분리

### 공통 레이아웃

- `sharedPageComponents`는 `Head`, `Footer`, 공통 리소스를 담당합니다.
- 좌측 사이드바는 페이지 타입과 무관하게 `PageTitle`, `Search`, `Darkmode`, `ReaderMode`, `Explorer`를 유지합니다.

### 콘텐츠 레이아웃

- `defaultContentPageLayout`은 상세 문서를 위한 레이아웃입니다.
- 기본 페이지 헤더에 breadcrumbs, title, meta, tags를 올리고, 우측에 TOC, backlinks, graph를 붙입니다.

### 리스트 레이아웃

- `defaultListPageLayout`은 폴더/태그 허브용 레이아웃입니다.
- 우측 사이드바는 `RecentNotes` 위주로 단순화하고, 폴더 본문 아래 실제 목록을 노출합니다.

## 새 페이지를 추가할 때 기준

1. 섹션의 공식 입구라면 새 폴더를 만들고 `index.md`에 `folder-hub`를 붙입니다.
2. 첫 화면에서 지원자를 직접 설명해야 한다면 `portfolio-home`을 쓰되, 홈 한 장으로 제한합니다.
3. 구조 설명이나 흐름 해설처럼 본문 중심 문서라면 `cssclasses` 없이 기본 detail을 씁니다.
4. 메모, 연구, 실험 정리처럼 문단 밀도가 높다면 `research-note`를 붙입니다.
5. 새 페이지 타입이 필요하면 먼저 `quartz/styles/pages/`와 `Content.tsx` 기준으로 기존 타입으로 해결 가능한지부터 확인합니다.

## 이 구조를 유지하는 이유

- 홈은 요약에만 집중해야 하므로 다른 허브와 분리해야 합니다.
- 허브는 "읽게 만드는 역할"이 핵심이라 자동 목록과 설명이 같이 있어야 합니다.
- 상세 문서는 정보 밀도가 높으므로 기본 헤더, TOC, backlinks를 유지하는 편이 낫습니다.
- 연구 노트는 같은 상세 문서라도 더 긴 호흡과 본문 리듬이 필요해 별도 타입이 필요합니다.
