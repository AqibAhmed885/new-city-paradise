import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectOverview from "@/components/ProjectOverview";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Masterplan",
  description:
    "Explore the New City Paradise masterplan, plot categories, Awami Block, PHATA approval details, amenities and regional connections.",
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
