"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { AMENITIES_DATA, AmenityItem } from "@/lib/amenitiesData";
import { SITE_CONFIG } from "@/lib/siteConfig";

const categories = [
  "All Amenities",
  "Nature & Leisure",
  "Sports & Fitness",
  "Infrastructure & Health",
] as const;

export default function AmenitiesClient() {
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof categories)[number]>("All Amenities");
  const [activeItem, setActiveItem] = useState<AmenityItem | null>(null);

  const filtered =
    selectedCategory === "All Amenities"
      ? AMENITIES_DATA
      : AMENITIES_DATA.filter((item) => item.category === selectedCategory);

  const featured = AMENITIES_DATA[0]; // Glow Park

  return (
    <div className="bg-[#FAF8F5] text-[#12110F] min-h-screen selection:bg-[#8C7A58]/20 selection:text-[#12110F]">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 pb-20 border-b border-black/[0.06]">
        {/* Background Image with Soft Architectural Mist Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/amenities/glow-park.jpg"
            alt="New City Paradise Amenities"
            fill
            priority
            className="object-cover object-center scale-105 filter brightness-[0.95]"
          />
          {/* Light Ivory Architectural Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/85 to-[#FAF8F5]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(250,248,245,0.7)_80%)]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#8C7A58]/25 bg-white/80 backdrop-blur-md mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8C7A58] animate-pulse" />
            <span className="text-[10px] sm:text-xs font-sans font-semibold uppercase tracking-[0.24em] text-[#8C7A58]">
              World-Class Living · Burhan CPEC
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight uppercase max-w-4xl mx-auto leading-[1.08] text-[#12110F]">
            Unrivaled <span className="italic font-light text-[#8C7A58]">Lifestyle</span> Amenities
          </h1>

          <p className="mt-6 font-sans text-base sm:text-lg md:text-xl text-[#12110F]/70 max-w-2xl mx-auto leading-relaxed font-light">
            Nestled strategically along the 330-ft arterial corridor, New City Paradise delivers an unmatched world of leisure, health, sports, and natural wonder.
          </p>

          {/* Quick stats pills */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6 border-t border-black/[0.08]">
            <div className="p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-black/[0.04] shadow-sm">
              <p className="font-heading text-2xl sm:text-3xl font-normal text-[#12110F]">14+</p>
              <p className="text-[10px] font-sans font-medium uppercase tracking-wider text-black/50 mt-1">Lifestyle Hubs</p>
            </div>
            <div className="p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-black/[0.04] shadow-sm">
              <p className="font-heading text-2xl sm:text-3xl font-normal text-[#12110F]">330 FT</p>
              <p className="text-[10px] font-sans font-medium uppercase tracking-wider text-black/50 mt-1">Main Boulevard</p>
            </div>
            <div className="p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-black/[0.04] shadow-sm">
              <p className="font-heading text-2xl sm:text-3xl font-normal text-[#12110F]">24/7</p>
              <p className="text-[10px] font-sans font-medium uppercase tracking-wider text-black/50 mt-1">Hospital & Security</p>
            </div>
            <div className="p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-black/[0.04] shadow-sm">
              <p className="font-heading text-2xl sm:text-3xl font-normal text-[#12110F]">100%</p>
              <p className="text-[10px] font-sans font-medium uppercase tracking-wider text-black/50 mt-1">Underground Power</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Highlight Banner: Glow Park Spotlight */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 -mt-10 relative z-20 mb-20">
        <div className="relative rounded-3xl overflow-hidden border border-black/[0.08] bg-white p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden group">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <span className="px-3.5 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-sans font-semibold uppercase tracking-widest text-[#12110F] shadow-sm">
                  {featured.tag}
                </span>
                <span className="text-[11px] font-sans uppercase tracking-wider text-white drop-shadow">
                  Nighttime Illuminations
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
              <span className="text-xs font-sans font-semibold uppercase tracking-[0.22em] text-[#8C7A58]">
                Crown Jewel Attraction
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl uppercase tracking-tight font-normal text-[#12110F]">
                {featured.title}
              </h2>
              <p className="font-sans text-[#12110F]/70 text-base leading-relaxed font-light">
                {featured.description}
              </p>
              <div className="pt-4 border-t border-black/[0.08] flex items-center justify-between">
                <span className="text-xs text-[#8C7A58] italic font-serif">
                  {featured.highlight}
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#12110F] text-[#FAF8F5] hover:bg-[#8C7A58] transition-colors px-5 py-2.5 text-[10px] font-sans font-semibold uppercase tracking-widest"
                >
                  Schedule Tour &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 mb-12">
        <div className="flex flex-col sm:flex-row items-center justify-between border-b border-black/[0.08] pb-6 gap-6">
          <div>
            <p className="text-[10px] font-sans font-semibold uppercase tracking-[0.24em] text-[#8C7A58]">
              Curated Masterplan
            </p>
            <h3 className="font-heading text-2xl sm:text-3xl font-normal uppercase tracking-tight text-[#12110F] mt-1">
              Explore By Category
            </h3>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-[11px] font-sans font-semibold uppercase tracking-widest transition-all duration-300 ${
                    active
                      ? "bg-[#12110F] text-[#FAF8F5] shadow-md"
                      : "bg-white text-[#12110F]/70 hover:bg-[#8C7A58]/10 hover:text-[#12110F] border border-black/[0.08]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-28">
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filtered.map((item, index) => (
              <motion.article
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="group relative cursor-pointer flex flex-col rounded-2xl overflow-hidden border border-black/[0.08] bg-white hover:border-[#8C7A58]/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative h-64 w-full overflow-hidden bg-black/5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-sans font-semibold uppercase tracking-widest text-[#12110F] shadow-sm">
                      {item.tag}
                    </span>
                  </div>

                  {/* Corner indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#12110F] text-xs shadow-sm">
                      &#x2922;
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-7 flex flex-col flex-1 justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-sans font-semibold uppercase tracking-widest text-[#8C7A58] block mb-1">
                      {item.category}
                    </span>
                    <h4 className="font-heading text-xl uppercase tracking-tight text-[#12110F] group-hover:text-[#8C7A58] transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="mt-2.5 font-sans text-sm leading-relaxed text-[#12110F]/65 line-clamp-3 font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer Highlights */}
                  <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between text-[11px] font-sans">
                    <span className="text-black/45 tracking-wider">
                      {item.highlight ? item.highlight.slice(0, 32) + "..." : "Master-Planned"}
                    </span>
                    <span className="text-[#8C7A58] font-semibold uppercase tracking-widest flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Details &rarr;
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Modal Lightbox for Deep-dive into an amenity */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md p-4 sm:p-6 md:p-10 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-[#FAF8F5] border border-black/[0.1] rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 text-[#12110F] hover:bg-[#12110F] hover:text-white flex items-center justify-center transition-colors text-xl font-light shadow-md"
              >
                &times;
              </button>

              {/* Modal Image */}
              <div className="relative h-72 sm:h-96 w-full">
                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="px-3.5 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-sans font-semibold uppercase tracking-widest text-[#12110F] shadow-sm">
                    {activeItem.category}
                  </span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
                <h3 className="font-heading text-2xl sm:text-3xl uppercase tracking-tight text-[#12110F]">
                  {activeItem.title}
                </h3>
                <p className="font-sans text-base sm:text-lg text-[#12110F]/75 leading-relaxed font-light">
                  {activeItem.description}
                </p>

                {activeItem.highlight && (
                  <div className="p-4 rounded-xl bg-white border border-black/[0.08] shadow-sm">
                    <p className="text-[10px] font-sans font-semibold uppercase tracking-widest text-[#8C7A58] mb-1">
                      Key Highlights
                    </p>
                    <p className="font-sans text-sm text-[#12110F]/85">
                      {activeItem.highlight}
                    </p>
                  </div>
                )}

                <div className="pt-4 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between border-t border-black/[0.08]">
                  <div className="text-xs text-black/50 font-sans uppercase tracking-wider">
                    New City Paradise Masterplan Feature
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#12110F] text-[#FAF8F5] text-[11px] font-sans font-semibold uppercase tracking-widest hover:bg-[#8C7A58] transition-colors shadow-md"
                  >
                    Inquire About Plots &rarr;
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom CTA Section */}
      <section className="border-t border-black/[0.08] bg-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="text-xs font-sans font-semibold uppercase tracking-[0.24em] text-[#8C7A58] mb-3">
            Experience It Firsthand
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl uppercase tracking-tight font-normal text-[#12110F]">
            Ready to Build Your Future at New City Paradise?
          </h2>
          <p className="mt-4 font-sans text-base sm:text-lg text-[#12110F]/65 font-light max-w-xl mx-auto">
            Book an exclusive site visit today to tour the 330-ft main boulevard, Glow Park development, and recreational grounds.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-[#12110F] text-[#FAF8F5] text-xs font-sans font-semibold uppercase tracking-widest hover:bg-[#8C7A58] transition-all shadow-md"
            >
              Book An On-Site Visit
            </Link>
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full border border-black/20 text-[#12110F] text-xs font-sans font-semibold uppercase tracking-widest hover:bg-[#12110F] hover:text-white transition-all bg-white"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
