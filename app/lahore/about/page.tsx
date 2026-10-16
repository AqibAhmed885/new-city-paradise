import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import LahoreAboutClient from "@/components/LahoreAboutClient";
import PropertyShowcase from "@/components/PropertyShowcase";

export const metadata: Metadata = {
  title: "About Us | New City Paradise Lahore",
  description:
    "Learn about New City Paradise Lahore, a visionary riverfront project within RUDA Phase 1 by New City Housing Developers, located on Eastern Bypass (M-11) Lahore.",
  alternates: {
    canonical: "/lahore/about",
  },
  openGraph: {
    title: "About Us | New City Paradise Lahore",
    description:
      "Pakistan's premier riverfront development in RUDA Phase 1 with 45+ years of developer excellence.",
    images: ["/images/delivered/lahore-hero.jpg"],
  },
};

export default function LahoreAboutPage() {
  return (
    <SmoothScroll>
      <Navbar solid={false} />
      <main className="overflow-x-clip">
        <LahoreAboutClient />
        <PropertyShowcase />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
