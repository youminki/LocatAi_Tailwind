import React from "react";

/**
 * 두 번째 말풍선 컴포넌트
 *
 * character3 위에 위치하는 말풍선으로,
 * 사주팔자표 정리 완료를 알리는 메시지를 표시합니다.
 */
export default function SpeechBubble2() {
  return (
    <div className="absolute -top-4 left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="relative">
        <img src="/Union2.png" alt="말풍선" className="w-64 h-auto" />
        <div className="absolute inset-0 flex items-start justify-center pt-11">
          <p className="text-gray-800 text-sm font-medium text-center px-8 leading-relaxed">
            제가 <span className="font-bold">OO님</span>의 사주를
            <br />
            보기 쉽게 표로 정리했어요
          </p>
        </div>
      </div>
    </div>
  );
}
