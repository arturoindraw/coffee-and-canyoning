
import React, { useState } from 'react';
import { Language } from '../types';
import { TRADUCCIONES } from '../constants';

interface HeroProps {
  lang: Language;
  scroll: number;
}

const Hero: React.FC<HeroProps> = ({ lang, scroll }) => {
  const t = TRADUCCIONES[lang];
  const [showVideo, setShowVideo] = useState(false);
  
  // Parallax calculation
  const factor = typeof window !== 'undefined' && window.innerWidth < 768 ? 0.5 : 1.0;
  const leftX = -scroll * factor;
  const rightX = scroll * factor;
  const opacity = Math.min(scroll / 250, 1);

  return (
    <section id="home" className="relative h-screen overflow-hidden flex items-center justify-center bg-black">
      {/* Background Central Waterfall */}
      <div 
        className="absolute inset-0 z-0 opacity-0 transition-opacity duration-300"
        style={{ 
          opacity,
          backgroundImage: "url('/images/hero/hero-bg-1.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Parallax Mountains */}
      <div 
        className="absolute inset-0 z-10 transition-transform duration-75 pointer-events-none"
        style={{ 
          transform: `translateX(${leftX}px)`,
          backgroundImage: "url('/images/hero/hero-bg-2.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)'
        }}
      />
      <div 
        className="absolute inset-0 z-10 transition-transform duration-75 pointer-events-none"
        style={{ 
          transform: `translateX(${rightX}px)`,
          backgroundImage: "url('/images/hero/hero-bg-2.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl font-montserrat">
          {t.hero_title}
        </h1>
        <p className="text-lg md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-semibold drop-shadow-lg">
          {t.hero_subtitle}
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Botón Reservar */}
          <button 
            onClick={() => {
              const contacto = document.getElementById('contacto');
              contacto?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="btn-coral text-white font-bold py-5 px-10 rounded-full text-xl coral-glow uppercase tracking-wide w-full md:w-auto transform hover:scale-105 cursor-pointer"
          >
            {t.hero_cta_reserva}
          </button>
          
          {/* Botón Ver Video */}
          <button 
            onClick={() => setShowVideo(true)}
            className="bg-transparent border-2 border-[var(--primary-coral)] text-[var(--primary-coral)] font-bold py-5 px-10 rounded-full text-xl hover:bg-[var(--primary-coral)] hover:text-white transition-all w-full md:w-auto cursor-pointer"
          >
            {t.hero_cta_video} ▶
          </button>
        </div>
      </div>

      {/* Animated Waterfall Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
      
      {/* Modal de Video */}
      {showVideo && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <div 
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white text-4xl font-bold hover:text-[var(--primary-coral)] transition-colors z-10"
              aria-label="Cerrar video"
            >
              ✕
            </button>
            
            {/* Video de YouTube */}
            <iframe
              className="w-full h-full rounded-lg shadow-2xl"
              src="https://www.youtube.com/embed/qA_xGx59GII?autoplay=1"
              title="Video promocional Coffee & Canyoning"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
