import dynamic from "next/dynamic";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import Stats from "@/components/Stats";

const PropertyShowcase = dynamic(() => import("@/components/PropertyShowcase"));
const LifestyleGallery = dynamic(() => import("@/components/LifestyleGallery"));
const Amenities = dynamic(() => import("@/components/Amenities"));
const Investment = dynamic(() => import("@/components/Investment"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Stats />
        <PropertyShowcase />
        <LifestyleGallery />
        <Amenities />
        <Investment />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
