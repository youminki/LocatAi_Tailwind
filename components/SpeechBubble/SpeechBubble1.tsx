import React from "react";

/**
 * 첫 번째 말풍선 컴포넌트
 *
 * character1과 character2 사이에 위치하는 말풍선으로,
 * 사주팔자 분석 시작을 알리는 메시지를 표시합니다.
 */
export default function SpeechBubble1() {
  return (
    <div
      className="absolute Bottom-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-50"
      style={{
        marginBottom: "50px",
      }}
    >
      <div className="relative">
        <img src="/Union.png" alt="말풍선" className="w-64 h-auto" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-800 text-sm font-medium text-center px-8 leading-relaxed pt-5">
            이제 본격적으로
            <br />
            <span className="font-bold">OO님</span>의 사주팔자를
            <br />
            분석해볼 차례네요.
          </p>
        </div>
      </div>
    </div>
  );
}
