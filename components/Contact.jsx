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
    <section id="contatti" className="relative py-20 px-6 bg-transparent">
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
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-400">WhatsApp</p>
                    <p className="text-white font-bold">+39 370 109 3391</p>
                    <p className="text-xs text-gray-400">Risposta in 20 minuti</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:mksitestudio@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg border border-cyan-400/20 hover:border-cyan-400/50 bg-slate-800/50 hover:bg-cyan-500/10 transition-all group"
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
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
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
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
