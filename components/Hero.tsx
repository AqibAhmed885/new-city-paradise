"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Explicitly enforce muted, playsInline on DOM node for strict mobile WebKit
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("playsinline", "true");
    video.setAttribute("webkit-playsinline", "true");

    const attemptPlay = () => {
      video.play().catch(() => {
        // If low power mode or browser policy blocks immediate autoplay,
        // retry on first touch/interaction
        const onTouch = () => {
          video.play().catch(() => {});
          window.removeEventListener("touchstart", onTouch);
          window.removeEventListener("click", onTouch);
        };
        window.addEventListener("touchstart", onTouch, { once: true, passive: true });
        window.addEventListener("click", onTouch, { once: true, passive: true });
      });
    };

    attemptPlay();
  }, []);

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-ink">
      {/* Background Video with Mobile Poster fallback */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          // @ts-ignore
          webkit-playsinline="true"
          preload="auto"
          poster="/images/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover scale-[1.05] sm:scale-[1.25]"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Subtle dark gradient overlay at top for navbar readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/20" />
      </div>

      {/* Accessible primary heading for search crawlers & screen readers */}
      <div className="sr-only">
        <h1>New City Paradise — PHATA-Approved Housing Society at Burhan Interchange &amp; CPEC Route</h1>
        <p>A master-planned residential and commercial community on 330-ft GT Road near Wah Cantt, developed by the developers of New City Wah.</p>
      </div>
    </section>
  );
}
