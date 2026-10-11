import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const helvetica = localFont({
  src: [
    {
      path: "./fonts/helvetica-light-587ebe5a59211.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Helvetica.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Helvetica-Oblique.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Helvetica-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Helvetica-BoldOblique.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-helvetica",
  display: "swap",
  preload: true,
  fallback: ["Arial", "sans-serif"],
});

const azonix = localFont({
  src: "./fonts/azonix.otf",
  variable: "--font-azonix",
  weight: "400",
  style: "normal",
  display: "swap",
  preload: true,
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://newcityparadise.com"),
  title: {
    default: "New City Paradise | Luxury Living, Reimagined",
    template: "%s | New City Paradise",
  },
  description:
    "Official New City Paradise (New City Wah Phase 3) — a PHATA-approved 20,000 Kanal master-planned community on 330-ft GT Road, Burhan Interchange M-1, and CPEC Route. Explore residential & commercial plots for sale.",
  keywords: [
    "New City Paradise",
    "New City Paradise Wah",
    "New City Wah",
    "New City Paradise Burhan",
    "New City Paradise CPEC",
    "New City Phase 3",
    "PHATA approved housing society",
    "plots for sale in New City Paradise",
    "New City Paradise payment plan",
    "residential plots Wah Cantt",
    "commercial plots GT Road Burhan",
    "New City Paradise Islamabad",
    "New City Paradise Rawalpindi",
    "Burhan Interchange M-1",
    "3.5 Marla plot New City Paradise",
    "5 Marla plot New City Paradise",
    "Awami Block New City Paradise",
    "luxury real estate Pakistan",
  ],
  openGraph: {
    title: "New City Paradise | PHATA Approved Living near Wah Cantt & CPEC",
    description: "Master-planned residential & commercial plots on 330-ft GT Road adjacent to Burhan Interchange M-1. Developed by New City Wah developers.",
    type: "website",
    images: ["/images/logo.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#12110f",
};

import { Source_Sans_3 } from "next/font/google";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${helvetica.variable} ${azonix.variable} ${sourceSans.variable}`}>
      <body className="font-serif">{children}</body>
    </html>
  );
}
