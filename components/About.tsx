"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsap } from "@/hooks/useGsap";

gsap.registerPlugin(ScrollTrigger);

const values = [
  "Smart Urban Planning",
  "Secure Community Living",
  "Exceptional Investment Potential",
  "Nature-Inspired Environment",
  "Elevated Everyday Living",
];

export default function About() {
  const root = useRef<HTMLElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);

  useGsap(() => {
    if (!root.current) return;
    const lines = root.current.querySelectorAll("[data-reveal]");
    gsap.from(lines, {
      yPercent: 110,
      opacity: 0,
      duration: 1.2,
      stagger: 0.12,
      ease: "power4.out",
      scrollTrigger: {
        trigger: heading.current,
        start: "top 82%",
      },
    });
    gsap.from(root.current.querySelectorAll("[data-value]"), {
      y: 30,
      opacity: 0,
      stagger: 0.09,
      duration: 0.8,
      scrollTrigger: { trigger: "[data-values]", start: "top 84%" },
    });
  }, []);

  return (
    <section ref={root} id="about" className="relative bg-ivory py-28 sm:py-40">
      <span
        aria-hidden="true"
        className="display absolute right-[-1vw] top-6 text-[clamp(5rem,18vw,17rem)] leading-none text-black/[0.025]"
      >
        PARADISE
      </span>
      <div className="container-pad relative grid gap-16 lg:grid-cols-[0.8fr_2fr]">
        <div>
          <h1 className="eyebrow   text-champagne">Our vision</h1>
          <p className="mt-8 max-w-sm text-base leading-6 text-black/45">
            To create a modern, sustainable, and secure community where families thrive, investments grow, and every resident enjoys a premium lifestyle. At New City Paradise, we are building a future defined by innovation, quality, and lasting value.
          </p>
        </div>
        <div>
          <h2
            ref={heading}
            className="display max-w-5xl  text-[clamp(3.3rem,7vw,8rem)] leading-[0.9]"
          >
            <span className="block tracking-normal ">
              <span data-reveal className="block">Luxury living,</span>
            </span>
            <span className="block tracking-normal ">
              <span data-reveal className="block  italic text-champagne">
                redefined.
              </span>
            </span>
          </h2>
          <div
            data-values
            className="mt-16 grid border-t border-black/15 sm:grid-cols-2 xl:grid-cols-5"
          >
            {values.map((value, index) => (
              <div
                data-value
                key={value}
                className="group border-b border-black/15 py-6 pr-4 sm:border-r sm:pl-4 sm:first:pl-0 sm:last:border-r-0"
              >
                <span className="font-serif text-2xl font-bold italic text-champagne">
                  0{index + 1}
                </span>
                <p className="mt-6 text-[13px] uppercase tracking-normal text-black/70">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
