import Link from "next/link";

import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aishofficial.shop";

export const metadata: Metadata = {
  title: "Ready-to-Wear Pakistani Dresses UK — Luxury Fashion | Aish",
  description:
    "Shop luxury ready-to-wear Pakistani dresses from Aish — handcrafted lehengas, festive wear and occasion outfits. Available now for UK & US delivery.",
  keywords: [
    "ready to wear pakistani dresses uk",
    "pakistani ready to wear uk",
    "luxury pakistani rtw uk",
    "ready to wear lehenga uk",
    "pakistani occasion wear uk",
  ],
  alternates: { canonical: `${baseUrl}/ready-to-wear` },
  openGraph: {
    title: "Ready-to-Wear Pakistani Dresses UK | Aish",
    description:
      "Luxury ready-to-wear Pakistani dresses — handcrafted lehengas, festive wear and occasion outfits. UK & US delivery.",
    url: `${baseUrl}/ready-to-wear`,
    siteName: "Aish",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ready-to-Wear Pakistani Dresses UK | Aish",
    description: "Luxury handcrafted Pakistani dresses ready to wear. UK & US delivery.",
  },
};

export default function ReadyToWearPage() {
  return (
    <main className="page-main">
      <section className="section">
        <div className="container">
          <div className="page-header">
            <span className="section-tag">Ready to Wear</span>
            <h1>Ready to Wear</h1>
            <p>Curated luxury pieces, ready to ship.</p>
          </div>
          <div className="content-block">
            <p>
              Our ready-to-wear collection brings together the finest Pakistani craftsmanship
              in styles that are ready to wear. Perfect for last-minute occasions, gifts, or
              when you want something special without the wait.
            </p>
            <p>
              <Link href="/new-arrivals">Browse new arrivals</Link> or{" "}
              <a href="https://wa.me/447500547532">contact us on WhatsApp</a> to enquire about
              sizes and availability.
            </p>
          </div>
          <div className="section-cta">
            <Link href="/new-arrivals" className="btn btn-primary">
              Shop New Arrivals
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
