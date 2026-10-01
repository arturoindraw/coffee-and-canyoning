
import React, { useState } from 'react';
import { Language } from '../types';
import { TRADUCCIONES } from '../constants';

const Contact: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = TRADUCCIONES[lang];
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    fecha: '',
    personas: '2'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola Sergio! Soy ${formData.nombre}. Quiero reservar canyoning para el ${formData.fecha} para ${formData.personas} personas. Mi tel: ${formData.telefono}`;
    window.open(`https://wa.me/573015421123?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contacto" className="py-24 relative overflow-hidden text-white">
      {/* Background Image with Coral Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/gallery/i-4.jpg')" }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-[var(--primary-coral)]/90 to-[var(--secondary)]/90" />

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="flex-1 reveal">
            <h2 className="text-5xl font-bold mb-6 font-montserrat">{t.res_title}</h2>
            <p className="text-xl mb-8 font-semibold">{t.res_horarios}</p>
            <p className="mb-10 text-white/80 leading-relaxed">
              {t.res_descripcion}
            </p>
            <div className="space-y-4">
              <a href="tel:+573015421123" className="flex items-center gap-4 text-lg hover:translate-x-2 transition-transform">
                <span className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">📞</span>
                +57 301 542 1123
              </a>
              <a href="mailto:coffeeandcanyoning@gmail.com" className="flex items-center gap-4 text-lg hover:translate-x-2 transition-transform">
                <span className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">✉️</span>
                coffeeandcanyoning@gmail.com
              </a>
            </div>
          </div>

          <div className="flex-1 reveal">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl text-[var(--text-dark)] shadow-2xl">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-2 uppercase text-gray-500">{t.res_nombre}</label>
                  <input 
                    type="text" 
                    required
                    className="w-full border-2 border-gray-100 p-4 rounded-xl focus:border-[var(--primary-coral)] outline-none"
                    placeholder="Sergio C."
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 uppercase text-gray-500">{t.res_telefono}</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full border-2 border-gray-100 p-4 rounded-xl focus:border-[var(--primary-coral)] outline-none"
                    placeholder="+57 300..."
                    onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-2 uppercase text-gray-500">{t.res_fecha}</label>
                    <input 
                      type="date" 
                      required
                      className="w-full border-2 border-gray-100 p-4 rounded-xl focus:border-[var(--primary-coral)] outline-none"
                      onChange={(e) => setFormData({...formData, fecha: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 uppercase text-gray-500">{t.res_personas}</label>
                    <select 
                      className="w-full border-2 border-gray-100 p-4 rounded-xl focus:border-[var(--primary-coral)] outline-none bg-white"
                      onChange={(e) => setFormData({...formData, personas: e.target.value})}
                    >
                      {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                </div>
                <button type="submit" className="w-full btn-coral text-white font-bold py-5 rounded-xl text-lg coral-glow uppercase mt-4">
                  {t.res_btn}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
