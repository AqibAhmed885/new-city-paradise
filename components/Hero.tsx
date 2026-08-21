"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsap } from "@/hooks/useGsap";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const background = useRef<HTMLDivElement>(null);

  const buildingEntrance = useRef<HTMLDivElement>(null);
  const buildingScroll = useRef<HTMLDivElement>(null);

  const titleEntrance = useRef<HTMLDivElement>(null);
  const titleScroll = useRef<HTMLHeadingElement>(null);

  const content = useRef<HTMLDivElement>(null);

  useGsap(() => {
    if (!root.current) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) return;

    const context = gsap.context(() => {
      // Initial page-load animation
      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      intro
        .from(background.current, {
          scale: 1.12,
          duration: 2,
          ease: "power2.out",
        })
        .from(
          titleEntrance.current,
          {
            y: 120,
            opacity: 0,
            duration: 1.4,
          },
          0.15,
        )
        .from(
          buildingEntrance.current,
          {
            y: 180,
            opacity: 0,
            scale: 0.95,
            duration: 1.6,
          },
          0.25,
        )
        .from(
          content.current,
          {
            y: 40,
            opacity: 0,
            duration: 1,
          },
          0.55,
        );

      // Background parallax
      gsap.to(background.current, {
        yPercent: 12,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Title remains still during the first 10% of hero scroll.
      // After that, it moves downward and fades out.
      gsap.to(titleScroll.current, {
        y: 260,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "10% top",
          end: "60% top",
          scrub: 0.5,
        },
      });

      // Building moves upward as soon as scrolling starts.
      gsap.to(buildingScroll.current, {
        y: -320,
        scale: 1.06,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Bottom content starts moving after a small delay.
      gsap.to(content.current, {
        y: 100,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "10% top",
          end: "65% top",
          scrub: 0.8,
        },
      });
    }, root);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={root}
      id="home"
      className=" relative min-h-[100svh] overflow-hidden bg-ink text-white"
    >
      {/* Background image */}
      <div
        ref={background}
        className="absolute -inset-y-[12%] inset-x-0 will-change-transform"
      >
        <Image
          src="/images/hero.avif"
          alt="Aerial view of New City Paradise at sunrise"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Background overlays */}
      {/* <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-black/5 to-black/90" /> */}

      {/* <div className="absolute z-10 inset-0 bg-[radial-gradient(circle_at_50%_34%,transparent_10%,rgba(0,0,0,.2)_85%)]" /> */}

      <div className="container-pad relative flex min-h-[100svh] flex-col justify-end pb-10 pt-32 sm:pb-12">
        {/* Building entrance wrapper */}
        <div
          ref={buildingEntrance}
          className="pointer-events-none absolute -bottom-[1%] right-0 z-10 w-[92vw] max-w-[900px] will-change-transform sm:w-[80vw] lg:w-[70vw]"
        >
          {/* Building scroll wrapper */}
          <div
            // ref={buildingScroll}
            className="will-change-transform"
          >
            <Image
              src="/images/arcade1.png"
              alt="New City Paradise building"
              width={900}
              height={600}
              priority
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 80vw, 70vw"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        {/* Title entrance wrapper */}
        <div
          ref={titleEntrance}
          className="pointer-events-none absolute left-1/2 top-[34%] w-full -translate-x-1/2 -translate-y-1/2"
        >
          
          <h1
            ref={titleScroll}
            className="hero-title w-full text-center text-[clamp(4rem,12vw,8rem)] uppercase leading-[0.85] text-white will-change-transform"
          >
            <span className="block">New City</span>
            <span className="block italic text-[#ebcfa7]">Paradise</span>
          </h1>
        </div>
        <div className="absolute bottom-1/3  left-24  text-left text-[10px] font-bold uppercase tracking-[0.2em] text-black sm:text-[12px]">
          <h1 className="flex flex-col gap-1 text-[clamp(1.2rem,3vw,1.5rem)] leading-[0.85] sm:text-[clamp(1.5rem,3vw,3rem)]">
            <span>Where</span>
            <span>heritage</span>
            <span>meets</span>
            <span>innovation</span>
          </h1>
        </div>
        
        {/* Bottom content */}
        <div
          ref={content}
          className="relative z-30 flex flex-col items-start justify-between gap-8 border-t border-white/35 pt-4 will-change-transform md:flex-row md:items-end"
        >
          

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="#properties"
              className="group inline-flex items-center justify-center gap-5 rounded-full bg-white px-6 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:bg-champagne hover:text-white"
            >
              Explore residences

              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 5L19 12L12 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-2.5 text-xs font-medium uppercase tracking-[0.2em] transition-colors hover:bg-white hover:text-ink"
            >
              Book a visit
            </a>
          </div>
          <p className="max-w-lg text-sm font-light leading-7 text-white/75 sm:text-base">
            A master-planned sanctuary where thoughtful architecture, open
            landscapes and enduring value come together.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 items-center gap-4 xl:flex">
        <span className="vertical-text text-[8px] uppercase tracking-[0.3em] text-white/60">
          Scroll to discover
        </span>

        <span className="relative block h-24 w-px overflow-hidden bg-white/30">
          <i className="absolute left-0 top-0 h-1/3 w-px animate-[scroll_2s_ease-in-out_infinite] bg-white" />
        </span>
      </div> */}
    </section>
  );
}
