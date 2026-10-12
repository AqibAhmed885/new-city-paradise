"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsap } from "@/hooks/useGsap";

gsap.registerPlugin(ScrollTrigger);

const communities = [
  {
    id: "residential-plots",
    tag: "VERIFIED PLOT SIZES",
    title: "Residential Plots",
    sizes: "3.5 Marla · 5 Marla · 10 Marla · 1 Kanal",
    description:
      "Official residential plots in New City Paradise planned around wide carpeted roads, underground electricity, serene parks, and planned civic amenities. Designed for modern family home construction with direct access from the 330-ft main boulevard.",
    images: [
      "/images/isla.jpg",
      "/images/central-park.jpg",
      "/images/crystal-lakes.jpg",
      "/images/new-city-paradise-hero.png",
    ],
    reverse: false,
    theme: "bg-[#F7F6F2]",
    linkText: "View Masterplan & Plots",
    linkHref: "/masterplan",
  },
  {
    id: "commercial-plots",
    tag: "BUSINESS CORRIDOR",
    title: "Commercial Plots",
    sizes: "2.5 Marla · 4 Marla · 7 Marla",
    description:
      "High-visibility commercial sectors strategically aligned along the 330-ft grand entrance boulevard and primary arterial avenues. Optimized for corporate retail, executive offices, financial centers, and upscale retail flagships.",
    images: [
      "/images/arcade1.png",
      "/images/arcade2.png",
      "/images/arcade3.png",
      "/images/newcityarcade.png",
    ],
    reverse: true,
    theme: "bg-[#F0EDE6]",
    linkText: "Explore Commercial Sectors",
    linkHref: "/masterplan",
  },
  {
    id: "awami-block",
    tag: "COMMUNITY SECTOR",
    title: "Awami Block",
    sizes: "4 Marla · 6 Marla Planned Plots",
    description:
      "A dedicated community-oriented sector thoughtfully planned with essential neighborhood amenities, community mosques, primary healthcare units, family parks, and water filtration facilities.",
    images: [
      "/images/garden-villa.jpg",
      "/images/wellness-club.jpg",
      "/images/learning-campus.jpg",
      "/images/grand-estate.jpg",
    ],
    reverse: false,
    theme: "bg-[#F7F6F2]",
    linkText: "Inquire About Awami Block",
    linkHref: "/contact",
  },
];

export default function Communities() {
  const containerRef = useRef<HTMLElement>(null);

  useGsap(() => {
    if (!containerRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-stack-card]");

      cards.forEach((card, i) => {
        // Sticky Pinning only for cards before the last one
        // The last card does NOT pin and natural scroll flows directly into the next section
        if (i < cards.length - 1) {
          const nextCard = cards[i + 1];

          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            pin: true,
            pinSpacing: false,
            endTrigger: nextCard,
            end: "top top",
          });

          // Subtle scale and soft brightness dim as the next card stacks over it
          gsap.to(card.querySelector("[data-card-inner]"), {
            scale: 0.94,
            filter: "brightness(0.8)",
            ease: "none",
            scrollTrigger: {
              trigger: nextCard,
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
          });
        }
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={containerRef} id="plots-overview" className="relative bg-[#0d0c0a] w-full z-10">
      {communities.map((community, index) => {
        const isLast = index === communities.length - 1;
        return (
          <div
            key={community.id}
            data-stack-card
            className={`min-h-screen w-full flex items-center justify-center overflow-hidden ${
              isLast ? "relative" : "sticky top-0"
            }`}
            style={{ zIndex: index + 1 }}
          >
            <div
              data-card-inner
              className={`w-full min-h-screen ${community.theme} flex items-center py-20 lg:py-24 shadow-[0_-15px_40px_rgba(0,0,0,0.18)] transition-all duration-300 origin-top`}
            >
              <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-16">
                <div
                  className={`flex flex-col ${
                    community.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                  } items-center gap-12 lg:gap-20`}
                >
                  {/* 4-Image Luxury Mosaic Grid */}
                  <div className="w-full lg:w-3/5 grid grid-cols-3 gap-2 sm:gap-3">
                    <div className="col-span-2 aspect-[4/3] relative overflow-hidden group shadow-md">
                      <Image
                        src={community.images[0]}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                        alt={`${community.title} exterior view`}
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    </div>
                    <div className="col-span-1 aspect-[4/3] relative overflow-hidden group shadow-md">
                      <Image
                        src={community.images[1]}
                        fill
                        sizes="(max-width: 1024px) 50vw, 20vw"
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                        alt={`${community.title} interior detail`}
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    </div>
                    <div className="col-span-1 aspect-[3/4] relative overflow-hidden group shadow-md">
                      <Image
                        src={community.images[2]}
                        fill
                        sizes="(max-width: 1024px) 50vw, 20vw"
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                        alt={`${community.title} architecture perspective`}
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    </div>
                    <div className="col-span-2 aspect-[16/10] relative overflow-hidden group shadow-md">
                      <Image
                        src={community.images[3]}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                        alt={`${community.title} panoramic view`}
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    </div>
                  </div>

                  {/* Editorial Content Block */}
                  <div className="w-full lg:w-2/5 flex flex-col items-start max-w-lg">
                    {/* Category Tracker */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-[10px] tracking-[0.28em] uppercase font-menu font-semibold text-champagne">
                        0{index + 1} / 03
                      </span>
                      <span className="w-6 h-[1px] bg-champagne/40" />
                      <span className="text-[10px] tracking-[0.24em] uppercase font-menu text-gray-500 font-semibold">
                        {community.tag}
                      </span>
                    </div>

                    <h2 className="text-4xl lg:text-[46px] leading-[1.08] font-serif text-ink mb-3 tracking-tight">
                      {community.title}
                    </h2>

                    <div className="mb-6 inline-flex items-center gap-2 rounded-md bg-champagne/15 border border-champagne/30 px-3 py-1 text-xs font-menu font-medium text-ink">
                      <span className="text-black/60">Plot sizes:</span>
                      <strong className="font-semibold text-ink">{community.sizes}</strong>
                    </div>

                    <p className="text-[14px] leading-relaxed text-gray-600 mb-8 font-serif">
                      {community.description}
                    </p>

                    <Link
                      href={community.linkHref}
                      className="group flex items-center gap-4 text-[11px] tracking-[0.24em] uppercase font-menu font-semibold text-ink"
                    >
                      <span className="w-8 h-[1px] bg-ink group-hover:w-16 transition-all duration-300 ease-out"></span>
                      {community.linkText}
                      <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
