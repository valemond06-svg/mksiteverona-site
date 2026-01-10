'use client';

import { PremiumButton } from '@/components/ui/PremiumButton';
import { MotionWrapper } from '@/components/ui/MotionWrapper';
import { Zap, Mail } from 'lucide-react';

export default function HomeCTA() {
    return (
        <section className="py-24 px-6 relative overflow-hidden bg-transparent">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] opacity-20" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <MotionWrapper className="space-y-8">
                    <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                        Pronto a Far Crescere il <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Tuo Business Online?</span>
                    </h2>

                    <div className="text-xl text-gray-300 leading-relaxed space-y-4">
                        <p>
                            In un mercato competitivo come quello di Verona, la velocità e la visibilità sono fondamentali. Ogni giorno che il tuo business non è online o ha un sito lento, stai perdendo potenziali clienti a favore dei tuoi competitor.
                        </p>
                        <p>
                            Non lasciare che accada. Il nostro team è pronto a supportarti con soluzioni professionali, veloci e SEO-friendly. Richiedi oggi stesso un preventivo gratuito e personalizzato: è senza impegno e ti fornirà una chiara visione su come potenziare la tua presenza locale.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                        <PremiumButton href="/contatti" variant="primary" className="text-lg px-8 py-4">
                            <Zap size={20} className="mr-2" /> Richiedi Preventivo Gratuito
                        </PremiumButton>
                        <PremiumButton href="/contatti" variant="outline" className="text-lg px-8 py-4">
                            <Mail size={20} className="mr-2" /> Contattaci
                        </PremiumButton>
                    </div>

                    <p className="text-gray-500 text-sm italic">
                        * Rispondiamo solitamente entro 24 ore lavorative.
                    </p>
                </MotionWrapper>
            </div>
        </section>
    );
}
