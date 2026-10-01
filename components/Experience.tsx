
import React from 'react';
import { Language } from '../types';
import { TRADUCCIONES } from '../constants';

const Experience: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = TRADUCCIONES[lang];

  const icons = [
    { emoji: "🧗‍♂️", label: t.exp_icon1 },
    { emoji: "💦", label: t.exp_icon2 },
    { emoji: "🌿", label: t.exp_icon3 },
    { emoji: "⚡", label: t.exp_icon4 }
  ];

  return (
    <section id="nosotros" className="py-24 bg-white text-[var(--text-dark)] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat text-[var(--secondary)]">
              {t.exp_title}
            </h2>
            <p className="text-[var(--primary-coral)] font-bold text-xl mb-8 tracking-widest">
              {t.exp_stats}
            </p>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              {t.exp_descripcion_1}
              <strong>{t.exp_descripcion_nombre}</strong>
              {t.exp_descripcion_2}
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {icons.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[var(--primary-coral)] to-[var(--primary-dark)] rounded-full flex items-center justify-center text-3xl shadow-lg border-4 border-white mb-3">
                    {item.emoji}
                  </div>
                  <span className="font-bold text-sm uppercase tracking-tighter">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 relative reveal">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/images/gallery/i-1.jpg" 
                alt="Canyoning Action" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Background Accent */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[var(--primary-coral)]/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
