import './globals.css';
import { Inter } from 'next/font/google';
import PageTransitionProvider from '../components/common/PageTransitionProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'UFDev Agency',
  description: 'Your trusted partner for web and mobile app development',
  keywords: 'web development, app development, UI/UX design, digital services, software development, Mumbai, Ramesh Vishwakarma',
  icons: {
    icon: [
      {
        url: '/ufdev-favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon.ico',
        sizes: '64x64',
        type: 'image/x-icon',
      }
    ],
    shortcut: [
      { url: '/ufdev-favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180' },
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
        sizes: '180x180'
      },
      {
        rel: 'manifest',
        url: '/manifest.json'
      }
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/ufdev-favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="64x64" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-precomposed.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#10B981" />
      </head>
      <body className="antialiased">
        <PageTransitionProvider>
          {children}
        </PageTransitionProvider>
      </body>
    </html>
  );
}
