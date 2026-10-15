"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SITE_CONFIG } from "@/lib/siteConfig";

gsap.registerPlugin(ScrollTrigger);

interface StatItem {
  value: string;
  unit?: string;
  label: string;
  sublabel?: string;
}

const stats: StatItem[] = [
  {
    value: "4,256",
    unit: "Kanal",
    label: "PHATA APPROVED",
    sublabel: "NOC Approved Master-Zone",
  },
  {
    value: "20,000+",
    unit: "Kanal",
    label: "TOTAL PLANNED LAND BANK",
    sublabel: "Masterplan Expansion Vision",
  },
  {
    value: "330",
    unit: "ft",
    label: "MAIN BOULEVARD",
    sublabel: "Direct GT Road & CPEC Access",
  },
  {
    value: "0",
    unit: "KM",
    label: "MOTORWAY JUNCTION",
    sublabel: "Adjacent to Burhan Interchange",
  },
];

export default function VisionLegacy() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header subtle reveal
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          y: 28,
          opacity: 0,
          duration: 1.1,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Stats subtle staggered reveal
      if (statsRef.current) {
        const columns = statsRef.current.querySelectorAll("[data-stat-col]");
        gsap.from(columns, {
          y: 35,
          opacity: 0,
          duration: 1.1,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative z-20">
      <section
        ref={sectionRef}
        aria-label="New City Paradise Vision and Scale"
        className="sticky top-0 min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#FBF9F4] py-20 sm:py-28 lg:py-32 border-t border-black/[0.08] shadow-[0_-20px_50px_rgba(0,0,0,0.06)]"
      >
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-14">
          {/* Header Section */}
          <div ref={headerRef} className="mx-auto max-w-3xl text-center">
            <span className="inline-block text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.26em] uppercase text-champagne mb-4">
              A Master-Planned Sanctuary
            </span>
            <h2 className="text-[clamp(2.4rem,5.2vw,4.2rem)] font-heading leading-[1.08] tracking-[-0.03em] text-ink">
              A Legacy Built on Vision
            </h2>
            <p className="mt-5 text-[15px] sm:text-[16px] lg:text-[17px] font-sans leading-[1.75] text-black/60 max-w-2xl mx-auto">
              Across residential, commercial, hospitality, and civic spaces, New City Paradise brings together an unparalleled 4,256+ Kanal masterplan created to stand the test of time.
            </p>
          </div>

          {/* Stats Grid with Subtle Dividers */}
          <div
            ref={statsRef}
            className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-black/[0.08]"
          >
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                data-stat-col
                className={`flex flex-col items-center justify-center text-center px-6 py-8 sm:py-6 lg:px-8 ${
                  idx === 0 ? "pt-0 sm:pt-6" : ""
                }`}
              >
                <div className="flex items-baseline justify-center gap-1.5 text-ink">
                  <span className="text-[clamp(2.6rem,4.4vw,3.75rem)] font-heading font-normal tracking-[-0.03em] leading-none text-ink">
                    {stat.value}
                  </span>
                  {stat.unit && (
                    <span className="text-[clamp(1.1rem,1.8vw,1.5rem)] font-heading font-light text-black/60 tracking-tight">
                      {stat.unit}
                    </span>
                  )}
                </div>

                <span className="mt-4 text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-black/55">
                  {stat.label}
                </span>

                {stat.sublabel && (
                  <span className="mt-1 text-[12px] font-sans text-black/40">
                    {stat.sublabel}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
