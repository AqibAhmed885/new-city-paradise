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
    <section ref={root} id="amenities" className="bg-gray-100 py-14 sm:py-20">
      <div className="container-pad">
        <SectionHeading
          eyebrow="Designed around you"
          title={
            <>
              Everything You Need,
              <br />
              <span className="italic text-champagne">Beautifully Close.</span>
            </>
          }
          // description="Every practical detail has been integrated into the masterplan, creating a community that feels effortless from day one."
        />
        <div
          data-grid
          className="mt-10 grid gap-2  sm:grid-cols-2 lg:grid-cols-5"
        >
          {amenities.map(([icon, title, description], index) => (
            <article
              data-amenity
              key={title}
              className="group min-h-64 bg-gray-50 rounded-2xl p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-gray-600 hover:text-white hover:shadow-luxe"
            >
              <div className="flex items-start justify-between ">
                <AmenityIcon name={icon} />
                
              </div>
              <h3 className="mt-8 font-serif text-2xl">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-black/60 transition-colors group-hover:text-white/45">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
