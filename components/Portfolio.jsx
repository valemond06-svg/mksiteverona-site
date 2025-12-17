'use client';

import { PORTFOLIO_EXAMPLES } from '@/lib/constants';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold mb-6">I Nostri Lavori</h2>
          <p className="text-xl text-gray-300">
            Esempi concreti di come trasformiamo le idee in risultati reali.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_EXAMPLES.map((project, idx) => (
            <div 
              key={project.id} 
              className="bg-slate-800 border border-slate-700 rounded-lg p-8 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
            >
              <div className="text-6xl mb-4">{project.image}</div>
              
              <span className="inline-block px-3 py-1 bg-cyan-400 bg-opacity-10 text-cyan-400 rounded text-xs font-semibold mb-4">
                {project.category}
              </span>
              
              <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-6">{project.description}</p>

              <div className="bg-slate-900 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-400 mb-2">Risultati Ottenuti:</p>
                <div className="space-y-2">
                  {project.results.map((result, rIdx) => (
                    <div key={rIdx} className="flex items-center gap-2 text-cyan-300">
                      <span>→</span>
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a href="#contatti" className="inline-block text-cyan-400 hover:text-cyan-300 font-semibold">
                Scopri il progetto →
              </a>
            </div>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6">
            Vuoi un progetto personalizzato come questi?
          </p>
          <a href="#contatti" className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
            Contattaci Oggi 🎯
          </a>
        </div>
      </div>
    </section>
  );
}
