import Image from "next/image";
import Link from "next/link";

export default function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/#home"
      aria-label="New City Paradise — home"
      className={`group flex items-center z-20  py-2 px-4  gap-3 ${light ? "text-white" : "text-ink"}`}
    >
      <Image
        src="/images/paradise-logo.png"
        alt="New City Paradise"
        width={280}
        height={120}
      />
      {/* <span className="hidden leading-none sm:block">
        <strong className="block font-serif text-[15px] font-normal tracking-[0.1em]">
          NEW CITY
        </strong>
        <span className="mt-1 block text-[7px] font-bold tracking-[0.45em] opacity-70">
          PARADISE
        </span>
      </span> */}
    </Link>
  );
}
