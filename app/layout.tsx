import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SITE_CONFIG } from "@/lib/siteConfig";
import Preloader from "@/components/Preloader";
import "./globals.css";

const optimaNova = localFont({
  src: [
    { path: "./fonts/optima-nova/OptimaNovaLTProLight.otf", weight: "300", style: "normal" },
    { path: "./fonts/optima-nova/OptimaNovaLTProRegular.otf", weight: "400", style: "normal" },
    { path: "./fonts/optima-nova/OptimaNovaLTProMedium.otf", weight: "500", style: "normal" },
    { path: "./fonts/optima-nova/OptimaNovaLTProDemi.otf", weight: "600", style: "normal" },
    { path: "./fonts/optima-nova/OptimaNovaLTProBold.otf", weight: "700", style: "normal" },
    { path: "./fonts/optima-nova/OptimaNovaLTProHeavy.otf", weight: "800", style: "normal" },
    { path: "./fonts/optima-nova/OptimaNovaLTProBlack.otf", weight: "900", style: "normal" },
    { path: "./fonts/optima-nova/OptimaNovaLTProItalic.otf", weight: "400", style: "italic" },
    { path: "./fonts/optima-nova/OptimaNovaLTProBoldItalic.otf", weight: "700", style: "italic" },
  ],
  variable: "--font-optima",
  display: "swap",
  preload: true,
  fallback: ["Georgia", "serif"],
});

const segoeUi = localFont({
  src: [
    { path: "./fonts/segoe-ui/segoeuithis.ttf", weight: "400", style: "normal" },
    { path: "./fonts/segoe-ui/segoeuithibd.ttf", weight: "700", style: "normal" },
    { path: "./fonts/segoe-ui/segoeuithisi.ttf", weight: "400", style: "italic" },
    { path: "./fonts/segoe-ui/segoeuithisz.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-segoe",
  display: "swap",
  preload: true,
  fallback: ["Segoe UI", "system-ui", "sans-serif"],
});

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

const isProduction =
  process.env.VERCEL_ENV === "production" ||
  process.env.NODE_ENV === "production" && !process.env.VERCEL_URL;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: "New City Paradise Wah | Plots near Burhan Interchange",
    template: "%s | New City Paradise",
  },
  description:
    "New City Paradise is a PHATA-approved master-planned community located on the 330-ft GT Road adjacent to Burhan Interchange (M-1) and the CPEC Route. Developed by the developers of New City Wah.",
  keywords: [
    "New City Paradise",
    "New City Paradise Wah",
    "New City Wah Phase 3",
    "Burhan Interchange",
    "PHATA approved housing society",
    "CPEC Route",
    "GT Road housing society",
    "residential plots Wah Cantt",
    "commercial plots Burhan",
  ],
  alternates: {
    canonical: "/",
  },
  robots: isProduction
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      }
    : {
        index: false,
        follow: false,
      },
  openGraph: {
    title: "New City Paradise | PHATA-Approved Community at Burhan Interchange",
    description:
      "Master-planned residential and commercial plots on 330-ft GT Road adjacent to Burhan Interchange M-1 and CPEC Route. Developed by New City Wah developers.",
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.name,
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 683,
        height: 184,
        alt: "New City Paradise Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New City Paradise | PHATA-Approved Community at Burhan Interchange",
    description:
      "Master-planned residential and commercial plots on 330-ft GT Road adjacent to Burhan Interchange M-1 and CPEC Route.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_CONFIG.domain}/#organization`,
        name: SITE_CONFIG.name,
        legalName: SITE_CONFIG.legalName,
        url: SITE_CONFIG.domain,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_CONFIG.domain}/images/logo.png`,
          width: 683,
          height: 184,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: SITE_CONFIG.phoneTel,
          contactType: "customer service",
          areaServed: "PK",
          availableLanguage: ["English", "Urdu"],
        },
        sameAs: [
          SITE_CONFIG.socials.facebook,
          SITE_CONFIG.socials.instagram,
          SITE_CONFIG.socials.youtube,
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.domain}/#website`,
        url: SITE_CONFIG.domain,
        name: SITE_CONFIG.name,
        publisher: {
          "@id": `${SITE_CONFIG.domain}/#organization`,
        },
        inLanguage: "en-PK",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${optimaNova.variable} ${segoeUi.variable} ${helvetica.variable} ${azonix.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
