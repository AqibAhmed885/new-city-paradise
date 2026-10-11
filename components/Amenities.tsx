"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsap } from "@/hooks/useGsap";
import { amenities } from "@/lib/data";
import AmenityIcon from "./AmenityIcon";
import SectionHeading from "./SectionHeading";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Amenities() {
  const root = useRef<HTMLElement>(null);

  useGsap(() => {
    if (!root.current) return;
    const cards = root.current.querySelectorAll("[data-amenity]");

    gsap.set(cards, { opacity: 1, visibility: "visible" });

    gsap.from(cards, {
      y: 40,
      opacity: 0,
      duration: 0.85,
      stagger: 0.06,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: root.current.querySelector("[data-grid]"),
        start: "top 82%",
        once: true,
      },
    });
  }, []);

  return (
    <section
      ref={root}
      id="amenities"
      aria-label="New City Paradise Community Amenities and Facilities"
      className="relative z-20 bg-[#F5F4F0] py-20 sm:py-28 border-t border-black/5"
    >
      <div className="container-pad max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[10px] font-menu uppercase tracking-[0.28em] text-champagne font-semibold block mb-3">
            New City Paradise Wah · Master-Planned Infrastructure
          </span>
          <h2 className="text-[clamp(2.4rem,5vw,3.8rem)] font-serif text-ink leading-tight tracking-tight">
            Everything You Need,{" "}
            <span className="italic text-champagne font-light block sm:inline">
              Beautifully Close.
            </span>
          </h2>
          <p className="mt-4 font-serif text-base sm:text-lg text-black/65 leading-relaxed">
            Every practical detail of New City Paradise Wah is integrated directly into the PHATA-approved masterplan along the 330-ft GT Road &amp; Burhan Interchange M-1 — ensuring uninterrupted underground utilities, 24/7 smart security, and world-class recreation for all residential &amp; commercial plots.
          </p>
        </div>

        {/* Amenities Cards Grid */}
        <div
          data-grid
          className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          {amenities.map(([icon, title, description]) => (
            <article
              data-amenity
              key={title}
              className="group min-h-60 bg-white rounded-2xl p-6 sm:p-7 border border-black/5 transition-all duration-500 hover:-translate-y-1.5 hover:border-champagne/50 hover:bg-[#12110f] hover:text-white hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F5F4F0] group-hover:bg-white/10 flex items-center justify-center transition-colors">
                  <AmenityIcon name={icon} />
                </div>
                <h3 className="mt-6 font-serif text-xl sm:text-2xl text-ink group-hover:text-white transition-colors">
                  {title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-black/60 group-hover:text-white/70 transition-colors font-serif">
                {description}
              </p>
            </article>
          ))}
        </div>

        {/* SEO Internal Link Card & CTA Banner */}
        <div className="mt-12 sm:mt-16 p-8 rounded-2xl bg-white border border-black/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-xs font-menu uppercase tracking-widest text-champagne font-semibold">
              Signature Landmarks &amp; Leisure
            </p>
            <h3 className="font-serif text-xl sm:text-2xl text-ink">
              Discover Glow Park, 330-Ft Boulevard &amp; Waterfront District
            </h3>
            <p className="text-sm font-serif text-black/60 max-w-xl">
              Experience the 14+ world-class lifestyle attractions designed for sports, health, and family recreation in New City Paradise.
            </p>
          </div>

          <Link
            href="/amenities"
            className="shrink-0 inline-flex items-center gap-3 px-7 py-3.5 bg-ink text-white hover:bg-champagne hover:text-ink text-[11px] font-menu uppercase tracking-widest font-semibold rounded-full transition-all duration-300"
          >
            Explore All 14+ Amenities
            <span className="text-sm">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
