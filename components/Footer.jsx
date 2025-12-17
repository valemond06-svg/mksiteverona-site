'use client';

import { BRAND } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    Servizi: [
      { label: 'Siti Web Professionali', href: '#servizi' },
      { label: 'E-commerce', href: '#servizi' },
      { label: 'SEO Locale', href: '#servizi' },
      { label: 'Web Design', href: '#servizi' },
    ],
    Azienda: [
      { label: 'Chi Siamo', href: '#chi-siamo' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Blog', href: '#blog' },
      { label: 'Contatti', href: '#contatti' },
    ],
    Legale: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Termini di Servizio', href: '#terms' },
      { label: 'Cookie Policy', href: '#cookies' },
    ],
  };

  return (
    <footer className="bg-slate-800 border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center text-slate-900 font-black">
                M
              </span>
              <span className="font-bold text-lg text-white">{BRAND.name}</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              {BRAND.description}
            </p>
            <div className="flex gap-4">
              <a
                href={BRAND.instagram_url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-700 hover:bg-cyan-400 hover:text-slate-900 transition-colors text-lg"
                aria-label="Instagram"
              >
                📸
              </a>
              <a
                href={BRAND.whatsapp_url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-700 hover:bg-cyan-400 hover:text-slate-900 transition-colors text-lg"
                aria-label="WhatsApp"
              >
                💬
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-700 hover:bg-cyan-400 hover:text-slate-900 transition-colors text-lg"
                aria-label="Email"
              >
                📧
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-white">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <p className="text-gray-400 text-sm">
            © {currentYear} {BRAND.name}. Tutti i diritti riservati.
          </p>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
              Privacy
            </a>
            <a href="#terms" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
              Termini
            </a>
            <a href="#cookies" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
              Cookie
            </a>
          </div>

          <p className="text-gray-400 text-sm">
            Made with ❤️ in Verona
          </p>
        </div>
      </div>
    </footer>
  );
}
