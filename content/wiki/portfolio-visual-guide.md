---
title: Portfolio Visual Guide
tags:
  - wiki
  - portfolio
  - design
  - visual
cssclasses:
  - folder-hub
---

<div class="hub-header">
  <p class="hub-kicker">Wiki / Visual</p>
  <h2>미니멀한 포트폴리오도 섹션 경계, 시선 흐름, 대비가 분명해야 빨리 읽힙니다</h2>
  <p class="hub-lede">
    이 문서는 화려한 스타일을 늘리는 기준이 아니라, 미니멀리즘 안에서도 무엇을 더 강하게 보이게 해야 하는지 정리한 시각 설계 기준입니다.
    섹션 구분, 시각적 계층, 텍스트 가독성, 클릭 가능한 요소 식별을 외부 근거와 함께 묶고 이 사이트에 맞는 적용 기준으로 압축합니다.
  </p>
</div>

<section class="hub-section">
  <p class="hub-section-kicker">Findings</p>
  <h3>먼저 확인된 시각 설계 원칙</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Hierarchy</span>
        <p>NN/g의 시각 디자인 원칙에서는 시선이 중요도 순서대로 움직이게 만들어야 한다고 설명합니다. 이를 위해 크기, 대비, 그룹화가 함께 작동해야 하고, 타입 크기는 너무 많지 않게 2~3단계 안에서 운영하는 편이 좋습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Whitespace</span>
        <p>WebAIM은 텍스트 블록 주변의 여백이 읽기와 스캔을 쉽게 만든다고 설명합니다. 여백이 부족하면 문서가 더 복잡하게 느껴지고, 줄 길이도 길어져 읽기 난도가 올라갑니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Section Separation</span>
        <p>W3C의 text spacing 설명에서도 텍스트 블록 사이의 white space가 섹션과 callout box를 더 쉽게 구분하게 돕는다고 말합니다. 미니멀한 화면일수록 경계선과 간격 설계가 더 중요합니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Contrast</span>
        <p>W3C WCAG 2.1 기준으로 일반 본문은 최소 4.5:1, 큰 텍스트는 3:1 이상의 대비가 필요합니다. 미니멀 스타일이라도 제목, 본문, 보조 정보가 충분히 구분되지 않으면 시인성이 바로 떨어집니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Text Layout</span>
        <p>WebAIM은 대체로 50자 미만 혹은 120자 초과 줄 길이가 읽기 어려움을 만든다고 설명합니다. 또한 너무 긴 문단, 과한 정렬, 낮은 줄 간격은 가독성을 해칩니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Responsive Readability</span>
        <p>W3C Reflow 기준은 320 CSS px 폭에서도 내용이 정보 손실 없이 재배치되어야 한다고 설명합니다. 미니멀한 레이아웃일수록 모바일에서 줄 길이와 간격이 무너지지 않아야 합니다.</p>
      </div>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Minimalism</p>
  <h3>미니멀리즘에서 특히 조심해야 하는 것</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Not Flat Everything</span>
        <p>미니멀리즘은 모든 요소를 똑같이 평평하게 만드는 것이 아닙니다. 오히려 중요한 제목, 입구 링크, 증거 카드, 본문 메모가 서로 다른 역할로 구분되어야 합니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Fewer Stronger Signals</span>
        <p>장식 요소를 줄일수록 남는 신호는 더 강해야 합니다. 이 사이트에서는 상단 구분선, 간격, 제목 대비, 라벨 색상, 링크 hover가 그 역할을 맡습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Clickable vs Static</span>
        <p>클릭 가능한 항목과 읽기용 메모가 비슷하게 보이면 사용자가 헷갈립니다. 문서형 메모와 링크형 항목은 최소한 hover, 라벨, 경계 방식에서 명확히 달라야 합니다.</p>
      </div>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Applied</p>
  <h3>이 사이트에 바로 적용할 시각 기준</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Rule 1</span>
        <p>섹션은 배경 박스보다 간격과 상단 구분선으로 나눕니다. 대신 섹션 간 패딩 차이가 충분히 커서 한 눈에 다른 블록으로 읽혀야 합니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Rule 2</span>
        <p>문서형 메모(`hub-note`)와 링크형 리스트(`hub-item > a`)는 같은 톤을 쓰더라도 상호작용 신호는 분리합니다. hover, 라벨, 미세한 강조선 차이가 필요합니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Rule 3</span>
        <p>증거 영역(`Proof`)은 일반 문단보다 한 단계 더 눈에 띄어야 합니다. 다만 전체 카드 박스보다 미디어, 수치, 핵심 문장에 시선을 모으는 방식이 현재 사이트 톤에 더 맞습니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Rule 4</span>
        <p>본문 폭은 지금처럼 좁게 유지하되, 실제 줄 길이는 대략 60~90자 안쪽으로 유지하는 편이 좋습니다. 이는 WebAIM의 50~120자 범위를 이 사이트에 적용한 보수적 기준입니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Rule 5</span>
        <p>제목, 본문, 보조 라벨의 대비 차이를 더 분명하게 둡니다. 제목은 가장 진하고, 본문은 읽기 가능한 중간 대비, 라벨과 메타는 보조 대비로 떨어져야 합니다.</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Rule 6</span>
        <p>모바일에서는 박스보다 흐름이 더 중요합니다. 세로 간격, 제목 크기 감소, 미디어 높이 제한, 버튼 폭 확장처럼 읽는 순서가 끊기지 않도록 재배치해야 합니다.</p>
      </div>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Checklist</p>
  <h3>디자인 점검 체크리스트</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Check 1</span>
        <p>섹션 제목만 훑어도 문서가 몇 덩어리로 나뉘는지 바로 보이는가</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Check 2</span>
        <p>클릭 가능한 영역과 읽기용 메모가 시각적으로 확실히 구분되는가</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Check 3</span>
        <p>본문 대비와 줄 길이가 오래 읽어도 피로하지 않은 수준인가</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Check 4</span>
        <p>핵심 증거 영역이 일반 설명보다 한 단계 더 빠르게 눈에 들어오는가</p>
      </div>
    </li>
    <li class="hub-item">
      <div class="hub-note">
        <span class="hub-label">Check 5</span>
        <p>320px 수준의 좁은 화면에서도 가로 스크롤 없이 내용이 자연스럽게 이어지는가</p>
      </div>
    </li>
  </ul>
</section>

<section class="hub-section">
  <p class="hub-section-kicker">Sources</p>
  <h3>참고한 외부 근거</h3>
  <ul class="hub-list">
    <li class="hub-item">
      <a href="https://media.nngroup.com/media/articles/attachments/Principles_Visual_Design-Letter.pdf">
        <span class="hub-label">UX Research</span>
        <strong>NN/g - 5 Visual-design Principles in UX</strong>
        <p>시각적 계층, 대비, 균형, 크기 사용을 어떻게 잡아야 하는지 설명한 시각 디자인 원칙 자료입니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="https://webaim.org/techniques/textlayout/">
        <span class="hub-label">Accessibility</span>
        <strong>WebAIM - Text/Typographical Layout</strong>
        <p>여백, 줄 길이, 문단 구분, 정렬 방식이 가독성에 미치는 영향을 설명한 자료입니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="https://webaim.org/articles/evaluatingcognitive/">
        <span class="hub-label">Accessibility</span>
        <strong>WebAIM - Evaluating Cognitive Web Accessibility</strong>
        <p>짧은 문단, 적절한 줄 간격, 명확한 위치 표지, 읽기 쉬운 대비가 왜 필요한지 정리한 자료입니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum">
        <span class="hub-label">Standard</span>
        <strong>W3C - Contrast Minimum</strong>
        <p>본문 텍스트 4.5:1, 큰 텍스트 3:1 대비 기준을 설명한 WCAG 이해 문서입니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html">
        <span class="hub-label">Standard</span>
        <strong>W3C - Text Spacing</strong>
        <p>줄 간격, 단어 간격, 문자 간격 조정이 깨지지 않아야 하며 텍스트 블록 간 white space가 섹션 구분에 도움된다는 점을 설명한 문서입니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="https://www.w3.org/WAI/WCAG21/Understanding/reflow">
        <span class="hub-label">Standard</span>
        <strong>W3C - Reflow</strong>
        <p>좁은 화면이나 고배율 환경에서도 가로 스크롤 없이 읽을 수 있어야 한다는 반응형 읽기 기준을 설명한 문서입니다.</p>
      </a>
    </li>
    <li class="hub-item">
      <a href="https://design-system.service.gov.uk/styles/spacing/">
        <span class="hub-label">System</span>
        <strong>GOV.UK Design System - Spacing</strong>
        <p>간격 스케일을 체계적으로 두고 작은 화면과 큰 화면에서 일관되게 다루는 방법을 설명한 디자인 시스템 문서입니다.</p>
      </a>
    </li>
  </ul>
</section>
