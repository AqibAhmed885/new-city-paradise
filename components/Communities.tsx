"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
} from "react";
import {
  ArrowRight,
  Plus,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const communities = [
  {
    id: "residential-plots",
    tag: "VERIFIED PLOT SIZES",
    title: "Residential Plots",
    sizes:
      "3.5 Marla · 5 Marla · 10 Marla · 1 Kanal",
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
    sizes:
      "2.5 Marla · 4 Marla · 7 Marla",
    description:
      "High-visibility commercial sectors strategically aligned along the 330-ft grand entrance boulevard and primary arterial avenues. Optimized for corporate retail, executive offices, financial centers, and upscale retail flagships.",
    images: [
      "/images/arcade1.png",
      "/images/arcade2.png",
      "/images/arcade3.png",
      "/images/newcityarcade.png",
    ],
    linkText:
      "Explore Commercial Sectors",
    linkHref: "/masterplan",
  },

  {
    id: "awami-block",
    tag: "COMMUNITY SECTOR",
    title: "Awami Block",
    sizes:
      "4 Marla · 6 Marla Planned Plots",
    description:
      "A dedicated community-oriented sector thoughtfully planned with essential neighborhood amenities, community mosques, primary healthcare units, family parks, and water filtration facilities.",
    images: [
      "/images/garden-villa.jpg",
      "/images/wellness-club.jpg",
      "/images/learning-campus.jpg",
      "/images/grand-estate.jpg",
    ],
    linkText:
      "Inquire About Awami Block",
    linkHref: "/contact",
  },
];

export default function Communities() {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const activeIndexRef = useRef(0);

  const sectionRef =
    useRef<HTMLElement>(null);

  const galleryRef =
    useRef<HTMLDivElement>(null);

  const activeCommunity =
    communities[activeIndex];

  /*
   * ==========================================
   * DESKTOP SCROLL SEQUENCE
   * ==========================================
   */
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const trigger =
            ScrollTrigger.create({
              trigger: section,

              start: "top top",

              end: "bottom bottom",

              scrub: true,

              invalidateOnRefresh: true,

              onUpdate: (self) => {
                /*
                 * Divide section scroll into
                 * 3 equal accordion states.
                 */
                const progress =
                  self.progress;

                const index = Math.min(
                  communities.length - 1,
                  Math.floor(
                    progress *
                    communities.length
                  )
                );

                /*
                 * Prevent unnecessary React
                 * state updates on every frame.
                 */
                if (
                  index !==
                  activeIndexRef.current
                ) {
                  activeIndexRef.current =
                    index;

                  setActiveIndex(index);
                }
              },
            });

          return () => {
            trigger.kill();
          };
        }
      );

      return () => mm.revert();
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  /*
   * ==========================================
   * GALLERY CHANGE ANIMATION
   * ==========================================
   */
  useEffect(() => {
    const gallery =
      galleryRef.current;

    if (!gallery) return;

    const items =
      gallery.querySelectorAll(
        "[data-gallery-item]"
      );

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 20,
          scale: 1.025,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,

          duration: 0.7,

          stagger: 0.07,

          ease: "power3.out",

          clearProps:
            "transform,opacity",
        }
      );
    }, gallery);

    return () => ctx.revert();
  }, [activeIndex]);

  /*
   * Manual accordion click still works.
   */
  const handleAccordionClick = (
    index: number
  ) => {
    activeIndexRef.current = index;
    setActiveIndex(index);
  };

  return (
    <section
      ref={sectionRef}
      id="plots-overview"
      /*
       * 3 items = 300vh.
       *
       * Sticky content remains visible while
       * user moves through 3 scroll states.
       */
      className="
        relative
        bg-white
        text-ink

        lg:h-[300vh]
      "
    >
      {/* ===================================== */}
      {/* STICKY VIEWPORT */}
      {/* ===================================== */}

      <div
        className="
          relative

          py-12

          sm:py-14

          lg:sticky
          lg:top-0
          lg:flex
          lg:min-h-screen
          lg:items-center
          lg:overflow-hidden
          lg:py-8

          xl:py-10
        "
      >
        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[1440px]

            px-4

            sm:px-6

            lg:px-8

            xl:px-4
          "
        >
          {/* ================================= */}
          {/* HEADING */}
          {/* ================================= */}

          <div
            className="
              mb-8

              lg:mb-10
            "
          >
            <h2
              className="
                max-w-[760px]

                text-[clamp(2.4rem,3.2vw,4rem)]

                font-normal

                capitalize

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

          {/* ================================= */}
          {/* ACCORDION + GALLERY */}
          {/* ================================= */}

          <div
            className="
              grid
              grid-cols-1

              gap-10

              lg:grid-cols-12
              lg:items-start
              lg:gap-12

              xl:gap-16
            "
          >
            {/* ================================ */}
            {/* LEFT ACCORDION */}
            {/* ================================ */}

            <div
              className="
                lg:col-span-5
              "
            >
              <div
                className="
                  border-t
                  border-black/15
                "
              >
                {communities.map(
                  (community, index) => {
                    const isActive =
                      activeIndex === index;

                    return (
                      <div
                        key={
                          community.id
                        }
                        className="
                          border-b
                          border-black/15
                        "
                      >
                        {/* HEADER */}

                        <button
                          type="button"
                          onClick={() =>
                            handleAccordionClick(
                              index
                            )
                          }
                          aria-expanded={
                            isActive
                          }
                          aria-controls={`${community.id}-panel`}
                          className="
                            group

                            flex
                            w-full

                            items-center
                            justify-between

                            gap-5

                            py-5

                            text-left

                            lg:py-5

                            xl:py-6
                          "
                        >
                          <div
                            className="
                              flex
                              min-w-0
                              items-center
                              gap-4
                            "
                          >
                            {/* NUMBER */}

                            <span
                              className={`
                                text-[9px]
                                font-menu
                                font-semibold

                                tracking-[0.18em]

                                transition-colors
                                duration-300

                                ${isActive
                                  ? "text-champagne"
                                  : "text-black/30"
                                }
                              `}
                            >
                              0
                              {index +
                                1}
                            </span>

                            {/* TITLE */}

                            <h3
                              className={`
                                text-[clamp(1.5rem,1.8vw,2rem)]

                                font-normal

                                leading-[1.08]

                                tracking-[-0.035em]

                                transition-colors
                                duration-300

                                ${isActive
                                  ? "text-ink"
                                  : "text-black/45 group-hover:text-ink"
                                }
                              `}
                            >
                              {
                                community.title
                              }
                            </h3>
                          </div>

                          {/* PLUS */}

                          <span
                            className={`
                              flex
                              h-9
                              w-9
                              shrink-0

                              items-center
                              justify-center

                              rounded-full

                              border

                              transition-all
                              duration-500

                              ${isActive
                                ? "rotate-45 border-champagne bg-champagne text-white"
                                : "border-black/15 text-ink group-hover:border-black/40"
                              }
                            `}
                          >
                            <Plus
                              size={
                                15
                              }
                              strokeWidth={
                                1.6
                              }
                            />
                          </span>
                        </button>

                        {/* ======================= */}
                        {/* ACCORDION CONTENT */}
                        {/* ======================= */}

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
                          <div
                            className="
                              overflow-hidden
                            "
                          >
                            <div
                              className="
                                pb-6
                                pl-[30px]

                                sm:pl-[34px]

                                lg:pb-7
                              "
                            >
                              {/* TAG */}

                              <span
                                className="
                                  mb-2
                                  block

                                  text-[9px]

                                  font-menu
                                  font-semibold

                                  uppercase

                                  tracking-[0.13em]

                                  text-champagne
                                "
                              >
                                {
                                  community.tag
                                }
                              </span>

                              {/* SIZE */}

                              <div
                                className="
                                  mb-3

                                  flex
                                  flex-wrap
                                  items-center

                                  gap-2

                                  text-xs
                                "
                              >
                                <span
                                  className="
                                    text-black/45
                                  "
                                >
                                  Plot
                                  sizes
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
                                  {
                                    community.sizes
                                  }
                                </strong>
                              </div>

                              {/* DESCRIPTION */}

                              <p
                                className="
                                  max-w-[500px]

                                  font-serif

                                  text-[13px]

                                  leading-[1.75]

                                  text-black/60

                                  xl:text-[14px]
                                "
                              >
                                {
                                  community.description
                                }
                              </p>

                              {/* CTA */}

                              <Link
                                href={
                                  community.linkHref
                                }
                                className="
                                  group/link

                                  mt-5

                                  inline-flex

                                  items-center

                                  gap-3

                                  text-[10px]

                                  font-menu
                                  font-semibold

                                  uppercase

                                  tracking-[0.12em]

                                  text-ink
                                "
                              >
                                {
                                  community.linkText
                                }

                                <ArrowRight
                                  size={
                                    13
                                  }
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
                  }
                )}
              </div>

              {/* SCROLL PROGRESS */}

              <div
                className="
                  mt-5
                  flex
                  items-center
                  gap-3
                "
              >
                {communities.map(
                  (_, index) => (
                    <div
                      key={
                        index
                      }
                      className="
                        relative

                        h-px
                        flex-1

                        overflow-hidden

                        bg-black/10
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

                          ${index <=
                            activeIndex
                            ? "w-full"
                            : "w-0"
                          }
                        `}
                      />
                    </div>
                  )
                )}
              </div>
            </div>

            {/* ================================ */}
            {/* RIGHT IMAGE MOSAIC */}
            {/* ================================ */}

            <div
              className="
                lg:col-span-7
              "
            >
              <div
                ref={galleryRef}
                key={
                  activeCommunity.id
                }
                className="
                  grid
                  grid-cols-12

                  gap-[3px]

                  overflow-hidden

                  rounded-[18px]
                "
              >
                {/* IMAGE 1 */}

                <div
                  data-gallery-item
                  className="
                    group

                    relative

                    col-span-7

                    min-h-[280px]

                    overflow-hidden

                    bg-black/5

                    sm:min-h-[360px]

                    lg:min-h-[390px]

                    xl:min-h-[430px]
                  "
                >
                  <Image
                    src={
                      activeCommunity
                        .images[0]
                    }
                    alt={`${activeCommunity.title} primary view`}
                    fill
                    priority={
                      activeIndex ===
                      0
                    }
                    sizes="
                      (max-width: 1024px) 60vw,
                      35vw
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

                  {/* IMAGE TITLE */}

                  <div
                    className="
                      absolute

                      bottom-0
                      left-0

                      p-5

                      text-white

                      sm:p-6
                    "
                  >
                    <span
                      className="
                        mb-1
                        block

                        text-[9px]

                        font-menu

                        uppercase

                        tracking-[0.2em]

                        text-white/60
                      "
                    >
                      0
                      {activeIndex +
                        1}{" "}
                      / 03
                    </span>

                    <p
                      className="
                        font-serif

                        text-xl

                        sm:text-2xl
                      "
                    >
                      {
                        activeCommunity.title
                      }
                    </p>
                  </div>
                </div>

                {/* IMAGE 2 */}

                <div
                  data-gallery-item
                  className="
                    group

                    relative

                    col-span-5

                    min-h-[280px]

                    overflow-hidden

                    bg-black/5

                    sm:min-h-[360px]

                    lg:min-h-[390px]

                    xl:min-h-[430px]
                  "
                >
                  <Image
                    src={
                      activeCommunity
                        .images[1]
                    }
                    alt={`${activeCommunity.title} secondary view`}
                    fill
                    sizes="
                      (max-width: 1024px) 40vw,
                      25vw
                    "
                    className="
                      object-cover

                      transition-transform

                      duration-[1400ms]

                      ease-out

                      group-hover:scale-[1.04]
                    "
                  />
                </div>

                {/* IMAGE 3 */}

                <div
                  data-gallery-item
                  className="
                    group

                    relative

                    col-span-5

                    min-h-[180px]

                    overflow-hidden

                    bg-black/5

                    sm:min-h-[220px]

                    lg:min-h-[230px]
                  "
                >
                  <Image
                    src={
                      activeCommunity
                        .images[2]
                    }
                    alt={`${activeCommunity.title} architectural view`}
                    fill
                    sizes="
                      (max-width: 1024px) 40vw,
                      25vw
                    "
                    className="
                      object-cover

                      transition-transform

                      duration-[1400ms]

                      ease-out

                      group-hover:scale-[1.04]
                    "
                  />
                </div>

                {/* IMAGE 4 */}

                <div
                  data-gallery-item
                  className="
                    group

                    relative

                    col-span-7

                    min-h-[180px]

                    overflow-hidden

                    bg-black/5

                    sm:min-h-[220px]

                    lg:min-h-[230px]
                  "
                >
                  <Image
                    src={
                      activeCommunity
                        .images[3]
                    }
                    alt={`${activeCommunity.title} panoramic view`}
                    fill
                    sizes="
                      (max-width: 1024px) 60vw,
                      35vw
                    "
                    className="
                      object-cover

                      transition-transform

                      duration-[1400ms]

                      ease-out

                      group-hover:scale-[1.035]
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}