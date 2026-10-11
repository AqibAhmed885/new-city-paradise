"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsap } from "@/hooks/useGsap";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    title: "Smart Urban Planning",
    description:
      "Thoughtful streets, districts and shared spaces designed to make everyday movement feel effortless.",
  },
  {
    title: "Secure Community Living",
    description:
      "A carefully managed environment where families can feel protected, connected and at home.",
  },
  {
    title: "Nature-Inspired Environment",
    description:
      "Green spaces, landscaped streets and open-air experiences woven naturally into community life.",
  }
];
export default function About() {
  const root = useRef<HTMLElement>(null);

  useGsap(() => {
    if (!root.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.from(root.current.querySelectorAll("[data-intro]"), {
      y: 55,
      opacity: 0,
      duration: 1,
      stagger: 0.12,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: root.current,
        start: "top 72%",
        once: true,
      },
    });

    gsap.from(root.current.querySelector("[data-vision-frame]"), {
      clipPath: "inset(14% 0 14% 0 round 2rem)",
      y: 70,
      duration: 1.25,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: root.current.querySelector("[data-vision-frame]"),
        start: "top 82%",
        once: true,
      },
    });

    gsap.to(root.current.querySelector("[data-vision-image]"), {
      yPercent: 9,
      scale: 1.08,
      ease: "none",
      scrollTrigger: {
        trigger: root.current.querySelector("[data-vision-frame]"),
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    root.current.querySelectorAll("[data-value]").forEach((card) => {
      gsap.from(card, {
        y: 60,
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
    <section ref={root} id="about" className="relative bg-white py-24 sm:py-24">
      <div className="container-pad">
        
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-7 xl:gap-10">
          <div className="lg:col-span-8 flex flex-col lg:min-h-[48rem]">
      
            <h2
              data-intro
              className="mt-6 text-[clamp(3.4rem,6vw,4rem)] font-medium leading-[1] tracking-[-0.04em]"
            >
              Your Vision Drives 
              <br />
              <span className="italic text-champagne">Our Mission</span>
            </h2>

            
            <div className="sticky top-0 w-full flex justify-between lg:pt-0">
              <div className="mt-16 max-w-sm lg:mt-20">
                <p data-intro className="text-base leading-7 text-black/55">
                  To create a modern, sustainable, and secure community where
                  families thrive, investments grow, and every resident enjoys a
                  premium lifestyle. At New City Paradise, we are building a
                  future defined by innovation, quality, and lasting value.
                </p>
                <a
                  data-intro
                  href="/masterplan"
                  className="group mt-9 inline-flex items-center gap-7 rounded-full bg-[#efc38f] px-7 py-4 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-white"
                >
                  Explore masterplan
                  <span className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
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
                <p className="max-w-sm self-end pt-10 text-sm leading-6 text-black/55 sm:w-[85%] sm:text-base sm:leading-7">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
