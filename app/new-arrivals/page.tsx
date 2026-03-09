import Link from "next/link";
import { products } from "@/lib/data";
import ProductCard from "@/components/product/ProductCard";
import TrustStrip from "@/components/home/TrustStrip";

export const metadata = {
  title: "New Pakistani Dresses 2026 — Eid Collection, Lehengas & Festive Wear",
  description:
    "Shop new Pakistani dresses for Eid 2026 — luxury lehengas, embroidered ensembles & festive wear. Handcrafted in UK. Free shipping over £300 / $300.",
  keywords: [
    "new pakistani dresses 2026",
    "eid dresses uk",
    "pakistani lehenga uk",
    "eid outfits uk 2026",
    "festive pakistani wear",
  ],
};

export default function NewArrivalsPage() {
  return (
    <>
      <main className="page-main">
        <section className="section section-products">
          <div className="container">
            <div className="page-header">
              <span className="section-tag">New In</span>
              <h1>New Arrivals</h1>
              <p>Luxury handcrafted Pakistani outfits. Serving UK & US.</p>
            </div>
            <div className="product-grid">
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <TrustStrip />
    </>
  );
}
