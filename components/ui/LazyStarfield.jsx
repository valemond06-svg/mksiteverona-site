'use client';

import dynamic from 'next/dynamic';

const Starfield = dynamic(() => import('./Starfield'), {
    ssr: false,
    loading: () => <div className="fixed inset-0 bg-slate-950 -z-10" />
});

export default function LazyStarfield(props) {
    return <Starfield {...props} />;
}
