"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const communities = [
  {
    id: "residential-plots",
    number: "01",
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
    theme: "bg-[#FBF9F4]",
    linkText: "View Masterplan & Plots",
    linkHref: "/masterplan",
  },
  {
    id: "commercial-plots",
    number: "02",
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
    theme: "bg-[#F5F2EC]",
    linkText: "Explore Commercial Sectors",
    linkHref: "/masterplan",
  },
  {
    id: "awami-block",
    number: "03",
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
    theme: "bg-[#F1F3EF]",
    linkText: "Inquire About Awami Block",
    linkHref: "/contact",
  },
  {
    id: "l-prime-block",
    number: "04",
    tag: "L PRIME BLOCK",
    title: "L Prime Block",
    sizes: "Elite Residential Sector",
    description:
      "Sculpted around dedicated green parks, wide carpeted avenues, and underground utilities — an elite residential sector offering an enduring standard of privacy and refined modern living.",
    images: [
      "/images/garden-villa.jpg",
      "/images/garden-villa.jpg",
      "/images/garden-villa.jpg",
      "/images/garden-villa.jpg",
    ],
    theme: "bg-[#F7F1E9]",
    linkText: "View District Specs",
    linkHref: "/masterplan",
  },
  {
    id: "waterfront-district",
    number: "05",
    tag: "WATERFRONT DISTRICT",
    title: "Water Front District",
    sizes: "Riverside Residential Sector",
    description:
      "A scenic riverside sanctuary along the natural contours of the Haro River, featuring tranquil promenades, lush green vistas, and curated leisure experiences.",
    images: [
      "/images/amenities/water-front.jpg",
      "/images/amenities/water-front.jpg",
      "/images/amenities/water-front.jpg",
      "/images/amenities/water-front.jpg",
    ],
    theme: "bg-[#EEF2F0]",
    linkText: "View District Specs",
    linkHref: "/masterplan",
  },
];

export default function Communities() {
  const sectionRef = useRef<HTMLElement>(null);
  const desktopStackClasses = [
    "lg:min-h-[500vh] lg:-mb-[400vh]",
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
          const cards =
            gsap.utils.toArray<HTMLElement>(
              "[data-stack-card]",
              section
            );

          cards.forEach((card, index) => {
            const panel =
              card.querySelector<HTMLElement>(
                "[data-stack-panel]"
              );

            if (!panel) return;

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
      id="plots-overview"
      className="
        relative
        bg-[#EDEBE6]
      "
    >
      {/* ================================================= */}
      {/* SECTION INTRO */}
      {/* ================================================= */}

      {/* <div
        className="
          relative
          z-[1]
          mx-auto
          mb-16
          px-4
          sm:px-8
          max-w-[1440px]
          text-white
          lg:mb-12
        "
      >
        <span
          className="
            mb-5
            block
            text-[10px]
            font-menu
            font-semibold
            uppercase
            tracking-[0.2em]
            text-champagne
          "
        >
          Explore New City Paradise
        </span>

        <h2
          className="
            max-w-[850px]
            text-[clamp(2.7rem,4.5vw,5.2rem)]
            font-normal
            leading-[1]

            tracking-[-0.045em]
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
      </div> */}

      {/* ================================================= */}
      {/* STACK */}
      {/* ================================================= */}

      <div
        className="
          relative
        "
      >
        {communities.map((community, index) => {
          const desktopTop = 0;

          return (
            <article
              key={community.id}
              id={community.id}
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
              {/* ========================================= */}
              {/* STICKY CARD */}
              {/* ========================================= */}

              <div
                data-stack-panel
                className={`
                  relative
                  border-t
                  overflow-hidden
                  lg:sticky
                  lg:min-h-[100svh]
                  ${community.theme}
                `}
                style={{
                  top: `${desktopTop}px`,
                }}
              >


                {/* ======================================= */}
                {/* MAIN CARD LAYOUT */}
                {/* ======================================= */}

                <div
                  className="
                    grid

                    min-h-[760px]

                    grid-cols-1

                    lg:min-h-[100svh]
                    lg:grid-cols-12
                  "
                >
                  {/* ===================================== */}
                  {/* LEFT CONTENT */}
                  {/* ===================================== */}

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
                    <div
                      className="
                        max-w-[520px]
                      "
                    >
                      {/* TITLE */}

                      <h3
                        className="
                          text-[clamp(2.8rem,4vw,5rem)]

                          font-normal

                          leading-[0.98]

                          tracking-[-0.05em]

                          text-ink
                        "
                      >
                        {community.title}
                      </h3>

                      {/* SIZES */}

                      <div
                        className="
                          mt-7

                          flex
                          flex-wrap

                          items-center

                          gap-x-3
                          gap-y-2
                        "
                      >
                        <span
                          className="
                            text-[9px]

                            font-menu
                            font-semibold

                            uppercase

                            tracking-[0.14em]

                            text-black/40
                          "
                        >
                          Plot Sizes
                        </span>

                        <span
                          className="
                            hidden

                            h-3
                            w-px

                            bg-black/15

                            sm:block
                          "
                        />

                        <span
                          className="
                            text-[12px]

                            font-menu
                            font-medium

                            text-ink

                            sm:text-[13px]
                          "
                        >
                          {community.sizes}
                        </span>
                      </div>

                      {/* DESCRIPTION */}

                      <p
                        className="
                          mt-7

                          max-w-[480px]

                          font-serif

                          text-[15px]

                          leading-[1.8]

                          text-black/60

                          lg:text-[16px]
                        "
                      >
                        {community.description}
                      </p>

                      {/* CTA */}

                      <Link
                        href={community.linkHref}
                        className="
                          group

                          mt-9

                          inline-flex

                          items-center

                          gap-4

                          rounded-lg

                          bg-[#17231F]

                          px-5
                          py-3.5

                          text-[10px]

                          font-menu
                          font-semibold

                          uppercase

                          tracking-[0.12em]

                          text-white

                          transition-all
                          duration-300

                          hover:-translate-y-0.5
                          hover:bg-champagne
                        "
                      >
                        {community.linkText}

                        <ArrowRight
                          size={14}
                          className="
                            transition-transform
                            duration-300

                            group-hover:translate-x-1
                          "
                        />
                      </Link>
                    </div>

                    {/* LARGE DECORATIVE NUMBER */}

                    <span
                      aria-hidden="true"
                      className="
                        pointer-events-none

                        absolute

                        -bottom-10
                        -left-4

                        hidden

                        font-serif

                        text-[190px]

                        leading-none

                        tracking-[-0.08em]

                        text-black/[0.025]

                        xl:block
                      "
                    >
                      {community.number}
                    </span>
                  </div>

                  {/* ===================================== */}
                  {/* RIGHT MEDIA */}
                  {/* ===================================== */}

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
                    {/* BIG IMAGE */}

                    <div
                      data-stack-image
                      className="
                        group

                        relative

                        col-span-12

                        min-h-[330px]

                        overflow-hidden

                        bg-black/5

                        sm:col-span-8
                        sm:min-h-[520px]

                        lg:min-h-full
                      "
                    >
                      <Image
                        src={community.images[0]}
                        alt={`${community.title} primary view`}
                        fill
                        priority={index === 0}
                        sizes="
                          (max-width: 640px) 100vw,
                          (max-width: 1024px) 66vw,
                          40vw
                        "
                        className="
                          object-cover

                          transition-transform

                          duration-[1600ms]

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

                          from-black/25

                          via-transparent

                          to-transparent
                        "
                      />
                    </div>

                    {/* SIDE GRID */}

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
                      {community.images
                        .slice(1)
                        .map(
                          (
                            image,
                            imageIndex
                          ) => (
                            <div
                              key={`${community.id}-image-${imageIndex}`}
                              data-stack-image
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
                                alt={`${community.title} view ${imageIndex + 2
                                  }`}
                                fill
                                sizes="
                                  (max-width: 640px) 33vw,
                                  (max-width: 1024px) 34vw,
                                  20vw
                                "
                                className="
                                  object-cover

                                  transition-transform

                                  duration-[1400ms]

                                  ease-out

                                  group-hover:scale-[1.05]
                                "
                              />

                              <div
                                className="
                                  pointer-events-none

                                  absolute
                                  inset-0

                                  bg-black/[0.05]
                                "
                              />
                            </div>
                          )
                        )}
                    </div>

                    {/* MEDIA LABEL */}

                    <div
                      className="
                        pointer-events-none

                        absolute

                        bottom-6
                        left-6

                        z-10

                        text-white
                      "
                    >
                      <span
                        className="
                          text-[9px]

                          font-menu
                          font-medium

                          uppercase

                          tracking-[0.18em]

                          text-white/65
                        "
                      >
                        New City Paradise
                      </span>

                      <p
                        className="
                          mt-1

                          font-serif

                          text-xl

                          sm:text-2xl
                        "
                      >
                        {community.title}
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
