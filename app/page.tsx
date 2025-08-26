import React from "react";

// 사주팔자 데이터 타입 정의
interface SajuData {
  hour: {
    tenStar: string;
    heavenlyStem: string;
    earthlyBranch: string;
    tenStar2: string;
    luckStar: string;
    shinSal: string;
    nobleman: string;
  };
  day: {
    tenStar: string;
    heavenlyStem: string;
    earthlyBranch: string;
    tenStar2: string;
    luckStar: string;
    shinSal: string;
    nobleman: string;
  };
  month: {
    tenStar: string;
    heavenlyStem: string;
    earthlyBranch: string;
    tenStar2: string;
    luckStar: string;
    shinSal: string;
    nobleman: string;
  };
  year: {
    tenStar: string;
    heavenlyStem: string;
    earthlyBranch: string;
    tenStar2: string;
    luckStar: string;
    shinSal: string;
    nobleman: string;
  };
}

// 사주팔자 데이터
const sajuData: SajuData = {
  hour: {
    tenStar: "傷官",
    heavenlyStem: "甲",
    earthlyBranch: "寅",
    tenStar2: "比肩",
    luckStar: "死",
    shinSal: "劫殺",
    nobleman: "(없음)",
  },
  day: {
    tenStar: "比肩",
    heavenlyStem: "丁",
    earthlyBranch: "巳",
    tenStar2: "劫財",
    luckStar: "帝旺",
    shinSal: "地殺",
    nobleman: "(없음)",
  },
  month: {
    tenStar: "傷官",
    heavenlyStem: "癸",
    earthlyBranch: "亥",
    tenStar2: "食神",
    luckStar: "胎",
    shinSal: "驛馬殺",
    nobleman: "天乙",
  },
  year: {
    tenStar: "傷官",
    heavenlyStem: "癸",
    earthlyBranch: "酉",
    tenStar2: "偏財",
    luckStar: "長生",
    shinSal: "將星殺",
    nobleman: "天乙, 太極, 文昌",
  },
};

// 천간 박스 컴포넌트
const HeavenlyStemBox: React.FC<{
  stem: string;
  element: string;
  korean: string;
  bgColor: string;
}> = ({ stem, element, korean, bgColor }) => (
  <div
    className={`w-14 h-14 ${bgColor} rounded-xl flex flex-col items-center justify-center text-white mx-auto`}
  >
    <div className="text-2xl">{stem}</div>
    <div className="text-xs">{element}</div>
    <div className="text-[8px]">{korean}</div>
  </div>
);

// 지지 박스 컴포넌트
const EarthlyBranchBox: React.FC<{
  branch: string;
  element: string;
  korean: string;
  bgColor: string;
  textColor?: string;
}> = ({ branch, element, korean, bgColor, textColor = "text-white" }) => (
  <div
    className={`w-14 h-14 ${bgColor} rounded-xl flex flex-col items-center justify-center ${textColor} mx-auto`}
  >
    <div className="text-2xl">{branch}</div>
    <div className="text-xs">{element}</div>
    <div className="text-[8px]">{korean}</div>
  </div>
);

// 테이블 행 컴포넌트
const TableRow: React.FC<{
  label: string;
  hourData: string;
  dayData: string;
  monthData: string;
  yearData: string;
  borderStyle?: string;
}> = ({
  label,
  hourData,
  dayData,
  monthData,
  yearData,
  borderStyle = "border-b border-[#9B9B9B]",
}) => (
  <tr className={borderStyle}>
    <td className="py-2">
      <div className="text-sm">{hourData}</div>
      <div className="text-[10px] font-bold">
        ({getKoreanLabel(label, hourData)})
      </div>
    </td>
    <td className="py-2">
      <div className="text-sm">{dayData}</div>
      <div className="text-[10px] font-bold">
        ({getKoreanLabel(label, dayData)})
      </div>
    </td>
    <td className="py-2">
      <div className="text-sm">{monthData}</div>
      <div className="text-[10px] font-bold">
        ({getKoreanLabel(label, monthData)})
      </div>
    </td>
    <td className="py-2">
      <div className="text-sm">{yearData}</div>
      <div className="text-[10px] font-bold">
        ({getKoreanLabel(label, yearData)})
      </div>
    </td>
  </tr>
);

// 한글 라벨 매핑 함수
const getKoreanLabel = (category: string, value: string): string => {
  const mappings: { [key: string]: { [key: string]: string } } = {
    tenStar: {
      傷官: "상관",
      比肩: "비견",
      劫財: "겁재",
      食神: "식신",
      偏財: "편재",
    },
    heavenlyStem: {
      甲: "갑",
      丁: "정",
      癸: "계",
    },
    earthlyBranch: {
      寅: "인",
      巳: "사",
      亥: "해",
      酉: "유",
    },
    element: {
      陽木: "양목",
      陰火: "음화",
      陰水: "음수",
      陰金: "음금",
    },
    luckStar: {
      死: "사",
      帝旺: "제왕",
      胎: "태",
      長生: "장생",
    },
    shinSal: {
      劫殺: "겁살",
      地殺: "지살",
      驛馬殺: "역마살",
      將星殺: "장성살",
    },
    nobleman: {
      天乙: "천을귀인",
      太極: "태극귀인",
      文昌: "문창귀인",
      "(없음)": "없음",
    },
  };

  return mappings[category]?.[value] || value;
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-0 px-0">
      <div
        className="relative w-full max-w-md mx-auto bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/Frame 1410141530.jpg)`,
          minHeight: "800px",
        }}
      >
        {/* 캐릭터 이미지 */}
        <div className="relative">
          <img
            src="/character1.jpg"
            alt="전통 한복을 입은 여성 캐릭터"
            className="w-full"
          />
          {/* 제목 오버레이 */}
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

          {/* 그라데이션 오버레이 */}
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

        {/* 말풍선 1 */}
        <div className="relative my-4 px-6">
          <div className="bg-white rounded-[30px] shadow-md px-4 py-3 w-fit max-w-[90%] mx-auto text-sm text-black">
            이게... 진짜 내 팔자라고?
          </div>
        </div>

        {/* 손글씨 이미지 및 텍스트 */}
        <div className="flex justify-center items-center flex-col gap-1">
          <img src="/character2.jpg" alt="서예 붓을 든 손" className="w-full" />
          <div className="text-xs text-gray-700">슥슥</div>
        </div>

        {/* 말풍선 2 */}
        <div className="relative my-4 px-6">
          <div className="bg-white rounded-[30px] shadow-md px-4 py-3 w-fit max-w-[90%] mx-auto text-sm text-black">
            흠... 사주팔자에 대해 공부해볼까?
          </div>
        </div>

        {/* 캐릭터 공부 이미지 */}
        <img src="/character2.png" alt="공부하는 캐릭터" className="w-full" />

        {/* 사주팔자표 컴포넌트 */}
        <div className="my-6">
          <div
            className="relative w-full max-w-[351px] mx-auto border-[3px] border-[#1B2F49] shadow-lg  overflow-hidden"
            style={{
              backgroundImage: "url('/Frame 1410141530.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "600px",
            }}
          >
            {/* 헤더 */}
            <div
              className="text-center"
              style={{
                marginTop: "40px",
              }}
            >
              <div
                className="text-[#424242]"
                style={{
                  width: "220px",
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
              <div
                className="text-[#424242]"
                style={{
                  width: "220px",
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

            {/* 테이블 컨테이너 */}
            <div className="p-5">
              {/* 메인 테이블 그리드 */}
              <div className="w-[310px] mx-auto bg-white bg-opacity-80 overflow-hidden border-r-2 border-b-2 border-black">
                {/* 테이블 구조 - 5열 8행 */}
                <div className="grid grid-cols-5 auto-rows-auto h-auto">
                  {/* 1행: 컬럼 헤더 */}
                  {/* 빈 셀 (좌상단) - 테두리 추가 */}
                  <div className="col-span-1 flex flex-col items-center justify-center border-r-2 border-black border-b-[1.05px] border-black bg-[#F5F3EC] py-2">
                    <div></div>
                  </div>

                  {/* 時 (시) */}
                  <div className="col-span-1 flex items-center justify-center text-[20.9229px] leading-[30px] font-normal text-black border-b-[1.05px] border-black border-r border-[#8A8A8A] bg-[#F5F3EC] py-2">
                    時
                  </div>

                  {/* 日 (일) */}
                  <div className="col-span-1 flex items-center justify-center text-[20.9229px] leading-[30px] font-normal text-black border-b-[1.05px] border-black border-r border-[#8A8A8A] bg-[#F5F3EC] py-2">
                    日
                  </div>

                  {/* 月 (월) */}
                  <div className="col-span-1 flex items-center justify-center text-[20.9229px] leading-[30px] font-normal text-black border-b-[1.05px] border-black border-r border-[#8A8A8A] bg-[#F5F3EC] py-2">
                    月
                  </div>

                  {/* 年 (년) */}
                  <div className="col-span-1 flex items-center justify-center text-[20.9229px] leading-[30px] font-normal text-black border-b-[1.05px] border-black bg-[#F5F3EC] py-2">
                    年
                  </div>

                  {/* 2행: 첫 번째 십성 (천간용) */}
                  {/* 十星 라벨 */}
                  <div className="col-span-1 flex flex-col items-center justify-center border-r-2 border-black border-b-[1.05px] border-black bg-[#F5F3EC] py-2">
                    <div className="text-[11.9985px] leading-[17px] font-normal text-black">
                      十星
                    </div>
                    <div className="text-[7.82334px] leading-[8px] font-bold text-black">
                      (십성)
                    </div>
                  </div>

                  {/* 傷官 (상관) */}
                  <div className="col-span-1 flex flex-col items-center justify-center border-b-[1.05px] border-black border-r border-[#8A8A8A] py-2">
                    <div className="font-['Zen_Antique'] font-normal text-[14.6688px] leading-[21px] text-center text-black">
                      傷官
                    </div>
                    <div className="font-['GyeonggiBatang'] font-bold text-[9.77918px] leading-[10px] text-center text-black">
                      (상관)
                    </div>
                  </div>

                  {/* 比肩 (비견) */}
                  <div className="col-span-1 flex flex-col items-center justify-center border-b-[1.05px] border-black border-r border-[#8A8A8A] py-2">
                    <div className="font-['Zen_Antique'] font-normal text-[14.6688px] leading-[21px] text-center text-black">
                      比肩
                    </div>
                    <div className="font-['GyeonggiBatang'] font-bold text-[9.77918px] leading-[10px] text-center text-black">
                      (비견)
                    </div>
                  </div>

                  {/* 傷官 (상관) */}
                  <div className="col-span-1 flex flex-col items-center justify-center border-b-[1.05px] border-black border-r border-[#8A8A8A] py-2">
                    <div className="font-['Zen_Antique'] font-normal text-[14.6688px] leading-[21px] text-center text-black">
                      傷官
                    </div>
                    <div className="font-['GyeonggiBatang'] font-bold text-[9.77918px] leading-[10px] text-center text-black">
                      (상관)
                    </div>
                  </div>

                  {/* 傷官 (상관) */}
                  <div className="col-span-1 flex flex-col items-center justify-center border-b-[1.05px] border-black py-2">
                    <div className="font-['Zen_Antique'] font-normal text-[14.6688px] leading-[21px] text-center text-black">
                      傷官
                    </div>
                    <div className="font-['GyeonggiBatang'] font-bold text-[9.77918px] leading-[10px] text-center text-black">
                      (상관)
                    </div>
                  </div>

                  {/* 3행: 천간 */}
                  {/* 天干 라벨 */}
                  <div className="col-span-1 flex flex-col items-center justify-center border-r-2 border-black border-b-[1.05px] border-black bg-[#F5F3EC] py-2">
                    <div className="text-[11.9985px] leading-[17px] font-normal text-black">
                      天干
                    </div>
                    <div className="text-[7.82334px] leading-[8px] font-bold text-black">
                      (천간)
                    </div>
                  </div>

                  {/* 壬 (임) - 양수 */}
                  <div className="col-span-1 flex items-center justify-center border-b-[1.05px] border-black border-r border-[#8A8A8A] py-2">
                    <div className="w-[55.45px] h-[55.45px] bg-[#2F2F2F] rounded-[12.5537px] flex flex-col items-center justify-start py-0.5">
                      <div className="text-white text-[7px] leading-[7px] font-normal">
                        임
                      </div>
                      <div className="text-white text-[24px] leading-[30px] font-normal">
                        壬
                      </div>
                      <div className="text-white text-[8px] leading-[9px] font-normal">
                        陽水
                      </div>
                    </div>
                  </div>

                  {/* 丁 (정) - 음화 */}
                  <div className="col-span-1 flex items-center justify-center border-b-[1.05px] border-black border-r border-[#8A8A8A] py-2">
                    <div className="w-[55.45px] h-[55.45px] bg-[#C23030] rounded-[12.5537px] flex flex-col items-center justify-start py-0.5">
                      <div className="text-white text-[7px] leading-[7px] font-normal">
                        정
                      </div>
                      <div className="text-white text-[24px] leading-[30px] font-normal">
                        丁
                      </div>
                      <div className="text-white text-[8px] leading-[9px] font-normal">
                        陰火
                      </div>
                    </div>
                  </div>

                  {/* 癸 (계) - 음수 */}
                  <div className="col-span-1 flex items-center justify-center border-b-[1.05px] border-black border-r border-[#8A8A8A] py-2">
                    <div className="w-[55.45px] h-[55.45px] bg-[#2F2F2F] rounded-[12.5537px] flex flex-col items-center justify-start py-0.5">
                      <div className="text-white text-[7px] leading-[7px] font-normal">
                        계
                      </div>
                      <div className="text-white text-[24px] leading-[30px] font-normal">
                        癸
                      </div>
                      <div className="text-white text-[8px] leading-[9px] font-normal">
                        陰水
                      </div>
                    </div>
                  </div>

                  {/* 癸 (계) - 음수 */}
                  <div className="col-span-1 flex items-center justify-center border-b-[1.05px] border-black py-2">
                    <div className="w-[55.45px] h-[55.45px] bg-[#2F2F2F] rounded-[12.5537px] flex flex-col items-center justify-start py-0.5">
                      <div className="text-[#F9F9F9] text-[7px] leading-[7px] font-normal">
                        계
                      </div>
                      <div className="text-[#F9F9F9] text-[24px] leading-[30px] font-normal">
                        癸
                      </div>
                      <div className="text-[#F9F9F9] text-[8px] leading-[9px] font-normal">
                        陰水
                      </div>
                    </div>
                  </div>

                  {/* 4행: 지지 */}
                  {/* 地支 라벨 */}
                  <div className="col-span-1 flex flex-col items-center justify-center border-r-2 border-black border-b-[1.05px] border-black bg-[#F5F3EC] py-2">
                    <div className="text-[11.9985px] leading-[17px] font-normal text-black">
                      地支
                    </div>
                    <div className="text-[7.82334px] leading-[8px] font-bold text-black">
                      (지지)
                    </div>
                  </div>

                  {/* 寅 (인) - 양목 */}
                  <div className="col-span-1 flex items-center justify-center border-b-[1.05px] border-black border-r border-[#8A8A8A] py-2">
                    <div className="w-[55.45px] h-[55.45px] bg-[#18868C] rounded-[12.5537px] flex flex-col items-center justify-start py-0.5">
                      <div className="text-white text-[7px] leading-[7px] font-normal">
                        인
                      </div>
                      <div className="text-white text-[24px] leading-[30px] font-normal">
                        寅
                      </div>
                      <div className="text-white text-[8px] leading-[9px] font-normal">
                        陽木
                      </div>
                    </div>
                  </div>

                  {/* 巳 (사) - 음화 */}
                  <div className="col-span-1 flex items-center justify-center border-b-[1.05px] border-black border-r border-[#8A8A8A] py-2">
                    <div className="w-[55.45px] h-[55.45px] bg-[#C23030] rounded-[12.5537px] flex flex-col items-center justify-start py-0.5">
                      <div className="text-white text-[7px] leading-[7px] font-normal">
                        사
                      </div>
                      <div className="text-white text-[24px] leading-[30px] font-normal">
                        巳
                      </div>
                      <div className="text-white text-[8px] leading-[9px] font-normal">
                        陰火
                      </div>
                    </div>
                  </div>

                  {/* 亥 (해) - 음수 */}
                  <div className="col-span-1 flex items-center justify-center border-b-[1.05px] border-black border-r border-[#8A8A8A] py-2">
                    <div className="w-[55.45px] h-[55.45px] bg-[#2F2F2F] rounded-[12.5537px] flex flex-col items-center justify-start py-0.5">
                      <div className="text-white text-[7px] leading-[7px] font-normal">
                        해
                      </div>
                      <div className="text-white text-[24px] leading-[30px] font-normal">
                        亥
                      </div>
                      <div className="text-white text-[8px] leading-[9px] font-normal">
                        陰水
                      </div>
                    </div>
                  </div>

                  {/* 酉 (유) - 음금 */}
                  <div className="col-span-1 flex items-center justify-center border-b-[1.05px] border-black py-2">
                    <div className="w-[55.45px] h-[55.45px] bg-[#F9F9F9] border border-black rounded-[12.5537px] flex flex-col items-center justify-start py-0.5">
                      <div className="text-black text-[7px] leading-[7px] font-normal">
                        유
                      </div>
                      <div className="text-black text-[24px] leading-[30px] font-normal">
                        酉
                      </div>
                      <div className="text-black text-[8px] leading-[9px] font-normal">
                        陰金
                      </div>
                    </div>
                  </div>

                  {/* 5행: 두 번째 십성 (지지용) */}
                  {/* 十星 라벨 */}
                  <div className="col-span-1 flex flex-col items-center justify-center border-r-2 border-black border-b-[1.05px] border-black bg-[#F5F3EC] py-2">
                    <div className="text-[11.9985px] leading-[17px] font-normal text-black">
                      十星
                    </div>
                    <div className="text-[7.82334px] leading-[8px] font-bold text-black">
                      (십성)
                    </div>
                  </div>

                  {/* 比肩 (비견) */}
                  <div className="col-span-1 flex flex-col items-center justify-center border-b-[1.05px] border-black border-r border-[#8A8A8A] py-2">
                    <div className="font-['Zen_Antique'] font-normal text-[14.6688px] leading-[21px] text-center text-black">
                      比肩
                    </div>
                    <div className="font-['GyeonggiBatang'] font-bold text-[9.77918px] leading-[10px] text-center text-black">
                      (비견)
                    </div>
                  </div>

                  {/* 劫財 (겁재) */}
                  <div className="col-span-1 flex flex-col items-center justify-center border-b-[1.05px] border-black border-r border-[#8A8A8A] py-2">
                    <div className="font-['Zen_Antique'] font-normal text-[14.6688px] leading-[21px] text-center text-black">
                      劫財
                    </div>
                    <div className="font-['GyeonggiBatang'] font-bold text-[9.77918px] leading-[10px] text-center text-black">
                      (겁재)
                    </div>
                  </div>

                  {/* 食神 (식신) */}
                  <div className="col-span-1 flex flex-col items-center justify-center border-b-[1.05px] border-black border-r border-[#8A8A8A] py-2">
                    <div className="font-['Zen_Antique'] font-normal text-[14.6688px] leading-[21px] text-center text-black">
                      食神
                    </div>
                    <div className="font-['GyeonggiBatang'] font-bold text-[9.77918px] leading-[10px] text-center text-black">
                      (식신)
                    </div>
                  </div>

                  {/* 偏財 (편재) */}
                  <div className="col-span-1 flex flex-col items-center justify-center border-b-[1.05px] border-black py-2">
                    <div className="font-['Zen_Antique'] font-normal text-[14.6688px] leading-[21px] text-center text-black">
                      偏財
                    </div>
                    <div className="font-['GyeonggiBatang'] font-bold text-[9.77918px] leading-[10px] text-center text-black">
                      (편재)
                    </div>
                  </div>

                  {/* 6행: 십이운성 */}
                  {/* 十二運星 라벨 */}
                  <div className="col-span-1 flex flex-col items-center justify-center border-r-2 border-black border-b-[1.05px] border-black bg-[#F5F3EC] py-2">
                    <div className="text-[9.77918px] leading-[14px] font-normal text-black">
                      十二運星
                    </div>
                    <div className="text-[7.82334px] leading-[8px] font-bold text-black">
                      (십이운성)
                    </div>
                  </div>

                  {/* 死 (사) */}
                  <div className="col-span-1 flex flex-col items-center justify-center border-b-[1.05px] border-black border-r border-[#8A8A8A] py-2">
                    <div className="font-['Zen_Antique'] font-normal text-[14.6688px] leading-[21px] text-center text-black">
                      死
                    </div>
                    <div className="font-['GyeonggiBatang'] font-bold text-[9.77918px] leading-[10px] text-center text-black">
                      (사)
                    </div>
                  </div>

                  {/* 帝旺 (제왕) */}
                  <div className="col-span-1 flex flex-col items-center justify-center border-b-[1.05px] border-black border-r border-[#8A8A8A] py-2">
                    <div className="font-['Zen_Antique'] font-normal text-[14.6688px] leading-[21px] text-center text-black">
                      帝旺
                    </div>
                    <div className="font-['GyeonggiBatang'] font-bold text-[9.77918px] leading-[10px] text-center text-black">
                      (제왕)
                    </div>
                  </div>

                  {/* 胎 (태) */}
                  <div className="col-span-1 flex flex-col items-center justify-center border-b-[1.05px] border-black border-r border-[#8A8A8A] py-2">
                    <div className="font-['Zen_Antique'] font-normal text-[14.6688px] leading-[21px] text-center text-black">
                      胎
                    </div>
                    <div className="font-['GyeonggiBatang'] font-bold text-[9.77918px] leading-[10px] text-center text-black">
                      (태)
                    </div>
                  </div>

                  {/* 長生 (장생) */}
                  <div className="col-span-1 flex flex-col items-center justify-center border-b-[1.05px] border-black py-2">
                    <div className="font-['Zen_Antique'] font-normal text-[14.6688px] leading-[21px] text-center text-black">
                      長生
                    </div>
                    <div className="font-['GyeonggiBatang'] font-bold text-[9.77918px] leading-[10px] text-center text-black">
                      (장생)
                    </div>
                  </div>

                  {/* 7행: 십이신살 */}
                  {/* 十二神殺 라벨 */}
                  <div className="col-span-1 flex flex-col items-center justify-center border-r-2 border-black border-b-[1.05px] border-black bg-[#F5F3EC] py-2">
                    <div className="text-[9.77918px] leading-[14px] font-normal text-black">
                      十二神殺
                    </div>
                    <div className="text-[7.82334px] leading-[8px] font-bold text-black">
                      (십이신살)
                    </div>
                  </div>

                  {/* 劫殺 (겁살) */}
                  <div className="col-span-1 flex flex-col items-center justify-center border-b-[1.05px] border-black border-r border-[#8A8A8A] py-2">
                    <div className="font-['Zen_Antique'] font-normal text-[14.6688px] leading-[21px] text-center text-black">
                      劫殺
                    </div>
                    <div className="font-['GyeonggiBatang'] font-bold text-[9.77918px] leading-[10px] text-center text-black">
                      (겁살)
                    </div>
                  </div>

                  {/* 地殺 (지살) */}
                  <div className="col-span-1 flex flex-col items-center justify-center border-b-[1.05px] border-black border-r border-[#8A8A8A] py-2">
                    <div className="font-['Zen_Antique'] font-normal text-[14.6688px] leading-[21px] text-center text-black">
                      地殺
                    </div>
                    <div className="font-['GyeonggiBatang'] font-bold text-[9.77918px] leading-[10px] text-center text-black">
                      (지살)
                    </div>
                  </div>

                  {/* 驛馬殺 (역마살) */}
                  <div className="col-span-1 flex flex-col items-center justify-center border-b-[1.05px] border-black border-r border-[#8A8A8A] py-2">
                    <div className="font-['Zen_Antique'] font-normal text-[14.6688px] leading-[21px] text-center text-black">
                      驛馬殺
                    </div>
                    <div className="font-['GyeonggiBatang'] font-bold text-[9.77918px] leading-[10px] text-center text-black">
                      (역마살)
                    </div>
                  </div>

                  {/* 將星殺 (장성살) */}
                  <div className="col-span-1 flex flex-col items-center justify-center border-b-[1.05px] border-black py-2">
                    <div className="font-['Zen_Antique'] font-normal text-[14.6688px] leading-[21px] text-center text-black">
                      將星殺
                    </div>
                    <div className="font-['GyeonggiBatang'] font-bold text-[9.77918px] leading-[10px] text-center text-black">
                      (장성살)
                    </div>
                  </div>

                  {/* 8행: 귀인 */}
                  {/* 貴人 라벨 */}
                  <div className="col-span-1 flex flex-col items-center justify-center border-r-2 border-black bg-[#F5F3EC] py-3">
                    <div className="text-[11.9985px] leading-[17px] font-normal text-black">
                      貴人
                    </div>
                    <div className="text-[7.82334px] leading-[8px] font-bold text-black">
                      (귀인)
                    </div>
                  </div>

                  {/* (없음) */}
                  <div className="col-span-1 flex flex-col items-center justify-center border-r border-[#8A8A8A] py-3">
                    <div className="font-['GyeonggiBatang'] font-bold text-[9.77918px] leading-[10px] text-center text-black">
                      (없음)
                    </div>
                  </div>

                  {/* (없음) */}
                  <div className="col-span-1 flex flex-col items-center justify-center border-r border-[#8A8A8A] py-3">
                    <div className="font-['GyeonggiBatang'] font-bold text-[9.77918px] leading-[10px] text-center text-black">
                      (없음)
                    </div>
                  </div>

                  {/* 天乙 */}
                  <div className="col-span-1 flex flex-col items-center justify-center border-r border-[#8A8A8A] py-3">
                    <div className="font-['Zen_Antique'] font-normal text-[14.6688px] leading-[21px] text-center text-black">
                      天乙
                    </div>
                    <div className="font-['GyeonggiBatang'] font-bold text-[9.77918px] leading-[10px] text-center text-black">
                      (천을귀인)
                    </div>
                  </div>

                  {/* 天乙 太極 文昌 */}
                  <div className="col-span-1 flex flex-col items-center justify-center py-3">
                    <div className="font-['Zen_Antique'] font-normal text-[14.6688px] leading-[21px] text-center text-black">
                      <div>天乙</div>
                      <div className="font-['GyeonggiBatang'] font-bold text-[9.77918px] leading-[10px] text-center text-black">
                        (천을귀인)
                      </div>
                    </div>
                    <div className="font-['Zen_Antique'] font-normal text-[14.6688px] leading-[21px] text-center text-black">
                      <div>太極</div>
                      <div className="font-['GyeonggiBatang'] font-bold text-[9.77918px] leading-[10px] text-center text-center">
                        (태극귀인)
                      </div>
                    </div>
                    <div className="font-['Zen_Antique'] font-normal text-[14.6688px] leading-[21px] text-center text-black">
                      <div>文昌</div>
                      <div className="font-['GyeonggiBatang'] font-bold text-[9.77918px] leading-[10px] text-center text-black">
                        (문창귀인)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
