import React, { useEffect, useRef } from 'react';
import { ArtistConfig, TabType } from '../types/artist';

interface HeroProps {
  config: ArtistConfig;
  onSelectTab?: (tab: TabType) => void;
  onPlayTrack?: (title: string, artist: string) => void;
  onUpdateConfig?: (config: ArtistConfig) => void;
}

export const Hero: React.FC<HeroProps> = ({ config }) => {
  const isVideo = Boolean(config.heroVideoUrl?.match(/\.(mp4|mov|webm)$/i));
  const posterUrl = config.heroImage || '/hero-poster.jpg';
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isVideo) return;

    // Explicitly enforce attributes on the underlying DOM element for iOS WebKit
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.defaultMuted = true;
    video.muted = true;

    const playVideo = () => {
      video.play().catch(() => {
        // Fallback for strict browser power policies
      });
    };

    if (video.readyState >= 2) {
      playVideo();
    } else {
      video.addEventListener('loadeddata', playVideo, { once: true });
      video.addEventListener('canplay', playVideo, { once: true });
    }

    // Safety fallback: if paused by power policies, immediately play on any touch or scroll
    const handleTouch = () => {
      if (video.paused) {
        video.play().catch(() => {});
      }
    };

    window.addEventListener('touchstart', handleTouch, { passive: true, once: true });
    window.addEventListener('scroll', handleTouch, { passive: true, once: true });

    return () => {
      video.removeEventListener('loadeddata', playVideo);
      video.removeEventListener('canplay', playVideo);
      window.removeEventListener('touchstart', handleTouch);
      window.removeEventListener('scroll', handleTouch);
    };
  }, [isVideo, config.heroVideoUrl]);

  return (
    <section className="relative w-full h-[50vh] min-h-[320px] sm:h-[85vh] lg:h-[92vh] overflow-hidden bg-black flex items-center justify-center border-b border-white/10 select-none">
      <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center pointer-events-none select-none bg-black">
        {/* Baseline Poster Image: Always rendered to prevent black gaps */}
        <img
          src={posterUrl || '/hero-loop.webp'}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
          loading="eager"
          decoding="async"
        />

        {/* Hero Video: Fully visible and autoplays immediately on page load */}
        {isVideo && (
          <video
            ref={videoRef}
            src={config.heroVideoUrl}
            poster={posterUrl}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            disablePictureInPicture
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
          />
        )}

        {/* Subtle Overlay gradient for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" />
      </div>

      {/* Centered Minimalist Title */}
      <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto select-none overflow-hidden pointer-events-none">
        <h1 className="text-3xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[0.1em] xs:tracking-[0.18em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase font-sans text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)] leading-tight truncate sm:whitespace-normal pointer-events-none">
          {config.artistName}
        </h1>
      </div>
    </section>
  );
};
