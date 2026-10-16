"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Sparkles } from "lucide-react";

export default function LahoreTeaser() {
  return (
    <section
      aria-label="New City Paradise Lahore Expansion"
      className="relative overflow-hidden bg-[#101916] text-white py-20 sm:py-28 border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent p-8 sm:p-14 lg:p-16 backdrop-blur-xl">
          {/* Subtle Ambient Background image */}
          <div className="absolute inset-0 -z-10 opacity-30">
            <Image
              src="/images/delivered/lahore-hero.jpg"
              alt="New City Paradise Lahore Riverfront"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-center filter brightness-75 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#101916] via-[#101916]/80 to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-champagne/20 border border-champagne/30 px-3.5 py-1 text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-champagne mb-5">
                <Sparkles size={12} className="text-champagne" />
                Regional Expansion Portfolio
              </div>

              <h2 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-heading font-normal leading-[1.1] tracking-tight text-white">
                Discover <br />
                <span className="italic font-light text-champagne">
                  New City Paradise Lahore
                </span>
              </h2>

              <p className="mt-5 text-[15px] sm:text-[17px] font-sans leading-relaxed text-white/75 max-w-xl">
                Pakistan’s largest riverfront development in RUDA Phase 1, positioned directly on the Eastern Bypass (M-11) with 3-minute access to Lahore Ring Road.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/lahore"
                  className="group inline-flex items-center gap-3 rounded-full bg-champagne px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-ink transition-all duration-300 hover:bg-white hover:shadow-xl"
                >
                  Explore Lahore Development
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <div className="flex items-center gap-2 text-xs font-sans text-white/60">
                  <MapPin size={14} className="text-champagne" />
                  <span>Eastern Bypass, M-11 Lahore</span>
                </div>
              </div>
            </div>

            {/* Right Stat Cards */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/15 bg-black/40 p-5 backdrop-blur-md">
                <span className="text-[10px] font-sans uppercase tracking-wider text-white/50">
                  Master Zone
                </span>
                <p className="mt-2 text-2xl font-heading text-white">
                  RUDA Phase 1
                </p>
                <span className="mt-1 block text-xs text-champagne">
                  Riverfront Basin
                </span>
              </div>

              <div className="rounded-2xl border border-white/15 bg-black/40 p-5 backdrop-blur-md">
                <span className="text-[10px] font-sans uppercase tracking-wider text-white/50">
                  Motorway Arterial
                </span>
                <p className="mt-2 text-2xl font-heading text-white">
                  0 MIN
                </p>
                <span className="mt-1 block text-xs text-white/70">
                  Eastern Bypass M-11
                </span>
              </div>

              <div className="rounded-2xl border border-white/15 bg-black/40 p-5 backdrop-blur-md">
                <span className="text-[10px] font-sans uppercase tracking-wider text-white/50">
                  Lahore Ring Road
                </span>
                <p className="mt-2 text-2xl font-heading text-white">
                  03 MIN
                </p>
                <span className="mt-1 block text-xs text-white/70">
                  Intra-City Speed
                </span>
              </div>

              <div className="rounded-2xl border border-white/15 bg-black/40 p-5 backdrop-blur-md">
                <span className="text-[10px] font-sans uppercase tracking-wider text-white/50">
                  Allama Iqbal Airport
                </span>
                <p className="mt-2 text-2xl font-heading text-white">
                  10 MIN
                </p>
                <span className="mt-1 block text-xs text-white/70">
                  Direct Flyover Route
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
