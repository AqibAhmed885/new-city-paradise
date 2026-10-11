"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsap } from "@/hooks/useGsap";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    title: "Smart Urban Planning",
    description:
      "Thoughtful streets, districts, and shared spaces designed to make everyday movement feel effortless and secure.",
  },
  {
    title: "Secure Community Living",
    description:
      "A carefully managed environment where families feel protected, connected, and truly at home with 24/7 surveillance.",
  },
  {
    title: "Nature-Inspired Environment",
    description:
      "Green spaces, landscaped boulevards, and open-air riverside promenades woven naturally into community life.",
  },
];

const statsAtAGlance = [
  { value: "4,256+", label: "Approved Kanals", note: "Officially PHATA Approved" },
  { value: "20,000", label: "Kanal Masterplan", note: "Total Planned Community" },
  { value: "330 FT", label: "Main Boulevard", note: "Direct GT Road & CPEC access" },
  { value: "0 KM", label: "Burhan Interchange", note: "M-1 Motorway Junction" },
];

const pillars = [
  {
    tag: "LEGITIMACY & APPROVAL",
    title: "Punjab Housing and Town Planning Agency (PHATA)",
    description:
      "New City Paradise holds official PHATA NOC approval (Letter No. DG-PHATA/W-I/PHS/61/2022). This legal framework ensures that your plots, commercial investments, and residences are completely transparent and legally safeguarded.",
  },
  {
    tag: "PROVEN DEVELOPERS",
    title: "Decades of Excellence with New City Wah",
    description:
      "Spearheaded by Chairman Chaudhry Qamar Zaman and CEO Chaudhry Saad Zaman, the developers have successfully delivered New City Phase 1 and New City Phase 2 in Wah Cantt, earning the trust of thousands of families across Pakistan and abroad.",
  },
  {
    tag: "INFRASTRUCTURE & ENVIRONMENT",
    title: "Haro Riverfront & 330-Foot Main Boulevard",
    description:
      "Crafted with wide arterial avenues, underground electricity, an international-standard hospital, educational institutes, Glow Park, and serene natural river frontage along the Haro River.",
  },
];

export default function AboutClient() {
  const root = useRef<HTMLDivElement>(null);

  useGsap(() => {
    if (!root.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.from(root.current.querySelectorAll("[data-intro]"), {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: root.current,
        start: "top 75%",
        once: true,
      },
    });

    gsap.from(root.current.querySelector("[data-vision-frame]"), {
      clipPath: "inset(14% 0 14% 0 round 2rem)",
      y: 60,
      duration: 1.2,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: root.current.querySelector("[data-vision-frame]"),
        start: "top 80%",
        once: true,
      },
    });

    root.current.querySelectorAll("[data-value]").forEach((card) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          once: true,
        },
      });
    });
  }, []);

  return (
    <div ref={root} className="bg-white text-ink selection:bg-champagne/30">
      {/* Editorial Hero Header */}
      <section className="relative bg-[#0c0b09] text-white pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/80 pointer-events-none" />
        <div className="container-pad max-w-6xl mx-auto text-center relative z-10 px-4">
          <span className="text-[10px] font-menu uppercase tracking-[0.3em] text-champagne block mb-4">
            The Legacy of Visionary Living
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-tight tracking-tight uppercase">
            Crafting Exceptional <br />
            <span className="italic text-champagne font-light">Communities</span>
          </h1>
          <p className="mt-6 font-serif text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
            New City Paradise is a master-planned metropolitan sanctuary on the 330-ft GT Road & CPEC corridor, engineered by the renowned developers of New City Wah.
          </p>

          {/* Key Metrics Banner */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-white/10 text-left">
            {statsAtAGlance.map((s) => (
              <div key={s.label} className="border-l border-white/20 pl-5">
                <p className="font-sans text-3xl sm:text-4xl font-light text-champagne tracking-tight">
                  {s.value}
                </p>
                <p className="text-xs uppercase font-menu tracking-wider text-white mt-1">
                  {s.label}
                </p>
                <p className="text-[11px] text-white/40 font-serif italic mt-0.5">
                  {s.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Transferred Vision & Mission Section */}
      <section id="vision" className="relative bg-white py-24 lg:py-32">
        <div className="container-pad">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-7 xl:gap-10">
            <div className="lg:col-span-8 flex flex-col lg:min-h-[48rem]">
              <span className="text-[9px] tracking-[0.24em] uppercase font-menu text-champagne font-semibold">
                Our Foundation
              </span>
              <h2
                data-intro
                className="mt-3 text-[clamp(3.2rem,5.5vw,4.2rem)] font-medium leading-[1] tracking-[-0.04em]"
              >
                Your Vision Drives
                <br />
                <span className="italic text-champagne font-serif">Our Mission</span>
              </h2>

              <div className="sticky top-0 w-full flex justify-between lg:pt-0">
                <div className="mt-14 max-w-sm lg:mt-16">
                  <p data-intro className="text-base leading-7 text-black/60 font-serif">
                    To create a modern, sustainable, and secure community where
                    families thrive, investments grow, and every resident enjoys a
                    premium lifestyle. At New City Paradise, we are building a
                    future defined by innovation, quality, and lasting value.
                  </p>
                  <Link
                    data-intro
                    href="/masterplan"
                    className="group mt-9 inline-flex items-center gap-7 rounded-full bg-[#efc38f] px-7 py-4 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-white"
                  >
                    Explore masterplan
                    <span className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </Link>
                </div>

                <div
                  data-vision-frame
                  className="relative h-[38rem] overflow-hidden rounded-[2rem] bg-smoke sm:h-[50rem] lg:h-[46rem] xl:h-[44rem] w-0 lg:w-[34vw] xl:w-[30vw]"
                >
                  <Image
                    src="/images/isla.jpg"
                    alt="New City Paradise community vision"
                    width={900}
                    height={600}
                    sizes="(max-width: 1024px) 100vw, 34vw"
                    className="scale-[1.02] w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-5 lg:col-span-4">
              {values.map((value, index) => (
                <article
                  data-value
                  key={value.title}
                  className="group flex min-h-[15rem] flex-col rounded-[1.5rem] border border-black/15 bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:border-champagne hover:shadow-luxe sm:min-h-[1rem] sm:p-7"
                >
                  <div className="flex items-center border-b border-black/15 pb-5">
                    <span className="w-12 shrink-0 border-r border-black/15 font-serif text-2xl leading-none sm:w-14 sm:text-2xl">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="pl-5 font-serif text-xl leading-tight sm:pl-7 sm:text-2xl">
                      {value.title}
                    </h3>
                  </div>
                  <p className="max-w-sm self-end pt-10 text-sm leading-6 text-black/60 sm:w-[85%] sm:text-base sm:leading-7 font-serif">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive: Leadership & Development Pedigree */}
      <section className="bg-[#F8F7F4] py-24 border-t border-black/5">
        <div className="container-pad max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <span className="text-[10px] tracking-[0.25em] uppercase font-menu text-champagne block mb-2">
              Leadership & Credibility
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-ink font-light leading-tight">
              A Proven Record Across Decades of Development
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="bg-white p-8 sm:p-10 rounded-2xl border border-black/10 flex flex-col justify-between hover:border-champagne/60 transition-colors"
              >
                <div>
                  <span className="text-[9px] font-menu uppercase tracking-widest text-champagne font-semibold block mb-4">
                    {pillar.tag}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-ink leading-snug mb-4">
                    {pillar.title}
                  </h3>
                  <p className="font-serif text-sm sm:text-base text-black/65 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-black/10 flex items-center justify-between text-[10px] font-menu uppercase tracking-wider text-black/40">
                  <span>0{i + 1}</span>
                  <span className="text-champagne">Verified Authority</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Location & Regional Connectivity */}
      <section className="py-24 bg-white">
        <div className="container-pad max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] tracking-[0.25em] uppercase font-menu text-champagne block">
                The Crossroads of Commerce
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-ink font-light leading-tight">
                Directly Adjacent to Burhan Interchange & CPEC
              </h2>
              <p className="font-serif text-base sm:text-lg text-black/65 leading-relaxed">
                Positioned with zero-kilometer proximity to the Burhan Interchange on the M-1 Motorway, New City Paradise connects residents and commerce seamlessly with Islamabad, Rawalpindi, Wah Cantt, and the wider CPEC transit route.
              </p>
              <ul className="space-y-3 pt-2 text-sm font-menu text-black/80">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
                  0 KM from Burhan Interchange (M-1 Motorway)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
                  Frontage directly on 330-Foot GT Road
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
                  Direct access to Haro River promenade & CPEC Northern Route
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
                  Convenient 25-minute drive to New Islamabad International Airport
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 relative h-96 sm:h-[28rem] rounded-2xl overflow-hidden border border-black/10 bg-stone-100">
              <Image
                src="/images/amenities/main-boulevard.jpg"
                alt="New City Paradise 330-ft Main Boulevard"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-[10px] uppercase font-menu tracking-widest text-champagne">
                  Arterial Landmark
                </p>
                <p className="text-xl font-serif">330-Foot Main Boulevard Corridor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-[#0c0b09] text-white py-20 border-t border-white/10">
        <div className="container-pad max-w-4xl mx-auto text-center px-4">
          <span className="text-[10px] font-menu uppercase tracking-[0.25em] text-champagne block mb-3">
            Build Your Legacy
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
            Ready to Discover New City Paradise?
          </h2>
          <p className="mt-4 font-serif text-base sm:text-lg text-white/70 max-w-xl mx-auto">
            Tour the development site, review verified PHATA documentation, or explore plot availability with our specialist team.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/masterplan"
              className="px-8 py-3.5 bg-champagne text-black text-xs font-menu uppercase tracking-widest font-medium hover:bg-white transition-colors"
            >
              View Masterplan
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 border border-white/30 text-white text-xs font-menu uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
            >
              Contact Sales Office
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
