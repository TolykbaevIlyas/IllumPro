import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

import Header from '@/widgets/Header';

// Подключаем Montserrat
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'], // можно выбрать нужные веса
});

export const metadata: Metadata = {
  title: 'Illum Pro',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
