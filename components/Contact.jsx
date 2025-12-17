'use client';

import { useState } from 'react';
import { BRAND, SERVICES } from '@/lib/constants';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Errore nell\'invio del messaggio');
      }

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err.message);
      console.error('Form error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contatti" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold mb-6">Iniziamo Insieme</h2>
          <p className="text-xl text-gray-300">
            Raccontaci il tuo progetto. Ti risponderemo entro 24 ore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-white">Nome *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Il tuo nome"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-white">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tua@email.com"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-white">Telefono</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+39 123 456 7890"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-white">Che servizio ti interessa?</label>
                <select 
                  name="service" 
                  value={formData.service} 
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="">Scegli un servizio...</option>
                  {SERVICES.map((service) => (
                    <option key={service.id} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-white">Messaggio *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Raccontaci il tuo progetto..."
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 min-h-[150px]"
                />
              </div>

              {error && (
                <div className="bg-red-500 bg-opacity-10 border border-red-500 rounded-lg p-4 text-red-400">
                  {error}
                </div>
              )}

              {submitted && (
                <div className="bg-green-500 bg-opacity-10 border border-green-500 rounded-lg p-4 text-green-400">
                  ✓ Messaggio inviato! Ti contatteremo a breve.
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all disabled:opacity-50"
              >
                {loading ? '⏳ Invio in corso...' : '📨 Invia Messaggio'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="space-y-8">
              {/* Direct Channels */}
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-6 text-white">Contattaci Direttamente</h3>

                <div className="space-y-6">
                  {/* WhatsApp */}
                  <a
                    href={BRAND.whatsapp_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-slate-900 rounded-lg hover:border-cyan-400 border border-transparent transition-colors"
                  >
                    <span className="text-3xl">💬</span>
                    <div>
                      <h4 className="font-semibold text-white">WhatsApp</h4>
                      <p className="text-sm text-gray-400">{BRAND.phone}</p>
                      <p className="text-sm text-cyan-400">Scrivi un messaggio</p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href={`tel:${BRAND.phone}`}
                    className="flex items-start gap-4 p-4 bg-slate-900 rounded-lg hover:border-cyan-400 border border-transparent transition-colors"
                  >
                    <span className="text-3xl">☎️</span>
                    <div>
                      <h4 className="font-semibold text-white">Telefono</h4>
                      <p className="text-sm text-gray-400">{BRAND.phone}</p>
                      <p className="text-sm text-cyan-400">Chiama ora</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="flex items-start gap-4 p-4 bg-slate-900 rounded-lg hover:border-cyan-400 border border-transparent transition-colors"
                  >
                    <span className="text-3xl">📧</span>
                    <div>
                      <h4 className="font-semibold text-white">Email</h4>
                      <p className="text-sm text-gray-400">{BRAND.email}</p>
                      <p className="text-sm text-cyan-400">Scrivi un'email</p>
                    </div>
                  </a>

                  {/* Instagram */}
                  <a
                    href={BRAND.instagram_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-slate-900 rounded-lg hover:border-cyan-400 border border-transparent transition-colors"
                  >
                    <span className="text-3xl">📸</span>
                    <div>
                      <h4 className="font-semibold text-white">Instagram</h4>
                      <p className="text-sm text-gray-400">{BRAND.instagram}</p>
                      <p className="text-sm text-cyan-400">Seguici online</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-br from-cyan-400 from-opacity-10 to-blue-400 to-opacity-5 border border-cyan-400 border-opacity-30 rounded-lg p-6">
                <div className="flex gap-4">
                  <span className="text-3xl">⚡</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Risposta Veloce</h4>
                    <p className="text-sm text-gray-300">
                      Ti rispondiamo entro 24 ore. Di solito molto prima.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
