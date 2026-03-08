import Link from "next/link";
import { products } from "@/lib/data";
import ProductCard from "@/components/product/ProductCard";
import TrustStrip from "@/components/home/TrustStrip";

export const metadata = {
  title: "New Arrivals",
  description: "Latest luxury Pakistani fashion — luxury pret, festive and formal wear. UK & US delivery.",
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
