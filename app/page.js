import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import Blog from '@/components/Blog';
import FAQ from '@/components/FAQ';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Starfield from '@/components/ui/Starfield';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Starfield />
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
