import { getUserInfo } from '@/app/lib/storage';
import { Message, ChatAPIMessage } from '@/app/types/chat';

export const prepareMessagesForAPI = (messages: Message[]): ChatAPIMessage[] => {
  // Remove welcome message and format for OpenAI API
  const filteredMessages = messages.filter((msg, idx) => {
    return !(idx === 0 && msg.role === 'eugene');
  });

  const formattedMessages: ChatAPIMessage[] = filteredMessages.map((msg) => ({
    role: msg.role === 'eugene' ? 'assistant' : 'user',
    content: msg.content,
  }));

  // Limit to last 14 messages
  return formattedMessages.slice(-14);
};

export const sendChatMessage = async (
  userMessage: string,
  messages: Message[]
): Promise<Response> => {
  const { username = 'Seeker', gender, language } = getUserInfo();

  // Prepare messages for API
  const allMessages = [...messages, { role: 'user' as const, content: userMessage }];
  const lastMessages = prepareMessagesForAPI(allMessages);

  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      gender,
      language,
      messages: lastMessages,
    }),
  });

  if (!response.body) {
    throw new Error('No response body');
  }

  return response;
};
