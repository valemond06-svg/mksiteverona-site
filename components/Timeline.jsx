'use client';

import { motion } from 'framer-motion';
import { MotionWrapper } from '@/components/ui/MotionWrapper';

const STEPS = [
    {
        number: '01',
        title: 'Discovery & Strategia',
        description: 'Analizziamo il tuo mercato, i competitor e definiamo gli obiettivi reali di conversione.',
        icon: '🔍',
        details: ['Analisi Target', 'Ricerca Keyword', 'Definizione Goal']
    },
    {
        number: '02',
        title: 'Design & UX Flow',
        description: 'Creiamo un prototipo focalizzato sull\'esperienza utente e sulla facilità di acquisto/contatto.',
        icon: '🎨',
        details: ['Wireframing', 'Interfaccia Premium', 'Prototipe interattivo']
    },
    {
        number: '03',
        title: 'Sviluppo Ingegneristico',
        description: 'Traduciamo il design in codice pulito, velocissimo e ottimizzato per ogni dispositivo.',
        icon: '⚙️',
        details: ['Codice Next.js', 'Ottimizzazione Core Web Vitals', 'Security Patching']
    },
    {
        number: '04',
        title: 'Lancio & Ottimizzazione',
        description: 'Mettiamo online il sito e monitoriamo i primi risultati per affinare le performance.',
        icon: '🚀',
        details: ['Deploy su Vercel', 'Analisi conversioni', 'Supporto continuo']
    }
];

export default function Timeline() {
    return (
        <section id="processo" className="py-32 px-6 bg-slate-950/50 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <MotionWrapper className="text-center mb-24">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 font-bold text-[10px] uppercase tracking-[0.3em]">
                        Working Method
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                        Processo <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">Operativo</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light mt-6">
                        Dall'idea al successo: ecco come trasformiamo la tua visione in una macchina di vendita digitale.
                    </p>
                </MotionWrapper>

                <div className="relative">
                    {/* Vertical Line for desktop */}
                    <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent hidden lg:block" />

                    <div className="space-y-24">
                        {STEPS.map((step, index) => (
                            <MotionWrapper
                                key={index}
                                delay={index * 0.1}
                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}
                            >
                                {/* Content */}
                                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 text-3xl mb-6 shadow-xl ${index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'}`}>
                                        {step.icon}
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-4">
                                        <span className="text-cyan-500 font-mono text-xl mr-4">{step.number}.</span>
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 text-lg font-light leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                                        {step.description}
                                    </p>
                                    <div className={`flex flex-wrap gap-3 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                                        {step.details.map((detail, i) => (
                                            <span key={i} className="px-3 py-1 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-[10px] text-cyan-400/80 font-bold uppercase tracking-wider">
                                                {detail}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Center Circle */}
                                <div className="relative z-20 hidden lg:block">
                                    <motion.div
                                        whileInView={{ scale: [0, 1.2, 1] }}
                                        viewport={{ once: true }}
                                        className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] ring-4 ring-slate-950"
                                    />
                                </div>

                                {/* Empty Space for alignment */}
                                <div className="hidden lg:block w-1/2" />
                            </MotionWrapper>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
