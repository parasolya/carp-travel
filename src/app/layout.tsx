import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './Header';

import { metaData } from '../data';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://carp-travel-omega-eight.vercel.app/'),
  title: metaData.title,
  description: metaData.description,
  icons: {
    icon: [
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon.png', sizes: '16x6', type: 'image/png' },
    ],
    shortcut: ['/favicon/favicon.svg'],
  },
  
  openGraph: {
    type: 'website',
    url: 'https://carp-travel-omega-eight.vercel.app/',
    title: metaData.title,
    description: metaData.description,
    siteName: metaData.title,
    images: '/ogp/ogp.webp',
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">   
      <body className={inter.className}>
        <Header />
        <main className="mx-auto border  w-full lg:max-w-7xl">{children}</main>
      </body>
    </html>
  );
}
