
import React from 'react';
import { Language } from '../types';
import { TRADUCCIONES } from '../constants';

const Services: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = TRADUCCIONES[lang];

  const services = [
    { title: t.serv_1, emoji: "🎒" },
    { title: t.serv_2, emoji: "👨‍🏫" },
    { title: t.serv_3, emoji: "🛡️" },
    { title: t.serv_4, emoji: "📸" }
  ];

  return (
    <section className="py-24 bg-[#1A1A1A] relative overflow-hidden">
      {/* Animated Water Texture Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/water.png")',
          animation: 'waterfall 20s linear infinite'
        }} 
      />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 font-montserrat reveal">
          {t.serv_title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((serv, idx) => (
            <div 
              key={idx} 
              className="reveal p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors flex items-start gap-4 group"
            >
              <div className="text-4xl group-hover:scale-125 transition-transform">{serv.emoji}</div>
              <p className="text-white text-lg font-semibold">{serv.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
