"use client";

import Image from "next/image";
import Link from "next/link";

interface DistrictCard {
  id: string;
  pill: string;
  title: string;
  description: string;
  image: string;
  linkText: string;
  linkHref: string;
}

const districts: DistrictCard[] = [
  {
    id: "l-prime-block",
    pill: "L PRIME BLOCK",
    title: "L Prime Block",
    description:
      "Sculpted around dedicated green parks, wide carpeted avenues, and underground utilities — an elite residential sector offering an enduring standard of privacy and refined modern living.",
    image: "/images/garden-villa.jpg",
    linkText: "VIEW DISTRICT SPECS",
    linkHref: "/masterplan",
  },
  {
    id: "waterfront-district",
    pill: "WATERFRONT DISTRICT",
    title: "Water Front District",
    description:
      "A scenic riverside sanctuary along the natural contours of the Haro River, featuring tranquil promenades, lush green vistas, and curated leisure experiences.",
    image: "/images/amenities/water-front.jpg",
    linkText: "VIEW DISTRICT SPECS",
    linkHref: "/masterplan",
  },
];

export default function FeaturedDistricts() {
  return (
    <section className="bg-ivory py-16 md:py-24 px-6 md:px-12 lg:px-16 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {districts.map((district) => (
            <div
              key={district.id}
              className="group bg-white rounded-2xl overflow-hidden border border-black/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Pill Badge */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-sand/40">
                <Image
                  src={district.image}
                  alt={district.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Pill Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] font-menu uppercase tracking-widest font-semibold text-ink shadow-sm border border-black/5">
                    {district.pill}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-7 sm:p-9 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-2xl sm:text-[28px] lg:text-3xl font-heading text-ink tracking-tight font-normal">
                    {district.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-ink/75 font-serif leading-relaxed">
                    {district.description}
                  </p>
                </div>

                <div className="mt-6 pt-2">
                  <Link
                    href={district.linkHref}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-menu uppercase tracking-wider text-champagne font-semibold transition-colors duration-200 group-hover:text-ink"
                  >
                    <span>{district.linkText}</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
