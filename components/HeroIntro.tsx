"use client";

import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";

export default function HeroIntro() {
  return (
    <section className="relative z-20 bg-ivory text-ink py-16 sm:py-24 border-b border-black/10">
      <div className="container-pad max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          
          {/* Eyebrow tag */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#1b3d2f]/20 bg-[#1b3d2f]/5 text-[#1b3d2f] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#1b3d2f] animate-pulse" />
            <span className="text-[10px] sm:text-xs font-menu uppercase tracking-[0.26em] font-semibold">
              PHATA NOC Approved · DG-PHATA/W-I/PHS/61/2022
            </span>
          </div>

          {/* Canonical Homepage H1 */}
          <h1 className="font-serif text-[clamp(2.1rem,4.6vw,3.75rem)] leading-[1.08] tracking-tight text-ink max-w-5xl">
            New City Paradise Wah —{" "}
            <span className="italic text-[#1b3d2f] font-light">Residential &amp; Commercial Plots</span>{" "}
            near Burhan Interchange.
          </h1>

          {/* Supporting contextual paragraph */}
          <p className="mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-black/70 max-w-3xl font-serif">
            A 20,000 Kanal master-planned community developed by the makers of New City Wah, strategically located on the 330-ft GT Road adjacent to the Burhan Interchange (M-1 Motorway) and the northern CPEC Route. Featuring verified residential plots of 3.5 Marla, 5 Marla, 10 Marla, and 1 Kanal, alongside prime commercial sectors.
          </p>

          {/* Quick CTA Actions */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#plots-overview"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#1b3d2f] text-white text-xs font-menu uppercase tracking-widest hover:bg-[#12281f] transition-all shadow-md"
            >
              <span>Explore Plot Options</span>
              <span>↓</span>
            </Link>
            <Link
              href="#location-connectivity"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-[#1b3d2f]/30 bg-white text-ink text-xs font-menu uppercase tracking-widest hover:bg-[#1b3d2f]/10 transition-all"
            >
              <span>Location &amp; Routes</span>
              <span>→</span>
            </Link>
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-champagne/60 bg-champagne/10 text-ink text-xs font-menu uppercase tracking-widest hover:bg-champagne hover:text-white transition-all"
            >
              <span>Verified WhatsApp Desk</span>
              <span className="text-sm">↗</span>
            </a>
          </div>

          {/* Verified Quick Highlights Grid */}
          <div className="mt-14 w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-black/10 text-left">
            <div className="border-l-2 border-[#1b3d2f] pl-4">
              <span className="text-[10px] font-menu uppercase tracking-wider text-black/50 block">PHATA Approved</span>
              <p className="font-serif text-lg sm:text-xl font-medium text-ink mt-0.5">4,256+ Kanal</p>
              <p className="text-[11px] text-black/60 font-serif mt-0.5">NOC: 61/2022</p>
            </div>
            <div className="border-l-2 border-champagne pl-4">
              <span className="text-[10px] font-menu uppercase tracking-wider text-black/50 block">Arterial Avenue</span>
              <p className="font-serif text-lg sm:text-xl font-medium text-ink mt-0.5">330-Ft Boulevard</p>
              <p className="text-[11px] text-black/60 font-serif mt-0.5">Direct GT Road access</p>
            </div>
            <div className="border-l-2 border-[#1b3d2f] pl-4">
              <span className="text-[10px] font-menu uppercase tracking-wider text-black/50 block">Motorway Junction</span>
              <p className="font-serif text-lg sm:text-xl font-medium text-ink mt-0.5">0 KM Burhan</p>
              <p className="text-[11px] text-black/60 font-serif mt-0.5">M-1 &amp; CPEC corridor</p>
            </div>
            <div className="border-l-2 border-champagne pl-4">
              <span className="text-[10px] font-menu uppercase tracking-wider text-black/50 block">Established Legacy</span>
              <p className="font-serif text-lg sm:text-xl font-medium text-ink mt-0.5">New City Wah</p>
              <p className="text-[11px] text-black/60 font-serif mt-0.5">Developers of Phase 1 &amp; 2</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
