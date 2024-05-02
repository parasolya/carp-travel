import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/layout/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Carp Travel',
  description:
    'Tour for everyone to the most beautiful parts of the Carpathians',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="mx-auto border  w-full lg:max-w-7xl">{children}</main>
      </body>
    </html>
  );
}
