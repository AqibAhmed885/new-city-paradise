"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if session already showed preloader once to prevent annoyance on subsequent internal route changes
    const hasLoaded = sessionStorage.getItem("ncp_preloader_shown");

    if (hasLoaded) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("ncp_preloader_shown", "true");
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="emaar-preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.65,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0C0B0A] text-white"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,189,137,0.08)_0%,transparent_70%)]" />

          {/* Center Brand Container */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
            }}
            exit={{
              opacity: 0,
              y: -10,
              transition: { duration: 0.4 },
            }}
            className="relative flex flex-col items-center text-center px-6"
          >
            {/* Optional Logo Icon / Monogram */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.8, delay: 0.1 },
              }}
              className="mb-5"
            >
              <Image
                src="/images/logo.png"
                alt="New City Paradise"
                width={260}
                height={60}
                className="h-10 sm:h-12 w-auto object-contain brightness-110"
                priority
              />
            </motion.div>

            {/* Architectural Letter-Spaced Typography like Emaar */}
            <motion.div
              initial={{ opacity: 0, letterSpacing: "0.28em" }}
              animate={{
                opacity: 1,
                letterSpacing: "0.42em",
                transition: { duration: 1.2, ease: "easeOut", delay: 0.2 },
              }}
              className="mt-2 text-center"
            >
              <span className="font-heading text-xs sm:text-sm uppercase text-[#D9BD89] font-normal block pl-[0.42em]">
                NEW CITY PARADISE
              </span>
              <span className="mt-1 block text-[9.5px] font-sans tracking-[0.3em] uppercase text-white/40 pl-[0.3em]">
                Islamabad · Lahore
              </span>
            </motion.div>

            {/* Emaar-style Razor-Thin Hairline Progress Bar */}
            <div className="relative mt-8 h-[1px] w-36 sm:w-44 overflow-hidden bg-white/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{
                  x: "100%",
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: [0.65, 0, 0.35, 1],
                  },
                }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[#D9BD89] to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
