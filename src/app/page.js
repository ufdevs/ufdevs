import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Projects from '../components/home/Projects';
import PriceCalculator from '../components/pricing/PriceCalculator';
import ContactForm from '../components/contact/ContactForm';

export const metadata = {
  title: 'Best Web & App Development Services in Mumbai | Custom Websites & Mobile Apps',
  description: 'Professional web development and mobile app development services in Mumbai by UFDev, led by IIT Patna alumnus Ramesh Vishwakarma. Custom websites, e-commerce solutions, Android/iOS apps & cross-platform applications.',
  keywords: 'web development, website design, mobile app development, iOS app development, Android app development, custom website, ecommerce website, React developers, Flutter app development, web application, responsive design, app developers Mumbai, website development company, hire web developers, app development services, ramesh vishwakarma, ramesh vishwakarma mumbai'
};

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <Projects />
      <PriceCalculator />
      <ContactForm />
    </Layout>
  );
}
