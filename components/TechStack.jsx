'use client';

import { MotionWrapper } from '@/components/ui/MotionWrapper';

const TECHS = [
    { name: 'Velocità Ultra', icon: '🚀', color: 'from-orange-500/20 to-red-500/20' },
    { name: 'Sicurezza Totale', icon: '🛡️', color: 'from-blue-600 to-cyan-400' },
    { name: 'Ottimizzato Google', icon: '🔍', color: 'from-green-500 to-emerald-500' },
    { name: 'Sempre Online', icon: '☁️', color: 'from-purple-500 to-pink-500' },
    { name: 'Facile da Usare', icon: '📱', color: 'from-amber-500 to-orange-400' },
    { name: 'Supporto Locale', icon: '📍', color: 'from-slate-800 to-black' },
];

export default function TechStack() {
    return (
        <section className="py-24 px-6 relative overflow-hidden bg-slate-950/20">
            <div className="max-w-6xl mx-auto">
                <MotionWrapper className="text-center mb-16">
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] mb-4">Perché Sceglierci</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Tecnologia al Servizio della tua Attività</h2>
                </MotionWrapper>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {TECHS.map((tech, i) => (
                        <MotionWrapper key={i} delay={i * 0.05}>
                            <div className="group relative p-6 bg-slate-900/50 border border-slate-800/50 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-cyan-500/30 transition-all duration-300">
                                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
                                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                                    {tech.icon}
                                </div>
                                <div className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors uppercase tracking-widest text-center">
                                    {tech.name}
                                </div>
                            </div>
                        </MotionWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
