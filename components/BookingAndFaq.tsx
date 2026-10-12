"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";

const steps = [
  {
    step: "01",
    title: "Select Plot Category & Size",
    desc: "Choose from official residential plot categories (3.5 Marla, 5 Marla, 10 Marla, 1 Kanal) or commercial plots (2.5, 4, 7 Marla) based on your family or commercial plans.",
  },
  {
    step: "02",
    title: "Consult Verified Sales Representatives",
    desc: `Connect with official sales consultants via helpline (${SITE_CONFIG.phoneDisplay}) or visit our head office at ${SITE_CONFIG.location.address} to obtain the latest official payment schedule.`,
  },
  {
    step: "03",
    title: "Submit Application & Documentation",
    desc: "Provide CNIC/NICOP copies, passport-size photographs, and the completed official booking form. For Overseas Pakistanis, next-of-kin documentation is processed through verified channels.",
  },
  {
    step: "04",
    title: "Official Bank Deposit & Receipt",
    desc: "Submit the official down payment directly into the designated project banking account. Always insist on an official stamped receipt issued by New City Paradise management.",
  },
];

const faqs = [
  {
    q: "What is the official PHATA NOC approval status?",
    a: `New City Paradise holds an official No Objection Certificate (NOC) granted by the Punjab Housing and Town Planning Agency (PHATA) under registration reference letter DG-PHATA/W-I/PHS/61/2022 for an approved area of 4,256+ Kanals.`,
  },
  {
    q: "What residential plot sizes are offered in New City Paradise?",
    a: "The project's verified residential inventory includes 3.5 Marla, 5 Marla, 10 Marla, and 1 Kanal plots, alongside a dedicated Awami Block with 4 and 6 Marla planned plots.",
  },
  {
    q: "Where is the project physically located?",
    a: "New City Paradise is situated directly on the 330-ft GT Road adjacent to Burhan Interchange on the M-1 Islamabad-Peshawar Motorway, right along the northern CPEC Route near Wah Cantt and Hassan Abdal.",
  },
  {
    q: "Who is the developer of New City Paradise?",
    a: "The project is developed by New City Housing Projects (the renowned developers of New City Phase 1 and Phase 2 in Wah Cantt, New City Arcade, and Avalon Plaza), bringing over four decades of real estate development legacy.",
  },
  {
    q: "Are amenities like Glow Park, sports facilities, and waterfront district operational?",
    a: "These signature amenities are officially planned and part of the master plan design. Development works are ongoing in phases. Prospective buyers can track dated development milestones or visit the site to view current progress.",
  },
];

export default function BookingAndFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="faqs" className="relative z-20 bg-ivory py-20 sm:py-28 text-ink border-b border-black/10">
      <div className="container-pad max-w-6xl mx-auto">
        
        {/* Booking Process Block */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <p className="eyebrow text-[#1b3d2f] text-[10px] sm:text-xs uppercase tracking-[0.28em] font-semibold">
              Transparent Guidance
            </p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] tracking-tight text-ink mt-2">
              Plot Booking &amp;{" "}
              <span className="italic text-[#1b3d2f]">Inquiry Process.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-black/70 font-serif leading-relaxed">
              Straightforward, legally verified steps to inquire and book residential or commercial plots directly with authorized representatives.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div
                key={st.step}
                className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="font-menu text-xs font-bold tracking-widest text-champagne block mb-3">
                    STEP {st.step}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-ink leading-snug">
                    {st.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-black/65 font-serif">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Accordion Block */}
        <div className="max-w-4xl mx-auto pt-10 border-t border-black/10">
          <div className="text-center mb-10">
            <p className="eyebrow text-[#1b3d2f] text-[10px] sm:text-xs uppercase tracking-[0.28em] font-semibold">
              Buyer Due Diligence
            </p>
            <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.75rem)] leading-[1.1] text-ink mt-2">
              Frequently Asked Questions.
            </h2>
          </div>

          <div className="space-y-3.5">
            {faqs.map((f, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-black/10 bg-white overflow-hidden transition-all shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-black/[0.01]"
                  >
                    <span className="font-serif text-base sm:text-lg text-ink font-medium">
                      {f.q}
                    </span>
                    <span className="text-lg text-champagne font-light shrink-0">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-black/5 text-xs sm:text-sm leading-relaxed text-black/70 font-serif">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Need assistance CTA */}
          <div className="mt-12 text-center p-6 rounded-2xl bg-[#1b3d2f]/5 border border-[#1b3d2f]/15">
            <p className="text-xs uppercase tracking-wider font-menu text-[#1b3d2f] font-semibold">
              Need Verification or Individual Plot Assistance?
            </p>
            <p className="text-sm font-serif text-black/70 mt-1">
              Speak directly with our authorized sales advisors for updated payment plans and site visits.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a
                href={`tel:${SITE_CONFIG.phoneTel}`}
                className="px-5 py-2.5 rounded-full bg-[#1b3d2f] text-white text-xs font-menu uppercase tracking-wider hover:bg-[#12281f] transition-colors"
              >
                Call {SITE_CONFIG.phoneDisplay}
              </a>
              <a
                href={SITE_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full border border-champagne bg-white text-ink text-xs font-menu uppercase tracking-wider hover:bg-champagne hover:text-white transition-colors"
              >
                Direct WhatsApp
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
