'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/constants';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion } from 'framer-motion';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Starfield from '@/components/ui/Starfield';

export default function BlogArticle() {
    const params = useParams();
    const router = useRouter();
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);

    // Filter out the current post to show related ones
    const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== params.slug).slice(0, 2);

    if (!post) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Articolo non trovato</h1>
                    <button
                        onClick={() => router.push('/#blog')}
                        className="text-cyan-400 hover:underline"
                    >
                        Torna al blog
                    </button>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-slate-950 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
            <Starfield />
            <Navbar />

            <article className="relative pt-32 pb-24 px-6 z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Enhanced Back Link */}
                    <motion.button
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => router.push('/#blog')}
                        className="flex items-center gap-4 text-cyan-400 bg-cyan-500/5 border border-cyan-500/20 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-[0.3em] mb-16 group hover:bg-cyan-500/10 hover:border-cyan-500/40 transition-all shadow-[0_0_20px_rgba(34,211,238,0.05)]"
                    >
                        <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
                        Torna all&apos;Hub Intelligence
                    </motion.button>

                    {/* Article Header */}
                    <section className="mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold rounded-full tracking-[0.2em] uppercase mb-6 inline-block">
                                {post.category}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8 tracking-tight">
                                {post.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-8 py-8 border-y border-white/5 font-mono text-[10px] text-white/40 tracking-widest uppercase">
                                <div className="flex flex-col gap-2">
                                    <span className="text-cyan-500/40">Timestamp</span>
                                    <span className="text-white/80">{post.date}</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-cyan-500/40">Duration</span>
                                    <span className="text-white/80">{post.readTime}</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-cyan-500/40">Status</span>
                                    <span className="text-green-400/80 underline decoration-green-400/20 underline-offset-4">Verified</span>
                                </div>
                                <div className="flex flex-col gap-2 ml-auto hidden md:flex">
                                    <span className="text-cyan-500/40">Log Code</span>
                                    <span className="text-white/80">MKS-ST{post.index}</span>
                                </div>
                            </div>
                        </motion.div>
                    </section>

                    {/* Hero Image / Icon */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative h-64 md:h-96 w-full rounded-3xl bg-slate-900 overflow-hidden mb-20 border border-white/5 shadow-2xl group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 flex items-center justify-center text-[12rem] opacity-50 transition-transform duration-700 group-hover:scale-110">
                            {post.image}
                        </div>
                        {/* HUD Elements */}
                        <div className="absolute top-6 left-8 flex gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                            <div className="w-8 h-[2px] bg-cyan-500/20 mt-[3px]" />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="prose prose-invert max-w-none"
                    >
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                h1: ({ ...props }) => (
                                    <h1 className="text-4xl font-bold text-white pt-8 pb-4 mb-6 tracking-tight border-b border-white/5" {...props} />
                                ),
                                h2: ({ ...props }) => (
                                    <h2 className="text-2xl font-bold text-white pt-12 pb-4 mb-6 tracking-tight flex items-center gap-4 before:content-['//'] before:text-cyan-500/40" {...props} />
                                ),
                                h3: ({ ...props }) => (
                                    <h3 className="text-xl font-bold text-cyan-400 pt-8 pb-3 mb-4 tracking-wide" {...props} />
                                ),
                                p: ({ ...props }) => (
                                    <p className="text-gray-300 leading-relaxed text-lg font-light mb-8 lg:w-4/5" {...props} />
                                ),
                                ul: ({ ...props }) => (
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12 list-none p-0" {...props} />
                                ),
                                li: ({ ...props }) => (
                                    <li className="flex items-center gap-4 text-gray-300 bg-white/[0.02] p-6 rounded-2xl border border-white/5 hover:border-cyan-500/20 transition-all shadow-sm group" {...props}>
                                        <span className="w-2 h-2 rounded-full bg-cyan-500/30 group-hover:bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-all" />
                                        <span className="text-base font-medium leading-normal">{props.children}</span>
                                    </li>
                                ),
                                strong: ({ ...props }) => (
                                    <strong className="font-bold text-cyan-400" {...props} />
                                ),
                                blockquote: ({ ...props }) => (
                                    <blockquote className="border-l-2 border-cyan-500/50 pl-8 my-12 italic text-gray-400 text-xl font-light" {...props} />
                                ),
                            }}
                        >
                            {post.content}
                        </ReactMarkdown>
                    </motion.div>

                    {/* Related Intel Section */}
                    <section className="mt-32 pt-24 border-t border-white/5">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                            <div>
                                <p className="text-cyan-500/60 font-mono text-[10px] tracking-[0.4em] uppercase mb-4">
                                    Linked Intelligence
                                </p>
                                <h3 className="text-3xl font-bold text-white tracking-tight">
                                    Altri Articoli Correlati
                                </h3>
                            </div>
                            <Link
                                href="/#blog"
                                className="text-white/40 hover:text-cyan-400 text-[10px] font-bold uppercase tracking-[0.3em] transition-colors"
                            >
                                Vedi Tutto Hub →
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {relatedPosts.map((related) => (
                                <Link key={related.id} href={`/blog/${related.slug}`}>
                                    <SpotlightCard className="p-8 h-full border-white/5 bg-white/[0.01] hover:border-cyan-500/30 transition-all group">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-10 h-10 rounded-lg bg-slate-800 border border-white/5 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                                                {related.image}
                                            </div>
                                            <span className="px-2 py-0.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[8px] font-bold rounded-full tracking-widest uppercase">
                                                {related.category}
                                            </span>
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors line-clamp-2">
                                            {related.title}
                                        </h4>
                                        <div className="mt-auto pt-6 flex items-center justify-between font-mono text-[9px] text-white/20 uppercase tracking-widest">
                                            <span>{related.date}</span>
                                            <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">→</span>
                                        </div>
                                    </SpotlightCard>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* Footer CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-32 p-12 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-white/5 relative overflow-hidden group shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -mr-32 -mt-32 transition-all group-hover:bg-cyan-500/20" />

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                            <div className="max-w-md text-center md:text-left">
                                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">Implementa queste strategie ora</h4>
                                <p className="text-gray-400 text-base font-light leading-relaxed">Trasformiamo le intuizioni tecniche in risultati di business concreti per la tua attività.</p>
                            </div>
                            <button
                                onClick={() => router.push('/#contatti')}
                                className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-[10px] uppercase tracking-[0.4em] rounded-xl hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
                            >
                                Inizia Missione
                            </button>
                        </div>
                    </motion.div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
