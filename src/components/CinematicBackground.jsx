import React, { useEffect, useRef, useState } from 'react';

export default function CinematicBackground() {
  const canvasRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check user preferences & device type
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(motionQuery.matches);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();

    const handleMotionChange = (e) => setReducedMotion(e.matches);
    motionQuery.addEventListener('change', handleMotionChange);
    window.addEventListener('resize', checkMobile);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Atmospheric Particle Canvas System
  useEffect(() => {
    if (reducedMotion || isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle pool configuration (40 subtle cinematic dust & bokeh particles)
    const particleCount = 42;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.2 + 0.8,
        baseAlpha: Math.random() * 0.28 + 0.08,
        alpha: 0.1,
        speedY: -(Math.random() * 0.35 + 0.12),
        speedX: (Math.random() - 0.5) * 0.15,
        pulseSpeed: Math.random() * 0.015 + 0.006,
        pulseOffset: Math.random() * Math.PI * 2,
        colorType: Math.random() > 0.4 ? 'blue' : 'silver', // Electric blue or cool silver
      });
    }

    let time = 0;
    let isTabVisible = !document.hidden;

    const handleVisibility = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibility);

    const render = () => {
      if (isTabVisible) {
        ctx.clearRect(0, 0, width, height);
        time += 0.016;

        for (let i = 0; i < particleCount; i++) {
          const p = particles[i];

          // Slow vertical drift & sinusoidal horizontal sway
          p.y += p.speedY;
          p.x += p.speedX + Math.sin(time * 0.8 + p.pulseOffset) * 0.18;

          // Wrap around edges seamlessly
          if (p.y < -20) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
          if (p.x < -20) p.x = width + 10;
          if (p.x > width + 20) p.x = -10;

          // Gentle breathing luminance
          p.alpha = p.baseAlpha + Math.sin(time * p.pulseSpeed * 60 + p.pulseOffset) * 0.08;
          const currentAlpha = Math.max(0.04, Math.min(0.45, p.alpha));

          // Draw soft glowing particle
          ctx.beginPath();
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2.5);
          if (p.colorType === 'blue') {
            gradient.addColorStop(0, `rgba(49, 139, 255, ${currentAlpha})`);
            gradient.addColorStop(0.5, `rgba(22, 119, 255, ${currentAlpha * 0.5})`);
            gradient.addColorStop(1, 'rgba(22, 119, 255, 0)');
          } else {
            gradient.addColorStop(0, `rgba(255, 255, 255, ${currentAlpha * 0.85})`);
            gradient.addColorStop(0.5, `rgba(170, 182, 200, ${currentAlpha * 0.35})`);
            gradient.addColorStop(1, 'rgba(170, 182, 200, 0)');
          }

          ctx.fillStyle = gradient;
          ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [reducedMotion, isMobile]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
    >
      {/* 1. Deep Void Base: Dark Navy & Obsidian Studio Backdrop */}
      <div className="absolute inset-0 bg-[#050811]" />

      {/* 2. Flowing Volumetric Light Layer (Electric Blue & Dark Navy Depth) */}
      {!reducedMotion ? (
        <div className="absolute inset-0 overflow-hidden">
          {/* Top-Right Primary Electric-Blue Atmospheric Orb */}
          <div className="absolute -top-32 -right-32 w-[750px] h-[750px] rounded-full bg-electric-blue/16 blur-[150px] animate-cinematic-drift-1" />

          {/* Bottom-Left Secondary Sky-Blue Atmospheric Orb */}
          <div className="absolute -bottom-40 -left-40 w-[680px] h-[680px] rounded-full bg-[#1677FF]/14 blur-[160px] animate-cinematic-drift-2" />

          {/* Center-Left Deep Royal Depth Glow */}
          <div className="absolute top-1/3 left-1/4 w-[850px] h-[550px] rounded-full bg-[#0b244d]/22 blur-[170px] animate-cinematic-drift-1" />

          {/* Anamorphic Blue Horizontal Light Streak */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[90vw] h-[2px] bg-gradient-to-r from-transparent via-electric-light/25 to-transparent blur-[6px] animate-cinematic-beam" />
        </div>
      ) : (
        /* Static High-Fidelity Fallback for Reduced Motion & Low-Power */
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-electric-blue/12 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-[#1677FF]/10 rounded-full blur-[140px]" />
        </div>
      )}

      {/* 3. Soft Atmospheric Particle Canvas (Desktop / Tablet) */}
      {!reducedMotion && !isMobile && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block"
        />
      )}

      {/* 4. Fine 35mm Celluloid Film Grain Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 5. Cinematic Perimeter Vignette: Focuses viewer attention toward content */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_50%_50%,transparent_40%,rgba(4,7,15,0.78)_100%)] pointer-events-none" />
    </div>
  );
}
