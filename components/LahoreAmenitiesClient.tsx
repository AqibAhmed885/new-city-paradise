"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
    <div className="bg-[#FAF8F5] text-[#12110F] min-h-screen selection:bg-[#8C7A58]/20 selection:text-[#12110F]">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 pb-20 border-b border-black/[0.06]">
        <div className="absolute inset-0">
          <Image
            src="/images/delivered/lahore-hero.jpg"
            alt="New City Paradise Lahore Waterfront Amenities"
            fill
            priority
            className="object-cover object-center scale-105 filter brightness-[0.95]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/85 to-[#FAF8F5]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(250,248,245,0.7)_80%)]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#8C7A58]/25 bg-white/80 backdrop-blur-md mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8C7A58] animate-pulse" />
            <span className="text-[10px] sm:text-xs font-sans font-semibold uppercase tracking-[0.24em] text-[#8C7A58]">
              RUDA Phase 1 Waterfront Living
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight uppercase max-w-4xl mx-auto leading-[1.08] text-[#12110F]">
            World-Class <span className="italic font-light text-[#8C7A58]">Lifestyle</span> in Lahore
          </h1>

          <p className="mt-6 font-sans text-base sm:text-lg md:text-xl text-[#12110F]/70 max-w-2xl mx-auto leading-relaxed font-light">
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
              className="group rounded-3xl bg-white border border-black/[0.08] overflow-hidden flex flex-col justify-between hover:border-[#8C7A58]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500"
            >
              <div className="relative h-64 w-full overflow-hidden bg-black/5">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur-md px-3.5 py-1 text-[9px] font-sans font-semibold uppercase tracking-[0.16em] text-[#12110F] shadow-sm">
                  {item.tag}
                </span>
              </div>

              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="font-heading text-2xl font-normal text-[#12110F] group-hover:text-[#8C7A58] transition-colors">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm font-sans text-[#12110F]/65 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#8C7A58]">
                  <span>RUDA Urban Spec</span>
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="border-t border-black/[0.08] bg-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="text-xs font-sans font-semibold uppercase tracking-[0.24em] text-[#8C7A58] mb-3">
            RUDA Phase 1 Waterfront
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl uppercase tracking-tight font-normal text-[#12110F]">
            Explore New City Paradise Lahore
          </h2>
          <p className="mt-4 font-sans text-base sm:text-lg text-[#12110F]/65 font-light max-w-xl mx-auto">
            Contact our dedicated RUDA property desk for sector maps, riverfront specs, and priority booking allocations.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/lahore/contact"
              className="px-8 py-3.5 rounded-full bg-[#12110F] text-[#FAF8F5] text-xs font-sans font-semibold uppercase tracking-widest hover:bg-[#8C7A58] transition-all shadow-md"
            >
              Contact Lahore Desk
            </Link>
            <a
              href={LAHORE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full border border-black/20 text-[#12110F] text-xs font-sans font-semibold uppercase tracking-widest hover:bg-[#12110F] hover:text-white transition-all bg-white"
            >
              Verified WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
