import React, { useState, useEffect } from 'react';
import { Film, Menu, X, Instagram } from 'lucide-react';
import { editorProfile } from '../data/portfolioData';

export default function Navbar({ onOpenContact, onWatchReel }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('featured-film');

  const navLinks = [
    { name: 'Short Film', href: '#featured-film' },
    { name: 'Showreel', href: '#showreel' },
    { name: 'Works', href: '#works' },
    { name: 'Color Science', href: '#color-grading' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Active Section IntersectionObserver for smooth tracking
    const sectionIds = ['featured-film', 'showreel', 'works', 'color-grading', 'services', 'about', 'contact'];
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const obs = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          },
          { rootMargin: '-20% 0px -55% 0px' }
        );
        obs.observe(el);
        observers.push(obs);
      }
    });

    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-950/92 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-navy-950/95 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="w-10 h-10 rounded-lg bg-navy-850 border border-white/15 flex items-center justify-center group-hover:border-electric-blue transition-all duration-300 relative overflow-hidden">
              <Film className="w-5 h-5 text-electric-blue group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-electric-blue/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-lg tracking-tight text-white group-hover:text-electric-blue transition-colors">
                  ANIL TIWARI
                </span>
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-electric-blue animate-rec" />
              </div>
              <p className="font-sans text-[11px] font-medium tracking-wider uppercase text-slate-secondary">
                Film & Video Editor
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`font-sans text-[13px] font-medium px-3 py-1.5 rounded-md transition-all duration-200 relative ${
                    isActive
                      ? 'text-white font-semibold bg-white/10'
                      : 'text-slate-secondary hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-electric-blue rounded-full shadow-[0_0_8px_#1677FF]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Instagram Quick Link */}
            <a
              href={editorProfile.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-navy-850 hover:bg-navy-800 border border-white/15 hover:border-electric-blue text-slate-secondary hover:text-electric-light flex items-center justify-center transition-all duration-200"
              title={`Follow on Instagram ${editorProfile.instagramHandle}`}
              aria-label="Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* Live Indicator Status */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-850 border border-white/10 font-sans text-xs font-medium text-slate-secondary">
              <span className="w-2 h-2 rounded-full bg-electric-blue animate-rec" />
              <span>LIVE // OPEN FOR COMMISSIONS</span>
            </div>

            <button
              onClick={onOpenContact}
              className="relative inline-flex items-center justify-center px-4 py-2 font-sans text-xs font-semibold uppercase tracking-wider text-white transition-all bg-electric-blue hover:bg-electric-hover rounded-md shadow-lg shadow-electric-blue/30 hover:shadow-electric-blue/45 active:scale-95 duration-200"
            >
              Book Project
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-navy-850 border border-white/10 text-slate-secondary hover:text-white focus:outline-none transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[68px] sm:top-[74px] bg-black/60 backdrop-blur-sm -z-10 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-h-[calc(100vh-80px)] overflow-y-auto bg-navy-950/98 border-b border-white/10 px-4 sm:px-6 pt-4 pb-6 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="flex items-center gap-2 pb-4 mb-3 border-b border-white/10 font-sans text-xs font-medium text-slate-secondary">
            <span className="w-2 h-2 rounded-full bg-electric-blue animate-rec" />
            <span>COMMISSIONS OPEN • 24-48H RAPID CUTS</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left font-sans text-sm font-medium py-2.5 px-3 rounded-lg transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-electric-blue/20 text-white font-semibold border-l-2 border-electric-blue'
                      : 'text-slate-secondary hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-electric-blue" />}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-2.5 pt-2 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 text-center font-sans text-xs font-bold uppercase tracking-wider text-white bg-electric-blue hover:bg-electric-hover rounded-lg shadow-lg shadow-electric-blue/30 active:scale-95 transition-all"
            >
              Start Project Inquiry
            </button>
            <a
              href={editorProfile.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 flex items-center justify-center gap-2 font-sans text-xs font-medium text-slate-secondary bg-navy-850 hover:bg-navy-800 rounded-lg border border-white/10 transition-colors"
            >
              <Instagram className="w-4 h-4 text-electric-light" />
              Follow on Instagram {editorProfile.instagramHandle}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
