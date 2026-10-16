"use client";

import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { LAHORE_CONFIG } from "@/lib/lahoreConfig";

const lahoreFaqs = [
  {
    q: "Where is New City Paradise Lahore physically located?",
    a: "New City Paradise Lahore is strategically located on the Eastern Bypass (Lahore – Sialkot Motorway M-11), directly within RUDA Phase 1. It offers instant access to the Lahore Ring Road (3 mins), Allama Iqbal International Airport (10 mins), and DHA Lahore (10 mins).",
  },
  {
    q: "What is the RUDA development status and authority approval?",
    a: "The project is positioned within the official RUDA (Ravi Urban Development Authority) Phase 1 riverfront development corridor, planned under modern sustainable urban guidelines with direct infrastructural connectivity to major Lahore bypass arteries.",
  },
  {
    q: "Who is the master developer behind New City Paradise Lahore?",
    a: "The project is developed by New City Housing Developers, a premier titan in Pakistan's real estate development with an illustrious track record spanning over 45 years (the developers of New City Phase 1 & 2 in Wah Cantt, New City Arcade, and New City Paradise Islamabad).",
  },
  {
    q: "What inventory is being offered in New City Paradise Lahore?",
    a: "The planned inventory encompasses signature Ravi Marina riverfront residential sectors (including 3.5, 5, 10 Marla and 1 Kanal plots) and a high-street Downtown Commercial Boulevard tailored for corporate and retail investment.",
  },
  {
    q: "How can I book a plot or schedule an official site visit?",
    a: "You can book directly by contacting our authorized sales desk or initiating an instant WhatsApp inquiry. Our dedicated team assists with booking documents, payment schedules, and guided site visits along the Eastern Bypass.",
  },
];

export default function LahoreFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="lahore-faqs" className="bg-[#FAFAF8] py-20 sm:py-28 text-[#12110F] border-t border-black/[0.06]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* LEFT COLUMN: Sticky Header */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <span className="text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.24em] text-[#8C7A58] mb-3 block">
                Official Information
              </span>
              <h2 className="mb-5 text-[clamp(2.4rem,4vw,3.6rem)] font-heading font-normal leading-[1.08] tracking-tight text-[#12110F]">
                Frequently Asked <br className="hidden lg:block" />
                <span className="font-light italic text-[#8C7A58]">Questions.</span>
              </h2>
              <p className="mb-8 font-sans text-[15px] leading-relaxed text-[#12110F]/65 max-w-md">
                Verified answers concerning RUDA Phase 1 location, Eastern Bypass connectivity, plot sizes, and official developer milestones.
              </p>

              <div className="hidden lg:block pt-6 border-t border-black/[0.08]">
                <span className="text-xs text-black/50 block mb-2 font-sans">Have a specific question?</span>
                <a
                  href={LAHORE_CONFIG.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#8C7A58] hover:text-black transition-colors"
                >
                  <span>Chat with our Lahore desk</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Accordion */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-black/10 border-t border-b border-black/10">
              {lahoreFaqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div key={faq.q} className="py-6 sm:py-7">
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-start justify-between gap-6 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-heading text-lg sm:text-xl font-normal leading-snug text-[#1A1C1B]">
                        {faq.q}
                      </span>
                      <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-black/15 text-black/60 transition-transform">
                        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="mt-4 pr-10">
                        <p className="font-sans text-[15px] leading-relaxed text-black/65">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
