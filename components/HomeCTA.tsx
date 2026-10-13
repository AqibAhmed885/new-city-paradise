"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { useGsap } from "@/hooks/useGsap";
import SectionHeading from "./SectionHeading";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";

gsap.registerPlugin(ScrollTrigger);

export default function HomeCTA() {
  const root = useRef<HTMLElement>(null);

  useGsap(() => {
    if (!root.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.from(root.current.querySelectorAll("[data-cta-reveal]"), {
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

    gsap.to(root.current.querySelector("[data-cta-image]"), {
      yPercent: 10,
      scale: 1.08,
      ease: "none",
      scrollTrigger: {
        trigger: root.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section ref={root} className="bg-ivory px-3 py-12 text-white sm:px-5 sm:py-10">
      <div className="container-pad !px-0 mx-auto max-w-[1200px]">
        <div className="relative min-h-[46rem] overflow-hidden rounded-[1.75rem] bg-ink sm:min-h-[20rem]">
          <Image
            data-cta-image
            src="/images/paradise-residence.jpg"
            alt="A refined New City Paradise residence interior"
            fill
            sizes="(max-width: 1600px) 100vw, 1600px"
            className="scale-110 object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.48)_0%,rgba(0,0,0,.24)_42%,rgba(0,0,0,.72)_100%)]" />
          <div className="grain absolute inset-0" />

          <div className="relative z-10 flex min-h-[46rem] flex-col px-5 py-10 sm:min-h-[25rem] sm:px-8 sm:py-12 lg:px-14">
            <SectionHeading
              title={
                <h2 className="text-white text-[clamp(2.5rem,6vw,3.5rem)] leading-[1.1] sm:text-[clamp(3rem,6vw,4rem)]">
                  Your Place in Paradise Awaits
                </h2>
              }
            />
            <div className="mx-auto max-w-5xl text-center">
              

              <div data-cta-reveal className="mt-7 flex justify-center gap-1.5">
                <Link
                  href="/contact"
                  className="rounded-xl bg-white px-6 py-3.5 text-sm font-light uppercase tracking-[0.16em] text-ink transition-colors hover:bg-champagne hover:text-white"
                >
                  Contact us
                </Link>
                <Link
                  href="/contact"
                  aria-label="Open contact page"
                  className="grid h-11 w-11 place-items-center rounded-xl bg-white text-lg text-ink transition-colors hover:bg-champagne hover:text-white"
                >
                  ↗
                </Link>
              </div>
            </div>

            <div className="mt-auto grid items-stretch gap-3 pt-16 lg:grid-cols-4">
              {[
                {
                  title: "Address",
                  description: "Islamabad Motorway M-1, CPEC Route (North)",
                  href: "/contact",
                },
                {
                  title: "Working Hours",
                  description:
                    "Monday to Friday 09:00 to 18:30. Saturday we work until 15:30.",
                  href: "/contact",
                },
                {
                  title: "Sales Office",
                  description:
                    "M-40 | New City Arcade, New City Housing Project Phase II",
                  href: "/contact",
                },
                {
                  title: "Phone & WhatsApp",
                  description: SITE_CONFIG.phoneDisplay,
                  href: SITE_CONFIG.whatsappLink,
                }
              ].map((item) => (
                <Link
                  data-cta-reveal
                  key={item.title}
                  href={item.href}
                  className="group flex h-full flex-col rounded-2xl border border-white/25 bg-black/25 p-5 shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 sm:p-6"
                >
                  <div className="flex items-start justify-between gap-5">
                    <h3 className="font-medium text-lg leading-tight sm:text-xl">{item.title}</h3>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white text-sm text-ink transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                  <p className="mt-5 max-w-sm text-xs leading-5 text-white/60 sm:text-sm sm:leading-6">
                    {item.description}
                  </p>
                </Link>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
