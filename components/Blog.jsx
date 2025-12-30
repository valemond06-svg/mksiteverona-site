'use client';

import Link from 'next/link';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { MotionWrapper } from '@/components/ui/MotionWrapper';
import { BLOG_POSTS } from '@/lib/constants';

export default function Blog() {
  return (
    <section id="blog" className="relative py-32 px-6 bg-slate-900 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <MotionWrapper>
          <div className="text-center mb-24 space-y-4">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 font-bold text-[10px] uppercase tracking-[0.3em]">
              Intelligence Hub
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
              Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Strategie</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mt-6">
              Analisi approfondite sul futuro del web, SEO e strategie di business per leader digitali.
            </p>
          </div>
        </MotionWrapper>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {BLOG_POSTS.map((post, index) => (
            <MotionWrapper key={post.id} delay={index * 0.1}>
              <Link href={`/blog/${post.slug}`}>
                <SpotlightCard
                  className="group h-full flex flex-col border-slate-800/40 hover:border-cyan-500/40 transition-all duration-500 bg-slate-900/40 backdrop-blur-md cursor-pointer overflow-hidden p-0"
                >
                  <div className="relative w-full h-56 bg-slate-900 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 flex items-center justify-center text-7xl transition-transform duration-700 group-hover:scale-110">
                      {post.image}
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 text-cyan-400 text-[9px] font-bold rounded-full tracking-[0.2em] uppercase">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 font-mono text-[10px] text-white/20 tracking-widest uppercase">
                      Log // {post.index}
                    </div>
                    {/* Scanning scanline effect */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                      <div className="w-full h-1 bg-cyan-400 absolute top-0 left-0 animate-[scan_3s_linear_infinite]" />
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 mb-4 font-mono text-[10px] text-white/40 tracking-widest">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-700" />
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-500 leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-6 line-clamp-2 font-light leading-relaxed flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-slate-800/60 transition-all group-hover:border-cyan-500/20">
                      <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] group-hover:text-cyan-400 transition-colors">
                        Esplora Log
                      </span>
                      <span className="text-xl text-cyan-400 transition-transform group-hover:translate-x-2">
                        →
                      </span>
                    </div>
                  </div>

                  {/* Tech Corners */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500/0 group-hover:border-cyan-500/30 transition-all" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500/0 group-hover:border-cyan-500/30 transition-all" />
                </SpotlightCard>
              </Link>
            </MotionWrapper>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scan {
          from { top: -5%; }
          to { top: 105%; }
        }
      `}</style>
    </section>
  );
}
