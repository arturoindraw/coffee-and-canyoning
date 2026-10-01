
import React from 'react';
import { Language } from '../types';
import { TRADUCCIONES } from '../constants';

const Footer: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = TRADUCCIONES[lang];

  return (
    <footer className="bg-[#1A1A1A] text-white pt-24 pb-12 px-4 border-t border-white/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 lg:col-span-2">
            {/* Logo and Brand Container Footer - Optimized with Flexbox and White Filter */}
            <div className="flex items-center gap-4 mb-6 group cursor-default">
              <img 
                src="/images/logo.png" 
                alt=" " 
                className="h-12 md:h-14 w-auto transition-transform group-hover:scale-105"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <div className="text-[var(--primary-coral)] font-bold text-2xl md:text-3xl font-montserrat tracking-tight">
                COFFEE & <span className="text-white">CANYONING</span>
              </div>
            </div>
            
            <p className="text-white/60 text-lg mb-8 max-w-md">
              {t.foot_tagline}
            </p>
            <div className="flex gap-4">
              {[
                { icon: '📱', link: 'https://wa.me/573015421123' },
                { icon: '📷', link: 'https://instagram.com/coffeeandcanyoning' },
                { icon: '✉️', link: 'mailto:coffeeandcanyoning@gmail.com' },
                { icon: '🔗', link: 'https://linktr.ee/coffeandcanyoning' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  target="_blank"
                  className="w-12 h-12 rounded-full border-2 border-[var(--primary-coral)] flex items-center justify-center text-xl hover:bg-[var(--primary-coral)] hover:text-white transition-all transform hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[var(--primary-coral)] font-bold text-lg mb-6 uppercase tracking-wider">{t.foot_enlaces}</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#home" className="hover:text-white transition-colors">{t.nav_inicio}</a></li>
              <li><a href="#recorridos" className="hover:text-white transition-colors">{t.nav_recorridos}</a></li>
              <li><a href="#nosotros" className="hover:text-white transition-colors">{t.nav_nosotros}</a></li>
              <li><a href="#galeria" className="hover:text-white transition-colors">{t.nav_galeria}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--primary-coral)] font-bold text-lg mb-6 uppercase tracking-wider">{t.foot_horarios}</h4>
            <ul className="space-y-4 text-white/70">
              <li>🌅 {lang === 'es' ? 'Salida matutina: 7:00 AM' : 'Morning Departure: 7:00 AM'}</li>
              <li>📅 {lang === 'es' ? 'Lunes a Domingo' : 'Monday to Sunday'}</li>
              <li>⏱️ {lang === 'es' ? 'Duración: 6-8 horas' : 'Duration: 6-8 hours'}</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center text-white/40 text-sm">
          {/* Copyright con logo de Bigermark */}
          <div className="flex flex-col items-center gap-2 mb-3">
            <div className="flex items-center gap-3">
              <a
                href="https://www.bigermark.online"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <img
                  src="/images/bigermark-logo.png"
                  alt="Bigermark - Diseño Digital"
                  className="h-7 w-auto"
                />
              </a>
              <span className="text-white/20">|</span>
              <p className="text-white/40">{t.foot_copyright}</p>
            </div>
          </div>
          <p>Santa Rosa de Cabal, Risaralda, Colombia</p>

          <div className="flex items-center justify-center gap-3 mt-4">
            <img
              src="/images/rnt.png"
              alt="Registro Nacional de Turismo"
              className="h-6 w-auto opacity-80"
            />
            <span className="font-extrabold text-white">
              RNT 252901
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
