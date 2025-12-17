'use client';

import { SERVICES } from '@/lib/constants';

export default function Services() {
  return (
    <section id="servizi" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold mb-6">I Nostri Servizi</h2>
          <p className="text-xl text-gray-300">
            Soluzioni complete per far crescere il tuo business online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id} 
              className="bg-slate-700 border border-slate-600 rounded-lg p-8 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 hover:translate-y-[-4px] transition-all"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3 text-gray-400">
                    <span className="text-cyan-400">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <a href="#contatti" className="inline-block mt-6 text-cyan-400 hover:text-cyan-300 font-semibold">
                Scopri di più →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
