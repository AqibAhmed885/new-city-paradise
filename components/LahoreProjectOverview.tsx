"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsap } from "@/hooks/useGsap";
import { LAHORE_CONFIG } from "@/lib/lahoreConfig";

gsap.registerPlugin(ScrollTrigger);

const lahoreFacts = [
  {
    label: "Regional Masterplan",
    value: "RUDA Phase 1",
    description: "Strategically integrated into Pakistan's premier sustainable riverfront urban basin.",
  },
  {
    label: "Highway Frontage",
    value: "0 MIN M-11",
    description: "Direct entrance frontage along the Eastern Bypass (Lahore – Sialkot Motorway).",
  },
  {
    label: "Ring Road Link",
    value: "03 MINS",
    description: "Uninterrupted signal-free connection to DHA, Gulberg, and international airport.",
  },
  {
    label: "Developer Track Record",
    value: "45+ Years",
    description: "Backed by the proven mastery and delivery of New City Housing Projects.",
  },
];

const lahorePlotCategories = [
  {
    name: "Ravi Marina Residential",
    sizes: ["3.5 Marla", "5 Marla", "10 Marla", "1 Kanal Planned"],
    note: "Scenic waterfront plots along natural river contours with subterranean utilities.",
  },
  {
    name: "Downtown Commercial Boulevard",
    sizes: ["High-Street Retail", "Corporate Towers", "Pedestrian Plazas"],
    note: "Prime business corridor modeled on the landmark New City Arcade commercial concept.",
  },
  {
    name: "Civic Health & Education",
    sizes: ["Community Hospital", "Sports Arena", "Educational Campus"],
    note: "Comprehensive master-planned public infrastructure for whole-community wellness.",
  },
];

export default function LahoreProjectOverview() {
  const root = useRef<HTMLElement>(null);

  useGsap(() => {
    if (!root.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const hero = root.current.querySelector("[data-overview-hero]");
    const heroImage = root.current.querySelector("[data-overview-hero-image]");

    gsap.from(root.current.querySelectorAll("[data-hero-reveal]"), {
      y: 55,
      opacity: 0,
      duration: 1.1,
      stagger: 0.12,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: hero,
        start: "top 72%",
        once: true,
      },
    });

    if (heroImage) {
      gsap.to(heroImage, {
        yPercent: 12,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }

    gsap.from(root.current.querySelectorAll("[data-fact]"), {
      y: 60,
      opacity: 0,
      duration: 0.9,
      stagger: 0.1,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: root.current.querySelector("[data-facts]"),
        start: "top 86%",
        once: true,
      },
    });

    root.current.querySelectorAll("[data-story]").forEach((story) => {
      gsap.from(story.querySelectorAll("[data-reveal]"), {
        y: 40,
        opacity: 0,
        duration: 0.85,
        stagger: 0.08,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: story,
          start: "top 78%",
          once: true,
        },
      });
    });
  }, []);

  return (
    <section ref={root} id="lahore-masterplan" className="overflow-hidden bg-[#eee9e2] py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        {/* Massive Hero Card matching ProjectOverview.tsx */}
        <div
          data-overview-hero
          className="relative min-h-[72svh] overflow-hidden rounded-[2rem] bg-ink text-white sm:min-h-[82svh]"
        >
          <Image
            data-overview-hero-image
            src="/images/delivered/lahore-hero.jpg"
            alt="New City Paradise Lahore Masterplan Vision"
            fill
            sizes="(max-width: 1600px) 100vw, 1600px"
            className="scale-[1.02] object-cover filter brightness-[0.75]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />

          <div className="relative z-10 flex min-h-[72svh] flex-col justify-between p-6 sm:min-h-[82svh] sm:p-10 lg:p-14">
            <div data-hero-reveal className="flex items-center justify-between border-t border-white/40 pt-4">
              <p className="text-[10px] font-sans font-bold uppercase tracking-[0.24em] text-white/70">
                Masterplan Overview · Lahore
              </p>
              <span className="hidden text-[10px] font-sans uppercase tracking-[0.2em] text-champagne sm:block">
                RUDA Phase 1 · Eastern Bypass M-11
              </span>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
              <h1
                data-hero-reveal
                className="font-heading max-w-6xl text-[clamp(3.8rem,8.5vw,9rem)] font-normal leading-[0.88] text-white"
              >
                Riverfront scale, <br />
                <span className="italic font-light text-champagne">sustainable future.</span>
              </h1>
              <p data-hero-reveal className="max-w-md text-sm sm:text-base font-sans leading-7 text-white/70">
                A connected masterplan bringing waterfront residential plots, high-street corporate retail, sports arenas, and riverfront promenades into one landmark destination.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Facts Cards matching ProjectOverview.tsx */}
        <div data-facts className="relative z-20 -mt-px grid sm:grid-cols-2 xl:grid-cols-4">
          {lahoreFacts.map((fact, index) => (
            <article
              data-fact
              key={fact.label}
              className={`group min-h-72 border border-t-0 p-7 transition-colors duration-500 sm:p-8 ${
                index === 0
                  ? "border-champagne bg-champagne text-white"
                  : "border-black/10 bg-ivory hover:bg-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-[10px] font-sans font-bold uppercase tracking-[0.2em] ${
                    index === 0 ? "text-white/80" : "text-champagne"
                  }`}
                >
                  {fact.label}
                </span>
                <span className={`font-heading text-sm italic ${index === 0 ? "text-white/70" : "text-black/30"}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-14 break-words font-heading text-[clamp(1.8rem,2.8vw,3.2rem)] font-normal leading-[1]">
                {fact.value}
              </h3>
              <p className={`mt-6 max-w-xs text-xs font-sans leading-6 ${index === 0 ? "text-white/80" : "text-black/60"}`}>
                {fact.description}
              </p>
            </article>
          ))}
        </div>

        {/* Authority Note Bar */}
        <div className="flex items-start gap-4 border-x border-b border-black/10 bg-white/70 px-6 py-5 sm:px-8">
          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-black/20 text-[9px] font-bold">
            i
          </span>
          <p className="max-w-5xl text-[11px] font-sans leading-5 text-black/60">
            Masterplan specifications and zoning allocations reflect planning within the RUDA Phase 1 riverfront urban corridor. Buyers are encouraged to consult official sales advisors for current sector releases, plot dimensions, and payment schedules.
          </p>
        </div>

        {/* Plot Availability Section matching ProjectOverview.tsx */}
        <div
          data-story
          className="mt-28 grid overflow-hidden rounded-[2rem] bg-white lg:grid-cols-[0.9fr_1.1fr] border border-black/[0.06] shadow-sm"
        >
          <div className="p-8 sm:p-12 lg:p-16">
            <p data-reveal className="text-[10px] font-sans font-bold uppercase tracking-[0.24em] text-champagne">
              Planned Plot Inventory
            </p>
            <h2 data-reveal className="font-heading mt-6 text-[clamp(2.8rem,5vw,5rem)] font-normal leading-[0.95] text-ink">
              Space for every <br />
              <span className="italic font-light text-champagne">lifestyle &amp; vision.</span>
            </h2>

            <div className="mt-12 border-t border-black/15">
              {lahorePlotCategories.map((cat) => (
                <div
                  data-reveal
                  key={cat.name}
                  className="grid gap-3 border-b border-black/15 py-6 sm:grid-cols-[0.8fr_1.2fr] sm:items-start"
                >
                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl text-ink">{cat.name}</h3>
                    <p className="mt-1 text-xs font-sans text-black/50">{cat.note}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:justify-end">
                    {cat.sizes.map((size) => (
                      <span
                        key={size}
                        className="rounded-full border border-black/15 px-3.5 py-1.5 text-[10px] font-sans font-semibold uppercase tracking-[0.1em] text-black/70 bg-ivory"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[34rem] overflow-hidden bg-[#182622] lg:min-h-full">
            <span className="font-heading absolute left-8 top-8 z-10 text-[clamp(4rem,8vw,8rem)] leading-none text-white/20 select-none">
              RUDA
            </span>
            <Image
              src="/images/delivered/nca.png"
              alt="New City Paradise Lahore Commercial & Waterfront Architecture"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-center filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 z-10 max-w-sm border-l-2 border-champagne pl-4 text-xs font-sans uppercase tracking-[0.18em] text-white/90">
              Ravi Marina · Eastern Bypass · Downtown Arcade
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
