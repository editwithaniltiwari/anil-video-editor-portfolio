import React, { useEffect, useRef } from 'react';
import { X, ExternalLink } from 'lucide-react';

export default function VideoPlayerModal({ isOpen, onClose, videoUrl, title, subtitle }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow || '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isGoogleDrive = videoUrl && videoUrl.includes('drive.google.com');
  const driveOriginalUrl = "https://drive.google.com/file/d/1mOx35fzXwlKCDUNFUz5hct8LseKYgmel/view?usp=sharing";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-navy-950/95 backdrop-blur-xl animate-in fade-in duration-200">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-5xl bg-navy-950 border border-white/20 rounded-2xl shadow-2xl overflow-hidden z-10">
        {/* Top bar */}
        <div className="px-4 sm:px-6 py-3 sm:py-3.5 bg-navy-900 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-electric-blue animate-rec" />
            <div>
              <h3 className="font-heading font-semibold text-sm sm:text-base text-white tracking-tight">
                {title || "Featured Screening"}
              </h3>
              {subtitle && (
                <p className="font-manrope font-medium text-xs sm:text-sm text-[#D0DAEA] mt-0.5">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {isGoogleDrive && (
              <a
                href={driveOriginalUrl}
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
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black">
          {isGoogleDrive ? (
            <iframe
              src={videoUrl}
              title={title}
              allow="autoplay; fullscreen"
              allowFullScreen
              loading="lazy"
              className="w-full h-full border-0"
            />
          ) : (
            <video
              ref={videoRef}
              src={videoUrl}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Bottom bar */}
        <div className="px-6 py-3 bg-navy-900 border-t border-white/10 flex items-center justify-between font-sans text-xs text-slate-secondary">
          <div className="flex items-center gap-3">
            <span className="font-semibold uppercase tracking-wider text-white">ANIL TIWARI // CINEMATIC CUT</span>
            {isGoogleDrive && (
              <a
                href={driveOriginalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-electric-light hover:underline inline-flex items-center gap-1"
              >
                <span>Open in Google Drive if embed fails</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
          <span className="text-slate-muted hidden sm:inline">Press ESC or click outside to close</span>
        </div>
      </div>
    </div>
  );
}
