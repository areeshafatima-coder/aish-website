import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import PromoBar from "@/components/layout/PromoBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aishofficial.shop";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Aish | Pakistani Eid Dresses UK & US — Luxury Lehengas & Festive Wear 2026",
    template: "%s | Aish",
  },
  description:
    "Shop luxury Pakistani Eid dresses 2026 — handcrafted lehengas, gharara suits & festive wear. Designed in the UK. Free shipping over £300 / $300. Order now for Eid.",
  keywords: [
    "eid dresses uk",
    "eid dresses 2026",
    "pakistani eid outfits uk",
    "eid lehenga uk",
    "pakistani eid dresses usa",
    "luxury pakistani fashion uk",
    "handcrafted pakistani dresses",
    "pakistani bridal lehenga uk",
    "festive pakistani wear",
    "gharara suit uk",
    "lehenga uk",
    "eid outfit uk",
    "pakistani fashion uk",
  ],
  openGraph: {
    title: "Aish | Pakistani Eid Dresses UK & US — Luxury Lehengas & Festive Wear 2026",
    description:
      "Shop luxury Pakistani Eid dresses 2026. Handcrafted lehengas, gharara suits & festive wear. Designed in the UK. Free shipping over £300.",
    url: baseUrl,
    siteName: "Aish",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aish | Pakistani Eid Dresses UK & US",
    description:
      "Luxury handcrafted Pakistani Eid dresses 2026 — lehengas, festive wear & bridal. Designed in the UK.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: "Aish",
  url: baseUrl,
  description:
    "Aish is a luxury handcrafted Pakistani fashion brand designed in the UK, specialising in Eid dresses, lehengas, gharara suits, festive wear and bridal couture for UK and US customers. All pieces are made to order with premium fabrics including net, chiffon, velvet and organza. Free shipping on orders over £300 / $300.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+44-7500-547532",
    contactType: "customer service",
    availableLanguage: ["English", "Urdu"],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "GB",
  },
  areaServed: ["GB", "US"],
  priceRange: "££–££££",
  currenciesAccepted: "GBP, USD",
  sameAs: ["https://www.instagram.com/aish_officiall/"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pakistani Eid & Festive Fashion Collections",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Pakistani Eid Dresses UK" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Luxury Festive Lehengas UK" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Bridal Lehenga UK" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Gharara Suits UK & US" },
      },
    ],
  },
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Aish",
  url: baseUrl,
  description:
    "Luxury Pakistani Eid dresses, lehengas and festive wear. Handcrafted in the UK. Serving UK & US.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${baseUrl}/new-arrivals?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        <PromoBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
