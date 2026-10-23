import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import LahoreContactClient from "@/components/LahoreContactClient";

export const metadata: Metadata = {
  title: "Contact Sales Desk | New City Paradise Lahore",
  description:
    "Get in touch with New City Paradise Lahore sales advisory team on the Eastern Bypass (M-11) within RUDA Phase 1. Connect via phone, WhatsApp, or schedule an on-site visit.",
  alternates: {
    canonical: "/lahore/contact",
  },
  openGraph: {
    title: "Contact New City Paradise Lahore | Sales Desk & Location",
    description:
      "Speak with authorized property advisors or visit our site office on Eastern Bypass M-11 Lahore.",
    images: ["/images/delivered/lahore-hero.jpg"],
  },
};

export default function LahoreContactPage() {
  return (
    <SmoothScroll>
      <Navbar solid />
      <main className="overflow-hidden bg-[#FAF8F5] text-[#12110F] pt-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 pt-8 pb-4 text-center">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.26em] font-semibold text-[#8C7A58]">
            Sales Desk &amp; Site Visits
          </p>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-normal text-[#12110F] mt-3 uppercase tracking-tight">
            Contact Official <span className="italic font-light text-[#8C7A58]">Lahore Office.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#12110F]/70 max-w-2xl mx-auto font-sans font-light">
            Visit our project location on the Eastern Bypass (M-11) within RUDA Phase 1 or speak directly with our senior property consultants.
          </p>
        </div>
        <LahoreContactClient />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
