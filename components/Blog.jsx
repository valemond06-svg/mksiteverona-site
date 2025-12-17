'use client';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Come un sito web aumenta le prenotazioni del tuo ristorante',
      slug: 'sito-web-ristorante-prenotazioni',
      excerpt: 'Scopri come i nostri clienti ristoratori hanno raddoppiato le prenotazioni online in 3 mesi.',
      content: `
        <h2>Il Potere di un Sito Web Professionale per Ristoranti</h2>
        
        <p>Nel 2024, il 85% dei clienti cerca ristoranti online prima di prenotare. Se il tuo ristorante non ha una presenza web forte, stai perdendo clienti.</p>
        
        <h3>I 5 Elementi Essenziali</h3>
        
        <ol>
          <li><strong>Menù Digitale Aggiornato</strong> - I clienti devono vedere cosa offri, con prezzi chiari.</li>
          <li><strong>Sistema di Prenotazioni Online</strong> - Riduce le chiamate telefoniche e aumenta le conversioni.</li>
          <li><strong>Foto di Alta Qualità</strong> - Le immagini appetitose aumentano le prenotazioni del 30%.</li>
          <li><strong>Google Maps Ottimizzato</strong> - Deve apparire nei risultati locali con orari, reviews, foto.</li>
          <li><strong>Mobile Responsive</strong> - Il 95% delle ricerche avviene da smartphone.</li>
        </ol>
        
        <h3>Case Study: Ristorante "Da Marco"</h3>
        
        <p>Marco aveva un ristorante bellissimo ma nessun sito. In 2 mesi dal lancio della sua nuova presenza web:</p>
        <ul>
          <li>+35% prenotazioni online</li>
          <li>+50% visibilità su Google Maps</li>
          <li>Eliminato il calo di clienti nei giorni feriali</li>
        </ul>
        
        <p><strong>Risultato:</strong> In un anno, il sito gli ha portato €30.000 di ricavi aggiuntivi.</p>
      `,
      date: '17 Dic 2024',
      readTime: '8 min',
    },
    {
      id: 2,
      title: 'SEO Locale: Come Dominare le Ricerche a Verona',
      slug: 'seo-locale-verona-google',
      excerpt: 'Guida completa per apparire nei primi 3 risultati di Google quando cercano "siti web Verona".',
      content: `
        <h2>SEO Locale: Il Segreto per Dominare la Tua Città</h2>
        
        <p>La SEO locale non è opzionale per le attività a Verona. Se non appari nei primi 3 risultati per "bar a Verona" o "parrucchiere centro", stai regalando clienti ai tuoi competitor.</p>
        
        <h3>Come Google Decide il Ranking Locale</h3>
        
        <p>Google usa 3 fattori principali:</p>
        <ol>
          <li><strong>Rilevanza</strong> - Il tuo sito parla del servizio che offri</li>
          <li><strong>Distanza</strong> - Quanto sei vicino al cliente</li>
          <li><strong>Popolarità</strong> - Quante persone parlano di te online</li>
        </ol>
        
        <h3>Le 7 Strategie che Funzionano</h3>
        
        <ul>
          <li>✓ <strong>Google My Business Perfetto</strong> - Completo al 100%, foto, video, orari aggiornati</li>
          <li>✓ <strong>Parole Chiave Locali</strong> - "Parrucchiera a Verona centro" non "Parrucchiera"</li>
          <li>✓ <strong>Citazioni Locali</strong> - Comparire su siti di directory locali</li>
          <li>✓ <strong>Backlink Locali</strong> - Link da siti veronesi (Chamber of Commerce, associazioni)</li>
          <li>✓ <strong>Recensioni Authentic</strong> - Almeno 20 recensioni a 4+ stelle</li>
          <li>✓ <strong>Schema Structured Data</strong> - Indicare indirizzo, telefono, orari nel codice</li>
          <li>✓ <strong>Pagine Location-Specific</strong> - Se hai più sedi, pagine dedicate per ognuna</li>
        </ul>
        
        <h3>Risultati Reali</h3>
        
        <p>I nostri clienti che seguono questa strategia vedono mediamente:</p>
        <ul>
          <li>+60% traffico da ricerche locali in 6 mesi</li>
          <li>+40% prenotazioni/contatti</li>
          <li>Posizionamento nei "3 pack" di Google Maps</li>
        </ul>
      `,
      date: '14 Dic 2024',
      readTime: '10 min',
    },
    {
      id: 3,
      title: 'Sito Web vs Social Media: Cosa Scegliere (Spoiler: Entrambi)',
      slug: 'sito-web-vs-social-media',
      excerpt: 'La verità che nessuno ti dice: non è uno o l\'altro, ma come usarli insieme per crescere.',
      content: `
        <h2>Il Dibattito Falso: Sito Web O Social Media?</h2>
        
        <p>Molti dicono: "A che mi serve un sito se ho Instagram?" Sbagliato. Ecco perché.</p>
        
        <h3>Sito Web: I Tuoi Veri Vantaggi</h3>
        
        <ul>
          <li><strong>Proprietà</strong> - Instagram può chiudere il tuo account. Il sito è sempre tuo.</li>
          <li><strong>SEO</strong> - Google non indicizza bene Instagram. Un sito appare nei risultati di ricerca.</li>
          <li><strong>Conversioni</strong> - Su Instagram vendi con difficoltà. Su un sito con un form, vendi.</li>
          <li><strong>Credibilità</strong> - Un sito professionale = professionista affidabile.</li>
          <li><strong>Analytics</strong> - Vedi esattamente chi visita, da dove, cosa fa.</li>
        </ul>
        
        <h3>Social Media: I Tuoi Veri Vantaggi</h3>
        
        <ul>
          <li><strong>Community</strong> - Costruisci una relazione con i tuoi clienti.</li>
          <li><strong>Viralità</strong> - Un post può raggiungere 10.000 persone gratis.</li>
          <li><strong>Content Facile</strong> - Non serve un designer, basta uno smartphone.</li>
          <li><strong>Engagement Immediato</strong> - Commenti, like, condivisioni in tempo reale.</li>
        </ul>
        
        <h3>La Strategia Vincente: Usarli Insieme</h3>
        
        <p><strong>Flusso Ideale:</strong></p>
        <ol>
          <li>Instagram attira i clienti interessati con contenuti virali</li>
          <li>Link nel bio → Sito web</li>
          <li>Nel sito, form di contatto, catalogo, SEO</li>
          <li>Converti i visitatori in clienti veri</li>
        </ol>
        
        <p><strong>Esempio:</strong> Post su Instagram "Come scegliere il parrucchiere perfetto" → Link al sito → Articolo completo (SEO) → Form di prenotazione → Cliente convertito.</p>
        
        <h3>I Numeri</h3>
        
        <p>Le aziende che usano sito + social insieme vedono:</p>
        <ul>
          <li>+200% traffic totale</li>
          <li>+150% lead generation</li>
          <li>+3x ROI rispetto a chi usa solo social</li>
        </ul>
        
        <p><strong>Conclusione:</strong> Non è "sito web O social", è "sito web E social". Il primo genera clienti. Il secondo crea comunità.</p>
      `,
      date: '10 Dic 2024',
      readTime: '7 min',
    },
  ];

  const [selectedPost, setSelectedPost] = require('react').useState(null);

  if (selectedPost) {
    return (
      <section className="py-20 bg-slate-800 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <button
            onClick={() => setSelectedPost(null)}
            className="mb-8 px-4 py-2 text-cyan-400 hover:text-cyan-300 flex items-center gap-2"
          >
            ← Torna al Blog
          </button>

          <article>
            <h1 className="text-4xl font-bold mb-4 text-white">{selectedPost.title}</h1>
            <div className="flex gap-6 text-gray-400 text-sm mb-8">
              <span>{selectedPost.date}</span>
              <span>{selectedPost.readTime}</span>
            </div>

            <div 
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ 
                __html: selectedPost.content.replace(/\n/g, '').replace(/<h2>/g, '<h2 style="font-size: 2rem; margin-top: 2rem; margin-bottom: 1rem; color: #fff;">').replace(/<h3>/g, '<h3 style="font-size: 1.5rem; margin-top: 1.5rem; margin-bottom: 0.5rem; color: #50d3e3;">').replace(/<p>/g, '<p style="color: #d1d5db; margin-bottom: 1rem; line-height: 1.8;">').replace(/<li>/g, '<li style="color: #d1d5db; margin-left: 1.5rem; margin-bottom: 0.5rem;">').replace(/<ol>/g, '<ol style="margin: 1rem 0;">').replace(/<ul>/g, '<ul style="margin: 1rem 0;">')
              }}
            />
          </article>

          <div className="mt-16 pt-8 border-t border-slate-700">
            <h3 className="text-2xl font-bold mb-8 text-white">Più Articoli nel Blog</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.filter(p => p.id !== selectedPost.id).map((post) => (
                <article 
                  key={post.id} 
                  className="bg-slate-700 border border-slate-600 rounded-lg p-8 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-pointer"
                  onClick={() => setSelectedPost(post)}
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

                  <span className="inline-block text-cyan-400 hover:text-cyan-300 font-semibold">
                    Leggi l'articolo →
                  </span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold mb-6">Blog & Risorse</h2>
          <p className="text-xl text-gray-300">
            Guide pratiche e strategie per far crescere il tuo business online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-slate-700 border border-slate-600 rounded-lg p-8 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-pointer"
              onClick={() => setSelectedPost(post)}
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

              <span className="inline-block text-cyan-400 hover:text-cyan-300 font-semibold">
                Leggi l'articolo →
              </span>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-cyan-400 to-blue-400 bg-opacity-10 border border-cyan-400 border-opacity-30 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Ricevi i nostri articoli via email
          </h3>
          <p className="text-gray-300 mb-6">
            Tips, strategie e case studies direttamente nella tua inbox. Una email a settimana.
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
