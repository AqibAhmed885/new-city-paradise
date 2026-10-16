import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import LahoreAmenitiesClient from "@/components/LahoreAmenitiesClient";

export const metadata: Metadata = {
  title: "Amenities & Master Facilities | New City Paradise Lahore",
  description:
    "Explore the signature world-class amenities of New City Paradise Lahore: Ravi Marina, Dancing Fountains, Sports Arenas, Healthcare City, and Smart Urban Grids in RUDA Phase 1.",
  alternates: {
    canonical: "/lahore/amenities",
  },
  openGraph: {
    title: "World-Class Amenities | New City Paradise Lahore",
    description:
      "A luxury riverfront community in RUDA Phase 1 with marina promenades, musical fountains, and healthcare campuses.",
    images: ["/images/delivered/lahore-hero.jpg"],
  },
};

export default function LahoreAmenitiesPage() {
  return (
    <SmoothScroll>
      <Navbar solid={false} />
      <main className="overflow-hidden">
        <LahoreAmenitiesClient />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
