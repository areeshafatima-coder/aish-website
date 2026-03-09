import { collections } from "@/lib/data";
import CollectionGrid from "@/components/home/CollectionGrid";
import TrustStrip from "@/components/home/TrustStrip";

import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aishofficial.shop";

export const metadata: Metadata = {
  title: "Shop Pakistani Collections — Festive, Bridal & Luxury Pret | Aish UK",
  description:
    "Shop Aish Pakistani fashion collections — luxury pret, festive Eid dresses, bridal lehengas and formal wear. Handcrafted in UK. Free shipping over £300 / $300.",
  keywords: [
    "pakistani fashion collections uk",
    "luxury pret pakistani uk",
    "festive pakistani dresses uk",
    "bridal lehenga collection uk",
    "pakistani formal wear uk",
  ],
  alternates: { canonical: `${baseUrl}/collections` },
  openGraph: {
    title: "Shop Pakistani Collections — Festive, Bridal & Luxury Pret | Aish",
    description:
      "Aish Pakistani fashion collections — luxury pret, festive Eid dresses, bridal lehengas and formal wear. UK & US delivery.",
    url: `${baseUrl}/collections`,
    siteName: "Aish",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop Pakistani Collections | Aish UK",
    description: "Luxury pret, festive Eid dresses, bridal lehengas & formal wear. UK & US delivery.",
  },
};

export default function CollectionsPage() {
  return (
    <>
      <main className="page-main">
        <section className="section section-collections">
          <div className="container">
            <div className="page-header">
              <span className="section-tag">Curated</span>
              <h1>Shop by Collection</h1>
              <p>Explore our luxury pret, festive, formal and bridal collections.</p>
            </div>
            <CollectionGrid collections={collections} />
          </div>
        </section>
      </main>
      <TrustStrip />
    </>
  );
}
