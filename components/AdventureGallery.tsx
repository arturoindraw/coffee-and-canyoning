
import React, { useState } from 'react';
import { Language } from '../types';
import { TRADUCCIONES } from '../constants';

const AdventureGallery: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = TRADUCCIONES[lang];
  const [activeImg, setActiveImg] = useState<string | null>(null);

  const images = [
    { src: "/images/gallery/aventura-1.jpg", title: t.galeria_img1, large: true },
    { src: "/images/gallery/aventura-2.jpg", title: t.galeria_img2 },
    { src: "/images/gallery/aventura-3.jpg", title: t.galeria_img3 },
    { src: "/images/gallery/aventura-4.jpg", title: t.galeria_img4 },
    { src: "/images/gallery/aventura-5.jpg", title: t.galeria_img5, large: true },
    { src: "/images/gallery/aventura-6.jpg", title: t.galeria_img6 },
    { src: "/images/gallery/aventura-7.jpg", title: t.galeria_img7 },
    { src: "/images/gallery/aventura-8.jpg", title: t.galeria_img8 }
  ];

  return (
    <section id="galeria" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat text-[var(--secondary)]">
            {t.galeria_titulo}
          </h2>
          <p className="text-lg text-gray-500">
            {t.galeria_subtitulo}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-20">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              onClick={() => setActiveImg(img.src)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer aspect-square reveal ${img.large ? 'md:col-span-2 md:row-span-2' : ''}`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-bold text-sm tracking-wide uppercase">
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="max-w-xl mx-auto reveal">
          <div className="bg-gradient-to-br from-[var(--primary-coral)]/5 to-[var(--primary-dark)]/10 p-10 rounded-3xl text-center border border-[var(--primary-coral)]/10">
            <p className="text-xl font-bold text-[var(--secondary)] mb-6">
              {t.galeria_cta_texto}
            </p>
            <a 
              href="https://instagram.com/coffeeandcanyoning" 
              target="_blank" 
              className="inline-flex items-center gap-3 btn-coral text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-[var(--primary-coral)]/40 transition-all hover:-translate-y-1"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.947.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              {t.galeria_cta_btn}
            </a>
          </div>
        </div>
      </div>

      {/* Built-in Lightbox */}
      {activeImg && (
        <div 
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
          onClick={() => setActiveImg(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white text-5xl hover:text-[var(--primary-coral)] transition-colors"
            onClick={() => setActiveImg(null)}
          >
            &times;
          </button>
          <img 
            src={activeImg} 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in duration-300" 
            alt="Adventure Preview" 
          />
        </div>
      )}
    </section>
  );
};

export default AdventureGallery;
