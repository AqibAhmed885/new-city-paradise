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
    id: "residential",
    tag: "PREMIUM LIVING",
    title: "Residential Plots",
    description:
      "Experience a lifestyle of unparalleled luxury and comfort. Our residential plots are thoughtfully designed to provide the perfect canvas for your dream home, surrounded by lush landscapes and modern amenities.",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    ],
    reverse: false,
    theme: "bg-[#F4F3EE]",
  },
  {
    id: "commercial",
    tag: "BUSINESS HUB",
    title: "Commercial Zone",
    description:
      "Strategically located to maximize visibility and foot traffic, our commercial plots offer the perfect opportunity for businesses to thrive in a rapidly growing, high-value community along the main boulevard.",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1200&auto=format&fit=crop",
    ],
    reverse: true,
    theme: "bg-[#ECEAE4]",
  },
  {
    id: "villas",
    tag: "EXCLUSIVE HOMES",
    title: "Awami Villas",
    description:
      "Discover the perfect blend of affordability and elegance. Awami Villas offer beautifully constructed, move-in ready homes designed for modern families seeking a secure and vibrant neighborhood.",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
    ],
    reverse: false,
    theme: "bg-[#F7F6F2]",
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
    <section ref={containerRef} className="relative bg-[#0d0c0a] w-full z-10">
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

                    <h2 className="text-4xl lg:text-[46px] leading-[1.08] font-serif text-ink mb-6 tracking-tight">
                      {community.title}
                    </h2>

                    <p className="text-[14px] leading-relaxed text-gray-600 mb-10 font-serif">
                      {community.description}
                    </p>

                    <Link
                      href={`/masterplan`}
                      className="group flex items-center gap-4 text-[11px] tracking-[0.24em] uppercase font-menu font-semibold text-ink"
                    >
                      <span className="w-8 h-[1px] bg-ink group-hover:w-16 transition-all duration-300 ease-out"></span>
                      DISCOVER MORE
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
