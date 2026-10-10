import Image from "next/image";
import Link from "next/link";

const communities = [
  {
    id: "residential",
    tag: "PREMIUM LIVING",
    title: "Residential Plots",
    description: "Experience a lifestyle of unparalleled luxury and comfort. Our residential plots are thoughtfully designed to provide the perfect canvas for your dream home, surrounded by lush landscapes and modern amenities.",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    ],
    reverse: false,
  },
  {
    id: "commercial",
    tag: "BUSINESS HUB",
    title: "Commercial Zone",
    description: "Strategically located to maximize visibility and foot traffic, our commercial plots offer the perfect opportunity for businesses to thrive in a rapidly growing, high-value community.",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1200&auto=format&fit=crop",
    ],
    reverse: true,
  },
  {
    id: "villas",
    tag: "EXCLUSIVE HOMES",
    title: "Awami Villas",
    description: "Discover the perfect blend of affordability and elegance. Awami Villas offer beautifully constructed, move-in ready homes designed for modern families seeking a secure and vibrant neighborhood.",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
    ],
    reverse: false,
  },
];

export default function Communities() {
  return (
    <section className="bg-[#F3F2EE] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col gap-32 lg:gap-48">
        {communities.map((community, index) => (
          <div 
            key={community.id} 
            className={`flex flex-col ${community.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}
          >
            {/* Image Grid */}
            <div className="w-full lg:w-3/5 grid grid-cols-3 gap-2">
              <div className="col-span-2 aspect-[4/3] relative overflow-hidden group">
                <Image src={community.images[0]} fill className="object-cover transition-transform duration-700 group-hover:scale-105" alt={`${community.title} view 1`} />
              </div>
              <div className="col-span-1 aspect-[4/3] relative overflow-hidden group">
                <Image src={community.images[1]} fill className="object-cover transition-transform duration-700 group-hover:scale-105" alt={`${community.title} view 2`} />
              </div>
              <div className="col-span-1 aspect-[3/4] relative overflow-hidden group">
                <Image src={community.images[2]} fill className="object-cover transition-transform duration-700 group-hover:scale-105" alt={`${community.title} view 3`} />
              </div>
              <div className="col-span-2 aspect-[16/10] relative overflow-hidden group">
                <Image src={community.images[3]} fill className="object-cover transition-transform duration-700 group-hover:scale-105" alt={`${community.title} view 4`} />
              </div>
            </div>

            {/* Content Content */}
            <div className="w-full lg:w-2/5 flex flex-col items-start max-w-md">
              <span className="text-[9px] tracking-[0.2em] uppercase font-sans text-gray-500 font-semibold mb-6">
                {community.tag}
              </span>
              <h2 className="text-4xl lg:text-[44px] leading-tight font-serif text-ink mb-8">
                {community.title}
              </h2>
              <p className="text-[13px] leading-relaxed text-gray-600 mb-12">
                {community.description}
              </p>
              <Link 
                href={`/${community.id}`} 
                className="group flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase font-sans font-semibold text-ink"
              >
                <span className="w-8 h-[1px] bg-ink group-hover:w-16 transition-all duration-300 ease-out"></span>
                DISCOVER MORE
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
