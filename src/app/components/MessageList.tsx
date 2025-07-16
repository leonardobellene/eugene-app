'use client';
import { useRef, useEffect } from 'react';

type Message = {
  role: 'user' | 'eugene';
  content: string;
};

interface MessageListProps {
  messages: Message[];
  isThinking: boolean;
  hasStartedStreaming: boolean;
}

export default function MessageList({
  messages,
  isThinking,
  hasStartedStreaming,
}: MessageListProps) {
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  // Scrolls into bottom while chatbot is writing
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto pt-[72px] pb-[104px] space-y-4 flex flex-col items-center">
      <div className="flex-1 flex flex-col justify-end space-y-4 w-full max-w-[1000px] ">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`mx-4 my-3 whitespace-pre-wrap break-words font-semibold ${
                msg.role === 'user'
                  ? 'bg-blue-500 text-white max-w-[70%] text-left rounded-3xl shadow-md px-4 py-3'
                  : 'text-[#003366] w-full text-left text-shadow-beige'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {isThinking && !hasStartedStreaming && (
          <div className="flex justify-start mx-4 my-3">
            <div className="flex items-center space-x-2 text-gray-400 animate-pulse">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        )}
        <div ref={endOfMessagesRef} />
      </div>
    </div>
  );
}
