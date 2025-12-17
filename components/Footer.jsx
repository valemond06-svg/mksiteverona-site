'use client';

import Link from 'next/link';
import { BRAND } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold text-cyan-400">{BRAND.logo}</span>
              <span className="text-lg font-bold text-white">{BRAND.name}</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Creiamo siti web che convertono per bar, ristoranti, negozi e parrucchieri a Verona.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-400/20 hover:text-cyan-400 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-400/20 hover:text-cyan-400 transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={BRAND.whatsapp_url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-400/20 hover:text-cyan-400 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.656.729 5.229 2.112 7.461L2.06 23.984l7.977-2.093A9.879 9.879 0 0012.051 24c5.455 0 9.856-4.436 9.856-9.853 0-2.621-.898-5.096-2.543-7.084a9.859 9.859 0 00-7.309-3.042z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-6">Navigazione</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#hero"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#servizi"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  Servizi
                </a>
              </li>
              <li>
                <a
                  href="#contatti"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  Contatti
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Servizi</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#servizi"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  Web Design
                </a>
              </li>
              <li>
                <a
                  href="#servizi"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  E-commerce
                </a>
              </li>
              <li>
                <a
                  href="#servizi"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  SEO & Marketing
                </a>
              </li>
              <li>
                <a
                  href="#servizi"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  Branding
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contatti</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${BRAND.phone}`}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  {BRAND.email}
                </a>
              </li>
              <li className="text-gray-400 text-sm">
                {BRAND.location}
              </li>
              <li>
                <a
                  href={BRAND.whatsapp_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 text-sm"
                >
                  Contattaci
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>
            © {currentYear} {BRAND.name}. Tutti i diritti riservati.
          </p>
          <div className="flex gap-6 mt-6 md:mt-0">
            <a
              href="#"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Cookie Policy
            </a>
            <a
              href="#"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Termini di Servizio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
