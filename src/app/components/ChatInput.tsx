'use client';
import { useRef, useEffect } from 'react';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  isThinking: boolean;
}

export default function ChatInput({ value, onChange, onSend, isThinking }: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const isMobile = typeof window !== 'undefined' && /Mobi|Android/i.test(navigator.userAgent);

    if (e.key === 'Enter' && !e.shiftKey && !isMobile) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-10 p-4 border-t border-gray-700 bg-[#003366]">
      <div className="relative flex items-end w-full max-w-[1000px] mx-auto">
        <textarea
          ref={textareaRef}
          rows={1}
          className="flex-1 h-[58px] max-h-[162px] overflow-y-scroll resize-none p-4 pr-20 rounded-2xl bg-gray-700 border font-semibold border-gray-600 focus:outline-none focus:border-blue-500 overflow-hidden leading-relaxed"
          placeholder="Ask Eugene something..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={onSend}
          disabled={isThinking}
          className={`absolute right-2 bottom-[9px] px-4 py-2 rounded-2xl font-semibold transition-colors ${
            isThinking
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-500 cursor-pointer'
          }`}
        >
          Send
        </button>
      </div>
    </footer>
  );
}
