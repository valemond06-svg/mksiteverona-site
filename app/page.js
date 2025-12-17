'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ValueProp from '@/components/ValueProp';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ValueProp />
      <Services />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
