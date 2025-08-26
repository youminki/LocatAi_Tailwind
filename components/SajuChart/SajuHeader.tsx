import React from "react";

/**
 * 사주팔자표 헤더 컴포넌트
 *
 * 사주팔자표 상단에 위치하는 제목과 생년월일시 정보를 표시합니다.
 * Gapyeong Hanseokbong 폰트를 사용하여 전통적인 느낌을 연출합니다.
 */
export default function SajuHeader() {
  return (
    <div
      className="text-center"
      style={{
        marginTop: "40px",
      }}
    >
      {/* 사주 주인 이름 */}
      <div
        className="text-[#424242]"
        style={{
          width: "100%",
          height: "16px",
          fontFamily: "Gapyeong Hanseokbong",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "100%",
          textAlign: "center",
          margin: "0 auto",
        }}
      >
        김로켓님의 사주
      </div>

      {/* 생년월일시 */}
      <div
        className="text-[#424242]"
        style={{
          width: "100%",
          height: "20px",
          fontFamily: "Gapyeong Hanseokbong",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "20px",
          lineHeight: "100%",
          textAlign: "center",
          margin: "0 auto",
          marginTop: "12px",
        }}
      >
        1980년 8월27일 08:10
      </div>
    </div>
  );
}
