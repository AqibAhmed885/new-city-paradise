"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LAHORE_CONFIG } from "@/lib/lahoreConfig";

gsap.registerPlugin(ScrollTrigger);

export default function LahoreHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const visualPanelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const heading = headingRef.current;
      const visualPanel = visualPanelRef.current;
      const scrollCue = scrollCueRef.current;
      if (!section || !heading || !visualPanel) return;

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
          tl.to(
            scrollCue,
            {
              opacity: 0,
              y: 12,
              duration: 0.25,
              ease: "power1.out",
            },
            0
          );
        }

        // 2. Text emerges smoothly and cleanly right on the visual
        tl.to(
          heading,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.0,
            ease: "power2.out",
          },
          0.05
        );

        // 3. Cinematic subtle visual push/scale
        tl.to(
          visualPanel,
          {
            scale: 1.06,
            duration: 1.8,
            ease: "none",
          },
          0
        );

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
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="lahore-hero"
      aria-label="New City Paradise Lahore Hero"
      className="
        relative
        z-10
        h-[100svh]
        w-full
        overflow-hidden
        bg-[#0C0B0A]
      "
    >
      {/* 1. CINEMATIC FULLSCREEN BACKGROUND VISUAL */}
      <div
        ref={visualPanelRef}
        className="
          absolute
          inset-0
          h-full
          w-full
          overflow-hidden
        "
      >
        <Image
          src="/images/delivered/lahore-hero.jpg"
          alt="New City Paradise Lahore Riverfront Aerial View"
          fill
          priority
          sizes="100vw"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        />

        {/* Ambient Darkened Gradient for crisp contrast */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            via-black/40
            to-black/60
          "
        />
      </div>

      {/* 2. TRANSPARENT H1 HEADLINE OVERLAID DIRECTLY ON THE VISUAL */}
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
            RUDA Phase 1 · Eastern Bypass M-11 Lahore
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
            Pakistan’s Largest <br />
            <span className="font-normal italic text-[#E0C9A6]">
              Riverfront Paradise
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
