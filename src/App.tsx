import { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import CreditsSection from './components/CreditsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-cinematic-black text-white overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CreditsSection />
      <TestimonialsSection />
      <ContactSection />

      <footer className="border-t border-cinematic-steel bg-cinematic-charcoal py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-cinematic-muted text-sm">
          <p>Hayat Noor | Script Supervisor • Producer • Screenwriter</p>
          <p className="mt-2">Production Inquiries: hayat.noorproductions@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
