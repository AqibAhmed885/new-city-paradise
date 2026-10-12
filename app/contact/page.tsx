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
      <main className="overflow-hidden bg-ink text-white pt-28">
        <div className="container-pad max-w-6xl mx-auto pt-6 pb-2 text-center">
          <p className="eyebrow text-champagne text-[10px] sm:text-xs uppercase tracking-[0.28em] font-semibold">
            Sales Gallery &amp; Inquiries
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-white mt-3">
            Contact Official <span className="italic text-champagne">Sales Office.</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-white/70 max-w-2xl mx-auto font-serif">
            Visit our site gallery on Main GT Road near Burhan Interchange (M-1) or speak directly with our property advisors.
          </p>
        </div>
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
