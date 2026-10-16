"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BrandMark({ light = false }: { light?: boolean }) {
  const pathname = usePathname();
  const isLahore = pathname.startsWith("/lahore");
  const homeHref = isLahore ? "/lahore" : "/";

  return (
    <Link
      href={homeHref}
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
