"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin, Navigation } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LAHORE_CONFIG } from "@/lib/lahoreConfig";

gsap.registerPlugin(ScrollTrigger);

export default function LahoreLocation() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const timelineNodes = gsap.utils.toArray<HTMLElement>("[data-timeline-node]", section);
        const heading = section.querySelector("[data-heading]");

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
      id="lahore-location"
      aria-label="New City Paradise Lahore Strategic Location"
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
              <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.35em] text-[#8C7A58]">
                Strategic Position
              </span>
            </div>
            <h2 className="text-[clamp(1.85rem,3.2vw,3rem)] font-heading font-normal leading-[1.18] tracking-tight text-[#1A1C1B]">
              Minutes away from <br className="hidden lg:block" />
              <span className="font-light italic text-[#8C7A58]">Lahore’s primary corridors.</span>
            </h2>
            <p className="mt-3 text-[14px] font-sans text-black/60 max-w-md">
              Located on the Eastern Bypass (Lahore-Sialkot Motorway M-11) within RUDA Phase 1, offering high-speed access to the Ring Road, Airport, and city landmarks.
            </p>
          </div>

          {/* Timeline List */}
          <div className="relative flex flex-col gap-10 lg:gap-14 lg:pb-[15vh]">
            {/* The vertical line running through the timeline */}
            <div className="absolute left-[7px] top-2 bottom-0 w-[1px] bg-gray-200" />

            {LAHORE_CONFIG.landmarks.map((item) => (
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
                  <div className="flex items-baseline justify-between gap-4 border-b border-gray-100 pb-3">
                    <div>
                      <h3 className="font-heading text-[20px] lg:text-[24px] font-normal leading-tight text-[#1A1C1B] mb-1">
                        {item.label}
                      </h3>
                      <p className="font-sans text-[13px] text-gray-500">
                        {item.desc}
                      </p>
                    </div>
                    <span className="font-heading text-[26px] lg:text-[32px] font-light leading-none text-[#8C8273] shrink-0">
                      {item.value}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Actions */}
          <div className="mt-12 flex flex-wrap gap-4 lg:hidden">
            <a
              href={LAHORE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#12110F] px-6 py-3.5 text-[11px] font-sans font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#8C7A58]"
            >
              Contact Lahore Desk <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* ================================================= */}
        {/* RIGHT SIDE: STICKY MAP */}
        {/* ================================================= */}
        <div className="relative w-full lg:w-1/2 h-[45vh] lg:h-screen lg:sticky lg:top-0 overflow-hidden bg-gray-100">
          <div className="absolute inset-y-0 left-0 w-[1px] bg-gray-200 z-30 hidden lg:block" />

          {/* Google Maps Embed targeting RUDA Eastern Bypass Lahore */}
          <iframe
            title="Satellite Map of New City Paradise Lahore on Eastern Bypass M-11"
            src="https://www.google.com/maps?q=Eastern+Bypass+Lahore+Sialkot+Motorway+M11+RUDA&t=m&z=13&output=embed"
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
            <div className="flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md px-4 py-2 border border-gray-200 shadow-sm text-[#1A1C1B]">
              <Navigation size={14} className="text-[#8C8273]" />
              <span className="text-[10px] font-sans font-semibold uppercase tracking-wider">
                Eastern Bypass · M-11 RUDA Phase 1
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
