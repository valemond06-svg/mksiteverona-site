'use client';

import { useState } from 'react';

const SERVICES = [
  {
    id: 'siti-web',
    icon: '🌐',
    title: 'Siti Web Professionali',
    subtitle: 'Da Vetrina Online a Macchina di Vendita',
    description:
      'Non costruiamo siti belli. Costruiamo siti che portano risultati.',
    features: [
      'Design personalizzato (non template generici)',
      'Velocissimo: carica in <2 secondi',
      'Primo su Google nella tua città',
      'Mobile perfetto su tutti i dispositivi',
      'Prenotazioni online integrate',
      'Analytics e monitoraggio 24/7',
      'Supporto illimitato nel primo trimestre',
    ],
    results: '+40-80% clienti nei primi 90 giorni',
    cta: 'Scopri Come Funziona →',
  },
  {
    id: 'ecommerce',
    icon: '🛒',
    title: 'E-commerce & Shop Online',
    subtitle: 'Vendi 24/7 Senza Fermarti',
    description:
      'Trasformiamo il tuo negozio fisico in una macchina di vendita online.',
    features: [
      'Integrazione pagamenti sicuri (Stripe, PayPal, Apple Pay)',
      'Gestione inventario in tempo reale',
      'Spedizioni automatizzate',
      'Sistema review e fiducia dei clienti',
      'Marketing automation per aumentare le vendite',
      'Dashboard admin completa',
      'Supporto 6 mesi incluso',
    ],
    results: 'Clienti vendono in media 3x di più online',
    cta: 'Lancia il Tuo Negozio →',
  },
  {
    id: 'seo-marketing',
    icon: '📊',
    title: 'SEO & Marketing Digitale',
    subtitle: 'Porta Clienti Real dal Tuo Territorio',
    description:
      'SEO non è una magia. È strategia, analisi e azione costante.',
    features: [
      'Ricerca keyword competitiva per la tua zona',
      'Ottimizzazione on-page avanzata',
      'Link building qualitativo',
      'Google My Business potenziato',
      'Report mensile + dashboard live',
      'Strategie content marketing',
      'Support SEO 3 mesi incluso',
    ],
    results: '+200% traffico organico (media)',
    cta: 'Scopri la Strategia SEO →',
  },
  {
    id: 'branding',
    icon: '🎨',
    title: 'Branding & Design',
    subtitle: 'La Tua Identità che Vende',
    description:
      'Un brand forte non è solo bello. È riconoscibile e memorabile.',
    features: [
      'Logo design professionale',
      'Brand identity completa',
      'Palette colori strategica',
      'Linee guida branding',
      'Mockup e presentazioni',
      'Design per social media',
      'Supporto design 90 giorni',
    ],
    results: '+35% riconoscibilità del brand',
    cta: 'Crea il Tuo Brand →',
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(SERVICES[0].id);
  const currentService = SERVICES.find((s) => s.id === selectedService);

  return (
    <section id="servizi" className="relative py-20 px-6 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-cyan-400 font-bold text-sm uppercase tracking-widest">
            💼 I Nostri Servizi
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Soluzioni Complete per il Tuo Business Online
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Dalla strategia al lancio, forniamo tutto quello che serve per trasformare la tua idea 
            in una macchina di acquisizione clienti che genera risultati misurabili.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {SERVICES.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left group ${
                selectedService === service.id
                  ? 'border-cyan-400 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 shadow-lg shadow-cyan-500/20'
                  : 'border-cyan-400/20 bg-slate-700/50 hover:border-cyan-400/50 hover:bg-slate-700/70'
              }`}
            >
              <div className="text-3xl mb-3">{service.icon}</div>
              <h3 className="font-bold text-white group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-xs text-gray-400 mt-2">{service.subtitle}</p>
              {selectedService === service.id && (
                <div className="mt-3 flex items-center gap-2 text-cyan-400 text-sm font-semibold">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Selezionato
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Service Detail */}
        {currentService && (
          <div className="bg-gradient-to-br from-slate-700/50 to-slate-700/30 rounded-3xl border border-cyan-400/20 p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left - Description */}
              <div className="lg:col-span-1 space-y-6">
                <div>
                  <p className="text-6xl mb-4">{currentService.icon}</p>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {currentService.title}
                  </h3>
                  <p className="text-cyan-400 font-semibold">
                    {currentService.subtitle}
                  </p>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {currentService.description}
                </p>

                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-400/30 p-4">
                  <p className="text-sm text-gray-400 mb-2">Risultato Medio</p>
                  <p className="text-xl font-bold text-cyan-400">
                    {currentService.results}
                  </p>
                </div>

                <a
                  href="/#contatti"
                  className="w-full py-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 text-center block"
                >
                  {currentService.cta}
                </a>
              </div>

              {/* Right - Features */}
              <div className="lg:col-span-2">
                <h4 className="text-2xl font-bold text-white mb-6">Cosa è Incluso:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentService.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-lg bg-slate-700/50 border border-cyan-400/10 hover:border-cyan-400/30 transition-all"
                    >
                      <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Secondary CTA */}
                <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-400/20">
                  <p className="text-gray-300 mb-4">
                    <strong>Vuoi sapere se questa soluzione fa per te?</strong>
                  </p>
                  <a
                    href="https://wa.me/393334567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-cyan-400 text-slate-900 font-bold rounded-lg hover:bg-cyan-300 transition-all"
                  >
                    💬 Scrivi su WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6">
            Non trovi quello che cerchi? Contattaci per una soluzione personalizzata.
          </p>
          <a
            href="/#contatti"
            className="inline-block px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
          >
            📅 Prenota Consulenza Strategica
          </a>
        </div>
      </div>
    </section>
  );
}
