import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HeroIntro from "@/components/HeroIntro";
import Communities from "@/components/Communities";
import FeaturedDistricts from "@/components/FeaturedDistricts";
import LocationMapSection from "@/components/LocationMapSection";
import BookingProcess from "@/components/BookingProcess";
import FaqSection from "@/components/FaqSection";
import HomeCTA from "@/components/HomeCTA";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";

const AzimutePerspectiveExperience = dynamic(
  () => import("@/components/AzimutePerspectiveExperience")
);

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="overflow-x-clip bg-ivory">
        {/* 1. Cinematic Hero Video */}
        <Hero />

        {/* 2. Canonical H1 & Verified Project Orientation immediately following video */}
        <HeroIntro />

        {/* 3. Verified Residential & Commercial Plot Options (3.5, 5, 10 Marla, 1 Kanal) */}
        <Communities />

        {/* 4. L Prime Block & Water Front District Featured Showcase */}
        {/* <FeaturedDistricts /> */}

        {/* 5. Signature Masterplan Amenities & Helical Visual Explorer */}
        <AzimutePerspectiveExperience />

        {/* 6. Strategic Position & Minutes Away from Major Landmarks Map Section */}
        <LocationMapSection />

        {/* 8. Booking Steps */}
        <BookingProcess />

        {/* 9. Verified FAQs */}
        <FaqSection />

        {/* 9. Direct Contact & Confirmed Sales CTA */}
        <HomeCTA />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
