'use client';

import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold mb-6">Cosa Dicono i Nostri Clienti</h2>
          <p className="text-xl text-gray-300">
            Sentiamo raccontare da chi ha scelto di lavorare con noi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div 
              key={testimonial.id} 
              className="bg-slate-700 border border-slate-600 rounded-lg p-8 hover:border-cyan-400 transition-all"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-2xl">⭐</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg mb-6 italic text-gray-300">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-slate-600 pt-4">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-cyan-400">{testimonial.business}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            Segui le storie dei nostri clienti su Instagram
          </p>
          <a
            href="https://instagram.com/mksiteverona"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-slate-700 text-cyan-400 font-semibold rounded-lg border border-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all"
          >
            Visita il nostro Instagram 📸
          </a>
        </div>
      </div>
    </section>
  );
}
