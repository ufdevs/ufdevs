import './globals.css';
import { Inter } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';
import { generateJsonLd } from './jsonld';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Full-Stack Web & App Development Agency | UFDev',
  description: 'Custom web, mobile & OTT platform development by UFDev, founded by IIT Patna alumnus. React, React Native & Node.js expertise for startups & enterprises.',
  keywords: ['web development', 'app development', 'react', 'react native', 'node.js', 'ott platform', 'full stack', 'software development', 'agency', 'iit patna'],
  openGraph: {
    title: 'UFDev - Web & App Development Agency',
    description: 'Custom software solutions by UFDev. Web apps, mobile apps & OTT platforms.',
    url: 'https://ufdevs.com',
    siteName: 'UFDev',
    images: [
      {
        url: 'https://ufdevs.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    cardType: 'summary_large_image',
    handle: '@ufdev',
    site: '@ufdev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://ufdevs.com',
    languages: {
      'en-US': 'https://ufdevs.com',
      'hi-IN': 'https://ufdevs.com/about/ramesh-vishwakarma-iit-patna/hinglish',
    },
  },
  verification: {
    google: 'googleverification',
    yandex: 'yandexverification',
  },
  authors: [
    { name: 'Ramesh Vishwakarma', url: 'https://linkedin.com/in/ramesh-vishwakarma-iitp' },
  ],
  creator: 'Ramesh Vishwakarma - IIT Patna Alumnus',
  publisher: 'UFDev LLC',
  category: 'Web Development, App Development, OTT Platform Development, React Development, Flutter App Development',
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

export default function RootLayout({ children, params }) {
  const jsonLd = generateJsonLd('https://ufdevs.com', '/', metadata.title, metadata.description);

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

        <Script id="json-ld" type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </Script>
      </head>
      <body className="antialiased">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
