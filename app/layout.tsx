import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Toaster } from 'sonner';

import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Стоматология им. Белова — авторская клиника в Москве',
  description:
    'Камерная стоматология доктора Белова. Имплантация Straumann, виниры E.max, ортодонтия Invisalign. Один врач ведёт от консультации до результата. С 2008 года.',
  openGraph: {
    title: 'Стоматология им. Белова',
    description: 'Авторская стоматология в Москве. Имплантация, эстетика, ортодонтия.',
    url: 'https://belov-dental.ru',
    siteName: 'Стоматология им. Белова',
    locale: 'ru_RU',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
