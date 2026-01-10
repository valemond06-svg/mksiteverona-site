'use client';

import { BRAND } from '@/lib/constants';
import { Zap, Target, Smartphone, Search, BarChart3 } from 'lucide-react';

export default function ValueProp() {
  const values = [
    {
      icon: Zap,
      title: 'Siti Web Velocissimi e Ottimizzati',
      description: 'Le performance sono nel nostro DNA. Sviluppiamo siti con tempi di caricamento record, fondamentali per scalare le posizioni SEO su Google e offrire un’esperienza utente (UX) impeccabile che riduce il tasso di abbandono.',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First e Responsive',
      description: 'Ogni progetto è studiato per una visualizzazione perfetta su ogni dispositivo. La navigazione da smartphone è oggi predominante: garantiamo un design fluido e intuitivo, cruciale per massimizzare le conversioni del tuo business.',
    },
    {
      icon: Search,
      title: 'SEO-Friendly Fin Da Subito',
      description: 'Non lasciamo nulla al caso. Ogni sito è ottimizzato per i motori di ricerca fin dal primo giorno, includendo keyword research strategica e contenuti strutturati per farti trovare dai tuoi clienti a Verona e provincia.',
    },
    {
      icon: Target,
      title: 'Supporto Locale a Verona',
      description: 'Siamo presenti sul territorio e conosciamo profondamente il mercato di Verona. Offriamo supporto continuativo e consulenza dedicata, diventando il partner digitale di fiducia per la crescita della tua impresa locale.',
    },
    {
      icon: BarChart3,
      title: 'Consegna Rapida e Prezzi Competitivi',
      description: 'Sappiamo che il tempo è denaro. Garantiamo tempi di consegna veloci e prezzi trasparenti studiati su misura per le PMI, assicurando un ROI (ritorno sull’investimento) positivo e immediato per la tua attività.',
    },
  ];

  return (
    <section id="chi-siamo" className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Perché le Aziende di Verona Ci Scelgono
          </h2>
          <p className="text-xl text-gray-300">
            Il tuo successo online nasce da un approccio strategico che unisce tecnologia d’avanguardia e conoscenza del mercato locale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="bg-slate-800 border border-slate-700 rounded-lg p-8 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all group"
            >
              <div className="mb-4 text-cyan-400 group-hover:scale-110 transition-transform">
                <value.icon size={40} />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
