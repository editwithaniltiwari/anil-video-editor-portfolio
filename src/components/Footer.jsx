import React from 'react';
import { Film, ArrowUp, Instagram, MessageSquare, Mail } from 'lucide-react';
import { editorProfile } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-navy-950/90 backdrop-blur-md border-t border-white/10 pt-16 pb-12 film-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-navy-850 border border-white/15 flex items-center justify-center">
                <Film className="w-5 h-5 text-electric-blue" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl tracking-tight text-white">
                  ANIL TIWARI
                </span>
                <p className="font-sans text-[11px] font-semibold uppercase tracking-wider text-slate-secondary">
                  Film & Video Editor
                </p>
              </div>
            </div>

            <p className="font-manrope font-medium text-sm sm:text-[15px] leading-[1.7] text-[#F5F8FF] max-w-sm">
              Crafting high-retention narratives, cinematic visuals, and frame-accurate stories for ambitious creators, digital channels, and commercial brands.
            </p>

            {/* Availability status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-900 border border-white/10 font-sans text-xs">
              <span className="w-2 h-2 rounded-full bg-electric-blue animate-rec" />
              <span className="text-slate-secondary font-medium">STATUS:</span>
              <span className="text-electric-light font-medium">AVAILABLE FOR COMMISSIONS</span>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3 font-sans">
            <p className="font-heading font-semibold text-xs uppercase tracking-wider text-white">
              Quick Navigation
            </p>
            <ul className="space-y-2 text-[13px] font-medium text-slate-secondary">
              <li>
                <a href="#featured-film" className="hover:text-electric-blue transition-colors">Featured Short Film</a>
              </li>
              <li>
                <a href="#showreel" className="hover:text-electric-blue transition-colors">Showreel 2025/2026</a>
              </li>
              <li>
                <a href="#works" className="hover:text-electric-blue transition-colors">Selected Works Gallery</a>
              </li>
              <li>
                <a href="#color-grading" className="hover:text-electric-blue transition-colors">DaVinci Color Science</a>
              </li>
              <li>
                <a href="#services" className="hover:text-electric-blue transition-colors">Post-Production Services</a>
              </li>
              <li>
                <a href="#about" className="hover:text-electric-blue transition-colors">About & Suite Specs</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-electric-blue transition-colors">Commission Inquiry</a>
              </li>
            </ul>
          </div>

          {/* Socials & Connect (4 cols) */}
          <div className="md:col-span-4 space-y-4 font-sans">
            <p className="font-heading font-semibold text-xs uppercase tracking-wider text-white">
              Connect & Follow
            </p>
            <p className="font-manrope font-medium text-xs sm:text-[13px] text-[#D0DAEA] leading-[1.65]">
              Reach out for commissions, collaborations, and post-production workflows.
            </p>

            <div className="flex items-center gap-3">
              {/* Instagram link */}
              <a
                href={editorProfile.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-navy-850 hover:bg-navy-800 hover:border-electric-blue/50 border border-white/10 flex items-center justify-center text-slate-secondary hover:text-electric-light transition-all duration-200"
                title={`Instagram: ${editorProfile.instagramHandle}`}
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* WhatsApp link */}
              <a
                href={editorProfile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-navy-850 hover:bg-navy-800 hover:border-emerald-500/50 border border-white/10 flex items-center justify-center text-slate-secondary hover:text-emerald-400 transition-all duration-200"
                title={`WhatsApp: ${editorProfile.phone}`}
                aria-label="WhatsApp Contact"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              {/* Email link with mailto: */}
              <a
                href={`mailto:${editorProfile.email}`}
                className="w-10 h-10 rounded-xl bg-navy-850 hover:bg-navy-800 hover:border-electric-blue border border-white/10 flex items-center justify-center text-slate-secondary hover:text-electric-blue transition-all duration-200"
                title={`Email: ${editorProfile.email}`}
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="font-sans text-xs text-slate-muted space-y-1">
              <div>
                Email: <a href={`mailto:${editorProfile.email}`} className="font-mono text-slate-secondary hover:text-electric-light transition-colors">{editorProfile.email}</a>
              </div>
              <div>
                WhatsApp: <a href={editorProfile.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-mono text-slate-secondary hover:text-emerald-400 transition-colors">{editorProfile.phone}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-slate-muted">
          <div>
            © {new Date().getFullYear()} Anil Tiwari. All rights reserved. Film & Video Post-Production.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-lg bg-navy-850 border border-white/10 flex items-center justify-center hover:border-electric-blue">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
