import { Noto_Sans_Hebrew } from 'next/font/google';
import I18nProvider from '@/i18n/I18nProvider';
import './globals.css';

const notoSansHebrew = Noto_Sans_Hebrew({
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata = {
  metadataBase: new URL('https://www.paulandgreg.com'),
  icons: {
    icon: [
      { url: '/Favicon.svg', type: 'image/svg+xml' },
      { url: '/logo.png', type: 'image/png' },
    ],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#5A6337',
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="he" className={notoSansHebrew.variable} suppressHydrationWarning>
      <body className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-sans min-h-screen flex flex-col">
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
