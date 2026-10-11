"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsap } from "@/hooks/useGsap";
import { properties } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function PropertyShowcase() {
  const root = useRef<HTMLElement>(null);

  useGsap(() => {
    if (!root.current) return;
    root.current.querySelectorAll<HTMLElement>("[data-property]").forEach((card) => {
      const image = card.querySelector("[data-property-image]");
      const copy = card.querySelector("[data-property-copy]");
      gsap.from(image, {
        clipPath: "inset(12% 0 12% 0)",
        scale: 1.1,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: { trigger: card, start: "top 78%" },
      });
      gsap.from(copy, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: card, start: "top 70%" },
      });
    });
  }, []);

  return (
    <section ref={root} id="properties" className="relative z-20 bg-white py-28 sm:py-20">
      <div className="container-pad">
        <SectionHeading
          eyebrow="Curated residences"
          title={
            <>
              Spaces to Call <br /> <span className="italic text-champagne">Your Own.</span>
            </>
          }
          // description="A limited collection of villas, residences and private estates — each created to bring architecture, nature and everyday life into balance."
        />

        <div className="mt-12 space-y-28 sm:mt-16 sm:space-y-20">
          {properties.map((property, index) => (
            <article
              data-property
              key={property.title}
              className={`grid items-center gap-8 lg:grid-cols-12 lg:gap-12 ${
                index % 2 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div
                data-property-image
                className="group relative aspect-[4/5] overflow-hidden  shadow-luxe lg:col-span-7 lg:aspect-[1.5/1]"
              >
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                {/* <span className="absolute left-5 top-5 rounded-full bg-white/85 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.18em] backdrop-blur-md">
                  0{index + 1}
                </span> */}
              </div>

              <div data-property-copy className="lg:col-span-5 lg:px-[5%]">
                {/* <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-champagne">
                  {property.eyebrow}
                </p> */}
                <h3 className="display tracking-normal mt-5 text-[clamp(3.8rem,7.5vw,4rem)] font-medium leading-[1]">
                  {property.title}
                </h3>
                <p className="mt-5 max-w-lg text-base leading-7 text-black/50">
                  {property.description}
                </p>
                {/* <dl className="mt-10 grid grid-cols-2 border-y border-black/15 py-6">
                  <div>
                    <dt className="text-xs font-medium   text-black/40">
                      Investment
                    </dt>
                    <dd className="mt-2 font-serif text-xl">{property.price}</dd>
                  </div>
                  <div className="border-l border-black/15 pl-5">
                    <dt className="text-xs font-medium  text-black/40">
                      Space
                    </dt>
                    <dd className="mt-2 font-serif text-xl">{property.area}</dd>
                  </div>
                </dl> */}
                <Link
                  href="/contact"
                  className="group mt-9 inline-flex items-center gap-5 text-sm  uppercase tracking-[0.16em]"
                >
                  View residence
                  <svg width="16" height="16" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.5 3.50029L1.5 25.5003" stroke="#141B34" stroke-width="3" stroke-linecap="round" />
                    <path d="M11.5 1.76307C11.5 1.76307 22.7671 0.813286 24.4769 2.52311C26.1868 4.23294 25.2369 15.5 25.2369 15.5" stroke="#141B34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
