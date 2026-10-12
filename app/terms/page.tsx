import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Terms & Conditions | New City Paradise",
  description:
    "Review the terms, conditions, and official buyer guidelines for New City Paradise housing project near Burhan Interchange.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms & Conditions | New City Paradise",
    description:
      "Official terms, plot booking guidelines, and regulatory disclosures for New City Paradise.",
    url: "https://newcityparadise.com/terms",
  },
};

const termsSections = [
  {
    number: "01",
    title: "Project Scope & Regulatory Approvals",
    paragraphs: [
      `New City Paradise is a master-planned housing project located on the Main GT Road, adjacent to Burhan Interchange (M-1 Motorway) and the CPEC Route. The project holds approval from the Punjab Housing and Town Planning Agency (PHATA) under NOC No. ${SITE_CONFIG.phataNoc} for an initial approved area of ${SITE_CONFIG.approvedArea} out of a total masterplan vision of ${SITE_CONFIG.masterplanVision}.`,
      "All buyers, members, and investors are advised to verify the latest approved layout plans, plot dimensions, and documentation directly with the official sales office or the relevant regulatory authority before entering into any transaction.",
    ],
  },
  {
    number: "02",
    title: "Plot Categories & Allocation",
    paragraphs: [
      "Official offerings comprise Residential Plots (3.5 Marla, 5 Marla, 10 Marla, and 1 Kanal), Awami Block plots (4 Marla, 6 Marla), and Commercial Plots (2.5 Marla, 4 Marla, and 7 Marla).",
      "Plot allocations, balloting schedules, and possession timelines are governed by official project bylaws and formal membership forms. Any independent commitments regarding specific plot numbers or guaranteed delivery dates outside official documentation are strictly unauthorized.",
    ],
  },
  {
    number: "03",
    title: "Pricing, Payment Plans & Surcharges",
    paragraphs: [
      "Official payment structures are issued through verified schedules. Installments must be remitted on or before their specified due dates through designated banking channels in favor of the project's official account.",
      "Development charges, utility connection fees, and government levies are applicable in accordance with prevailing policy and the terms articulated in the official booking application.",
    ],
  },
  {
    number: "04",
    title: "Masterplan Amenities & Development Phases",
    paragraphs: [
      "Amenities including Glow Park, the 330-ft Main Boulevard, the Waterfront District, sports complexes, educational campuses, and civic facilities are part of the master planning framework.",
      "Individual features are delivered progressively across planned development phases. Illustrations and digital renderings represent architectural intent and are subject to engineering execution.",
    ],
  },
  {
    number: "05",
    title: "Official Communications & Sales Channels",
    paragraphs: [
      `Authorised sales inquiries should be conducted through the official head office at ${SITE_CONFIG.location.address}, by calling ${SITE_CONFIG.phoneDisplay}, or via our verified WhatsApp channel.`,
      "New City Paradise accepts no liability for transactions, cash deposits, or informal agreements made through unauthorized intermediaries.",
    ],
  },
];

export default function TermsPage() {
  return (
    <SmoothScroll>
      <Navbar solid />
      <main className="overflow-hidden bg-ivory text-ink">
        <section className="relative flex min-h-[30rem] items-end overflow-hidden bg-ink px-5 pb-14 pt-36 text-white sm:min-h-[36rem] sm:px-8 sm:pb-20">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/35" />
          <div className="container-pad relative z-10 !px-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-champagne">
              Official Legal Terms
            </p>
            <h1 className="mt-4 display text-[clamp(2.8rem,6vw,5rem)] leading-[0.9] text-white">
              Terms &amp;{" "}
              <span className="italic text-champagne">Conditions.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
              Guidelines, regulatory disclosures, and terms governing plot inquiries, bookings, and masterplan developments at New City Paradise.
            </p>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="container-pad max-w-4xl mx-auto space-y-12">
            {termsSections.map((sec) => (
              <article
                key={sec.number}
                className="rounded-2xl border border-black/10 bg-white p-8 sm:p-10 shadow-sm"
              >
                <div className="flex items-center gap-4 border-b border-black/10 pb-4">
                  <span className="font-menu text-xs font-bold tracking-widest text-champagne">
                    {sec.number}
                  </span>
                  <h2 className="font-serif text-2xl font-normal text-ink">
                    {sec.title}
                  </h2>
                </div>
                <div className="mt-6 space-y-4 font-serif text-sm leading-relaxed text-black/70 sm:text-base">
                  {sec.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </article>
            ))}

            <div className="rounded-2xl bg-[#0c0b09] p-8 text-white sm:p-10 text-center">
              <h3 className="font-serif text-2xl text-white">
                Questions Regarding Terms or Verification?
              </h3>
              <p className="mt-2 text-sm text-white/70 max-w-xl mx-auto">
                Our sales gallery is open 6 days a week to assist buyers with verified documentation and regulatory compliance.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-champagne px-7 py-3 text-xs font-menu uppercase tracking-widest text-ink hover:bg-white transition-colors"
                >
                  Contact Sales Office
                </Link>
                <a
                  href={SITE_CONFIG.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/30 px-7 py-3 text-xs font-menu uppercase tracking-widest text-white hover:bg-white hover:text-ink transition-colors"
                >
                  WhatsApp Support
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
