import ChatBubble from '@/components/ChatBubble'
import SajuChart from '@/components/SajuChart'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* 헤더 */}
        <div className="bg-blue-600 text-white p-4 text-center">
          <h1 className="text-xl font-bold">로켓AI 채팅</h1>
        </div>
        
        {/* 채팅 영역 */}
        <div className="p-4 space-y-4">
          <ChatBubble 
            message="안녕하세요! 로켓AI입니다. 무엇을 도와드릴까요?"
            isUser={false}
          />
          <ChatBubble 
            message="사주팔자에 대해 궁금한 점이 있어요. 자세히 설명해주세요."
            isUser={true}
          />
          <ChatBubble 
            message="사주팔자는 태어난 년, 월, 일, 시를 기준으로 운명을 분석하는 동양철학입니다. 각각의 시간대는 천간(天干)과 지지(地支)로 표현되며, 이를 통해 개인의 성격과 운명을 파악할 수 있습니다."
            isUser={false}
          />
          <ChatBubble 
            message="그렇다면 제 사주팔자를 분석해볼 수 있나요?"
            isUser={true}
          />
          <ChatBubble 
            message="네, 물론입니다! 아래에 사주팔자 차트를 보여드리겠습니다. 각 기둥은 년주, 월주, 일주, 시주를 나타내며, 천간과 지지의 조합으로 운명을 해석합니다."
            isUser={false}
          />
        </div>
        
        {/* 사주팔자 차트 */}
        <div className="p-4 bg-gray-50">
          <h2 className="text-lg font-semibold text-center mb-4 text-gray-800">사주팔자 차트</h2>
          <SajuChart />
        </div>
      </div>
    </main>
  )
}
