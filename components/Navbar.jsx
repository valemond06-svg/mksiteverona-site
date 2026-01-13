'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { BRAND } from '@/lib/constants';



const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/servizi', label: 'Servizi' },
  { href: '/prezzi', label: 'Prezzi' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contatti', label: 'Contatti' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getActiveState = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const handleLogoClick = (e) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
        ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800'
        : 'bg-gradient-to-b from-slate-900/80 to-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo + Brand */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white p-1">
              <Image
                src="/logo-new.png"
                alt="Logo MKSITE"
                fill
                priority
                className="object-contain"
                sizes="48px"
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
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-semibold transition-colors duration-300 group ${getActiveState(item.href)
                  ? 'text-cyan-400'
                  : 'text-gray-300 hover:text-cyan-400'
                  }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 ${getActiveState(item.href)
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                    }`}
                />
              </Link>
            ))}

            <a
              href={BRAND.whatsapp_url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-label={mobileMenuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={mobileMenuOpen}
            className="md:hidden p-2 hover:bg-slate-800 rounded-lg transition-all duration-300"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-cyan-400 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
              />
              <span
                className={`h-0.5 w-full bg-cyan-400 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''
                  }`}
              />
              <span
                className={`h-0.5 w-full bg-cyan-400 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-all duration-300 ${getActiveState(item.href)
                  ? 'bg-cyan-400/20 text-cyan-400 font-semibold'
                  : 'text-gray-300 hover:bg-slate-800'
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={BRAND.whatsapp_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mt-2 px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-bold rounded-lg text-center hover:shadow-lg transition-all duration-300"
            >
              Contattaci su WhatsApp
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
