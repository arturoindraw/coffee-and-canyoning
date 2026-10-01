
import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { TRADUCCIONES } from '../constants';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const t = TRADUCCIONES[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav_inicio, href: "#home" },
    { name: t.nav_nosotros, href: "#nosotros" },
    { name: t.nav_galeria, href: "#galeria" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${isScrolled ? 'bg-[#1A1A1A] py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo and Brand Container */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img 
            src="/images/logo.png"
            className="h-10 md:h-14 w-auto transition-transform group-hover:scale-110"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <div className="text-[var(--primary-coral)] font-bold text-xl md:text-2xl font-montserrat tracking-tight leading-tight">
            COFFEE & <span className="text-white">CANYONING</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-gap gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-white hover:text-[var(--primary-coral)] font-semibold transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex bg-white/10 rounded-full p-1 border border-white/20 ml-4">
            <button 
              onClick={() => setLang('es')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'es' ? 'bg-[var(--primary-coral)] text-white' : 'text-gray-300 hover:text-white'}`}
            >
              🇪🇸 ES
            </button>
            <button 
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'en' ? 'bg-[var(--primary-coral)] text-white' : 'text-gray-300 hover:text-white'}`}
            >
              🇺🇸 EN
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[var(--primary-coral)] p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#1A1A1A] transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[500px] border-b border-white/10' : 'max-h-0'}`}>
        <div className="p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-white text-lg font-semibold"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-4 mt-4">
            <button onClick={() => {setLang('es'); setIsOpen(false)}} className={`flex-1 py-3 rounded-lg font-bold border ${lang === 'es' ? 'bg-[var(--primary-coral)] border-transparent text-white' : 'bg-transparent border-white/20 text-white'}`}>🇪🇸 ES</button>
            <button onClick={() => {setLang('en'); setIsOpen(false)}} className={`flex-1 py-3 rounded-lg font-bold border ${lang === 'en' ? 'bg-[var(--primary-coral)] border-transparent text-white' : 'bg-transparent border-white/20 text-white'}`}>🇺🇸 EN</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
