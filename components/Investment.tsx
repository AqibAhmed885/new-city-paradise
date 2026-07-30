"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsap } from "@/hooks/useGsap";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  ["01", "Prime location", "Direct M-1 access with Islamabad and Rawalpindi within easy reach."],
  ["02", "High ROI potential", "A growth corridor supported by infrastructure and expanding demand."],
  ["03", "Future-ready plan", "A long-term urban vision designed around liveability and resilience."],
  ["04", "Trusted developers", "A proven team with a commitment to quality and transparent delivery."],
  ["05", "Flexible ownership", "Considered payment plans that make premium property more accessible."],
];

export default function Investment() {
  const root = useRef<HTMLElement>(null);
  const orb = useRef<HTMLDivElement>(null);

  useGsap(() => {
    if (!root.current) return;
    gsap.to(orb.current, {
      xPercent: 45,
      yPercent: -25,
      rotation: 70,
      ease: "none",
      scrollTrigger: {
        trigger: root.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
    gsap.from(root.current.querySelectorAll("[data-reason]"), {
      x: 45,
      opacity: 0,
      stagger: 0.1,
      duration: 0.9,
      scrollTrigger: { trigger: "[data-reasons]", start: "top 80%" },
    });
  }, []);

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-[#d9cdbc] py-28 sm:py-40"
    >
      <div
        ref={orb}
        className="absolute -bottom-64 -left-44 h-[48rem] w-[48rem] rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,.7),rgba(182,155,108,.25)_42%,transparent_70%)] blur-2xl"
      />
      <span
        aria-hidden="true"
        className="display absolute -right-8 top-4 text-[clamp(7rem,20vw,20rem)] leading-none text-white/10"
      >
        INVEST
      </span>
      <div className="container-pad relative grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow text-[#7d6642]">An address of value</p>
          <h2 className="display mt-8 text-[clamp(3.8rem,7vw,7rem)] leading-[0.87]">
            Why invest in
            <br />
            <span className="italic text-white">New City Paradise?</span>
          </h2>
          <p className="mt-9 max-w-md text-sm leading-7 text-black/50">
            More than a place to live, it is a stake in one of the region’s most
            considered growth stories.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-flex rounded-full bg-ink px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-ink"
          >
            Request investment brief
          </a>
        </div>
        <div data-reasons className="border-t border-black/20">
          {reasons.map(([number, title, description]) => (
            <article
              data-reason
              key={number}
              className="group grid gap-5 border-b border-black/20 py-8 sm:grid-cols-[auto_0.7fr_1fr] sm:items-start sm:gap-8"
            >
              <span className="font-serif text-lg italic text-black/40">{number}</span>
              <h3 className="font-serif text-2xl sm:text-3xl">{title}</h3>
              <p className="text-xs leading-6 text-black/50">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
