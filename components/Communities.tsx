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
    tag: "VERIFIED PLOTS",
    title: "Residential Plots",
    sizes: "3.5 Marla · 5 Marla · 10 Marla · 1 Kanal",
    description:
      "Master-planned residential plots configured along tree-lined avenues with underground utilities and parkland vistas.",
    image: "/images/isla.jpg",
    theme: "bg-[#FBF9F4]",
    linkText: "View Masterplan",
    linkHref: "/masterplan",
  },
  {
    id: "commercial-plots",
    number: "02",
    tag: "COMMERCIAL AXIS",
    title: "Commercial Plots",
    sizes: "2.5 Marla · 4 Marla · 7 Marla",
    description:
      "Prime retail and corporate hubs strategically commanding high-visibility frontage along the 330-ft boulevard.",
    image: "/images/arcade1.png",
    theme: "bg-[#F5F2EC]",
    linkText: "Explore Commercial",
    linkHref: "/masterplan",
  },
  {
    id: "awami-block",
    number: "03",
    tag: "COMMUNITY SECTOR",
    title: "Awami Block",
    sizes: "4 Marla · 6 Marla Planned Plots",
    description:
      "A thoughtfully self-contained community sector prioritizing verdant neighborhood parks, mosques, and family convenience.",
    image: "/images/garden-villa.jpg",
    theme: "bg-[#F1F3EF]",
    linkText: "Inquire Awami Block",
    linkHref: "/contact",
  },
  {
    id: "l-prime-block",
    number: "04",
    tag: "ELITE SECTOR",
    title: "L Prime Block",
    sizes: "Signature Residential Sector",
    description:
      "An exclusive enclave sculpted around dedicated green parks, wide carpeted avenues, and enduring privacy.",
    image: "/images/wellness-club.jpg",
    theme: "bg-[#F7F1E9]",
    linkText: "View District Specs",
    linkHref: "/masterplan",
  },
  {
    id: "waterfront-district",
    number: "05",
    tag: "RIVERSIDE PRECINCT",
    title: "Waterfront District",
    sizes: "Riverside Residential Sector",
    description:
      "Tranquil waterside residences along the Haro River contours, blending scenic promenades with lush natural horizons.",
    image: "/images/amenities/water-front.jpg",
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

          cards.forEach((card) => {
            const zoomTarget = card.querySelector<HTMLElement>("[data-community-zoom]");
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
                          text-[clamp(2.1rem,3.2vw,3.6rem)]
                          font-normal
                          leading-[1.02]
                          tracking-[-0.04em]
                          text-ink
                        "
                      >
                        {community.title}
                      </h3>

                      {/* SIZES */}

                      <div
                        className="
                          mt-5
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
                            text-[11.5px]
                            font-menu
                            font-medium
                            text-ink
                            sm:text-[12px]
                          "
                        >
                          {community.sizes}
                        </span>
                      </div>

                      {/* DESCRIPTION */}

                      <p
                        className="
                          mt-5
                          max-w-[440px]
                          font-sans
                          text-[14px]
                          leading-[1.75]
                          text-black/65
                          lg:text-[15px]
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
                  {/* RIGHT MEDIA (1 Hero Image with Scroll & Hover Zoom) */}
                  {/* ===================================== */}

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
                      data-community-zoom
                      className="
                        relative
                        h-full
                        w-full
                        overflow-hidden
                        will-change-transform
                      "
                    >
                      <Image
                        src={community.image}
                        alt={`${community.title} architectural view`}
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

                    {/* SUBTLE CINEMATIC GRADIENT VEIL */}
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

                    {/* MEDIA LABEL OVERLAY */}
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
                          font-menu
                          font-semibold
                          uppercase
                          tracking-[0.22em]
                          text-white/70
                        "
                      >
                        New City Paradise · {community.tag}
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
