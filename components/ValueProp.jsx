'use client';

import { BRAND } from '@/lib/constants';
import { Zap, Target, Smartphone, Search, Lock, Headphones } from 'lucide-react';

export default function ValueProp() {
  const values = [
    {
      icon: Zap,
      title: 'Velocità Garantita',
      description: 'Siti web che caricano in meno di 1 secondo. Google ti premia, i clienti restano.',
    },
    {
      icon: Target,
      title: 'Focus Conversioni',
      description: 'Ogni elemento è studiato per trasformare i visitatori in contatti reali per il tuo locale.',
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Il 95% dei tuoi clienti naviga da smartphone. Il sito è perfetto su tutti i device.',
    },
    {
      icon: Search,
      title: 'SEO Locale',
      description: 'Appari nei risultati di Google quando i tuoi clienti cercano servizi a Verona.',
    },
    {
      icon: Lock,
      title: 'Sicurezza SSL',
      description: 'Certificato SSL incluso. I dati dei tuoi clienti sono protetti al 100%.',
    },
    {
      icon: Headphones,
      title: 'Support 24/7',
      description: 'Problemi? Aggiornamenti? Siamo qui per te. Sempre.',
    },
  ];

  return (
    <section id="chi-siamo" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Perché Scegliere {BRAND.name}
          </h2>
          <p className="text-xl text-gray-300">
            Non siamo una semplice agenzia web. Siamo il partner che trasforma il tuo business con tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
