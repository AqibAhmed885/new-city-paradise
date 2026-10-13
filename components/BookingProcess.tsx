"use client";

import { SITE_CONFIG } from "@/lib/siteConfig";

const steps = [
  {
    step: "01",
    title: "Select Plot Category & Size",
    desc: "Choose from official residential plot categories (3.5 Marla, 5 Marla, 10 Marla, 1 Kanal) or commercial plots (2.5, 4, 7 Marla) based on your family or commercial plans.",
  },
  {
    step: "02",
    title: "Consult Verified Sales",
    desc: `Connect with official sales consultants via helpline (${SITE_CONFIG.phoneDisplay}) or visit our head office at ${SITE_CONFIG.location.address} to obtain the latest official payment schedule.`,
  },
  {
    step: "03",
    title: "Submit Application & Docs",
    desc: "Provide CNIC/NICOP copies, passport-size photographs, and the completed official booking form. For Overseas Pakistanis, next-of-kin documentation is processed through verified channels.",
  },
  {
    step: "04",
    title: "Official Bank Deposit",
    desc: "Submit the official down payment directly into the designated project banking account. Always insist on an official stamped receipt issued by New City Paradise management.",
  },
];

export default function BookingProcess() {
  return (
    <section className="bg-gray-200 py-20 text-[#1A1C1B] sm:py-16 overflow-hidden">
      <div className="container-pad mx-auto max-w-5xl px-5 sm:px-8">

        {/* ======================================= */}
        {/* HEADER SECTION */}
        {/* ======================================= */}
        <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-12">
          {/* <p className="eyebrow text-[10px] font-semibold uppercase tracking-[0.28em] text-champagne sm:text-xs">
            Transparent Guidance
          </p> */}
          <h2 className="mt-4 text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.08] tracking-tight text-[#1A1C1B]">
            Plot Booking &amp;{" "}
            <span className="font-light italic text-champagne">Inquiry Process.</span>
          </h2>
          <p className="mt-4 font-serif text-sm leading-relaxed text-black/60 sm:text-base max-w-2xl mx-auto">
            Straightforward, legally verified steps to inquire and book residential or commercial plots directly with authorized representatives.
          </p>
        </div>

        {/* ======================================= */}
        {/* WEAVING WAVE TIMELINE */}
        {/* ======================================= */}
        <div className="relative mt-6 lg:mt-10">

          {/* 
            Desktop Wavy Background Line with Animated Arrow (SVG)
          */}
          <div className="absolute inset-y-0 left-1/2 hidden w-[100px] -translate-x-1/2 lg:block z-0 pointer-events-none">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">

              {/* Static Dashed Path */}
              <path
                id="timelinePath"
                d="M 20 12.5 C 20 25, 80 25, 80 37.5 C 80 50, 20 50, 20 62.5 C 20 75, 80 75, 80 87.5"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="opacity-30"
                vectorEffect="non-scaling-stroke"
              />

              

            </svg>
          </div>

          {/* Mobile Straight Connecting Line */}
          <div className="absolute bottom-10 left-[39px] top-[38px] block w-[2px] border-l-2 border-dashed border-black/30 lg:hidden" />

          {/* Timeline Items */}
          <div className="flex flex-col relative z-10">
            {steps.map((step, index) => {
              const isNodeLeft = index % 2 === 0;

              return (
                <div key={step.step} className="relative flex w-full items-start lg:items-center min-h-[220px]">

                  {/* MOBILE NODE */}
                  <div className="absolute left-[39px] -translate-x-1/2 top-0 z-10 flex h-20 w-20 items-center justify-center rounded-full border-[6px] border-[#FAFAFA] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] lg:hidden">
                    <span className="font-serif text-2xl font-light text-[#8C8273]">
                      {step.step}
                    </span>
                  </div>

                  {/* DESKTOP LAYOUT (Weaving Design) */}
                  <div className="hidden lg:flex w-full items-center">

                    {/* LEFT COLUMN */}
                    <div className="w-1/2 flex justify-end pr-8">
                      {!isNodeLeft && (
                        <div className="max-w-md text-right">
                          {/* <span className="mb-3 block font-menu text-[10px] font-bold tracking-widest text-[#8C8273] uppercase">
                            STEP {step.step}
                          </span> */}
                          <h3 className="mb-3 font-serif text-[21px] font-normal leading-snug text-[#1A1C1B]">
                            {step.title}
                          </h3>
                          <p className="font-serif text-[14px] leading-relaxed text-black/60">
                            {step.desc}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* CENTER WEAVING NODE */}
                    <div
                      className="relative z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-[5px] border-[#FAFAFA] bg-white shadow-xl transition-transform hover:scale-105"
                      style={{ transform: `translateX(${isNodeLeft ? '-30px' : '30px'})` }}
                    >
                      <span className="font-serif text-2xl font-light text-[#8C8273]">
                        {step.step}
                      </span>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="w-1/2 flex justify-start pl-8">
                      {isNodeLeft && (
                        <div className="max-w-md text-left">
                          {/* <span className="mb-3 block font-menu text-[10px] font-bold tracking-widest text-[#8C8273] uppercase">
                            STEP {step.step}
                          </span> */}
                          <h3 className="mb-3 font-serif text-[21px] font-normal leading-snug text-[#1A1C1B]">
                            {step.title}
                          </h3>
                          <p className="font-serif text-[14px] leading-relaxed text-black/60">
                            {step.desc}
                          </p>
                        </div>
                      )}
                    </div>

                  </div>

                  {/* MOBILE TEXT LAYOUT */}
                  <div className="flex w-full lg:hidden justify-start pl-[95px] pb-12">
                    <div>
                      <span className="mb-3 block font-menu text-[10px] font-bold tracking-widest text-[#8C8273] uppercase">
                        STEP {step.step}
                      </span>
                      <h3 className="mb-3 font-serif text-[20px] font-normal leading-snug text-[#1A1C1B]">
                        {step.title}
                      </h3>
                      <p className="font-serif text-[14px] leading-relaxed text-black/60">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}