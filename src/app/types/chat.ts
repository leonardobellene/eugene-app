export type Message = {
  role: 'user' | 'eugene';
  content: string;
};

export type ChatAPIMessage = {
  role: 'assistant' | 'user';
  content: string;
};

export type UserInfo = {
  username?: string;
  gender?: string;
  language?: string;
};
