"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsap } from "@/hooks/useGsap";
import { LAHORE_CONFIG } from "@/lib/lahoreConfig";

gsap.registerPlugin(ScrollTrigger);

const lahoreValues = [
  {
    title: "RUDA Riverfront Masterplan",
    description:
      "A visionary urban basin designed to revive Lahore's natural water ecosystem with state-of-the-art sustainable engineering.",
  },
  {
    title: "M-11 Direct Connectivity",
    description:
      "Direct entrance frontage on the Eastern Bypass, providing signal-free travel to Lahore Ring Road, Airport, and DHA.",
  },
  {
    title: "Smart Urban Infrastructure",
    description:
      "Modern subterranean utility conduits, optical fiber infrastructure, and automated security for high-standard modern living.",
  },
];

const lahoreStatsAtAGlance = [
  { value: "0 MIN", label: "Eastern Bypass", note: "Direct M-11 Highway Frontage" },
  { value: "RUDA", label: "Phase 1 Basin", note: "Pakistan's Largest Riverfront" },
  { value: "03 MIN", label: "Lahore Ring Road", note: "Rapid Intra-City Arterial" },
  { value: "45+", label: "Years Legacy", note: "New City Housing Developers" },
];

const lahorePillars = [
  {
    tag: "REGIONAL WATERFRONT",
    title: "Ravi Urban Development Authority (RUDA) Phase 1",
    description:
      "New City Paradise Lahore is strategically aligned within RUDA Phase 1 along the Ravi River, pioneering an eco-friendly riverfront sanctuary with marina leisure docks, green belts, and modern residential zoning.",
  },
  {
    tag: "PROVEN DEVELOPER TITAN",
    title: "45+ Years of Real Estate Delivery",
    description:
      "Developed by New City Housing Developers, celebrated for pioneering New City Phase 1 and Phase 2 in Wah Cantt, New City Arcade, and New City Paradise Islamabad. A trusted name delivering homes and commercial value for decades.",
  },
  {
    tag: "HIGH-SPEED CONNECTIVITY",
    title: "Eastern Bypass & Lahore Ring Road Interchange",
    description:
      "Strategically situated where the Eastern Bypass connects with the M-11 Lahore-Sialkot Motorway. Commuters reach Allama Iqbal International Airport and DHA Lahore in 10 minutes, and Minar-e-Pakistan in 8 minutes.",
  },
];

export default function LahoreAboutClient() {
  const root = useRef<HTMLDivElement>(null);

  useGsap(() => {
    if (!root.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.from(root.current.querySelectorAll("[data-fade-up]"), {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: root.current,
        start: "top 80%",
        once: true,
      },
    });
  }, []);

  return (
    <div ref={root} className="bg-ivory text-ink">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[#101A17] text-white pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/images/delivered/lahore-hero.jpg"
            alt="New City Paradise Lahore Riverfront Vision"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101A17] via-transparent to-[#101A17]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
          <div className="max-w-3xl">
            <span className="inline-block text-[11px] font-sans font-semibold uppercase tracking-[0.26em] text-champagne mb-4">
              About New City Paradise Lahore
            </span>
            <h1 className="text-[clamp(2.8rem,5.5vw,5rem)] font-heading font-normal leading-[1.05] tracking-tight text-white">
              Shaping the Future of <br />
              <span className="italic font-light text-champagne">
                Urban Riverfront Living.
              </span>
            </h1>
            <p className="mt-6 text-[16px] sm:text-[18px] font-sans font-light leading-relaxed text-white/80">
              A flagship expansion by New City Housing Developers, pioneering Pakistan’s largest riverfront master development within RUDA Phase 1 along the Lahore Eastern Bypass.
            </p>
          </div>
        </div>
      </section>

      {/* Stats at a Glance Bar */}
      <section className="border-b border-black/[0.08] bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-black/[0.08]">
            {lahoreStatsAtAGlance.map((s, idx) => (
              <div key={s.label} className={`flex flex-col ${idx !== 0 ? "pt-4 sm:pt-0 sm:pl-8" : ""}`}>
                <span className="text-[clamp(2rem,3.4vw,2.8rem)] font-heading font-normal text-ink leading-none">
                  {s.value}
                </span>
                <span className="mt-3 text-[11px] font-sans font-semibold uppercase tracking-[0.16em] text-black/60">
                  {s.label}
                </span>
                <span className="mt-1 text-xs font-sans text-black/40">
                  {s.note}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 sm:py-28 bg-[#FBF9F4]">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
          <div className="max-w-2xl mb-16">
            <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.24em] text-champagne mb-3 block">
              Core Principles
            </span>
            <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-heading font-normal leading-tight text-ink">
              Engineered with Purpose, <br />
              <span className="italic font-light text-champagne">Built for Generations.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lahoreValues.map((v) => (
              <div
                key={v.title}
                data-fade-up
                className="rounded-2xl border border-black/[0.06] bg-white p-8 shadow-sm"
              >
                <h3 className="font-heading text-2xl font-normal text-ink mb-4">
                  {v.title}
                </h3>
                <p className="font-sans text-[15px] leading-relaxed text-black/65">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Pillars of Excellence */}
      <section className="py-20 sm:py-28 bg-white border-t border-black/[0.06]">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
          <div className="space-y-16">
            {lahorePillars.map((p, index) => (
              <div
                key={p.title}
                data-fade-up
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-black/[0.08] pb-16 last:border-b-0"
              >
                <div className="lg:col-span-4">
                  <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.24em] text-champagne block mb-2">
                    {p.tag}
                  </span>
                  <span className="font-heading text-4xl text-black/20 font-light">
                    0{index + 1}
                  </span>
                </div>

                <div className="lg:col-span-8">
                  <h3 className="font-heading text-2xl sm:text-3xl font-normal text-ink mb-4">
                    {p.title}
                  </h3>
                  <p className="font-sans text-[16px] leading-relaxed text-black/70 max-w-2xl">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
