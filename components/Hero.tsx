"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoPanelRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const attemptPlay = () => {
      if (video.paused) {
        video.play().catch(() => {});
      }
    };

    attemptPlay();
    document.addEventListener("pointerdown", attemptPlay, { once: true });

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const heading = headingRef.current;
      const videoPanel = videoPanelRef.current;
      const scrollCue = scrollCueRef.current;
      if (!section || !heading || !videoPanel) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        // Initial state of H1 text: starts slightly translated down with blur and low opacity
        gsap.set(heading, { opacity: 0, y: 40, filter: "blur(4px)" });
        if (scrollCue) gsap.set(scrollCue, { opacity: 1 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=100%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // 1. Scroll cue fades out immediately on initial scroll
        if (scrollCue) {
          tl.to(scrollCue, {
            opacity: 0,
            y: 12,
            duration: 0.25,
            ease: "power1.out",
          }, 0);
        }

        // 2. Text emerges smoothly and cleanly right on the video
        tl.to(heading, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.0,
          ease: "power2.out",
        }, 0.05);

        // 3. Cinematic subtle video scale
        tl.to(videoPanel, {
          scale: 1.06,
          duration: 1.8,
          ease: "none",
        }, 0);

        // 4. Solid hold state with H1 fully visible before releasing to second section
        tl.to({}, { duration: 0.8 });

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      });

      mm.add("(max-width: 1023px), (prefers-reduced-motion: reduce)", () => {
        gsap.set(heading, { opacity: 1, y: 0, filter: "none" });
      });

      return () => mm.revert();
    }, sectionRef);

    const refreshTimer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      window.clearTimeout(refreshTimer);
      ctx.revert();
      document.removeEventListener("pointerdown", attemptPlay);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="
        relative
        z-10
        h-[100svh]
        w-full
        overflow-hidden
        bg-[#0C0B0A]
      "
    >
      {/* 1. CINEMATIC FULLSCREEN BACKGROUND VIDEO */}
      <div
        ref={videoPanelRef}
        className="
          absolute
          inset-0
          h-full
          w-full
          overflow-hidden
        "
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-poster.jpg"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Ambient Darkened Gradient for crisp contrast */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/75
            via-black/35
            to-black/55
          "
        />
      </div>

      {/* 2. TRANSPARENT H1 HEADLINE OVERLAID DIRECTLY ON THE VIDEO */}
      <div
        ref={headingRef}
        className="
          relative
          z-10
          flex
          h-full
          w-full
          items-center
          justify-center
          px-6
          text-center
        "
      >
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <span className="inline-block text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.3em] text-[#E0C9A6] drop-shadow-md mb-5">
            New City Paradise · Burhan Interchange
          </span>

          {/* Pure Beautiful H1 */}
          <h1
            className="
              text-[clamp(2.2rem,4.5vw,4.1rem)]
              font-light
              leading-[1.1]
              tracking-[-0.03em]
              text-white
              drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]
            "
          >
            A New Perspective <br />
            <span className="font-normal italic text-[#E0C9A6]">
              on Living
            </span>
          </h1>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div
        ref={scrollCueRef}
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/70 transition-opacity"
      >
        <span className="text-[9px] uppercase tracking-[0.28em] font-sans">
          Scroll to explore
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/80 to-transparent animate-pulse" />
      </div>
    </section>
  );
}