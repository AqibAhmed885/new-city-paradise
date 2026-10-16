"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin } from "lucide-react";

export default function CitySwitcher({
  className = "",
  size = "default",
}: {
  className?: string;
  size?: "default" | "compact" | "mobile";
}) {
  const pathname = usePathname();
  const isLahore = pathname.startsWith("/lahore");

  if (size === "mobile") {
    return (
      <div className={`flex w-full rounded-full bg-white/10 p-1 border border-white/15 backdrop-blur-md ${className}`}>
        <Link
          href="/"
          className={`flex-1 flex items-center justify-center gap-1.5 rounded-full py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
            !isLahore
              ? "bg-[#B69B6C] text-ink shadow-sm"
              : "text-white/70 hover:text-white"
          }`}
        >
          <MapPin size={13} className={!isLahore ? "text-ink" : "text-white/60"} />
          <span>Islamabad</span>
        </Link>
        <Link
          href="/lahore"
          className={`flex-1 flex items-center justify-center gap-1.5 rounded-full py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
            isLahore
              ? "bg-[#B69B6C] text-ink shadow-sm"
              : "text-white/70 hover:text-white"
          }`}
        >
          <MapPin size={13} className={isLahore ? "text-ink" : "text-white/60"} />
          <span>Lahore</span>
        </Link>
      </div>
    );
  }

  return (
    <div
      aria-label="Select City Destination"
      className={`relative inline-flex items-center rounded-full bg-black/30 p-[3px] border border-white/15 backdrop-blur-md transition-all ${className}`}
    >
      <Link
        href="/"
        title="View New City Paradise - Islamabad / CPEC"
        className={`relative z-10 flex items-center gap-1.5 rounded-full px-3 py-1 text-[10.5px] font-medium tracking-[0.14em] uppercase transition-all duration-300 ${
          !isLahore
            ? "bg-white text-black shadow-sm"
            : "text-white/70 hover:text-white"
        }`}
      >
        <span className={`h-1 w-1 rounded-full ${!isLahore ? "bg-black" : "bg-white/40"}`} />
        <span>Islamabad</span>
      </Link>

      <Link
        href="/lahore"
        title="View New City Paradise - Lahore / RUDA"
        className={`relative z-10 flex items-center gap-1.5 rounded-full px-3 py-1 text-[10.5px] font-medium tracking-[0.14em] uppercase transition-all duration-300 ${
          isLahore
            ? "bg-white text-black shadow-sm"
            : "text-white/70 hover:text-white"
        }`}
      >
        <span className={`h-1 w-1 rounded-full ${isLahore ? "bg-black" : "bg-white/40"}`} />
        <span>Lahore</span>
      </Link>
    </div>
  );
}
