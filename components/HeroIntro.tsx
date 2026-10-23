"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { SITE_CONFIG } from "@/lib/siteConfig";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   HEADING WORDS
========================================================= */

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
            data-heading-word
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

/* =========================================================
   DESCRIPTION WORDS
========================================================= */

function DescriptionWords({
  children,
}: {
  children: string;
}) {
  const words = children.trim().split(/\s+/);

  return (
    <>
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          <span
            data-description-word
            className="inline "
          >
            {word}
          </span>

          {index < words.length - 1 && " "}
        </span>
      ))}
    </>
  );
}

/* =========================================================
   COMPONENT
========================================================= */

export default function HeroIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      /* =====================================================
         DESKTOP
      ===================================================== */

      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const headingWords =
            gsap.utils.toArray<HTMLElement>(
              "[data-heading-word]",
              section
            );

          const descriptionWords =
            gsap.utils.toArray<HTMLElement>(
              "[data-description-word]",
              section
            );

          const buttons =
            ctaRef.current?.querySelectorAll<HTMLElement>(
              "[data-cta]"
            );
          gsap.set(headingWords, {
            color: "rgba(18, 17, 15, 0.22)",
          });

          gsap.set(descriptionWords, {
            color: "rgba(18, 17, 15, 0.22)",
          });

          if (buttons?.length) {
            gsap.set(buttons, {
              opacity: 0,
              y: 24,
            });
          }

          /*
           * MASTER TIMELINE
           */
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom bottom",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });

          /*
           * ==========================================
           * PHASE 1: HEADING WORDS
           * ==========================================
           */
          headingWords.forEach((word, index) => {
            const isChampagne =
              word.dataset.tone === "champagne";

            tl.to(
              word,
              {
                color: isChampagne
                  ? "#8C7A58"
                  : "#12110F",
                duration: 0.7,
                ease: "none",
              },
              index * 0.08
            );
          });

          tl.to({}, { duration: 0.45 });

          /*
           * ==========================================
           * PHASE 2: DESCRIPTION WORDS
           * ==========================================
           */
          descriptionWords.forEach((word) => {
            tl.to(
              word,
              {
                color: "rgba(18, 17, 15, 0.78)",
                duration: 0.4,
                ease: "none",
              },
              ">-0.33"
            );
          });

          /*
           * ==========================================
           * PHASE 3
           * CTA REVEAL
           * ==========================================
           */

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

          /*
           * ==========================================
           * PHASE 4
           * FINAL HOLD
           * ==========================================
           *
           * Keeps fully highlighted text visible
           * before sticky section releases.
           */

          tl.to({}, { duration: 1.2 });

          /*
           * EYEBROW
           */

          if (eyebrowRef.current) {
            gsap.fromTo(
              eyebrowRef.current,
              {
                opacity: 0,
                y: 18,
              },
              {
                opacity: 1,
                y: 0,

                duration: 0.8,

                ease: "power3.out",

                scrollTrigger: {
                  trigger: section,
                  start: "top 75%",
                  once: true,
                },
              }
            );
          }

          /*
           * BACKGROUND PARALLAX
           */

          if (backgroundRef.current) {
            gsap.fromTo(
              backgroundRef.current,
              {
                yPercent: -3,
                scale: 1.04,
              },
              {
                yPercent: 3,
                scale: 1.08,

                ease: "none",

                scrollTrigger: {
                  trigger: section,
                  start: "top bottom",
                  end: "bottom top",

                  scrub: 1.2,

                  invalidateOnRefresh: true,
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

      /* =====================================================
         TABLET / MOBILE
      ===================================================== */

      mm.add(
        "(max-width: 1023px) and (prefers-reduced-motion: no-preference)",
        () => {
          const headingWords =
            gsap.utils.toArray<HTMLElement>(
              "[data-heading-word]",
              section
            );

          const descriptionWords =
            gsap.utils.toArray<HTMLElement>(
              "[data-description-word]",
              section
            );

          gsap.set(headingWords, {
            color: "#12110F",
          });

          gsap.set(descriptionWords, {
            color: "rgba(18, 17, 15, 0.78)",
          });

          if (eyebrowRef.current) {
            gsap.set(eyebrowRef.current, {
              opacity: 1,
              y: 0,
            });
          }

          if (ctaRef.current) {
            gsap.set(
              ctaRef.current.querySelectorAll(
                "[data-cta]"
              ),
              {
                opacity: 1,
                y: 0,
              }
            );
          }
        }
      );

      /* =====================================================
         REDUCED MOTION
      ===================================================== */

      mm.add(
        "(prefers-reduced-motion: reduce)",
        () => {
          gsap.set(
            section.querySelectorAll(
              "[data-heading-word]"
            ),
            {
              color: "#12110F",
            }
          );

          gsap.set(
            section.querySelectorAll(
              "[data-description-word]"
            ),
            {
              color:
                "rgba(18, 17, 15, 0.78)",
            }
          );

          if (eyebrowRef.current) {
            gsap.set(eyebrowRef.current, {
              opacity: 1,
              y: 0,
            });
          }
        }
      );

      return () => {
        mm.revert();
      };
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        z-20
        isolate
        min-h-screen
        overflow-visible
        text-[#12110F]
        bg-[#FAF8F5]
        border-t
        border-black/[0.08]
        shadow-[0_-30px_70px_rgba(0,0,0,0.35)]
        lg:h-[260vh]
      "
    >
      {/* ================================================= */}
      {/* STICKY VIEWPORT */}
      {/* ================================================= */}

      <div
        ref={stickyRef}
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-[#FAF8F5]
          lg:sticky
          lg:top-0
          lg:flex
          lg:h-screen
          lg:items-center
        "
      >
        {/* =============================================== */}
        {/* AMBIENT ARCHITECTURAL GLOW (Subtle Warmth) */}
        {/* =============================================== */}

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
            bg-[#E8DFC8]/40
            blur-[140px]
          "
        />

        {/* ================================================= */}
        {/* CONTENT */}
        {/* ================================================= */}

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[1440px]
            px-6
            py-20
            sm:px-10
            lg:px-14
            lg:py-16
          "
        >
          {/* =============================================== */}
          {/* EYEBROW */}
          {/* =============================================== */}

          <div
            ref={eyebrowRef}
            className="
              mb-7
              text-center
            "
          >
            <span
              className="
                text-[10px]
                font-menu
                tracking-[0.24em]
                uppercase
                text-[#8C7A58]
                font-medium
                sm:text-xs
              "
            >
              PHATA NOC Approved · DG-PHATA/W-I/PHS/61/2022
            </span>
          </div>

          {/* =============================================== */}
          {/* HEADING */}
          {/* =============================================== */}

          <div className="text-center">
            <h2
              className="
                mx-auto
                max-w-[1050px]
                text-[clamp(1.9rem,3.4vw,3.3rem)]
                font-normal
                capitalize
                leading-[1.12]
                tracking-[-0.03em]
              "
            >
              <span className="block">
                <HighlightWords>
                  Mastery in Planning.
                </HighlightWords>
              </span>

              <span
                className="
                  mt-1.5
                  block
                  font-light
                  italic
                "
              >
                <HighlightWords tone="champagne">
                  Enduring in Legacy.
                </HighlightWords>
              </span>
            </h2>
          </div>

          {/* =============================================== */}
          {/* DESCRIPTION */}
          {/* =============================================== */}

          <div
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-center
              sm:mt-8
            "
          >
            <p
              className="
                text-[14px]
                leading-[1.8]
                font-light
                sm:text-[16px]
                lg:text-[17px]
              "
            >
              <DescriptionWords>
                A PHATA-approved master community on the 330-ft boulevard, designed for refined residential and commercial distinction.
              </DescriptionWords>
            </p>
          </div>

          {/* =============================================== */}
          {/* CTA */}
          {/* =============================================== */}

          <div
            ref={ctaRef}
            className="
              mt-9

              flex
              flex-wrap

              items-center
              justify-center

              gap-3

              sm:mt-10
            "
          >
            <Link
              data-cta
              href="#plots-overview"
              className="
                group
                inline-flex
                min-h-12
                items-center
                justify-center
                gap-4
                rounded-full
                bg-[#12110F]
                px-7
                py-3.5
                text-[10px]
                font-menu
                font-semibold
                uppercase
                tracking-[0.14em]
                text-[#FAF8F5]
                shadow-[0_10px_30px_rgba(18,17,15,0.12)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#8C7A58]
                hover:shadow-[0_14px_35px_rgba(140,122,88,0.25)]
                sm:text-xs
              "
            >
              <span>Explore Masterplan</span>
              <ArrowRight
                size={14}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>

            <Link
              data-cta
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                min-h-12
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-[#12110F]/15
                bg-white/60
                px-7
                py-3.5
                text-[10px]
                font-menu
                font-medium
                uppercase
                tracking-[0.14em]
                text-[#12110F]
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#8C7A58]
                hover:bg-white
                hover:text-[#8C7A58]
                sm:text-xs
              "
            >
              <span>Verified WhatsApp Desk</span>
              <ArrowUpRight
                size={14}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}