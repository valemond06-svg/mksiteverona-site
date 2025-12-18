'use client';

import { useState } from 'react';
import Link from 'next/link';

const SERVICES = [
  {
    id: 1,
    title: 'Siti Web Professionali',
    description: 'Siti veloci, moderni e ottimizzati per convertire i tuoi clienti in vendite reali.',
    icon: '🌐',
    features: [
      'Design responsive',
      'SEO ottimizzato',
      'Velocità garantita',
      'Supporto incluso',
    ],
    href: '#contatti',
  },
  {
    id: 2,
    title: 'E-commerce & Shop Online',
    description: 'Soluzioni di vendita online per negozi, ristoranti e bar. Inizia a vendere in 48 ore.',
    icon: '🛒',
    features: [
      'Pagamenti sicuri',
      'Gestione inventario',
      'Spedizioni',
      'Analytics',
    ],
    href: '#contatti',
  },
  {
    id: 3,
    title: 'SEO & Marketing',
    description: 'Appari nei primi risultati di Google e attira clienti reali al tuo sito.',
    icon: '📊',
    features: [
      'Ricerca keyword',
      'Ottimizzazione on-page',
      'Link building',
      'Report mensili',
    ],
    href: '#contatti',
  },
  {
    id: 4,
    title: 'Branding & Design',
    description: 'Logo, colori e identità visiva che rispecchiano il tuo brand e attrae clienti.',
    icon: '🎨',
    features: [
      'Logo design',
      'Brand identity',
      'Linee guida',
      'Supporto design',
    ],
    href: '#contatti',
  },
];

export default function Services() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="servizi" className="relative py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            I Nostri Servizi
          </h2>
          <p className="text-xl text-gray-300">
            Soluzioni complete per far crescere il tuo business online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <Link key={service.id} href={service.href}>
              <div
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group h-full cursor-pointer bg-gradient-to-br from-slate-800/50 to-slate-700/30 rounded-2xl border border-cyan-400/20 p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <span className="text-cyan-400 font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Scopri di più
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <p className="text-4xl font-bold text-cyan-400">150+</p>
            <p className="text-gray-300">Progetti Completati</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-cyan-400">98%</p>
            <p className="text-gray-300">Clienti Soddisfatti</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-cyan-400">5 Anni</p>
            <p className="text-gray-300">Di Esperienza</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center space-y-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-400/20">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Pronto a Crescere?
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Contattaci oggi per una consulenza gratuita e scopri come possiamo trasformare il tuo business online.
          </p>
          <a
            href="#contatti"
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            Richiedi una Consulenza
          </a>
        </div>
      </div>
    </section>
  );
}
