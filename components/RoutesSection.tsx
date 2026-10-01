import React, { useState } from 'react'; // 1. Agregamos useState
import { Language } from '../types';
import { TRADUCCIONES } from '../constants';

const RoutesSection: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = TRADUCCIONES[lang];
  
  // 2. Estado para controlar qué cascada está seleccionada
  const [selectedWaterfall, setSelectedWaterfall] = useState<any>(null);

  const routes = [
    { 
      name: "Cascada Despertar del Cañón", 
      img: "/images/gallery/d-2.jpg", 
      tag: "8m",
      desc: lang === 'es' ? 'Tu primer descenso en rapel. Aquí comienza el viaje: un descenso suave ideal para principiantes que desean sentir el agua por primera vez y confiar en el cañón.' : 'Your first rappelling descent. Here begins the journey: a gentle descent ideal for beginners who want to feel the water for the first time and trust the canyon.'
    },
    { 
      name: "Cascada Arco Iris", 
      img: "/images/gallery/d-3.jpg", 
      tag: "25m",
      desc: lang === 'es' ? 'Rapel fraccionado con arcoíris natural en el Eje Cafetero. Este descenso técnico se vive en dos etapas, sintiendo la fuerza del agua y la inclinación de la roca bajo los pies.' : 'multi-pitch rappel with natural rainbow in Colombia´s Coffee Region. This technical descent unfolds in two stages, feeling the water´s force and the rock´s inclination beneath your feet.'
    },
    { 
      name: "Cascada Tormenta Interior", 
      img: "/images/gallery/d-4.jpg", 
      tag: "15m",
      desc: lang === 'es' ? 'Descenso inmersivo bajo la caída de agua. Durante este rapel vertical, la cascada golpea tu casco y cuerpo. La "Tormenta" no es solo un desafío de canyoning, es donde el miedo se transforma en determinación y descubres tu verdadera fuerza mental.' : 'immersive descent under the waterfall. During this vertical rappel, the waterfall strikes your helmet and body. The "Storm" is not just a canyoning challenge: it´s where fear transforms into determination and you discover your true mental strength.'
    },
    { 
      name: "Cascada El Encanto", 
      img: "/images/gallery/d-5.jpg", 
      tag: "9m",
      desc: lang === 'es' ? 'Rapel seco con vista panorámica de cascadas gemelas. Este descenso técnico se realiza por la roca, al lado del agua, permitiendo avanzar con serenidad y control total.' : 'dry rappel with panoramic view of twin waterfalls. This technical descent follows the rock face beside the water, allowing you to advance with serenity and total control.'
    },
    { 
      name: "Cascada Confianza", 
      img: "/images/gallery/d-6.jpg", 
      tag: "5m",
      desc: lang === 'es' ? 'Descenso para principiantes en canyoning. Después de atravesar retos intensos, este rapel corto se vive de forma diferente. Tu cuerpo ya entiende el movimiento técnico, tu mente respira con serenidad y cada paso se da con seguridad creciente.' : 'descent for canyoning beginners. After facing intense challenges, this short rappel feels different. Your body now understands the technical movement, your mind breathes with serenity, and each step is taken with growing confidence.'
    },
    { 
      name: "Cascada el Desafío Final", 
      img: "/images/gallery/d-7.jpg", 
      tag: "15m", 
      desc: lang === 'es' ? 'Rapel vertical: No es la cascada más alta del recorrido, pero sí la que simboliza tu transformación completa: confiar plenamente en ti mismo. Aquí cada persona descubre que es capaz de más de lo que imaginaba al iniciar la aventura.' : 'vertical rappel: It´s not the tallest waterfall on the route, but it symbolizes your complete transformation: fully trusting yourself. Here, each person discovers they´re capable of more than they imagined at the adventure´s start.'
    },
  ];

  return (
    <section id="recorridos" className="py-24 bg-[#F5F5F5] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat text-[var(--secondary)]">
            {lang === 'es' ? 'Nuestras 6 Cascadas' : 'Our 6 Waterfalls'}
          </h2>
          <div className="w-24 h-2 bg-[var(--primary-coral)] mx-auto mb-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {routes.map((route, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedWaterfall(route)} // 3. Abrir modal al hacer click
              className="floating-card group bg-white rounded-2xl overflow-hidden shadow-xl border border-transparent hover:border-[var(--primary-coral)] transition-all cursor-pointer relative"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {/* Contenido de la tarjeta (igual al tuyo) */}
              <div className="relative h-64 overflow-hidden">
                <img src={route.img} alt={route.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-[var(--primary-coral)] text-white px-4 py-1 rounded-full font-bold text-sm">{route.tag}</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-bold text-xl uppercase">{route.name}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[var(--secondary)]">{route.name}</h3>
                <p className="text-gray-500 text-sm">
                  {lang === 'es' ? 'Toca para ver más detalles.' : 'Tap to see more details.'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. VENTANA MODAL (Información detallada) */}
      {selectedWaterfall && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative">
            {/* Botón Cerrar */}
            <button 
              onClick={() => setSelectedWaterfall(null)}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-[var(--primary-coral)] text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors text-2xl font-bold"
            >
              ×
            </button>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 h-64 md:h-auto">
                <img src={selectedWaterfall.img} alt={selectedWaterfall.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:w-1/2">
                <span className="text-[var(--primary-coral)] font-bold uppercase tracking-widest text-sm">
                   {lang === 'es' ? 'Altura: ' : 'Height: '} {selectedWaterfall.tag}
                </span>
                <h3 className="text-3xl font-bold mt-2 mb-4 text-[var(--secondary)] font-montserrat">
                  {selectedWaterfall.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {selectedWaterfall.desc}
                </p>
                <button 
                  onClick={() => setSelectedWaterfall(null)}
                  className="w-full py-3 bg-[var(--primary-coral)] text-white font-bold rounded-xl hover:scale-105 transition-transform"
                >
                  {lang === 'es' ? 'Entendido' : 'Got it'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RoutesSection;
