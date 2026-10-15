
"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
} from "react";
import {
  ArrowUpRight,
  Menu,
  PhoneCall,
  X,
} from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";

import BrandMark from "./BrandMark";
import { SITE_CONFIG } from "@/lib/siteConfig";

const links = [
  ["About Us", "/about"],
  ["Location", "/#location-connectivity"],
  ["Plots & Plans", "/#plots-overview"],
  ["Masterplan", "/masterplan"],
  ["Amenities", "/amenities"],
  ["FAQs", "/#faqs"],
  ["Contact", "/contact"],
] as const;

export default function Navbar({
  solid = false,
}: {
  solid?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  const isSolid = scrolled || solid || open;

  // Smart hide/show on scroll
  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const updateNavbar = () => {
      const currentY = Math.max(0, window.scrollY);
      const previousY = lastScrollY.current;
      const difference = currentY - previousY;

      setScrolled(currentY > 40);

      // Always visible near the top
      if (currentY <= 80) {
        setVisible(true);
      }
      // Ignore tiny scroll movements
      else if (Math.abs(difference) >= 3) {
        if (difference > 0) {
          // Scrolling DOWN -> hide
          setVisible(false);
        } else {
          // Scrolling UP -> show
          setVisible(true);
        }
      }

      lastScrollY.current = currentY;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(updateNavbar);
      }
    };

    updateNavbar();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setOpen(false);
    setVisible(true);
  }, [pathname]);

  // Lock background scrolling while mobile menu is open
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const navVariants = {
    visible: {
      y: 0,
      opacity: 1,
    },
    hidden: {
      y: "-150%",
      opacity: 0,
    },
  };

  return (
    <>
      {/* FLOATING NAVBAR */}
      <motion.header
        initial={false}
        animate={
          visible || open
            ? "visible"
            : "hidden"
        }
        variants={navVariants}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          fixed
          left-0
          right-0
          z-50
          mx-auto
          w-[calc(100%-1rem)]
          max-w-[1600px]
          sm:w-full
        "
      >
        <div
          className={`
            relative
            flex
            h-[72px]
            items-center
            justify-between
            px-4
            transition-[background-color,border-color,box-shadow]
            duration-300
            sm:px-6
            lg:h-[60px]
            xl:px-8
            ${isSolid
              ? `
                  border-white
                  bg-black/75
                  shadow-[0_12px_40px_rgba(0,0,0,0.15)]
                  text-white
                `
              : `
                  text-white
                `
            }
          `}
        >
          {/* LEFT: LOGO */}
          <div className="flex min-w-0 items-center">
            <div
              className="
                relative
                z-10
                flex
                shrink-0
                items-center
                transition-opacity
                hover:opacity-80
              "
            >
              <BrandMark light />
            </div>

            <span
              className="
                ml-5
                hidden
                h-7
                w-px
                bg-white/20
                lg:block
                xl:ml-7
              "
            />
          </div>

          {/* CENTER: DESKTOP NAVIGATION */}
          <nav
            className="
              hidden
              items-center
              gap-4
              lg:flex
              xl:gap-6
              2xl:gap-8
            "
            aria-label="Primary navigation"
          >
            {links.map(([label, href]) => {
              const isActive =
                !href.includes("#") &&
                pathname === href;

              return (
                <Link
                  key={href}
                  href={href}
                  className={`
                    group
                    relative
                    whitespace-nowrap
                    py-3
                    text-[10px]
                    font-medium
                    capitalize
                    tracking-normal
                    transition-colors
                    duration-200
                    xl:text-sm
                    ${isActive
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                    }
                  `}
                >
                  {label}

                  {/* Animated underline */}
                  <span
                    className={`
                      absolute
                      bottom-1
                      left-0
                      h-px
                      bg-[#D9BD89]
                      transition-all
                      duration-300
                      ${isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </nav>

          {/* RIGHT: ACTIONS */}
          <div className="flex items-center gap-3 xl:gap-4">
            {/* Phone */}
            <Link
              href={`tel:${SITE_CONFIG.phoneTel}`}
              aria-label="Call New City Paradise"
              title="Call us"
              className="
                hidden
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                course-pointer                
                text-white
                transition-all
                duration-300
                hover:border-white/40
                hover:bg-white/15
                xl:flex
              "
            >
              <PhoneCall size={17} strokeWidth={1.7} />
            </Link>

            {/* WhatsApp */}
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              title="WhatsApp"
              className="
                hidden
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                text-[#4ADE80]
                transition-all
                duration-300
                hover:border-[#4ADE80]/50
                hover:bg-[#4ADE80]/10
                xl:flex
              "
            >
              <BsWhatsapp size={18} />
            </a>

            {/* Premium CTA */}
            <Link
              href="/contact"
              className="
                group
                hidden
                h-11
                items-center
                justify-center
                gap-3
                whitespace-nowrap
                border
                border-ivory
                px-5
                text-sm
                font-semibold
                text-ivory
                transition-all
                duration-300
                hover:border-white
                hover:bg-white/15
                lg:inline-flex
              "
            >
              Get in Touch

              <ArrowUpRight
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>

            {/* MOBILE / TABLET MENU BUTTON */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-lg
                border
                border-white/20
                text-white
                transition-colors
                hover:bg-white/10
                lg:hidden
              "
            >
              <Menu size={23} strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE FULLSCREEN NAVIGATION */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed
              inset-0
              z-[60]
              flex
              h-[100dvh]
              flex-col
              overflow-y-auto
              bg-[#17231F]
              px-6
              pb-8
              pt-6
              text-white
              sm:px-10
            "
          >
            {/* Mobile header */}
            <div className="flex items-center justify-between">
              <BrandMark light />

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  transition-colors
                  hover:bg-white/10
                "
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>

            {/* Menu */}
            <nav
              className="
                my-auto
                flex
                flex-col
                py-12
              "
              aria-label="Mobile navigation"
            >
              <p
                className="
                  mb-7
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-[#D9BD89]
                "
              >
                Explore New City Paradise
              </p>

              {links.map(([label, href], index) => (
                <motion.div
                  key={href}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                  }}
                  transition={{
                    delay: shouldReduceMotion
                      ? 0
                      : index * 0.05,
                    duration: shouldReduceMotion
                      ? 0
                      : 0.35,
                  }}
                >
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      border-b
                      border-white/10
                      py-4
                      text-2xl
                      font-light
                      uppercase
                      tracking-[0.04em]
                      transition-colors
                      hover:text-[#D9BD89]
                      sm:text-4xl
                    "
                  >
                    <span>{label}</span>

                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.3}
                      className="
                        text-white/40
                        transition-transform
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-[#D9BD89]
                      "
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom actions */}
            <div
              className="
                mt-auto
                grid
                grid-cols-2
                gap-3
                border-t
                border-white/10
                pt-6
              "
            >
              <a
                href={`tel:${SITE_CONFIG.phoneTel}`}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  border
                  border-white/20
                  px-4
                  py-4
                  text-xs
                  font-medium
                  uppercase
                  tracking-wider
                "
              >
                <PhoneCall size={17} />
                Call Us
              </a>

              <a
                href={SITE_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  bg-[#D9BD89]
                  px-4
                  py-4
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-[#17231F]
                "
              >
                <BsWhatsapp size={18} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
