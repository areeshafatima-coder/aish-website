import Link from "next/link";

import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aishofficial.shop";

export const metadata: Metadata = {
  title: "Unstitched Pakistani Fabrics & Designs UK — Custom Stitching | Aish",
  description:
    "Shop unstitched Pakistani fabrics and designs from Aish. Premium net, chiffon, organza and velvet. Custom stitching available. UK & US delivery.",
  keywords: [
    "unstitched pakistani fabric uk",
    "unstitched pakistani designs uk",
    "pakistani fabric uk",
    "unstitched lehenga fabric uk",
    "custom stitching pakistani uk",
  ],
  alternates: { canonical: `${baseUrl}/unstitched` },
  openGraph: {
    title: "Unstitched Pakistani Fabrics & Designs UK | Aish",
    description:
      "Premium unstitched Pakistani fabrics — net, chiffon, organza, velvet. Custom stitching available. UK & US delivery.",
    url: `${baseUrl}/unstitched`,
    siteName: "Aish",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Unstitched Pakistani Fabrics UK | Aish",
    description: "Premium unstitched Pakistani fabrics. Custom stitching available. UK & US delivery.",
  },
};

export default function UnstitchedPage() {
  return (
    <main className="page-main">
      <section className="section">
        <div className="container">
          <div className="page-header">
            <span className="section-tag">Unstitched</span>
            <h1>Unstitched</h1>
            <p>Fabrics and designs for your tailor.</p>
          </div>
          <div className="content-block">
            <p>
              We offer a selection of unstitched fabrics and designs for those who prefer
              to get their pieces tailored locally. Ideal for a perfect fit or custom
              alterations.
            </p>
            <p>
              Enquire via WhatsApp for our current unstitched range, yardage, and pricing.
              We ship worldwide.
            </p>
          </div>
          <div className="section-cta">
            <a
              href="https://wa.me/447500547532?text=Hi%2C%20I'm%20interested%20in%20unstitched%20fabrics"
              className="btn btn-primary"
            >
              Enquire via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
