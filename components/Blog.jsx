'use client';

import { useState } from 'react';

const BLOG_POSTS = [
  {
    id: 'sito-web-ristorante',
    title: 'Come un sito web aumenta le prenotazioni del tuo ristorante',
    excerpt: 'Scopri come i nostri clienti ristoratori hanno raddoppiato le prenotazioni online in 3 mesi.',
    readTime: 8,
    category: 'Web Design',
    content: `
## Introduzione

Un sito web professionale è oggi essenziale per qualsiasi ristorante che voglia riempire i tavoli in modo costante.

Con un sito veloce, chiaro e con prenotazione online, molti locali vedono crescere le prenotazioni del 40–80%.

## Perché un sito web?

Il 89% dei clienti cerca i ristoranti online. Se non ci sei, perdi clienti automaticamente.

### I benefici concreti:
- Aumenti le prenotazioni online
- Mostri il menu e le specialità
- Raccogli recensioni positive
- Sei trovabile su Google Maps

## Come scegliere il sito giusto

Un buon sito deve avere:
- Design mobile-first
- Prenotazione online integrata
- Foto di qualità del locale e dei piatti
- Informazioni di contatto chiare

## Risultati garantiti

Con l'ottimizzazione corretta vedrai risultati in 2-3 mesi.
    `,
  },
  {
    id: 'seo-locale-verona',
    title: 'SEO Locale: Come Dominare le Ricerche a Verona',
    excerpt: 'Guida completa per apparire nei primi risultati di Google quando cercano "siti web Verona".',
    readTime: 10,
    category: 'SEO',
    content: `
## Introduzione

La SEO locale ti permette di comparire quando le persone cercano servizi come i tuoi vicino a Verona.

Ottimizzando sito e Google Business Profile puoi portare molti più contatti qualificati.

## Google My Business è fondamentale

Il primo passo è ottimizzare il tuo profilo GMB con:
- Foto di qualità
- Categorie corrette
- Descrizione ricca e dettagliata
- Orari aggiornati

## Keyword locali

Punta a parole chiave come:
- "siti web Verona"
- "web design Verona centro"
- "agenzie digitali provincia di Verona"

## Link locali

Crea link da siti locali affidabili:
- Camere di Commercio
- Directory locali
- Partner locali

## Monitoraggio

Usa Google Search Console per tracciare il posizionamento locale.
    `,
  },
  {
    id: 'ecommerce-vs-vetrina',
    title: 'E-commerce vs Sito Vetrina: Quale Scegliere?',
    excerpt: 'Analisi chiara per capire se ti serve un e-commerce completo o un semplice sito vetrina.',
    readTime: 6,
    category: 'Strategie',
    content: `
## Introduzione

Non tutti i business hanno bisogno di un e‑commerce. In molti casi un sito vetrina ben fatto è più che sufficiente.

La scelta dipende da cosa vendi, dal budget e da quanto tempo puoi dedicare alla gestione.

## Sito Vetrina

Perfetto per:
- Ristoranti
- Parrucchieri
- Studi professionali
- Agenzie

**Vantaggi:**
- Costo basso (€500-2000)
- Manutenzione semplice
- Fast to market

## E-commerce

Perfetto per:
- Negozi online
- Prodotti digitali
- Vendita diretta

**Vantaggi:**
- Vendite 24/7
- Statistiche dettagliate
- Scalabile

**Svantaggi:**
- Costo alto (€3000+)
- Complesso da gestire
- Manutenzione costante

## La scelta giusta

Se vendi servizi → Vetrina
Se vendi prodotti → E-commerce
    `,
  },
  {
    id: 'errori-web-design',
    title: '5 Errori Comuni nel Web Design che Perdono Clienti',
    excerpt: 'Gli errori più frequenti che fanno scappare i visitatori e come evitarli.',
    readTime: 7,
    category: 'Web Design',
    content: `
## Introduzione

Molti siti belli graficamente in realtà fanno scappare i clienti per piccoli errori di UX e contenuto.

Correggere questi errori spesso porta subito più richieste di preventivo e contatti.

## Errore #1: Non è Mobile Responsive

Il 58% del traffico viene da mobile. Se il sito non si vede bene, i visitatori se ne vanno.

**Soluzione:** Design mobile-first da subito.

## Errore #2: Call-to-Action poco visibile

Se il visitatore non sa cosa fare, se ne va dopo 5 secondi.

**Soluzione:** Bottoni grandi, colorati e persuasivi ("Richiedi Preventivo" non "Invia").

## Errore #3: Velocità di caricamento lenta

Il 40% dei visitatori abbandona un sito che impiega più di 3 secondi a caricare.

**Soluzione:** Ottimizzare immagini, lazy loading, minify CSS/JS.

## Errore #4: Contenuto poco chiaro

Se il visitatore non capisce subito cosa offri, se ne va dopo 5 secondi.

**Soluzione:** Titoli chiari, sottotitoli descrittivi, paragrafi brevi, bullet points.

## Errore #5: Design datato

Un sito del 2015 non ispira fiducia nei clienti moderni.

**Soluzione:** Design moderno, colori coerenti, tipografia leggibile.
    `,
  },
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(BLOG_POSTS[0].id);
  const [searchTerm, setSearchTerm] = useState('');

  const currentPost = BLOG_POSTS.find((post) => post.id === selectedPost);

  const filtered = BLOG_POSTS.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Renderizza il contenuto markdown
  const renderContent = (content) => {
    return content
      .split('\n')
      .filter((line) => line.trim())
      .map((line, i) => {
        if (line.startsWith('## ')) {
          return (
            <h2 key={i} className="text-2xl font-bold text-white mt-8 mb-4">
              {line.replace('## ', '')}
            </h2>
          );
        }
        if (line.startsWith('### ')) {
          return (
            <h3 key={i} className="text-xl font-semibold text-cyan-400 mt-6 mb-3">
              {line.replace('### ', '')}
            </h3>
          );
        }
        if (line.startsWith('- ')) {
          return (
            <li key={i} className="text-gray-300 ml-6 mb-2 flex items-start">
              <span className="text-cyan-400 mr-3">→</span>
              <span>{line.replace('- ', '')}</span>
            </li>
          );
        }
        return (
          <p key={i} className="text-gray-300 mb-4 leading-relaxed">
            {line}
          </p>
        );
      });
  };

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

        {/* Grid di articoli selezionabili */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filtered.map((post) => (
            <button
              key={post.id}
              onClick={() => setSelectedPost(post.id)}
              className={`text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                selectedPost === post.id
                  ? 'border-cyan-400 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 shadow-lg shadow-cyan-500/20'
                  : 'border-cyan-400/20 bg-slate-700/50 hover:border-cyan-400/50 hover:bg-slate-700/70'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full">
                  <span className="text-sm font-bold text-white">
                    {post.readTime} min
                  </span>
                </div>
                {selectedPost === post.id && (
                  <svg
                    className="w-6 h-6 text-cyan-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>

              <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                {post.title}
              </h3>

              <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                {post.excerpt}
              </p>

              <span className="text-xs text-gray-400">{post.category}</span>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              Nessun articolo trovato per &quot;{searchTerm}&quot;
            </p>
          </div>
        )}

        {/* Articolo selezionato */}
        {currentPost && filtered.some((p) => p.id === selectedPost) && (
          <div className="bg-gradient-to-br from-slate-700/50 to-slate-700/30 rounded-2xl border border-cyan-400/20 p-12 mt-12">
            <div className="flex items-center gap-4 mb-8 text-sm text-gray-400">
              <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full font-semibold">
                {currentPost.category}
              </span>
              <span>{currentPost.readTime} min di lettura</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight">
              {currentPost.title}
            </h1>

            <div className="prose prose-invert max-w-none space-y-4">
              {renderContent(currentPost.content)}
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-400/20 p-8 mt-12 text-center space-y-4">
              <h3 className="text-xl font-bold text-white">
                Pronto a far crescere il tuo business?
              </h3>
              <p className="text-gray-300">
                Contattaci per una consulenza gratuita e vediamo insieme come
                implementare queste strategie.
              </p>
              <a
                href="/#contatti"
                className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                Richiedi una Consulenza
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
