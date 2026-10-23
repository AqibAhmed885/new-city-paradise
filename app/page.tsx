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
import VisionLegacy from "@/components/VisionLegacy";
import EditorialParallaxBanner from "@/components/EditorialParallaxBanner";
import LahoreTeaser from "@/components/LahoreTeaser";

const AzimutePerspectiveExperience = dynamic(
  () => import("@/components/AzimutePerspectiveExperience")
);

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="overflow-x-clip bg-ivory">
        {/* 1. Cinematic Hero Video with transparent scroll-revealed H1 */}
        <Hero />

        {/* 2. Canonical H1 & Verified Project Orientation immediately following video */}
        <HeroIntro />

        {/* 3. Verified Residential & Commercial Plot Options (3.5, 5, 10 Marla, 1 Kanal) */}
        <Communities />

        {/* 4. L Prime Block & Water Front District Featured Showcase */}
        {/* <FeaturedDistricts /> */}

        {/* 5. A Legacy Built on Vision - Project Scale & Milestones */}
        <VisionLegacy />

        {/* 6. Edge-to-Edge Editorial Parallax Banner before Location */}
        <EditorialParallaxBanner
          eyebrow="PHATA APPROVED • 330-FT MAIN BOULEVARD"
          headingTop="THE FUTURE OF"
          headingBottom="URBAN LIVING"
          description="Directly located at the 330-ft Burhan Interchange & CPEC Motorway intersection, New City Paradise sets a new standard for luxury, connectivity, and visionary master planning."
          ctaText="Explore Masterplan"
          ctaHref="#plots-overview"
          imageSrc="/images/new-city-paradise-hero.png"
          imageAlt="New City Paradise Architectural Landmark"
        />

        {/* 7. Strategic Position & Minutes Away from Major Landmarks Map Section */}
        <LocationMapSection />

        {/* 7. Dual-City Portfolio Discovery: New City Paradise Lahore */}
        <LahoreTeaser />

        {/* 8. Booking Steps */}
        {/* <BookingProcess /> */}

        {/* 9. Verified FAQs */}
        <FaqSection />

        {/* 9. Direct Contact & Confirmed Sales CTA */}
        <HomeCTA />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
