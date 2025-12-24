'use client';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden flex items-center pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-cyan-400 font-bold text-sm uppercase tracking-widest">
                🚀 Web Development & Digital Marketing
              </p>
              <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
                Un Sito Web che Funziona è il Tuo Miglior Investimento
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                Avere un sito web professionale non è più un'opzione, è una necessità. Ti aiutiamo a creare una presenza online che attira clienti, genera fiducia e converte visitatori in affari concreti.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contatti"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 text-center"
              >
                📧 Contattaci Oggi
              </a>
              <a
                href="https://wa.me/393701093391"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 transition-all text-center"
              >
                💬 Scrivi su WhatsApp
              </a>
            </div>

            {/* Trust Signals */}
            <div className="pt-8 space-y-4 border-t border-cyan-400/20">
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
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-20 pb-30">
              {[
                { number: '89%', label: 'clienti cerca online prima di contattare' },
                { number: '2x', label: 'più conversioni con design professionale' },
                { number: '50%', label: 'abbandono se il sito carica lentamente' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                <div className="text-3xl font-black text-cyan-400">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square">
              {/* Animated Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-400/30 backdrop-blur-sm p-8 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="text-6xl">💻</div>
                  <h3 className="text-2xl font-bold text-white">Sito Web Professionale</h3>
                  <p className="text-gray-300 text-sm max-w-xs">
                    Design moderno + SEO + Usabilità = Clienti Reali
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
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-xl opacity-20 blur-2xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl opacity-10 blur-3xl" />
            </div>
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
