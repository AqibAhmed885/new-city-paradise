import type { Metadata, Viewport } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
