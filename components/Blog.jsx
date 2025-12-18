'use client';

import { useState } from 'react';
import Link from 'next/link';

const BLOG_ARTICLES = [
  {
    id: 1,
    title: 'Come un sito web aumenta le prenotazioni del tuo ristorante',
    excerpt: 'Scopri come i nostri clienti ristoratori hanno raddoppiato le prenotazioni online in 3 mesi.',
    date: '8 min',
    slug: 'sito-web-ristorante',
    category: 'Web Design',
    readTime: 8,
  },
  {
    id: 2,
    title: 'SEO Locale: Come Dominare le Ricerche a Verona',
    excerpt: 'Guida completa per apparire nei primi 3 risultati di Google quando cercano "siti web Verona".',
    date: '10 min',
    slug: 'seo-locale-verona',
    category: 'SEO',
    readTime: 10,
  },
  {
    id: 3,
    title: 'E-commerce vs Sito Vetrina: Quale Scegliere?',
    excerpt: 'Analisi dettagliata per capire quale soluzione è più adatta al tuo business.',
    date: '6 min',
    slug: 'ecommerce-vs-vetrina',
    category: 'Strategie',
    readTime: 6,
  },
  {
    id: 4,
    title: '5 Errori Comuni nel Web Design che Perdono Clienti',
    excerpt: 'I 5 errori più frequenti che commettono i siti web e come evitarli.',
    date: '7 min',
    slug: 'errori-web-design',
    category: 'Web Design',
    readTime: 7,
  },
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = BLOG_ARTICLES.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="blog" className="relative py-20 px-6 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Blog & Risorse
          </h2>
          <p className="text-xl text-gray-300">
            Guide pratiche e strategie per far crescere il tuo business online.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Cerca articoli..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 bg-slate-700 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-300"
          />
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredArticles.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
            >
              <div className="group h-full cursor-pointer bg-gradient-to-br from-slate-700/50 to-slate-700/30 rounded-2xl border border-cyan-400/20 p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2">
                {/* Reading Time Badge */}
                <div className="inline-block mb-6 px-3 py-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full">
                  <span className="text-sm font-bold text-white">
                    {article.readTime} min
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 mb-6 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-600">
                  <span className="text-sm text-gray-400">{article.category}</span>
                  <span className="text-cyan-400 font-semibold group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-2">
                    Leggi l'articolo
                    <svg
                      className="w-4 h-4"
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
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              Nessun articolo trovato per "{searchTerm}"
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center space-y-6 mt-16">
          <h3 className="text-2xl font-bold text-white">
            Non trovi quello che cerchi?
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Contattaci per ricevere una consulenza personalizzata sulle migliori strategie per il tuo business.
          </p>
          <a
            href="#contatti"
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            Contattaci
          </a>
        </div>
      </div>
    </section>
  );
}
