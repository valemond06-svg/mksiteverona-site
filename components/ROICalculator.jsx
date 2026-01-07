'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MotionWrapper } from '@/components/ui/MotionWrapper';

export default function ROICalculator() {
    const [traffic, setTraffic] = useState(1000);
    const [conversionRate, setConversionRate] = useState(1);
    const [avgTicket, setAvgTicket] = useState(500);
    const [newRevenue, setNewRevenue] = useState(0);

    useEffect(() => {
        // Current revenue = traffic * (conversionRate / 100) * avgTicket
        // Projected revenue = traffic * ( (conversionRate * 2) / 100) * avgTicket (assuming 2x improvement)
        const improvedConvRate = conversionRate * 2;
        const currentRev = traffic * (conversionRate / 100) * avgTicket;
        const projectedRev = traffic * (improvedConvRate / 100) * avgTicket;
        setNewRevenue(projectedRev - currentRev);
    }, [traffic, conversionRate, avgTicket]);

    return (
        <section id="roi" className="py-32 px-6 relative">
            <div className="max-w-4xl mx-auto bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12 backdrop-blur-xl relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

                <MotionWrapper className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Calcola il tuo <span className="text-cyan-400">ROI</span> Potenziale</h2>
                    <p className="text-gray-400 font-light">
                        Scopri quanto valore potresti generare migliorando il design e la velocità del tuo sito.
                    </p>
                </MotionWrapper>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-10">
                        {/* Traffic Slider */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-bold text-gray-300 uppercase tracking-widest text-[10px]">Visitatori Mensili</label>
                                <span className="text-cyan-400 font-mono font-bold">{traffic.toLocaleString()}</span>
                            </div>
                            <input
                                type="range" min="100" max="10000" step="100"
                                value={traffic}
                                onChange={(e) => setTraffic(Number(e.target.value))}
                                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                            />
                        </div>

                        {/* Conv Rate Slider */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-bold text-gray-300 uppercase tracking-widest text-[10px]">Tasso Conversione Attuale (%)</label>
                                <span className="text-cyan-400 font-mono font-bold">{conversionRate}%</span>
                            </div>
                            <input
                                type="range" min="0.1" max="5" step="0.1"
                                value={conversionRate}
                                onChange={(e) => setConversionRate(Number(e.target.value))}
                                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                            />
                        </div>

                        {/* Avg Ticket Slider */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-bold text-gray-300 uppercase tracking-widest text-[10px]">Valore Medio Cliente (€)</label>
                                <span className="text-cyan-400 font-mono font-bold">€{avgTicket}</span>
                            </div>
                            <input
                                type="range" min="10" max="5000" step="50"
                                value={avgTicket}
                                onChange={(e) => setAvgTicket(Number(e.target.value))}
                                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                            />
                        </div>
                    </div>

                    {/* Result Display */}
                    <div className="bg-slate-950/80 border border-cyan-500/20 rounded-2xl p-8 text-center space-y-6 shadow-2xl">
                        <p className="text-gray-400 text-sm uppercase tracking-[0.2em] font-bold">Guadagno Extra Potenziale</p>
                        <motion.div
                            key={newRevenue}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
                        >
                            +€{Math.round(newRevenue).toLocaleString()}
                        </motion.div>
                        <p className="text-xs text-gray-500 leading-relaxed italic">
                            *Basato su un miglioramento medio del 2x della conversione grazie a UX e Performance ottimizzate.
                        </p>
                        <button
                            onClick={() => document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full py-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-cyan-400 font-bold uppercase tracking-widest text-xs hover:bg-cyan-500/20 transition-all"
                        >
                            Voglio questi risultati
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
