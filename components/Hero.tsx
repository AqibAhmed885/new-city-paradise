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
          bg-[#F9F7F2]
          border
          border-black/[0.06]
          px-8
          py-20
          sm:px-12
          lg:absolute
          lg:mt-0
          lg:min-h-0
          lg:px-10
          xl:px-16
        "
      >
        <div className="max-w-xl">
          {/* Eyebrow */}
          <span className="inline-block text-[10.5px] font-sans font-medium uppercase tracking-[0.24em] text-[#8C7A58] mb-3">
            Burhan Interchange · M-1 & CPEC Route
          </span>

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
              xl:text-[46px]
            "
          >
            A New Address. <br />
            <span className="font-light italic text-[#8C7A58]">
              A Better Tomorrow.
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-lg
              text-[15px]
              leading-relaxed
              text-[#514b42]/85
              sm:text-[16px]
            "
          >
            PHATA-approved living near Burhan Interchange, M-1 and the CPEC Route. Discover a thoughtfully planned community built for your next chapter.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#location-connectivity"
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-[#12110f]
                px-6
                py-3
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#12110f]
                transition-all
                duration-300
                hover:bg-[#12110f]
                hover:text-white
              "
            >
              Explore The Location
            </a>

            <a
              href="/contact"
              className="
                inline-flex
                items-center
                rounded-full
                bg-[#12110F]
                px-6
                py-3
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-white
                transition-all
                duration-300
                hover:bg-[#8C7A58]
              "
            >
              Inquire Inventory
            </a>
          </div>
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