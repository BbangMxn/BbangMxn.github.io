---
title: 사이트 폴더 구조
tags:
  - wiki
  - architecture
  - quartz
  - fsd
cssclasses:
  - research-note
aliases:
  - wiki/site/folder-structure
---

콘텐츠는 주제별로 관리하고, 사이트 화면 코드는 FSD의 책임과 의존 방향에 맞춰 분리합니다.

## 전체 구조

```text
content/                  # Markdown과 문서 이미지
quartz/
├─ app/
│  ├─ layouts/            # Quartz 레이아웃 조합
│  └─ styles/             # 현재 사이트의 전역 스타일
├─ widgets/
│  ├─ site-navigation/    # 메뉴와 언어 전환
│  └─ content-index/      # 프로젝트·공부 목록 UI
├─ entities/
│  └─ document/           # 문서 선택·주제 분류·정렬
├─ shared/
│  ├─ routes/             # 메뉴 주소·언어별 이름·경로 판별
│  └─ lib/quartz/         # Quartz 연결과 현지화
├─ components/            # Quartz 기본 컴포넌트
├─ plugins/               # 문서 변환·출력
└─ processors/            # 문서 처리
quartz.layout.ts           # quartz/app으로 연결하는 엔진 진입점
quartz.config.ts           # 빌드 설정
public/                   # 빌드 결과
```

## 의존 방향

`app → widgets → entities → shared` 순서로 의존합니다. 위젯은 다른 위젯을 직접 참조하지 않고 app에서 조합합니다. 슬라이스 밖에서는 각 폴더의 `index.ts`를 통해 접근합니다.

Quartz 타입과 기능은 `shared/lib/quartz`가 연결합니다. 페이지 본문과 라우트 생성은 Quartz가 담당하므로 별도 `pages`를 중복해서 만들지 않았습니다. 독립된 사용자 기능이 생기면 그때 `features`를 추가합니다.

## 콘텐츠 구조

| 위치 | 작성할 내용 |
| --- | --- |
| `index.md` | 홈의 소개와 주요 기록 링크 |
| `about.md` | 소개와 스킬셋 |
| `contact.md` | 이메일·GitHub |
| `projects/<project>/` | 서비스·캡스톤 구현과 설계 기록 |
| `projects/hackathon/` | 해커톤 프로젝트와 참여 기록 |
| `projects/capstone/` | 캡스톤 프로젝트 |
| `notes/index.md` | 공부 기록의 입구 |
| `notes/research/<topic>/` | 주제별 학습과 연구 |
| `notes/wiki/<topic>/` | 개념과 참고 자료 |
| `notes/diary/` | 일상과 경험 메모 |
| `docs/` | 필요할 때 참고하는 문서 양식 |
| `ja/` | 일본어 소개와 목록 페이지 |

`content`는 FSD 코드 계층으로 나누지 않습니다. 문서와 이미지는 주제 옆에 두고, 공부 문서는 `notes` 아래에 모읍니다. 공부 목록은 `notes/research/Java`와 `notes/wiki/Java`처럼 같은 주제를 한 묶음으로 보여줍니다.

이전 `research/`, `wiki/`, `Diary/` 주소는 각 문서의 `aliases`로 새 주소에 연결합니다. 기존 외부 링크를 위해 별칭을 유지합니다.

## public 관리

`public/`은 `npm run build`가 생성하는 배포 결과입니다. 문서와 이미지는 `content/`, 공통 정적 자산은 `quartz/static/`, 사이트 디자인은 `quartz/app/`에서 수정합니다.

- 빌드 시 기존 출력이 정리되고 HTML·CSS·JS·검색 색인 등이 다시 생성됩니다.
- `public/`에는 직접 작성한 파일을 보관하지 않습니다.
- `.gitignore`로 빌드 결과와 의존성·캐시를 제외합니다.
- GitHub Pages에는 CI가 생성한 `public/`을 배포합니다.
- 이전 주소용 리다이렉트가 있어 `public/`에는 옛 폴더가 일부 남을 수 있습니다.

## 수정할 곳

- 글 작성: `content/`
- 메뉴: `quartz/shared/routes/`, `quartz/widgets/site-navigation/`
- 목록 선택·분류: `quartz/entities/document/`
- 목록 표시: `quartz/widgets/content-index/`
- 화면 배치: `quartz/app/layouts/`
- 현재 스위스 스타일: `quartz/app/styles/site.scss`
- 공통 Markdown 스타일: `quartz/app/styles/markdown.scss`

`quartz/styles/custom.scss`는 Quartz 기본 스타일과 사이트 스타일을 불러오는 연결 파일입니다. 기존 Quartz의 스타일·컴포넌트 파일은 엔진 및 과거 구성과의 호환을 위해 유지합니다.

[FSD 계층 참고](https://feature-sliced.design/docs/reference/layers) · [페이지 구조](./page-architecture.md)
