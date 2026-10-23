import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import LahoreHero from "@/components/LahoreHero";
import LahoreIntro from "@/components/LahoreIntro";
import LahoreSectors from "@/components/LahoreSectors";
import LahoreVision from "@/components/LahoreVision";
import EditorialParallaxBanner from "@/components/EditorialParallaxBanner";
import LahoreLocation from "@/components/LahoreLocation";
import LahoreAmenities from "@/components/LahoreAmenities";
import LahoreFaq from "@/components/LahoreFaq";
import LahoreCTA from "@/components/LahoreCTA";

export const metadata: Metadata = {
  title: "New City Paradise Lahore | Pakistan's Largest Riverfront Project in RUDA Phase 1",
  description:
    "Explore New City Paradise Lahore on the Eastern Bypass (M-11) within RUDA Phase 1. Offering smart sustainable urban infrastructure, riverfront promenades, and world-class commercial avenues.",
  alternates: {
    canonical: "/lahore",
  },
  openGraph: {
    title: "New City Paradise Lahore - RUDA Phase 1 Riverfront Mega Development",
    description:
      "Pakistan's premier riverfront development in Lahore on the Eastern Bypass (M-11) with direct Ring Road access.",
    images: ["/images/delivered/lahore-hero.jpg"],
  },
};

export default function LahorePage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="overflow-x-clip bg-ivory">
        {/* 1. Cinematic Split-Screen Pinning Hero (matching Hero.tsx) */}
        <LahoreHero />

        {/* 2. 300vh Word-by-Word Golden Light Scrub (matching HeroIntro.tsx) */}
        <LahoreIntro />

        {/* 3. Multi-District Sticky Card Deck Stack (matching Communities.tsx) */}
        <LahoreSectors />

        {/* 4. Vision & Scale Bar (matching VisionLegacy.tsx) */}
        <LahoreVision />

        {/* 5. Edge-to-Edge Editorial Parallax Banner before Location */}
        <EditorialParallaxBanner
          eyebrow="RUDA PHASE 1 • RIVERFRONT DEVELOPMENT"
          headingTop="REDEFINING"
          headingBottom="RIVERFRONT LUXURY"
          description="Positioned directly on the Eastern Bypass (M-11), New City Paradise Lahore introduces Pakistan's premier smart waterfront community with uninterrupted connectivity."
          ctaText="Explore Sectors"
          ctaHref="#lahore-sectors"
          imageSrc="/images/delivered/lahore-hero.jpg"
          imageAlt="New City Paradise Lahore Riverfront Masterplan"
        />

        {/* 6. Strategic Location & Minutes from Landmarks (Timeline + Sticky Map) */}
        <LahoreLocation />

        {/* 6. Signature Amenities & Lifestyle Grid */}
        <LahoreAmenities />

        {/* 7. Official Lahore FAQs */}
        <LahoreFaq />

        {/* 8. Luxury Lead Concierge & Sales CTA (matching HomeCTA.tsx) */}
        <LahoreCTA />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
