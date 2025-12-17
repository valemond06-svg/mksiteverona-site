'use client';

import { PRICING_PLANS } from '@/lib/constants';

export default function Pricing() {
  return (
    <section id="prezzi" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold mb-6">Prezzi Trasparenti</h2>
          <p className="text-xl text-gray-300">
            Niente sorprese. Scegli il piano che fa per te e inizia subito.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {PRICING_PLANS.map((plan, idx) => (
            <div
              key={plan.id}
              className={`relative rounded-lg p-8 transition-all ${
                plan.highlight
                  ? 'bg-gradient-to-br from-cyan-400 to-blue-400 text-slate-900 ring-2 ring-cyan-400 md:scale-105'
                  : 'bg-slate-800 border border-slate-700 text-white'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-block px-3 py-1 bg-slate-900 text-cyan-400 rounded-full text-xs font-bold">
                    Più Scelto ⭐
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm ${plan.highlight ? 'text-slate-700' : 'text-gray-400'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="text-4xl font-bold">
                  €{plan.price}
                  <span className={`text-lg ml-2 ${plan.highlight ? 'text-slate-700' : 'text-gray-400'}`}>
                    una tantum
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <span className={plan.highlight ? 'text-slate-900' : 'text-cyan-400'}>✓</span>
                    <span className={plan.highlight ? 'text-slate-900' : 'text-gray-300'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contatti"
                className={`block w-full py-3 px-4 font-bold rounded-lg text-center transition-all ${
                  plan.highlight
                    ? 'bg-slate-900 text-cyan-400 hover:bg-slate-800'
                    : 'bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 hover:shadow-lg hover:shadow-cyan-500/50'
                }`}
              >
                {plan.cta} →
              </a>

              <p className={`text-center text-xs mt-4 ${plan.highlight ? 'text-slate-700' : 'text-gray-400'}`}>
                Niente canone mensile. Paghi una volta.
              </p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto bg-slate-800 border border-slate-700 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Domande Frequenti</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">Quanto tempo ci vuole?</h4>
              <p className="text-gray-300">In media 48-72 ore. Per progetti custom, discutiamo i tempi via WhatsApp.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">Include la manutenzione?</h4>
              <p className="text-gray-300">Sì, il supporto base è incluso per 30-90 giorni a seconda del piano. Dopo, offriamo pacchetti di supporto economici.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">Posso cambiare il sito dopo?</h4>
              <p className="text-gray-300">Certo! Ti insegniamo come modificare i contenuti oppure rimaniamo a tua disposizione per gli aggiornamenti.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
