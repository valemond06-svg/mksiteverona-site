'use client';

import dynamic from 'next/dynamic';

const CookieBanner = dynamic(() => import('@/components/CookieBanner'), { ssr: false });
const BackToTop = dynamic(() => import('@/components/BackToTop'), { ssr: false });

export default function ClientLayoutElements() {
    return (
        <>
            <CookieBanner />
            <BackToTop />
        </>
    );
}
