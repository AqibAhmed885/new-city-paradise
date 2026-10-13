"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoPanelRef = useRef<HTMLDivElement>(null);
  const contentPanelRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const attemptPlay = () => {
      if (video.paused) {
        video.play().catch(() => { });
      }
    };

    attemptPlay();

    document.addEventListener("pointerdown", attemptPlay, {
      once: true,
    });

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const videoPanel = videoPanelRef.current;
      const contentPanel = contentPanelRef.current;

      if (!section || !videoPanel || !contentPanel) return;

      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const margin = 16;
          const gap = 16;
          const radius = 12;

          const availableWidth = () =>
            window.innerWidth - margin * 2 - gap;

          const finalWidth = () =>
            availableWidth() / 2;

          /*
           * INITIAL STATE
           * -------------------------
           * Fullscreen video.
           */
          gsap.set(videoPanel, {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: 0,
            zIndex: 2,
          });

          /*
           * Right panel starts outside viewport.
           */
          gsap.set(contentPanel, {
            position: "absolute",
            top: margin,
            left: () => window.innerWidth,
            width: finalWidth,
            height: `calc(100% - ${margin * 2}px)`,
            opacity: 1,
            borderRadius: radius,
            zIndex: 3,
          });

          const tl = gsap.timeline({
            defaults: {
              ease: "none",
            },

            scrollTrigger: {
              trigger: section,

              /*
               * Hero starts pinning immediately.
               */
              start: "top top",

              /*
               * More scroll distance so the final state
               * remains visible for a moment.
               */
              end: "+=150%",

              pin: true,

              /*
               * IMPORTANT:
               * Keeps space for this pinned section,
               * preventing the following section from
               * jumping over it.
               */
              pinSpacing: true,

              scrub: 0.8,

              anticipatePin: 1,

              invalidateOnRefresh: true,

              /*
               * Helps GSAP calculate stacking and pin
               * position correctly.
               */
              pinReparent: false,
            },
          });

          /*
           * STEP 1
           * Video shrinks from fullscreen to left.
           */
          tl.to(
            videoPanel,
            {
              top: margin,
              left: margin,

              width: finalWidth,

              height: `calc(100% - ${margin * 2}px)`,

              borderRadius: radius,

              duration: 1,
            },
            0
          );

          /*
           * STEP 2
           * Content enters at exactly same time.
           */
          tl.to(
            contentPanel,
            {
              left: () =>
                margin + finalWidth() + gap,

              duration: 1,
            },
            0
          );

          /*
           * STEP 3
           * IMPORTANT:
           *
           * Keep the final split-screen state visible
           * before Hero releases from pinning.
           */
          tl.to({}, {
            duration: 0.6,
          });

          return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
          };
        }
      );

      /*
       * Mobile / reduced motion
       */
      mm.add(
        "(max-width: 1023px), (prefers-reduced-motion: reduce)",
        () => {
          gsap.set(
            [videoPanel, contentPanel],
            {
              clearProps: "all",
            }
          );
        }
      );

      return () => {
        mm.revert();
      };
    }, sectionRef);

    /*
     * Refresh ScrollTrigger after layout is calculated.
     */
    const refreshTimer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      window.clearTimeout(refreshTimer);

      ctx.revert();

      document.removeEventListener(
        "pointerdown",
        attemptPlay
      );
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="
        relative
        z-30
        min-h-[100svh]
        overflow-hidden
        bg-white
        lg:h-[100svh]
        lg:min-h-[100svh]
      "
    >
      {/* ============================= */}
      {/* VIDEO PANEL */}
      {/* ============================= */}

      <div
        ref={videoPanelRef}
        className="
          relative
          h-[65svh]
          w-full
          overflow-hidden
          rounded-xl

          lg:absolute
          lg:inset-0
          lg:h-full
          lg:rounded-none
        "
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-poster.jpg"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        >
          <source
            src="/videos/hero.mp4"
            type="video/mp4"
          />
        </video>

        {/* Video overlay */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-b
            from-black/20
            via-transparent
            to-black/30
          "
        />
      </div>

      {/* ============================= */}
      {/* CONTENT PANEL */}
      {/* ============================= */}

      <div
        ref={contentPanelRef}
        className="
          relative
          mt-4
          flex
          min-h-[55svh]
          w-full
          items-center
          overflow-hidden
          rounded-xl
          bg-gray-100
          px-8
          py-20

          sm:px-12

          lg:absolute
          lg:mt-0
          lg:min-h-0
          lg:px-8

          xl:px-10
        "
      >
        <div className="max-w-xl">

          {/* Heading */}

          <h1
            className="
              text-3xl
              font-normal
              uppercase
              leading-[1.12]
              tracking-[-0.03em]
              text-[#12110f]

              sm:text-4xl
              xl:text-5xl
            "
          >
            A New Address.

            <br />

            <span
              className="
                font-light
                italic
                text-champagne
              "
            >
              A Better Tomorrow.
            </span>
          </h1>

          {/* Description */}

          <p
            className="
              mt-7
              max-w-lg
              text-lg
              leading-relaxed
              text-[#514b42]

              sm:text-xl
            "
          >
            PHATA-approved living near Burhan
            Interchange, M-1 and the CPEC Route.
            Discover a thoughtfully planned
            community built for your next chapter.
          </p>

          {/* CTA */}

          <a
            href="#location-connectivity"
            className="
              mt-9
              inline-flex
              items-center

              border
              border-[#12110f]

              px-7
              py-3

              text-sm
              font-semibold
              uppercase
              tracking-[0.18em]

              text-[#12110f]

              transition-colors
              duration-300

              hover:bg-[#12110f]
              hover:text-white
            "
          >
            Explore the location
          </a>
        </div>
      </div>

      {/* SEO / Accessibility */}

      <div className="sr-only">
        <p>
          New City Paradise — PHATA-Approved Housing
          Society near Burhan Interchange (M-1)
          and CPEC Route.
        </p>
      </div>
    </section>
  );
}