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
      <main className="overflow-hidden bg-ink text-white pt-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 pt-8 pb-4 text-center">
          <p className="text-champagne text-[10px] sm:text-xs uppercase tracking-[0.28em] font-semibold">
            Sales Desk &amp; Site Visits
          </p>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-normal text-white mt-3">
            Contact Official <span className="italic font-light text-champagne">Lahore Office.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-white/70 max-w-2xl mx-auto font-sans">
            Visit our project location on the Eastern Bypass (M-11) within RUDA Phase 1 or speak directly with our senior property consultants.
          </p>
        </div>
        <LahoreContactClient />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
