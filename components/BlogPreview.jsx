'use client';

import Link from 'next/link';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { MotionWrapper } from '@/components/ui/MotionWrapper';
import { BLOG_POSTS } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';

export default function BlogPreview() {
    // Show only the last 3 articles
    const recentPosts = BLOG_POSTS.slice(0, 3);

    return (
        <section className="py-24 px-6 bg-slate-950 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <MotionWrapper className="max-w-2xl">
                        <p className="text-cyan-400 font-bold text-sm uppercase tracking-widest mb-4">Intelligence Hub</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            Ultime dal <br />
                            <span className="text-gray-500 font-light">nostro Blog.</span>
                        </h2>
                    </MotionWrapper>
                    <MotionWrapper delay={0.2}>
                        <Link
                            href="/blog"
                            className="group flex items-center gap-2 text-white hover:text-cyan-400 transition-colors font-semibold"
                        >
                            Leggi tutti gli articoli <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </MotionWrapper>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {recentPosts.map((post, index) => (
                        <MotionWrapper key={post.id} delay={index * 0.1}>
                            <Link href={`/blog/${post.slug}`}>
                                <SpotlightCard
                                    className="group h-full flex flex-col border-slate-800/40 hover:border-cyan-500/40 transition-all duration-500 bg-slate-900/40 backdrop-blur-md cursor-pointer overflow-hidden p-0"
                                >
                                    <div className="relative w-full h-48 bg-slate-900 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 flex items-center justify-center text-5xl transition-transform duration-700 group-hover:scale-110">
                                            {post.image}
                                        </div>
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-center gap-4 mb-4 font-mono text-[9px] text-white/40 tracking-widest uppercase">
                                            <span>{post.category}</span>
                                            <span className="w-1 h-1 rounded-full bg-slate-700" />
                                            <span>{post.readTime}</span>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-500 leading-tight">
                                            {post.title}
                                        </h3>

                                        <p className="text-gray-400 text-xs mb-6 line-clamp-2 font-light leading-relaxed flex-1">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between pt-4 border-t border-slate-800/60">
                                            <span className="text-[9px] font-bold text-white/40 uppercase tracking-[0.2em] group-hover:text-cyan-400 transition-colors">
                                                Leggi di più
                                            </span>
                                            <span className="text-cyan-400 transition-transform group-hover:translate-x-1">
                                                →
                                            </span>
                                        </div>
                                    </div>
                                </SpotlightCard>
                            </Link>
                        </MotionWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
