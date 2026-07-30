import Image from "next/image";

export default function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#home"
      aria-label="New City Paradise — home"
      className={`group flex items-center gap-3 ${light ? "text-white" : "text-ink"}`}
    >
      <Image
        src="/images/paradise-logo.png"
        alt="New City Paradise"
        width={180}
        height={80}
      />
      {/* <span className="hidden leading-none sm:block">
        <strong className="block font-serif text-[15px] font-normal tracking-[0.1em]">
          NEW CITY
        </strong>
        <span className="mt-1 block text-[7px] font-bold tracking-[0.45em] opacity-70">
          PARADISE
        </span>
      </span> */}
    </a>
  );
}
