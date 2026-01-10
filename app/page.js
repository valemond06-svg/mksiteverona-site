import Hero from '@/components/Hero';
import ValueProp from '@/components/ValueProp';
import HomeServices from '@/components/HomeServices';
import HomeProcess from '@/components/HomeProcess';
import BlogPreview from '@/components/BlogPreview';
import HomeCTA from '@/components/HomeCTA';
import CaseStudies from '@/components/CaseStudies';

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProp />
      <HomeServices />
      <HomeProcess />
      <BlogPreview />
      <HomeCTA />
      {/* <CaseStudies /> */}
    </>
  );
}
