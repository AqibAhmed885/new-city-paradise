"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import gsap from "gsap";

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
    linkText: "Inquire About Awami Block",
    linkHref: "/contact",
  },
];

export default function Communities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  const activeCommunity = communities[activeIndex];

  useEffect(() => {
    if (!galleryRef.current) return;

    const ctx = gsap.context(() => {
      const images =
        galleryRef.current?.querySelectorAll("[data-gallery-item]");

      if (!images) return;

      gsap.fromTo(
        images,
        {
          opacity: 0,
          y: 22,
          scale: 1.02,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          stagger: 0.08,
          ease: "power3.out",
        }
      );
    }, galleryRef);

    return () => ctx.revert();
  }, [activeIndex]);

  return (
    <section
      id="plots-overview"
      className="
        relative
        overflow-hidden
        bg-white
        py-10
        text-ink
        sm:py-12
        lg:py-14
        xl:py-16
      "
    >

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          xl:px-4
        "
      >
        {/* ========================================= */}
        {/* SECTION INTRO */}
        {/* ========================================= */}

        <div
          className="
            mb-4
            grid
            grid-cols-1
            gap-8
            pb-12
            lg:grid-cols-12
            lg:items-end
            lg:gap-12
          "
        >
          <div className="lg:col-span-7">
            {/* <div
              className="
                mb-5
                flex
                items-center
                gap-3
              "
            >
              <span className="h-px w-10 bg-champagne" />

              <span
                className="
                  text-[10px]
                  font-menu
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-champagne
                "
              >
                Explore New City Paradise
              </span>
            </div> */}

            {/* KEEPING PREVIOUS HEADING */}
            <h2
              className="
                capitalize
                text-[clamp(2.4rem,3.2vw,4rem)]
                font-normal
                leading-[1.05]
                tracking-[-0.04em]
                text-ink
              "
            >
              Find the right place
              <br />

              <span
                className="
                  font-light
                  italic
                  text-champagne
                "
              >
                for your future.
              </span>
            </h2>
          </div>

          {/* <div
            className="
              lg:col-span-5
              lg:pb-2
            "
          >
            <p
              className="
                max-w-[520px]
                font-serif
                text-[15px]
                leading-[1.85]
                text-black/60
                sm:text-[16px]
              "
            >
              Explore residential, commercial and community-focused
              opportunities within New City Paradise — thoughtfully planned
              around connectivity, lifestyle and long-term value.
            </p>
          </div> */}
        </div>

        {/* ========================================= */}
        {/* ACCORDION + GALLERY */}
        {/* ========================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-12
            lg:grid-cols-12
            lg:gap-14
            xl:gap-20
          "
        >
          {/* ========================================= */}
          {/* LEFT SIDE */}
          {/* ========================================= */}

          <div
            className="
              lg:col-span-5
            "
          >
            <div className="border-t border-black/15">
              {communities.map((community, index) => {
                const isActive = index === activeIndex;

                return (
                  <div
                    key={community.id}
                    className="
                      border-b
                      border-black/15
                    "
                  >
                    {/* HEADER ONLY WHEN CLOSED */}

                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-expanded={isActive}
                      aria-controls={`${community.id}-panel`}
                      className="
                        group
                        flex
                        w-full
                        items-center
                        justify-between
                        gap-5
                        py-7
                        text-left
                        sm:py-4
                      "
                    >
                      <div
                        className="
                          flex
                          min-w-0
                          items-start
                          gap-2
                        "
                      >
                        

                        <h3
                          className={`
                            text-[clamp(1.65rem,2vw,2rem)]
                            font-normal
                            leading-[1.08]
                            tracking-[-0.035em]
                            transition-all
                            duration-300

                            ${isActive
                              ? "text-ink"
                              : "text-black/45 group-hover:text-ink"
                            }
                          `}
                        >
                          {community.title}
                        </h3>
                      </div>

                      <span
                        className={`
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          transition-all
                          duration-500

                          ${isActive
                            ? "rotate-45 border-champagne bg-champagne text-white"
                            : "border-black/15 bg-transparent text-ink group-hover:border-black/50"
                          }
                        `}
                      >
                        <Plus size={17} strokeWidth={1.6} />
                      </span>
                    </button>

                    {/* ================================= */}
                    {/* OPEN CONTENT */}
                    {/* ================================= */}

                    <div
                      id={`${community.id}-panel`}
                      className={`
                        grid
                        transition-[grid-template-rows,opacity]
                        duration-500
                        ease-[cubic-bezier(.16,1,.3,1)]

                        ${isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                        }
                      `}
                    >
                      <div className="overflow-hidden">
                        <div
                          className="
                            pb-9
                            pl-[6px]
                            sm:pl-[8px]
                          "
                        >
                          {/* TAG */}

                          {/* <div
                            className="
                              mb-4
                              flex
                              items-center
                              gap-3
                            "
                          >
                            
                            <span
                              className="
                                text-[9px]
                                font-menu
                                font-semibold
                                uppercase
                                tracking-[0.12em]
                                text-black/45
                              "
                            >
                              {community.tag}
                            </span>
                          </div> */}

                          {/* SIZES */}

                          <div
                            className="
                              mb-2
                              inline-flex
                              flex-wrap
                              items-center
                              gap-2
                              
                              py-2

                              text-xs
                            "
                          >
                            <span className="text-black/50">
                              Plot sizes
                            </span>

                            <span
                              className="
                                h-3
                                w-px
                                bg-black/15
                              "
                            />

                            <strong
                              className="
                                font-menu
                                font-medium
                                text-ink
                              "
                            >
                              {community.sizes}
                            </strong>
                          </div>

                          {/* DESCRIPTION */}

                          <p
                            className="
                              max-w-[520px]
                              font-serif
                              text-[14px]
                              leading-[1.85]
                              text-black/60
                              sm:text-[15px]
                            "
                          >
                            {community.description}
                          </p>

                          {/* CTA */}

                          <Link
                            href={community.linkHref}
                            className="
                              group/link
                              mt-7
                              inline-flex
                              items-center
                              gap-4

                              text-[10px]
                              font-menu
                              font-semibold
                              uppercase
                              tracking-[0.12em]
                              text-ink
                            "
                          >

                            {community.linkText}

                            <ArrowRight
                              size={14}
                              className="
                                transition-transform
                                duration-300
                                group-hover/link:translate-x-1
                              "
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ========================================= */}
          {/* RIGHT SIDE — MULTIPLE IMAGE MOSAIC */}
          {/* ========================================= */}

          <div
            className="
              lg:col-span-7
            "
          >
            <div
              className="
                lg:sticky
                lg:top-24
              "
            >
              <div
                ref={galleryRef}
                key={activeCommunity.id}
                className="
                  grid
                  grid-cols-12
                "
              >
                {/* MAIN IMAGE */}

                <div
                  data-gallery-item
                  className="
                    group
                    relative
                    col-span-4
                    row-span-1
                    min-h-[290px]
                    overflow-hidden
                    bg-black/5

                    sm:min-h-[280px]
                    lg:min-h-[380px]
                  "
                >
                  <Image
                    src={activeCommunity.images[0]}
                    alt={`${activeCommunity.title} primary view`}
                    fill
                    priority={activeIndex === 0}
                    sizes="
                      (max-width: 1024px) 70vw,
                      42vw
                    "
                    className="
                      object-cover
                      transition-transform
                      duration-[1400ms]
                      ease-out
                      group-hover:scale-[1.035]
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/35
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* Label */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      p-6
                      text-white
                      sm:p-8
                    "
                  >
                    <span
                      className="
                        mb-2
                        block
                        text-[9px]
                        font-menu
                        font-semibold
                        uppercase
                        tracking-[0.23em]
                        text-white/65
                      "
                    >
                      0{activeIndex + 1} / 03
                    </span>

                    <p
                      className="
                        font-serif
                        text-2xl
                        sm:text-3xl
                      "
                    >
                      {activeCommunity.title}
                    </p>
                  </div>
                </div>

                {/* IMAGE TWO */}

                <div
                  data-gallery-item
                  className="
                    group
                    relative
                    col-span-4
                    min-h-[190px]
                    overflow-hidden
                    bg-black/5

                    sm:min-h-[245px]
                    lg:min-h-[285px]
                  "
                >
                  <Image
                    src={activeCommunity.images[1]}
                    alt={`${activeCommunity.title} detail view`}
                    fill
                    sizes="
                      (max-width: 1024px) 30vw,
                      20vw
                    "
                    className="
                      object-cover
                      transition-transform
                      duration-[1400ms]
                      ease-out
                      group-hover:scale-105
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-black/[0.08]
                    "
                  />
                </div>

                {/* IMAGE THREE */}

                <div
                  data-gallery-item
                  className="
                    group
                    relative
                    col-span-4
                    min-h-[190px]
                    overflow-hidden
                    bg-black/5

                    sm:min-h-[245px]
                    lg:min-h-[285px]
                  "
                >
                  <Image
                    src={activeCommunity.images[2]}
                    alt={`${activeCommunity.title} architectural view`}
                    fill
                    sizes="
                      (max-width: 1024px) 30vw,
                      20vw
                    "
                    className="
                      object-cover
                      transition-transform
                      duration-[1400ms]
                      ease-out
                      group-hover:scale-105
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-black/[0.08]
                    "
                  />
                </div>

                {/* IMAGE FOUR */}

                <div
                  data-gallery-item
                  className="
                    group
                    relative
                    col-span-12
                    min-h-[170px]
                    overflow-hidden
                    bg-black/5
                    sm:min-h-[210px]
                  "
                >
                  <Image
                    src={activeCommunity.images[3]}
                    alt={`${activeCommunity.title} panoramic view`}
                    fill
                    sizes="
                      (max-width: 1024px) 100vw,
                      58vw
                    "
                    className="
                      object-cover
                      transition-transform
                      duration-[1400ms]
                      ease-out
                      group-hover:scale-[1.035]
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-r
                      from-black/15
                      via-transparent
                      to-transparent
                    "
                  />
                </div>
              </div>

              {/* ================================= */}
              {/* CATEGORY PROGRESS */}
              {/* ================================= */}

              {/* <div
                className="
                  mt-5
                  grid
                  grid-cols-3
                  gap-2
                "
              >
                {communities.map((community, index) => {
                  const selected = index === activeIndex;

                  return (
                    <button
                      key={community.id}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Show ${community.title}`}
                      className="
                        group
                        text-left
                      "
                    >
                      <div
                        className="
                          relative
                          h-px
                          overflow-hidden
                          bg-black/15
                        "
                      >
                        <span
                          className={`
                            absolute
                            inset-y-0
                            left-0
                            bg-champagne
                            transition-all
                            duration-500

                            ${selected
                              ? "w-full"
                              : "w-0 group-hover:w-1/3"
                            }
                          `}
                        />
                      </div>

                      <span
                        className={`
                          mt-2
                          hidden
                          text-[9px]
                          font-menu
                          uppercase
                          tracking-[0.12em]
                          transition-colors
                          sm:block

                          ${selected
                            ? "text-ink"
                            : "text-black/35"
                          }
                        `}
                      >
                        0{index + 1} &nbsp;
                        {community.title}
                      </span>
                    </button>
                  );
                })}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}