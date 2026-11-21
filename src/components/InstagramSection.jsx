import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { editorProfile } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export default function InstagramSection() {
  const [sectionRef, isInView] = useInView();

  return (
    <section id="instagram" className="relative py-20 sm:py-24 bg-transparent film-grain">
      {/* Background radial blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-electric-blue/10 rounded-full blur-[160px] pointer-events-none" />

      <div
        ref={sectionRef}
        className={`relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center section-reveal ${
          isInView ? 'section-revealed' : ''
        }`}
      >
        <div className="cine-card rounded-3xl p-8 sm:p-12 md:p-16 border border-white/10 relative overflow-hidden backdrop-blur-md">
          {/* Subtle electric-blue top accent bar */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-electric-blue to-transparent" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-850 border border-white/10 font-sans text-xs font-medium text-slate-secondary mb-4">
            <Instagram className="w-3.5 h-3.5 text-electric-blue" />
            <span>COMMUNITY & BEHIND THE SCENES</span>
          </div>

          {/* Section Heading */}
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Follow on Instagram
          </h2>

          {/* Section Description */}
          <p className="font-manrope font-medium text-base sm:text-lg lg:text-[19px] text-[#F5F8FF] mt-3 max-w-xl mx-auto leading-[1.75] tracking-normal">
            Daily Premiere Pro timeline breakdowns, DaVinci Resolve node trees, sound design secrets, and raw-to-grade transformations.
          </p>

          {/* One Prominent Follow on Instagram Button */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3">
            <a
              href="https://www.instagram.com/editwithaniltiwari/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-blue-700 via-electric-blue to-electric-light hover:from-blue-600 hover:to-blue-400 text-white font-sans text-sm sm:text-base font-semibold shadow-xl shadow-electric-blue/30 hover:shadow-electric-blue/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
              aria-label="Follow on Instagram"
            >
              <Instagram className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-6" />
              <span>Follow on Instagram</span>
              <ArrowUpRight className="w-4 h-4 text-white/80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <span className="font-mono text-xs text-slate-muted">
              {editorProfile.instagramHandle || '@editwithaniltiwari'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
