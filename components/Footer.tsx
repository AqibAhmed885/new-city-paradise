import BrandMark from "./BrandMark";

const socials = ["Instagram", "Facebook", "YouTube", "LinkedIn"];

export default function Footer() {
  return (
    <footer className="bg-[#0c0b09] pb-8 pt-20 text-white">
      <div className="container-pad">
        <div className="grid gap-14 pb-20 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <BrandMark light />
            <p className="mt-7 max-w-xs text-xs leading-6 text-white/35">
              An elevated way of living, thoughtfully master-planned for
              generations to come.
            </p>
          </div>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-champagne">
              Explore
            </p>
            <nav className="mt-6 grid gap-3 text-sm text-white/55" aria-label="Footer navigation">
              <a className="link-line w-fit" href="/#about">Our story</a>
              <a className="link-line w-fit" href="/masterplan">Masterplan</a>
              <a className="link-line w-fit" href="/#properties">Residences</a>
              <a className="link-line w-fit" href="/#partners">Sales partners</a>
              <a className="link-line w-fit" href="/#amenities">Amenities</a>
            </nav>
          </div>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-champagne">
              Follow
            </p>
            <div className="mt-6 grid gap-3 text-sm text-white/55">
              {socials.map((social) => (
                <a key={social} className="link-line w-fit" href="/contact">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="hero-title overflow-hidden border-b border-white/10 text-center text-[clamp(5rem,12vw,11rem)] leading-[0.9] text-white/[0.06]"
        >
          PARADISE
        </p>
        <div className="flex flex-col gap-4 pt-7 text-[8px] uppercase tracking-[0.18em] text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} New City Paradise. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="/contact" className="hover:text-white">Privacy</a>
            <a href="/contact" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
