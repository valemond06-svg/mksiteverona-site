'use client';

import { useState } from 'react';
import { BRAND } from '@/lib/constants';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Servizi', href: '#servizi' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Prezzi', href: '#prezzi' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contatti', href: '#contatti' },
  ];

  return (
    <header className="fixed top-0 w-full bg-slate-900 bg-opacity-95 backdrop-blur-md border-b border-slate-700 z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="font-bold text-2xl flex items-center gap-2">
          <span className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center text-slate-900 font-black">
            M
          </span>
          <span className="text-white hidden sm:inline">{BRAND.name}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <a
            href={BRAND.whatsapp_url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            💬 WhatsApp
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={BRAND.whatsapp_url}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-semibold rounded-lg text-center mt-4"
            >
              💬 WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
