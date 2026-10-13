"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { Plus, Minus, ArrowUpRight } from "lucide-react"; // Ensure lucide-react is installed

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

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faqs" className="bg-[#FAFAFA] py-10 text-[#1A1C1B] sm:py-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">

          {/* ======================================= */}
          {/* LEFT COLUMN: Sticky Header & Contact */}
          {/* ======================================= */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">

              {/* Heading */}
              
              <h2 className="mb-6 text-[clamp(2.5rem,4vw,3.5rem)] font-normal leading-[1.05] tracking-tight text-[#1A1C1B]">
                Frequently Asked <br className="hidden lg:block" />
                <span className="font-light italic text-champagne">Questions.</span>
              </h2>
              <p className="mb-10 font-serif text-[15px] leading-relaxed text-black/60">
                Find transparent, verified information regarding official approvals, plot sizes, and project development status directly from authorized sources.
              </p>

            </div>
          </div>

          {/* ======================================= */}
          {/* RIGHT COLUMN: Minimalist Accordion */}
          {/* ======================================= */}
          <div className="lg:col-span-7  ">
            <div className="flex flex-col gap-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div key={index} className="group shadow-sm hover:shadow-sm bg-white rounded-lg border border-gray-100 transition-shadow duration-300">
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                      className="flex w-full cursor-pointer items-start justify-between gap-6 px-2  py-3  text-left transition-colors sm:py-4 sm:px-2"
                    >
                      <span
                        className={`font-serif text-[18px] sm:text-xl font-normal leading-snug transition-colors duration-300 ${isOpen ? 'text-gray-700' : 'text-[#1A1C1B] group-hover:text-gra-y900'
                          }`}
                      >
                        {faq.q}
                      </span>
                      <span className={`mt-1 shrink-0 transition-colors duration-300 ${isOpen ? 'text-gray-700' : 'text-gray-400 group-hover:text-gra-y900'}`}>
                        {isOpen ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
                      </span>
                    </button>

                    {/* CSS Grid based smooth height transition */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] px-3 pb-4 opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pr-8 font-serif text-[14px] leading-relaxed text-black/60 sm:text-[15px]">
                          {faq.a}
                        </p>
                      </div>
                    </div>
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