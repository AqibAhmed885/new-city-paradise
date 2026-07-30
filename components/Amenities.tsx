"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsap } from "@/hooks/useGsap";
import { amenities } from "@/lib/data";
import AmenityIcon from "./AmenityIcon";
import SectionHeading from "./SectionHeading";

gsap.registerPlugin(ScrollTrigger);

export default function Amenities() {
  const root = useRef<HTMLElement>(null);

  useGsap(() => {
    if (!root.current) return;
    const cards = root.current.querySelectorAll("[data-amenity]");

    // Keep content visible if ScrollTrigger initializes after this section
    // has already entered the viewport (for example after a refresh or anchor jump).
    gsap.set(cards, { opacity: 1, visibility: "visible" });

    gsap.from(cards, {
      y: 50,
      duration: 0.85,
      stagger: 0.08,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: root.current.querySelector("[data-grid]"),
        start: "top 82%",
        once: true,
      },
    });
  }, []);

  return (
    <section ref={root} id="amenities" className="bg-[#eee9e2] py-28 sm:py-40">
      <div className="container-pad">
        <SectionHeading
          eyebrow="Designed around you"
          title={
            <>
              Everything you need,
              <br />
              <span className="italic text-champagne">beautifully close.</span>
            </>
          }
          description="Every practical detail has been integrated into the masterplan, creating a community that feels effortless from day one."
        />
        <div
          data-grid
          className="mt-20 grid border-l border-t border-black/10 sm:grid-cols-2 lg:grid-cols-5"
        >
          {amenities.map(([icon, title, description], index) => (
            <article
              data-amenity
              key={title}
              className="group min-h-72 border-b border-r border-black/10 bg-ivory/30 p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-ink hover:text-white hover:shadow-luxe"
            >
              <div className="flex items-start justify-between text-champagne">
                <AmenityIcon name={icon} />
                <span className="font-serif text-sm italic text-current opacity-60">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-16 font-serif text-2xl">{title}</h3>
              <p className="mt-4 text-xs leading-6 text-black/45 transition-colors group-hover:text-white/45">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
