'use client';

import { BRAND } from '@/lib/constants';
import { useParallax } from '@/lib/hooks/useParallax';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

export default function Hero() {
  const { ref: parallaxRef, offset } = useParallax(0.5);
  const { ref: badgeRef, isVisible: badgeVisible } = useScrollAnimation();
  const { ref: headlineRef, isVisible: headlineVisible } = useScrollAnimation();
  const { ref: subheadlineRef, isVisible: subheadlineVisible } = useScrollAnimation();
  const { ref: buttonsRef, isVisible: buttonsVisible } = useScrollAnimation();
  const { ref: trustRef, isVisible: trustVisible } = useScrollAnimation();

  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 overflow-hidden">
      {/* Parallax Background Layer */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          transform: `translateY(${offset * 0.3}px)`,
        }}
      >
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-400 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-400 opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`mb-8 transition-all duration-700 ${
              badgeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="inline-block px-4 py-2 bg-cyan-400 bg-opacity-10 text-cyan-400 rounded-full text-sm font-semibold border border-cyan-400 border-opacity-30 hover:bg-opacity-20 transition-all duration-300">
              ✨ Siti Web che Funzionano
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className={`text-5xl sm:text-6xl font-bold mb-6 leading-tight transition-all duration-700 ${
              headlineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Siti web che portano{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text animate-pulse">
              clienti ai tuoi banchi
            </span>
          </h1>

          {/* Subheadline */}
          <p
            ref={subheadlineRef}
            className={`text-xl text-gray-300 mb-8 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              subheadlineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Professionali, veloci, ottimizzati per convertire. Per bar, ristoranti, negozi e parrucchieri a Verona.
          </p>

          {/* CTA Buttons */}
          <div
            ref={buttonsRef}
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${
              buttonsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <a
              href="#contatti"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110 active:scale-95 transform"
            >
              <span className="inline-block transition-transform group-hover:translate-x-1 duration-300">
                🚀 Inizia Ora
              </span>
            </a>
            <a
              href={BRAND.whatsapp_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-slate-800 text-cyan-400 font-semibold rounded-lg border-2 border-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/30"
            >
              <span className="inline-block transition-transform group-hover:translate-x-1 duration-300">
                💬 WhatsApp
              </span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div
            ref={trustRef}
            className={`mt-16 pt-8 border-t border-slate-700 transition-all duration-700 delay-400 ${
              trustVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-gray-400 text-sm mb-4">Scelti da imprenditori come te</p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="group text-center cursor-default hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-cyan-400 group-hover:text-blue-400 transition-colors duration-300">
                  50+
                </div>
                <div className="text-sm text-gray-400">Siti Creati</div>
              </div>
              <div className="group text-center cursor-default hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-cyan-400 group-hover:text-blue-400 transition-colors duration-300">
                  4.9/5
                </div>
                <div className="text-sm text-gray-400">Rating Medio</div>
              </div>
              <div className="group text-center cursor-default hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-cyan-400 group-hover:text-blue-400 transition-colors duration-300">
                  48h
                </div>
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
