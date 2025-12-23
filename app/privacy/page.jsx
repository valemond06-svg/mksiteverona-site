'use client';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16 space-y-4">
          <a
            href="/#home"
            className="inline-block text-cyan-400 hover:text-cyan-300 transition-colors mb-4"
          >
            ← Torna alla Home
          </a>
          <h1 className="text-5xl font-black text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-300 text-lg">
            Ultimo aggiornamento: Dicembre 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-cyan-400/20 rounded-2xl p-12 text-gray-300 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduzione</h2>
            <p>
              MKSITE ("noi", "nostro" o "nostra") gestisce il sito web mksite.verona.it 
              (il "Sito"). Questa pagina informa i visitatori riguardo alle nostre politiche 
              per la raccolta, l'uso e la divulgazione di informazioni personali ricevute tramite il Sito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Informazioni che Raccogliamo</h2>
            <p className="mb-4">Raccogliamo informazioni che ci fornisci direttamente, come:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Nome completo</li>
              <li>Indirizzo email</li>
              <li>Numero di telefono</li>
              <li>Azienda/ragione sociale</li>
              <li>Messaggi e commenti</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Come Utilizziamo le Informazioni</h2>
            <p className="mb-4">Utilizziamo le informazioni raccolte per:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Rispondere alle tue richieste e comunicazioni</li>
              <li>Fornire servizi e supporto clienti</li>
              <li>Migliorare il nostro Sito e i nostri servizi</li>
              <li>Inviare aggiornamenti e informazioni di marketing (con consenso)</li>
              <li>Conformarsi alle leggi e ai regolamenti applicabili</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Condivisione dei Dati</h2>
            <p>
              Non vendiamo, non scambiamo e non affittiamo i tuoi dati personali a terzi. 
              Possiamo divulgare le tue informazioni solo quando richiesto dalla legge o quando 
              necessario per proteggere i nostri diritti.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Sicurezza dei Dati</h2>
            <p>
              Implementiamo misure di sicurezza appropriate per proteggere i tuoi dati personali 
              da accesso non autorizzato, alterazione, divulgazione o distruzione. Tuttavia, 
              nessun metodo di trasmissione su Internet è 100% sicuro.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Cookie e Tecnologie di Tracciamento</h2>
            <p className="mb-4">
              Il nostro Sito utilizza cookie e tecnologie di tracciamento simili per:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Ricordare le tue preferenze</li>
              <li>Analizzare il traffico del sito (Google Analytics)</li>
              <li>Migliorare l'esperienza dell'utente</li>
            </ul>
            <p className="mt-4">
              Puoi controllare i cookie attraverso le impostazioni del tuo browser.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Diritti dell'Utente</h2>
            <p className="mb-4">
              In conformità con la normativa GDPR (Regolamento Generale sulla Protezione dei Dati), 
              hai il diritto di:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Accedere ai tuoi dati personali</li>
              <li>Rettificare dati inesatti</li>
              <li>Richiedere l'eliminazione dei tuoi dati</li>
              <li>Limitare l'elaborazione dei tuoi dati</li>
              <li>Revocare il consenso in qualsiasi momento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Contatti per la Privacy</h2>
            <p>
              Se hai domande sulla nostra Privacy Policy o desideri esercitare i tuoi diritti GDPR, 
              contattaci a:
            </p>
            <div className="mt-4 p-4 bg-slate-700/50 rounded-lg border border-cyan-400/20">
              <p className="font-semibold">Email: mksitestudio@gmail.com</p>
              <p className="font-semibold">Telefono: +39 370 109 3391</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Modifiche a Questa Policy</h2>
            <p>
              Ci riserviamo il diritto di aggiornare questa Privacy Policy in qualsiasi momento. 
              Ti consigliamo di controllare periodicamente questa pagina per eventuali modifiche.
            </p>
          </section>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <a
            href="/#home"
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            Torna alla Home
          </a>
        </div>
      </div>
    </div>
  );
}
