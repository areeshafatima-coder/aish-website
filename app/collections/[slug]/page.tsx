import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getCollectionBySlug,
  getProductsByCategory,
  collections,
} from "@/lib/data";
import ProductCard from "@/components/product/ProductCard";
import TrustStrip from "@/components/home/TrustStrip";
import Link from "next/link";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) return { title: "Collection" };
  return {
    title: `${collection.name} | Aish`,
    description: `Shop ${collection.name} — luxury handcrafted Pakistani fashion. UK & US delivery.`,
  };
}

export default async function CollectionPage({ params }: PageProps) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) notFound();

  const products = getProductsByCategory(collection.name);

  return (
    <>
      <main className="page-main">
        <section className="section section-products">
          <div className="container">
            <div className="page-header">
              <span className="section-tag">Collection</span>
              <h1>{collection.name}</h1>
              <p>
                {products.length > 0
                  ? `Luxury handcrafted ${collection.name.toLowerCase()}. Made to order. UK & US delivery.`
                  : "Curated pieces in this collection. More coming soon."}
              </p>
            </div>
            {products.length > 0 ? (
              <>
                <div className="product-grid">
                  {products.map((product) => (
                    <ProductCard key={product.slug} product={product} />
                  ))}
                </div>
              </>
            ) : (
              <div className="section-cta">
                <Link href="/collections" className="btn btn-outline">
                  View all collections
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>
      <TrustStrip />
    </>
  );
}
