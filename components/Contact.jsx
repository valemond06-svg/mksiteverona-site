'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Invia a un backend o servizio email (es. Resend, EmailJS, ecc)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Errore invio');

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });

      // Reset dopo 5 secondi
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Errore nell\'invio. Riprova o contattaci direttamente su WhatsApp.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contatti" className="relative py-20 px-6 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-cyan-400 font-bold text-sm uppercase tracking-widest">
            📞 Contattaci
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Parliamo del Tuo Progetto
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Che tu abbia un'idea, una domanda, o sia pronto a partire: contattaci senza impegno.
            Risposta garantita in 24 ore.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* WhatsApp */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-lg font-bold text-white">WhatsApp</h3>
              </div>
              <p className="text-gray-300 ml-15">
                Il modo più veloce per contattarci. Risposta in 5 minuti.
              </p>
              <a
                href="https://wa.me/393334567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                Apri Chat
              </a>
            </div>

            {/* Email */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📧</span>
                </div>
                <h3 className="text-lg font-bold text-white">Email</h3>
              </div>
              <p className="text-gray-300 ml-15">
                Per comunicazioni ufficiali e documentazione.
              </p>
              <a
                href="mailto:hello@mksite.it"
                className="inline-block text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                hello@mksite.it
              </a>
            </div>

            {/* Phone */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">☎️</span>
                </div>
                <h3 className="text-lg font-bold text-white">Telefono</h3>
              </div>
              <p className="text-gray-300 ml-15">
                Disponibili lunedì-venerdì, 9:00-18:00.
              </p>
              <a
                href="tel:+393334567890"
                className="inline-block text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                +39 333 45 67 890
              </a>
            </div>

            {/* Location */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-lg font-bold text-white">Sede</h3>
              </div>
              <p className="text-gray-300 ml-15">
                Verona, Veneto
                <br />
                Serviamo tutta Italia
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-700/30 rounded-3xl border border-cyan-400/20 p-8">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-white">Grazie!</h3>
                  <p className="text-gray-300">
                    Abbiamo ricevuto il tuo messaggio. Ti contatteremo al più presto.
                  </p>
                  <p className="text-sm text-cyan-400 font-semibold">
                    Nel frattempo, chatta con noi su WhatsApp →
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Mario Rossi"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="mario@azienda.it"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Telefono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+39 333 123 4567"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Azienda / Nome Progetto
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="La tua azienda"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Che servizio ti interessa? *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-400/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Scegli un servizio...</option>
                      <option value="sito-web">Sito Web Professionale</option>
                      <option value="ecommerce">E-commerce & Shop Online</option>
                      <option value="seo">SEO & Marketing Digitale</option>
                      <option value="branding">Branding & Design</option>
                      <option value="consulenza">Consulenza Strategica</option>
                      <option value="altro">Altro</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Messaggio *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Raccontaci brevemente il tuo progetto, i tuoi obiettivi e cosa cerchi..."
                      rows="5"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  {error && (
                    <div className="p-4 bg-red-500/20 border border-red-400 rounded-lg text-red-300">
                      {error}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Invio in corso...' : 'Invia Messaggio'}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    Risponderemo entro 24 ore. Non condivideremo mai i tuoi dati.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 border-t border-cyan-400/10">
          {[
            { icon: '✅', label: 'Garanzia 30 giorni' },
            { icon: '🔒', label: 'Dati Sicuri (SSL)' },
            { icon: '⚡', label: 'Risposta 24h' },
            { icon: '💯', label: '150+ Progetti' },
          ].map((badge, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl mb-2">{badge.icon}</div>
              <p className="text-sm text-gray-300">{badge.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
