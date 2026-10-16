
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
import CitySwitcher from "./CitySwitcher";
import { SITE_CONFIG } from "@/lib/siteConfig";

const islamabadLinks = [
  ["About Us", "/about"],
  ["Location", "/#location-connectivity"],
  ["Plots & Plans", "/#plots-overview"],
  ["Masterplan", "/masterplan"],
  ["Amenities", "/amenities"],
  ["FAQs", "/#faqs"],
  ["Contact", "/contact"],
] as const;

const lahoreLinks = [
  ["About Us", "/lahore/about"],
  ["Location", "/lahore#lahore-location"],
  ["Sectors & Plots", "/lahore#lahore-sectors"],
  ["Masterplan", "/lahore/masterplan"],
  ["Amenities", "/lahore/amenities"],
  ["FAQs", "/lahore#lahore-faqs"],
  ["Contact", "/lahore/contact"],
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
  const isLahore = pathname.startsWith("/lahore");
  const links = isLahore ? lahoreLinks : islamabadLinks;
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
          top-0
          left-0
          right-0
          z-50
          w-full
        "
      >
        <div
          className={`
            relative
            flex
            h-[68px]
            items-center
            justify-between
            px-4
            transition-all
            duration-500
            sm:px-8
            lg:h-[72px]
            xl:px-12
            ${isSolid
              ? `
                  bg-[#0C0B0A]/85
                  backdrop-blur-xl
                  border-b
                  border-white/[0.08]
                  shadow-[0_10px_30px_rgba(0,0,0,0.2)]
                  text-white
                `
              : `
                  bg-gradient-to-b
                  from-black/60
                  via-black/25
                  to-transparent
                  text-white
                `
            }
          `}
        >
          {/* LEFT: LOGO & CITY SWITCHER */}
          <div className="flex min-w-0 items-center gap-3 sm:gap-5 xl:gap-6">
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

            <div className="hidden sm:flex items-center shrink-0">
              <CitySwitcher />
            </div>
          </div>

          {/* CENTER: DESKTOP NAVIGATION */}
          <nav
            className="
              hidden
              items-center
              gap-3.5
              lg:flex
              xl:gap-5
              2xl:gap-7
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
                    py-2
                    text-[11.5px]
                    font-medium
                    uppercase
                    tracking-[0.16em]
                    transition-colors
                    duration-200
                    ${isActive
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                    }
                  `}
                >
                  {label}

                  {/* Animated minimal underline */}
                  <span
                    className={`
                      absolute
                      bottom-0
                      left-0
                      h-[1px]
                      bg-[#B69B6C]
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
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* Phone */}
            <Link
              href={`tel:${SITE_CONFIG.phoneTel}`}
              aria-label="Call New City Paradise"
              title="Call us"
              className="
                hidden
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                text-white/80
                transition-all
                duration-300
                hover:border-white/50
                hover:text-white
                hover:bg-white/10
                lg:flex
              "
            >
              <PhoneCall size={14} strokeWidth={1.5} />
            </Link>

            {/* WhatsApp */}
            <a
              href={isLahore ? "https://wa.me/923335252870?text=Hi%20New%20City%20Paradise%20Lahore,%20I%20am%20interested%20in%20learning%20more." : SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              title="WhatsApp"
              className="
                hidden
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                text-white/80
                transition-all
                duration-300
                hover:border-white/50
                hover:text-white
                hover:bg-white/10
                lg:flex
              "
            >
              <BsWhatsapp size={14} />
            </a>

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

            {/* Mobile City Switcher */}
            <div className="mt-6 mb-2">
              <CitySwitcher size="mobile" />
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
