import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import LahoreProjectOverview from "@/components/LahoreProjectOverview";

export const metadata: Metadata = {
  title: "Masterplan & Plot Categories | New City Paradise Lahore",
  description:
    "Explore the New City Paradise Lahore masterplan: Ravi Marina waterfront plots, smart residential sectors, downtown commercial arcade, and RUDA Phase 1 Eastern Bypass connectivity.",
  alternates: {
    canonical: "/lahore/masterplan",
  },
  openGraph: {
    title: "New City Paradise Lahore Masterplan & Plot Categories",
    description:
      "Comprehensive masterplan overview including waterfront living, smart city grid, and Eastern Bypass (M-11) connectivity.",
    images: ["/images/delivered/lahore-hero.jpg"],
  },
};

export default function LahoreMasterplanPage() {
  return (
    <SmoothScroll>
      <Navbar solid />
      <main className="overflow-hidden">
        <LahoreProjectOverview />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
