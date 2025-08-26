interface ChatBubbleProps {
  message: string
  isUser: boolean
}

export default function ChatBubble({ message, isUser }: ChatBubbleProps) {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
          isUser
            ? 'bg-blue-500 text-white rounded-br-none'
            : 'bg-gray-200 text-gray-800 rounded-bl-none'
        }`}
      >
        <p className="text-sm leading-relaxed break-words">{message}</p>
      </div>
    </div>
  )
}
