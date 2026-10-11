import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Source_Sans_3 } from "next/font/google";
import { SITE_CONFIG } from "@/lib/siteConfig";
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

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const isProduction =
  process.env.VERCEL_ENV === "production" ||
  process.env.NODE_ENV === "production" && !process.env.VERCEL_URL;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: "New City Paradise | PHATA-Approved Housing Society near Burhan Interchange",
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
      className={`${helvetica.variable} ${azonix.variable} ${sourceSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-serif">{children}</body>
    </html>
  );
}
