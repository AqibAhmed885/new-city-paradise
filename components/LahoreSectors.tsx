"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LAHORE_CONFIG } from "@/lib/lahoreConfig";

const lahoreSectors = [
  {
    id: "ravi-marina-waterfront",
    number: "01",
    tag: "SIGNATURE WATERFRONT",
    title: "Ravi Marina & Riverfront Promenade",
    sizes: "Scenic Waterfront Living",
    description:
      "Pakistan's premier riverfront promenade along the natural contours of the Ravi River. Featuring serene open-air board walks, sunset gazebos, marina leisure docks, and curated waterside dining avenues.",
    images: [
      "/images/delivered/lahore-hero.jpg",
      "/images/central-park.jpg",
      "/images/crystal-lakes.jpg",
      "/images/delivered/lahore-intro.jpg",
    ],
    theme: "bg-[#FBF9F4]",
    linkText: "View Marina Masterplan",
    linkHref: "/lahore/masterplan",
  },
  {
    id: "smart-residential-blocks",
    number: "02",
    tag: "SMART CITY LIVING",
    title: "Smart Residential Sectors",
    sizes: "3.5 · 5 · 10 Marla · 1 Kanal Planned Plots",
    description:
      "Designed with sustainable energy, wide carpeted avenues, underground electricity, optical fiber grids, and automated security. Crafted for modern family villas with instant access from the Eastern Bypass corridor.",
    images: [
      "/images/garden-villa.jpg",
      "/images/wellness-club.jpg",
      "/images/learning-campus.jpg",
      "/images/luxury-villas.jpg",
    ],
    theme: "bg-[#F5F2EC]",
    linkText: "Inquire Residential Inventory",
    linkHref: "/lahore/contact",
  },
  {
    id: "downtown-commercial-arcade",
    number: "03",
    tag: "BUSINESS EPICENTER",
    title: "Downtown Commercial Boulevard",
    sizes: "High-Visibility Corporate & Retail Plots",
    description:
      "A bustling commercial zone inspired by New City Arcade. Anchoring flagship retail brand outlets, corporate headquarters, executive financial centers, and open-air pedestrian plazas.",
    images: [
      "/images/arcade1.png",
      "/images/arcade2.png",
      "/images/arcade3.png",
      "/images/delivered/nca.png",
    ],
    theme: "bg-[#F1F3EF]",
    linkText: "Explore Commercial Sectors",
    linkHref: "/lahore/masterplan",
  },
  {
    id: "health-sports-pavilion",
    number: "04",
    tag: "HEALTHCARE & SPORTS",
    title: "Civic Health & Sports Campus",
    sizes: "International Community Infrastructure",
    description:
      "Dedicated world-class community hospital complex, multi-sport outdoor volleyball courts, jogging trails, and expansive community parks ensuring comprehensive wellness and lifestyle balance.",
    images: [
      "/images/health-pavilion.jpg",
      "/images/sports-campus.jpg",
      "/images/wellness-club.jpg",
      "/images/grand-estate.jpg",
    ],
    theme: "bg-[#EEF2F0]",
    linkText: "View Master Amenities",
    linkHref: "/lahore/amenities",
  },
];

export default function LahoreSectors() {
  const desktopStackClasses = [
    "lg:min-h-[400vh] lg:-mb-[300vh]",
    "lg:min-h-[300vh] lg:-mb-[200vh]",
    "lg:min-h-[200vh] lg:-mb-[100vh]",
    "lg:min-h-[100vh] lg:mb-0",
  ];

  return (
    <section
      id="lahore-sectors"
      aria-label="New City Paradise Lahore Sectors and Masterplan Zones"
      className="relative bg-[#EDEBE6]"
    >
      <div className="relative">
        {lahoreSectors.map((sector, index) => {
          const desktopTop = 0;

          return (
            <article
              key={sector.id}
              id={sector.id}
              data-stack-card
              className={`
                relative
                min-h-[92vh]
                ${desktopStackClasses[index]}
              `}
              style={{
                zIndex: 10 + index * 10,
              }}
            >
              {/* STICKY CARD */}
              <div
                data-stack-panel
                className={`
                  relative
                  border-t
                  overflow-hidden
                  lg:sticky
                  lg:min-h-[100svh]
                  ${sector.theme}
                `}
                style={{
                  top: `${desktopTop}px`,
                }}
              >
                {/* MAIN CARD LAYOUT */}
                <div
                  className="
                    grid
                    min-h-[760px]
                    grid-cols-1
                    lg:min-h-[100svh]
                    lg:grid-cols-12
                  "
                >
                  {/* LEFT CONTENT */}
                  <div
                    data-stack-content
                    className="
                      relative
                      flex
                      flex-col
                      justify-center
                      px-6
                      pb-12
                      pt-24
                      sm:px-10
                      sm:pb-14
                      sm:pt-28
                      lg:col-span-6
                      lg:px-14
                      lg:py-28
                      xl:px-16
                    "
                  >
                    <div className="max-w-[520px]">
                      {/* Eyebrow */}
                      <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-champagne">
                        {sector.tag}
                      </span>

                      {/* Title */}
                      <h3 className="mt-3 text-[clamp(2.6rem,3.8vw,4.5rem)] font-heading font-normal leading-[1.05] tracking-[-0.035em] text-[#17231F]">
                        {sector.title}
                      </h3>

                      {/* Sizes */}
                      <div className="mt-6 flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.14em] text-black/40">
                          Sector Spec:
                        </span>
                        <span className="text-xs font-heading font-medium tracking-wide text-ink/80">
                          {sector.sizes}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="mt-6 font-sans text-[15px] leading-[1.8] text-black/65 lg:text-[16px]">
                        {sector.description}
                      </p>

                      {/* CTA */}
                      <Link
                        href={sector.linkHref}
                        className="
                          group
                          mt-8
                          inline-flex
                          items-center
                          gap-3
                          rounded-full
                          bg-[#12110F]
                          px-6
                          py-3
                          text-[10.5px]
                          font-sans
                          font-semibold
                          uppercase
                          tracking-[0.16em]
                          text-white
                          transition-all
                          duration-300
                          hover:bg-[#8C7A58]
                        "
                      >
                        <span>{sector.linkText}</span>
                        <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>

                    {/* Massive Watermark Number */}
                    <span
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        bottom-4
                        right-8
                        hidden
                        select-none
                        font-heading
                        text-[180px]
                        font-normal
                        leading-none
                        tracking-[-0.08em]
                        text-black/[0.03]
                        xl:block
                      "
                    >
                      {sector.number}
                    </span>
                  </div>

                  {/* RIGHT MEDIA (Main Visual + Side Stack) */}
                  <div
                    data-stack-gallery
                    className="
                      relative
                      grid
                      min-h-[520px]
                      grid-cols-12
                      overflow-hidden
                      lg:col-span-6
                      lg:min-h-full
                    "
                  >
                    {/* PRIMARY HERO IMAGE */}
                    <div
                      className="
                        group
                        relative
                        col-span-12
                        min-h-[380px]
                        overflow-hidden
                        bg-black/5
                        sm:col-span-8
                        sm:min-h-[520px]
                        lg:min-h-full
                      "
                    >
                      <Image
                        src={sector.images[0]}
                        alt={`${sector.title} primary view`}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 40vw"
                        className="
                          object-cover
                          transition-transform
                          duration-[1600ms]
                          ease-out
                          group-hover:scale-[1.035]
                        "
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                    </div>

                    {/* SIDE IMAGE GRID */}
                    <div
                      className="
                        col-span-12
                        grid
                        grid-cols-3
                        gap-[2px]
                        sm:col-span-4
                        sm:grid-cols-1
                      "
                    >
                      {sector.images.slice(1).map((image, imageIndex) => (
                        <div
                          key={`${sector.id}-img-${imageIndex}`}
                          className="
                            group
                            relative
                            min-h-[150px]
                            overflow-hidden
                            bg-black/5
                            sm:min-h-[172px]
                            lg:min-h-0
                          "
                        >
                          <Image
                            src={image}
                            alt={`${sector.title} view ${imageIndex + 2}`}
                            fill
                            sizes="(max-width: 640px) 33vw, (max-width: 1024px) 34vw, 15vw"
                            className="
                              object-cover
                              transition-transform
                              duration-[1600ms]
                              ease-out
                              group-hover:scale-[1.06]
                            "
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
