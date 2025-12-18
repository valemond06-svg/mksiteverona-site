'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900 border-t border-cyan-400/20">
      {/* Main Footer */}
      <div className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-white">MKSITE</h3>
              <p className="text-gray-400 text-sm">
                Trasformiamo idee in macchine di acquisizione clienti che generano risultati reali.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-cyan-400/20 rounded-lg flex items-center justify-center text-cyan-400 transition-all"
                >
                  📱
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-cyan-400/20 rounded-lg flex items-center justify-center text-cyan-400 transition-all"
                >
                  💼
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-cyan-400/20 rounded-lg flex items-center justify-center text-cyan-400 transition-all"
                >
                  💻
                </a>
              </div>
            </div>

            {/* Servizi */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white">Servizi</h4>
              <ul className="space-y-2">
                {[
                  { label: 'Siti Web', href: '#servizi' },
                  { label: 'E-commerce', href: '#servizi' },
                  { label: 'SEO & Marketing', href: '#servizi' },
                  { label: 'Branding & Design', href: '#servizi' },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white">Company</h4>
              <ul className="space-y-2">
                {[
                  { label: 'Chi Siamo', href: '#' },
                  { label: 'Blog', href: '#blog' },
                  { label: 'Casi di Studio', href: '#blog' },
                  { label: 'Contatti', href: '#contatti' },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white">Legal</h4>
              <ul className="space-y-2">
                {[
                  { label: 'Privacy Policy', href: '#' },
                  { label: 'Termini di Servizio', href: '#' },
                  { label: 'Cookie Policy', href: '#' },
                  { label: 'Disclaimer', href: '#' },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-cyan-400/10 pt-8">
            {/* CTA Row */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-400/20 p-6 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    Pronti a Far Decollare il Tuo Business?
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Contattaci oggi. Prima consulenza gratuita.
                  </p>
                </div>
                <div className="flex gap-4 flex-shrink-0">
                  <a
                    href="#contatti"
                    className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all whitespace-nowrap"
                  >
                    Contattaci
                  </a>
                  <a
                    href="https://wa.me/393334567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 border border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 transition-all whitespace-nowrap"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-400">
              <p>
                © {currentYear} MKSITE. Tutti i diritti riservati. Sviluppato con ❤️ a Verona.
              </p>

              <div className="flex items-center gap-6">
                <a
                  href="mailto:hello@mksite.it"
                  className="hover:text-cyan-400 transition-colors"
                >
                  hello@mksite.it
                </a>
                <a
                  href="tel:+393334567890"
                  className="hover:text-cyan-400 transition-colors"
                >
                  +39 333 45 67 890
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </footer>
  );
}

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-cyan-500/50 transition-all z-40 font-bold"
    >
      ↑
    </button>
  ) : null;
}
