import React from "react";
import SajuHeader from "./SajuHeader";
import SajuTable from "./SajuTable";

/**
 * 사주팔자표 메인 컴포넌트
 *
 * 전통적인 사주팔자 차트를 표 형태로 구현합니다.
 * 사주팔자는 생년월일시를 기준으로 천간(天干)과 지지(地支)를 조합하여
 * 사람의 운명과 성격을 분석하는 동양철학의 핵심 개념입니다.
 *
 * 구성 요소:
 * - SajuHeader: 사주 주인 정보 및 생년월일시
 * - SajuTable: 5열 8행 구조의 상세 사주팔자 테이블
 */
export default function SajuChart() {
  return (
    <div className="mt-0 mb-6 p-5">
      <div
        className="relative w-full border-[3px] border-[#1B2F49] shadow-lg overflow-hidden"
        style={{
          padding: "30px 0",
          backgroundImage: "url('/Frame 1410141530.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "621px",
        }}
      >
        {/* 사주팔자표 헤더 */}
        <SajuHeader />

        {/* 사주팔자표 테이블 */}
        <SajuTable />
      </div>
    </div>
  );
}
