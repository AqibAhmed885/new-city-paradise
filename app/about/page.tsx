import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "About Us | New City Paradise",
  description:
    "Learn about New City Paradise, an officially PHATA-approved master-planned community by the developers of New City Wah, strategically located on the 330-ft GT Road & Burhan CPEC Interchange.",
  openGraph: {
    title: "About Us | New City Paradise",
    description:
      "A 20,000 Kanal planned community with 4,256+ Kanals approved by PHATA, direct M-1 Motorway access, and world-class infrastructure.",
    images: [
      {
        url: "/images/isla.jpg",
        width: 1200,
        height: 600,
        alt: "New City Paradise Vision & Community",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <SmoothScroll>
      <Navbar solid={false} />
      <main className="overflow-hidden">
        <AboutClient />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
