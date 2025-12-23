'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BRAND } from '@/lib/constants';

const NAV_ITEMS = [
  { href: '#home', label: 'Home' },
  { href: '#servizi', label: 'Servizi' },
  // { href: '#portfolio', label: 'Portfolio' }, // riattiva quando rimetti la sezione
    { href: '#blog', label: 'Blog' },
  { href: '#contatti', label: 'Contatti' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['hero', 'servizi', 'contatti', 'blog'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800'
          : 'bg-gradient-to-b from-slate-900/80 to-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-2xl text-white hover:text-cyan-400 transition-colors"
          >
            <span className="text-cyan-400">{BRAND.logo}</span>
            <span>{BRAND.name}</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative font-semibold transition-colors duration-300 group ${
                  activeSection === item.href.slice(1)
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
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
            className="md:hidden p-2 hover:bg-slate-800 rounded-lg transition-all duration-300"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-cyan-400 transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`h-0.5 w-full bg-cyan-400 transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`h-0.5 w-full bg-cyan-400 transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 animate-fade-in-down">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? 'bg-cyan-400/20 text-cyan-400 font-semibold'
                    : 'text-gray-300 hover:bg-slate-800'
                }`}
              >
                {item.label}
              </a>
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
