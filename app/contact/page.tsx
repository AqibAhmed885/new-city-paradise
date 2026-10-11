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
      <Navbar />
      <main className="overflow-hidden">
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
