"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StatItem {
  value: string;
  unit?: string;
  label: string;
  sublabel?: string;
}

const lahoreStats: StatItem[] = [
  {
    value: "0",
    unit: "Mins",
    label: "EASTERN BYPASS",
    sublabel: "Frontage on Lahore-Sialkot Motorway M-11",
  },
  {
    value: "RUDA",
    unit: "Phase 1",
    label: "RIVERFRONT CORRIDOR",
    sublabel: "Pakistan's Largest Sustainable Urban Basin",
  },
  {
    value: "03",
    unit: "Mins",
    label: "LAHORE RING ROAD",
    sublabel: "Fast arterial to DHA, Gulberg & Motorways",
  },
  {
    value: "10",
    unit: "Mins",
    label: "INTL. AIRPORT",
    sublabel: "Allama Iqbal Airport via Signal-Free Ring Road",
  },
];

export default function LahoreVision() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
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
        aria-label="New City Paradise Lahore Vision and Regional Scale"
        className="sticky top-0 min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFAF8] py-20 sm:py-28 lg:py-32 border-t border-black/[0.06]"
      >
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-14">
          {/* Header Section */}
          <div ref={headerRef} className="mx-auto max-w-3xl text-center">
            <span className="inline-block text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.24em] uppercase text-[#8C7A58] mb-3">
              In The Heart of RUDA Phase 1
            </span>
            <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-heading font-normal leading-[1.08] tracking-[-0.03em] text-[#12110F]">
              A Riverfront Legacy in Lahore
            </h2>
            <p className="mt-4 text-[15px] sm:text-[16px] font-sans leading-[1.75] text-[#12110F]/65 max-w-2xl mx-auto">
              Introducing sustainable, technology-infused urban living along the prominent Ravi Urban Development Authority corridor, backed by New City Housing’s 45+ year legacy of excellence.
            </p>
          </div>

          {/* Stats Grid with Delicate Dividers */}
          <div
            ref={statsRef}
            className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-black/[0.06]"
          >
            {lahoreStats.map((stat, idx) => (
              <div
                key={stat.label}
                data-stat-col
                className={`flex flex-col items-center justify-center text-center px-6 py-8 sm:py-6 lg:px-8 ${
                  idx === 0 ? "pt-0 sm:pt-6" : ""
                }`}
              >
                <div className="flex items-baseline justify-center gap-1.5">
                  <span className="text-[clamp(2.6rem,4.4vw,3.8rem)] font-heading font-light tracking-[-0.03em] leading-none text-[#12110F]">
                    {stat.value}
                  </span>
                  {stat.unit && (
                    <span className="text-[clamp(1rem,1.5vw,1.3rem)] font-heading font-normal text-[#8C7A58] tracking-tight">
                      {stat.unit}
                    </span>
                  )}
                </div>

                <span className="mt-4 text-[10.5px] font-sans font-medium uppercase tracking-[0.2em] text-[#12110F]/70">
                  {stat.label}
                </span>

                {stat.sublabel && (
                  <span className="mt-1 text-[12.5px] font-sans text-black/45 leading-relaxed">
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
