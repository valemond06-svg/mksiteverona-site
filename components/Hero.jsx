'use client';

import { PremiumButton } from '@/components/ui/PremiumButton';
import { MotionWrapper } from '@/components/ui/MotionWrapper';
import TextReveal from '@/components/ui/TextReveal';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Monitor } from '@/lib/icons';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] bg-transparent flex items-start pt-32 lg:pt-48 pb-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <MotionWrapper delay={0.1} className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight">
                Realizzazione Siti Web <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"><TextReveal text="Professionali" /></span>
                <br />a Verona
              </h1>
              <p className="text-xl md:text-2xl font-bold text-cyan-400">
                Siti web moderni e veloci che portano clienti ai tuoi banchi
              </p>

              {/* H1 Keyword Echo - SEO Critical */}
              <p className="text-xl text-white font-medium leading-relaxed max-w-2xl">
                <strong>Realizziamo siti web professionali a Verona</strong> con un focus su performance,
                SEO e design moderno. La nostra agenzia è specializzata nella <strong>realizzazione di
                  siti web</strong> per bar, ristoranti, negozi e PMI che vogliono distinguersi online.
                Ogni <strong>sito web professionale a Verona</strong> che creiamo è ottimizzato per
                convertire visitatori in clienti reali.
              </p>

              <div className="text-lg text-gray-300 leading-relaxed max-w-xl font-light space-y-4">
                <p>
                  MKSite è la tua agenzia di web design di riferimento a Verona, specializzata nella creazione di ecosistemi digitali ad alte prestazioni per piccole imprese locali. Realizziamo siti web professionali per bar, ristoranti, negozi e PMI che desiderano dominare il mercato locale.
                </p>
                <p>
                  In un mondo sempre più digitale, la visibilità online è il carburante del tuo business. Trasformiamo semplici visitatori in clienti fedeli grazie a strategie SEO mirate e design d&apos;impatto, garantendo la competitività che la tua attività merita nel cuore di Verona.
                </p>
              </div>
            </MotionWrapper>

            {/* CTA Buttons */}
            <MotionWrapper delay={0.3} className="flex flex-col sm:flex-row gap-4">
              <PremiumButton href="/contatti" variant="primary">
                <Mail size={18} /> Contattaci Oggi
              </PremiumButton>
              <PremiumButton href="https://wa.me/393701093391" variant="outline">
                <MessageCircle size={18} /> Scrivi su WhatsApp
              </PremiumButton>
            </MotionWrapper>

            {/* Trust Signals */}
            <MotionWrapper delay={0.5} className="pt-8 space-y-4 border-t border-cyan-400/20">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span className="text-gray-300"><strong>Sito Velocissimo</strong> - Carica in &lt;2 secondi (elemento critico di UX)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span className="text-gray-300"><strong>SEO Ottimizzato</strong> - Visibilità sui motori di ricerca per le tue keyword</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span className="text-gray-300"><strong>Design Professionale</strong> - Crea fiducia e ispira credibilità</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span className="text-gray-300"><strong>Responsive & Mobile</strong> - Funziona perfettamente su tutti i dispositivi</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span className="text-gray-300"><strong>Analytics Integrato</strong> - Monitora i risultati e misura il ROI</span>
                </li>
              </ul>
            </MotionWrapper>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-20 pb-32">
              {[
                { number: '85%', label: 'clienti cercano online prima di contattare' },
                { number: '75%', label: 'giudicano la credibilità in base al design del sito' },
                { number: '50%', label: 'abbandonano se il sito carica lentamente' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-black text-cyan-400">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative hidden lg:block pt-4">
            <MotionWrapper direction="left" delay={0.4} className="relative w-full aspect-square">
              {/* Animated Card */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-400/30 backdrop-blur-sm p-8 flex items-center justify-center"
              >
                <div className="text-center space-y-6">
                  <div className="flex justify-center text-cyan-400">
                    <Monitor size={64} className="animate-pulse" />
                  </div>
                  <div className="text-2xl font-bold text-white">Sito Web Professionale</div>
                  <p className="text-gray-300 text-sm max-w-xs">
                    Design moderno + SEO + Usabilità = Visibilità Online
                  </p>

                  {/* Feature Badges */}
                  <div className="grid grid-cols-2 gap-3">
                    {['Mobile Ready', 'Ultra Veloce', 'SEO Ready', 'Analytics'].map((feature, i) => (
                      <div
                        key={i}
                        className="px-3 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-lg text-xs font-semibold text-cyan-400"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-xl opacity-20 blur-2xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl opacity-10 blur-3xl" />
            </MotionWrapper>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
