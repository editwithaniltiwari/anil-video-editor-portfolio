import React from 'react';
import { Film, Globe } from 'lucide-react';
import { editorProfile, softwareStack, spokenLanguages } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export default function About() {
  const [sectionRef, isInView] = useInView();

  return (
    <section id="about" className="relative py-24 bg-navy-950/40 backdrop-blur-[2px] film-grain border-t border-white/10">
      {/* Background electric blue glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[500px] bg-electric-blue/10 rounded-full blur-[150px] pointer-events-none" />

      <div ref={sectionRef} className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-reveal ${isInView ? 'section-revealed' : ''}`}>
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-850 border border-white/10 font-sans text-xs font-medium text-slate-secondary mb-3">
            <Film className="w-3.5 h-3.5 text-electric-blue" />
            <span>BIOGRAPHY // EDITORIAL FOCUS</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            About Me
          </h2>
        </div>

        {/* Content Grid: Clean, Balanced 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Short About Me Narrative Card (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-navy-850/90 border border-white/10 p-5 sm:p-7 md:p-9 flex flex-col justify-between space-y-6 relative backdrop-blur-sm shadow-xl">
            <p className="font-manrope font-medium text-base sm:text-lg lg:text-[19px] text-[#F5F8FF] leading-[1.75] tracking-normal">
              I'm Anil Tiwari, a video editor passionate about turning raw footage into engaging visual stories. I focus on cinematic edits, YouTube videos, and short-form content, combining creative storytelling with clean, professional editing.
            </p>

            {/* LANGUAGES Subsection */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-electric-blue" />
                <h3 className="font-heading font-semibold text-xs uppercase tracking-wider text-slate-muted">
                  Languages
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {spokenLanguages.map((lang) => (
                  <div
                    key={lang.id}
                    className="group px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-navy-900 border border-white/10 hover:border-electric-blue/50 text-white hover:text-electric-blue transition-all duration-300 flex items-center gap-2 sm:gap-2.5 shadow-sm hover:shadow-md hover:shadow-electric-blue/15 hover:-translate-y-0.5 cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-blue/60 group-hover:bg-electric-blue transition-colors" />
                    <span className="font-body text-xs sm:text-sm font-medium tracking-tight">
                      {lang.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Reorganized Remaining Skills & Cover Media (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-navy-850/90 border border-white/10 p-5 sm:p-7 flex flex-col justify-center space-y-4 backdrop-blur-sm shadow-xl group">
            {editorProfile.aboutCoverImage && (
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-navy-900 border border-white/10 mb-1">
                <img
                  src={editorProfile.aboutCoverImage}
                  alt={`${editorProfile.name} — Video Editing Suite`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent pointer-events-none" />
              </div>
            )}

            <div className="flex items-center justify-between pb-1 border-b border-white/10">
              <h3 className="font-heading font-semibold text-base sm:text-lg text-white tracking-tight">
                Core Editing Software
              </h3>
              <span className="font-sans text-[11px] font-semibold tracking-wider text-slate-muted uppercase">
                {softwareStack.length} Suites
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {softwareStack.map((tool) => (
                <div
                  key={tool.name}
                  className="p-4 rounded-xl bg-navy-900 border border-white/5 hover:border-electric-blue/40 transition-all flex items-center justify-between gap-3 group"
                >
                  <div>
                    <div className="font-heading font-semibold text-[15px] sm:text-base text-white tracking-tight group-hover:text-electric-blue transition-colors">
                      {tool.name}
                    </div>
                    <div className="font-body text-xs text-slate-secondary mt-0.5">
                      {tool.role}
                    </div>
                  </div>

                  <span className="font-sans text-[11px] font-semibold px-2.5 py-1 rounded bg-navy-800 border border-white/10 text-electric-blue whitespace-nowrap">
                    {tool.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
