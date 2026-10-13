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
            color: "rgba(255,255,255,0.18)",
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

          /*
           * MASTER TIMELINE
           *
           * The entire animation is tied to:
           * section top -> section bottom
           *
           * Because sticky viewport remains inside
           * this 320vh section, it cannot release
           * before timeline completion.
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
           * PHASE 1
           * HEADING WORDS
           * ==========================================
           */

          headingWords.forEach((word, index) => {
            const isChampagne =
              word.dataset.tone === "champagne";

            tl.to(
              word,
              {
                color: isChampagne
                  ? "#D9BD89"
                  : "#FFFFFF",

                duration: 0.7,
                ease: "none",
              },
              index * 0.08
            );
          });

          /*
           * Small pause after heading
           */

          tl.to({}, { duration: 0.45 });

          /*
           * ==========================================
           * PHASE 2
           * DESCRIPTION WORDS
           * ==========================================
           */

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
            color: "#FFFFFF",
          });

          gsap.set(descriptionWords, {
            color: "rgba(255,255,255,0.82)",
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
              color: "#FFFFFF",
            }
          );

          gsap.set(
            section.querySelectorAll(
              "[data-description-word]"
            ),
            {
              color:
                "rgba(255,255,255,0.84)",
            }
          );

          gsap.set(
            section.querySelectorAll(
              "[data-cta]"
            ),
            {
              opacity: 1,
              y: 0,
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
        isolate
        min-h-screen
        overflow-visible
        text-ink
bg-champagne
        lg:h-[320vh]
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
          lg:sticky
          lg:top-0
          lg:flex
          lg:h-screen
          lg:items-center
        "
      >
        {/* =============================================== */}
        {/* BACKGROUND */}
        {/* =============================================== */}

        {/* <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            -z-30
            overflow-hidden
          "
        >
          <div
            ref={backgroundRef}
            className="
              absolute
              -inset-[6%]

              bg-[url('/images/boulevard-loft.png')]
              bg-cover
              bg-center
              bg-no-repeat

              will-change-transform
            "
          />
        </div> */}

        {/* =============================================== */}
        {/* CHAMPAGNE GLOW */}
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

            bg-champagne/[0.08]

            blur-[130px]
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

            px-5
            py-20

            sm:px-8

            lg:px-12
            lg:py-16

            xl:px-16
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
                text-white/55
                sm:text-sm
              "
            >
              PHATA NOC Approved ·
              DG-PHATA/W-I/PHS/61/2022
            </span>
          </div>

          {/* =============================================== */}
          {/* HEADING */}
          {/* =============================================== */}

          <div className="text-center">
            <h1
              className="
                mx-auto
                max-w-[1250px]
                text-[clamp(2.35rem,3vw,3rem)]
                font-medium
                capitalize
                leading-[1.08]
                tracking-[-0.025em]
              "
            >
              <span className="block">
                <HighlightWords>
                  New City Paradise Wah —
                </HighlightWords>
              </span>

              <span
                className="
                  mt-1
                  block

                  font-light
                  italic
                "
              >
                <HighlightWords >
                  Residential & Commercial Plots
                </HighlightWords>
              </span>

              <span className="mt-1 block">
                <HighlightWords>
                  near Burhan Interchange.
                </HighlightWords>
              </span>
            </h1>
          </div>

          {/* =============================================== */}
          {/* DESCRIPTION */}
          {/* =============================================== */}

          <div
            className="
              mx-auto
              mt-8
              max-w-5xl

              text-center

              sm:mt-10
            "
          >
            <p
              className="
                text-[15px]
                leading-[1.95]
                font-light
                sm:text-[17px]
                lg:text-[17px]

                xl:text-xl
              "
            >
              <DescriptionWords>
                A 20,000 Kanal master-planned community developed by the makers of New City Wah, strategically located on the 330-ft GT Road adjacent to the Burhan Interchange (M-1 Motorway) and the northern CPEC Route. Featuring verified residential plots of 3.5 Marla, 5 Marla, 10 Marla, and 1 Kanal, alongside prime commercial sectors.
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

                rounded-xl

                bg-white

                px-6
                py-3.5

                text-[10px]

                font-menu
                font-semibold

                uppercase
                tracking-[0.12em]

                text-[#17231F]

                shadow-lg

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:bg-champagne
                hover:text-white

                sm:text-xs
              "
            >
              <span>
                Explore Plot Options
              </span>

              <ArrowRight
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>

            <Link
              data-cta
              href={
                SITE_CONFIG.whatsappLink
              }
              target="_blank"
              rel="noopener noreferrer"
              className="
                group

                inline-flex
                min-h-12

                items-center
                justify-center

                gap-3

                rounded-xl

                border
                border-white/25

                bg-white/10

                px-6
                py-3.5

                text-[10px]

                font-menu
                font-medium

                uppercase
                tracking-[0.1em]

                text-white

                backdrop-blur-md

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:border-champagne
                hover:bg-champagne/20

                sm:text-xs
              "
            >
              <span>
                Verified WhatsApp Desk
              </span>

              <ArrowUpRight
                size={15}
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