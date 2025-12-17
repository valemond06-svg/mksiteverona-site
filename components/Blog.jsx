'use client';

import { BLOG_POSTS } from '@/lib/constants';

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold mb-6">Risorse & Blog</h2>
          <p className="text-xl text-gray-300">
            Guide pratiche per far crescere il tuo business online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {BLOG_POSTS.map((post, idx) => (
            <article 
              key={post.id} 
              className="bg-slate-700 border border-slate-600 rounded-lg p-8 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="inline-block px-3 py-1 bg-cyan-400 bg-opacity-10 text-cyan-400 rounded text-xs font-semibold">
                  {post.date}
                </span>
                <span className="text-sm text-gray-400">{post.readTime}</span>
              </div>

              <h3 className="text-xl font-bold mb-3 text-white hover:text-cyan-400 transition-colors">
                {post.title}
              </h3>

              <p className="text-gray-300 mb-6">{post.excerpt}</p>

              <a
                href={`#${post.slug}`}
                className="inline-block text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                Leggi l'articolo →
              </a>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-cyan-400 to-blue-400 bg-opacity-10 border border-cyan-400 border-opacity-30 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Ricevi le ultime novità sul web marketing
          </h3>
          <p className="text-gray-300 mb-6">
            Tips, strategie e case studies direttamente nella tua inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="La tua email..."
              className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
              Iscriviti
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
