import Link from 'next/link';
import { BLOG_POSTS_DATA } from '@/components/Blog';

const BLOG_CONTENT = {
  'sito-web-ristorante': {
    title: 'Come un sito web aumenta le prenotazioni del tuo ristorante',
    date: '15 Dicembre 2024',
    category: 'Web Design',
    readTime: 8,
    body: [
      { type: 'h2', text: 'Introduzione' },
      {
        type: 'p',
        text:
          'Un sito web professionale è oggi essenziale per qualsiasi ristorante che voglia riempire i tavoli in modo costante.',
      },
      {
        type: 'p',
        text:
          'Con un sito veloce, chiaro e con prenotazione online, molti locali vedono crescere le prenotazioni del 40–80%.',
      },
      { type: 'h2', text: 'Perché un sito web?' },
      {
        type: 'p',
        text:
          'Il 89% dei clienti cerca i ristoranti online. Se non ci sei, perdi clienti automaticamente.',
      },
    ],
  },
  'seo-locale-verona': {
    title: 'SEO Locale: Come Dominare le Ricerche a Verona',
    date: '12 Dicembre 2024',
    category: 'SEO',
    readTime: 10,
    body: [
      { type: 'h2', text: 'Introduzione' },
      {
        type: 'p',
        text:
          'La SEO locale ti permette di comparire quando le persone cercano servizi come i tuoi vicino a Verona.',
      },
      {
        type: 'p',
        text:
          'Ottimizzando sito e Google Business Profile puoi portare molti più contatti qualificati.',
      },
      { type: 'h2', text: 'Google My Business' },
      {
        type: 'p',
        text:
          'Il primo passo è ottimizzare il tuo profilo GMB con foto, categorie corrette e descrizione ricca.',
      },
    ],
  },
  'ecommerce-vs-vetrina': {
    title: 'E-commerce vs Sito Vetrina: Quale Scegliere?',
    date: '8 Dicembre 2024',
    category: 'Strategie',
    readTime: 6,
    body: [
      { type: 'h2', text: 'Introduzione' },
      {
        type: 'p',
        text:
          'Non tutti i business hanno bisogno di un e‑commerce. In molti casi un sito vetrina ben fatto è più che sufficiente.',
      },
      {
        type: 'p',
        text:
          'La scelta dipende da cosa vendi, dal budget e da quanto tempo puoi dedicare alla gestione.',
      },
      { type: 'h2', text: 'Sito Vetrina' },
      {
        type: 'p',
        text:
          'Perfetto per ristoranti, parrucchieri, studi professionali. Costo basso, manutenzione semplice.',
      },
    ],
  },
  'errori-web-design': {
    title: '5 Errori Comuni nel Web Design che Perdono Clienti',
    date: '5 Dicembre 2024',
    category: 'Web Design',
    readTime: 7,
    body: [
      { type: 'h2', text: 'Introduzione' },
      {
        type: 'p',
        text:
          'Molti siti belli graficamente in realtà fanno scappare i clienti per piccoli errori di UX e contenuto.',
      },
      {
        type: 'p',
        text:
          'Correggere questi errori spesso porta subito più richieste di preventivo e contatti.',
      },
      { type: 'h2', text: 'Errore #1: Non è Mobile Responsive' },
      {
        type: 'p',
        text:
          'Il 58% del traffico viene da mobile. Se il sito non si vede bene, i visitatori se ne vanno.',
      },
    ],
  },
};

export default function BlogPost({ params }) {
  const { slug } = params;
  const post = BLOG_CONTENT[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Articolo Non Trovato
          </h1>
          <p className="text-gray-300 mb-8">
            Mi dispiace, questo articolo non esiste.
          </p>
          <Link
            href="/#blog"
            className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-bold rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Torna al Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Torna al Blog
        </Link>

        <div className="mb-12 space-y-4">
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full font-semibold">
              {post.category}
            </span>
            <span>{post.date}</span>
            <span>{post.readTime} min di lettura</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            {post.title}
          </h1>
        </div>

        <div className="text-gray-300 leading-relaxed space-y-6 mb-16">
          {post.body.map((block, i) => {
            if (block.type === 'h2') {
              return (
                <h2
                  key={i}
                  className="text-3xl font-bold text-white mt-10 mb-4"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'p') {
              return (
                <p key={i} className="text-gray-300">
                  {block.text}
                </p>
              );
            }
            return null;
          })}
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-400/20 p-12 text-center space-y-6">
          <h3 className="text-2xl font-bold text-white">
            Vuoi applicare queste strategie al tuo sito?
          </h3>
          <p className="text-gray-300">
            Contattaci per una consulenza gratuita e vediamo insieme come far
            crescere il tuo business online.
          </p>
          <a
            href="/#contatti"
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            Richiedi una Consulenza
          </a>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(BLOG_CONTENT).map((slug) => ({
    slug,
  }));
}
