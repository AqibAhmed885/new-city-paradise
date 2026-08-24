import dynamic from "next/dynamic";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HomeCTA from "@/components/HomeCTA";
import HomeBlog from "@/components/HomeBlog";
import Navbar from "@/components/Navbar";
import SalesPartners from "@/components/SalesPartners";
import SmoothScroll from "@/components/SmoothScroll";
import Stats from "@/components/Stats";

const PropertyShowcase = dynamic(() => import("@/components/PropertyShowcase"));
const LifestyleGallery = dynamic(() => import("@/components/LifestyleGallery"));
const Amenities = dynamic(() => import("@/components/Amenities"));
const Investment = dynamic(() => import("@/components/Investment"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <SalesPartners />
        <Stats />
        <PropertyShowcase />
        {/* <LifestyleGallery /> */}
        <Amenities />
        <Investment />
        <Testimonials />
        <HomeBlog />
        <HomeCTA />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
