
import React from 'react';
import { Language } from '../types';
import { TRADUCCIONES } from '../constants';

const AboutUs: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = TRADUCCIONES[lang];

  return (
    <section id="nosotros" className="py-24 bg-gradient-to-b from-[#F5F5F5] to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat text-[var(--secondary)]">
            {t.nosotros_titulo}
          </h2>
          <p className="text-lg text-gray-500 font-medium">
            {t.nosotros_subtitulo}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">
          {/* Image Column */}
          <div className="w-full lg:w-5/12 relative reveal">
            <div className="rounded-[40px] overflow-hidden shadow-2xl relative">
              <img 
                src="/images/gallery/sergio-guia.jpg" 
                alt="Sergio Castañeda - Guía" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute bottom-6 left-6 btn-coral text-white px-8 py-4 rounded-full font-bold shadow-xl">
                {t.nosotros_badge}
              </div>
            </div>
            {/* Design elements */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-[var(--primary-coral)]/5 rounded-full blur-3xl" />
          </div>

          {/* Text Column */}
          <div className="w-full lg:w-7/12 reveal">
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-[var(--primary-coral)] mb-6 font-montserrat">
                {t.nosotros_quien}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t.nosotros_desc1}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.nosotros_desc2}
              </p>

              <p className="mt-6 text-xl font-black text-[var(--secondary)]">RNT 252901
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: "🎯", title: t.valor_1_titulo, desc: t.valor_1_desc },
                { icon: "🛡️", title: t.valor_2_titulo, desc: t.valor_2_desc },
                { icon: "💚", title: t.valor_3_titulo, desc: t.valor_3_desc }
              ].map((val, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 text-center border border-gray-100">
                  <div className="text-4xl mb-4">{val.icon}</div>
                  <h4 className="font-bold text-[var(--secondary)] mb-2 uppercase text-sm tracking-wide">
                    {val.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-tight">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-left">
              <a 
                href="#contacto" 
                className="inline-block border-2 border-[var(--primary-coral)] text-[var(--primary-coral)] px-10 py-4 rounded-full font-bold uppercase text-sm hover:bg-[var(--primary-coral)] hover:text-white transition-all shadow-lg hover:shadow-[var(--primary-coral)]/30"
              >
                {t.nosotros_cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
