'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import WelcomeHeader from '@/app/components/WelcomeHeader';
import GreetingSummary from '@/app/components/GreetingSummary';
import UserForm from '@/app/components/UserForm';
import { getUserInfo, saveUserInfo, allowChat } from '@/app/lib/storage';

export default function Home() {
  const [savedName, setSavedName] = useState<string | null>(null);
  const [nameInput, setNameInput] = useState('');
  const [gender, setGender] = useState('male');
  const [language, setLanguage] = useState('English');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const { username, gender, language } = getUserInfo();

    if (username) {
      setSavedName(username);
      setNameInput(username);
    }

    setGender(gender);
    setLanguage(language);
    setLoading(false);
  }, []);

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim()) return;

    saveUserInfo({
      username: nameInput.trim(),
      gender,
      language,
    });
    setSavedName(nameInput.trim());
  };

  const handleStartChatting = () => {
    allowChat();
    router.push('/chat');
  };

  const handleChangeName = () => {
    setSavedName(null);
  };

  if (loading) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-100 p-6">
      <WelcomeHeader />
      {savedName ? (
        <GreetingSummary
          name={savedName}
          gender={gender}
          language={language}
          onStartChatting={handleStartChatting}
          onChangeName={handleChangeName}
        />
      ) : (
        <UserForm
          nameInput={nameInput}
          setNameInput={setNameInput}
          gender={gender}
          setGender={setGender}
          language={language}
          setLanguage={setLanguage}
          onSubmit={handleNameSubmit}
        />
      )}
    </div>
  );
}
