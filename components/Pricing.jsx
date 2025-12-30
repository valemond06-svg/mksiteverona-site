'use client';


import { PremiumButton } from '@/components/ui/PremiumButton';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { MotionWrapper } from '@/components/ui/MotionWrapper';

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-cyan-400 font-bold text-sm uppercase tracking-widest">
            💰 Piani Trasparenti
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Niente Sorprese. Solo Risultati Reali.
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Scegli il piano giusto per la tua situazione.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* STARTER */}
          <MotionWrapper delay={0.1}>
            <SpotlightCard className="p-8 h-full flex flex-col">
              <div className="mb-8">
                <div className="text-4xl font-black text-white mb-2">€299</div>
                <p className="text-gray-400 text-sm">una tantum</p>
                <h3 className="text-2xl font-bold text-white mt-4">Starter</h3>
                <p className="text-gray-300 text-sm mt-2">Perfetto per chi inizia da zero</p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  '5 pagine web personalizzate',
                  'Design responsive mobile',
                  'SEO base ottimizzato',
                  'Contact form & Google Maps',
                  'Supporto 30 giorni incluso',
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <SvgCheck />
                    <span className="text-gray-300">{text}</span>
                  </li>
                ))}
              </ul>

              <div className="text-sm text-gray-400 mb-6 p-3 bg-slate-700/50 rounded-lg">
                ⚠️ <span className="font-semibold">Nota:</span> Base solida. In genere +10–20% clienti.
              </div>

              <PremiumButton href="#contatti" className="w-full" variant="outline">
                Inizia Ora →
              </PremiumButton>
              <p className="text-xs text-gray-500 text-center mt-3">
                Niente canone mensile. Paghi una volta.
              </p>
            </SpotlightCard>
          </MotionWrapper>

          {/* PRO - HIGHLIGHTED */}
          <MotionWrapper delay={0.2} className="relative z-10 transform md:scale-105">
            {/* Badge - Moved outside to prevent clipping/overlap */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-500/40 z-20 whitespace-nowrap">
              <span className="text-sm font-bold text-white tracking-wide">⭐ Più Scelto (70%)</span>
            </div>

            <SpotlightCard className="p-8 h-full border-cyan-400 bg-slate-900/80 shadow-2xl shadow-cyan-500/20" spotlightColor="rgba(34, 211, 238, 0.25)">
              <div className="mb-8 pt-8">
                <div className="text-4xl font-black text-white mb-2">€599</div>
                <p className="text-cyan-400 text-sm font-semibold">una tantum</p>
                <h3 className="text-2xl font-bold text-white mt-4">Pro</h3>
                <p className="text-gray-300 text-sm mt-2">Per chi vuole crescere velocemente</p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  'Pagine illimitate + blog integrato',
                  'Design custom unico per te',
                  'SEO avanzato + posizionamento locale',
                  'Analytics avanzato + report mensili',
                  'Supporto 3 mesi + aggiornamenti SEO',
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <SvgCheck />
                    <span className="text-gray-300">{text}</span>
                  </li>
                ))}
              </ul>

              <div className="text-sm text-cyan-300 mb-6 p-3 bg-cyan-500/10 rounded-lg border border-cyan-400/20">
                🚀 <span className="font-semibold">Il più scelto!</span> Media +40–80% clienti in 90 giorni.
              </div>

              <PremiumButton href="#contatti" className="w-full" variant="primary">
                Entra nel 70% che Cresce →
              </PremiumButton>
              <p className="text-xs text-gray-400 text-center mt-3">
                Risultati misurabili e convenienti.
              </p>
            </SpotlightCard>
          </MotionWrapper>

          {/* E-COMMERCE */}
          <MotionWrapper delay={0.3}>
            <SpotlightCard className="p-8 h-full flex flex-col">
              <div className="mb-8">
                <div className="text-4xl font-black text-white mb-2">€999</div>
                <p className="text-gray-400 text-sm">una tantum</p>
                <h3 className="text-2xl font-bold text-white mt-4">E-commerce</h3>
                <p className="text-gray-300 text-sm mt-2">Per negozi online professionali</p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  'Carrello e pagamenti sicuri',
                  'Gestione inventario automatica',
                  'Spedizioni integrate',
                  'SEO e-commerce ottimizzato',
                  'Supporto 6 mesi + marketing',
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <SvgCheck />
                    <span className="text-gray-300">{text}</span>
                  </li>
                ))}
              </ul>

              <div className="text-sm text-gray-400 mb-6 p-3 bg-slate-700/50 rounded-lg">
                💎 <span className="font-semibold">Premium:</span> vendite fino a 3× in 90 giorni.
              </div>

              <PremiumButton href="#contatti" className="w-full" variant="outline">
                Vendi Online Oggi →
              </PremiumButton>
              <p className="text-xs text-gray-500 text-center mt-3">
                Niente canone mensile. Paghi una volta.
              </p>
            </SpotlightCard>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}

function SvgCheck() {
  return (
    <svg
      className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}
