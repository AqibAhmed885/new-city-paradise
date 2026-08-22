"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsap } from "@/hooks/useGsap";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: 5000,
    suffix: "+",
    label: "Residential plots",
    description: "Well-planned plots designed for comfortable modern living.",
  },
  {
    value: 1000,
    suffix: "+",
    label: "Commercial units",
    description: "Prime business spaces built for growth and opportunity.",
  },
  {
    value: 200,
    suffix: "+",
    label: "Acres of parks",
    description: "Expansive green spaces for recreation and relaxation.",
  },
  {
    value: 24,
    suffix: "/ 7",
    label: "Smart security",
    description: "Advanced monitoring for a safer, protected community.",
  },
];

export default function Stats() {
  const root = useRef<HTMLElement>(null);

  useGsap(() => {
    if (!root.current) return;

    const values = root.current.querySelectorAll<HTMLElement>("[data-count]");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      values.forEach((element) => {
        element.textContent = Number(element.dataset.count).toLocaleString();
      });
      return;
    }

    gsap.from(root.current.querySelectorAll("[data-heading-reveal]"), {
      y: 55,
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

    gsap.from(root.current.querySelectorAll("[data-stat-card]"), {
      y: 65,
      opacity: 0,
      duration: 0.9,
      stagger: 0.11,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: root.current.querySelector("[data-stat-grid]"),
        start: "top 83%",
        once: true,
      },
    });

    values.forEach((element) => {
      const target = Number(element.dataset.count);
      const state = { value: 0 };

      gsap.to(state, {
        value: target,
        duration: 2.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 88%",
          once: true,
        },
        onUpdate: () => {
          element.textContent = Math.round(state.value).toLocaleString();
        },
      });
    });
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden bg-[#050505] py-28 text-white sm:py-20">
      {/* <div className="pointer-events-none absolute right-0 top-0 h-[30rem] w-[30rem] rounded-full bg-champagne/[0.06] blur-[120px]" /> */}

      <div className="container-pad relative">
        <h2 className="max-w-6xl text-[clamp(3.8rem,7.5vw,4rem)] font-medium leading-[1.2]">
          <span data-heading-reveal className="block">Building Spaces  </span>
          <span data-heading-reveal className="block italic text-champagne">
            That Tell Stories
          </span>
        </h2>

        <div data-stat-grid className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          <div aria-hidden="true" className="hidden lg:block" />

          {stats.map((stat) => (
            <article
              data-stat-card
              key={stat.label}
              className="group flex min-h-[22rem] flex-col rounded-[1.5rem] border border-white/25 bg-black/20 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-champagne/70 hover:bg-white/[0.03] sm:min-h-[25rem] sm:p-10"
            >
              <p className="flex items-start  text-[clamp(4.2rem,7vw,4rem)] display italic leading-none tracking-[-0.06em]">
                <span data-count={stat.value}>0</span>
                <span className="ml-4 -mt-2 text-[0.48em] text-champagne">{stat.suffix}</span>
              </p>
              
              <h1 className="mt-auto  text-xl text-white sm:text-2xl">
                {stat.label}
              </h1>
              <p className="text-lg  text-white/80 sm:text-xl">
                {stat.description}
              </p>
            </article>
          ))}

          <div
            data-stat-card
            className="flex min-h-[18rem] flex-col items-start justify-end py-5 sm:col-span-2 lg:col-span-1 lg:min-h-[25rem] lg:px-5"
          >
            <p className="max-w-md  text-1xl italic leading-9 text-white/70 sm:text-2xl sm:leading-10">
              Creating exceptional communities where modern living, comfort,
              and opportunity come together.
            </p>
            <Link
              href="/masterplan"
              aria-label="Explore the New City Paradise masterplan"
              className="mt-9 grid h-16 w-16 place-items-center rounded-full bg-[#efc38f] text-2xl text-ink transition-transform duration-300 hover:-translate-y-1 hover:translate-x-1"
            >
              ↗
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
