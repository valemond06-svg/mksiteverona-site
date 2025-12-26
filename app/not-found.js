import Link from 'next/link';
import { PremiumButton } from '@/components/ui/PremiumButton';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center relative overflow-hidden px-6">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="relative z-10 text-center space-y-8">
                <div className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                    404
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Oops! Pagina non trovata.
                </h2>
                <p className="text-gray-400 max-w-md mx-auto">
                    Sembra che tu ti sia perso nello spazio digitale. Non preoccuparti, torniamo alla base.
                </p>
                <div>
                    <PremiumButton href="/">
                        🏠 Torna alla Home
                    </PremiumButton>
                </div>
            </div>
        </div>
    );
}
