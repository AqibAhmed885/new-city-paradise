"use client";

import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useGsap } from "@/hooks/useGsap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LAHORE_CONFIG } from "@/lib/lahoreConfig";

gsap.registerPlugin(ScrollTrigger);

export default function LahoreCTA() {
  const root = useRef<HTMLElement>(null);

  useGsap(() => {
    if (!root.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.from(root.current.querySelectorAll("[data-cta-reveal]"), {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: root.current,
        start: "top 75%",
        once: true,
      },
    });

    gsap.to(root.current.querySelector("[data-cta-image]"), {
      yPercent: 8,
      scale: 1.05,
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
    <section ref={root} className="bg-[#FAFAF8] px-4 py-20 sm:px-8 sm:py-28 text-white border-t border-black/[0.06]">
      <div className="mx-auto max-w-6xl">
        <div className="relative min-h-[36rem] sm:min-h-[30rem] overflow-hidden rounded-2xl bg-[#12110F] flex items-center justify-center p-8 sm:p-14 lg:p-20 text-center">
          <Image
            data-cta-image
            src="/images/delivered/lahore-intro.jpg"
            alt="New City Paradise Lahore Waterfront Architecture"
            fill
            sizes="(max-width: 1600px) 100vw, 1600px"
            className="scale-105 object-cover object-center opacity-30 filter brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/80" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <span
              data-cta-reveal
              className="inline-block text-[10.5px] font-sans font-medium uppercase tracking-[0.24em] text-[#D9BD89] mb-3"
            >
              RUDA Phase 1 Urban Gateway
            </span>

            <h2
              data-cta-reveal
              className="text-[clamp(2.4rem,5.5vw,4.2rem)] font-heading font-normal leading-[1.08] tracking-[-0.03em] text-white"
            >
              Secure Your Future at <br />
              <span className="italic font-light text-[#D9BD89]">
                New City Paradise Lahore.
              </span>
            </h2>

            <p
              data-cta-reveal
              className="mt-5 text-[15px] sm:text-[16px] font-sans font-light leading-relaxed text-white/70 max-w-xl"
            >
              Contact our authorized Lahore development team for priority masterplan allocations, payment schedules, and exclusive corporate site tours.
            </p>

            <div
              data-cta-reveal
              className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
            >
              <a
                href={LAHORE_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-black transition-all duration-300 hover:bg-[#D9BD89] hover:text-black shadow-lg"
              >
                Inquire on WhatsApp
                <ArrowUpRight size={14} />
              </a>

              <Link
                href="/lahore/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/30 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:border-white/50"
              >
                Official Contact Desk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
