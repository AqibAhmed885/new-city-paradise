import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectOverview from "@/components/ProjectOverview";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Masterplan & Plot Categories | New City Paradise",
  description:
    "Explore the New City Paradise masterplan: residential plots (3.5, 5, 10 Marla, 1 Kanal), commercial blocks, Awami Block, 330-ft main boulevard, and PHATA approval.",
  alternates: {
    canonical: "/masterplan",
  },
  openGraph: {
    title: "New City Paradise Masterplan & Plot Categories",
    description:
      "Comprehensive masterplan overview including residential plots, commercial sectors, Awami Block, and regional road connectivity.",
    url: "https://newcityparadise.com/masterplan",
  },
};

export default function MasterplanPage() {
  return (
    <SmoothScroll>
      <Navbar solid />
      <main className="overflow-hidden">
        <ProjectOverview />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
