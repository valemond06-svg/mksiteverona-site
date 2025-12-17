'use client';

import { useState, useEffect } from 'react';

const MODAL_STORAGE_KEY = 'leadMagnetModalClosed';

export default function LeadMagnetModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Controlla se il modal è stato chiuso nelle ultime 24h
    const closedTime = localStorage.getItem(MODAL_STORAGE_KEY);
    if (closedTime) {
      const now = Date.now();
      const diff = now - parseInt(closedTime);
      const hours24 = 24 * 60 * 60 * 1000;

      if (diff < hours24) {
        return; // Modal rimane nascosto
      }
    }

    // Mostra il modal dopo 30 secondi
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Salva il timestamp di chiusura
    localStorage.setItem(MODAL_STORAGE_KEY, Date.now().toString());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      alert('Per favore inserisci una email valida');
      return;
    }

    setIsSubmitting(true);

    try {
      // Invia email a Supabase o al tuo servizio email
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitted(true);
        // Reset dopo 3 secondi
        setTimeout(() => {
          handleClose();
        }, 3000);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Errore durante l\'iscrizione, riprova più tardi');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl max-w-md w-full border border-cyan-400/30 shadow-2xl animate-scale-in">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 hover:bg-slate-700 rounded-lg transition-all duration-300"
            aria-label="Close"
          >
            <svg
              className="w-6 h-6 text-gray-400 hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="p-8 space-y-6">
            {!submitted ? (
              <>
                {/* Icon */}
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl">📋</span>
                  </div>
                </div>

                {/* Heading */}
                <div className="text-center space-y-3">
                  <h2 className="text-2xl font-bold text-white">
                    Scarica la Checklist Gratuita
                  </h2>
                  <p className="text-gray-300">
                    I 10 Passi Essenziali per Creare un Sito Web che Vende
                  </p>
                </div>

                {/* Benefits */}
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span className="text-gray-300 text-sm">
                      Scopri i segreti dei siti ad alto conversione
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span className="text-gray-300 text-sm">
                      Evita i 5 errori più comuni che commettono gli imprenditori
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span className="text-gray-300 text-sm">
                      Pianificazione step-by-step dal brief al lancio
                    </span>
                  </li>
                </ul>

                {/* Email Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      placeholder="La tua email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-cyan-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-300"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Iscrizione in corso...' : 'Scarica Gratuitamente'}
                  </button>
                </form>

                {/* Footer Text */}
                <p className="text-center text-xs text-gray-500">
                  Non invieremo spam. Puoi annullare l'iscrizione in qualsiasi momento.
                </p>
              </>
            ) : (
              // Success State
              <div className="text-center space-y-4 py-8">
                <div className="text-5xl">🎉</div>
                <h3 className="text-2xl font-bold text-white">Perfetto!</h3>
                <p className="text-gray-300">
                  Controlla la tua email per scaricare la checklist completa.
                </p>
                <div className="pt-4">
                  <div className="text-cyan-400 font-semibold text-sm">
                    Ti stiamo reindirizzando...
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
