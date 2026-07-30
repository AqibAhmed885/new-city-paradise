"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsap } from "@/hooks/useGsap";
import { gallery } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function LifestyleGallery() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGsap(() => {
    if (!root.current || !track.current) return;
    const media = gsap.matchMedia();
    media.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const distance = () =>
        Math.max(0, track.current!.scrollWidth - window.innerWidth + 80);
      gsap.to(track.current, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => `+=${distance() + window.innerHeight * 0.7}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });
    gsap.from(root.current.querySelectorAll("[data-gallery-card]"), {
      y: 80,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      scrollTrigger: { trigger: root.current, start: "top 70%" },
    });
    return () => media.revert();
  }, []);

  return (
    <section
      ref={root}
      id="lifestyle"
      className="relative min-h-screen overflow-hidden bg-ink py-24 text-white lg:flex lg:items-center lg:py-0"
    >
      <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(circle_at_20%_50%,#6c5b42_0,transparent_38%)]" />
      <div ref={track} className="relative flex flex-col gap-6 px-5 lg:w-max lg:flex-row lg:items-center lg:gap-8 lg:px-[5vw]">
        <div className="mb-10 shrink-0 lg:mb-0 lg:w-[38vw]">
          <p className="eyebrow text-champagne">A life in balance</p>
          <h2 className="display mt-8 text-[clamp(4rem,7vw,7.5rem)] leading-[0.84]">
            More room
            <br />
            <span className="italic text-champagne">to live.</span>
          </h2>
          <p className="mt-8 max-w-sm text-sm leading-7 text-white/50">
            Landscapes, culture, learning and wellbeing are woven into the plan
            — so each day can unfold naturally.
          </p>
          <p className="mt-12 hidden text-[9px] font-bold uppercase tracking-[0.25em] text-white/35 lg:block">
            Scroll to explore &nbsp; →
          </p>
        </div>

        {gallery.map((item, index) => (
          <figure
            data-gallery-card
            key={item.name}
            className={`group relative shrink-0 overflow-hidden bg-white/5 ${
              index % 3 === 1
                ? "aspect-[4/5] lg:h-[64vh] lg:w-[36vw]"
                : index % 3 === 2
                  ? "aspect-[5/4] lg:h-[48vh] lg:w-[40vw]"
                  : "aspect-[4/3] lg:h-[56vh] lg:w-[42vw]"
            }`}
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover opacity-85 transition duration-[1.2s] group-hover:scale-105 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 sm:p-8">
              <span className="display text-3xl sm:text-4xl">{item.name}</span>
              <span className="text-[9px] font-bold tracking-[0.2em] text-white/55">
                {item.number}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
