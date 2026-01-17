import nextDynamic from 'next/dynamic';

export const dynamic = 'force-static';
export const dynamicParams = true;
export const revalidate = 3600; // Revalidate every hour

import Hero from '@/components/Hero';
import ValueProp from '@/components/ValueProp';

// Lazy load below-the-fold components with skeletons to prevent CLS
const HomeServices = nextDynamic(() => import('@/components/HomeServices'), {
  loading: () => <div className="h-[800px] w-full bg-slate-950/50" />
});
const HomeProcess = nextDynamic(() => import('@/components/HomeProcess'), {
  loading: () => <div className="h-[600px] w-full bg-slate-950/50" />
});
const BlogPreview = nextDynamic(() => import('@/components/BlogPreview'), {
  loading: () => <div className="h-[600px] w-full bg-slate-950/50" />
});
const HomeCTA = nextDynamic(() => import('@/components/HomeCTA'), {
  loading: () => <div className="h-[400px] w-full bg-slate-950/50" />
});

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
