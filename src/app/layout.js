import './globals.css';
import { Inter } from 'next/font/google';
import PageTransitionProvider from '../components/common/PageTransitionProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'UFDev Agency | Web & Mobile App Development by Ramesh Vishwakarma',
  description: 'Premium web and mobile app development agency founded by IIT Patna alumnus Ramesh Vishwakarma. Experts in OTT platforms, e-commerce solutions, and custom software development.',
  keywords: 'web development, app development, UI/UX design, digital services, software development, Mumbai, Ramesh Vishwakarma, iMaxx TV, OTT platform, streaming service, AVOD, SVOD, TVOD, IIT Patna, IITP, OTT development, React developer, Node.js, Firebase, AWS, Flutter, mobile app developer, full stack developer, website development, mobile app banane wale, website banane wala, website developer in Mumbai, app developer in Maharashtra, OTT platform kaise banaye, streaming app developer, IIT Patna graduate, IITPian, रमेश विश्वकर्मा, वेबसाइट डेवलपर, ऐप डेवलपर, आईआईटी पटना, ओटीटी प्लेटफॉर्म, स्ट्रीमिंग सेवा, वेब डेवलपमेंट, मोबाइल ऐप, Mumbai tech startup, best app developer India, affordable website development, streaming platforms India',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://serv.ufdevs.me',
    site_name: 'UFDev Agency',
    title: 'UFDev Agency | Web & Mobile Development by IIT Patna alumnus',
    description: 'Founded by Ramesh Vishwakarma (IIT Patna), UFDev specializes in OTT platforms like iMaxx TV, e-commerce solutions, and custom app development.',
    images: [
      {
        url: '/ufdev.llc.png',
        width: 800,
        height: 600,
        alt: 'UFDev Agency',
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
    },
  },
  alternates: {
    canonical: 'https://serv.ufdevs.me',
  },
  authors: [
    { name: 'Ramesh Vishwakarma', url: 'https://linkedin.com/in/ramesh-vishwakarma-iitp' },
  ],
  creator: 'Ramesh Vishwakarma',
  publisher: 'UFDev LLC',
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

        {/* Schema.org JSON-LD for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "UFDev Agency",
              "url": "https://serv.ufdevs.me",
              "logo": "https://serv.ufdevs.me/ufdev.llc.png",
              "foundingDate": "2023",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Ramesh Vishwakarma",
                  "alumniOf": "Indian Institute of Technology Patna",
                  "jobTitle": "Founder & Full Stack Developer"
                }
              ],
              "description": "Premium web and mobile app development agency founded by IIT Patna alumnus Ramesh Vishwakarma.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Vasai West",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "postalCode": "402108",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+917510060787",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://linkedin.com/company/ufdev",
                "https://github.com/ufdevs"
              ]
            })
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
