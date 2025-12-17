import Hero from '@/components/Hero';
import Services from '@/components/Services';
// import Portfolio from '@/components/Portfolio';  // ← Commenta questa riga
import Contact from '@/components/Contact';
import Blog from '@/components/Blog';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      {/* <Portfolio /> */}  {/* ← Portfolio disabilitato per ora */}
      <Contact />
      <Blog />
      <Footer />
    </>
  );
}
