'use client';

import { useState, useEffect } from 'react';
import { BRAND } from '@/lib/constants';

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 pt-20"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(34, 211, 238, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
          transform: `translateY(${offset}px)`,
        }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(34, 211, 238, 0.05) 25%, rgba(34, 211, 238, 0.05) 26%, transparent 27%, transparent 74%, rgba(34, 211, 238, 0.05) 75%, rgba(34, 211, 238, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(34, 211, 238, 0.05) 25%, rgba(34, 211, 238, 0.05) 26%, transparent 27%, transparent 74%, rgba(34, 211, 238, 0.05) 75%, rgba(34, 211, 238, 0.05) 76%, transparent 77%, transparent)`,
          backgroundSize: '50px 50px',
          transform: `translateY(${offset * 0.3}px)`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Siti Web che{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                  Convertono
                </span>
              </h1>
              <p className="text-xl text-gray-300">
                Creiamo esperienze digitali straordinarie per bar, ristoranti, negozi e parrucchieri a Verona. Aumenta i tuoi clienti con un sito che vende.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contatti"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-bold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 text-center"
              >
                Richiedi una Consulenza
              </a>
              <a
                href="#blog"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 transition-all duration-300 text-center"
              >
                Scopri i Nostri Lavori
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700">
              <div>
                <p className="text-3xl font-bold text-cyan-400">150+</p>
                <p className="text-gray-400 text-sm">Progetti Completati</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-400">98%</p>
                <p className="text-gray-400 text-sm">Clienti Soddisfatti</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-400">5 Anni</p>
                <p className="text-gray-400 text-sm">Di Esperienza</p>
              </div>
            </div>
          </div>

          {/* Visual Element - Parallax Card */}
          <div
            className="relative h-96 lg:h-full"
            style={{
              transform: `translateY(${offset * 0.2}px)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl" />

            <div className="relative h-full bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-3xl border border-cyan-400/20 backdrop-blur-xl p-8 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="text-6xl">🚀</div>
                <h3 className="text-2xl font-bold text-white">
                  Pronti a Crescere?
                </h3>
                <p className="text-gray-300 text-lg">
                  Trasformiamo la tua idea in un sito che genera risultati concreti
                </p>
                <a
                  href={BRAND.whatsapp_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-all duration-300 hover:scale-105"
                >
                  Contattaci su WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-cyan-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
