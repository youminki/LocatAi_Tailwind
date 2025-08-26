import React from "react";

/**
 * 첫 번째 캐릭터 섹션 컴포넌트
 *
 * 전통 한복을 입은 여성 캐릭터와 상단/하단 그라데이션 오버레이를 포함합니다.
 * 배경 이미지 위에 캐릭터를 배치하고 자연스러운 시각적 연결을 제공합니다.
 */
export default function Character1() {
  return (
    <div className="relative">
      {/* 메인 캐릭터 이미지 */}
      <img
        src="/character1.jpg"
        alt="전통 한복을 입은 여성 캐릭터"
        className="w-full"
      />

      {/* 제목 오버레이 (현재 비어있음) */}
      <div
        className="absolute flex flex-col items-center"
        style={{
          width: "157px",
          height: "82px",
          left: "calc(50% - 158px/2)",
          top: "85px",
          gap: "12px",
        }}
      ></div>

      {/* 상단 그라데이션 오버레이 */}
      <div
        className="absolute"
        style={{
          width: "100%",
          height: "261px",
          left: "0px",
          top: "0px",
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 25.16%, #000000 100%)",
          transform: "rotate(-180deg)",
        }}
      />

      {/* 하단 그라데이션 오버레이 */}
      <div
        className="absolute"
        style={{
          width: "100%",
          height: "195px",
          left: "0px",
          bottom: "0px",
          background:
            "linear-gradient(180deg, rgba(243, 242, 239, 0) 25.16%, #F3F2EF 100%)",
          transform: "matrix(-1, 0, 0, 1, 0, 0)",
        }}
      />
    </div>
  );
}
