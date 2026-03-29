import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Projects from '../components/home/Projects';
import PriceCalculator from '../components/pricing/PriceCalculator';
import ContactForm from '../components/contact/ContactForm';

export const metadata = {
  title: 'Top Software Development Company in Mumbai | US & India Tech Partner',
  description: 'UFDevs is a leading software development company in Mumbai, providing custom software solutions, mobile apps, and OTT platforms for US and India startups. Led by Ramesh Vishwakarma, IIT Patna alumnus.',
  keywords: 'software development company, software development Mumbai, custom software development, hire software developers, software solutions India, web development, app development, Ramesh Vishwakarma UFDevs, US startup tech partner, software engineering agency'
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What software development services does UFDevs provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "UFDevs provides comprehensive software development services including custom web applications, mobile apps (Android/iOS), OTT platforms, and AI-driven software solutions for startups in the US and India."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose Ramesh Vishwakarma and UFDevs for your project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Led by Ramesh Vishwakarma, an IIT Patna alumnus, UFDevs combines technical excellence with affordable pricing, delivering premium software solutions that scale globally."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide software development for US startups?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, UFDevs is a trusted tech partner for US-based startups, offering specialized services like Bamon's Kitchen and Second Innings App development."
        }
      }
    ]
  };

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <Services />
      <About />
      <Projects />
      <PriceCalculator />
      <ContactForm />
    </Layout>
  );
}
