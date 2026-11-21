import React from 'react';
import { ArrowRight, Sparkles, MessageSquare, ArrowUpRight, Film, ExternalLink } from 'lucide-react';
import { editorProfile, featuredShortFilm, projects, showreelData } from '../data/portfolioData';

export default function Hero({ onWatchReel, onExploreWorks, onOpenContact }) {
  const scrollToSection = (targetId, e) => {
    if (e) e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 76;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };
  return (
    <section className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-center overflow-hidden bg-transparent film-grain">
      {/* Background Ambient Electric Blue Glows & Grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-electric-blue/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-navy-800/60 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle editor grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Eyebrow Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10 text-xs font-mono text-slate-secondary">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-electric-blue animate-rec" />
            <span className="text-white font-semibold tracking-wider font-sans">PROJECT: ANIL TIWARI</span>
            <span className="text-navy-700">//</span>
            <span className="text-slate-secondary tracking-widest hidden sm:inline">CODEC: APPLE PRORES 422 HQ</span>
          </div>

          <div className="flex items-center gap-2 font-sans text-xs">
            <span className="text-slate-muted">STATUS:</span>
            <span className="text-electric-light font-medium tracking-wide">AVAILABLE FOR COMMISSIONS</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Typography & Hook */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-850/90 border border-white/10 font-sans text-xs font-medium text-slate-secondary backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-electric-blue" />
              <span>PREMIUM CINEMATIC POST-PRODUCTION</span>
            </div>

            <div className="space-y-3">
              <h1 className="font-heading font-extrabold text-3xl xs:text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white leading-[1.06] break-words">
                Anil Tiwari
                <span className="block text-gradient-blue mt-1.5 font-extrabold text-2xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight">
                  Video Editor &amp; Visual Storyteller
                </span>
              </h1>
              <p className="font-sans text-xs sm:text-base font-semibold tracking-wide text-[#D0DAEA] uppercase">
                Story Architecture • High-Retention Pacing • DaVinci Color
              </p>
            </div>

            <p className="font-manrope font-medium text-base sm:text-lg lg:text-[19px] text-[#F5F8FF] max-w-xl leading-[1.75] tracking-normal">
              Transforming raw footage into engaging visual experiences through creative storytelling and cinematic editing. Over <span className="text-white font-semibold">50 Million organic views</span> delivered across commercial campaigns, narrative films, and viral short-form.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-2 font-sans">
              <button
                onClick={onExploreWorks}
                className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 bg-electric-blue hover:bg-electric-hover text-white font-semibold text-sm sm:text-[15px] rounded-xl shadow-xl shadow-electric-blue/30 hover:shadow-electric-blue/50 transition-all active:scale-95"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 sm:py-4 bg-navy-850 hover:bg-navy-800 text-white font-semibold text-sm sm:text-[15px] rounded-xl border border-white/15 hover:border-electric-blue/50 transition-all shadow-md active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-electric-light" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Software badges */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2.5 text-xs font-sans text-slate-secondary">
              <span className="text-slate-muted font-medium">PRIMARY SUITE:</span>
              <span className="px-2.5 py-1 rounded bg-navy-850 border border-white/10 text-white font-medium">
                Premiere Pro
              </span>
              <span className="px-2.5 py-1 rounded bg-navy-850 border border-white/10 text-white font-medium">
                DaVinci Resolve Studio
              </span>
            </div>
          </div>

          {/* Right Column: Featured Work Preview Visual (Klusteerr, Infix Plays, Abhinay MD) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-navy-900/85 backdrop-blur-md border border-white/15 p-4 sm:p-5 shadow-2xl overflow-hidden group">
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-electric-blue" />
                  <span className="font-heading font-semibold text-xs sm:text-[13px] text-white uppercase tracking-wider">
                    Featured Work Preview
                  </span>
                </div>
                <span className="font-sans text-[11px] font-semibold text-electric-light px-2.5 py-0.5 rounded-full bg-electric-blue/15 border border-electric-blue/30">
                  3 Projects
                </span>
              </div>

              {/* Projects Composition */}
              <div className="space-y-3">
                {/* 1. Primary Highlight: Klusteerr — Short Film */}
                <a
                  href="#featured-film"
                  onClick={(e) => scrollToSection('featured-film', e)}
                  className="group/card relative block rounded-xl overflow-hidden border border-white/10 hover:border-electric-blue/60 transition-all duration-300 bg-navy-950 shadow-md hover:shadow-electric-blue/15"
                  title="View Klusteerr — Short Film"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                    <img
                      src={featuredShortFilm.thumbnail}
                      alt={featuredShortFilm.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent opacity-90 group-hover/card:opacity-75 transition-opacity" />

                    {/* Top Badges */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md font-sans text-[10px] font-semibold uppercase tracking-wider text-electric-light border border-white/10">
                        Short Film / Creative
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md font-mono text-[10px] text-slate-secondary border border-white/10">
                        16:9 4K
                      </span>
                    </div>

                    {/* Bottom Title & Action */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-end justify-between">
                      <div className="min-w-0 pr-2">
                        <h4 className="font-heading font-semibold text-sm sm:text-base text-white group-hover/card:text-electric-blue transition-colors tracking-tight truncate">
                          {featuredShortFilm.title}
                        </h4>
                        <p className="font-manrope font-medium text-[11px] text-[#D0DAEA] line-clamp-1 mt-0.5">
                          Dramatic narrative pacing • DaVinci color grading
                        </p>
                      </div>
                      <div className="w-7 h-7 rounded-lg bg-navy-850/90 border border-white/15 flex items-center justify-center text-slate-secondary group-hover/card:text-white group-hover/card:border-electric-blue group-hover/card:bg-electric-blue transition-all shrink-0">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </a>

                {/* Bottom 2 Split Cards: Infix Plays & Abhinay MD */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* 2. Infix Plays — Gaming & Content Editing */}
                  <a
                    href="#works"
                    onClick={(e) => scrollToSection('works', e)}
                    className="group/card relative block rounded-xl overflow-hidden border border-white/10 hover:border-electric-blue/60 transition-all duration-300 bg-navy-950 shadow-md hover:shadow-electric-blue/15"
                    title="View Infix Plays Gaming & Content Editing"
                  >
                    <div className="relative aspect-video w-full overflow-hidden bg-navy-900">
                      <img
                        src="https://img.youtube.com/vi/odbj2DyXlCw/maxresdefault.jpg"
                        alt="Infix Plays Gaming & Content Editing"
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = "https://i.ytimg.com/vi/odbj2DyXlCw/hqdefault.jpg";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent opacity-90 group-hover/card:opacity-75 transition-opacity" />

                      {/* Top Badge */}
                      <div className="absolute top-2 left-2">
                        <span className="px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-md font-sans text-[9px] font-semibold uppercase tracking-wider text-electric-light border border-white/10">
                          Gaming &amp; YouTube
                        </span>
                      </div>

                      {/* Bottom Title & Action */}
                      <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between">
                        <div className="min-w-0 pr-1">
                          <h5 className="font-heading font-semibold text-xs sm:text-[13px] text-white group-hover/card:text-electric-blue transition-colors tracking-tight truncate">
                            Infix Plays
                          </h5>
                          <p className="font-sans text-[10px] text-slate-muted truncate">
                            Personal Projects
                          </p>
                        </div>
                        <div className="w-6 h-6 rounded bg-navy-850/90 border border-white/15 flex items-center justify-center text-slate-secondary group-hover/card:text-white group-hover/card:bg-electric-blue transition-all shrink-0">
                          <ArrowUpRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </a>

                  {/* 3. Abhinay MD — Client Project */}
                  <a
                    href="#works"
                    onClick={(e) => scrollToSection('works', e)}
                    className="group/card relative block rounded-xl overflow-hidden border border-white/10 hover:border-electric-blue/60 transition-all duration-300 bg-navy-950 shadow-md hover:shadow-electric-blue/15"
                    title="View Abhinay MD Client Project"
                  >
                    <div className="relative aspect-video w-full overflow-hidden bg-navy-900">
                      <img
                        src="/images/reels/reel-1.jpg"
                        alt="Abhinay MD Client Project"
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent opacity-90 group-hover/card:opacity-75 transition-opacity" />

                      {/* Top Badge */}
                      <div className="absolute top-2 left-2">
                        <span className="px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-md font-sans text-[9px] font-semibold uppercase tracking-wider text-electric-light border border-white/10">
                          Client Reels
                        </span>
                      </div>

                      {/* Bottom Title & Action */}
                      <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between">
                        <div className="min-w-0 pr-1">
                          <h5 className="font-heading font-semibold text-xs sm:text-[13px] text-white group-hover/card:text-electric-blue transition-colors tracking-tight truncate">
                            Abhinay MD
                          </h5>
                          <p className="font-sans text-[10px] text-slate-muted truncate">
                            4 Vertical Cuts
                          </p>
                        </div>
                        <div className="w-6 h-6 rounded bg-navy-850/90 border border-white/15 flex items-center justify-center text-slate-secondary group-hover/card:text-white group-hover/card:bg-electric-blue transition-all shrink-0">
                          <ArrowUpRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Bottom Bar: Explore All Works Link */}
              <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-sans">
                <span className="text-slate-muted">Curated Portfolio</span>
                <button
                  onClick={onExploreWorks}
                  className="text-electric-light hover:text-white font-medium flex items-center gap-1 transition-colors"
                >
                  <span>Browse Full Gallery</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* 
                NOTE FOR FUTURE SHOWREEL SUPPORT:
                When your final showreel is ready, you can seamlessly restore the video showreel 
                player block here or toggle it with a flag. The showreel configuration data is 
                preserved in src/data/portfolioData.js under `showreelData`.
              */}
            </div>
          </div>
        </div>

        {/* Bottom Key Stats Bar */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="space-y-1">
            <div className="text-2xl sm:text-4xl lg:text-5xl font-heading font-bold text-white flex items-center tracking-tight">
              <span>{editorProfile.totalViewsGenerated}</span>
              <span className="text-electric-blue text-xl sm:text-2xl lg:text-3xl ml-1">+</span>
            </div>
            <p className="text-[11px] sm:text-[13px] font-sans uppercase font-medium tracking-wider text-slate-secondary">Total Views Driven</p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-4xl lg:text-5xl font-heading font-bold text-white flex items-center tracking-tight">
              <span>{editorProfile.projectsCompleted}</span>
              <span className="text-electric-blue text-xl sm:text-2xl lg:text-3xl ml-1">✓</span>
            </div>
            <p className="text-[11px] sm:text-[13px] font-sans uppercase font-medium tracking-wider text-slate-secondary">Finished Projects</p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight truncate">
              <span>{editorProfile.averageTurnaround}</span>
            </div>
            <p className="text-[11px] sm:text-[13px] font-sans uppercase font-medium tracking-wider text-slate-secondary">Rapid Delivery Window</p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-4xl lg:text-5xl font-heading font-bold text-white flex items-center tracking-tight">
              <span>100%</span>
              <span className="text-electric-blue text-sm sm:text-base lg:text-lg ml-1 sm:ml-1.5 font-sans font-medium">Rec.709</span>
            </div>
            <p className="text-[11px] sm:text-[13px] font-sans uppercase font-medium tracking-wider text-slate-secondary">Color Calibrated Pipeline</p>
          </div>
        </div>
      </div>
    </section>
  );
}
