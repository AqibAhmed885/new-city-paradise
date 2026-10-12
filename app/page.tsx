import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Communities from "@/components/Communities";
import HomeCTA from "@/components/HomeCTA";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";

const PropertyShowcase = dynamic(() => import("@/components/PropertyShowcase"));
const LifestyleGallery = dynamic(() => import("@/components/LifestyleGallery"));
const AzimutePerspectiveExperience = dynamic(
  () => import("@/components/AzimutePerspectiveExperience")
);
const Investment = dynamic(() => import("@/components/Investment"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <Communities />
        <AzimutePerspectiveExperience />
        <PropertyShowcase />
        <Investment />
        <Testimonials />
        <HomeCTA />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
