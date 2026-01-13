'use client';
import Link from 'next/link';

export default function CookiePolicy() {
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
          <h1 className="text-5xl font-black text-white mb-4">Cookie Policy</h1>
          <p className="text-gray-300 text-lg">
            Ultimo aggiornamento: Dicembre 2024
          </p>
        </div>

        {/* Content */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-cyan-400/20 rounded-2xl p-12 text-gray-300 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Cosa Sono i Cookie</h2>
            <p>
              I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo 
              (computer, tablet, smartphone) quando visiti il nostro sito web. I cookie permettono 
              al sito di ricordare informazioni su di te durante la tua visita e sulle future visite.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Tipi di Cookie Utilizzati</h2>
            <p className="mb-4">Utilizziamo i seguenti tipi di cookie:</p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Cookie Tecnici (Essenziali)</h3>
                <p>
                  Questi cookie sono necessari per il funzionamento del sito. Permettono di 
                  navigare il sito e di utilizzare le sue funzioni essenziali, come l&apos;accesso 
                  ad aree protette. Senza questi cookie, il sito non funzionerebbe correttamente.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Cookie di Analytics</h3>
                <p>
                  Utilizziamo Google Analytics per comprendere come gli utenti interagiscono 
                  con il nostro sito. Questi cookie raccolgono dati anonimi e aggregati sul 
                  traffico del sito, incluso il numero di visitatori, le pagine visitate e 
                  il tempo trascorso sul sito.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Cookie di Preferenze</h3>
                <p>
                  Ricordano le tue scelte (come la lingua o il tema scuro) per fornire 
                  un&apos;esperienza più personalizzata durante le tue prossime visite.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Cookie di Marketing</h3>
                <p>
                  Utilizzati per tracciare l&apos;efficacia delle nostre campagne pubblicitarie 
                  e per mostrarti annunci pertinenti su altri siti web.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Come Controlliamo i Cookie</h2>
            <p className="mb-4">Puoi controllare e gestire i cookie in diversi modi:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Impostazioni del Browser</strong>: La maggior parte dei browser permette 
                di rifiutare i cookie o di avvisarti quando un sito tenta di impostarne uno. 
                Consulta la documentazione del tuo browser per le istruzioni specifiche.
              </li>
              <li>
                <strong>Cookie Walls</strong>: Puoi cancellare i cookie memorizzati nel tuo browser 
                in qualsiasi momento. Consulta la documentazione del tuo browser.
              </li>
              <li>
                <strong>Opt-out da Google Analytics</strong>: Puoi scaricare il 
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 mx-1"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                per impedire la raccolta dei dati da parte di Google Analytics.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Cookie di Terze Parti</h2>
            <p className="mb-4">
              Il nostro sito contiene cookie impostati da terze parti, inclusi:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Google Analytics</strong> (analytics.google.com) - per l&apos;analisi del traffico
              </li>
              <li>
                <strong>Servizi di Hosting</strong> - per l&apos;hosting e la gestione del sito
              </li>
            </ul>
            <p className="mt-4">
              Non abbiamo il controllo su questi cookie e ti consigliamo di consultare 
              le loro informative sulla privacy direttamente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Dati Raccolti tramite Cookie</h2>
            <p className="mb-4">
              Attraverso i cookie raccogliamo dati come:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Indirizzo IP (anonimizzato)</li>
              <li>Tipo di browser e sistema operativo</li>
              <li>Pagine visitate</li>
              <li>Tempo trascorso sul sito</li>
              <li>Link cliccati</li>
              <li>Origine del traffico (come sei arrivato al nostro sito)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Conformità Normativa</h2>
            <p>
              Questo sito rispetta le normative sulla privacy dei cookie, incluso il 
              Regolamento Generale sulla Protezione dei Dati (GDPR) dell&apos;UE. 
              Richiediamo il tuo consenso esplicito per l&apos;utilizzo di cookie non essenziali.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Contatti per Domande</h2>
            <p>
              Se hai domande sulla nostra Cookie Policy o su come usiamo i cookie, 
              contattaci a:
            </p>
            <div className="mt-4 p-4 bg-slate-700/50 rounded-lg border border-cyan-400/20">
              <p className="font-semibold">Email: mksitestudio@gmail.com</p>
              <p className="font-semibold">Telefono: +39 370 109 3391</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Modifiche a Questa Policy</h2>
            <p>
              Ci riserviamo il diritto di aggiornare questa Cookie Policy in qualsiasi momento 
              per riflettere i cambiamenti nella nostra pratica, nella tecnologia, nella 
              legislazione e per altri motivi. Ti consigliamo di controllare periodicamente 
              questa pagina per eventuali modifiche.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Browser Comuni - Come Gestire i Cookie</h2>
            <div className="space-y-4">
              <div className="p-4 bg-slate-700/50 rounded-lg border border-cyan-400/20">
                <p className="font-semibold text-cyan-400 mb-2">Google Chrome</p>
                <p className="text-sm">
                  Clicca sull&apos;icona del menu (≡) → Impostazioni → Privacy e sicurezza → 
                  Cookie e altri dati dei siti
                </p>
              </div>
              <div className="p-4 bg-slate-700/50 rounded-lg border border-cyan-400/20">
                <p className="font-semibold text-cyan-400 mb-2">Mozilla Firefox</p>
                <p className="text-sm">
                  Clicca l&apos;icona del menu (☰) → Preferenze → Privacy e sicurezza → 
                  Cookie e dati dei siti
                </p>
              </div>
              <div className="p-4 bg-slate-700/50 rounded-lg border border-cyan-400/20">
                <p className="font-semibold text-cyan-400 mb-2">Safari</p>
                <p className="text-sm">
                  Safari → Preferenze → Privacy → Gestisci dati dei siti web
                </p>
              </div>
              <div className="p-4 bg-slate-700/50 rounded-lg border border-cyan-400/20">
                <p className="font-semibold text-cyan-400 mb-2">Microsoft Edge</p>
                <p className="text-sm">
                  Clicca (⋯) → Impostazioni → Privacy → Cookie e altre autorizzazioni dei siti
                </p>
              </div>
            </div>
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
