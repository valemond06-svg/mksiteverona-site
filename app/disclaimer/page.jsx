'use client';
import Link from 'next/link';

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16 space-y-4">
          <Link
            href="/"
            className="inline-block text-cyan-400 hover:text-cyan-300 transition-colors mb-4"
          >
            ← Torna alla Home
          </Link>
          <h1 className="text-5xl font-black text-white mb-4">Disclaimer</h1>
          <p className="text-gray-300 text-lg">
            Ultimo aggiornamento: Dicembre 2024
          </p>
        </div>

        {/* Content */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-cyan-400/20 rounded-2xl p-12 text-gray-300 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Dichiarazione Generale</h2>
            <p>
              Le informazioni fornite sul sito web mksite.verona.it (&quot;Sito&quot;) sono fornite &quot;così come sono&quot;
              senza garanzie di alcun tipo, esplicite o implicite. MKSITE non fornisce alcuna garanzia
              relativamente all&apos;accuratezza, alla completezza, alla legalità, all&apos;affidabilità o
              alla disponibilità delle informazioni contenute in questo Sito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Nessuna Consulenza Professionale</h2>
            <p>
              Le informazioni fornite su questo Sito non devono essere intese come consulenza legale,
              fiscale, contabile, finanziaria o professionale. Per questioni che richiedono consulenza
              professionale specializzata, ti consigliamo di contattare un professionista qualificato
              nella tua giurisdizione.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Limitazione di Responsabilità</h2>
            <p className="mb-4">
              In nessun caso MKSITE sarà responsabile per:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Danni diretti o indiretti</li>
              <li>Perdita di dati, profitti o affari</li>
              <li>Interruzione di servizio</li>
              <li>Danni da virus, malware o accesso non autorizzato</li>
              <li>Utilizzo improprio del Sito o dei contenuti</li>
              <li>Errori, omissioni o inesattezze nei contenuti</li>
            </ul>
            <p className="mt-4">
              Anche se avvertito della possibilità di tali danni, MKSITE non sarà responsabile
              per eventuali perdite o danni che possano derivare dall&apos;uso di questo Sito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Accuratezza dei Contenuti</h2>
            <p>
              MKSITE si impegna a mantenere le informazioni sul Sito accurate e aggiornate.
              Tuttavia, non garantisce che i contenuti siano sempre accurati, completi, attuali
              o privi di errori. I contenuti possono essere aggiornati in qualsiasi momento
              senza preavviso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Link Esterni</h2>
            <p>
              Questo Sito potrebbe contenere link a siti web di terze parti. MKSITE non è responsabile
              per il contenuto, l&apos;accuratezza, la legalità o la disponibilità di siti web esterni.
              L&apos;inclusione di un link non implica l&apos;approvazione di quel sito web. Visiti i siti
              esterni a tuo rischio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Modifiche al Sito</h2>
            <p>
              MKSITE si riserva il diritto di modificare, aggiornare, aggiungere o rimuovere
              contenuti dal Sito in qualsiasi momento, senza preavviso. Le modifiche possono
              includere il funzionamento, il design, i contenuti e i servizi offerti.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Uso Accettabile</h2>
            <p className="mb-4">
              Accetti di utilizzare questo Sito solo per scopi legittimi e in conformità con
              tutte le leggi e i regolamenti applicabili. Non utilizzerai il Sito per:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Attività illegali o non autorizzate</li>
              <li>Molestie, minacce o intimidazioni</li>
              <li>Violazione dei diritti di proprietà intellettuale</li>
              <li>Distribuzione di malware, virus o codice dannoso</li>
              <li>Scraping o accesso non autorizzato ai dati</li>
              <li>Spam o comunicazioni non desiderate</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Proprietà Intellettuale</h2>
            <p>
              Tutto il contenuto su questo Sito, inclusi testi, immagini, video, logo e grafica,
              è di proprietà di MKSITE o dei suoi fornitori. Questo contenuto è protetto da leggi
              sulla proprietà intellettuale. Non puoi riprodurre, distribuire o trasmettere alcun
              contenuto senza il previo consenso scritto di MKSITE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Risultati e Aspettative</h2>
            <p className="mb-4">
              I risultati ottenuti dai servizi di MKSITE possono variare in base a:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Qualità dei materiali forniti</li>
              <li>Implementazione corretta delle strategie</li>
              <li>Fattori di mercato e concorrenza</li>
              <li>Algoritmi dei motori di ricerca</li>
              <li>Sforzo continuo e manutenzione</li>
            </ul>
            <p className="mt-4">
              MKSITE non garantisce risultati specifici e non è responsabile di risultati
              inferiori alle aspettative dovuti a fattori esterni.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Indennità</h2>
            <p>
              Accetti di mantenere indenne MKSITE, i suoi proprietari, gli impiegati e gli agenti
              da qualsiasi reclamo, danno, perdita, responsabilità o spese (inclusi gli onorari legali)
              derivanti dall&apos;uso del Sito o dalla violazione di questi Termini.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Interruzione del Servizio</h2>
            <p>
              MKSITE non è responsabile per interruzioni, malfunzionamenti o indisponibilità
              del Sito dovuti a:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Problemi tecnici o di server</li>
              <li>Manutenzione pianificata o non pianificata</li>
              <li>Atti di forza maggiore</li>
              <li>Disastri naturali</li>
              <li>Attacchi informatici</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Legge Applicabile</h2>
            <p>
              Questo Disclaimer è regolato dalle leggi della Repubblica Italiana. Qualsiasi
              controversia relativa a questo Disclaimer sarà soggetta alla giurisdizione esclusiva
              dei tribunali italiani.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Separabilità</h2>
            <p>
              Se una qualsiasi disposizione di questo Disclaimer è ritenuta non valida o non applicabile,
              tale disposizione sarà limitata o eliminata al minimo necessario, e le restanti disposizioni
              rimarranno in vigore.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">14. Contatti per Domande</h2>
            <p>
              Se hai domande su questo Disclaimer, contattaci a:
            </p>
            <div className="mt-4 p-4 bg-slate-700/50 rounded-lg border border-cyan-400/20">
              <p className="font-semibold">Email: mksitestudio@gmail.com</p>
              <p className="font-semibold">Telefono: +39 370 109 3391</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">15. Modifiche a Questo Disclaimer</h2>
            <p>
              MKSITE si riserva il diritto di modificare questo Disclaimer in qualsiasi momento
              senza preavviso. L&apos;uso continuato del Sito dopo le modifiche costituisce l&apos;accettazione
              del Disclaimer aggiornato.
            </p>
          </section>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            Torna alla Home
          </Link>
        </div>
      </div>
    </div>
  );
}
