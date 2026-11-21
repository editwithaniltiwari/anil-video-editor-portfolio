import React, { useState } from 'react';
import { Play, ExternalLink, Film, CheckCircle2, Clapperboard, Sparkles, RefreshCw } from 'lucide-react';
import { featuredShortFilm } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export default function FeaturedShortFilm({ onWatchFilm, onInspectProject }) {
  const [sectionRef, isInView] = useInView();
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const [showIframe, setShowIframe] = useState(false);

  const handleStartWatch = () => {
    setShowIframe(true);
  };

  return (
    <section id="featured-film" className="relative py-24 sm:py-32 bg-navy-950/40 backdrop-blur-[2px] film-grain border-y border-white/10 overflow-hidden">
      {/* Cinematic Ambient Blue Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-electric-blue/15 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-900/20 rounded-full blur-[140px] pointer-events-none" />

      <div ref={sectionRef} className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-reveal ${isInView ? 'section-revealed' : ''}`}>
        {/* Section Eyebrow Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-850 border border-electric-blue/30 font-sans text-xs font-semibold text-electric-light mb-3">
              <Clapperboard className="w-3.5 h-3.5 text-electric-blue" />
              <span>SPECIAL SHOWCASE // NARRATIVE SHORT FILM</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Featured Short Film
            </h2>
            <p className="font-manrope font-medium text-base sm:text-lg text-[#F5F8FF] mt-2 max-w-2xl leading-[1.75] tracking-normal">
              A high-prestige cinematic project edited with frame-accurate dramatic pacing, sub-acoustic sound design, and custom DaVinci color grading.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-xl bg-navy-850 border border-white/10 font-sans text-xs font-semibold uppercase tracking-wider text-slate-secondary">
              Role: <span className="text-white font-bold">{featuredShortFilm.role}</span>
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-electric-blue/15 border border-electric-blue/30 font-mono text-xs font-semibold text-electric-light">
              {featuredShortFilm.duration}
            </span>
          </div>
        </div>

        {/* Heroic Featured Film Presentation Container */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-navy-850 via-navy-900 to-navy-950 border border-white/15 shadow-2xl p-4 sm:p-7 space-y-8">
          
          {/* Top Cinematic 16:9 Presentation Viewport */}
          <div className="relative aspect-video min-h-[260px] sm:min-h-[440px] rounded-2xl overflow-hidden bg-black border border-white/15 group shadow-2xl">
            {showIframe ? (
              <div className="relative w-full h-full bg-black">
                {/* Responsive Google Drive Embed Iframe */}
                <iframe
                  src={featuredShortFilm.driveEmbedUrl}
                  title={featuredShortFilm.title}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  loading="lazy"
                  onLoad={() => setIsIframeLoaded(true)}
                  className="w-full h-full border-0 absolute inset-0"
                />

                {/* Floating Toolbar inside player */}
                <div className="absolute top-3 right-3 z-10 flex items-center gap-2">
                  <a
                    href={featuredShortFilm.driveOriginalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-black/80 hover:bg-navy-850 text-white font-sans text-xs font-semibold border border-white/20 backdrop-blur-md transition-colors flex items-center gap-1.5"
                    title="Open in Google Drive if embed fails or for full original quality"
                  >
                    <span>Open in Drive</span>
                    <ExternalLink className="w-3.5 h-3.5 text-electric-light" />
                  </a>
                  <button
                    onClick={() => setShowIframe(false)}
                    className="p-1.5 rounded-lg bg-black/80 hover:bg-navy-850 text-slate-secondary hover:text-white border border-white/20 backdrop-blur-md transition-colors text-xs"
                    title="Reset to poster view"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              /* High-Impact Cinematic Poster & Watch Overlay (No Autoplay) */
              <div
                onClick={handleStartWatch}
                className="relative w-full h-full cursor-pointer overflow-hidden group"
              >
                <img
                  src={featuredShortFilm.thumbnail}
                  alt={featuredShortFilm.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 group-hover:via-black/30 transition-all" />

                {/* Top HUD Markers */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90 pointer-events-none">
                  <div className="flex items-center gap-2.5 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-electric-blue animate-rec" />
                    <span className="font-semibold uppercase tracking-wider">{featuredShortFilm.aspectRatio} Widescreen</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-3 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 font-mono text-[11px] text-slate-secondary">
                    <span>GOOGLE DRIVE EMBED</span>
                    <span>•</span>
                    <span>FULLSCREEN READY</span>
                  </div>
                </div>

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 transition-all">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-electric-blue hover:bg-electric-hover text-white flex items-center justify-center shadow-2xl shadow-electric-blue/50 group-hover:scale-110 transition-all duration-300">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white ml-1 text-white" />
                  </div>
                  <div className="text-center px-4">
                    <p className="font-heading font-bold text-xl sm:text-2xl text-white tracking-tight drop-shadow-md">
                      {featuredShortFilm.title}
                    </p>
                    <span className="inline-block mt-1 font-sans text-xs font-semibold uppercase tracking-widest text-slate-secondary bg-navy-950/80 px-4 py-1.5 rounded-full border border-white/15 backdrop-blur-md">
                      Click to Watch Film (Interactive Player)
                    </span>
                  </div>
                </div>

                {/* Bottom Bar Info */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-sans text-xs text-white/90 pointer-events-none">
                  <span className="bg-black/70 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md">
                    Duration: {featuredShortFilm.duration}
                  </span>
                  <span className="hidden sm:inline-block bg-black/70 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md text-electric-light">
                    Direct Stream Available
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Film Information & Editorial Scope Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
            
            {/* Left 7 Columns: Title, Genre, Description & CTAs */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="font-sans text-xs font-bold uppercase tracking-wider text-electric-blue">
                    {featuredShortFilm.genre}
                  </span>
                  <span className="text-slate-muted">•</span>
                  <span className="font-sans text-xs font-semibold text-slate-secondary">
                    Role: <span className="text-white">{featuredShortFilm.role}</span>
                  </span>
                </div>

                <h3 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                  {featuredShortFilm.title}
                </h3>
              </div>

              <p className="font-manrope font-medium text-base sm:text-lg lg:text-[19px] leading-[1.75] text-[#F5F8FF] tracking-normal">
                {featuredShortFilm.description}
              </p>

              {/* Editing Highlights */}
              <div className="space-y-2.5 pt-2">
                <p className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-muted">
                  Editorial & Post-Production Focus:
                </p>
                <ul className="space-y-2 font-sans">
                  {featuredShortFilm.editingHighlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-[13px] font-medium text-slate-secondary">
                      <CheckCircle2 className="w-4 h-4 text-electric-blue shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-4 font-sans">
                <button
                  onClick={handleStartWatch}
                  className="px-6 sm:px-7 py-3.5 rounded-xl bg-electric-blue hover:bg-electric-hover text-white font-semibold text-xs sm:text-[14px] uppercase tracking-wider shadow-xl shadow-electric-blue/30 hover:shadow-electric-blue/50 transition-all flex items-center justify-center gap-2.5 sm:gap-3 active:scale-95 duration-200 w-full sm:w-auto"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Watch Film</span>
                </button>

                {/* Fallback Button to open original Google Drive link */}
                <a
                  href={featuredShortFilm.driveOriginalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 sm:px-6 py-3.5 rounded-xl bg-navy-800 hover:bg-navy-750 text-white font-semibold text-xs sm:text-[14px] border border-white/15 hover:border-electric-blue/50 transition-all flex items-center justify-center gap-2 active:scale-95 duration-200 w-full sm:w-auto"
                >
                  <ExternalLink className="w-4 h-4 text-electric-light" />
                  <span>Open in Google Drive</span>
                </a>

                <button
                  onClick={() => onInspectProject(featuredShortFilm)}
                  className="px-5 py-3.5 rounded-xl bg-transparent hover:bg-white/5 text-slate-secondary hover:text-white font-semibold text-xs sm:text-sm border border-transparent hover:border-white/10 transition-all flex items-center justify-center w-full sm:w-auto"
                >
                  Inspect Specs
                </button>
              </div>
            </div>

            {/* Right 5 Columns: Technical Specifications Cards */}
            <div className="lg:col-span-5 bg-navy-900/80 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-4">
              <h4 className="font-heading font-semibold text-base text-white tracking-tight flex items-center gap-2">
                <Film className="w-4 h-4 text-electric-blue" />
                <span>Production & Editorial Master Specs</span>
              </h4>

              <div className="space-y-3">
                {featuredShortFilm.specs.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-navy-900 border border-white/5 flex items-center justify-between gap-3"
                  >
                    <span className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-muted">
                      {item.label}
                    </span>
                    <span className="font-heading font-semibold text-xs sm:text-[13px] text-white tracking-tight text-right">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Google Drive Status Pill */}
              <div className="pt-3 border-t border-white/10 font-sans text-xs text-slate-muted flex items-center justify-between">
                <span>Direct Drive Cloud Master</span>
                <a
                  href={featuredShortFilm.driveOriginalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-electric-light hover:underline font-semibold flex items-center gap-1"
                >
                  <span>Google Drive Link</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
