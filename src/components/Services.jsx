import React from 'react';
import { Film, Zap, PlaySquare, Sparkles, Image, Check, ArrowRight, Clock } from 'lucide-react';
import { services } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export default function Services({ onSelectService }) {
  const [sectionRef, isInView] = useInView();
  const getIcon = (id) => {
    switch (id) {
      case 'short-form':
        return <Zap className="w-5 h-5 text-electric-blue" />;
      case 'youtube-longform':
        return <PlaySquare className="w-5 h-5 text-electric-blue" />;
      case 'cinematic-commercial':
        return <Film className="w-5 h-5 text-electric-blue" />;
      case 'thumbnails-packaging':
        return <Image className="w-5 h-5 text-electric-blue" />;
      default:
        return <Sparkles className="w-5 h-5 text-electric-blue" />;
    }
  };

  return (
    <section id="services" className="relative py-24 bg-transparent film-grain">
      {/* Background ambient electric blue glow */}
      <div className="absolute top-1/2 left-1/3 w-[650px] h-[450px] bg-electric-blue/10 rounded-full blur-[150px] pointer-events-none" />

      <div ref={sectionRef} className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-reveal ${isInView ? 'section-revealed' : ''}`}>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-850 border border-white/10 font-sans text-xs font-medium text-slate-secondary mb-3">
              <Sparkles className="w-3.5 h-3.5 text-electric-blue" />
              <span>PRODUCTION CAPABILITIES // END-TO-END</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Core Editing Services
            </h2>
            <p className="font-manrope font-medium text-base sm:text-lg text-[#F5F8FF] mt-2 max-w-2xl leading-[1.75] tracking-normal">
              Specialized post-production packages tailored for maximum audience retention, algorithmic performance, and cinematic prestige.
            </p>
          </div>

          <div className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-secondary bg-navy-850 px-4 py-2 rounded-xl border border-white/10 self-start md:self-end">
            ⚡ 24-48H RAPID TURNAROUND OPTIONS
          </div>
        </div>

        {/* Services Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="cine-card rounded-2xl p-5 sm:p-7 md:p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-electric-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-6">
                {/* Card Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3 sm:gap-3.5">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-navy-800 border border-white/10 flex items-center justify-center group-hover:border-electric-blue/50 transition-colors shrink-0">
                      {getIcon(service.id)}
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg sm:text-xl md:text-2xl text-white group-hover:text-electric-blue transition-colors tracking-tight">
                        {service.title}
                      </h3>
                      <p className="font-sans text-xs font-semibold text-slate-muted uppercase tracking-wider mt-0.5">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-electric-blue/15 border border-electric-blue/30 font-sans text-[11px] font-semibold text-blue-300 shrink-0">
                    {service.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="font-manrope font-medium text-[15px] sm:text-base lg:text-[17px] text-[#F5F8FF] leading-[1.7] tracking-normal">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2.5 pt-2">
                  <p className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-muted">
                    What's Included:
                  </p>
                  <ul className="space-y-2 font-sans">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] font-medium text-slate-secondary">
                        <Check className="w-4 h-4 text-electric-blue shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Meta & Action */}
              <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 font-sans">
                <div className="flex items-center gap-4 text-xs font-medium text-slate-secondary">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-muted" />
                    <span>{service.typicalTurnaround}</span>
                  </div>
                </div>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-navy-800 hover:bg-electric-blue text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 group-hover:border-electric-blue shadow-md w-full sm:w-auto"
                >
                  <span>Inquire Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
