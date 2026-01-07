'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MiniChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasNotified, setHasNotified] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isOpen) setHasNotified(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, [isOpen]);

    return (
        <div className="fixed bottom-8 left-8 z-[100]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="absolute bottom-20 left-0 w-80 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">
                                    👨‍💻
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white leading-none">MKSite Assistant</p>
                                    <p className="text-[10px] text-white/70 font-medium">Online ora</p>
                                </div>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="p-6 space-y-4 max-h-60 overflow-y-auto">
                            <div className="bg-slate-800/50 p-3 rounded-2xl rounded-tl-none text-xs text-slate-300 leading-relaxed">
                                Ciao! 👋 Come posso aiutarti a trasformare il tuo business oggi?
                            </div>
                            <div className="bg-slate-800/50 p-3 rounded-2xl rounded-tl-none text-xs text-slate-300 leading-relaxed">
                                Realizziamo siti web che convertono. Hai già un progetto in mente?
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-4 border-t border-slate-800">
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="w-full py-2.5 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 font-bold text-[10px] uppercase tracking-widest hover:bg-cyan-500/20 transition-all"
                            >
                                Parla con un umano
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => {
                    setIsOpen(!isOpen);
                    setHasNotified(false);
                }}
                className="relative group"
            >
                <div className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center text-2xl shadow-2xl group-hover:border-cyan-500/50 transition-all">
                    💬
                </div>
                {hasNotified && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center text-[10px] font-black text-white ring-4 ring-slate-950"
                    >
                        1
                    </motion.div>
                )}
                <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 whitespace-nowrap bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    Hai una domanda?
                </div>
            </button>
        </div>
    );
}
