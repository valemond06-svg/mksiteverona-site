'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (href) => {
    if (typeof window !== 'undefined') {
      if (pathname !== '/') {
        router.push('/' + href);
        return;
      }

      if (href === '/' || href === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (href.startsWith('#')) {
        const id = href.replace('#', '');
        // Dispatch custom event to trigger expansion and scroll in Services.jsx
        window.dispatchEvent(new CustomEvent('openService', { detail: id }));
        // Update URL hash without native jump
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <footer className="relative bg-transparent border-t border-slate-700/60">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1 space-y-4">
            <div
              className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => handleNavClick('/')}
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white p-1">
                <Image
                  src="/logo-new.png"
                  alt="Logo MKSITE"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-bold text-white tracking-wide">
                  MKSITE
                </span>
                <span className="text-[11px] text-cyan-300 uppercase tracking-widest">
                  Verona
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Creiamo siti web professionali e strategie di marketing digitale
              per aiutare le aziende a crescere online.
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
                  onClick={() => handleNavClick('#siti-web')}
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors text-left"
                >
                  Siti Web Professionali
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('#ecommerce')}
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors text-left"
                >
                  E-commerce & Shop
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('#seo')}
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors text-left"
                >
                  SEO & Marketing
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('#branding')}
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
                  onClick={() => handleNavClick('/')}
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
            © {currentYear} MKSITE. Tutti i diritti riservati. | Sviluppato a
            Verona con ❤️
          </div>
        </div>
      </div>
    </footer>
  );
}
