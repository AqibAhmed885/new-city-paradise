"use client";

import { SITE_CONFIG } from "@/lib/siteConfig";

const steps = [
  {
    step: "01",
    eyebrow: "SELECT PLOT CATEGORY",
    title: "Select Plot Category & Size",
    desc: "Choose from official residential plot categories (3.5 Marla, 5 Marla, 10 Marla, 1 Kanal) or commercial plots (2.5, 4, 7 Marla) based on your family or commercial plans.",
    // Image suggestion: Architectural blueprint or colorful master plan map
    image: "https://images.unsplash.com/photo-1502005229762-fc1b2b812ca5?auto=format&fit=crop&w=800&q=80",
  },
  {
    step: "02",
    eyebrow: "CONSULT VERIFIED SALES",
    title: "Consult Verified Sales",
    desc: `Connect with official sales consultants via helpline (${SITE_CONFIG?.phoneDisplay || "0318 9999999"}) or visit our head office at ${SITE_CONFIG?.location?.address || "Main GT Road, adjacent to Burhan Interchange (M-1 Motorway) & CPEC Route"} to obtain the latest official payment schedule.`,
    // Image suggestion: Aerial shot of development, highway/gate or office entrance
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
  },
  {
    step: "03",
    eyebrow: "SUBMIT APPLICATION & DOCS",
    title: "Submit Application & Docs",
    desc: "Provide CNIC/NICOP copies, passport-size photographs, and the completed official booking form. For Overseas Pakistanis, next-of-kin documentation is processed through verified channels.",
    // Image suggestion: A professional consultation in an office or signing documents
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  },
  {
    step: "04",
    eyebrow: "OFFICIAL BANK DEPOSIT",
    title: "Official Bank Deposit",
    desc: "Submit the official down payment directly into the designated project banking account. Always insist on an official stamped receipt issued by New City Paradise management.",
    // Image suggestion: Banking / Transaction desk with stamps and official receipts
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
  },
];

export default function BookingProcess() {
  return (
    <section className="bg-[#0A0A0A] text-white py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1440px]">

        {/* ======================================= */}
        {/* HEADER SECTION */}
        {/* ======================================= */}
        <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
          <h2 className="text-[clamp(2.25rem,4vw,3.75rem)] font-light leading-[1.1] tracking-tight">
            Plot Booking &amp;{" "}
            <span className="font-serif italic text-champagne">Inquiry Process</span>
          </h2>
          <p className="mt-6 text-sm font-light leading-relaxed text-white/60 sm:text-base max-w-2xl mx-auto">
            Straightforward, legally verified steps to inquire and book residential or commercial plots directly with authorized representatives.
          </p>
        </div>

        {/* ======================================= */}
        {/* FULL HEIGHT BACKGROUND IMAGE CARD GRID */}
        {/* ======================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-white/10 overflow-hidden">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className="group relative flex flex-col justify-end min-h-[520px] lg:min-h-[600px] px-6 py-10 lg:px-8 lg:py-12 border-b md:border-b-0 md:border-r border-white/10 last:border-0 overflow-hidden transition-all duration-700"
            >

              {/* IMMERSIVE BACKGROUND IMAGE */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105 z-0"
                style={{ backgroundImage: `url(${step.image})` }}
              />

              {/* GRADIENTS: Multi-tier shading for text clarity */}
              {/* Base darkening overlay */}
              {/* <div className="absolute inset-0 bg-black/40 z-[1] transition-opacity duration-700 group-hover:bg-black/30" /> */}
              {/* Bottom heavy dark fade */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-[2]" /> */}
              {/* Golden hovered background tint */}
              {/* <div className="absolute inset-0 bg-gradient-to-b from-[#C5A059]/0 via-[#C5A059]/5 to-[#C5A059]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-[2]" /> */}

              {/* ======================================= */}
              {/* CARD CONTENT */}
              {/* ======================================= */}
              <div className="relative z-10 flex flex-col justify-start h-full">

                {/* Big Golden Step Number */}
                {/* <div className="mt-12 mb-4 font-serif text-5xl lg:text-6xl font-light text-[#C5A059] group-hover:text-white transition-colors duration-500">
                  {step.step}
                </div> */}

                {/* Title */}
                <h3 className="mb-3 font-serif text-2xl font-normal leading-snug tracking-wide group-hover:text-[#C5A059] transition-colors duration-500">
                  {step.title}
                </h3>

                {/* Paragraph Description */}
                <p className="text-[13px] font-light leading-relaxed text-white/70 line-clamp-4 group-hover:line-clamp-none transition-all duration-700">
                  {step.desc}
                </p>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}