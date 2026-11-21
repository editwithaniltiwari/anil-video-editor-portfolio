import React, { useEffect, useRef, useState } from 'react';
import { X, Sparkles, CheckCircle2, Film, Cpu, ExternalLink, Play, Heart, Eye, ArrowUpRight } from 'lucide-react';

export default function ProjectModal({ project, onClose, onOpenContact }) {
  const videoRef = useRef(null);
  const [embedMode, setEmbedMode] = useState(true);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    
    // Prevent background scrolling ONLY while modal is actively open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow || '';
    };
  }, [project, onClose]);

  if (!project) return null;

  const isGoogleDrive = Boolean(project.driveEmbedUrl);
  const isAbhinayClient = Boolean(project.reels && project.reels.length > 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-navy-950/92 backdrop-blur-md animate-in fade-in duration-200">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog Box */}
      <div className="relative w-full max-w-5xl max-h-[94vh] sm:max-h-[92vh] overflow-y-auto bg-navy-900 border border-white/20 rounded-2xl shadow-2xl z-10 text-white flex flex-col">
        {/* Top Header Bar */}
        <div className="sticky top-0 bg-navy-950/95 px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10 flex items-center justify-between z-20 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-electric-blue animate-rec" />
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-secondary">
              PROJECT INSPECTOR // {project.categoryLabel}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {project.youtubeEmbedUrl && project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-850 hover:bg-navy-800 text-slate-secondary hover:text-white border border-white/10 text-xs font-sans transition-colors"
              >
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5 text-electric-light" />
              </a>
            )}

            {isGoogleDrive && project.driveOriginalUrl && (
              <a
                href={project.driveOriginalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-850 hover:bg-navy-800 text-slate-secondary hover:text-white border border-white/10 text-xs font-sans transition-colors"
              >
                <span>Google Drive</span>
                <ExternalLink className="w-3.5 h-3.5 text-electric-light" />
              </a>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-navy-850 hover:bg-navy-800 text-slate-secondary hover:text-white border border-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Media Preview Area */}
        {project.youtubeEmbedUrl ? (
          /* YouTube 16:9 Responsive Embed */
          <div className="relative aspect-video w-full bg-black border-b border-white/10">
            <iframe
              src={`${project.youtubeEmbedUrl}?autoplay=1`}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              className="w-full h-full border-0"
            />
            <div className="absolute top-3 right-3 z-10">
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-black/80 hover:bg-navy-850 text-white font-sans text-xs font-semibold border border-white/20 backdrop-blur-md transition-colors flex items-center gap-1.5"
                title="Watch on YouTube"
              >
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5 text-electric-light" />
              </a>
            </div>
          </div>
        ) : isGoogleDrive ? (
          /* Google Drive 16:9 Responsive Embed */
          <div className="relative aspect-video w-full bg-black border-b border-white/10">
            <iframe
              src={project.driveEmbedUrl}
              title={project.title}
              allow="autoplay; fullscreen"
              allowFullScreen
              loading="lazy"
              className="w-full h-full border-0"
            />
            <div className="absolute top-3 right-3 z-10">
              <a
                href={project.driveOriginalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-black/80 hover:bg-navy-850 text-white font-sans text-xs font-semibold border border-white/20 backdrop-blur-md transition-colors flex items-center gap-1.5"
                title="Open fallback link in Google Drive"
              >
                <span>Open in Google Drive</span>
                <ExternalLink className="w-3.5 h-3.5 text-electric-light" />
              </a>
            </div>
          </div>
        ) : isAbhinayClient ? (
          /* Abhinay MD — 4 Client Reels Gallery in Modal */
          <div className="p-6 bg-navy-950 border-b border-white/10 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-electric-blue" />
                <span className="font-heading font-semibold text-xs sm:text-sm text-white uppercase tracking-wider">
                  Client Reel Deliverables ({project.reels.length} Vertical Cuts)
                </span>
              </div>
              <span className="font-mono text-xs text-slate-muted">
                Aspect: 9:16
              </span>
            </div>

            {/* 4 Reels Responsive Minimal Dark Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.reels.map((reel) => (
                <a
                  key={reel.id}
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl overflow-hidden bg-navy-900 border border-white/10 hover:border-electric-blue/60 shadow-lg hover:shadow-xl hover:shadow-electric-blue/10 transition-all duration-300 flex flex-col justify-between"
                  title="Watch Reel"
                >
                  {/* Vertical 9:16 Focus Preview */}
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
                      <div className="w-12 h-12 rounded-full bg-electric-blue text-white flex items-center justify-center shadow-xl shadow-electric-blue/50">
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Clean Minimal Bottom Metrics Bar — Only Views & Likes */}
                  <div className="p-3 bg-navy-950 border-t border-white/10 flex items-center justify-between font-sans text-xs">
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
        ) : (
          /* Standard Video Preview */
          <div className="relative aspect-video w-full bg-black border-b border-white/10">
            <video
              ref={videoRef}
              src={project.videoUrl}
              poster={project.thumbnail}
              controls
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Title & Metadata */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <div className="font-sans text-xs font-bold uppercase tracking-wider text-electric-blue mb-1.5">
                {project.clientType}
              </div>
              <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-white tracking-tight">
                {project.title}
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2 font-sans text-xs font-medium">
              <span className="px-3 py-1.5 rounded-md bg-navy-850 border border-white/10 text-slate-secondary">
                Aspect: {project.aspectRatio}
              </span>
              <span className="px-3 py-1.5 rounded-md bg-navy-850 border border-white/10 text-slate-secondary">
                {project.duration}
              </span>
              <span className="px-3 py-1.5 rounded-md bg-electric-blue/15 border border-electric-blue/30 text-blue-200 font-semibold">
                {project.metrics}
              </span>
            </div>
          </div>

          {/* Project Overview */}
          <div className="space-y-2">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-slate-muted">
              Project Overview & Editorial Approach
            </h4>
            <p className="font-manrope font-medium text-base sm:text-lg leading-[1.75] text-[#F5F8FF] tracking-normal">
              {project.overview}
            </p>
          </div>

          {/* Key Editorial Highlight */}
          <div className="p-4 rounded-xl bg-navy-850 border border-electric-blue/30 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-electric-blue shrink-0 mt-0.5" />
            <div>
              <p className="font-heading font-semibold text-sm uppercase tracking-wide text-white">
                Core Editorial Achievement
              </p>
              <p className="font-manrope font-medium text-[15px] sm:text-base leading-[1.7] text-[#F5F8FF] mt-1 tracking-normal">
                {project.highlight}
              </p>
            </div>
          </div>

          {/* Deliverables & Software Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Deliverables */}
            <div className="space-y-2">
              <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-slate-muted flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5 text-slate-muted" />
                <span>Final Deliverables</span>
              </h4>
              <ul className="space-y-1.5">
                {project.deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-2 font-sans text-xs sm:text-[13px] font-medium text-slate-secondary">
                    <CheckCircle2 className="w-3.5 h-3.5 text-electric-blue shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Software Stack */}
            <div className="space-y-2">
              <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-slate-muted flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-slate-muted" />
                <span>Production Software & Tools</span>
              </h4>
              <div className="flex flex-wrap gap-2 font-sans">
                {project.software.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-medium px-3 py-1 rounded bg-navy-800 text-slate-secondary border border-white/10"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Bottom CTA Footer */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 font-sans">
            <div className="text-xs text-slate-muted">
              Role: <span className="text-white font-medium">{project.role}</span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              {project.youtubeEmbedUrl && (
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-navy-800 hover:bg-navy-750 text-white text-xs font-semibold uppercase tracking-wider border border-white/10 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <span>Watch on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5 text-electric-light" />
                </a>
              )}

              {isGoogleDrive && (
                <a
                  href={project.driveOriginalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-navy-800 hover:bg-navy-750 text-white text-xs font-semibold uppercase tracking-wider border border-white/10 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <span>Open Drive Link</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {isAbhinayClient && project.reels && project.reels[0] && (
                <a
                  href={project.reels[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-navy-800 hover:bg-navy-750 text-white text-xs font-semibold uppercase tracking-wider border border-white/10 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <span>Watch Reels</span>
                  <ExternalLink className="w-3.5 h-3.5 text-electric-light" />
                </a>
              )}

              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="px-6 py-2.5 rounded-lg bg-electric-blue hover:bg-electric-hover text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg shadow-electric-blue/30 w-full sm:w-auto text-center"
              >
                Inquire Similar Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
