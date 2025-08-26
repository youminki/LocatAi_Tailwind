import React from "react";

/**
 * 사주팔자표 메인 테이블 컴포넌트
 *
 * CSS Grid를 사용하여 5열 8행 구조의 사주팔자 테이블을 구현합니다.
 * 각 셀은 한자와 한글을 함께 표시하여 사용자의 이해를 돕습니다.
 *
 * 테이블 구조:
 * - 5열: 시(時), 일(日), 월(月), 년(年) + 라벨 열
 * - 8행: 십성, 천간, 지지, 십성2, 십이운성, 십이신살, 귀인
 */
export default function SajuTable() {
  return (
    <div className="p-5">
      {/* 메인 테이블 그리드 */}
      <div className="mx-auto bg-white bg-opacity-80 overflow-hidden border-r-2 border-b-2 border-black">
        {/* 
          테이블 구조 - 5열 8행 그리드 시스템
          
          CSS Grid를 사용하여 복잡한 사주팔자 테이블을 구현합니다.
          - grid-cols-5: 5개 열 (라벨 + 시 + 일 + 월 + 년)
          - auto-rows-auto: 행 높이 자동 조정
          - 각 셀은 정확한 위치에 배치되어 사주팔자의 구조를 명확히 표현
        */}
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
  );
}
