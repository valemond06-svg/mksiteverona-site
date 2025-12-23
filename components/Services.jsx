'use client';

import { useState, useEffect } from 'react';

const SERVICES = [
  {
    id: 'siti-web',
    icon: '🌐',
    title: 'Siti Web Professionali',
    subtitle: 'Da Vetrina Online a Macchina di Vendita',
    description:
      'Creiamo siti web moderni, veloci e ottimizzati per i motori di ricerca. Ogni sito è costruito con un obiettivo chiaro: portare risultati misurabili.',
    features: [
      'Design personalizzato e responsive',
      'Velocità ottimizzata (<2 secondi)',
      'SEO integrato',
      'Mobile-first',
      'Analytics configurato',
      'Supporto tecnico incluso',
    ],
  },
  {
    id: 'ecommerce',
    icon: '🛒',
    title: 'E-commerce & Shop Online',
    subtitle: 'Vendi 24/7 Senza Frontiere',
    description:
      'Piattaforme e-commerce complete con pagamenti integrati, gestione inventario e analytics avanzati. Tutto quello che serve per vendere online professionalmente.',
    features: [
      'Catalogo prodotti illimitato',
      'Pagamenti sicuri multi-metodo',
      'Gestione ordini automatizzata',
      'Integrazioni logistiche',
      'SEO per e-commerce',
      'Supporto clienti 24/7',
    ],
  },
  {
    id: 'seo',
    icon: '📊',
    title: 'SEO & Marketing Digitale',
    subtitle: 'Attrai Clienti Reali dal Tuo Territorio',
    description:
      'Strategie SEO locali e nazionali per aumentare la visibilità online. Ottimizzazione completa da ricerca organica a Google Ads.',
    features: [
      'Ricerca keyword strategica',
      'Ottimizzazione on-page',
      'Link building qualitativo',
      'Google My Business management',
      'Analisi della concorrenza',
      'Reporting mensile dettagliato',
    ],
  },
  {
    id: 'branding',
    icon: '🎨',
    title: 'Branding & Design',
    subtitle: 'La Tua Identità che Vende',
    description:
      'Dall’identità visiva al posizionamento di marca. Creiamo un brand coerente e memorabile che ispira fiducia e attira i clienti giusti.',
    features: [
      'Logo e identità visiva',
      'Linee guida di brand',
      'Packaging e materiali',
      'Social media branding',
      'Tone of voice',
      'Posizionamento strategico',
    ],
  },
];

export default function Services() {
  const [expandedService, setExpandedService] = useState('siti-web');

  const activeService = SERVICES.find((s) => s.id === expandedService);

  // Ascolta l'evento proveniente dal footer
  useEffect(() => {
    const handleSelectService = (event) => {
      const id = event.detail;
      if (id) {
        setExpandedService(id);
      }
    };

    window.addEventListener('selectService', handleSelectService);
    return () => window.removeEventListener('selectService', handleSelectService);
  }, []);

  return (
    <section
      id="servizi"
      className="relative py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-cyan-400 font-bold text-sm uppercase tracking-widest">
            🚀 I Nostri Servizi
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Soluzioni Complete per il Tuo Business Online
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Dalla creazione del sito web alla gestione del marketing digitale, abbiamo tutto ciò che serve per una presenza online di successo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {SERVICES.map((service) => (
            <div key={service.id} id={service.id}>
              <button
                onClick={() => setExpandedService(service.id)}
                className={`group w-full rounded-2xl border-2 p-8 text-left transition-all duration-300 ${
                  expandedService === service.id
                    ? 'border-cyan-400 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 shadow-lg shadow-cyan-500/20'
                    : 'border-cyan-400/20 bg-slate-700/30 hover:border-cyan-400/50'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{service.icon}</div>
                  <svg
                    className={`w-6 h-6 text-cyan-400 transition-transform ${
                      expandedService === service.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-cyan-300 mb-3">{service.subtitle}</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>

                {expandedService === service.id && (
                  <div className="mt-6 pt-6 border-t border-cyan-400/20 space-y-3">
                    <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
                      Cosa è incluso
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-gray-300"
                        >
                          <span className="text-cyan-400 font-bold flex-shrink-0">
                            ✓
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Detailed Section */}
        {activeService && (
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl border border-cyan-400/20 p-12 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  {activeService.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  {activeService.description}
                </p>
                <a
                  href="#contatti"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                >
                  Scopri di Più
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {activeService.features.map((feature, i) => (
                  <div
                    key={i}
                    className="bg-slate-800/50 border border-cyan-400/20 rounded-lg p-4 hover:border-cyan-400/50 transition-all"
                  >
                    <p className="text-sm font-semibold text-cyan-400">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl border border-cyan-400/20 p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Non Sai Quale Servizio Fa al Caso Tuo?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Contattaci e analizzeremo insieme la situazione della tua attività per capire da dove iniziare.
          </p>
          <a
            href="#contatti"
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            📧 Contattaci Oggi
          </a>
        </div>
      </div>
    </section>
  );
}
