"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "What stood out was not only the location, but the clarity of the entire vision. It feels considered, ambitious and genuinely built for the long term.",
    name: "Areeb Khan",
    role: "Homeowner · Islamabad",
  },
  {
    quote:
      "The scale is impressive, yet the attention to landscape and daily life makes it feel personal. We knew this was where we wanted our family’s next chapter.",
    name: "Maha & Hamza",
    role: "Villa owners · Overseas Pakistanis",
  },
  {
    quote:
      "A rare project where infrastructure, planning and commercial promise align. New City Paradise has become a central part of our property portfolio.",
    name: "Saad Mirza",
    role: "Private investor · Lahore",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % testimonials.length),
      6500,
    );
    return () => window.clearInterval(timer);
  }, []);

  const testimonial = testimonials[active];

  return (
    <section className="relative overflow-hidden bg-ivory py-28 sm:py-40">
      <span
        aria-hidden="true"
        className="display absolute left-1/2 top-8 -translate-x-1/2 text-[16rem] leading-none text-black/[0.025]"
      >
        “
      </span>
      <div className="container-pad relative">
        <div className="mx-auto max-w-5xl text-center">
          <p className="eyebrow justify-center text-champagne before:hidden">
            Stories from paradise
          </p>
          <div className="mt-12 min-h-[20rem] sm:min-h-[18rem]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="display text-[clamp(2.25rem,4.6vw,5rem)] leading-[1.05]">
                  “{testimonial.quote}”
                </p>
                <footer className="mt-10">
                  <strong className="block text-[10px] uppercase tracking-[0.22em]">
                    {testimonial.name}
                  </strong>
                  <span className="mt-2 block text-[9px] uppercase tracking-[0.16em] text-black/40">
                    {testimonial.role}
                  </span>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>
          <div className="mt-10 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActive(index)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  active === index ? "w-12 bg-champagne" : "w-5 bg-black/15"
                }`}
                aria-label={`View testimonial ${index + 1}`}
                aria-current={active === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
