// Brand & Contact Constants
export const BRAND = {
  name: 'MKSITE Verona',
  tagline: 'Siti web che portano clienti ai tuoi banchi',
  description: 'Creiamo siti web professionali per bar, ristoranti e negozi a Verona',
  phone: '+39 3701093391',
  email: 'mksitestudio@gmail.com',
  instagram: '@mksite.verona',  // ← CAMBIA QUESTO
  instagram_url: 'https://instagram.com/mksite.verona',  // ← E QUESTO
  whatsapp_url: 'https://wa.me/393701093391',
  location: 'Verona, Veneto',
  year_founded: 2025,
};


export const SERVICES = [
  {
    id: 1,
    title: 'Siti Web Professionali',
    icon: '🌐',
    description: 'Siti veloci, moderni e ottimizzati per convertire i tuoi clienti in vendite reali.',
    features: ['Design responsive', 'SEO ottimizzato', 'Velocità garantita', 'Supporto incluso'],
  },
  {
    id: 2,
    title: 'E-commerce & Shop Online',
    icon: '🛒',
    description: 'Soluzioni di vendita online per negozi, ristoranti e bar. Inizia a vendere in 48 ore.',
    features: ['Pagamenti sicuri', 'Gestione inventario', 'Spedizioni', 'Analytics'],
  },
  {
    id: 3,
    title: 'SEO Locale Verona',
    icon: '📍',
    description: 'Appari nei risultati di ricerca quando i tuoi clienti cercano su Google Maps.',
    features: ['Google My Business', 'Ranking locali', 'Citazioni locali', 'Review management'],
  },
  {
    id: 4,
    title: 'Web Design Custom',
    icon: '🎨',
    description: 'Design unico e memorabile che rispecchia l\'identità del tuo brand.',
    features: ['Brand identity', 'UI/UX professionale', 'Mobile-first', 'Accessible'],
  },
];

export const PRICING_PLANS = [
  {
    id: 1,
    name: 'Starter',
    price: '299',
    description: 'Perfetto per chi inizia',
    features: [
      '5 pagine web',
      'Responsive design',
      'SEO base',
      'Contact form',
      'Google Maps',
      'Supporto 30 giorni',
    ],
    cta: 'Inizia ora',
    highlight: false,
  },
  {
    id: 2,
    name: 'Pro',
    price: '599',
    description: 'Per chi vuole di più',
    features: [
      'Pagine illimitate',
      'Design custom',
      'SEO avanzata',
      'Blog integrato',
      'Analytics',
      'Supporto 3 mesi',
      'Aggiornamenti inclusi',
    ],
    cta: 'Scelto da molti',
    highlight: true,
  },
  {
    id: 3,
    name: 'E-commerce',
    price: '999',
    description: 'Per negozi online',
    features: [
      'Carrello & pagamenti',
      'Gestione inventario',
      'SEO e-commerce',
      'Spedizioni',
      'Analytics avanzati',
      'Supporto 6 mesi',
      'Marketing consultation',
    ],
    cta: 'Vendi online',
    highlight: false,
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Marco R.',
    business: 'Ristorante "Da Marco"',
    text: 'In 2 mesi abbiamo raddoppiato le prenotazioni online. Professionali e veloci!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Giulia M.',
    business: 'Parrucchiera "Stelle"',
    text: 'Il sito è bellissimo e le prenotazioni automatiche mi hanno cambiato la vita.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Luca B.',
    business: 'Negozio "Vintage Shop"',
    text: 'Finalmente online. Vendite già nel primo mese. Consigliatissimi!',
    rating: 5,
  },
];

export const BLOG_POSTS = [
  {
    id: 'sito-web-che-vende',
    index: '01',
    title: 'Come Creare un Sito Web che Converte Visitatori in Clienti',
    excerpt: 'Un sito web bello non è sufficiente. Scopri i fattori che determinano se il tuo sito genera risultati reali.',
    category: 'Web Strategia',
    readTime: '08 MIN',
    date: '23 DIC 2025',
    image: '🎨',
    slug: 'sito-web-che-vende',
    content: `# Come Creare un Sito Web che Converte Visitatori in Clienti

Un sito web bello non è sufficiente. La differenza tra un sito che genera risultati e uno che rimane invisibile sta nei dettagli ingegneristici e nella psicologia dell'utente.

## Perché la Maggior Parte dei Siti Non Converte

Se il tuo sito presenta anche uno di questi problemi, stai perdendo opportunità di business ogni singolo giorno:

- 📱 **Latenza elevata**: Se carica in più di 3 secondi, il 40% degli utenti se ne va.
- 🔍 **Invisibilità**: Senza una struttura SEO solida, Google non ti trova.
- 💬 **Confusione**: Se l'utente deve pensare troppo per capire cosa fare, hai già perso.

## I Pilastri dell'Efficienza Digitale

### 1. Performance "Space-Grade"
I visitatori abbandonano i siti lenti. Un caricamento in meno di 1 secondo è l'unico standard accettabile per un brand premium.

### 2. Design Cognitivo
Il 70%+ del traffico arriva da mobile. Il design deve essere fluido, veloce e reattivo, non solo "ridimensionato".

### 3. SEO Architetturale
Un sito senza SEO è come una supercar senza benzina. L'ottimizzazione deve essere parte del codice, non un'aggiunta successiva.
`,
  },
  {
    id: 'seo-locale-strategie',
    index: '02',
    title: 'SEO Locale: Dominare il Mercato di Verona e Provincia',
    excerpt: 'Strategie concrete per apparire nei primi risultati quando i tuoi clienti locali ti cercano.',
    category: 'Local SEO',
    readTime: '10 MIN',
    date: '20 DIC 2025',
    image: '📍',
    slug: 'seo-locale-strategie',
    content: `# SEO Locale: Dominare il Mercato di Verona

Per un'azienda locale, essere su Google Maps non è un'opzione, è sopravvivenza.

## I Pilastri della Visibilità Locale

### 1. Google Business Profile Ingegnerizzato
Il tuo profilo GMB è la faccia della tua azienda sui motori di ricerca. Deve essere completo, aggiornato e ricco di recensioni.

### 2. Keyword Geo-Targetizzate
Ottimizziamo per "Idraulico Verona" o "Dentista Centro", intercettando chi ha un bisogno urgente e vicino a te.

### 3. Autorità Territoriale
Link da altri siti locali e citazioni coerenti del tuo nome, indirizzo e telefono (NAP) sono carburante per il tuo posizionamento.
`,
  },
  {
    id: 'ecommerce-best-practices',
    index: '03',
    title: 'E-commerce: Architettura per la Vendita Massiva',
    excerpt: 'Errori comuni negli e-commerce e come ottimizzare il checkout per abbattere l\'abbandono del carrello.',
    category: 'E-commerce',
    readTime: '09 MIN',
    date: '18 DIC 2025',
    image: '🛒',
    slug: 'ecommerce-best-practices',
    content: `# E-commerce: Architettura per la Vendita Massiva

Il 70% degli utenti abbandona il carrello. Ecco come abbattere questa statistica.

## Ottimizzazione del Checkout
Riduci i passaggi. Elimina le distrazioni. Offri metodi di pagamento moderni (Apple Pay, Google Pay).

## Fiducia e Chiarezza
Mostra badge di sicurezza, politiche di reso chiare e costi di spedizione trasparenti sin dal primo momento.
`,
  },
  {
    id: 'digital-marketing-fundamentals',
    index: '04',
    title: 'Digital Marketing Fundamentals per il 2026',
    excerpt: 'Dalla Brand Awareness alla Lead Generation: come costruire un ecosistema digitale scalabile.',
    category: 'Marketing',
    readTime: '07 MIN',
    date: '15 DIC 2025',
    image: '🚀',
    slug: 'digital-marketing-fundamentals',
    content: `# Digital Marketing Fundamentals

Il marketing non è più "sparare nel mucchio". È precisione chirurgica.

## Ecosistema vs Campagne Singole
Non basta un post su Instagram. Serve un funnel che porti l'utente dal primo contatto alla vendita finale tramite contenuti di valore.
`,
  },
];
