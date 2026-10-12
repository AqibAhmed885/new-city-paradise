"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsap } from "@/hooks/useGsap";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const keyHighlights = [
  {
    tag: "Government Approved",
    title: "PHATA Approved NOC",
    code: "DG-PHATA/W-I/PHS/61/2022",
    description:
      "Fully sanctioned by the Punjab Housing and Town Planning Agency with 4,256+ Kanals approved for transparent, legally secure investment.",
    icon: (
      <svg className="w-6 h-6 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    tag: "Prime Connectivity",
    title: "0 KM Burhan & CPEC Route",
    code: "330-Ft Main Boulevard",
    description:
      "Direct access situated at Burhan Interchange, connecting M-1 Motorway, GT Road, and the CPEC route for effortless access to Islamabad & Rawalpindi.",
    icon: (
      <svg className="w-6 h-6 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    tag: "Natural Splendor",
    title: "Scenic Waterfront District",
    code: "Haro River Frontage",
    description:
      "Tranquil riverbanks and natural waterways woven into the masterplan, creating resort-style waterfront esplanades, parks, and dining promenades.",
    icon: (
      <svg className="w-6 h-6 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    tag: "Investor Friendly",
    title: "Flexible 4-Year Payment Plan",
    code: "Affordable Installments",
    description:
      "Low barrier to entry with structured monthly & quarterly installments, offering high capital growth potential backed by the trusted developers of New City Wah.",
    icon: (
      <svg className="w-6 h-6 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Stats() {
  const root = useRef<HTMLElement>(null);

  useGsap(() => {
    if (!root.current) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    gsap.from(root.current.querySelectorAll("[data-heading-reveal]"), {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: root.current,
        start: "top 78%",
        once: true,
      },
    });

    gsap.from(root.current.querySelectorAll("[data-stat-card]"), {
      y: 60,
      opacity: 0,
      duration: 0.85,
      stagger: 0.1,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: root.current.querySelector("[data-stat-grid]"),
        start: "top 82%",
        once: true,
      },
    });
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden bg-ivory py-20 text-ink sm:py-24 border-y border-black/10">
      <div className="container-pad relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between pb-12 border-b border-black/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full border border-champagne/40 bg-champagne/10 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
              <span className="text-[10px] font-menu uppercase tracking-[0.24em] text-champagne font-semibold">
                Verified Project Fundamentals
              </span>
            </div>
            <h2 className="font-serif text-[clamp(2.3rem,4.6vw,3.6rem)] font-normal leading-[1.08] tracking-tight uppercase text-ink">
              <span data-heading-reveal className="block">Legal Approvals &amp;</span>
              <span data-heading-reveal className="block italic text-champagne font-light lowercase first-letter:uppercase">
                Unmatched Location
              </span>
            </h2>
          </div>

          <p data-heading-reveal className="max-w-md font-serif text-base sm:text-lg text-black/70 leading-relaxed font-light">
            Engineered to lead the region with transparent legal approvals, unmatched highway connectivity, and master-planned waterfront serenity.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div data-stat-grid className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {keyHighlights.map((item) => (
            <article
              data-stat-card
              key={item.title}
              className="group relative flex flex-col justify-between rounded-2xl border border-black/10 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-champagne/60 hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-champagne/10 border border-champagne/20 flex items-center justify-center group-hover:border-champagne/50 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-[9px] font-menu uppercase tracking-widest text-champagne bg-champagne/10 px-2.5 py-1 rounded-md border border-champagne/20 font-semibold">
                    {item.tag}
                  </span>
                </div>

                <p className="text-[11px] font-mono tracking-wider text-black/50 uppercase mb-2">
                  {item.code}
                </p>

                <h3 className="text-xl sm:text-2xl font-serif font-normal text-ink tracking-tight leading-snug group-hover:text-champagne transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3.5 font-serif text-sm sm:text-base leading-relaxed text-black/70 font-light">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-black/10 flex items-center justify-between text-[10px] font-menu uppercase tracking-widest text-black/50 group-hover:text-champagne transition-colors">
                <span>Verified Authority</span>
                <span className="text-champagne group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner with Masterplan Link */}
        <div className="mt-14 rounded-2xl border border-black/10 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <span className="w-2.5 h-2.5 rounded-full bg-champagne shrink-0" />
            <p className="font-serif text-base sm:text-lg text-black/80 font-light">
              Explore plot categories across Awami Block, 3.5 &amp; 5 Marla, and commercial avenues.
            </p>
          </div>
          <Link
            href="/masterplan"
            className="shrink-0 inline-flex items-center gap-3 px-6 py-3 bg-ink text-white text-[11px] font-menu uppercase tracking-widest font-medium hover:bg-champagne transition-colors rounded-full"
          >
            Explore Complete Masterplan &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

