'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check localStorage after mount to avoid hydration mismatch
        const consent = localStorage.getItem('mksite-cookie-consent');
        if (!consent) {
            // Small delay for better UX
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('mksite-cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('mksite-cookie-consent', 'declined');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 z-50 p-6 bg-slate-900/95 backdrop-blur-md border border-cyan-500/20 rounded-2xl shadow-2xl shadow-black/50"
                >
                    <div className="flex items-start gap-4">
                        <div className="text-3xl">🍪</div>
                        <div className="flex-1">
                            <h3 className="text-white font-bold mb-2">Cookie Privacy</h3>
                            <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                Usiamo i cookie per migliorare la tua esperienza. Continuando a navigare accetti la nostra{' '}
                                <Link href="/privacy" className="text-cyan-400 hover:underline">
                                    Privacy Policy
                                </Link>.
                            </p>

                            <div className="flex gap-3">
                                <button
                                    onClick={handleAccept}
                                    className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 text-sm font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                                >
                                    Accetto
                                </button>
                                <button
                                    onClick={handleDecline}
                                    className="px-4 py-2 bg-slate-800 text-gray-300 text-sm font-semibold rounded-lg hover:bg-slate-700 transition-colors"
                                >
                                    Rifiuto
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
