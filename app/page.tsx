import React from "react";

// 컴포넌트 import
import Character1 from "@/components/CharacterSection/Character1";
import Character2 from "@/components/CharacterSection/Character2";
import Character3 from "@/components/CharacterSection/Character3";
import SpeechBubble1 from "@/components/SpeechBubble/SpeechBubble1";
import SpeechBubble2 from "@/components/SpeechBubble/SpeechBubble2";
import SajuChart from "@/components/SajuChart/SajuChart";

/**
 * 사주팔자 분석 웹 애플리케이션 메인 페이지
 *
 * 이 페이지는 전통적인 사주팔자 차트를 현대적인 UI로 표현합니다.
 * 캐릭터 이미지들과 말풍선을 통해 사용자에게 친근한 인터페이스를 제공하며,
 * 사주팔자표를 통해 상세한 정보를 표시합니다.
 *
 * 주요 구성 요소:
 * - Character1: 첫 번째 캐릭터 + 상단/하단 그라데이션
 * - SpeechBubble1: 첫 번째 말풍선 (사주팔자 분석 시작 안내)
 * - Character2: 서예 손 이미지
 * - Character3: 공부하는 캐릭터 + 하단 그라데이션
 * - SpeechBubble2: 두 번째 말풍선 (사주팔자표 정리 완료 안내)
 * - SajuChart: 사주팔자표 (헤더 + 테이블)
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-white py-0 px-0">
      <div
        className="relative w-full max-w-md mx-auto bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/Frame 1410141530.jpg)`,
          minHeight: "800px",
        }}
      >
        {/* 첫 번째 캐릭터 섹션 */}
        <Character1 />

        {/* 첫 번째 말풍선 */}
        <SpeechBubble1 />

        {/* 두 번째 캐릭터 섹션 */}
        <Character2 />

        {/* 세 번째 캐릭터 섹션 */}
        <div className="relative">
          <Character3 />

          {/* 두 번째 말풍선 */}
          <SpeechBubble2 />
        </div>

        {/* 사주팔자표 */}
        <SajuChart />
      </div>
    </main>
  );
}
