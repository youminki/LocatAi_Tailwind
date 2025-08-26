import React from "react";

/**
 * 두 번째 캐릭터 컴포넌트
 *
 * 서예 붓을 든 손 이미지를 표시합니다.
 * 첫 번째 말풍선과 두 번째 말풍선 사이에 위치하여 자연스러운 흐름을 만듭니다.
 */
export default function Character2() {
  return (
    <div
      className="flex justify-center items-center flex-col gap-1"
      style={{
        marginTop: "114px",
        marginBottom: "40px",
        marginRight: "24px",
      }}
    >
      <img src="/character2.jpg" alt="서예 붓을 든 손" className="w-full" />
    </div>
  );
}
