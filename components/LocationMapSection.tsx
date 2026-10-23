"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin, Navigation, Circle } from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { SITE_CONFIG } from "@/lib/siteConfig";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   DATA
========================================================= */
const stats = [
  {
    number: "01",
    category: "GATEWAY",
    value: "0 KM",
    label: "CPEC Motorway",
    desc: "Immediate corridor slip",
  },
  {
    number: "02",
    category: "INTERCHANGE",
    value: "0 MIN",
    label: "Burhan Junction",
    desc: "Direct M-1 exit ramp",
  },
  {
    number: "03",
    category: "COMMERCIAL",
    value: "5 MIN",
    label: "New City Phase II",
    desc: "Arcade & Financial hub",
  },
  {
    number: "04",
    category: "AVIATION",
    value: "20 MIN",
    label: "Islamabad Airport",
    desc: "Signal-free Motorway drive",
  },
];

/* =========================================================
   COMPONENT
========================================================= */
export default function LocationMapSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      /* =====================================================
         DESKTOP ANIMATION
      ===================================================== */
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const timelineNodes = gsap.utils.toArray<HTMLElement>("[data-timeline-node]", section);
        const heading = section.querySelector("[data-heading]");

        // Smooth Heading Reveal
        if (heading) {
          gsap.fromTo(
            heading,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 1.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                once: true,
              },
            }
          );
        }

        // Staggered Timeline Nodes Reveal - buttery smooth, no jumpy snap back
        if (timelineNodes.length > 0) {
          gsap.fromTo(
            timelineNodes,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.14,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 72%",
                once: true,
              },
            }
          );
        }
      });

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
      id="location-connectivity"
      // Soft light background stacked on top of previous section
      className="relative z-30 bg-[#FAFAFA] text-[#2C302E] shadow-[0_-25px_60px_rgba(0,0,0,0.07)] border-t border-black/[0.06]"
    >
      <div className="flex flex-col-reverse lg:flex-row w-full max-w-[1920px] mx-auto">

        {/* ================================================= */}
        {/* LEFT SIDE: SCROLLING CONTENT (Timeline) */}
        {/* ================================================= */}
        <div className="relative w-full lg:w-1/2 px-6 py-16 lg:px-16 lg:py-24 xl:px-24">

          {/* Heading Section */}
          <div data-heading className="mb-14 lg:mb-10 lg:mt-[2vh]">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] font-menu uppercase tracking-[0.35em] text-[#8C7A58]">
                Strategic Position
              </span>
            </div>
            <h2 className="text-[clamp(1.85rem,3.2vw,3rem)] font-normal leading-[1.18] tracking-tight text-[#1A1C1B]">
              Minutes away from <br className="hidden lg:block" />
              <span className="font-light italic text-[#8C7A58]">major landmarks.</span>
            </h2>
          </div>

          {/* Timeline List (Clean & Minimal, No Cards) */}
          <div className="relative flex flex-col gap-12 lg:gap-20 lg:pb-[15vh]">
            {/* The vertical line running through the timeline */}
            <div className="absolute left-[7px] top-2 bottom-0 w-[1px] bg-gray-200" />

            {stats.map((item, index) => (
              <div
                key={item.label}
                data-timeline-node
                className="relative pl-10 lg:pl-16 group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-white border border-[#A89F91] shadow-sm transition-transform duration-300 group-hover:scale-125">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8C8273]" />
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    {/* <span className="text-[10px] font-menu text-gray-400 tracking-widest">{item.number}</span> */}
                    <span className="text-[10px] font-menu font-semibold uppercase tracking-[0.15em] text-[#8C8273]">
                      {item.category}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-6">
                    <div>
                      <h3 className="font-serif text-[22px] lg:text-[26px] font-normal leading-tight text-[#1A1C1B] mb-1.5">
                        {item.label}
                      </h3>
                      <p className="font-serif text-[14px] text-gray-500">
                        {item.desc}
                      </p>
                    </div>
                    <span className="font-serif text-[28px] lg:text-[36px] font-light leading-none text-[#8C8273] shrink-0">
                      {item.value}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Actions */}
          <div className="mt-16 flex flex-wrap gap-4 lg:hidden">
            <Link href="#booking" className="inline-flex items-center gap-2 rounded-xl bg-[#1A1C1B] px-6 py-3.5 text-[10px] font-menu font-semibold uppercase tracking-widest text-white">
              Book Site Visit <ArrowUpRight size={14} />
            </Link>
            <a href={SITE_CONFIG.whatsappLink} className="inline-flex items-center rounded-xl border border-gray-300 px-6 py-3.5 text-[10px] font-menu font-semibold uppercase tracking-widest text-[#1A1C1B] bg-white">
              WhatsApp
            </a>
          </div>
        </div>

        {/* ================================================= */}
        {/* RIGHT SIDE: STICKY MAP */}
        {/* ================================================= */}
        <div className="relative w-full lg:w-1/2 h-[45vh] lg:h-screen lg:sticky lg:top-0 overflow-hidden bg-gray-100">
          {/* Map borders for clean separation on desktop */}
          <div className="absolute inset-y-0 left-0 w-[1px] bg-gray-200 z-30 hidden lg:block" />

          <iframe
            title="Satellite Map of New City Paradise near Burhan Interchange"
            src="https://www.google.com/maps?q=New%20City%20Paradise%20Burhan%20Interchange&t=m&z=14&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0 filter grayscale opacity-90 mix-blend-multiply"
          />

          {/* Center Marker on Map */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative flex items-center justify-center">
              <span className="absolute h-16 w-16 animate-ping rounded-full bg-[#8C8273]/20" />
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg border border-gray-100">
                <MapPin size={18} className="text-[#8C8273]" />
              </div>
            </div>
          </div>

          {/* Map Badge */}
          <div className="absolute bottom-6 right-6 z-40 hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-4 py-2 border border-gray-200 shadow-sm text-[#1A1C1B]">
              <Navigation size={14} className="text-[#8C8273]" />
              <span className="text-[10px] font-menu uppercase tracking-wider">Burhan Interchange</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}