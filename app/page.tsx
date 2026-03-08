import Link from "next/link";
import { products, collections, heroSlides } from "@/lib/data";
import HeroSlider from "@/components/home/HeroSlider";
import ProductCard from "@/components/product/ProductCard";
import CollectionGrid from "@/components/home/CollectionGrid";
import TrustStrip from "@/components/home/TrustStrip";
import Newsletter from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <>
      <HeroSlider slides={heroSlides} />

      <section id="new-arrivals" className="section section-products">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">New In</span>
            <h2>New Arrivals</h2>
            <p>Luxury handcrafted Pakistani outfits. Serving UK & US.</p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <div className="section-cta">
            <Link href="/new-arrivals" className="btn btn-outline">
              View All New Arrivals
            </Link>
          </div>
        </div>
      </section>

      <section id="collections" className="section section-collections">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Curated</span>
            <h2>Shop by Collection</h2>
          </div>
          <CollectionGrid collections={collections} />
        </div>
      </section>

      <TrustStrip />
      <Newsletter />
    </>
  );
}
