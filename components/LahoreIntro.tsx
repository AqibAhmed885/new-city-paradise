"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { LAHORE_CONFIG } from "@/lib/lahoreConfig";

gsap.registerPlugin(ScrollTrigger);

function HighlightWords({
  children,
  tone = "white",
}: {
  children: string;
  tone?: "white" | "champagne";
}) {
  const words = children.trim().split(/\s+/);

  return (
    <>
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          <span
            data-lahore-heading-word
            data-tone={tone}
            className="inline-block"
          >
            {word}
          </span>
          {index < words.length - 1 && " "}
        </span>
      ))}
    </>
  );
}

function DescriptionWords({ children }: { children: string }) {
  const words = children.trim().split(/\s+/);

  return (
    <>
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          <span
            data-lahore-desc-word
            className="inline-block transition-colors duration-150"
          >
            {word}
          </span>
          {index < words.length - 1 && " "}
        </span>
      ))}
    </>
  );
}

export default function LahoreIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    if (!section || !sticky) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const headingWords = gsap.utils.toArray<HTMLElement>(
            "[data-lahore-heading-word]",
            section
          );
          const descriptionWords = gsap.utils.toArray<HTMLElement>(
            "[data-lahore-desc-word]",
            section
          );
          const buttons = section.querySelectorAll("[data-lahore-cta]");

          // Initial dimmed state
          gsap.set(headingWords, {
            color: "rgba(255,255,255,0.22)",
          });
          gsap.set(descriptionWords, {
            color: "rgba(255,255,255,0.18)",
          });

          if (buttons?.length) {
            gsap.set(buttons, {
              opacity: 0,
              y: 24,
            });
          }

          // Master Timeline scrubbed across 300vh
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom bottom",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });

          // Phase 1: Heading Words illumination
          headingWords.forEach((word, index) => {
            const isChampagne = word.dataset.tone === "champagne";
            tl.to(
              word,
              {
                color: isChampagne ? "#D9BD89" : "#FFFFFF",
                duration: 0.7,
                ease: "none",
              },
              index * 0.08
            );
          });

          // Pause
          tl.to({}, { duration: 0.45 });

          // Phase 2: Description Words illumination
          descriptionWords.forEach((word) => {
            tl.to(
              word,
              {
                color: "rgba(255,255,255,0.84)",
                duration: 0.4,
                ease: "none",
              },
              ">-0.33"
            );
          });

          // Phase 3: CTA buttons reveal
          if (buttons?.length) {
            tl.to(
              buttons,
              {
                opacity: 1,
                y: 0,
                stagger: 0.12,
                duration: 0.7,
                ease: "power2.out",
              },
              ">"
            );
          }

          // Phase 4: Final hold
          tl.to({}, { duration: 1.2 });

          // Background subtle zoom
          if (backgroundRef.current) {
            gsap.to(backgroundRef.current, {
              scale: 1.14,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "bottom bottom",
                scrub: 1.4,
              },
            });
          }

          // Eyebrow entrance
          if (eyebrowRef.current) {
            gsap.fromTo(
              eyebrowRef.current,
              { opacity: 0, y: -16 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: section,
                  start: "top 80%",
                },
              }
            );
          }

          return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
          };
        }
      );

      // Mobile fallback
      mm.add("(max-width: 1023px), (prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-lahore-heading-word]", {
          color: (i, target) =>
            target.dataset.tone === "champagne" ? "#D9BD89" : "#FFFFFF",
        });
        gsap.set("[data-lahore-desc-word]", {
          color: "rgba(255,255,255,0.85)",
        });
        gsap.set(section.querySelectorAll("[data-lahore-cta]"), {
          opacity: 1,
          y: 0,
        });
      });

      return () => mm.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="lahore-intro"
      className="
        relative
        isolate
        min-h-screen
        overflow-visible
        text-ink
        bg-[#111A17]
        lg:h-[300vh]
      "
    >
      {/* Sticky Viewport */}
      <div
        ref={stickyRef}
        className="
          relative
          min-h-screen
          overflow-hidden
          lg:sticky
          lg:top-0
          lg:flex
          lg:h-screen
          lg:items-center
        "
      >
        {/* Background visual with parallax scale */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-30 overflow-hidden"
        >
          <div
            ref={backgroundRef}
            className="
              absolute
              -inset-[6%]
              bg-[url('/images/delivered/lahore-hero.jpg')]
              bg-cover
              bg-center
              bg-no-repeat
              filter
              brightness-[0.24]
              contrast-[1.1]
              will-change-transform
            "
          />
        </div>

        {/* Champagne Glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-40
            top-1/2
            -z-10
            h-[600px]
            w-[600px]
            -translate-y-1/2
            rounded-full
            bg-champagne/[0.12]
            blur-[130px]
          "
        />

        {/* Content Container */}
        <div className="relative mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-10 lg:px-14 lg:py-16 text-center">
          {/* Eyebrow */}
          <div ref={eyebrowRef} className="mb-7">
            <span className="text-[10px] font-sans font-semibold tracking-[0.26em] uppercase text-champagne sm:text-xs">
              RUDA Phase 1 Urban Basin · Eastern Bypass M-11
            </span>
          </div>

          {/* Golden Highlight Heading */}
          <h2 className="mx-auto max-w-[1250px] text-[clamp(2.4rem,4.2vw,4.6rem)] font-heading font-medium leading-[1.08] tracking-[-0.03em] text-white">
            <span className="block">
              <HighlightWords>
                New City Paradise Lahore —
              </HighlightWords>
            </span>
            <span className="mt-2 block font-light italic text-champagne">
              <HighlightWords tone="champagne">
                Pakistan’s Largest Riverfront Development
              </HighlightWords>
            </span>
            <span className="mt-2 block">
              <HighlightWords>
                in the heart of RUDA.
              </HighlightWords>
            </span>
          </h2>

          {/* Golden Highlight Description */}
          <div className="mx-auto mt-8 sm:mt-10 max-w-4xl">
            <p className="text-[17px] sm:text-[20px] lg:text-[23px] font-sans font-light leading-[1.75] text-white/40">
              <DescriptionWords>
                Spanning the prime waterfront contours of the Ravi River, New City Paradise Lahore introduces smart sustainable urban planning, direct Eastern Bypass motorway access, high-street commercial arcades, and international lifestyle amenities built for enduring multigenerational value.
              </DescriptionWords>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              data-lahore-cta
              href="#lahore-sectors"
              className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-black transition-all duration-300 hover:bg-[#D9BD89] hover:text-black shadow-lg"
            >
              Explore Sectors & Plots
              <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              data-lahore-cta
              href="#lahore-location"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/30 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:border-white/50"
            >
              View Strategic Location
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
