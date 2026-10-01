
import React from 'react';
import { Language } from '../types';
import { TRADUCCIONES } from '../constants';

const Location: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = TRADUCCIONES[lang];

  // URL de Google Maps del Parque Principal
  const googleMapsUrl = "https://maps.app.goo.gl/zapXJDRJEMykQ1fY6";

  return (
    <section id="ubicacion" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 reveal">
            <h2 className="text-4xl font-bold mb-6 font-montserrat text-[var(--secondary)]">
              {t.ubic_title}
            </h2>
            <div className="flex items-start gap-4 mb-6">
              <span className="text-3xl">📍</span>
              <div>
                <h4 className="font-bold text-xl mb-1">{t.ubic_direccion}</h4>
                <p className="text-gray-500">{t.ubic_info}</p>
              </div>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {lang === 'es' ? 
                "Nuestro punto de encuentro es en el Parque Principal de Santa Rosa de Cabal. Desde allí, nos aventuramos hacia los cañones escondidos donde la aventura nos espera." : 
                "Our meeting point is at the Main Park of Santa Rosa de Cabal. From there, we venture towards the hidden canyons where adventure awaits."
              }
            </p>
            <a 
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[var(--secondary)] text-white py-4 px-10 rounded-full font-bold hover:bg-[var(--primary-coral)] transition-colors"
            >
              {lang === 'es' ? 'Cómo llegar con Google Maps' : 'How to get there with Google Maps'}
            </a>
          </div>

          <div className="w-full lg:w-1/2 h-[450px] rounded-3xl overflow-hidden shadow-2xl reveal">
            <a 
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31809.872543210123!2d-75.62090123456789!3d4.868600012345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38f5c1d1e1e1e1%3A0x1234567890abcdef!2sParque%20Principal%20Santa%20Rosa%20de%20Cabal!5e0!3m2!1ses!2sco!4v1234567890123!5m2!1ses!2sco" 
                width="100%" 
                height="100%" 
                style={{ border: 0, pointerEvents: 'none' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
