"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
} from "lucide-react";

import { SITE_CONFIG } from "@/lib/siteConfig";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    label: "PHATA Approved",
    value: "4,256+ Kanal",
    detail: "NOC: 61/2022",
    number: "01",
  },
  {
    label: "Arterial Avenue",
    value: "330-Ft Boulevard",
    detail: "Direct GT Road access",
    number: "02",
  },
  {
    label: "Motorway Junction",
    value: "0 KM Burhan",
    detail: "M-1 & CPEC corridor",
    number: "03",
  },
  {
    label: "Established Legacy",
    value: "New City Wah",
    detail: "Developers of Phase 1 & 2",
    number: "04",
  },
];

export default function HeroIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        "(prefers-reduced-motion: no-preference)",
        () => {
          const section = sectionRef.current;

          if (!section) return;

          const reveal = (
            target: Element | null,
            options: {
              y?: number;
              delay?: number;
              duration?: number;
            } = {}
          ) => {
            if (!target) return;

            gsap.fromTo(
              target,
              {
                autoAlpha: 0,
                y: options.y ?? 45,
              },
              {
                autoAlpha: 1,
                y: 0,
                duration: options.duration ?? 1,
                delay: options.delay ?? 0,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: target,
                  start: "top 92%",
                  once: true,
                },
              }
            );
          };

          // Eyebrow
          reveal(eyebrowRef.current, {
            y: 22,
            duration: 0.8,
          });

          // Heading
          reveal(headingRef.current, {
            y: 65,
            duration: 1.15,
          });

          // Description
          reveal(descriptionRef.current, {
            y: 45,
            delay: 0.08,
            duration: 1,
          });

          // CTAs
          if (ctaRef.current) {
            const buttons =
              ctaRef.current.querySelectorAll("[data-cta]");

            gsap.fromTo(
              buttons,
              {
                autoAlpha: 0,
                y: 25,
              },
              {
                autoAlpha: 1,
                y: 0,
                stagger: 0.12,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: ctaRef.current,
                  start: "top 92%",
                  once: true,
                },
              }
            );
          }

          // Divider
          if (dividerRef.current) {
            gsap.fromTo(
              dividerRef.current,
              {
                scaleX: 0,
                transformOrigin: "left center",
              },
              {
                scaleX: 1,
                duration: 1.2,
                ease: "power3.inOut",
                scrollTrigger: {
                  trigger: dividerRef.current,
                  start: "top 95%",
                  once: true,
                },
              }
            );
          }

          // Highlight cards
          if (highlightsRef.current) {
            const cards =
              highlightsRef.current.querySelectorAll(
                "[data-highlight]"
              );

            gsap.fromTo(
              cards,
              {
                autoAlpha: 0,
                y: 55,
              },
              {
                autoAlpha: 1,
                y: 0,
                stagger: 0.12,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: highlightsRef.current,
                  start: "top 88%",
                  once: true,
                },
              }
            );
          }

          // Background image parallax
          if (backgroundRef.current) {
            gsap.fromTo(
              backgroundRef.current,
              {
                yPercent: -4,
                scale: 1.04,
              },
              {
                yPercent: 4,
                scale: 1.08,
                ease: "none",
                scrollTrigger: {
                  trigger: section,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1,
                },
              }
            );
          }
        }
      );

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        z-20
        isolate
        overflow-hidden
        
        py-10
        text-ink
        sm:py-12
        lg:py-14
        xl:py-16
      "
    >
      {/* BACKGROUND IMAGE */}
      <div
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
      </div>

      {/* MAIN IVORY READABILITY OVERLAY */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          bg-gradient-to-br
          from-ink/60
          to-transparent
        "
      />

      {/* SOFT VERTICAL WASH */}
      {/* <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-gradient-to-b
          from-white/10
          via-transparent
          to-[#f7f4ed]/55
        "
      /> */}

      {/* SUBTLE CHAMPAGNE GLOW */}
     

      <div
        className="
          relative
          mx-auto
          max-w-[1440px]
        "
      >
        {/* TOP CONTENT */}
        <div
          className="
            grid
            grid-cols-1
            gap-10
            lg:grid-cols-12
            lg:gap-x-12
            xl:gap-x-10
          "
        >
          {/* LEFT */}
          <div className="lg:col-span-6">
            {/* EYEBROW */}
            <div
              ref={eyebrowRef}
              className="
                mb-8
                inline-flex
                max-w-full
                items-start
                gap-3
                sm:mb-4
              "
            >

              <span
                className="
                  text-[10px]
                  font-menu
                  font-semibold
                  uppercase
                  leading-relaxed
                  tracking-[0.15em]
                  text-ink/60
                  sm:text-xs
                  sm:tracking-[0.1em]
                "
              >
                PHATA NOC Approved ·
                DG-PHATA/W-I/PHS/61/2022
              </span>
            </div>

            {/* HEADING */}
            <h1
              ref={headingRef}
              className="
                max-w-[850px]
                text-[clamp(2.35rem,3.6vw,4rem)]
                font-medium
                capitalize
                leading-[1.1]
                tracking-[-0.035em]
                text-white
              "
            >
              New City Paradise Wah — <br />
              <span
                className="
                  font-light
                  italic
                  text-champagne/80
                "
              >
                Residential &amp; Commercial Plots
              </span>{" "} <br />
              near Burhan Interchange.
            </h1>

            {/* <div
              className="
                mt-10
                flex
                items-center
                gap-4
                sm:mt-12
              "
              aria-hidden="true"
            >
              <span className="h-px w-16 bg-champagne" />
              <span className="h-1.5 w-1.5 rotate-45 bg-champagne" />
            </div> */}
          </div>

          {/* RIGHT */}
          <div
            className="
              flex
              flex-col
              justify-end
              lg:col-span-6
              lg:pb-1
            "
          >
            <div ref={descriptionRef}>
              {/* <div
                className="
                  mb-7
                  hidden
                  h-px
                  w-12
                  bg-champagne
                  lg:block
                "
              /> */}

              <p
                className="
                  max-w-[calc(100%-2.5rem)]
                  font-serif
                  text-[15px]
                  leading-[1.95]
                  text-white/80
                  sm:text-[17px]
                  lg:text-[16px]
                  xl:text-lg
                "
              >
                A 20,000 Kanal master-planned community developed by the
                makers of New City Wah, strategically located on the
                330-ft GT Road adjacent to the Burhan Interchange
                (M-1 Motorway) and the northern CPEC Route. Featuring
                verified residential plots of 3.5 Marla, 5 Marla,
                10 Marla, and 1 Kanal, alongside prime commercial sectors.
              </p>
            </div>

            {/* CTA */}
            <div
              ref={ctaRef}
              className="
                mt-9
                flex
                
                items-center
                gap-3
                lg:mt-6
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
                  bg-ink/70
                  px-6
                  py-3.5
                  text-[10px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-champagne
                  hover:shadow-lg
                  sm:text-xs
                "
              >
                <span>Explore Plot Options</span>

                <ArrowRight
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              {/* <Link
                data-cta
                href="#location-connectivity"
                className="
                  group
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-black/15
                  bg-white/70
                  px-6
                  py-3.5
                  text-[10px]
                  font-menu
                  font-medium
                  uppercase
                  tracking-[0.12em]
                  text-ink
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-ink
                  hover:bg-white
                  sm:text-[11px]
                "
              >
                <span>Location &amp; Routes</span>

                <ArrowRight
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link> */}

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
                  rounded-xl
                  border
                  border-champagne/40
                  bg-champagne/[0.1]
                  px-6
                  py-3.5
                  text-[10px]
                  font-menu
                  font-medium
                  uppercase
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
                <span>Verified WhatsApp Desk</span>

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

        {/* DIVIDER */}
        <div className="mt-20 sm:mt-24 lg:mt-28">
          <div
            ref={dividerRef}
            className="
              h-px
              w-full
              bg-white/15
            "
          />
        </div>

        {/* HIGHLIGHTS */}
        <div
          ref={highlightsRef}
          className="
            mt-8
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-5
          "
        >
          {highlights.map((item) => (
            <div
              key={item.number}
              data-highlight
              className="
                group
                relative
                flex
                min-h-[190px]
                flex-col
                justify-between
                overflow-hidden
                rounded-xl
                border
                border-black/[0.08]
                bg-white/15
                p-6
                backdrop-blur-md
                transition-all
                duration-500
                hover:-translate-y-1.5
                hover:border-champagne/40
                hover:bg-white/80
                hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)]
                sm:min-h-[210px]
                lg:p-7
              "
            >
              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-[2px]
                  w-0
                  bg-champagne
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />

              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-3
                "
              >
                <span
                  className="
                    text-[10px]
                    font-menu
                    font-medium
                    uppercase
                    leading-relaxed
                    tracking-[0.10em]
                    text-champagne
                  "
                >
                  {item.label}
                </span>

                {/* <span
                  aria-hidden="true"
                  className="
                    font-serif
                    text-xs
                    italic
                    text-champagne/70
                  "
                >
                  {item.number}
                </span> */}
              </div>

              <div className="mt-8">
                <p
                  className="
                    font-serif
                    text-[clamp(1.3rem,1.7vw,1.7rem)]
                    font-normal
                    leading-tight
                    tracking-[-0.025em]
                    text-white
                  "
                >
                  {item.value}
                </p>

                <p
                  className="
                    mt-3
                    font-serif
                    text-[12px]
                    leading-relaxed
                    text-white/55
                    sm:text-[13px]
                  "
                >
                  {item.detail}
                </p>
              </div>

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -bottom-7
                  -right-7
                  h-24
                  w-24
                  rounded-full
                  border
                  border-champagne/10
                  transition-transform
                  duration-500
                  group-hover:scale-125
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}