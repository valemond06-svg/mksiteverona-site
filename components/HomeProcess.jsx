'use client';

import { Search, Lightbulb, Code2, Rocket } from 'lucide-react';
import { MotionWrapper } from '@/components/ui/MotionWrapper';

const STEPS = [
    {
        icon: Search,
        title: 'Analisi & Scoperta',
        desc: 'Capiamo i tuoi obiettivi, il tuo mercato e i tuoi competitor per definire la rotta.',
    },
    {
        icon: Lightbulb,
        title: 'Strategia & Design',
        desc: 'Progettiamo l’architettura e l’interfaccia focalizzandoci sull’esperienza utente.',
    },
    {
        icon: Code2,
        title: 'Sviluppo & Test',
        desc: 'Costruiamo il sito con tecnologie moderne, garantendo velocità e sicurezza.',
    },
    {
        icon: Rocket,
        title: 'Lancio & Crescita',
        desc: 'Andiamo online e monitoriamo i risultati per ottimizzare costantemente le performance.',
    },
];

export default function HomeProcess() {
    return (
        <section className="py-24 px-6 bg-slate-900/50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <MotionWrapper>
                        <p className="text-cyan-400 font-bold text-sm uppercase tracking-widest mb-4">Il Nostro Metodo</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">Come Lavoriamo</h2>
                    </MotionWrapper>
                </div>

                <div className="relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-y-1/2 pointer-events-none" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        {STEPS.map((step, i) => (
                            <MotionWrapper key={i} delay={i * 0.15}>
                                <div className="relative flex flex-col items-center text-center group">
                                    {/* Circle with Icon */}
                                    <div className="w-20 h-20 bg-slate-800 border-2 border-slate-700 rounded-full flex items-center justify-center text-cyan-400 mb-8 relative z-10 group-hover:border-cyan-400 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-300">
                                        <step.icon size={32} />
                                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center text-xs font-black text-gray-500">
                                            0{i + 1}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed max-w-[250px]">
                                        {step.desc}
                                    </p>
                                </div>
                            </MotionWrapper>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
