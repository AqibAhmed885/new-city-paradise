"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LAHORE_CONFIG } from "@/lib/lahoreConfig";

gsap.registerPlugin(ScrollTrigger);

export default function LahoreAmenities() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-amenity-card]", el);
      gsap.from(cards, {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="lahore-amenities"
      aria-label="New City Paradise Lahore World-Class Amenities"
      className="relative bg-[#FAFAF8] py-24 sm:py-32 border-t border-black/[0.06]"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <span className="inline-block text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.24em] uppercase text-[#8C7A58] mb-3">
            Signature Lifestyle
          </span>
          <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-heading font-normal leading-[1.08] tracking-[-0.03em] text-[#12110F]">
            World-Class Amenities & Infrastructure
          </h2>
          <p className="mt-4 text-[15px] sm:text-[16px] font-sans leading-[1.75] text-[#12110F]/65 max-w-2xl mx-auto">
            From the signature Ravi Marina waterfront promenades to state-of-the-art healthcare cities, every facet of New City Paradise Lahore is designed for elite living.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {LAHORE_CONFIG.amenities.map((item) => (
            <div
              key={item.title}
              data-amenity-card
              className="group relative flex flex-col overflow-hidden rounded-xl bg-white border border-black/[0.06] transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image Frame */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black/5">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                
                <span className="absolute top-4 left-4 rounded-full bg-black/40 backdrop-blur-md px-3 py-1 text-[9px] font-sans font-medium uppercase tracking-[0.16em] text-white/95 border border-white/10">
                  {item.tag}
                </span>
              </div>

              {/* Text Info */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div>
                  <h3 className="font-heading text-[21px] sm:text-[23px] font-normal leading-tight text-[#12110F]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] font-sans leading-[1.65] text-[#12110F]/60">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/[0.05] flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.14em] text-[#12110F]/70 group-hover:text-[#8C7A58] transition-colors">
                  <span>Explore detail</span>
                  <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
