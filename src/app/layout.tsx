import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import avatar from '@/assets/avatar.png';

const quicksand = Quicksand({
  variable: '--font-quicksand',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Eugene App',
  description: 'Light for the Path',
    icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} antialiased`}>
        <div className="relative z-10">{children}</div>
        <div className="absolute inset-0 bg-[#f5f5dc] flex items-center justify-center z-0">
          <Image
            src={avatar}
            alt="Avatar"
            width={200}
            height={200}
            className="rounded-full object-cover opacity-60"
          />
        </div>
      </body>
    </html>
  );
}
