
import React, { useState, useEffect, useRef } from 'react';
import { Language } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import AboutUs from './components/AboutUs';
import RoutesSection from './components/RoutesSection';
import Services from './components/Services';
import Security from './components/Security';
import Testimonials from './components/Gallery';
import AdventureGallery from './components/AdventureGallery';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SeryeiChat from './components/SeryeiChat';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('es');
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset);
      
      // Reveal items on scroll
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('idioma', newLang);
  };

  useEffect(() => {
    const saved = localStorage.getItem('idioma') as Language;
    if (saved) setLang(saved);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} setLang={changeLanguage} />
      
      <main>
        <Hero lang={lang} scroll={scrolled} />
        <Experience lang={lang} />
        <AboutUs lang={lang} />
        <RoutesSection lang={lang} />
        <Services lang={lang} />
        <Security lang={lang} />
        <Testimonials lang={lang} />
        <AdventureGallery lang={lang} />
        <Location lang={lang} />
        <Contact lang={lang} />
      </main>

      <Footer lang={lang} />
      <SeryeiChat lang={lang} />

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/573015421123?text=Hola%20Sergio,%20quiero%20reservar%20canyoning" 
        target="_blank" 
        className="fixed bottom-8 left-8 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-[999] animate-bounce"
        aria-label="WhatsApp"
      >
        <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.267.405 2.436 1.091 3.393l-.715 2.614 2.677-.702c.813.504 1.772.793 2.794.793 3.181 0 5.767-2.586 5.767-5.767 0-3.181-2.586-5.767-5.747-5.767zm3.393 8.21c-.147.416-.723.76-1.155.819-.319.043-.733.076-1.221-.082-.244-.076-.538-.174-.881-.326-1.464-.636-2.417-2.127-2.493-2.22-.076-.1-.636-.848-.636-1.614 0-.766.402-1.143.543-1.294.14-.152.31-.223.414-.223h.3c.092 0 .212.005.304.223.114.266.386.945.419 1.011.033.065.054.14.011.223-.043.087-.065.14-.13.223l-.195.234c-.065.076-.136.16-.054.293.082.136.364.597.777 1.005.413.413.766.543.9.608.136.065.212.054.293-.043.082-.1.353-.413.445-.554.092-.14.185-.12.31-.076s.793.375.929.44c.136.065.223.098.256.152.033.054.033.31-.114.722z"/>
        </svg>
      </a>
    </div>
  );
};

export default App;
