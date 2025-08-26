# LocatAI Tailwind - 프론트엔드 반응형 코딩테스트

## 프로젝트 개요
로켓AI 팀을 위한 프론트엔드 반응형 코딩테스트 프로젝트입니다.

## 주요 기능
- 반응형 채팅 인터페이스 (max-w-md 448px 최대 너비)
- 말풍선 형태의 대화 UI
- 사주팔자 차트 컴포넌트 (한자 데이터 포함)
- 모든 화면 크기에서 일관된 사용자 경험 제공

## 기술 스택
- Next.js 14
- TypeScript
- Tailwind CSS
- React 18

## 실행 방법

### 개발 환경
```bash
npm install
npm run dev
```

### 프로덕션 빌드
```bash
npm run build
npm start
```

## 배포
Vercel을 통해 자동 배포됩니다.

## 프로젝트 구조
```
├── app/
│   ├── layout.tsx      # 루트 레이아웃
│   ├── page.tsx        # 메인 페이지
│   └── globals.css     # 전역 스타일
├── components/
│   ├── ChatBubble.tsx  # 채팅 말풍선 컴포넌트
│   └── SajuChart.tsx   # 사주팔자 차트 컴포넌트
└── package.json
```