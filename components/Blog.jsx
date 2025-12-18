'use client';

import { useState } from 'react';
import Link from 'next/link';

const BLOG_POSTS = [
  {
    slug: 'sito-web-ristorante',
    title: 'Come un sito web aumenta le prenotazioni del tuo ristorante',
    excerpt: 'Scopri come i nostri clienti ristoratori hanno raddoppiato le prenotazioni online in 3 mesi.',
    readTime: 8,
    category: 'Web Design',
  },
  {
    slug: 'seo-locale-verona',
    title: 'SEO Locale: Come Dominare le Ricerche a Verona',
    excerpt: 'Guida completa per apparire nei primi risultati di Google quando cercano "siti web Verona".',
    readTime: 10,
    category: 'SEO',
  },
  {
    slug: 'ecommerce-vs-vetrina',
    title: 'E-commerce vs Sito Vetrina: Quale Scegliere?',
    excerpt: 'Analisi chiara per capire se ti serve un e-commerce completo o un semplice sito vetrina.',
    readTime: 6,
    category: 'Strategie',
  },
  {
    slug: 'errori-web-design',
    title: '5 Errori Comuni nel Web Design che Perdono Clienti',
    excerpt: 'Gli errori più frequenti che fanno scappare i visitatori e come evitarli.',
    readTime: 7,
    category: 'Web Design',
  },
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = BLOG_POSTS.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="blog" className="relative py-20 px-6 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Blog & Risorse
          </h2>
          <p className="text-xl text-gray-300">
            Guide pratiche e strategie per far crescere il tuo business online.
          </p>
        </div>

        <div className="mb-12 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Cerca articoli..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 bg-slate-700 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-300"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filtered.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="group h-full cursor-pointer bg-gradient-to-br from-slate-700/50 to-slate-700/30 rounded-2xl border border-cyan-400/20 p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2">
                <div className="inline-block mb-6 px-3 py-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full">
                  <span className="text-sm font-bold text-white">
                    {post.readTime} min
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-300 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-600">
                  <span className="text-sm text-gray-400">{post.category}</span>
                  <span className="text-cyan-400 font-semibold group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-2">
                    Leggi l&apos;articolo
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

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              Nessun articolo trovato per &quot;{searchTerm}&quot;
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export const BLOG_POSTS_DATA = BLOG_POSTS;
