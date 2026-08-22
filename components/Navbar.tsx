"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import BrandMark from "./BrandMark";
import Link from "next/link";
const links = [
  ["Story", "/#about"],
  ["Masterplan", "/masterplan"],
  ["Residences", "/#properties"],
  ["Partners", "/#partners"],
  ["Amenities", "/#amenities"],
];

export default function Navbar({ solid = false }: { solid?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-1/2 top-4 z-50 flex  max-w-[1480px] -translate-x-1/2 items-center justify-between rounded-full px-4 py-3 transition-all duration-500 sm:px-6 ${
          scrolled || solid ? "bg-ivory/50 text-ink shadow-lg backdrop-blur-xl" : "glass text-white"
        }`}
      >
        

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className=""
            >
              <h1 className={`text-[12px] font-medium uppercase `}>
                {label}
              </h1>
              
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* <a
            href="/contact"
            className={`hidden rounded-full px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] transition-colors sm:inline-flex ${
              scrolled || solid
                ? "bg-ink text-white hover:bg-champagne"
                : "bg-white text-ink hover:bg-champagne hover:text-white"
            }`}
          >
            Book a private visit
          </a> */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-full border border-current/30 lg:hidden"
            aria-label="Open navigation"
          >
            <span className="space-y-1.5">
              <i className="block h-px w-4 bg-current" />
              <i className="block h-px w-4 bg-current" />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-ink p-6 text-white"
            initial={{ clipPath: "circle(0% at 92% 5%)" }}
            animate={{ clipPath: "circle(150% at 92% 5%)" }}
            exit={{ clipPath: "circle(0% at 92% 5%)" }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex items-center justify-between">
              <BrandMark light />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/30"
                aria-label="Close navigation"
              >
                <span className="text-2xl font-light">×</span>
              </button>
            </div>
            <nav className="my-auto flex flex-col" aria-label="Mobile navigation">
              {links.concat([["Contact", "/contact"]]).map(([label, href], index) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="display border-b border-white/15 py-4 text-[clamp(2.8rem,12vw,5rem)] leading-none"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + index * 0.07 }}
                >
                  {label}
                </motion.a>
              ))}
            </nav>
            <p className="text-[10px] uppercase tracking-[0.24em] text-white/50">
              M-1 Motorway · 0 km
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
