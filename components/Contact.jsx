'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log('contact res', data);

      if (!res.ok || !data.ok) {
        alert(data.error || 'Errore durante l’invio, riprova.');
        return;
      }

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (err) {
      console.error(err);
      alert('Errore di rete, riprova più tardi.');
    }
  };

  return (
    <section id="contatti" className="relative py-20 px-6 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-cyan-400 font-bold text-sm uppercase tracking-widest">
            💬 Contattaci
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Parliamo del Tuo Progetto
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Rispondiamo in meno di 24 ore. Scrivi un messaggio o contattaci direttamente via WhatsApp.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-slate-700/50 to-slate-700/30 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Invia un Messaggio</h3>

            {submitted && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-400/50 rounded-lg text-green-300 text-sm">
                ✓ Grazie! Ti contatteremo al più presto.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-cyan-400/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="Il tuo nome"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-cyan-400/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="tua@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-cyan-400/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="+39 ..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Messaggio
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800 border border-cyan-400/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  placeholder="Scrivi il tuo messaggio..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                Invia Messaggio
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-slate-700/50 to-slate-700/30 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contattaci Direttamente</h3>

              <div className="space-y-6">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/393701093391"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg border border-cyan-400/20 hover:border-cyan-400/50 bg-slate-800/50 hover:bg-cyan-500/10 transition-all group"
                >
                  <div className="flex-shrink-0 text-3xl group-hover:scale-110 transition-transform">
                    💬
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-400">WhatsApp</p>
                    <p className="text-white font-bold">+39 370 109 3391</p>
                    <p className="text-xs text-gray-400">Risposta in 5 minuti</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:mksitestudio@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg border border-cyan-400/20 hover:border-cyan-400/50 bg-slate-800/50 hover:bg-cyan-500/10 transition-all group"
                >
                  <div className="flex-shrink-0 text-3xl group-hover:scale-110 transition-transform">
                    📧
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-400">Email</p>
                    <p className="text-white font-bold">mksitestudio@gmail.com</p>
                    <p className="text-xs text-gray-400">Rispondiamo in 24 ore</p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/mksite.verona"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg border border-cyan-400/20 hover:border-cyan-400/50 bg-slate-800/50 hover:bg-cyan-500/10 transition-all group"
                >
                  <div className="flex-shrink-0 text-3xl group-hover:scale-110 transition-transform">
                    📸
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-400">Instagram</p>
                    <p className="text-white font-bold">@mksite.verona</p>
                    <p className="text-xs text-gray-400">Seguici sui social</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Info Box */}
            <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8">
              <h4 className="text-lg font-bold text-white mb-4">Tempi di Risposta</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span>
                  WhatsApp: entro 20 minuti
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span>
                  Email: entro 24 ore
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span>
                  Form: entro 24 ore
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
