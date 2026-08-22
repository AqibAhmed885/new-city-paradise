"use client";

import Image from "next/image";
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
    <section className="relative min-h-[90svh] overflow-hidden bg-ink text-white">
      <Image
        src="/images/grand-estate.jpg"
        alt="A New City Paradise residence at dusk"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.38)_0%,rgba(0,0,0,.18)_38%,rgba(0,0,0,.88)_100%)]" />
      <div className="grain absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,transparent_0%,rgba(0,0,0,.25)_70%)]" />

      <div className="container-pad relative z-10 flex min-h-[90svh] flex-col justify-between py-16 sm:py-20">
        

        <div className="py-20 sm:py-16">
          
          <div className="mt-10 min-h-[22rem] rounded-3xl bg-white/10 max-w-5xl backdrop-blur-md p-6  mx-auto text-center sm:min-h-[24rem]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="display text-[clamp(2.5rem,5vw,4rem)] leading-[1.2]  text-white">
                  “{testimonial.quote}”
                </p>
                <footer className="mt-12 flex items-center justify-end gap-5 text-left pl-5">
                  <div>
                    <strong className="block text-[10px] uppercase tracking-[0.22em] text-white">
                    {testimonial.name}
                    </strong>
                    <span className="mt-2 block text-[9px] uppercase tracking-[0.16em] text-white/50">
                      {testimonial.role}
                    </span>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-5 sm:flex-row sm:items-center sm:justify-between">
          
          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActive(index)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  active === index ? "w-12 bg-champagne" : "w-5 bg-white/25 hover:bg-white/55"
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
