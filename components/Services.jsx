'use client';

import { useState } from 'react';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { MotionWrapper } from '@/components/ui/MotionWrapper';
import { motion, AnimatePresence } from 'framer-motion';

const SERVICES = [
  {
    id: 'siti-web',
    index: '01',
    icon: '🌐',
    title: 'Siti Web Professionali',
    subtitle: 'Vetrina Digitale ad Alte Prestazioni',
    description:
      'Ingegneria web focalizzata sulla conversione. Trasformiamo i visitatori in clienti reali con una piattaforma veloce e intuitiva.',
    improvements: [
      'Velocità di caricamento estrema (<1s)',
      'Ottimizzazione SEO nativa',
      'Architettura mobile-first',
      'Design che ispira credibilità'
    ],
    includes: [
      'Design personalizzato',
      'Hosting & Dominio incluso',
      'Certificato SSL (Sicurezza)',
      'Assistenza tecnica 12 mesi'
    ]
  },
  {
    id: 'ecommerce',
    index: '02',
    icon: '🛒',
    title: 'E-commerce & Business',
    subtitle: 'La Tua Macchina di Vendita 24/7',
    description:
      'Piattaforme robuste e scalabili per gestire vendite, pagamenti e inventario senza complicazioni tecniche.',
    improvements: [
      'Sistemi di pagamento sicuri',
      'Gestione ordini semplificata',
      'Automazione email marketing',
      'Analytics di vendita avanzati'
    ],
    includes: [
      'Configurazione carrello',
      'Inserimento primi 50 prodotti',
      'Training all\'uso gestionale',
      'Sincronizzazione Facebook/IG'
    ]
  },
  {
    id: 'seo',
    index: '03',
    icon: '📊',
    title: 'SEO & Growth Strategy',
    subtitle: 'Domina le Ricerche a Verona',
    description:
      'Posizionamento strategico per essere la prima scelta quando i tuoi clienti cercano i tuoi servizi su Google.',
    improvements: [
      'Primi posti su Google Maps',
      'Ricerca keyword strategica',
      'Ottimizzazione contenuti locale',
      'Monitoraggio ranking mensile'
    ],
    includes: [
      'Audit SEO completo',
      'Ottimizzazione schede GMB',
      'Blog Marketing (2 art/mese)',
      'Analisi competitor trimestrale'
    ]
  },
  {
    id: 'branding',
    index: '04',
    icon: '🎨',
    title: 'Brand Identity',
    subtitle: 'L\'Immagine del Tuo Successo',
    description:
      'Creiamo un\'identità visiva potente che comunica professionalità e ti distingue nettamente dalla concorrenza.',
    improvements: [
      'Logo e Design esclusivo',
      'Coerenza visiva su ogni canale',
      'Comunicazione di valore',
      'Posizionamento di fascia alta'
    ],
    includes: [
      'Restyling o nuovo Logo',
      'Palette colori & Font set',
      'Modelli Social pronti all\'uso',
      'Biglietti da visita & Grafica'
    ]
  },
];

export default function Services() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="servizi"
      className="relative py-32 px-6 bg-slate-900 overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-25">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-24 space-y-4">
          <MotionWrapper>
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-bold text-[10px] uppercase tracking-[0.3em]">
              Strategic Solutions
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
              I Nostri <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Servizi</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mt-6">
              Esplora le nostre soluzioni ingegneristiche pensate per scalare il tuo business nell'era digitale.
            </p>
          </MotionWrapper>
        </div>

        {/* Services Stack (Accordion Style) */}
        <div className="space-y-6">
          {SERVICES.map((service, index) => {
            const isExpanded = expandedId === service.id;

            return (
              <MotionWrapper
                key={service.id}
                id={service.id}
                delay={index * 0.1}
                className="w-full"
              >
                <SpotlightCard
                  onClick={() => toggleExpand(service.id)}
                  className={`relative w-full border-slate-800/50 hover:border-cyan-500/40 transition-all duration-500 bg-slate-900/50 backdrop-blur-md group cursor-pointer overflow-hidden ${isExpanded ? 'border-cyan-500/50 ring-1 ring-cyan-500/20' : ''}`}
                >
                  <div className="p-8 md:p-10">
                    {/* Header of the Card */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700/50 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:border-cyan-400/30 transition-all duration-500">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-[9px] font-bold text-cyan-400/60 uppercase tracking-[0.2em] mt-0.5">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="hidden md:block text-[10px] font-mono text-white/20 tracking-widest uppercase">
                          Ref. {service.index}
                        </div>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          className="text-cyan-400 text-xl"
                        >
                          ↓
                        </motion.div>
                      </div>
                    </div>

                    {/* Expandable Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-10 mt-10 border-t border-slate-800/50">
                            <p className="text-gray-400 leading-relaxed text-lg font-light mb-12 max-w-3xl">
                              {service.description}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                              {/* Improvements List */}
                              <div>
                                <p className="text-[10px] font-black text-cyan-400/60 uppercase tracking-[0.3em] mb-6">
                                  Perché Funziona
                                </p>
                                <ul className="space-y-4">
                                  {service.improvements.map((improvement, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300 group-hover:text-white transition-colors">
                                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/40 group-hover:bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.4)] transition-all" />
                                      {improvement}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Includes List */}
                              <div>
                                <p className="text-[10px] font-black text-blue-400/60 uppercase tracking-[0.3em] mb-6">
                                  Cosa Include
                                </p>
                                <ul className="space-y-4">
                                  {service.includes.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300 group-hover:text-white transition-colors">
                                      <span className="text-blue-400/60 group-hover:text-blue-400 transition-colors font-bold text-xs select-none">+</span>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={(e) => {
                                e.stopPropagation();
                                document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' });
                              }}
                              className="mt-14 px-8 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 font-bold text-xs uppercase tracking-[0.2em] hover:bg-cyan-500/20 transition-all flex items-center gap-3 group/btn"
                            >
                              Inizia il Progetto
                              <span className="text-lg group-hover/btn:translate-x-1 transition-transform">→</span>
                            </motion.button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Corner markers visible on hover */}
                  {!isExpanded && (
                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-2 h-2 border-t border-r border-cyan-500/50" />
                    </div>
                  )}
                </SpotlightCard>
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
