import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';

const notosans = Noto_Sans_KR({ subsets: ['latin'] });
export const viewport = {
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: '오밥무?',
  description: '금오공대 학식단표',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: '오밥무?',
  },
  manifest: '/manifest.webmanifest',
  icons: [{ rel: 'icon', url: '/assets/icon-192x192.png', sizes: '192x192' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={notosans.className}>{children}</body>
    </html>
  );
}
