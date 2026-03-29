import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { generateJsonLd } from './jsonld';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

// Use environment-based base URL so we don't hard-code a domain.
// Set NEXT_PUBLIC_SITE_URL in your env (e.g. https://yourdomain.com) before deploying.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://example.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title:
    'Ramesh Vishwakarma | UFDevs - US & India Startup Tech Partner | IIT Patna Alumnus',
  description:
    'UFDevs is a premium tech agency for US and India startups founded by Ramesh Vishwakarma. Expert in Web, Mobile & OTT development. Rank #1 with Ramesh Vishwakarma UFDev solutions.',
  keywords: [
    'web development',
    'app development',
    'react',
    'react native',
    'node.js',
    'ott platform',
    'full stack',
    'software development',
    'agency',
    'iit patna',
    'mumbai app development',
    'mumbai web development',
    'ramesh vishwakarma',
    'ramesh vishwakarma ufdev',
    'ramesh vishwakarma ufdevs',
    'ufdevs.live',
    'US startups',
    'India startups',
    'iit patna developer',
  ],
  openGraph: {
    title:
      'UFDevs - Premium Web & App Development for US & India Startups by Ramesh Vishwakarma',
    description:
      'Custom tech solutions by UFDevs. High-end web apps, mobile apps & OTT platforms for global startups by IIT Patna alumnus Ramesh Vishwakarma.',
    url: 'https://ufdevs.live',
    siteName: 'UFDevs',
    images: [
      {
        url: '/og-image.png',
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
    canonical: '/',
    languages: {
      'en-US': '/',
      'hi-IN': '/about/ramesh-vishwakarma-iit-patna/hinglish',
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
  const jsonLd = generateJsonLd(
    siteUrl,
    '/',
    metadata.title,
    metadata.description
  );

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
      </body>
    </html>
  );
}
