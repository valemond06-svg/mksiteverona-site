'use client';

import Link from 'next/link';
import { Globe, ShoppingCart, BarChart3, ArrowRight } from '@/lib/icons';
import { MotionWrapper } from '@/components/ui/MotionWrapper';

const MINI_SERVICES = [
    {
        icon: Globe,
        title: 'Siti Web per Ristoranti e Bar',
        desc: 'Realizziamo siti web con design attraente, menu online interattivi, sistemi di prenotazione e integrazione social. Ottimizziamo la tua presenza per attirare clienti locali a Verona e aumentare gli ordini online tramite una maggiore visibilità.',
    },
    {
        icon: ShoppingCart,
        title: 'E-commerce e Negozi Online',
        desc: 'Sviluppiamo cataloghi prodotti avanzati con carrello acquisti, pagamenti sicuri e gestione inventario. La soluzione ideale per vendere 24/7, raggiungere clienti oltre Verona e aumentare i ricavi grazie a un’architettura di vendita solida.',
    },
    {
        icon: BarChart3,
        title: 'Siti Web per PMI e Imprese Locali',
        desc: 'Creiamo landing page professionali con form contatti, gallery portfolio e blog integrati. Aumentiamo la tua credibilità professionale, favoriamo la lead generation e miglioriamo la comunicazione con i tuoi potenziali clienti.',
    },
];

export default function HomeServices() {
    return (
        <section className="py-24 px-6 bg-transparent relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <MotionWrapper className="max-w-2xl">
                        <p className="text-cyan-400 font-bold text-sm uppercase tracking-widest mb-4">I Nostri Servizi</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            I Servizi Che Offriamo <br />
                            <span className="text-gray-500 font-light">per il tuo successo locale.</span>
                        </h2>
                    </MotionWrapper>
                    <MotionWrapper delay={0.2}>
                        <Link
                            href="/servizi"
                            className="group flex items-center gap-2 text-white hover:text-cyan-400 transition-colors font-semibold"
                        >
                            I nostri servizi web <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </MotionWrapper>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {MINI_SERVICES.map((service, i) => (
                        <MotionWrapper key={i} delay={i * 0.1}>
                            <Link href="/servizi" className="block h-full" scroll={true}>
                                <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-cyan-400/50 transition-all group overflow-hidden relative h-full cursor-pointer">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <service.icon size={80} />
                                    </div>
                                    <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-400 group-hover:text-slate-900 transition-all duration-300">
                                        <service.icon size={24} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                            </Link>
                        </MotionWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
