'use client';

import { BRAND } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-cyan-400 bg-opacity-10 text-cyan-400 rounded-full text-sm font-semibold border border-cyan-400 border-opacity-30">
              ✨ Siti Web che Funzionano
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Siti web che portano{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text">
              clienti ai tuoi banchi
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Professionali, veloci, ottimizzati per convertire. Per bar, ristoranti, negozi e parrucchieri a Verona.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contatti" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
            >
              🚀 Inizia Ora
            </a>
            <a
              href={BRAND.whatsapp_url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-800 text-cyan-400 font-semibold rounded-lg border-2 border-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all"
            >
              💬 WhatsApp
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-slate-700">
            <p className="text-gray-400 text-sm mb-4">Scelti da imprenditori come te</p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">50+</div>
                <div className="text-sm text-gray-400">Siti Creati</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">4.9/5</div>
                <div className="text-sm text-gray-400">Rating Medio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">48h</div>
                <div className="text-sm text-gray-400">Tempo Medio</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-400 opacity-5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-400 opacity-5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
}
