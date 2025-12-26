'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { MotionWrapper } from '@/components/ui/MotionWrapper';

const BLOG_POSTS = [
  {
    id: 'sito-web-che-vende',
    title: 'Come Creare un Sito Web che Converte Visitatori in Clienti',
    excerpt: 'Un sito web bello non è sufficiente. Scopri i fattori che determinano se il tuo sito genera risultati.',
    category: 'Web Design',
    readTime: '8 min',
    date: '23 Dic 2025',
    image: '🎨',
    slug: 'sito-web-che-vende',
    content: `# Come Creare un Sito Web che Converte Visitatori in Clienti

Un sito web bello non è sufficiente. La differenza tra un sito che genera risultati e uno che rimane invisibile sta nei dettagli.

## Perché la Maggior Parte dei Siti Non Converte

Se il tuo sito presenta anche uno di questi problemi:

- 📱 Carica lentamente (>3 secondi)
- 🔍 Non è ottimizzato per i motori di ricerca
- 📱 Non si vede bene da mobile
- 💬 Non ha chiari call-to-action
- 📊 Non hai dati su chi lo visita

...allora stai perdendo opportunità di business.

## I 5 Elementi Fondamentali di un Sito Efficace

### 1. Velocità di Caricamento

I visitatori abbandonano i siti che caricano lentamente. Un caricamento in meno di 2 secondi è uno standard moderno.

**Come migliorare**: Ottimizzare immagini, usare CDN, minificare CSS/JavaScript.

### 2. Design Responsive Mobile

Il 70%+ del traffico web arriva da dispositivi mobili. Se il tuo sito non è mobile-friendly, perdi la maggior parte dei visitatori.

**Come migliorare**: Design mobile-first, test su diversi dispositivi, layout flessibile.

### 3. SEO e Visibilità

Un sito bello che nessuno trova è invisibile. L'ottimizzazione per i motori di ricerca è essenziale.

**Come migliorare**: Ricerca keyword, ottimizzazione on-page, link building, meta tag corretti.

### 4. Messaggio Chiaro e Call-to-Action

I visitatori devono capire subito chi sei, cosa offri, e come contattarti. La confusione porta ad abbandoni.

**Come migliorare**: Hero section convince nte, CTA visibile, value proposition chiara.

### 5. Monitoraggio e Analytics

Non puoi migliorare ciò che non misuri. Google Analytics è essenziale per capire il comportamento dei visitatori.

**Come migliorare**: Implementare GA4, heatmap, form analytics, conversion tracking.

## Cosa Puoi Aspettarti da un Sito Professionale

Un sito web realizzato con attenzione ai principi di cui sopra solitamente porta:

- Aumento del traffico organico da motori di ricerca
- Tassi di conversione più alti (da visitatore a contatto/cliente)
- Migliore percezione del brand
- Dati concreti su quali pagine e contenuti funzionano
- Riduzione della frequenza di rimbalzo

## Come Iniziare

1. **Audit**: Analizza il tuo sito attuale su velocità, mobile, SEO
2. **Identifica i problemi**: Dove stai perdendo visitatori?
3. **Implementa miglioramenti**: Partendo dalle priorità

Un sito web non è una spesa, è un investimento in visibilità e credibilità.
`,
  },
  {
    id: 'seo-locale-strategie',
    title: 'SEO Locale: Come Farsi Trovare Online nella Tua Zona',
    excerpt: 'Strategie concrete per migliorare la visibilità locale e attirare clienti della tua zona geografica.',
    category: 'SEO',
    readTime: '10 min',
    date: '20 Dic 2025',
    image: '📍',
    slug: 'seo-locale-strategie',
    content: `# SEO Locale: Come Farsi Trovare Online nella Tua Zona

Se gestisci un'attività locale, il SEO locale è fondamentale. La maggior parte delle ricerche locali avviene da mobile e spesso i clienti cercano PRIMA di contattarti.

## Perché il SEO Locale È Importante

Google Maps è il primo posto dove le persone cercano aziende locali. Se non sei visibile lì, i tuoi concorrenti hanno un vantaggio enorme.

## I Pilastri del SEO Locale

### 1. Google My Business Ottimizzato

Il tuo profilo GMB è la base della visibilità locale.

**Elementi essenziali**:

- Foto professionali del tuo business
- Descrizione completa e informativa
- Aggiornamenti regolari (post settimanali)
- Gestione delle recensioni (rispondi sempre)
- Orari accurati e aggiornati

### 2. Ricerca Keyword Locale

Non tutte le keyword valgono allo stesso modo. Devi targetizzare ricerche che hanno intenzione d'acquisto.

**Esempio di keyword buone**:

- "[Servizio] + [Città]" (es. "Idraulico Verona")
- "[Servizio] + [Zona specifica]" (es. "Dentista centro Verona")
- "[Servizio] + Urgente/Oggi" (es. "Parrucchiere aperto oggi Verona")

### 3. Citazioni e Link Locali

Backlink da siti locali autorevoli aumentano la credibilità del tuo business.

**Strategie**:

- Partnership con altre aziende locali
- Sponsorizzazione di eventi locali
- Citazioni su directory locali

### 4. Contenuti Locali

Contenuti che parlano della tua città e della tua zona aumentano la rilevanza locale.

## Checklist per il SEO Locale

- [ ] Profilo Google My Business completo e verificato
- [ ] Almeno 20 recensioni di clienti
- [ ] Risposte a tutte le recensioni (positive e negative)
- [ ] Schema markup locale nel tuo sito
- [ ] Citazioni su directory locali
- [ ] Contenuti che menzionano la tua città/zona
- [ ] Link da siti locali rilevanti

## Prossimi Passi

1. Verifica/ottimizza il tuo profilo GMB
2. Chiedi ai clienti soddisfatti di lasciare una recensione
3. Rispondi costantemente alle recensioni
4. Crea contenuti che rispondono a domande locali

Il SEO locale è un processo continuo, ma i risultati sono concreti e misurabili.
`,
  },
  {
    id: 'ecommerce-best-practices',
    title: 'E-commerce: Best Practices per Aumentare le Vendite Online',
    excerpt: 'Errori comuni negli e-commerce e come evitarli per migliorare le vendite.',
    category: 'E-commerce',
    readTime: '9 min',
    date: '18 Dic 2025',
    image: '🛒',
    slug: 'ecommerce-best-practices',
    content: `# E-commerce: Best Practices per Aumentare le Vendite Online

La maggior parte degli e-commerce perde il 70% dei visitatori senza che completino un acquisto. Ecco cosa sbagliare e come correggerlo.

## Il Problema dei Carrelli Abbandonati

Il fenomeno del "cart abandonment" è comune: visitatori aggiungono prodotti al carrello ma non completano l'acquisto.

**Cause comuni**:

- Processo di checkout troppo lungo o complicato
- Costi di spedizione non chiari
- Metodi di pagamento limitati
- Sfiducia nel sito (nessun badge di sicurezza)
- Caricamento lento

## Best Practices per l'E-commerce

### 1. Foto Prodotto di Qualità

Le foto sono il primo elemento di valutazione di un prodotto online.

**Standard minimo**:

- Almeno 4-5 foto per prodotto
- Diverse angolazioni e dettagli
- Immagini da almeno 3000px
- Zoom disponibile al click

### 2. Descrizioni Convincenti

Non scrivere "T-shirt blu". Scrivi come il cliente si sentirà indossando quel prodotto.

**Elemento chiave**: Benefici, non solo caratteristiche.

### 3. Checkout Semplificato

Ogni step in più aumenta l'abbandono.

**Target**: Massimo 3-4 step, compilazione automatica dove possibile.

### 4. Metodi di Pagamento Multipli

Non tutti pagano con carta. Offrire PayPal, bonifico, Apple Pay, Google Pay aumenta le conversioni.

### 5. Trasparenza Totale

Mostra:

- Costi di spedizione PRIMA del checkout
- Politica di reso
- Tempi di consegna
- Badge di sicurezza (SSL, ecc)

### 6. Follow-up Post-Acquisto

Chi ha comprato una volta è più propenso a comprare di nuovo.

**Strategie**:

- Email di ringraziamento immediata
- Suggerimenti di prodotti correlati dopo 48h
- Feedback sulla qualità dopo 1 settimana

## Metriche da Monitorare

- **Conversion Rate**: Percentuale di visitatori che completano un acquisto
- **Average Order Value**: Valore medio degli ordini
- **Cart Abandonment Rate**: Percentuale di carrelli non completati
- **Customer Lifetime Value**: Valore totale generato da un cliente

## Checklist E-commerce

- [ ] Foto di qualità per ogni prodotto
- [ ] Descrizioni orientate ai benefici
- [ ] Checkout in 3-4 step max
- [ ] Almeno 4 metodi di pagamento
- [ ] Costi di spedizione chiari
- [ ] Badge di sicurezza visibili
- [ ] Politica di reso trasparente
- [ ] Analytics configurato per tracciare conversioni

## Conclusione

L'e-commerce di successo non è questione di fortuna, ma di attention to detail. Ogni elemento del sito deve servire a ridurre attrito e aumentare fiducia.
`,
  },
  {
    id: 'digital-marketing-fundamentals',
    title: 'Digital Marketing: Fondamenti e Strategie Base',
    excerpt: 'Introduzione ai principali canali di digital marketing e come usarli per la tua attività.',
    category: 'Marketing',
    readTime: '7 min',
    date: '15 Dic 2025',
    image: '📊',
    slug: 'digital-marketing-fundamentals',
    content: `# Digital Marketing: Fondamenti e Strategie Base

Il digital marketing non è una cosa complessa. È semplicemente portare la tua proposta di valore online, dove i tuoi clienti cercano.

## I Principali Canali di Digital Marketing

### 1. Sito Web

Il tuo sito web è la base di tutto. È il luogo dove convergi il traffico da tutti gli altri canali.

**Obiettivo**: Convertire visitatori in lead o clienti.

### 2. SEO (Organic Search)

Ottimizzare il tuo sito per i motori di ricerca porta traffico gratuito nel lungo termine.

**Timeline**: Risultati visibili dopo 3-6 mesi.

**Vantaggio**: Traffico sostenibile nel tempo.

### 3. Google Ads (Paid Search)

Campagne a pagamento su Google portano traffico immediato per keyword specifiche.

**Timeline**: Risultati immediati.

**Costo**: Paghi per ogni click.

### 4. Social Media

Facebook, Instagram, LinkedIn sono canali per costruire comunità e aumentare consapevolezza del brand.

**Best per**: Engagement, brand awareness, community building.

### 5. Email Marketing

Inviare messaggi ai clienti interessati rimane uno dei canali più efficaci.

**ROI**: Fino a 36:1 (ogni euro speso genera 36 di ritorno).

## La Strategia Giusta per Te

Non tutti i canali funzionano per tutti i business:

- **B2B**: LinkedIn, Email, SEO
- **Retail/E-commerce**: Facebook, Instagram, SEO, Google Ads
- **Servizi Locali**: Google My Business, Google Ads, SEO locale
- **Consulenza**: LinkedIn, Blog, Email

## Principio Fondamentale

Prima di spendere in marketing, devi avere una cosa chiara:

**Chi sono i tuoi clienti ideali? Dove cercano? Quale problema risolvi per loro?**

Senza questa risposta, spenderai soldi senza risultati.

## Checklist di Partenza

- [ ] Sito web funzionante e ottimizzato
- [ ] Google My Business configurato (se attività locale)
- [ ] Google Analytics installato
- [ ] Chiarezza sul tuo target di clienti
- [ ] Proposta di valore unica definita
- [ ] CTA (Call-to-Action) chiare su tutti i canali

## Conclusione

Il digital marketing funziona quando c'è coerenza tra sito, messaggio, e target audience. Non è necessario essere su tutti i canali, ma essere eccellenti nei canali giusti.
`,
  },
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  const openPost = (post) => setSelectedPost(post);
  const closePost = () => setSelectedPost(null);

  return (
    <section id="blog" className="relative py-20 px-6 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <MotionWrapper>
          <div className="text-center mb-16 space-y-4">
            <p className="text-cyan-400 font-bold text-sm uppercase tracking-widest">
              📚 Blog & Risorse
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Impara le Best Practices
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Articoli e risorse gratuite per migliorare la tua presenza online e capire come funziona il digital marketing.
            </p>
          </div>
        </MotionWrapper>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {BLOG_POSTS.map((post, index) => (
            <MotionWrapper key={post.id} delay={index * 0.1}>
              <article
                className="group rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-slate-700/50 to-slate-700/30 overflow-hidden hover:border-cyan-400/50 transition-all duration-300 cursor-pointer flex flex-col h-full"
                onClick={() => openPost(post)}
              >
                <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                  {post.image}
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-bold rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-cyan-400/10">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <span className="text-cyan-400 group-hover:translate-x-2 transition-transform">
                      Leggi →
                    </span>
                  </div>
                </div>
              </article>
            </MotionWrapper>
          ))}
        </div>
      </div>

      {selectedPost && <ArticleModal post={selectedPost} onClose={closePost} />}
    </section>
  );
}

function ArticleModal({ post, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center p-6 z-50"
      onClick={onClose}
    >
      <div
        className="bg-slate-800 rounded-2xl border border-cyan-400/20 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-slate-800 border-b border-cyan-400/20 p-6 flex items-center justify-between">
          <div>
            <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-bold rounded-full mb-3">
              {post.category}
            </span>
            <h2 className="text-2xl font-bold text-white">{post.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors flex-shrink-0 ml-4"
          >
            ✕
          </button>
        </div>

        <div className="p-8">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ ...props }) => (
                <h1 className="text-4xl font-bold text-white pt-8 pb-4 mb-6" {...props} />
              ),
              h2: ({ ...props }) => (
                <h2 className="text-2xl font-bold text-white pt-6 pb-3 mb-4" {...props} />
              ),
              h3: ({ ...props }) => (
                <h3 className="text-xl font-bold text-cyan-400 pt-4 pb-2 mb-3" {...props} />
              ),
              p: ({ ...props }) => (
                <p className="text-gray-300 leading-relaxed py-3 mb-4" {...props} />
              ),
              ul: ({ ...props }) => (
                <ul className="list-disc space-y-2 py-3 mb-4 ml-6" {...props} />
              ),
              ol: ({ ...props }) => (
                <ol className="list-decimal space-y-2 py-3 mb-4 ml-6" {...props} />
              ),
              li: ({ ...props }) => (
                <li className="text-gray-300 leading-relaxed" {...props} />
              ),
              strong: ({ ...props }) => (
                <strong className="font-bold text-white" {...props} />
              ),
              em: ({ ...props }) => (
                <em className="italic text-cyan-300" {...props} />
              ),
              code: ({ inline, ...props }) =>
                inline ? (
                  <code
                    className="bg-slate-700/50 px-2 py-1 rounded text-cyan-300 text-sm font-mono"
                    {...props}
                  />
                ) : (
                  <code
                    className="block bg-slate-700/50 p-4 rounded my-4 text-cyan-300 text-sm overflow-x-auto font-mono"
                    {...props}
                  />
                ),
              blockquote: ({ ...props }) => (
                <blockquote
                  className="border-l-4 border-cyan-400 pl-4 italic text-gray-400 py-3 my-4"
                  {...props}
                />
              ),
              a: ({ href, children, ...props }) => {
                const isAnchor = href && href.startsWith('#');
                const handleClick = (e) => {
                  if (isAnchor) {
                    e.preventDefault();
                    onClose();
                    const el = document.querySelector(href);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                };
                return (
                  <a
                    href={href}
                    onClick={handleClick}
                    className="text-cyan-400 hover:text-cyan-300 underline"
                    {...props}
                  >
                    {children}
                  </a>
                );
              },
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        <div className="border-t border-cyan-400/20 p-6 bg-slate-700/30">
          <p className="text-gray-300 mb-4">
            Hai domande o vuoi saperne di più su come migliorare il tuo sito?
          </p>
          <a
            href="#contatti"
            onClick={onClose}
            className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            📧 Contattaci Oggi
          </a>
        </div>
      </div>
    </div>
  );
}
