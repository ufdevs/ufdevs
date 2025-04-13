import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Projects from '../components/home/Projects';
import PriceCalculator from '../components/pricing/PriceCalculator';
import ContactForm from '../components/contact/ContactForm';

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
