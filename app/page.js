import dynamic from 'next/dynamic';

export const dynamic = 'force-static';
export const dynamicParams = true;
export const revalidate = 3600; // Revalidate every hour

import Hero from '@/components/Hero';
import ValueProp from '@/components/ValueProp';

// Lazy load below-the-fold components for better performance
const HomeServices = dynamic(() => import('@/components/HomeServices'));
const HomeProcess = dynamic(() => import('@/components/HomeProcess'));
const BlogPreview = dynamic(() => import('@/components/BlogPreview'));
const HomeCTA = dynamic(() => import('@/components/HomeCTA'));
const CaseStudies = dynamic(() => import('@/components/CaseStudies'));

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
