"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsap } from "@/hooks/useGsap";
import {
  accessPoints,
  awamiBlockFeatures,
  developerProjects,
  masterPlanAmenities,
  plotCategories,
  projectFacts,
} from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectOverview() {
  const root = useRef<HTMLElement>(null);

  useGsap(() => {
    if (!root.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const hero = root.current.querySelector("[data-overview-hero]");
    const heroImage = root.current.querySelector("[data-overview-hero-image]");

    gsap.from(root.current.querySelectorAll("[data-hero-reveal]"), {
      y: 55,
      opacity: 0,
      duration: 1.1,
      stagger: 0.12,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: hero,
        start: "top 72%",
        once: true,
      },
    });

    gsap.to(heroImage, {
      yPercent: 12,
      scale: 1.08,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.from(root.current.querySelectorAll("[data-fact]"), {
      y: 70,
      opacity: 0,
      duration: 0.9,
      stagger: 0.1,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: root.current.querySelector("[data-facts]"),
        start: "top 86%",
        once: true,
      },
    });

    root.current.querySelectorAll("[data-story]").forEach((story) => {
      gsap.from(story.querySelectorAll("[data-reveal]"), {
        y: 45,
        opacity: 0,
        duration: 0.85,
        stagger: 0.08,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: story,
          start: "top 78%",
          once: true,
        },
      });
    });

    gsap.to(root.current.querySelector("[data-arcade]"), {
      yPercent: -8,
      ease: "none",
      scrollTrigger: {
        trigger: root.current.querySelector("[data-plots]"),
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
      },
    });

    gsap.from(root.current.querySelector("[data-gate]"), {
      xPercent: 18,
      opacity: 0,
      duration: 1.4,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: root.current.querySelector("[data-gateway]"),
        start: "top 75%",
        once: true,
      },
    });
  }, []);

  return (
    <section ref={root} id="masterplan" className="overflow-hidden bg-[#eee9e2] py-24 sm:py-32">
      <div className="container-pad">
        <div
          data-overview-hero
          className="relative min-h-[72svh] overflow-hidden bg-ink text-white sm:min-h-[82svh]"
        >
          <Image
            data-overview-hero-image
            src="/images/new-city-paradise-hero.png"
            alt="Aerial vision of New City Paradise"
            fill
            sizes="(max-width: 1600px) 100vw, 1600px"
            className="scale-[1.02] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/5" />
          <div className="grain absolute inset-0" />

          <div className="relative z-10 flex min-h-[72svh] flex-col justify-between p-6 sm:min-h-[82svh] sm:p-10 lg:p-14">
            <div data-hero-reveal className="flex items-center justify-between border-t border-white/40 pt-4">
              <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-white/65">
                Project overview · Islamabad
              </p>
              <span className="hidden text-[9px] uppercase tracking-[0.2em] text-champagne sm:block">
                M-1 · CPEC · GT Road
              </span>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
              <h2
                data-hero-reveal
                className="display max-w-6xl text-[clamp(4rem,9vw,10rem)] leading-[0.8]"
              >
                One vision,
                <br />
                <span className="italic text-champagne">every future.</span>
              </h2>
              <p data-hero-reveal className="max-w-md text-sm leading-7 text-white/65">
                A connected masterplan bringing homes, commerce, education,
                healthcare, recreation and generous green spaces into one
                considered community.
              </p>
            </div>
          </div>
        </div>

        <div data-facts className="relative z-20 -mt-px grid sm:grid-cols-2 xl:grid-cols-4">
          {projectFacts.map((fact, index) => (
            <article
              data-fact
              key={fact.label}
              className={`group min-h-72 border border-t-0 p-7 transition-colors duration-500 sm:p-8 ${
                index === 0
                  ? "border-champagne bg-champagne text-white"
                  : "border-black/10 bg-ivory hover:bg-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-[9px] font-bold uppercase tracking-[0.2em] ${
                    index === 0 ? "text-white/70" : "text-champagne"
                  }`}
                >
                  {fact.label}
                </span>
                <span className={`font-serif text-sm italic ${index === 0 ? "text-white/65" : "text-black/25"}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-14 break-words font-serif text-[clamp(1.8rem,2.8vw,3.4rem)] leading-[1]">
                {fact.value}
              </h3>
              <p className={`mt-6 max-w-xs text-xs leading-6 ${index === 0 ? "text-white/70" : "text-black/50"}`}>
                {fact.description}
              </p>
            </article>
          ))}
        </div>

        <div className="flex items-start gap-4 border-x border-b border-black/10 bg-white/55 px-6 py-5 sm:px-8">
          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-black/20 text-[9px] font-bold">
            i
          </span>
          <p className="max-w-5xl text-[11px] leading-5 text-black/50">
            Approval and land-area details reflect the project information provided. Buyers should independently confirm the current approval status, approved area and applicable permissions with PHATA and other relevant authorities before purchasing.
          </p>
        </div>

        <div
          data-story
          data-plots
          className="mt-28 grid overflow-hidden bg-white lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="p-7 sm:p-12 lg:p-16">
            <p data-reveal className="text-[9px] font-bold uppercase tracking-[0.24em] text-champagne">
              Plot availability
            </p>
            <h2 data-reveal className="display mt-6 text-[clamp(3rem,5.5vw,6rem)] leading-[0.88]">
              Space for every
              <br />
              <span className="italic text-champagne">kind of future.</span>
            </h2>
            <div className="mt-12 border-t border-black/15">
              {plotCategories.map((category) => (
                <div
                  data-reveal
                  key={category.name}
                  className="grid gap-4 border-b border-black/15 py-6 sm:grid-cols-[0.8fr_1.2fr] sm:items-center"
                >
                  <h3 className="font-serif text-xl sm:text-2xl">{category.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.sizes.map((size) => (
                      <span
                        key={size}
                        className="rounded-full border border-black/15 px-3 py-2 text-[9px] uppercase tracking-[0.12em] text-black/55"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[34rem] overflow-hidden bg-[#d9cdbc] lg:min-h-full">
            <span className="display absolute left-7 top-7 z-10 text-[clamp(4rem,8vw,9rem)] leading-none text-white/30">
              LIVE
            </span>
            <Image
              data-arcade
              src="/images/arcade3.png"
              alt="New City Paradise architectural development"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="origin-bottom scale-[1.08] object-contain object-bottom"
            />
            <div className="absolute bottom-6 left-6 z-10 max-w-xs border-l border-white/70 pl-4 text-[10px] uppercase tracking-[0.18em] text-white/80">
              Residential · Commercial · Community
            </div>
          </div>
        </div>

        <div
          data-story
          data-gateway
          className="relative mt-28 overflow-hidden bg-ink px-7 pb-64 pt-16 text-white sm:px-12 sm:pb-72 lg:px-16 lg:pb-80"
        >
          <div className="pointer-events-none absolute -right-16 top-0 h-80 w-80 rounded-full bg-champagne/20 blur-[100px]" />
          <div className="relative z-10 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div>
              <p data-reveal className="text-[9px] font-bold uppercase tracking-[0.24em] text-champagne">
                Awami Block
              </p>
              <h2 data-reveal className="display mt-6 text-[clamp(3rem,5.5vw,6rem)] leading-[0.88]">
                A welcoming
                <br />
                <span className="italic text-champagne">way into ownership.</span>
              </h2>
              <p data-reveal className="mt-8 max-w-lg text-sm leading-7 text-white/55">
                Located near the main entrance, Awami Block is planned to make
                a well-serviced community more accessible, with 4 and 6 Marla
                plot options and everyday facilities close to home.
              </p>
            </div>

            <ul className="grid content-start gap-px overflow-hidden border border-white/15 bg-white/15 sm:grid-cols-2">
              {awamiBlockFeatures.map((feature, index) => (
                <li
                  data-reveal
                  key={feature}
                  className="flex min-h-20 items-center justify-between gap-4 bg-ink/90 px-5 text-xs text-white/70"
                >
                  {feature}
                  <span className="font-serif text-xs italic text-champagne/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <Image
            data-gate
            src="/images/gate.png"
            alt="New City Paradise entrance gate"
            width={2172}
            height={724}
            sizes="(max-width: 1600px) 120vw, 1800px"
            className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-[125%] max-w-none -translate-x-1/2 object-contain sm:w-[115%]"
          />
        </div>

        <div data-story className="mt-28 grid gap-16 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p data-reveal className="text-[9px] font-bold uppercase tracking-[0.24em] text-champagne">
              Connected location
            </p>
            <h2 data-reveal className="display mt-6 text-[clamp(3rem,5.5vw,6rem)] leading-[0.88]">
              Every route
              <br />
              <span className="italic text-champagne">leads closer.</span>
            </h2>
            <p data-reveal className="mt-8 max-w-lg text-sm leading-7 text-black/50">
              The main entrance sits near GT Road and Burhan Interchange, with
              links to the motorway network, CPEC corridor and the wider
              Islamabad–Rawalpindi region.
            </p>
            <div className="mt-10 flex flex-wrap gap-2">
              {accessPoints.map((point) => (
                <span
                  data-reveal
                  key={point}
                  className="rounded-full bg-white px-4 py-2.5 text-[9px] uppercase tracking-[0.13em] text-black/55 shadow-sm"
                >
                  {point}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-end justify-between border-b border-black/15 pb-5">
              <p data-reveal className="text-[9px] font-bold uppercase tracking-[0.24em] text-champagne">
                Masterplan features
              </p>
              <span data-reveal className="text-[9px] uppercase tracking-[0.18em] text-black/35">
                15 destinations
              </span>
            </div>
            <div className="divide-y divide-black/15">
              {masterPlanAmenities.map((amenity, index) => (
                <div
                  data-reveal
                  key={amenity}
                  className="group flex items-center justify-between gap-5 py-5 transition-all duration-300 hover:pl-4"
                >
                  <div className="flex items-center gap-5">
                    <span className="w-6 text-[9px] text-black/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl">{amenity}</h3>
                  </div>
                  <span className="text-xl text-champagne transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          data-story
          className="mt-28 grid overflow-hidden border-t border-black/15 bg-[#d9cdbc] lg:grid-cols-[0.7fr_1.3fr]"
        >
          <div className="border-b border-black/15 p-8 lg:border-b-0 lg:border-r lg:p-12">
            <p data-reveal className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#7d6642]">
              Developer track record
            </p>
            <span data-reveal className="display mt-10 block text-[clamp(5rem,10vw,10rem)] leading-none text-white/45">
              03
            </span>
            <p data-reveal className="mt-2 text-[10px] uppercase tracking-[0.18em] text-black/45">
              Established projects
            </p>
          </div>
          <div className="p-8 sm:p-12 lg:p-16">
            <p data-reveal className="max-w-4xl font-serif text-[clamp(1.7rem,3vw,3rem)] leading-[1.3]">
              Experience shaped by established residential and commercial
              projects, supported by qualified planning, engineering and
              construction professionals.
            </p>
            <div className="mt-12 grid border-t border-black/20 sm:grid-cols-3">
              {developerProjects.map((project, index) => (
                <div
                  data-reveal
                  key={project}
                  className="border-b border-black/20 py-6 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0"
                >
                  <span className="text-[9px] text-black/35">0{index + 1}</span>
                  <p className="mt-5 text-xs uppercase leading-5 tracking-[0.13em] text-black/65">
                    {project}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
