# LocatAI Tailwind - 사주팔자 분석 웹 애플리케이션

## 프로젝트 개요

로켓AI 팀을 위한 프론트엔드 반응형 코딩테스트 프로젝트입니다.
전통적인 사주팔자 차트를 현대적인 UI/UX로 구현하여 사용자 친화적인 인터페이스를 제공합니다.

## 주요 기능

- **캐릭터 기반 인터페이스**: 전통 한복을 입은 캐릭터들과 자연스러운 대화 흐름
- **말풍선 UI**: Union.png, Union2.png를 활용한 직관적인 대화 표현
- **사주팔자 차트**: 5열 8행 구조의 상세한 사주팔자 분석표
- **반응형 디자인**: 모든 화면 크기에서 일관된 사용자 경험 제공
- **그라데이션 효과**: 자연스러운 시각적 연결과 깊이감

## 기술 스택

- **Next.js 15.5.0**: App Router 기반의 최신 React 프레임워크
- **TypeScript 5.3.0**: 타입 안전성과 개발 생산성 향상
- **Tailwind CSS 3.3.6**: 유틸리티 퍼스트 CSS 프레임워크
- **React 18.2.0**: 최신 React 기능과 성능 최적화

## 실행 방법

### 개발 환경

```bash
# 의존성 설치
yarn install

# 개발 서버 실행 (http://localhost:3000)
yarn dev

# 타입 체크
yarn type-check

# 코드 포맷팅
yarn format
```

### 프로덕션 빌드

```bash
# 프로덕션 빌드
yarn build

# 프로덕션 서버 실행
yarn start

# 린트 검사
yarn lint
```

### 배포

```bash
# Vercel 프로덕션 배포
vercel --prod

# 배포 URL: https://locatai-tailwind-mx5caiw0l-youminkis-projects.vercel.app
```

## 배포

Vercel을 통해 자동 배포됩니다.

## 프로젝트 구조

```
├── app/
│   ├── layout.tsx          # 루트 레이아웃 (메타데이터, 폰트 설정)
│   ├── page.tsx            # 메인 페이지 (컴포넌트 조합)
│   └── globals.css         # 전역 스타일 (Tailwind CSS, 커스텀 스타일)
├── components/              # 재사용 가능한 컴포넌트들
│   ├── CharacterSection/   # 캐릭터 관련 컴포넌트
│   │   ├── Character1.tsx  # 첫 번째 캐릭터 + 그라데이션
│   │   ├── Character2.tsx  # 서예 손 이미지
│   │   └── Character3.tsx  # 공부하는 캐릭터 + 그라데이션
│   ├── SpeechBubble/       # 말풍선 컴포넌트
│   │   ├── SpeechBubble1.tsx # 첫 번째 말풍선
│   │   └── SpeechBubble2.tsx # 두 번째 말풍선
│   └── SajuChart/          # 사주팔자 차트 컴포넌트
│       ├── SajuChart.tsx   # 메인 차트 컴포넌트
│       ├── SajuHeader.tsx  # 차트 헤더
│       └── SajuTable.tsx   # 차트 테이블
├── public/                  # 정적 자산
│   ├── character1.jpg      # 메인 캐릭터 이미지
│   ├── character2.jpg      # 서예 손 이미지
│   ├── character3.jpg      # 공부하는 캐릭터 이미지
│   ├── Union.png           # 첫 번째 말풍선 이미지
│   ├── Union2.png          # 두 번째 말풍선 이미지
│   └── Frame 1410141530.jpg # 배경 이미지
├── .vscode/                 # VS Code 설정 (CSS 검증, Tailwind 인식)
├── package.json             # 프로젝트 의존성 및 스크립트
└── tailwind.config.js       # Tailwind CSS 설정
```

## 핵심 구현 내용

### 1. **사주팔자 테이블 구조**

- CSS Grid를 활용한 5열 8행 테이블 레이아웃
- 천간(天干), 지지(地支), 십성(十星) 등 전통 사주 요소 구현
- 한자와 한글 병기로 사용자 이해도 향상

### 2. **반응형 UI/UX**

- Tailwind CSS 유틸리티 클래스를 활용한 빠른 스타일링
- 캐릭터 이미지와 말풍선을 통한 스토리텔링 접근
- 그라데이션 오버레이로 자연스러운 시각적 연결

### 3. **성능 최적화**

- Next.js App Router의 자동 코드 분할
- TypeScript를 통한 타입 안전성 확보
- 이미지 최적화 및 효율적인 CSS 구조
