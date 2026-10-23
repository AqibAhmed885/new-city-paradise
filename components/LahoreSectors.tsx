"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LAHORE_CONFIG } from "@/lib/lahoreConfig";

gsap.registerPlugin(ScrollTrigger);

const lahoreSectors = [
  {
    id: "ravi-marina-waterfront",
    number: "01",
    tag: "SIGNATURE WATERFRONT",
    title: "Ravi Marina & Riverfront Promenade",
    sizes: "Scenic Waterfront Living",
    description:
      "Pakistan's premier riverfront promenade along the natural contours of the Ravi River. Featuring serene open-air board walks, sunset gazebos, marina leisure docks, and curated waterside dining avenues.",
    image: "/images/delivered/lahore-hero.jpg",
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
    image: "/images/garden-villa.jpg",
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
    image: "/images/arcade1.png",
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
    image: "/images/wellness-club.jpg",
    theme: "bg-[#EEF2F0]",
    linkText: "View Master Amenities",
    linkHref: "/lahore/amenities",
  },
];

export default function LahoreSectors() {
  const sectionRef = useRef<HTMLElement>(null);
  const desktopStackClasses = [
    "lg:min-h-[400vh] lg:-mb-[300vh]",
    "lg:min-h-[300vh] lg:-mb-[200vh]",
    "lg:min-h-[200vh] lg:-mb-[100vh]",
    "lg:min-h-[100vh] lg:mb-0",
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const cards = gsap.utils.toArray<HTMLElement>(
            "[data-stack-card]",
            section
          );

          cards.forEach((card) => {
            const zoomTarget = card.querySelector<HTMLElement>("[data-lahore-zoom]");
            if (!zoomTarget) return;

            gsap.fromTo(
              zoomTarget,
              {
                scale: 1,
              },
              {
                scale: 1.12,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1.2,
                },
              }
            );
          });
        }
      );

      return () => mm.revert();
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
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
                      {/* Eyebrow Tag */}
                      <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-[#8C7A58]">
                        {sector.tag}
                      </span>

                      {/* Title */}
                      <h3
                        className="
                          mt-3
                          text-[clamp(2.1rem,3.2vw,3.6rem)]
                          font-normal
                          leading-[1.02]
                          tracking-[-0.04em]
                          text-ink
                        "
                      >
                        {sector.title}
                      </h3>

                      {/* Sizes */}
                      <div className="mt-5 flex flex-wrap items-center gap-2">
                        <span className="text-[9.5px] font-sans font-semibold uppercase tracking-[0.14em] text-black/40">
                          Sector Spec:
                        </span>
                        <span className="text-[11.5px] font-heading font-medium tracking-wide text-ink/80">
                          {sector.sizes}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="mt-5 font-sans text-[14px] leading-[1.75] text-black/65 lg:text-[15px] max-w-[440px]">
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
                          py-3.5
                          text-[10px]
                          font-sans
                          font-semibold
                          uppercase
                          tracking-[0.16em]
                          text-white
                          transition-all
                          duration-300
                          hover:-translate-y-0.5
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

                  {/* RIGHT MEDIA (1 Hero Image with Scroll & Hover Zoom) */}
                  <div
                    className="
                      group
                      relative
                      min-h-[440px]
                      w-full
                      overflow-hidden
                      bg-black/5
                      sm:min-h-[560px]
                      lg:col-span-6
                      lg:min-h-full
                    "
                  >
                    <div
                      data-lahore-zoom
                      className="
                        relative
                        h-full
                        w-full
                        overflow-hidden
                        will-change-transform
                      "
                    >
                      <Image
                        src={sector.image}
                        alt={`${sector.title} architectural view`}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="
                          object-cover
                          transition-transform
                          duration-[1200ms]
                          ease-out
                          group-hover:scale-[1.08]
                        "
                      />
                    </div>

                    {/* Subtle Cinematic Gradient Veil */}
                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/50
                        via-black/10
                        to-transparent
                        transition-opacity
                        duration-700
                        group-hover:from-black/60
                      "
                    />

                    {/* Media Label Overlay */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        bottom-8
                        left-8
                        right-8
                        z-10
                        text-white
                        transition-transform
                        duration-500
                        group-hover:-translate-y-1
                      "
                    >
                      <span
                        className="
                          block
                          text-[9px]
                          font-sans
                          font-semibold
                          uppercase
                          tracking-[0.22em]
                          text-white/70
                        "
                      >
                        New City Paradise Lahore · {sector.tag}
                      </span>

                      <p
                        className="
                          mt-1.5
                          font-serif
                          text-2xl
                          tracking-[-0.02em]
                          text-white
                          sm:text-3xl
                        "
                      >
                        {sector.title}
                      </p>
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
