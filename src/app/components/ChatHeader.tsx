'use client';
import { useRouter } from 'next/navigation';

export default function ChatHeader() {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 z-10 p-5  text-center font-bold text-2xl border-b border-gray-700 shadow-md bg-[#003366]">
      <button onClick={() => router.replace('/')} className="cursor-pointer">
        {/* Show only the book icon on mobile */}
        <span className="block sm:hidden">🕊️</span>
        {/* Show icon + text on small screens and up */}
        <span className="hidden sm:inline">🕊️ Eugene&apos;s Wisdom 🕊️</span>
      </button>
    </header>
  );
}
