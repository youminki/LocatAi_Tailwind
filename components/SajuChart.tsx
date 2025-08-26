interface SajuPillar {
  name: string
  cheongan: string
  jiji: string
  meaning: string
}

const sajuData: SajuPillar[] = [
  {
    name: '년주',
    cheongan: '甲',
    jiji: '子',
    meaning: '갑자년 - 쥐띠, 양력 1984년'
  },
  {
    name: '월주',
    cheongan: '乙',
    jiji: '丑',
    meaning: '을축월 - 소띠, 음력 1월'
  },
  {
    name: '일주',
    cheongan: '丙',
    jiji: '寅',
    meaning: '병인일 - 호랑이띠, 양력 15일'
  },
  {
    name: '시주',
    cheongan: '丁',
    jiji: '卯',
    meaning: '정묘시 - 토끼띠, 오전 6시'
  }
]

export default function SajuChart() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="grid grid-cols-4 gap-2">
        {sajuData.map((pillar, index) => (
          <div key={index} className="text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
              <div className="text-xs text-gray-600 mb-1">{pillar.name}</div>
              <div className="text-lg font-bold text-blue-600 mb-1">{pillar.cheongan}</div>
              <div className="text-lg font-bold text-green-600 mb-1">{pillar.jiji}</div>
              <div className="text-xs text-gray-500 leading-tight">{pillar.meaning}</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h3 className="text-sm font-semibold text-yellow-800 mb-2">사주 해석</h3>
        <p className="text-xs text-yellow-700 leading-relaxed">
          갑자년생으로 목(木)의 기운이 강하며, 을축월생으로 토(土)의 기운과 조화를 이룹니다. 
          병인일생으로 화(火)의 기운이 있어 활발하고 열정적인 성격을 가지고 있습니다. 
          정묘시생으로 목(木)의 기운이 더해져 창의적이고 지혜로운 면모를 보입니다.
        </p>
      </div>
    </div>
  )
}
