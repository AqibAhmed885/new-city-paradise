import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import AmenitiesClient from "@/components/AmenitiesClient";

export const metadata: Metadata = {
  title: "World-Class Amenities | New City Paradise",
  description:
    "Explore the signature amenities of New City Paradise: Glow Park, 330-ft Main Boulevard, Waterfront District, Dancing Fountains, Sports Complex, and 24/7 Healthcare.",
  openGraph: {
    title: "World-Class Amenities | New City Paradise",
    description:
      "A luxurious living community in the heart of CPEC with Glow Park, Dancing Fountains, sports facilities, and international healthcare.",
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
