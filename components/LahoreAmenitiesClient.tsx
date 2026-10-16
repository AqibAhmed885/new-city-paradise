"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { LAHORE_CONFIG } from "@/lib/lahoreConfig";

const categories = [
  "All Amenities",
  "Waterfront & Leisure",
  "Smart Infrastructure",
  "Sports & Wellness",
] as const;

export default function LahoreAmenitiesClient() {
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof categories)[number]>("All Amenities");

  return (
    <div className="bg-[#0b0a09] text-white min-h-screen selection:bg-champagne/30 selection:text-white">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0">
          <Image
            src="/images/delivered/lahore-hero.jpg"
            alt="New City Paradise Lahore Waterfront Amenities"
            fill
            priority
            className="object-cover object-center scale-105 filter brightness-[0.75]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a09] via-[#0b0a09]/75 to-[#0b0a09]/50" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-champagne/30 bg-black/40 backdrop-blur-md mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
            <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.28em] text-champagne">
              RUDA Phase 1 Waterfront Living
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight uppercase max-w-4xl mx-auto leading-[1.08] text-white">
            World-Class <span className="italic font-light text-champagne">Lifestyle</span> in Lahore
          </h1>

          <p className="mt-6 font-sans text-lg sm:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed font-light">
            Strategically designed along the Eastern Bypass (M-11), New City Paradise Lahore delivers an unmatched ecosystem of marina promenades, sports arenas, health cities, and high-street commercial arcades.
          </p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LAHORE_CONFIG.amenities.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl bg-white/[0.04] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-champagne/40 transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[9px] font-sans font-semibold uppercase tracking-[0.16em] text-champagne border border-white/10">
                  {item.tag}
                </span>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="font-heading text-2xl font-normal text-white">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm font-sans text-white/65 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-champagne">
                  <span>RUDA Urban Spec</span>
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
