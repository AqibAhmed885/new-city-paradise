"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface DeliveredProject {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  location: string;
  highlights: string;
  image: string;
  status: string;
}

export const DELIVERED_PROJECTS: DeliveredProject[] = [
  {
    id: "new-city-arcade",
    number: "01",
    title: "New City Arcade",
    category: "Commercial & Cultural Landmark",
    tagline: "The Downtown of the Community",
    description:
      "Mediating between the Commercial and Civic/Culture zones, New City Arcade is the vibrant ‘downtown’ of the community. It proudly features the world’s tallest indoor waterfall within its monumental architectural atrium.",
    location: "Main Commercial Boulevard, New City",
    highlights: "World's Tallest Indoor Waterfall · Premium Retail & Dining",
    image: "/images/delivered/nca.png",
    status: "Delivered & Operational",
  },
  {
    id: "nchp-phase-01",
    number: "02",
    title: "New City Housing Project Phase-01",
    category: "Master-Planned Community",
    tagline: "45-Year Legacy of Excellence",
    description:
      "New City Housing is one of the largest and most respected developers in Pakistan — an industry titan with an illustrious legacy spanning over 45 years of delivering top-tier residential developments.",
    location: "Wah Cantt & G.T Road Corridor",
    highlights: "Fully Developed Residential Infrastructure · 100% Delivered",
    image: "/images/delivered/phase1.png",
    status: "Delivered & Inhabited",
  },
  {
    id: "nchp-phase-02",
    number: "03",
    title: "New City Housing Project Phase-02",
    category: "Modern Residential Extension",
    tagline: "Expanding Modern Horizons",
    description:
      "Continuing the benchmark of quality, Phase-02 offers state-of-the-art living spaces, underground utilities, lush green parks, and seamless modern lifestyle infrastructure with timeless architectural execution.",
    location: "Wah Cantt & Motorway Link",
    highlights: "Lush Green Parks · Modern Commercial Hubs · Rapid Possession",
    image: "/images/delivered/phase2.png",
    status: "Delivered & Flourishing",
  },
  {
    id: "new-city-paradise-islamabad",
    number: "04",
    title: "New City Paradise - Islamabad",
    category: "Flagship Waterfront Megaproject",
    tagline: "Life Finds Its Inspiration",
    description:
      "Where life finds its inspiration amidst shimmering nature. Strategically located on Burhan Interchange (M-1 Motorway CPEC Route and G.T Road), offering PHATA-approved 4,256 Kanal master-planned excellence.",
    location: "Burhan Interchange, M-1 CPEC Route",
    highlights: "PHATA Approved · 330 ft. Main Boulevard · 4,256 Kanals",
    image: "/images/delivered/islamabad.png",
    status: "Under Active Rapid Delivery",
  },
  {
    id: "new-city-paradise-lahore",
    number: "05",
    title: "New City Paradise - Lahore",
    category: "RUDA Approved Urban Gateway",
    tagline: "The Future of Smart Urban Living",
    description:
      "Situated along the prominent RUDA development corridor, New City Paradise Lahore introduces sustainable, technology-infused urban living with prime connectivity across Lahore's principal road networks.",
    location: "Main Ring Road Corridor, Lahore",
    highlights: "RUDA Approved · Smart City Infrastructure · Prime Connectivity",
    image: "/images/delivered/lahore-hero.jpg",
    status: "Master-Planned Development",
  },
  {
    id: "business-district-arcade",
    number: "06",
    title: "The Downtown Commercial Boulevard",
    category: "High-Street Corporate Retail",
    tagline: "Corporate & Lifestyle Epicenter",
    description:
      "An upscale commercial destination seamlessly connecting multi-brand retail flagships, corporate executive suites, open-air pedestrian promenades, and civic cultural entertainment avenues.",
    location: "Downtown Civic Zone",
    highlights: "High-Street Retail · Pedestrian Promenades · Prime Footfall",
    image: "/images/delivered/lahore-intro.jpg",
    status: "Delivered Infrastructure",
  },
];

export default function PropertyShowcase() {
  const containerRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const shimmerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);

  const [activeIdx, setActiveIdx] = useState(0);
  const activeIdxRef = useRef(0);

  // Animate content smoothly on project index change
  useEffect(() => {
    if (!contentWrapperRef.current) return;

    gsap.fromTo(
      contentWrapperRef.current,
      {
        opacity: 0,
        y: 14,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        clearProps: "transform,opacity",
      }
    );
  }, [activeIdx]);

  useEffect(() => {
    const section = containerRef.current;
    const frame = frameRef.current;
    if (!section || !frame) return;

    const total = DELIVERED_PROJECTS.length;

    const ctx = gsap.context(() => {
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const p = self.progress;

          // Directly update GPU-accelerated progress bar & shimmer without re-rendering React
          if (progressBarRef.current) {
            progressBarRef.current.style.transform = `scaleX(${p})`;
          }

          if (shimmerRef.current) {
            const lightOffset = (p - 0.5) * 60;
            shimmerRef.current.style.transform = `translate3d(${lightOffset}px, 0, 0)`;
          }

          // Guard active slide state updates so React only renders when the index changes
          const rawIdx = Math.min(total - 1, Math.floor(p * total));
          if (rawIdx !== activeIdxRef.current) {
            activeIdxRef.current = rawIdx;
            setActiveIdx(rawIdx);
          }
        },
      });

      triggerRef.current = trigger;
    }, section);

    // Refresh after next layout frame to sync with Lenis
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(refreshTimer);
      triggerRef.current = null;
      ctx.revert();
    };
  }, []);

  const selectProject = useCallback((index: number) => {
    activeIdxRef.current = index;
    setActiveIdx(index);

    const trigger = triggerRef.current;
    const total = DELIVERED_PROJECTS.length;
    const targetProgress = (index + 0.5) / total;

    if (trigger && typeof trigger.start === "number" && typeof trigger.end === "number") {
      const targetScroll = trigger.start + (trigger.end - trigger.start) * targetProgress;
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    } else if (containerRef.current) {
      const box = containerRef.current.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const distance = containerRef.current.offsetHeight - window.innerHeight;
      window.scrollTo({
        top: box.top + scrollY + Math.max(0, distance * targetProgress),
        behavior: "smooth",
      });
    }
  }, []);

  const current = DELIVERED_PROJECTS[activeIdx] || DELIVERED_PROJECTS[0];

  return (
    <section
      ref={containerRef}
      id="delivered-projects"
      aria-labelledby="delivered-projects-heading"
      className="relative z-20 bg-white text-ink select-none"
      style={{ height: "560vh" }}
    >
      {/* STICKY CINEMATIC FRAME CONTAINER */}
      <div
        ref={frameRef}
        className="sticky top-0 h-screen w-full flex flex-col justify-start pt-3 sm:pt-7 pb-3 sm:pb-6 px-2.5 sm:px-8 lg:px-12 overflow-hidden bg-white"
      >
        {/* TOP SECTION HEADING: "Our Delivered Projects" */}
        <div className="w-full text-center max-w-4xl mx-auto shrink-0 mb-2 sm:mb-4">
          <p className="eyebrow text-champagne text-[9px] sm:text-xs uppercase tracking-[0.25em] font-semibold">
            Projects · New City Portfolio
          </p>
          <h2
            id="delivered-projects-heading"
            className="display text-[clamp(1.4rem,2.8vw,2.5rem)] leading-[1.05] tracking-tight text-ink mt-0.5 sm:mt-1"
          >
            Our Delivered <br className="hidden sm:inline" />
            <span className="italic text-champagne">Projects.</span>
          </h2>
        </div>

        {/* CINEMATIC ESSENCE CARD */}
        <div className="relative mx-auto w-full max-w-[1600px] flex-1 min-h-0 flex items-stretch justify-center pb-1 sm:pb-0">
          <div className="relative w-full h-full sm:max-h-[74vh] sm:aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-2xl bg-white shadow-2xl border border-black/10 [box-shadow:0_25px_70px_rgba(18,17,15,0.12),0_0_0_1px_rgba(182,155,108,0.2)]">
            
            {/* BACKGROUND PROJECT IMAGES CROSS-FADE */}
            <div className="absolute inset-0 z-0">
              {DELIVERED_PROJECTS.map((project, idx) => (
                <figure
                  key={project.id}
                  aria-hidden={idx !== activeIdx}
                  className={`absolute inset-0 transition-opacity duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                    idx === activeIdx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 768px) 100vw, 1600px"
                    className="object-cover object-center scale-[1.02] transition-transform duration-[2.2s] ease-out"
                  />
                  {/* Subtle photographic lens contrast gradients */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-black/30 sm:to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-black/40" />
                </figure>
              ))}
            </div>

            {/* PRISMATIC LIGHT REFRACTION STREAK (Glass Shimmer) */}
            <div
              ref={shimmerRef}
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-[44%] z-20 opacity-35 transition-transform duration-300 ease-out will-change-transform"
              style={{
                background:
                  "linear-gradient(107deg, transparent 43%, rgba(231,199,139,0.08) 49%, rgba(249,232,197,0.22) 50%, rgba(172,191,200,0.08) 50.4%, transparent 53%)",
                transform: "translate3d(0, 0, 0)",
              }}
            />

            {/* EDITORIAL OVERLAY COPY: PROJECT DETAILS */}
            <div className="relative z-30 flex h-full w-full flex-col justify-center items-center sm:items-start text-center sm:text-left p-4 sm:p-8 lg:p-12 max-w-xl mx-auto sm:mx-0 text-white overflow-y-auto no-scrollbar pb-16 sm:pb-20">
              <div ref={contentWrapperRef} className="space-y-2.5 sm:space-y-3.5 flex flex-col items-center sm:items-start max-w-md">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
                  <p className="eyebrow text-champagne text-[9px] sm:text-xs uppercase tracking-[0.25em] font-semibold">
                    {current.category}
                  </p>
                </div>

                {/* Card Title */}
                <h3 className="display text-[clamp(1.4rem,3.2vw,2.75rem)] leading-[1.05] tracking-tight text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.85)]">
                  {current.title}
                </h3>

                <p className="text-xs sm:text-sm md:text-base text-[#f5f1eb]/90 leading-relaxed max-w-md drop-shadow-md line-clamp-3 sm:line-clamp-4">
                  {current.description}
                </p>

                {/* Location & Highlights Specs */}
                <div className="grid grid-cols-2 gap-4 py-2 sm:py-3.5 border-y border-white/20 w-full max-w-sm mt-1">
                  <div className="text-center sm:text-left">
                    <span className="text-[9px] sm:text-[10px] font-menu uppercase tracking-wider text-white/60">
                      Location
                    </span>
                    <p className="font-serif text-xs sm:text-sm md:text-base text-white font-medium mt-0.5 line-clamp-2">
                      {current.location}
                    </p>
                  </div>
                  <div className="border-l border-white/20 pl-3 sm:pl-4 text-center sm:text-left">
                    <span className="text-[9px] sm:text-[10px] font-menu uppercase tracking-wider text-white/60">
                      Status
                    </span>
                    <p className="font-serif text-xs sm:text-sm md:text-base text-champagne font-medium mt-0.5 line-clamp-2">
                      {current.status}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING GLASS SWITCHER TABS */}
            <div
              role="group"
              aria-label="Our Delivered Projects"
              className="absolute left-3 right-3 sm:left-auto sm:right-6 lg:right-8 bottom-3 sm:bottom-6 lg:bottom-8 z-30 flex items-center overflow-x-auto no-scrollbar rounded-xl border border-white/20 bg-black/80 backdrop-blur-xl shadow-2xl max-w-[calc(100%-1.5rem)] sm:max-w-none"
            >
              {DELIVERED_PROJECTS.map((proj, idx) => {
                const isSelected = idx === activeIdx;
                return (
                  <button
                    key={proj.id}
                    type="button"
                    onClick={() => selectProject(idx)}
                    aria-pressed={isSelected}
                    className={`group relative flex items-center justify-center shrink-0 gap-1.5 sm:gap-2 py-2 sm:py-3.5 px-2.5 sm:px-4 text-[10px] sm:text-xs font-menu transition-all cursor-pointer ${
                      idx !== 0 ? "border-l border-white/10" : ""
                    } ${
                      isSelected
                        ? "text-white bg-white/15"
                        : "text-[#d8d4ce]/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`text-[9px] sm:text-[10px] font-semibold tracking-wider transition-colors ${
                        isSelected ? "text-champagne" : "text-[#b69b6c]/70 group-hover:text-champagne"
                      }`}
                    >
                      {proj.number}
                    </span>
                    <span className="tracking-wide font-normal truncate max-w-[75px] xs:max-w-[95px] sm:max-w-[130px]">
                      {proj.title}
                    </span>

                    {/* Active bottom accent line */}
                    <span
                      className={`absolute inset-x-1.5 sm:inset-x-2 bottom-0 h-[2px] bg-champagne transition-transform duration-500 ease-out origin-left ${
                        isSelected ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* BOTTOM PROGRESS LINE */}
            <div
              ref={progressBarRef}
              className="absolute inset-x-0 bottom-0 h-[2px] bg-champagne z-40 transition-transform duration-75 ease-linear origin-left pointer-events-none will-change-transform"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
