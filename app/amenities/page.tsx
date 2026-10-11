import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import AmenitiesClient from "@/components/AmenitiesClient";

export const metadata: Metadata = {
  title: "Amenities & Masterplan Facilities | New City Paradise Wah",
  description:
    "Explore the signature world-class amenities of New City Paradise Wah: Glow Park, 330-ft Main Boulevard, Waterfront District, Dancing Fountain, Sports Complex, and 24/7 Healthcare on CPEC Route.",
  keywords: [
    "New City Paradise amenities",
    "New City Paradise Wah facilities",
    "Glow Park New City Paradise",
    "330 ft main boulevard New City Paradise",
    "New City Wah masterplan",
    "waterfront district New City Paradise",
    "Burhan Interchange housing amenities",
    "PHATA approved facilities Wah",
  ],
  alternates: {
    canonical: "/amenities",
  },
  openGraph: {
    title: "World-Class Amenities | New City Paradise Wah",
    description:
      "A luxurious living community on GT Road Burhan & CPEC with Glow Park, Dancing Fountains, sports facilities, and international healthcare.",
    url: "https://newcityparadise.com/amenities",
    images: [
      {
        url: "/images/amenities/glow-park.jpg",
        width: 1200,
        height: 700,
        alt: "New City Paradise Amenities - Glow Park",
      },
    ],
  },
};

export default function AmenitiesPage() {
  return (
    <SmoothScroll>
      <Navbar solid={false} />
      <main className="overflow-hidden">
        <AmenitiesClient />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
