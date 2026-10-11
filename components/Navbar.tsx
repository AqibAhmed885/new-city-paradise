"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import BrandMark from "./BrandMark";
import Link from "next/link";

const links = [
  ["Story", "/about"],
  ["Masterplan", "/masterplan"],
  ["Residences", "/#properties"],
  ["Amenities", "/amenities"],
  ["Blog", "/blog"],
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
    <header className={`fixed top-0 left-0 w-full z-50 px-6 py-2.5 flex items-center justify-between transition-all duration-300 ${scrolled || solid ? 'bg-ink text-white shadow-xl' : 'text-white bg-gradient-to-b from-black/60 to-transparent'}`}>
      
      {/* Left section: Logo and Links */}
      <div className="flex items-center gap-10">
        <div className="relative z-10 flex items-center gap-4">
          <BrandMark light={!scrolled && !solid} />
          <span className="w-px h-6 bg-white/40 block"></span>
        </div>
        
        <nav className="hidden lg:flex items-center gap-6" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="text-[11.5px] font-menu uppercase tracking-widest hover:text-white/70 transition-colors">
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Right section: Actions */}
      <div className="hidden xl:flex items-center gap-6">
        <Link href="/contact" className={`border px-5 py-2.5 text-[10px] font-normal uppercase tracking-widest transition-colors ${scrolled || solid ? 'border-white hover:bg-white hover:text-ink' : 'border-white hover:bg-white hover:text-black'}`}>
          GET IN TOUCH
        </Link>

        <div className="flex items-center gap-6 ml-2">
          <a href="tel:+1234567890" className="flex items-center gap-2 text-[10px] font-normal uppercase tracking-widest hover:text-white/70 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            INSTANT CALL
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-normal uppercase tracking-widest hover:text-white/70 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            WHATSAPP
          </a>
        </div>
      </div>

      {/* Mobile menu button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="grid h-10 w-10 place-items-center xl:hidden"
        aria-label="Open navigation"
      >
        <span className="space-y-1.5">
          <i className="block h-px w-6 bg-white" />
          <i className="block h-px w-6 bg-white" />
          <i className="block h-px w-6 bg-white" />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-ink p-6 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between">
              <BrandMark light />
              <button onClick={() => setOpen(false)} className="text-3xl font-light">&times;</button>
            </div>
            <nav className="mt-12 flex flex-col gap-6">
              {links.map(([label, href]) => (
                <Link key={href} href={href} onClick={() => setOpen(false)} className="text-xl font-sans uppercase tracking-widest border-b border-white/10 pb-4">
                  {label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
