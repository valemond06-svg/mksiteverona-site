import Link from 'next/link';

const BLOG_ARTICLES = {
  'sito-web-ristorante': {
    title: 'Come un sito web aumenta le prenotazioni del tuo ristorante',
    date: '15 Dicembre 2024',
    category: 'Web Design',
    readTime: 8,
    sections: [
      {
        type: 'h2',
        text: 'Introduzione',
      },
      {
        type: 'p',
        text: 'Negli ultimi anni, il settore della ristorazione ha subito una trasformazione digitale importante. Un sito web ben fatto non è più un lusso, ma una necessità per qualsiasi ristorante che voglia rimanere competitivo.',
      },
      {
        type: 'p',
        text: 'In questo articolo, ti mostreremo come un sito web professioniale può aumentare significativamente le prenotazioni del tuo ristorante.',
      },
      {
        type: 'h2',
        text: '1. Visibilità Online',
      },
      {
        type: 'h3',
        text: 'Perché è importante?',
      },
      {
        type: 'p',
        text: 'La maggior parte dei clienti cerca ristoranti online prima di visitarli. Se il tuo ristorante non ha una presenza web, stai perdendo opportunità di business.',
      },
      {
        type: 'h3',
        text: 'Statistiche:',
      },
      {
        type: 'ul',
        items: [
          '89% dei clienti cercano ristoranti su Google',
          '76% visita il sito prima di effettuare una prenotazione',
          '58% abbandona il ristorante se il sito non piace',
        ],
      },
      {
        type: 'h3',
        text: 'Come un sito web aiuta',
      },
      {
        type: 'ul',
        items: [
          'Posizionamento su Google Maps',
          'Visibilità nei risultati di ricerca',
          'Presenza professionale',
        ],
      },
      {
        type: 'h2',
        text: '2. Prenotazioni Online',
      },
      {
        type: 'h3',
        text: 'Il valore della prenotazione online',
      },
      {
        type: 'p',
        text: 'Una volta che i clienti trovano il tuo ristorante, devono poter prenotare facilmente. Un sito con sistema di prenotazione integrato:',
      },
      {
        type: 'ul',
        items: [
          'Aumenta le prenotazioni del 40%',
          'Riduce i costi di gestione telefonica',
          'Disponibilità 24/7',
        ],
      },
      {
        type: 'h3',
        text: 'Come implementarlo',
      },
      {
        type: 'ul',
        items: [
          'Integrazione con sistemi di prenotazione (es. Ristorapp, TableSpoon)',
          'Calendario disponibilità real-time',
          'Conferma automatica della prenotazione',
        ],
      },
      {
        type: 'h2',
        text: '3. Menu e Prezzi Visibili',
      },
      {
        type: 'h3',
        text: 'Trasparenza = Fiducia',
      },
      {
        type: 'p',
        text: 'Mostrare menu, prezzi e foto dei piatti:',
      },
      {
        type: 'ul',
        items: [
          'Attrae clienti che sanno cosa aspettarsi',
          'Riduce le cancellazioni di prenotazione',
          'Migliora la reputazione online',
        ],
      },
      {
        type: 'h2',
        text: 'Conclusione',
      },
      {
        type: 'p',
        text: 'Un sito web professionale non è una spesa, ma un investimento che si ripaga in pochi mesi. Se il tuo ristorante vuole crescere, è il momento di creare una presenza online forte.',
      },
      {
        type: 'p',
        text: 'Contattaci per una consulenza gratuita!',
      },
    ],
  },
  'seo-locale-verona': {
    title: 'SEO Locale: Come Dominare le Ricerche a Verona',
    date: '12 Dicembre 2024',
    category: 'SEO',
    readTime: 10,
    sections: [
      {
        type: 'h2',
        text: 'Introduzione',
      },
      {
        type: 'p',
        text: 'La SEO Locale è la strategia più efficace per far trovare il tuo business a clienti che cercano nella tua zona. Se sei un\'attività a Verona e vuoi apparire nei primi 3 risultati di Google, questo articolo è per te.',
      },
      {
        type: 'h2',
        text: '1. Cos\'è la SEO Locale?',
      },
      {
        type: 'p',
        text: 'La SEO Locale è l\'ottimizzazione del tuo sito web per posizionarsi nelle ricerche geografiche locali.',
      },
      {
        type: 'h3',
        text: 'Tre pilastri della SEO Locale:',
      },
      {
        type: 'ol',
        items: [
          'Ottimizzazione On-Page',
          'Google My Business',
          'Backlink e Menzioni Locali',
        ],
      },
      {
        type: 'h2',
        text: '2. Google My Business: Il Fondamento',
      },
      {
        type: 'h3',
        text: 'Perché è cruciale?',
      },
      {
        type: 'p',
        text: 'Il 76% delle persone che cercano un business locale su mobile visita il negozio entro 24 ore.',
      },
      {
        type: 'h3',
        text: 'Come ottimizzarlo:',
      },
      {
        type: 'ul',
        items: [
          'Categorie corrette e specifiche',
          'Descrizione completa e ricca di keyword',
          'Foto professionali (minimo 10)',
          'Indirizzo e numero di telefono verificati',
          'Orari di apertura aggiornati',
        ],
      },
      {
        type: 'h2',
        text: 'Conclusione',
      },
      {
        type: 'p',
        text: 'La SEO Locale è cruciale per le attività locali. Implementa questi passaggi e vedrai i risultati in pochi mesi.',
      },
    ],
  },
  'ecommerce-vs-vetrina': {
    title: 'E-commerce vs Sito Vetrina: Quale Scegliere?',
    date: '8 Dicembre 2024',
    category: 'Strategie',
    readTime: 6,
    sections: [
      {
        type: 'h2',
        text: 'Introduzione',
      },
      {
        type: 'p',
        text: 'Uno dei dubbi più comuni è: "Devo fare un e-commerce o basta un sito vetrina?" In questo articolo, ti aiutiamo a capire quale soluzione è più adatta al tuo business.',
      },
      {
        type: 'h2',
        text: 'Sito Vetrina: Caratteristiche',
      },
      {
        type: 'h3',
        text: 'Cosa è un sito vetrina?',
      },
      {
        type: 'p',
        text: 'Un sito che presenta i tuoi prodotti/servizi senza permettere l\'acquisto online.',
      },
      {
        type: 'h3',
        text: 'Vantaggi:',
      },
      {
        type: 'ul',
        items: [
          'Costo minore (€300-€1.000)',
          'Facile da mantenere',
          'Velocità di caricamento ottima',
          'Ideale per servizi',
        ],
      },
      {
        type: 'h3',
        text: 'Perfetto per:',
      },
      {
        type: 'ul',
        items: [
          'Parrucchieri',
          'Studi professionali',
          'Ristoranti',
          'Agenzie di servizi',
        ],
      },
      {
        type: 'h2',
        text: 'E-commerce: Caratteristiche',
      },
      {
        type: 'h3',
        text: 'Cosa è un e-commerce?',
      },
      {
        type: 'p',
        text: 'Una piattaforma completa per la vendita online di prodotti.',
      },
      {
        type: 'h3',
        text: 'Vantaggi:',
      },
      {
        type: 'ul',
        items: [
          'Vendite 24/7',
          'Scalabilità infinita',
          'Analitiche dettagliate',
          'Ritenzione clienti migliore',
        ],
      },
      {
        type: 'h2',
        text: 'Conclusione',
      },
      {
        type: 'p',
        text: 'Scegli il sito vetrina se sei un servizio e vuoi generare contatti qualificati. Scegli l\'e-commerce se hai prodotti da vendere e vuoi fatturare online.',
      },
    ],
  },
  'errori-web-design': {
    title: '5 Errori Comuni nel Web Design che Perdono Clienti',
    date: '5 Dicembre 2024',
    category: 'Web Design',
    readTime: 7,
    sections: [
      {
        type: 'h2',
        text: 'Introduzione',
      },
      {
        type: 'p',
        text: 'Un sito web con errori di design non solo riduce l\'engagement, ma allontana i clienti. Scopri i 5 errori più comuni e come evitarli.',
      },
      {
        type: 'h2',
        text: 'Errore #1: Design Non Responsive',
      },
      {
        type: 'h3',
        text: 'Il problema',
      },
      {
        type: 'p',
        text: 'Il 58% del traffico web viene da mobile. Se il tuo sito non è mobile-friendly, perdi la maggior parte dei clienti.',
      },
      {
        type: 'h3',
        text: 'Come evitarlo:',
      },
      {
        type: 'ul',
        items: [
          'Design mobile-first',
          'Test su 5+ dispositivi',
          'Velocità di caricamento mobile <3 secondi',
        ],
      },
      {
        type: 'h2',
        text: 'Errore #2: Call-to-Action Poco Visibile',
      },
      {
        type: 'h3',
        text: 'Il problema',
      },
      {
        type: 'p',
        text: 'Se il visitatore non sa cosa fare, se ne va.',
      },
      {
        type: 'h3',
        text: 'Come evitarlo:',
      },
      {
        type: 'ul',
        items: [
          'CTA button visibile e cliccabile',
          'Colori che contrastano',
          'Testo persuasivo',
        ],
      },
      {
        type: 'h2',
        text: 'Errore #3: Velocità di Caricamento',
      },
      {
        type: 'h3',
        text: 'Il problema',
      },
      {
        type: 'p',
        text: 'Il 40% dei visitatori abbandona un sito che impiega più di 3 secondi a caricare.',
      },
      {
        type: 'h3',
        text: 'Come evitarlo:',
      },
      {
        type: 'ul',
        items: [
          'Ottimizzazione immagini',
          'Lazy loading',
          'Minify CSS/JS',
          'CDN globale',
        ],
      },
      {
        type: 'h2',
        text: 'Conclusione',
      },
      {
        type: 'p',
        text: 'Un sito ben fatto non deve essere complicato. Ricorda questi 5 punti e il tuo sito convertirà molto meglio.',
      },
    ],
  },
};

export default function ArticlePage({ params }) {
  const { slug } = params;
  const article = BLOG_ARTICLES[slug];

  if (!article) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Articolo Non Trovato</h1>
          <p className="text-gray-300 mb-8">Mi dispiace, questo articolo non esiste.</p>
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
        {/* Back Button */}
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Torna al Blog
        </Link>

        {/* Article Header */}
        <div className="mb-12 space-y-4">
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full font-semibold">
              {article.category}
            </span>
            <span>{article.date}</span>
            <span>{article.readTime} min di lettura</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 pt-6 border-t border-slate-700">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center">
              <span className="text-white font-bold">MK</span>
            </div>
            <div>
              <p className="font-semibold text-white">MKSITE Verona</p>
              <p className="text-gray-400 text-sm">Agenzia Web Verona</p>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="text-gray-300 leading-relaxed space-y-6 mb-16">
          {article.sections.map((section, idx) => {
            if (section.type === 'h2') {
              return (
                <h2 key={idx} className="text-3xl font-bold text-white mt-12 mb-6">
                  {section.text}
                </h2>
              );
            }
            if (section.type === 'h3') {
              return (
                <h3 key={idx} className="text-2xl font-bold text-cyan-400 mt-8 mb-4">
                  {section.text}
                </h3>
              );
            }
            if (section.type === 'p') {
              return (
                <p key={idx} className="text-gray-300">
                  {section.text}
                </p>
              );
            }
            if (section.type === 'ul') {
              return (
                <ul key={idx} className="space-y-2 ml-6">
                  {section.items.map((item, i) => (
                    <li key={i} className="list-disc text-gray-300">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            if (section.type === 'ol') {
              return (
                <ol key={idx} className="space-y-2 ml-6">
                  {section.items.map((item, i) => (
                    <li key={i} className="list-decimal text-gray-300">
                      {item}
                    </li>
                  ))}
                </ol>
              );
            }
            return null;
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-400/20 p-12 text-center space-y-6">
          <h3 className="text-2xl font-bold text-white">
            Pronto a Crescere il Tuo Business?
          </h3>
          <p className="text-gray-300">
            Se questo articolo ti ha aiutato, contattaci per scoprire come possiamo aiutare il tuo business a crescere online.
          </p>
          <a
            href="/#contatti"
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            Richiedi una Consulenza Gratuita
          </a>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(BLOG_ARTICLES).map((slug) => ({
    slug,
  }));
}
