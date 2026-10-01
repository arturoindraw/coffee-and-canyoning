
import React from 'react';
import { Language } from '../types';
import { TRADUCCIONES } from '../constants';

const Security: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = TRADUCCIONES[lang];

  const gear = [
    { name: lang === 'es' ? "Cascos" : "Helmets", img: "/images/gallery/casco.jpg" },
    { name: lang === 'es' ? "Arneses" : "Harnesses", img: "/images/gallery/arneses.jpg" },
    { name: lang === 'es' ? "Cuerdas" : "Ropes", img: "/images/gallery/cuerdas.jpg" },
    { name: lang === 'es' ? "Neoprenos" : "Wetsuits", img: "/images/gallery/neoprenos.jpg" }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 reveal">
          <h2 className="text-4xl font-bold font-montserrat text-[var(--secondary)]">{t.seg_title}</h2>
          <div className="bg-[var(--primary-coral)] text-white font-bold py-2 px-6 rounded-full text-sm animate-pulse">
            {t.seg_badge}
          </div>
        </div>

        <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-8 pb-8 md:pb-0 scroll-hide">
          {gear.map((item, idx) => (
            <div key={idx} className="min-w-[280px] md:min-w-0 reveal">
              <div className="rounded-2xl overflow-hidden shadow-lg mb-4 border-b-4 border-[var(--primary-coral)]">
                <img src={item.img} alt={item.name} className="w-full h-64 object-cover" />
              </div>
              <h4 className="text-center font-bold text-xl text-[var(--secondary)]">{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;
