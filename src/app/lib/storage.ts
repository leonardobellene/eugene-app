export function getUserInfo() {
  return {
    username: localStorage.getItem('username') || '',
    gender: localStorage.getItem('gender') || 'neutral',
    language: localStorage.getItem('language') || 'English',
  };
}

export function isAllowedToChat(): boolean {
  return sessionStorage.getItem('allowed') === 'true';
}

export function saveUserInfo({
  username,
  gender,
  language,
}: {
  username: string;
  gender: string;
  language: string;
}) {
  localStorage.setItem('username', username);
  localStorage.setItem('gender', gender);
  localStorage.setItem('language', language);
}

export function allowChat() {
  sessionStorage.setItem('allowed', 'true');
}
