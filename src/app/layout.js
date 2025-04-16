import './globals.css';
import { Inter } from 'next/font/google';
import PageTransitionProvider from '../components/common/PageTransitionProvider';
import generateJsonLd from './jsonld';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Best Web & App Development Services | Expert Developers | UFDev',
  description: 'Professional Web Development, Mobile App & OTT Platform Development Services by IIT Patna graduate Ramesh Vishwakarma. Custom websites, React JS, Flutter app development in Mumbai. #1 ranked development agency for businesses of all sizes.',
  keywords: 'web development, web app development, mobile app development, app developer, website development, web designer, React developer, website designer, Node.js development, Flutter app development, Android app development, iOS app development, website development company, affordable web development, best app developers, ecommerce website development, web application development, MERN stack, responsive website design, frontend development, backend development, full stack developer, progressive web app, web development services, app development services, UI/UX design, SEO optimization, website redesign, custom web development, website builder, web development cost, website design services, OTT platform development, React Native developer, website development near me, app developers India, app development cost, website maintenance, website hosting, web API development, WordPress developer, shopify developer, wix developer, web development agency, mobile app agency',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ufdevs.com',
    site_name: 'UFDev Web & App Development',
    title: 'Expert Web & Mobile App Development Services | UFDev',
    description: 'Professional Web, Mobile App & OTT Development by IIT Patna graduate. Specializing in React, Node.js, Flutter. Best prices in Mumbai & India.',
    images: [
      {
        url: '/ufdev.llc.png',
        width: 800,
        height: 600,
        alt: 'UFDev Web & App Development Services by IIT Graduate',
      },
    ],
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
  category: 'Web Development, App Development, OTT Platform Development',
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
  // Generate the rich JSON-LD data
  const jsonLd = generateJsonLd();

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

        {/* Enhanced Schema.org JSON-LD for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd)
          }}
        />
      </head>
      <body className="antialiased">
        <PageTransitionProvider>
          {children}
        </PageTransitionProvider>
      </body>
    </html>
  );
}
