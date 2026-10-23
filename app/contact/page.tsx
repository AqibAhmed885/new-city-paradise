import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Contact Sales Office & Location | New City Paradise",
  description:
    "Get in touch with New City Paradise sales gallery on Main GT Road near Burhan Interchange (M-1). Connect via phone, WhatsApp, or arrange an on-site visit.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact New City Paradise | Sales Office & Location",
    description:
      "Speak with authorized property consultants or visit our site office at Burhan Interchange, GT Road.",
    url: "https://newcityparadise.com/contact",
  },
};

export default function ContactPage() {
  return (
    <SmoothScroll>
      <Navbar solid />
      <main className="overflow-hidden bg-[#FAF8F5] text-[#12110F] pt-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 pt-8 pb-4 text-center">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.26em] font-semibold text-[#8C7A58]">
            Sales Gallery &amp; Inquiries
          </p>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-normal text-[#12110F] mt-3 uppercase tracking-tight">
            Contact Official <span className="italic font-light text-[#8C7A58]">Sales Office.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#12110F]/70 max-w-2xl mx-auto font-sans font-light">
            Visit our site gallery on Main GT Road near Burhan Interchange (M-1) or speak directly with our authorized property advisors.
          </p>
        </div>
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
