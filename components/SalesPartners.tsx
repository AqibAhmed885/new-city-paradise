"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsap } from "@/hooks/useGsap";
import {
  salesPartnerCategories,
  type SalesPartnerCategory,
} from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const tierStyles = [
  {
    card: "border-white/20 bg-[#12110f] text-white",
    accent: "text-[#e8d3b0]",
    glow: "bg-[#b69b6c]/25",
    line: "border-white/20",
  },
  {
    card: "border-[#b69b6c]/35 bg-[#d9c09a] text-ink",
    accent: "text-white/80",
    glow: "bg-white/25",
    line: "border-black/15",
  },
  {
    card: "border-black/15 bg-[#d8d4ce] text-ink",
    accent: "text-white/90",
    glow: "bg-white/35",
    line: "border-black/15",
  },
] as const;

function PartnerCarousel({
  tier,
  index,
}: {
  tier: SalesPartnerCategory;
  index: number;
}) {
  const track = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const style = tierStyles[index];

  const move = (direction: 1 | -1) => {
    const element = track.current;
    const firstCard = element?.firstElementChild as HTMLElement | null;
    if (!element || !firstCard) return;

    const gap = Number.parseFloat(getComputedStyle(element).columnGap) || 12;
    const step = firstCard.getBoundingClientRect().width + gap;
    const maxScroll = element.scrollWidth - element.clientWidth;

    if (direction === 1 && element.scrollLeft + step >= maxScroll - 2) {
      element.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    if (direction === -1 && element.scrollLeft - step <= 2) {
      element.scrollTo({ left: maxScroll, behavior: "smooth" });
      return;
    }

    element.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  useEffect(() => {
    if (tier.partners.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      if (!paused.current) move(1);
    }, 3200 + index * 350);

    return () => window.clearInterval(timer);
  }, [index, tier.partners.length]);

  return (
    <article
      data-partner-tier
      className={`relative overflow-hidden  `}
      onMouseEnter={() => {
        paused.current = true;
      }}
      onMouseLeave={() => {
        paused.current = false;
      }}
      onFocusCapture={() => {
        paused.current = true;
      }}
      onBlurCapture={() => {
        paused.current = false;
      }}
    >


      <div className={`relative z-10 flex flex-col justify-between gap-7 pb-4 sm:flex-row sm:items-end ${style.line}`}>
        <div>
          <h3
            className={`mt-3 italic leading-none`}
          >
            {tier.name}
          </h3>
        </div>

      </div>

      <div
        ref={track}
        className="relative z-10 mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label={`${tier.name} sales partners`}
      >
        {tier.partners.map((partner) => (
          <div
            key={partner.name}
            className="group/logo min-w-[84%] snap-start overflow-hidden  sm:min-w-[calc(50%-0.375rem)] lg:min-w-[calc(33.333%-0.5rem)] xl:min-w-[calc(20%-1rem)]"
          >
            <div className="relative aspect-[971/400] overflow-hidden ">
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                fill
                sizes="(max-width: 640px) 84vw, (max-width: 1024px) 50vw, 25vw"
                className="object-contain transition-transform duration-500 group-hover/logo:scale-105"
              />
            </div>
            {/* <div className="flex min-h-16 items-center justify-between gap-3 border-t border-black/10 px-4 py-3 text-ink">
              <p className="text-xs font-medium leading-5">{partner.name}</p>
              <span className="text-[9px] text-black/30">↗</span>
            </div> */}
          </div>
        ))}
      </div>


    </article>
  );
}

export default function SalesPartners() {
  const root = useRef<HTMLElement>(null);

  useGsap(() => {
    if (!root.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.from(root.current.querySelectorAll("[data-partner-heading]"), {
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

    root.current.querySelectorAll("[data-partner-tier]").forEach((tier) => {
      gsap.from(tier, {
        y: 70,
        opacity: 0,
        scale: 0.98,
        duration: 0.95,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: tier,
          start: "top 84%",
          once: true,
        },
      });
    });
  }, []);

  return (
    <section ref={root} id="partners" className="overflow-hidden bg-ivory py-28 sm:py-20">
      <div className="container-pad w-full">
        <div className="flex items-center justify-center w-full">
          <h2
            data-partner-heading
            className=" mt-2 text-[clamp(3.8rem,7.5vw,4rem)] font-medium leading-[1.2]"
          >
            Meet Our  {" "}
            <span className="italic text-champagne">Partners.</span>
          </h2>
        </div>

        <div className="mt-8 space-y-6">
          {salesPartnerCategories.map((tier, index) => (
            <PartnerCarousel key={tier.name} tier={tier} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
