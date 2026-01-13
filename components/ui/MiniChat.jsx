'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, User } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function MiniChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasNotified, setHasNotified] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isOpen) setHasNotified(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, [isOpen]);

    return (
        <div className="fixed bottom-8 right-8 z-[110] flex flex-col-reverse items-end gap-3 pointer-events-none">
            {/* The button is always clickable, but the container should not block the rest of the site */}
            <div className="pointer-events-auto">
                <button
                    onClick={() => {
                        setIsOpen(!isOpen);
                        setHasNotified(false);
                    }}
                    className="relative group focus:outline-none"
                >
                    <div className="w-14 h-14 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center shadow-2xl group-hover:border-cyan-500/50 transition-all text-cyan-400">
                        <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
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
                    <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        Hai una domanda?
                    </div>
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="pointer-events-auto w-80 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl mb-4"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white">
                                    <User size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white leading-none">Assistente MK</p>
                                    <p className="text-[10px] text-white/70 font-medium">Online ora</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6 space-y-4 max-h-60 overflow-y-auto">
                            <div className="bg-slate-800/50 p-3 rounded-2xl rounded-tr-none text-xs text-slate-300 leading-relaxed italic">
                                &quot;Ciao! 👋 Sono l&apos;assistente di MKSite. Come posso aiutarti a far crescere il tuo locale?&quot;
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-4 border-t border-slate-800">
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    router.push('/contatti');
                                }}
                                className="w-full py-2.5 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 font-bold text-[10px] uppercase tracking-widest hover:bg-cyan-500/20 transition-all font-sans"
                            >
                                Scrivici un messaggio
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
