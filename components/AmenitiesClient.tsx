"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { AMENITIES_DATA, AmenityItem } from "@/lib/amenitiesData";

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
    <div className="bg-[#0b0a09] text-white min-h-screen selection:bg-champagne/30 selection:text-white">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
        {/* Background Image with Cinematic Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/amenities/glow-park.jpg"
            alt="New City Paradise Amenities"
            fill
            priority
            className="object-cover object-center scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a09] via-[#0b0a09]/75 to-[#0b0a09]/50" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/80" />
        </div>

        <div className="relative z-10 container-pad max-w-6xl mx-auto text-center px-4">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-champagne/30 bg-black/40 backdrop-blur-md mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
            <span className="text-[10px] sm:text-xs font-menu uppercase tracking-[0.28em] text-champagne">
              World-Class Living
            </span>
          </div>

          <h1 className="font-sans text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight uppercase max-w-4xl mx-auto leading-[1.08] text-white">
            Unrivaled <span className="italic font-serif text-champagne font-light">Lifestyle</span> Amenities
          </h1>

          <p className="mt-6 font-serif text-lg sm:text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
            Nestled strategically along the 330-ft arterial corridor, New City Paradise delivers an unmatched world of leisure, health, sports, and natural wonder.
          </p>

          {/* Quick stats pills */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6 border-t border-white/10">
            <div>
              <p className="font-sans text-2xl sm:text-3xl font-light text-white">14+</p>
              <p className="text-[10px] font-menu uppercase tracking-wider text-white/50 mt-1">Lifestyle Hubs</p>
            </div>
            <div>
              <p className="font-sans text-2xl sm:text-3xl font-light text-white">330 FT</p>
              <p className="text-[10px] font-menu uppercase tracking-wider text-white/50 mt-1">Main Boulevard</p>
            </div>
            <div>
              <p className="font-sans text-2xl sm:text-3xl font-light text-white">24/7</p>
              <p className="text-[10px] font-menu uppercase tracking-wider text-white/50 mt-1">Hospital & Security</p>
            </div>
            <div>
              <p className="font-sans text-2xl sm:text-3xl font-light text-white">100%</p>
              <p className="text-[10px] font-menu uppercase tracking-wider text-white/50 mt-1">Underground Power</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-[9px] uppercase tracking-[0.3em] font-menu text-white/60">Discover</span>
          <div className="w-4 h-7 rounded-full border border-white/30 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-champagne animate-bounce" />
          </div>
        </div>
      </section>

      {/* Hero Highlight Banner: Glow Park Spotlight */}
      <section className="container-pad max-w-7xl mx-auto px-4 -mt-10 relative z-20 mb-20">
        <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-r from-stone-900/90 to-stone-950/90 backdrop-blur-xl p-6 sm:p-10 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative h-72 sm:h-96 w-full rounded-xl overflow-hidden group">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 bg-black/70 backdrop-blur-md rounded-full text-[10px] font-menu uppercase tracking-widest text-champagne border border-champagne/30">
                  {featured.tag}
                </span>
                <span className="text-[11px] font-menu uppercase tracking-wider text-white/80">
                  Nighttime Illuminations
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
              <span className="text-xs font-menu uppercase tracking-[0.25em] text-champagne">
                Crown Jewel Attraction
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl uppercase tracking-tight font-light text-white">
                {featured.title}
              </h2>
              <p className="font-serif text-white/80 text-base sm:text-lg leading-relaxed font-light">
                {featured.description}
              </p>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-white/50 italic font-serif">
                  {featured.highlight}
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-champagne text-champagne hover:bg-champagne hover:text-black transition-colors px-4 py-2 text-[10px] font-menu uppercase tracking-widest"
                >
                  Schedule Tour &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="container-pad max-w-7xl mx-auto px-4 mb-14">
        <div className="flex flex-col sm:flex-row items-center justify-between border-b border-white/15 pb-6 gap-6">
          <div>
            <p className="text-[10px] font-menu uppercase tracking-[0.28em] text-champagne">
              Curated Masterplan
            </p>
            <h3 className="font-sans text-2xl sm:text-3xl font-light uppercase tracking-tight text-white mt-1">
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
                  className={`px-4 py-2 rounded-full text-[11px] font-menu uppercase tracking-widest transition-all duration-300 ${
                    active
                      ? "bg-white text-black font-medium shadow-lg"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
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
      <section className="container-pad max-w-7xl mx-auto px-4 pb-28">
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filtered.map((item, index) => (
              <motion.article
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="group relative cursor-pointer flex flex-col rounded-xl overflow-hidden border border-white/10 bg-[#141311] hover:border-champagne/50 hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative h-64 w-full overflow-hidden bg-black/40">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141311] via-transparent to-black/30" />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-md text-[9px] font-menu uppercase tracking-widest text-champagne border border-champagne/30">
                      {item.tag}
                    </span>
                  </div>

                  {/* Corner indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-xs">
                      &#x2922;
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-menu uppercase tracking-widest text-white/40 block mb-1">
                      {item.category}
                    </span>
                    <h4 className="font-sans text-xl uppercase tracking-tight text-white group-hover:text-champagne transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="mt-2.5 font-serif text-sm leading-relaxed text-white/65 line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer Highlights */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-menu">
                    <span className="text-white/40 tracking-wider">
                      {item.highlight ? item.highlight.slice(0, 32) + "..." : "Master-Planned"}
                    </span>
                    <span className="text-champagne uppercase tracking-widest flex items-center gap-1 group-hover:translate-x-1 transition-transform">
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
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md p-4 sm:p-6 md:p-10 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-[#161513] border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-white hover:text-black flex items-center justify-center transition-colors text-xl font-light"
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#161513] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-md text-[10px] font-menu uppercase tracking-widest text-champagne border border-champagne/30">
                    {activeItem.category}
                  </span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
                <h3 className="font-sans text-2xl sm:text-3xl uppercase tracking-tight text-white">
                  {activeItem.title}
                </h3>
                <p className="font-serif text-base sm:text-lg text-white/80 leading-relaxed">
                  {activeItem.description}
                </p>

                {activeItem.highlight && (
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-[10px] font-menu uppercase tracking-widest text-champagne mb-1">
                      Key Highlights
                    </p>
                    <p className="font-serif text-sm text-white/90">
                      {activeItem.highlight}
                    </p>
                  </div>
                )}

                <div className="pt-4 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between border-t border-white/10">
                  <div className="text-xs text-white/50 font-menu uppercase tracking-wider">
                    New City Paradise Masterplan Feature
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-champagne text-black text-[11px] font-menu uppercase tracking-widest font-medium hover:bg-white transition-colors"
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
      <section className="border-t border-white/10 bg-[#0e0d0c] py-20">
        <div className="container-pad max-w-4xl mx-auto text-center px-4">
          <p className="text-xs font-menu uppercase tracking-[0.25em] text-champagne mb-3">
            Experience It Firsthand
          </p>
          <h2 className="font-sans text-3xl sm:text-5xl uppercase tracking-tight font-light text-white">
            Ready to Build Your Future at New City Paradise?
          </h2>
          <p className="mt-4 font-serif text-base sm:text-lg text-white/70 font-light max-w-xl mx-auto">
            Book an exclusive site visit today to tour the 330-ft main boulevard, Glow Park development, and recreational grounds.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-champagne text-black text-xs font-menu uppercase tracking-widest font-medium hover:bg-white transition-colors"
            >
              Book An On-Site Visit
            </Link>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-white/30 text-white text-xs font-menu uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
