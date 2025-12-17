import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Blog from '@/components/Blog';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';  // ← AGGIUNGI QUESTA RIGA

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Contact />
      <Blog />
      <Footer />
      <BackToTop />  {/* ← AGGIUNGI QUI */}
    </>
  );
}
