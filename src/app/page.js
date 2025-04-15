import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Projects from '../components/home/Projects';
import PriceCalculator from '../components/pricing/PriceCalculator';
import ContactForm from '../components/contact/ContactForm';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Best Web & App Development Services | Custom Websites & Mobile Apps</title>
        <meta name="description" content="Professional web development and mobile app development services by UFDev. Custom websites, e-commerce, Android/iOS apps & more. Expert developers led by IIT Patna alumnus." />
        <meta name="keywords" content="web development, website design, mobile app development, iOS app development, Android app development, custom website, ecommerce website, React developers, Flutter app development, web application, responsive design, app developers Mumbai, website development company, hire web developers" />
      </Head>

      <Layout>
        <Hero />
        <Services />
        <About />
        <Projects />
        <PriceCalculator />
        <ContactForm />
      </Layout>
    </>
  );
}
