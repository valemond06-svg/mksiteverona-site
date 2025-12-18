'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 px-6 py-20 flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE - Main Message */}
        <div className="space-y-8">
          {/* Main Headline - Problem/Solution Focused */}
          <div className="space-y-4">
            <p className="text-cyan-400 font-bold text-sm uppercase tracking-widest">
              ⚡ Il Tuo Sito Non Genera Clienti?
            </p>
            
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight space-y-2">
              <span>Da Idea a Cliente:</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Siti Web che Triplicano le Vendite
              </span>
            </h1>
          </div>

          {/* Subheadline - Benefit focused */}
          <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
            Il <strong>89% dei tuoi clienti</strong> ti cerca online PRIMA di contattarti. 
            Se il tuo sito è lento, vecchio o non converte, stai <strong>perdendo clienti ogni giorno</strong>.
          </p>

          {/* Social Proof Stats */}
          <div className="space-y-3 border-l-4 border-cyan-400 pl-6 py-2">
            <p className="text-sm text-gray-400">
              ✓ <strong>+40% clienti</strong> nei primi 90 giorni
            </p>
            <p className="text-sm text-gray-400">
              ✓ <strong>Primo su Google</strong> nella tua città
            </p>
            <p className="text-sm text-gray-400">
              ✓ <strong>€2M+</strong> generati per i nostri 150+ clienti
            </p>
            <p className="text-sm text-gray-400">
              ✓ <strong>98% clienti soddisfatti</strong> - continuano con noi
            </p>
          </div>

          {/* CTA Buttons - Urgent + Clear */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="/#contatti"
              className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 text-center"
            >
              📅 Prenota Consulenza Gratuita
            </a>
            
            <a
              href="https://wa.me/393334567890"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 transition-all duration-300 text-center"
            >
              💬 Scrivi su WhatsApp
            </a>
          </div>

          {/* Trust indicator */}
          <div className="flex items-center gap-2 text-sm text-gray-400 pt-4">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 3.062v6.72a1.066 1.066 0 01-1.469.98l-3.427-1.529a3.066 3.066 0 00-1.733 0l-3.427 1.529A1.066 1.066 0 013.455 13.237v-6.72a3.066 3.066 0 012.812-3.062zM9.915 16.027a1.066 1.066 0 01-1.34-.823l-.464-2.78a.531.531 0 00-.531-.531H5.337a.531.531 0 00-.531.531l-.464 2.78a1.066 1.066 0 11-2.11-.348l.464-2.78a2.664 2.664 0 012.66-2.66h2.243a2.664 2.664 0 012.66 2.66l.464 2.78a1.066 1.066 0 01-.824 1.34z" clipRule="evenodd" />
            </svg>
            <span>Supporto italiano 24/7 • Niente contratti a lungo termine</span>
          </div>
        </div>

        {/* RIGHT SIDE - Visual Section */}
        <div className="relative h-full flex flex-col gap-6">
          {/* Info Card 1 - Features */}
          <div className="bg-gradient-to-br from-slate-700/50 to-slate-700/30 rounded-2xl border border-cyan-400/20 p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <h3 className="text-2xl font-bold text-white mb-4">🚀 Cosa Ottieni</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✓</span>
                <span className="text-gray-300"><strong>Sito Velocissimo</strong> - Carica in &lt;2 secondi</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✓</span>
                <span className="text-gray-300"><strong>Primo su Google</strong> - SEO ottimizzato per la tua città</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✓</span>
                <span className="text-gray-300"><strong>Mobile Perfetto</strong> - Funziona su tutti i dispositivi</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✓</span>
                <span className="text-gray-300"><strong>Design Moderno</strong> - Ispira fiducia nei clienti</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✓</span>
                <span className="text-gray-300"><strong>Monitoraggio Reale</strong> - Vedi chi visita e cosa fa</span>
              </li>
            </ul>
          </div>

          {/* Info Card 2 - CTA */}
          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-400/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🎯</span>
              <h3 className="text-xl font-bold text-white">Prossimi Passi</h3>
            </div>
            <ol className="space-y-2 text-gray-300 text-sm">
              <li><strong>1.</strong> Consulenza 30 min (gratuita)</li>
              <li><strong>2.</strong> Piano d'azione personalizzato</li>
              <li><strong>3.</strong> Lancio e primi risultati in 90 giorni</li>
            </ol>
            
            <a
              href="/#contatti"
              className="mt-6 w-full block py-3 bg-cyan-400 text-slate-900 font-bold rounded-lg hover:bg-cyan-300 transition-all text-center"
            >
              Scopri il Piano Per Te →
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
