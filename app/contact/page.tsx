import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact New City Paradise, speak with a property consultant, or arrange a visit to our sales gallery.",
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
