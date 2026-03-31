import { Download, PlayCircle } from 'lucide-react';
import React from 'react';

export default function HeroSection(): JSX.Element {
  const handleViewCredits = (): void => {
    document
      .getElementById('credits-section')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = (): void => {
    const fileUrl: string =
      'https://drive.google.com/uc?export=download&id=1sXmDfgP2E6x0BGQau33YzwrYdGzmJ325';

    const link: HTMLAnchorElement = document.createElement('a');

    link.href = fileUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';

    // Note: download may be ignored by Google Drive (browser limitation)
    link.download = 'Hayat_Noor_Production_CV.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative h-screen bg-cinematic-black flex items-center justify-center overflow-hidden">
      {/* Background gradient with subtle pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cinematic-charcoal via-cinematic-black to-cinematic-charcoal" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 48%, rgba(255,255,255,.05) 49%, rgba(255,255,255,.05) 51%, transparent 52%),
                              linear-gradient(-45deg, transparent 48%, rgba(255,255,255,.05) 49%, rgba(255,255,255,.05) 51%, transparent 52%)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-cinematic-steel to-transparent opacity-10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-cinematic-steel to-transparent opacity-10 blur-3xl rounded-full" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 sm:px-8">
        {/* Pre-title */}
        <div className="mb-8 space-y-2">
          <p className="text-cinematic-muted text-sm tracking-film uppercase">
            Production Professional
          </p>
        </div>

        {/* Name */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight mb-4 animate-in fade-in duration-1000">
          Hayat Noor
        </h1>

        {/* Titles */}
        <div className="space-y-2 mb-8">
          <p className="text-xl sm:text-2xl lg:text-3xl text-white font-light">
            Script Supervisor • Producer • Screenwriter
          </p>
          <div className="h-px w-20 mx-auto bg-gradient-to-r from-transparent via-cinematic-steel to-transparent" />
        </div>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-cinematic-muted max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Delivering narrative continuity, production precision, and script
          readiness across film and episodic projects.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 py-8 border-y border-cinematic-steel">
          <div>
            <p className="text-3xl sm:text-4xl font-light text-white">50+</p>
            <p className="text-sm text-cinematic-muted mt-2 uppercase">
              Productions Supported
            </p>
          </div>

          <div>
            <p className="text-3xl sm:text-4xl font-light text-white">15+</p>
            <p className="text-sm text-cinematic-muted mt-2 uppercase">
              Years Experience
            </p>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <p className="text-3xl sm:text-4xl font-light text-white">100%</p>
            <p className="text-sm text-cinematic-muted mt-2 uppercase">
              On-Schedule Delivery
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleDownloadCV}
            className="px-8 py-3 bg-white text-cinematic-black font-medium hover:bg-cinematic-muted transition-colors flex items-center gap-2"
          >
            <Download size={18} />
            Download Production CV
          </button>

          <button
            onClick={handleViewCredits}
            className="px-8 py-3 border border-cinematic-steel text-white hover:bg-cinematic-steel/20 transition-colors flex items-center gap-2"
          >
            <PlayCircle size={18} />
            View Credits
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <p className="text-xs text-cinematic-muted uppercase mb-2">Scroll</p>
        <div className="w-px h-8 bg-cinematic-steel" />
      </div>
    </section>
  );
}