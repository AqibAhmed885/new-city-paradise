"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsap } from "@/hooks/useGsap";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 5000, suffix: "+", label: "Residential plots" },
  { value: 1000, suffix: "+", label: "Commercial units" },
  { value: 200, suffix: "+", label: "Acres of parks" },
  { value: 24, suffix: "/7", label: "Smart security" },
];

export default function Stats() {
  const root = useRef<HTMLElement>(null);

  useGsap(() => {
    if (!root.current) return;
    const values = root.current.querySelectorAll<HTMLElement>("[data-count]");
    values.forEach((element) => {
      const target = Number(element.dataset.count);
      const state = { value: 0 };
      gsap.to(state, {
        value: target,
        duration: 2.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 75%",
          once: true,
        },
        onUpdate: () => {
          element.textContent = Math.round(state.value).toLocaleString();
        },
      });
    });
  }, []);

  return (
    <section ref={root} className="bg-ink py-20 text-white sm:py-28">
      <div className="container-pad">
        <div className="mb-14 flex items-center justify-between border-b border-white/15 pb-5">
          <h1 className="text-2xl md:text-5xl  text-champagne">
            Why Choose New City Paradise
          </h1>
          {/* <p className="hidden text-[9px] uppercase tracking-[0.24em] text-white/40 sm:block">
            Built for Modern Living
          </p> */}
        </div>
        <div className="grid gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-white/15 pr-6 sm:border-r sm:pl-7 sm:first:pl-0 sm:[&:nth-child(2)]:border-r-0 xl:[&:nth-child(2)]:border-r xl:last:border-r-0"
            >
              <p className="display flex items-start text-[clamp(3.5rem,7vw,7rem)] leading-none">
                <span data-count={stat.value}>0</span>
                <span className="mt-2 text-[0.28em] text-champagne">{stat.suffix}</span>
              </p>
              <p className="mt-5 text-sm  uppercase tracking-[0.1em] text-white/55">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/25 pt-4 sm:flex-row sm:items-center">
          <p className="font-serif text-2xl italic text-white/80">
            Creating exceptional communities where modern living, comfort, and opportunity come together.
          </p>
          {/* <span className="rounded-full border border-champagne/50 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-champagne">
            Smart City Infrastructure
          </span> */}
        </div>
      </div>
    </section>
  );
}
