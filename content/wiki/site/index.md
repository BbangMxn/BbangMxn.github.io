---
title: 사이트 구조
tags:
  - wiki
  - architecture
  - quartz
cssclasses:
  - folder-hub
---

<div class="hub-header">
  <p class="hub-kicker">위키 / 구현</p>
  <h2>이 포트폴리오 사이트 자체를 읽는 입구</h2>
  <p class="hub-lede">
    이 섹션은 프로젝트 문서가 아니라, 현재 Quartz 기반 포트폴리오가 어떤 페이지 계층과 폴더 규칙으로 운영되는지 설명하는 구현 문서 묶음입니다.
    콘텐츠 구조와 렌더링 구조를 같이 보려면 여기서 시작하는 편이 가장 빠릅니다.
  </p>
</div>

<section class="hub-section">
  <p class="hub-section-kicker">문서</p>
  <h3>먼저 볼 세 문서</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <a href="./page-architecture">
        <span class="hub-label">페이지</span>
        <strong>사이트 페이지 아키텍처</strong>
        <p>홈, 허브, 상세 문서, 연구 노트가 어떤 렌더 경로를 타고 어떤 역할을 맡는지 Quartz 기준으로 정리한 문서입니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="./folder-structure">
        <span class="hub-label">폴더</span>
        <strong>사이트 폴더 구조</strong>
        <p><code>content</code>, <code>quartz</code>, <code>public</code>, 루트 설정 파일이 각각 어떤 책임을 가지는지 실제 저장소 구조 기준으로 정리한 문서입니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="./backend-architecture">
        <span class="hub-label">백엔드</span>
        <strong>백엔드 아키텍처 기준</strong>
        <p>BagInDB, Worker, Nazgul, Smart Factory처럼 백엔드 중심 프로젝트를 어떤 레이어와 어떤 문서 축으로 보여줘야 하는지 공통 기준으로 정리한 문서입니다.</p>
      </a>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">계층</p>
  <h3>현재 페이지 계층 요약</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">홈</span>
        <p><code>portfolio-home</code>은 루트 홈만 맡습니다. 지원자 요약과 대표 입구를 가장 먼저 보여주는 단독 홈 타입입니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">허브</span>
        <p><code>folder-hub</code>는 섹션 루트와 프로젝트 메인 페이지를 맡습니다. 소개 텍스트와 자동 목록을 함께 보여주는 허브 타입입니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">상세</span>
        <p>아키텍처, 흐름, 설계 해설 문서는 기본 상세 페이지를 사용합니다. 기본 헤더와 TOC, backlinks를 유지하는 문서형 타입입니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">노트</span>
        <p><code>research-note</code>는 리서치와 기술 메모용 타입입니다. 본문 가독성과 우측 보조 패널을 유지하면서 밀도 높은 글을 읽게 만듭니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">백엔드</span>
        <p>백엔드 중심 프로젝트는 메인 허브 외에 <code>architecture</code>, API 표면, 캐시/파이프라인, 데이터 흐름 문서를 같이 가져야 백엔드 포트폴리오로 읽힙니다.</p>
      </div>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">진입점</p>
  <h3>코드에서 먼저 볼 파일</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">설정</span>
        <p><code>quartz.config.ts</code>는 어떤 emitter가 켜져 있고 어떤 변환기가 Markdown을 처리하는지 정하는 전체 빌드 진입점입니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">레이아웃</span>
        <p><code>quartz.layout.ts</code>는 콘텐츠 페이지와 리스트 페이지가 어떤 좌우 사이드바와 헤더 구성을 쓰는지 정하는 레이아웃 분기점입니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">본문</span>
        <p><code>quartz/components/pages/Content.tsx</code>와 <code>FolderContent.tsx</code>는 frontmatter의 <code>cssclasses</code>와 폴더 목록이 실제 페이지 본문으로 바뀌는 위치입니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">스타일</span>
        <p><code>quartz/styles/custom.scss</code>와 <code>quartz/styles/pages/</code>는 페이지 패밀리별 셸과 타이포그래피 차이를 실제 화면으로 고정하는 곳입니다.</p>
      </div>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">규칙</p>
  <h3>운영 규칙</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">기본</span>
        <p>새 섹션을 만들면 먼저 폴더와 <code>index.md</code>를 만들고, 그 페이지가 허브인지 일반 문서인지부터 고정합니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">프로젝트</span>
        <p>대표 프로젝트는 공통으로 <code>index.md</code>, <code>architecture.md</code>, <code>start-here.md</code>를 갖고, 증거 이미지는 같은 폴더의 <code>image/</code>에 둡니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <a href="../portfolio-standard">
        <span class="hub-label">기준</span>
        <strong>포트폴리오 기준</strong>
        <p>파일 이름 규칙과 페이지 역할을 더 넓은 포트폴리오 운영 기준으로 보려면 기존 기준 문서를 같이 읽는 편이 맞습니다.</p>
      </a>
    </li>
  </ul>
</section>
