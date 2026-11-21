import React, { useState } from 'react';
import { Play, Sparkles, Film, ArrowUpRight, Heart, Eye } from 'lucide-react';
import { projects, projectCategories } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export default function ProjectGallery({ onSelectProject }) {
  const [sectionRef, isInView] = useInView();
  const [activeFilter, setActiveFilter] = useState('all');
  const [inlinePlayingId, setInlinePlayingId] = useState(null);

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  // Retrieve Abhinay MD project specifically for the 4 Reels sample gallery
  const abhinayProject = projects.find(p => p.id === 'abhinay-md-client-project');

  return (
    <section id="works" className="relative py-24 bg-transparent film-grain">
      {/* Background radial blue glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-electric-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div ref={sectionRef} className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-reveal ${isInView ? 'section-revealed' : ''}`}>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-850 border border-white/10 font-sans text-xs font-medium text-slate-secondary mb-3">
              <Film className="w-3.5 h-3.5 text-electric-blue" />
              <span>CURATED PORTFOLIO // SELECTED WORKS</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Selected Works
            </h2>
            <p className="font-manrope font-medium text-base sm:text-lg text-[#F5F8FF] mt-2 max-w-2xl leading-[1.75] tracking-normal">
              Curated showcase featuring narrative short film (<span className="text-white font-semibold">Klusteerr</span>), gaming content editing (<span className="text-white font-semibold">Infix Plays</span>), and commercial reels (<span className="text-white font-semibold">Abhinay MD</span>).
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {projectCategories.map((cat) => {
              const count = cat.id === 'all' 
                ? projects.length 
                : projects.filter(p => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-4 py-2 rounded-xl font-sans text-xs sm:text-[13px] font-medium transition-all flex items-center gap-2 ${
                    activeFilter === cat.id
                      ? 'bg-electric-blue text-white shadow-lg shadow-electric-blue/30 font-semibold'
                      : 'bg-navy-850 hover:bg-navy-800 text-slate-secondary border border-white/10 hover:border-electric-blue/40'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[11px] font-mono px-1.5 py-0.5 rounded-full ${
                    activeFilter === cat.id ? 'bg-black/30 text-white' : 'bg-navy-750 text-slate-secondary'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredProjects.map((project) => {
            const isGoogleDrive = Boolean(project.driveEmbedUrl);
            const isAbhinay = Boolean(project.reels);
            const isYouTube = Boolean(project.youtubeEmbedUrl);
            const isInlinePlaying = inlinePlayingId === project.id;

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cine-card rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between"
              >
                {/* Media Container with Thumbnail or Direct Embed */}
                {isInlinePlaying ? (
                  <div 
                    className="relative aspect-video w-full overflow-hidden bg-black"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <iframe
                      src={`${project.youtubeEmbedUrl}?autoplay=1`}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setInlinePlayingId(null);
                      }}
                      className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-md bg-black/85 hover:bg-black text-white font-sans text-xs font-medium border border-white/20 transition-colors shadow-lg backdrop-blur-md"
                      title="Close Player"
                    >
                      ✕ Close
                    </button>
                  </div>
                ) : (
                  <div 
                    className="relative aspect-video w-full overflow-hidden bg-navy-900"
                    onClick={(e) => {
                      if (isYouTube) {
                        e.stopPropagation();
                        setInlinePlayingId(project.id);
                      }
                    }}
                  >
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      onError={(e) => {
                        if (project.youtubeId) {
                          e.currentTarget.src = `https://i.ytimg.com/vi/${project.youtubeId}/hqdefault.jpg`;
                        }
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Dark Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md font-sans text-[11px] font-semibold text-white border border-white/10 uppercase tracking-wider">
                        {project.categoryLabel}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md font-mono text-[11px] text-slate-secondary border border-white/10">
                        {project.aspectRatio} • {project.duration}
                      </span>
                    </div>

                    {/* Center Play Indicator on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                      <div className="w-14 h-14 rounded-full bg-electric-blue text-white flex items-center justify-center shadow-xl shadow-electric-blue/50">
                        <Play className="w-6 h-6 fill-white ml-0.5" />
                      </div>
                    </div>

                    {/* Bottom Metric Pill */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-navy-900/90 backdrop-blur-md border border-white/10 font-sans text-xs font-medium text-slate-secondary">
                        <Sparkles className="w-3.5 h-3.5 text-electric-blue" />
                        <span className="truncate">{project.metrics}</span>
                      </div>

                      {isGoogleDrive && (
                        <span className="text-[11px] font-mono px-2 py-1 rounded bg-black/75 border border-white/10 text-electric-light">
                          Drive 16:9
                        </span>
                      )}

                      {isAbhinay && (
                        <span className="text-[11px] font-mono px-2 py-1 rounded bg-black/75 border border-white/10 text-electric-light">
                          4 Reels
                        </span>
                      )}

                      {isYouTube && (
                        <span className="text-[11px] font-mono px-2 py-1 rounded bg-black/75 border border-white/10 text-electric-light">
                          YouTube 16:9
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Content Info Area */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="font-sans text-[11px] uppercase tracking-wider font-semibold text-slate-muted mb-1.5">
                      {project.clientType}
                    </div>
                    <h3 className="font-heading font-semibold text-xl sm:text-[22px] tracking-tight text-white group-hover:text-electric-blue transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="font-manrope font-medium text-[15px] sm:text-base leading-[1.7] text-[#F5F8FF] line-clamp-2 mt-2 tracking-normal">
                      {project.overview}
                    </p>
                  </div>

                  {/* Software Tags & Action Button */}
                  <div className="pt-3.5 border-t border-white/10 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5 font-sans">
                      {project.software.slice(0, 2).map((soft) => (
                        <span
                          key={soft}
                          className="text-[11px] font-medium px-2 py-0.5 rounded bg-navy-800 text-slate-secondary border border-white/5"
                        >
                          {soft}
                        </span>
                      ))}
                      {project.software.length > 2 && (
                        <span className="text-[11px] font-medium px-1.5 py-0.5 rounded bg-navy-800 text-slate-muted">
                          +{project.software.length - 2}
                        </span>
                      )}
                    </div>

                    <div className="inline-flex items-center gap-1 font-sans text-xs font-semibold text-slate-secondary group-hover:text-electric-blue transition-colors">
                      <span>Inspect Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ABHINAY MD — CLIENT PROJECT SAMPLES GALLERY (4 Reels) */}
        {abhinayProject && (activeFilter === 'all' || activeFilter === 'client-work') && (
          <div className="mt-16 pt-12 border-t border-white/10 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-850 border border-white/10 font-sans text-xs font-semibold text-slate-secondary mb-2">
                <Film className="w-3.5 h-3.5 text-electric-blue" />
                <span>CLIENT WORK // REELS SAMPLES</span>
              </div>
              <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-white tracking-tight">
                Abhinay MD — Client Project
              </h3>
              <p className="font-manrope font-medium text-base sm:text-lg text-[#F5F8FF] mt-1 max-w-xl leading-[1.75] tracking-normal">
                Vertical short-form editing samples engineered for high retention, narrative rhythm, and acoustic sound design.
              </p>
            </div>

            {/* 4 Reels Responsive Minimal Dark Cards Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {abhinayProject.reels.map((reel) => (
                <a
                  key={reel.id}
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl overflow-hidden bg-navy-900/85 backdrop-blur-md border border-white/10 hover:border-electric-blue/60 shadow-xl hover:shadow-2xl hover:shadow-electric-blue/15 transition-all duration-300 flex flex-col justify-between"
                  title="Watch Reel"
                >
                  {/* Vertical 9:16 Video Focus Viewport */}
                  <div className="relative aspect-[9/16] w-full bg-black overflow-hidden">
                    <img
                      src={reel.thumbnail}
                      alt="Client Reel Preview"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />

                    {/* Dark Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/25 group-hover:from-black/70 transition-colors" />

                    {/* Center Cinematic Play Indicator on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                      <div className="w-14 h-14 rounded-full bg-electric-blue text-white flex items-center justify-center shadow-2xl shadow-electric-blue/50">
                        <Play className="w-6 h-6 fill-white ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Clean Minimal Bottom Metrics Bar — Only Views & Likes */}
                  <div className="p-3.5 bg-navy-950 border-t border-white/10 flex items-center justify-between font-sans text-xs">
                    <div className="flex items-center gap-1.5 font-medium text-white">
                      <Heart className="w-3.5 h-3.5 text-electric-light fill-electric-light/30" />
                      <span className="font-mono text-xs">{reel.likes ? `${reel.likes} likes` : 'Likes hidden'}</span>
                    </div>

                    {reel.views ? (
                      <div className="flex items-center gap-1.5 font-medium text-slate-secondary font-mono text-xs">
                        <Eye className="w-3.5 h-3.5 text-slate-secondary" />
                        <span>{reel.views}</span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-muted group-hover:text-electric-light transition-colors">
                        <span>Watch</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
