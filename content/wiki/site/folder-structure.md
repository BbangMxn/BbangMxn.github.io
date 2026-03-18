---
title: 사이트 폴더 구조
tags:
  - wiki
  - architecture
  - quartz
  - folder
cssclasses:
  - research-note
---

이 저장소는 `콘텐츠`와 `렌더러 커스터마이징`을 분리한 Quartz 포트폴리오입니다. 새 페이지를 추가할 때는 먼저 `content/` 규칙을 보고, 새 레이아웃이나 스타일이 필요할 때만 `quartz/`를 건드리는 편이 맞습니다.

## 루트 구조

```text
githubPage/
├── .github/            # GitHub Actions 등 저장소 자동화
├── content/            # 실제 사이트 문서 소스
├── memory/             # 작업 메모
├── public/             # 전역 정적 파일
├── quartz/             # Quartz 엔진과 커스터마이징 코드
├── package.json        # 실행 스크립트와 의존성
├── quartz.config.ts    # Quartz 빌드 설정
├── quartz.layout.ts    # 공통/페이지 레이아웃 조합
└── README.md           # 로컬 실행과 구조 개요
```

- 루트에서는 `content/`가 제품 데이터이고 `quartz/`가 렌더러라고 보면 됩니다.
- 문서 추가만 할 때는 보통 `content/`만 수정하면 충분합니다.
- 새 페이지 패밀리, 레이아웃, 스타일을 만들 때만 `quartz/`와 루트 설정 파일을 건드립니다.

## content 구조

```text
content/
├── index.md
├── about.md
├── start-here.md
├── Diary/
│   ├── index.md
│   └── *.md
├── projects/
│   ├── index.md
│   └── <project>/
│       ├── index.md
│       ├── start-here.md
│       ├── folder-feature-map.md
│       ├── image/
│       └── *.md
├── research/
│   ├── index.md
│   └── <topic>/
│       ├── index.md
│       ├── start-here.md
│       └── *.md
└── wiki/
    ├── index.md
    ├── portfolio-standard.md
    ├── portfolio-writing-guide.md
    ├── portfolio-visual-guide.md
    └── site/
        ├── index.md
        ├── backend-architecture.md
        ├── page-architecture.md
        └── folder-structure.md
```

### content 운영 규칙

- `index.md`는 폴더의 공식 입구입니다.
- `start-here.md`는 읽는 순서를 설명하는 보조 입구입니다.
- 프로젝트 구조 선택은 메인 `index.md` 안의 아키텍처 섹션에서 먼저 설명합니다.
- `folder-feature-map.md`는 폴더 책임과 기능을 설명하는 상세 문서입니다.
- 프로젝트 증거 이미지는 가능한 한 해당 프로젝트 폴더의 `image/`에 같이 둡니다.
- 공개 기록은 `Diary/`, 진행형 연구는 `research/`, 오래 남길 기준은 `wiki/`로 섞지 않습니다.

## 프로젝트 폴더 규격

```text
content/projects/<project>/
├── index.md               # 주장, 근거, 아키텍처 요약
├── start-here.md          # 추천 읽기 순서
├── folder-feature-map.md  # 폴더 책임과 기능 설명
├── image/                 # 화면 캡처, 다이어그램
└── *.md                   # 세부 판단 문서
```

- `index.md`는 방문자가 가장 먼저 읽는 문서입니다.
- `index.md` 안의 아키텍처 섹션이 저장소 구조와 실행 경계를 먼저 설명합니다.
- `start-here.md`는 메인 페이지와 세부 문서를 어떤 순서로 읽을지 안내합니다.
- `folder-feature-map.md`는 폴더를 실제 기능 기준으로 풀어 쓰는 문서입니다.
- 세부 주제 문서는 `client-transition.md`, `domain-separation.md`처럼 의미가 분명한 이름으로 추가합니다.

## 백엔드 프로젝트 문서 규격

```text
content/projects/<backend-project>/
├── index.md
├── start-here.md
├── folder-feature-map.md
├── image/
├── api-surface.md
├── cache-strategy.md
├── classification-pipeline.md
├── proposal-safety.md
├── retrieval-map.md
├── technical-design.md
├── protocol-stack.md
└── timeseries-pipeline.md
```

- 모든 파일이 항상 필요한 것은 아닙니다.
- 대신 API, 캐시, 파이프라인, 검색, 시계열 수집처럼 이 프로젝트를 대표하는 백엔드 판단 축은 별도 문서로 끊어 두는 편이 좋습니다.
- 현재 BagInDB, Worker, Nazgul, Smart Factory가 각각 이 패턴의 일부를 이미 사용하고 있습니다.
- 공통 기준은 [백엔드 아키텍처 기준](./backend-architecture)에서 계속 갱신합니다.

## research와 wiki의 차이

### research

- 질문과 실험이 먼저 있는 문서를 둡니다.
- `research-note` 타입을 가장 많이 쓰는 곳입니다.
- 아직 결론이 고정되지 않은 자료를 허용합니다.

### wiki

- 반복해서 참고할 규칙과 기준을 둡니다.
- 섹션 허브나 기준 문서는 `folder-hub`, 밀도 높은 구현 문서는 `research-note` 또는 기본 detail을 씁니다.
- 한 번 정한 운영 규칙은 여기서 갱신합니다.

## quartz 구조

```text
quartz/
├── components/
│   ├── pages/         # Content, FolderContent, TagContent
│   ├── scripts/       # 검색, TOC, SPA 등 클라이언트 스크립트
│   └── styles/        # 컴포넌트 단위 스타일
├── plugins/
│   ├── emitters/      # ContentPage, FolderPage, TagPage 등
│   ├── filters/
│   └── transformers/
├── processors/        # parse / filter / emit 파이프라인
├── static/            # Quartz 기본 정적 자산
├── styles/
│   ├── layout/        # 셸과 사이드바
│   ├── pages/         # 페이지 패밀리별 스타일
│   ├── theme/         # 디자인 토큰
│   ├── base.scss
│   └── custom.scss
└── util/              # 경로, 리소스, trie 등 공용 유틸
```

### 수정 우선순위

1. 콘텐츠 표현 문제면 먼저 `content/`를 고칩니다.
2. 특정 페이지 타입의 모양 문제면 `quartz/styles/pages/`를 고칩니다.
3. 공통 레이아웃 문제면 `quartz.layout.ts` 또는 `quartz/styles/layout/`을 고칩니다.
4. 렌더 동작 자체를 바꿔야 할 때만 `quartz/components/pages/`나 `quartz/plugins/emitters/`를 고칩니다.

## 스타일 폴더 규칙

```text
quartz/styles/
├── custom.scss              # 전체 스타일 진입점
├── theme/_tokens.scss       # 사이트 공통 토큰
├── layout/_shell.scss       # 전체 페이지 셸
├── layout/_sidebar.scss     # 좌우 사이드바
└── pages/
    ├── _folio-shell.scss    # 홈/허브 전용 셸
    ├── _portfolio.scss      # portfolio-home, folder-hub
    └── _detail.scss         # research-note와 상세 문서 보정
```

- 새 페이지 타입을 추가하지 않는 한 `custom.scss`에는 `@use`만 늘리고, 실제 규칙은 하위 파일에 둡니다.
- 토큰은 색, 표면, 선처럼 재사용되는 값만 둡니다.
- 셸과 페이지 타입 스타일을 섞지 않습니다.

## public과 콘텐츠 자산

- `public/`은 특정 문서 폴더에 속하지 않는 전역 자산에 씁니다.
- 프로젝트 증거 이미지처럼 문맥이 분명한 자산은 `content/projects/<project>/image/`처럼 문서 옆에 둡니다.
- Quartz 기본 아이콘과 OG 이미지는 `quartz/static/`에 있습니다.

## 새 섹션을 추가할 때 체크리스트

1. `content/<section>/index.md`를 먼저 만든다.
2. 이 페이지가 허브라면 `folder-hub`, 메모라면 `research-note`, 일반 문서라면 기본 detail을 쓴다.
3. 하위 문서 이름은 역할이 드러나게 짓고, `index.md`와 `start-here.md` 규칙을 깨지 않는다.
4. 새 섹션이 주요 입구라면 `content/index.md`나 `content/start-here.md`, `content/wiki/index.md`에서 링크를 연결한다.
5. 스타일 변경이 필요하면 `quartz/styles/pages/`에서 기존 패밀리로 해결 가능한지 먼저 본다.
