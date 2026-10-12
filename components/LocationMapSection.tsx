"use client";

import { SITE_CONFIG } from "@/lib/siteConfig";

const stats = [
  {
    category: "GATEWAY",
    value: "0 KM",
    label: "CPEC Motorway",
    desc: "Immediate corridor slip",
    icon: (
      <svg className="w-5 h-5 text-champagne" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    category: "INTERCHANGE",
    value: "0 MIN",
    label: "Burhan Junction",
    desc: "Direct M-1 exit ramp",
    icon: (
      <svg className="w-5 h-5 text-champagne" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    ),
  },
  {
    category: "COMMERCIAL",
    value: "5 MIN",
    label: "New City Phase II",
    desc: "Arcade & Financial hub",
    icon: (
      <svg className="w-5 h-5 text-champagne" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect width="16" height="20" x="4" y="2" rx="2" />
        <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" />
      </svg>
    ),
  },
  {
    category: "AVIATION",
    value: "20 MIN",
    label: "Islamabad Airport",
    desc: "Signal-free Motorway drive",
    icon: (
      <svg className="w-5 h-5 text-champagne" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
      </svg>
    ),
  },
];

export default function LocationMapSection() {
  return (
    <section
      id="location-connectivity"
      className="relative z-20 bg-white py-20 sm:py-28 text-ink border-b border-black/10"
    >
      <div className="container-pad max-w-7xl mx-auto">
        
        {/* Editorial Top Heading */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-menu uppercase tracking-[0.28em] text-champagne font-semibold mb-3">
              STRATEGIC POSITION
            </p>
            <h2 className="text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.05] tracking-tight uppercase text-ink font-normal">
              MINUTES AWAY FROM{" "}
              <span className="italic font-light text-champagne lowercase first-letter:uppercase">
                MAJOR
              </span>
              <br />
              <span className="italic font-light text-champagne lowercase first-letter:uppercase">
                LANDMARKS
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="font-serif text-sm sm:text-base leading-relaxed text-black/65 max-w-lg">
              Situated at the confluence of the M-1 Motorway, Grand Trunk (GT) Road, and the CPEC Northern Highway, offering rapid connectivity across the Capital Region.
            </p>
          </div>
        </div>

        {/* Main 2-Column Content Layout (As in Screenshot) */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Stylized Map Card */}
          <div className="lg:col-span-7 relative rounded-[1.75rem] overflow-hidden border border-black/10 bg-[#e5e3df] shadow-md min-h-[460px] sm:min-h-[520px] flex flex-col justify-between p-4 sm:p-6">
            
            {/* Map Iframe */}
            <iframe
              title="Verified Location Map of New City Paradise near Burhan Interchange"
              src="https://www.google.com/maps?q=New%20City%20Paradise%20Burhan%20Interchange&output=embed"
              className="absolute inset-0 w-full h-full border-0 object-cover"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Top Badge: CPEC NORTHERN GATEWAY */}
            <div className="relative z-10 self-start">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md shadow-md border border-black/10 text-[10px] sm:text-xs font-menu uppercase tracking-wider font-semibold text-ink">
                <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
                <span>CPEC NORTHERN GATEWAY</span>
              </div>
            </div>

            {/* Bottom Overlay Card: Zero-Signal Transit & Google Maps */}
            <div className="relative z-10 mt-auto rounded-2xl bg-white/95 backdrop-blur-md p-4 sm:p-5 border border-black/10 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-serif text-base sm:text-lg font-semibold text-ink">
                  Zero–Signal Transit
                </h3>
                <p className="text-xs font-serif text-black/65 mt-0.5">
                  Direct dedicated high-speed slip-roads from M-1 Motorway
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=New+City+Paradise+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/[0.04] hover:bg-champagne hover:text-white border border-black/15 text-[11px] font-menu uppercase tracking-wider text-ink font-semibold transition-all"
              >
                <span>GOOGLE MAPS</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: 2x2 Landmark Grid + Wide Full-Width Bar */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* 2x2 Grid of Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-black/10 bg-[#faf9f6] p-5 sm:p-6 transition-all duration-300 hover:border-champagne/50 hover:shadow-md flex flex-col justify-between min-h-[165px]"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-champagne/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-[9px] font-menu uppercase tracking-widest text-black/50 font-semibold">
                      {item.category}
                    </span>
                  </div>

                  <div className="mt-4">
                    <p className="font-serif text-3xl sm:text-[34px] font-normal tracking-tight text-ink leading-none">
                      {item.value}
                    </p>
                    <p className="font-serif text-sm font-semibold text-ink mt-2">
                      {item.label}
                    </p>
                    <p className="text-[11px] font-serif text-black/55 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Wide Bottom Card: Khanpur Dam & Leisure Belt */}
            <div className="rounded-2xl border border-black/10 bg-[#faf9f6] p-5 sm:p-6 transition-all duration-300 hover:border-champagne/50 hover:shadow-md flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-champagne/10 border border-champagne/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-champagne" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                  </svg>
                </div>
                <div>
                  <p className="font-serif text-base font-semibold text-ink">
                    Khanpur Dam &amp; Leisure Belt
                  </p>
                  <p className="text-xs font-serif text-black/60 mt-0.5">
                    20 mins to eco-resorts &amp; water sports
                  </p>
                </div>
              </div>

              <span className="font-serif text-2xl sm:text-3xl text-champagne font-light shrink-0">
                20m
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
