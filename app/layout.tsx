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
    "Discover elevated living, premium plots, and high-value investment opportunities at New City Paradise — a thoughtfully planned gated community.",
  keywords: [
    "New City Paradise",
    "luxury real estate Pakistan",
    "residential plots",
    "commercial property",
    "gated community",
  ],
  openGraph: {
    title: "New City Paradise",
    description: "A new standard of living, designed around you.",
    type: "website",
    images: ["/images/logo.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#12110f",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${helvetica.variable} ${azonix.variable}`}>
      <body>{children}</body>
    </html>
  );
}
