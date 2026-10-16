"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LAHORE_CONFIG } from "@/lib/lahoreConfig";

gsap.registerPlugin(ScrollTrigger);

export default function LahoreHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const visualPanelRef = useRef<HTMLDivElement>(null);
  const contentPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const visualPanel = visualPanelRef.current;
    const contentPanel = contentPanelRef.current;

    if (!section || !visualPanel || !contentPanel) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const margin = 16;
          const gap = 16;
          const radius = 12;

          const availableWidth = () => window.innerWidth - margin * 2 - gap;
          const finalWidth = () => availableWidth() / 2;

          // Initial state: Fullscreen visual
          gsap.set(visualPanel, {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: 0,
            zIndex: 2,
          });

          // Right panel starts off-screen to the right
          gsap.set(contentPanel, {
            position: "absolute",
            top: margin,
            left: () => window.innerWidth,
            width: finalWidth,
            height: `calc(100% - ${margin * 2}px)`,
            opacity: 1,
            borderRadius: radius,
            zIndex: 3,
          });

          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "+=150%",
              pin: true,
              pinSpacing: true,
              scrub: 0.8,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          // Step 1: Visual shrinks from fullscreen to left half
          tl.to(
            visualPanel,
            {
              top: margin,
              left: margin,
              width: finalWidth,
              height: `calc(100% - ${margin * 2}px)`,
              borderRadius: radius,
              duration: 1,
            },
            0
          );

          // Step 2: Content panel slides in from right to occupy right half
          tl.to(
            contentPanel,
            {
              left: () => margin + finalWidth() + gap,
              duration: 1,
            },
            0
          );

          // Step 3: Hold the split state before unpinning
          tl.to({}, { duration: 0.6 });

          return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
          };
        }
      );

      // Mobile / Reduced Motion fallback
      mm.add("(max-width: 1023px), (prefers-reduced-motion: reduce)", () => {
        gsap.set([visualPanel, contentPanel], {
          clearProps: "all",
        });
      });

      return () => mm.revert();
    }, sectionRef);

    const refreshTimer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 120);

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
        z-30
        min-h-[100svh]
        overflow-hidden
        bg-white
        lg:h-[100svh]
        lg:min-h-[100svh]
      "
    >
      {/* ============================= */}
      {/* LEFT VISUAL PANEL */}
      {/* ============================= */}
      <div
        ref={visualPanelRef}
        className="
          relative
          h-[65svh]
          w-full
          overflow-hidden
          rounded-xl
          lg:absolute
          lg:inset-0
          lg:h-full
          lg:rounded-none
        "
      >
        <Image
          src="/images/delivered/lahore-hero.jpg"
          alt="New City Paradise Lahore - RUDA Riverfront Basin"
          fill
          priority
          sizes="100vw"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            scale-105
            transition-transform
            duration-700
          "
        />

        {/* Ambient Gradient Overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-b
            from-black/35
            via-transparent
            to-black/45
          "
        />

        {/* Live Status Badge */}
        <div className="absolute top-24 left-8 z-10 hidden sm:flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-md px-3.5 py-1.5 border border-white/15 text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-[#D9BD89]" />
          <span className="text-[10px] font-sans font-medium tracking-[0.16em] uppercase text-white/90">
            RUDA Phase 1 Development
          </span>
        </div>
      </div>

      {/* ============================= */}
      {/* RIGHT CONTENT PANEL */}
      {/* ============================= */}
      <div
        ref={contentPanelRef}
        className="
          relative
          mt-4
          flex
          min-h-[55svh]
          w-full
          items-center
          overflow-hidden
          rounded-xl
          bg-[#F9F7F2]
          border
          border-black/[0.06]
          px-8
          py-20
          sm:px-12
          lg:absolute
          lg:mt-0
          lg:min-h-0
          lg:px-10
          xl:px-16
        "
      >
        <div className="max-w-xl">
          {/* Eyebrow */}
          <span className="inline-block text-[10.5px] font-sans font-medium tracking-[0.22em] uppercase text-[#8C7A58] mb-3">
            Eastern Bypass · M-11 Lahore
          </span>

          {/* Heading */}
          <h1
            className="
              text-3xl
              font-normal
              uppercase
              leading-[1.12]
              tracking-[-0.03em]
              text-[#12110f]
              sm:text-4xl
              xl:text-[46px]
            "
          >
            Pakistan’s Largest <br />
            <span className="font-light italic text-[#8C7A58]">
              Riverfront Paradise
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-lg
              text-[15px]
              leading-relaxed
              text-[#514b42]/85
              sm:text-[16px]
            "
          >
            Positioned in the heart of the RUDA urban corridor on the Eastern Bypass (M-11). Introducing smart, sustainable riverfront living crafted for enduring legacy.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#lahore-intro"
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-[#12110f]
                px-6
                py-3
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#12110f]
                transition-all
                duration-300
                hover:bg-[#12110f]
                hover:text-white
              "
            >
              Explore The Project
            </a>

            <a
              href={LAHORE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#12110F]
                px-6
                py-3
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-white
                transition-all
                duration-300
                hover:bg-[#8C7A58]
              "
            >
              Contact Sales Desk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
