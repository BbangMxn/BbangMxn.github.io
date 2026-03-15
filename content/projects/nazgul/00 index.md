---
title: Nazgul
tags:
  - portfolio
  - rag
  - spring-boot
  - react
  - ai
cssclasses:
  - folder-hub
---

# Nazgul
> 취미 기반 SNS를 설계하고, 사용자 취미 맥락을 반영한 검색·추천 구조까지 확장한 1인 풀스택 프로젝트

[Architecture](./architecture/) · [Appendix](./appendix/) · [GitHub Repository](https://github.com/BbangMxn/Nazgul)

---

## 1. 프로젝트 개요

Nazgul은 취미를 가진 사용자들이 관심사를 기반으로 정보를 공유하고 소통할 수 있는 커뮤니티형 SNS 서비스를 목표로 개발한 프로젝트입니다.

단순한 CRUD 기반 SNS 구현에 그치지 않고, 실제 서비스 개발 과정처럼 **기획, 설계, 프론트엔드, 백엔드 개발까지 전 과정을 혼자서 수행하며 하나의 서비스를 직접 구축해보는 것**을 목표로 진행했습니다.

---

## 2. 문제 정의

여러 SNS 서비스를 분석하면서 현재의 커뮤니티 서비스는 점차 특정 콘텐츠 소비 중심의 구조로 변화하고 있다는 점을 관찰했습니다.

예를 들어 Meta의 Threads와 같은 서비스는 사용자가 설정한 관심 범위 내에서 콘텐츠를 추천하는 **Short-form 소비 중심 구조**에 가까운 형태로 발전하고 있습니다.

또한 Discord는 게임 커뮤니티를 중심으로 시작했지만, 현재는 다양한 주제를 가진 **폐쇄형 커뮤니티 플랫폼**으로 확장되었습니다.

이러한 흐름을 보며 **취미라는 공통 관심사를 중심으로 사용자들이 자연스럽게 소통할 수 있는 커뮤니티 SNS를 만들어보고자 프로젝트를 시작했습니다.**

프로젝트 초기에는 일반적인 커뮤니티 기능을 구현하는 것에 집중했지만, 이후 **취미 콘텐츠를 더 효과적으로 탐색하고 정리할 수 있는 방법**을 고민하게 되었습니다.

그 과정에서 **LLM과 RAG(Retrieval Augmented Generation)** 기술을 접하게 되었고, 취미와 관련된 정보를 커뮤니티 데이터와 함께 활용할 수 있는 **RAG 기반 SNS 구조로 프로젝트를 확장하게 되었습니다.**

---

## 3. 무엇을 구현했는가

### 3-1. SNS MVP

- 회원가입 / 로그인
- 취미 선택
- 홈 피드
- 게시물 작성
- 사용자 프로필
- 콘텐츠 탐색
- 취미 기반 커뮤니티 구조

### 3-2. 검색·추천 확장

- 취미 맥락 기반 콘텐츠 검색
- 개인화 추천 실험
- RAG 기반 LLM 검색
- 커뮤니티 데이터를 활용한 RAG 데이터 파이프라인

---

## 4. 핵심 사용자 흐름

1. 사용자가 관심 있는 취미를 선택한다  
2. 피드와 탐색 화면을 통해 관련 콘텐츠를 확인한다  
3. 취미 기반 커뮤니티에서 정보를 공유하고 소비한다  
4. LLM 기반 검색을 통해 커뮤니티 데이터를 정리하고 취미 관련 정보를 제공한다  

---

## 5. 기술 스택

**Frontend**
- React
- TypeScript
- Tailwind 
- Vite

**Backend**
- Spring Boot
- JPA
- REST API

**Database**
- SQLite 테스트
- PostgresSql / Railway에서 사용할시

**AI / Retrieval**
- Ollama 임베딩 
- RAG Pipeline(자체 개발)
- Card-first Retrieval(자체 개발)

**Deployment / Docs**
- GitHub
- GitHub Pages
- Markdown Documentation

---

## 6. 왜 이 구조로 확장했는가

단순한 CRUD 기반 SNS 프로젝트로 끝내기보다는 **사용자가 실제로 정보를 탐색하고 활용할 수 있는 서비스 구조**를 만드는 것을 목표로 했습니다.

특히 취미와 관련된 정보는 단순 게시물 형태보다 **검색과 추천을 통해 정리된 형태로 제공되는 것이 더 유용하다**고 판단했습니다.

이러한 문제를 해결하기 위해 **LLM 기반 RAG 구조를 활용하여 커뮤니티 데이터를 기반으로 정보를 검색하고 정리하는 시스템을 실험했습니다.**

---

## 7. 핵심 설계 결정

- **Card-first Retrieval**  
  정보 단위를 카드 형태로 관리하여 검색 구조를 단순화

- **Chunk Grounding**  
  LLM 응답의 근거가 되는 데이터 단위를 명확히 관리

- **Explicit Relation**  
  취미와 콘텐츠 간 관계를 명시적으로 연결

- **Trace Logging**  
  검색 과정과 결과를 추적할 수 있도록 로그 구조 설계

- **Swappable Storage**  
  저장소 구조를 교체할 수 있도록 설계
- 데이터 파이프 라인

---
## 8. 결과


<div style="display:flex; flex-wrap:wrap; gap:10px;">
<img src="nazgul-explore.png" width="300">
<img src="nazgul-hobbies.png" width="300">
<img src="nazgul-profile.png" width="300">
<img src="nazgul-login.png" width="300">
<img src="nazgul-home.jpg" width="300">
</div>

- 취미 기반 SNS MVP 구현
- 커뮤니티 기반 RAG 검색 구조 프로토타입 개발
- LLM 기반 취미 정보 탐색 구조 실험

---

## 9. 한계와 개선 계획
- SNS에 RAG를 추가해봤지만 더 활용해야할 고민이 필요하다고 생각을 한다.
- 기존의 다양한 RAG를 자기 자신만의 형식으로 RAG를 만들었고 여기서 출처부터 다양하게 대응이 가능하도록 구현을 했지만 아직 방향성이 부족하다고 생각이 들었다.
- RAG 구조에 대한 추가적인 연구 필요 / 임베딩에 대한 지식의 부족
- 데이터 규모 확장 필요
- 검색 및 추천 성능 평가 체계 구축
- RAG과 llm을 연결해 대화하는 커뮤니티 형식으로 발전을 햇어야했다는 생각이 들었다.

---

## 10. 링크

- GitHub Repository  
- Architecture  
- Appendix











