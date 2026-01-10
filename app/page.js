import nextDynamic from 'next/dynamic';

export const dynamic = 'force-static';
export const dynamicParams = true;
export const revalidate = 3600; // Revalidate every hour

import Hero from '@/components/Hero';
import ValueProp from '@/components/ValueProp';

// Lazy load below-the-fold components for better performance
const HomeServices = nextDynamic(() => import('@/components/HomeServices'));
const HomeProcess = nextDynamic(() => import('@/components/HomeProcess'));
const BlogPreview = nextDynamic(() => import('@/components/BlogPreview'));
const HomeCTA = nextDynamic(() => import('@/components/HomeCTA'));
const CaseStudies = nextDynamic(() => import('@/components/CaseStudies'));

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
