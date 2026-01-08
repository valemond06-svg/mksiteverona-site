'use client';

import { useState } from 'react';

const FAQS = [
  {
    id: 3,
    category: 'Prezzi & Pagamento',
    question: 'Accettate piani di pagamento?',
    answer:
      'Sì, offriamo piani di pagamento per il piano PRO e E-commerce. Contattaci per discutere le opzioni. In genere facciamo: 50% al contratto, 50% al lancio. Per progetti di durata > 6 mesi possiamo fare versamenti mensili.',
  },
  {
    id: 4,
    category: 'Processo & Timeline',
    question: 'Quanto tempo ci vuole?',
    answer:
      'Piano STARTER: 30 giorni. Piano PRO: 45-60 giorni. Piano E-commerce: 60-90 giorni. Questi tempi includono la strategia, il design, lo sviluppo, i test e l\'ottimizzazione SEO. Se hai fretta possiamo accelerare pagando un 20% in più.',
  },
  {
    id: 5,
    category: 'Processo & Timeline',
    question: 'Avrò un account manager dedicato?',
    answer:
      'Sì, è incluso in tutti i piani. Avrai una persona dedicata che ti segue dall\'inizio alla fine. Potrai contattarla via WhatsApp, email, o chiamata. Risposta garantita in 24h durante il supporto incluso (30-180 giorni a seconda del piano).',
  },
  {
    id: 6,
    category: 'Processo & Timeline',
    question: 'Come funziona il processo di progettazione?',
    answer:
      'È semplice: (1) Scoperta: 1h di call per capire il tuo business, obiettivi, target. (2) Strategia: ti portiamo un documento di strategia e wireframe. (3) Design: creiamo 3 versioni di design tra cui scegli. (4) Sviluppo: costruiamo il sito. (5) Test & Lancio: testa su tutti i device, poi andiamo live. Sei coinvolto in ogni step.',
  },
  {
    id: 7,
    category: 'Risultati & Garantie',
    question: 'Quali risultati posso aspettarmi?',
    answer:
      'Dipende da dove parti. STARTER: +10-20% clienti. PRO: +40-80% clienti (media). E-commerce: 3x vendite. SEO: +200% traffico organico in 6 mesi. Ma qui c\'è il caveat: se il tuo prodotto/servizio è pessimo, il sito migliore del mondo non te lo salva. Andiamo solo con clienti che hanno un buon prodotto/servizio.',
  },
  {
    id: 8,
    category: 'Risultati & Garantie',
    question: 'Mi potete garantire primo su Google?',
    answer:
      'No, nessuno può farlo legittimamente. Chiunque te lo promette sta mentendo. Quello che possiamo fare: portarti nei Top 3 su Google Maps per la tua zona in 90 giorni per keyword locali specifiche (es. "Parrucchiere Verona centro"). Questo lo garantiamo. Per la ricerca organica nazionale, è più complesso e dipende dalla competizione.',
  },
  {
    id: 9,
    category: 'Tecnologia & Manutenzione',
    question: 'Che tecnologie usate?',
    answer:
      'Usiamo Next.js (React framework), Tailwind CSS, e database moderni (Supabase, MongoDB a seconda del progetto). Tutto è costruito con performance in mente: siti che caricano in <2 secondi. Niente WordPress vecchio, niente template drag-and-drop. Code production-grade.',
  },
  {
    id: 10,
    category: 'Tecnologia & Manutenzione',
    question: 'Cosa succede dopo il lancio? Chi mantiene il sito?',
    answer:
      'Dipende dal piano. STARTER: 30 giorni di supporto inclusi (bug fixes, piccoli aggiustamenti). PRO: 3 mesi inclusi + aggiornamenti SEO. E-commerce: 6 mesi inclusi + marketing consultation. Dopo scade il supporto ma puoi estenderlo a €299/mese (supporto prioritario + aggiornamenti SEO).',
  },
  {
    id: 11,
    category: 'Sicurezza & Compliance',
    question: 'È sicuro? Avete certificati SSL, GDPR, ecc?',
    answer:
      'Sì a tutto. SSL certificate di default (HTTPS). GDPR compliant (cookie banner, privacy policy, data retention). PCI compliance per e-commerce (se accetti carte). Backup settimanali automatici. Tutti i dati sono criptati. Non taglieremo mai su sicurezza.',
  },
  {
    id: 12,
    category: 'Specifico per SEO',
    question: 'Che differenza c\'è tra SEO locale e SEO nazionale?',
    answer:
      'SEO locale: targettizzi una zona geografica specifica ("Idraulico Verona"). È veloce (3-6 mesi), meno competitivo. Perfetto per aziende locali. SEO nazionale: competi a livello Italia ("Idraulico" o anche no, dipende). Ci vogliono 12+ mesi, è molto più competitivo, richiede budget mensile continuo. Per la maggior parte dei nostri clienti locali, local SEO è più conveniente.',
  },
  {
    id: 13,
    category: 'Specifico per E-commerce',
    question: 'Che piattaforme di pagamento supportate?',
    answer:
      'Stripe, PayPal, Apple Pay, Google Pay, bonifico bancario. Per l\'Italia: anche SatisPay, Klarna. Se ne serve una specifica dimmi pure. Tutti i pagamenti sono criptati e conformi PCI DSS.',
  },
  {
    id: 14,
    category: 'Specifico per E-commerce',
    question: 'Posso integrare il mio magazzino/inventario?',
    answer:
      'Sì. Se hai già un ERP o software di gestione, possiamo integrarlo. Se no, lo configuriamo da zero. L\'inventario si sincronizza in real-time: quando vendi online, lo stock si aggiorna, e se finisce, il prodotto va "esaurito".',
  },
  {
    id: 15,
    category: 'Chi Siete',
    question: 'Chi siete? Quanto esperienza avete?',
    answer:
      'Siamo un team di 5 sviluppatori laureandi in Ingegneria dei Sistemi Robotici ed Intelligenti presso l\'Università di Verona. Sfruttiamo le abilità acquisite e la voglia di crescere per offrire un servizio ad attività locali.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const categories = Array.from(new Set(FAQS.map((faq) => faq.category)));

  return (
    <section id="faq" className="relative py-20 px-6 bg-transparent">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-cyan-400 font-bold text-sm uppercase tracking-widest">
            ❓ Domande Frequenti
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Le Risposte Che Cerchi
          </h2>
        </div>

        {/* FAQs by Category */}
        {categories.map((category) => (
          <div key={category} className="mb-16">
            {/* Category Header */}
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full" />
              {category}
            </h3>

            {/* FAQs */}
            <div className="space-y-4">
              {FAQS.filter((faq) => faq.category === category).map((faq) => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openId === faq.id}
                  onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="rounded-xl border border-cyan-400/20 bg-gradient-to-r from-slate-700/50 to-slate-700/30 overflow-hidden hover:border-cyan-400/40 transition-all">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/50 transition-colors"
      >
        <h4 className="text-lg font-semibold text-white text-left">{faq.question}</h4>
        <svg
          className={`w-6 h-6 text-cyan-400 transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''
            }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="px-6 py-4 border-t border-cyan-400/10 bg-slate-800/50">
          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}
