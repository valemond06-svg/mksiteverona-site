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
    id: 1,
    title: 'Come un sito web aumenta le prenotazioni del tuo ristorante',
    slug: 'sito-web-ristorante-prenotazioni',
    excerpt: 'Scopri i 5 elementi essenziali che trasformano visitatori in clienti.',
    date: '15 Dic 2024',
    readTime: '5 min',
  },
  {
    id: 2,
    title: 'SEO Locale: Come apparire nei risultati di Google a Verona',
    slug: 'seo-locale-verona-google',
    excerpt: 'Guida completa per dominare le ricerche locali della tua città.',
    date: '12 Dic 2024',
    readTime: '7 min',
  },
  {
    id: 3,
    title: 'Siti web vs Social media: cosa scegliere per la tua attività',
    slug: 'sito-web-vs-social-media',
    excerpt: 'La verità che nessuno ti dice: hai bisogno di entrambi.',
    date: '10 Dic 2024',
    readTime: '6 min',
  },
];
