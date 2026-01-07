'use client';

import { motion } from 'framer-motion';
import { MotionWrapper } from '@/components/ui/MotionWrapper';
import Image from 'next/image';

const PROJECTS = [
    {
        title: 'Trattoria Veronese',
        category: 'Ristorazione / Tradizione',
        description: 'Sito web accogliente che mette in risalto il menu e facilita le prenotazioni del pranzo e della cena.',
        image: '/projects/trattoria.png',
        color: 'from-orange-200/20 to-red-300/20',
        tags: ['Menu Online', 'Prenotazioni', 'Local SEO']
    },
    {
        title: 'Cocktail Bar & Lounge',
        category: 'Nightlife / Eventi',
        description: 'Vetrina digitale moderna per mostrare l\'atmosfera del locale e i drink d\'autore.',
        image: '/projects/bar.png',
        color: 'from-purple-400/20 to-blue-500/20',
        tags: ['Gallery Foto', 'Eventi', 'Mobile First']
    },
    {
        title: 'Bottega d\'Arte',
        category: 'Artigianato / Retail',
        description: 'Piccolo e-commerce per vendere prodotti artigianali locali in tutta Italia.',
        image: '/projects/negozio.png',
        color: 'from-amber-400/20 to-zinc-800/20',
        tags: ['Shop Online', 'Pagamenti Sicuri', 'Vetrina']
    }
];

export default function CaseStudies() {
    return (
        <section id="progetti" className="py-32 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <MotionWrapper className="text-center mb-24">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-bold text-[10px] uppercase tracking-[0.3em]">
                        Esempi Reali
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                        I Nostri <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Lavori</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light mt-6">
                        Scopri come abbiamo aiutato altre attività locali a farsi conoscere e a crescere online.
                    </p>
                </MotionWrapper>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <MotionWrapper key={index} delay={index * 0.1}>
                            <div className="group relative bg-slate-900/40 border border-slate-800/50 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-500">
                                {/* Image Container */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`} />
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />

                                    {/* Floating Tags */}
                                    <div className="absolute bottom-4 left-4 flex gap-2 z-20 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="px-2 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded text-[10px] text-white/80">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-2">
                                        {project.category}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileHover={{ width: '100%' }}
                                        className="h-px bg-gradient-to-r from-cyan-500 to-blue-500 opacity-50"
                                    />
                                </div>
                            </div>
                        </MotionWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
