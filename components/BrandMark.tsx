import Image from "next/image";
import Link from "next/link";

export default function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/#home"
      aria-label="New City Paradise — home"
      className={`group flex items-center z-20 gap-3 ${light ? "opacity-100" : "opacity-90"}`}
    >
      <Image
        src="/images/logo.png"
        alt="New City Paradise"
        width={300}
        height={70}
        className="w-48 sm:w-64 h-auto"
        priority
      />
    </Link>
  );
}
