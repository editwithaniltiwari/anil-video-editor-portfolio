import React, { useState, useRef, useCallback } from 'react';
import { Sliders, CheckCircle2, SplitSquareVertical } from 'lucide-react';
import { colorGradeComparison } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export default function ColorGradingSlider() {
  const [sectionRef, isInView] = useInView();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleTouchStart = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <section id="color-grading" className="relative py-24 bg-navy-950/40 backdrop-blur-[2px] film-grain border-y border-white/10">
      {/* Background ambient electric blue glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] bg-electric-blue/10 rounded-full blur-[160px] pointer-events-none" />

      <div ref={sectionRef} className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-reveal ${isInView ? 'section-revealed' : ''}`}>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-850 border border-white/10 font-sans text-xs font-medium text-slate-secondary mb-3">
            <Sliders className="w-3.5 h-3.5 text-electric-blue" />
            <span>DAVINCI RESOLVE COLOR SCIENCE</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Color Grading Precision
          </h2>
          <p className="font-manrope font-medium text-base sm:text-lg text-[#F5F8FF] mt-2 leading-[1.75] tracking-normal">
            Raw camera sensor data is lifeless until it undergoes intentional color science. Drag the interactive split-screen slider to compare flat RAW Log footage with our film-print emulation grade.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="relative max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onClick={(e) => handleMove(e.clientX)}
            className="relative aspect-video w-full rounded-2xl overflow-hidden select-none cursor-ew-resize border border-white/20 shadow-2xl bg-navy-950 group"
          >
            {/* Graded Layer (Full Base Image) */}
            <img
              src={colorGradeComparison.afterImage}
              alt="Final Graded Film Look"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              draggable="false"
            />

            {/* Ungraded RAW Log Layer (Clipped by slider position) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none transition-all duration-75"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={colorGradeComparison.beforeImage}
                alt="Raw Uncorrected S-Log"
                className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none filter brightness-95 contrast-75 saturate-50"
                style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
                draggable="false"
              />
              
              {/* RAW Label */}
              <div className="absolute top-4 left-4 bg-navy-950/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 font-sans text-xs font-medium text-slate-secondary flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-500" />
                <span>{colorGradeComparison.beforeLabel}</span>
              </div>
            </div>

            {/* Graded Label (Right side) */}
            <div className="absolute top-4 right-4 bg-navy-950/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-electric-blue/40 font-sans text-xs font-medium text-white flex items-center gap-2 pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-electric-blue animate-rec" />
              <span>{colorGradeComparison.afterLabel}</span>
            </div>

            {/* Split Drag Line & Handle */}
            <div
              className="absolute inset-y-0 w-1 bg-white shadow-2xl transition-all duration-75 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Drag button indicator */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-electric-blue border-2 border-white flex items-center justify-center text-white shadow-xl shadow-electric-blue/50">
                <SplitSquareVertical className="w-5 h-5 rotate-90" />
              </div>
            </div>

            {/* Hint overlay at bottom */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-navy-950/80 backdrop-blur-md border border-white/10 font-sans text-xs font-medium text-slate-secondary pointer-events-none">
              ← Drag or Click to Compare Grade →
            </div>
          </div>

          {/* Preset Buttons for Quick Jumps */}
          <div className="flex items-center justify-center gap-3 mt-4 font-sans text-xs font-medium">
            <span className="text-slate-muted">Quick Split:</span>
            <button
              onClick={() => setSliderPosition(25)}
              className="px-3 py-1 rounded bg-navy-850 hover:bg-navy-800 text-slate-secondary border border-white/10"
            >
              25% RAW
            </button>
            <button
              onClick={() => setSliderPosition(50)}
              className="px-3 py-1 rounded bg-navy-850 hover:bg-navy-800 text-slate-secondary border border-white/10"
            >
              50 / 50 Split
            </button>
            <button
              onClick={() => setSliderPosition(75)}
              className="px-3 py-1 rounded bg-navy-850 hover:bg-navy-800 text-slate-secondary border border-white/10"
            >
              75% Graded
            </button>
          </div>

          {/* Technical Specs Checklist below */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {colorGradeComparison.technicalSpecs.map((spec, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-navy-850/80 border border-white/10 flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-electric-blue shrink-0 mt-0.5" />
                <span className="font-manrope font-medium text-sm sm:text-[15px] text-[#F5F8FF] leading-[1.65]">
                  {spec}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
