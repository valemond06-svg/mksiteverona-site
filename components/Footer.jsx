'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href, serviceId) => {
    // Se vogliamo anche aprire una card servizi
    if (serviceId && typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('selectService', { detail: serviceId }));
    }

    if (typeof window !== 'undefined' && href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-700/60">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1 space-y-4">
            <div
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => handleNavClick('#home')}
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-slate-900 font-black text-lg">
                M
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-bold text-white tracking-wide">MKSITE</span>
                <span className="text-[11px] text-cyan-300 uppercase tracking-widest">
                  Verona
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Creiamo siti web professionali e strategie di marketing digitale per aiutare le aziende a crescere online.
            </p>
            <div className="pt-4 space-y-2">
              <a
                href="tel:+393701093391"
                className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>📞</span>
                <span>+39 370 109 3391</span>
              </a>
              <a
                href="mailto:mksitestudio@gmail.com"
                className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>📧</span>
                <span>mksitestudio@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Servizi */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
              Servizi
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('#siti-web', 'siti-web')}
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors text-left"
                >
                  Siti Web Professionali
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('#ecommerce', 'ecommerce')}
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors text-left"
                >
                  E-commerce & Shop
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('#seo', 'seo')}
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors text-left"
                >
                  SEO & Marketing
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('#branding', 'branding')}
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors text-left"
                >
                  Branding & Design
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('#home')}
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('#blog')}
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors text-left"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('#contatti')}
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors text-left"
                >
                  Contatti
                </button>
              </li>
            </ul>
          </div>

          {/* Legale */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
              Legale
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/termini"
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Termini di Servizio
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie"
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/60 my-12" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-gray-400">
            © {currentYear} MKSITE. Tutti i diritti riservati. | Sviluppato a Verona con ❤️
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/mksite.verona"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition-colors group"
              aria-label="Instagram"
            >
              <svg
                className="w-5 h-5 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m5.521 17.957a6.955 6.955 0 01-3.766 1.042 6.955 6.955 0 01-3.766-1.042 6.96 6.96 0 01-2.203-2.717H5.004v-2.458h2.013a6.978 6.978 0 01-.213-1.788 6.978 6.978 0 01.213-1.788H5.004V8.768h2.782a6.96 6.96 0 012.203-2.717 6.955 6.955 0 013.766-1.042 6.955 6.955 0 013.766 1.042 6.96 6.96 0 012.203 2.717h2.782v2.458h-2.013a6.978 6.978 0 01.213 1.788 6.978 6.978 0 01-.213 1.788h2.013v2.458h-2.782a6.96 6.96 0 01-2.203 2.717" />
              </svg>
            </a>
            <a
              href="https://wa.me/393701093391"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors group"
              aria-label="WhatsApp"
            >
              <svg
                className="w-5 h-5 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.364-3.905 6.75-1.896 10.157 2.028 3.404 6.884 4.409 10.287 2.381 3.402-2.028 4.409-6.884 2.381-10.287-2.028-3.404-6.884-4.41-10.287-2.381zm0-2.982c5.432 0 9.834 4.402 9.834 9.834 0 5.432-4.402 9.834-9.834 9.834S2.226 20.044 2.226 14.612C2.226 9.18 6.628 4.778 12.06 4.778z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
