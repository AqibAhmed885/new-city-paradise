"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface EditorialParallaxBannerProps {
  eyebrow?: string;
  headingTop?: string;
  headingBottom?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function EditorialParallaxBanner({
  eyebrow = "TRANSFORMING TOMORROW",
  headingTop = "SHAPING",
  headingBottom = "HORIZONS",
  description = "A benchmark of modern master planning, architectural distinction, and elevated lifestyle living.",
  ctaText = "Explore Masterplan",
  ctaHref = "#plots-overview",
  imageSrc = "/images/new-city-paradise-hero.png",
  imageAlt = "New City Paradise High-Rise Architectural Showcase",
}: EditorialParallaxBannerProps) {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    if (!container || !image) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          // Subtle architectural parallax on scroll
          gsap.fromTo(
            image,
            { yPercent: -10, scale: 1.08 },
            {
              yPercent: 10,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: container,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            }
          );

          if (content) {
            gsap.fromTo(
              content,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 1.1,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: container,
                  start: "top 70%",
                  once: true,
                },
              }
            );
          }
        }
      );

      return () => mm.revert();
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="
        relative
        z-20
        h-screen
        min-h-[100dvh]
        w-full
        overflow-hidden
        bg-[#0C0B0A]
        flex
        items-center
        justify-center
      "
    >
      {/* Edge-to-Edge Background Architectural Visual with Parallax */}
      <div
        ref={imageRef}
        className="
          absolute
          -top-[20%]
          -bottom-[20%]
          left-0
          right-0
          w-full
          h-[140%]
          will-change-transform
        "
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority={false}
          sizes="100vw"
          className="
            object-cover
            object-center
            filter
            brightness-[0.92]
            contrast-[1.02]
          "
        />

        {/* Subtle, soft ambient veil so the background image remains vibrant & clear */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-b
            from-[#0C0B0A]/40
            via-[#0C0B0A]/15
            to-[#0C0B0A]/50
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(ellipse_at_center,rgba(12,11,10,0.35)_0%,rgba(12,11,10,0.55)_85%)]
          "
        />
      </div>

      {/* Centered Editorial Content matching reference visual */}
      <div
        ref={contentRef}
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-4xl
          px-6
          py-24
          text-center
          sm:px-10
        "
      >
        {/* Subtle Eyebrow / EST */}
        {eyebrow && (
          <span
            className="
              inline-block
              text-[11px]
              sm:text-[12px]
              font-serif
              italic
              font-normal
              tracking-[0.35em]
              text-white/80
              drop-shadow-sm
              mb-3
            "
          >
            {eyebrow}
          </span>
        )}

        {/* Centerpiece H2 */}
        <h2
          className="
            font-heading
            text-[clamp(2rem,4.5vw,3.8rem)]
            font-normal
            uppercase
            leading-[1.15]
            tracking-[0.08em]
            text-white
            drop-shadow-[0_4px_30px_rgba(0,0,0,0.7)]
          "
        >
          {headingTop}
          {headingBottom && (
            <>
              <br />
              <span className="font-heading tracking-[0.08em] text-white">
                {headingBottom}
              </span>
            </>
          )}
        </h2>

        {/* 1-2 Lines of Text (if provided) */}
        {description && (
          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              font-sans
              text-[13.5px]
              sm:text-[14.5px]
              font-light
              leading-[1.7]
              text-white/85
              drop-shadow-sm
            "
          >
            {description}
          </p>
        )}

        {/* Elegant Minimalist Underline CTA */}
        <div className="mt-8 flex justify-center">
          <Link
            href={ctaHref}
            className="
              group
              inline-flex
              items-center
              gap-2.5
              text-[13px]
              sm:text-[14px]
              font-serif
              font-normal
              text-white
              pb-1
              border-b
              border-white
              transition-all
              duration-300
              hover:text-[#E0C9A6]
              hover:border-[#E0C9A6]
            "
          >
            <span>{ctaText}</span>
            <ArrowRight
              size={15}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1.5
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
