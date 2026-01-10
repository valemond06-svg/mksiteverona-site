'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Zap } from '@/lib/icons';

export default function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            // Show after 800px or 1.2 viewport heights
            setIsVisible(window.scrollY > 800);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0, scale: 0.8 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 100, opacity: 0, scale: 0.8 }}
                    className="fixed bottom-8 left-8 z-[100] hidden md:block"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => router.push('/contatti')}
                        aria-label="Richiedi un preventivo gratuito"
                        className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 p-1 pr-6 rounded-full shadow-[0_10px_40px_rgba(6,182,212,0.3)] group"
                    >
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md text-white">
                            <Zap size={24} />
                        </div>
                        <div className="text-left">
                            <p className="text-[10px] uppercase font-black text-white/70 tracking-tighter leading-none">Inizia ora</p>
                            <p className="text-sm font-bold text-white tracking-tight">Preventivo Gratuito</p>
                        </div>
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
