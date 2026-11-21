import React, { useState } from 'react';
import CinematicBackground from './components/CinematicBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedShortFilm from './components/FeaturedShortFilm';
import ProjectGallery from './components/ProjectGallery';
import ProjectModal from './components/ProjectModal';
import ColorGradingSlider from './components/ColorGradingSlider';
import Services from './components/Services';
import About from './components/About';
import InstagramSection from './components/InstagramSection';
import Contact from './components/Contact';
import VideoPlayerModal from './components/VideoPlayerModal';
import Footer from './components/Footer';
import { showreelData, featuredShortFilm } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [preselectedService, setPreselectedService] = useState('');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 76;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const scrollToWorks = () => {
    const el = document.getElementById('featured-film') || document.getElementById('works');
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 76;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const pauseAllBackgroundVideos = () => {
    document.querySelectorAll('video').forEach((vid) => {
      try {
        if (!vid.paused) vid.pause();
      } catch (err) {}
    });
  };

  const handleSelectService = (serviceTitle) => {
    setPreselectedService(serviceTitle);
    scrollToContact();
  };

  const handleWatchReel = () => {
    const reelEl = document.getElementById('showreel');
    if (reelEl) {
      const topOffset = reelEl.getBoundingClientRect().top + window.pageYOffset - 76;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    } else {
      pauseAllBackgroundVideos();
      setActiveVideoModal({
        url: showreelData.videoUrl,
        title: showreelData.title,
        subtitle: showreelData.subtitle
      });
    }
  };

  const handleWatchFilm = (videoUrl, title, genre) => {
    pauseAllBackgroundVideos();
    setActiveVideoModal({
      url: videoUrl || featuredShortFilm.videoUrl,
      title: title || featuredShortFilm.title,
      subtitle: genre || `${featuredShortFilm.genre} • Role: Video Editor`
    });
  };

  const handleInspectProject = (project) => {
    pauseAllBackgroundVideos();
    setSelectedProject(project);
  };

  return (
    <div className="relative min-h-screen bg-transparent text-white selection:bg-electric-blue selection:text-white flex flex-col justify-between">
      {/* Global Shared Cinematic Animated Background Layer */}
      <CinematicBackground />

      {/* Top Fixed Navigation */}
      <Navbar
        onOpenContact={scrollToContact}
        onWatchReel={handleWatchReel}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onWatchReel={handleWatchReel}
          onExploreWorks={scrollToWorks}
          onOpenContact={scrollToContact}
        />

        {/* 2. DEDICATED FEATURED SHORT FILM SECTION */}
        <FeaturedShortFilm
          onWatchFilm={handleWatchFilm}
          onInspectProject={handleInspectProject}
        />

        {/* 3. Selected Works Project Gallery (Reorganized Categories) */}
        <ProjectGallery
          onSelectProject={handleInspectProject}
        />

        {/* 5. Color Grading Before/After Comparison */}
        <ColorGradingSlider />

        {/* 6. Services Section */}
        <Services
          onSelectService={handleSelectService}
        />

        {/* 7. About Me & Software/Hardware Rig */}
        <About />

        {/* 10. Instagram Integration & Reels */}
        <InstagramSection />

        {/* 11. Contact & Project Booking Form */}
        <Contact
          preselectedService={preselectedService}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Inspector Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenContact={scrollToContact}
        />
      )}

      {/* Standalone Video Screening Modal */}
      {activeVideoModal && (
        <VideoPlayerModal
          isOpen={Boolean(activeVideoModal)}
          onClose={() => setActiveVideoModal(null)}
          videoUrl={activeVideoModal.url}
          title={activeVideoModal.title}
          subtitle={activeVideoModal.subtitle}
        />
      )}
    </div>
  );
}
