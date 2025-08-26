import React from "react";

/**
 * 세 번째 캐릭터 컴포넌트
 *
 * 전통 한복을 입고 공부하는 여성 캐릭터를 표시합니다.
 * 하단에 그라데이션 오버레이를 포함하여 사주팔자표와의 자연스러운 연결을 제공합니다.
 */
export default function Character3() {
  return (
    <div className="relative">
      {/* 메인 캐릭터 이미지 */}
      <img
        src="/character3.jpg"
        alt="전통 한복을 입고 공부하는 여성 캐릭터"
        className="w-full"
      />

      {/* 하단 그라데이션 오버레이 */}
      <div
        className="absolute w-full"
        style={{
          height: "118px",
          left: "0px",
          right: "0",
          bottom: "0px",
          background:
            "linear-gradient(180deg, rgba(243, 242, 239, 0) 25.16%, #F3F2EF 100%)",
          transform: "matrix(-1, 0, 0, 1, 0, 0)",
        }}
      />
    </div>
  );
}
