'use client';


import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHasShadow(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Servizi', href: '#servizi' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contatti', href: '#contatti' },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    if (typeof window !== 'undefined') {
      if (href === '/' || href === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${hasShadow
        ? 'bg-slate-900/70 backdrop-blur-md border-b border-cyan-500/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
        : 'bg-transparent'
        }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => handleNavClick('/')}
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-slate-900 font-black text-lg">
            M
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

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-semibold text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-200 hover:text-cyan-400 transition-colors"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Apri menu"
        >
          {isOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 border-t border-slate-700/60">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="w-full text-left text-sm font-semibold text-gray-200 hover:text-cyan-400 py-2"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
