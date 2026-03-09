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

const collectionMeta: Record<string, { title: string; description: string; keywords: string[] }> = {
  festive: {
    title: "Pakistani Eid & Festive Dresses UK 2026 — Lehengas & Embroidered Wear",
    description:
      "Shop luxury Pakistani festive & Eid dresses 2026 — handcrafted lehengas, embroidered ensembles & festive suits. UK & US delivery. Free shipping over £300.",
    keywords: [
      "pakistani festive dresses uk",
      "eid dresses uk 2026",
      "eid lehenga uk",
      "festive pakistani wear",
      "embroidered lehenga uk",
    ],
  },
  "bridal-occasion": {
    title: "Pakistani Bridal Lehengas & Occasion Wear UK — Luxury Couture | Aish",
    description:
      "Luxury Pakistani bridal lehengas and occasion wear. Handcrafted couture for walima, reception & baraat. Made to order — UK & US delivery.",
    keywords: [
      "pakistani bridal lehenga uk",
      "bridal lehenga uk",
      "pakistani wedding dresses uk",
      "couture bridal pakistan uk",
    ],
  },
  "luxury-pret": {
    title: "Luxury Pakistani Pret Dresses UK — Ready to Order Eid & Festive Wear",
    description:
      "Shop luxury Pakistani pret dresses — ready to order in shorter lead times. Eid dresses, lehengas & embroidered sets. UK & US delivery. Free shipping over £300.",
    keywords: ["luxury pret pakistan uk", "pakistani pret dresses uk", "ready to wear pakistan uk"],
  },
  formal: {
    title: "Pakistani Formal Dresses UK — Luxury Embroidered Occasion Wear | Aish",
    description:
      "Shop luxury Pakistani formal dresses — velvet, embroidered and occasion wear. Made to order. UK & US delivery. Free shipping over £300.",
    keywords: ["pakistani formal dresses uk", "formal pakistani wear uk", "embroidered formal uk"],
  },
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) return { title: "Collection" };
  const meta = collectionMeta[slug];
  if (meta) {
    return {
      title: meta.title,
      description: meta.description,
      keywords: meta.keywords,
    };
  }
  return {
    title: `${collection.name} — Luxury Pakistani Fashion UK & US | Aish`,
    description: `Shop ${collection.name} — luxury handcrafted Pakistani fashion. Made to order. UK & US delivery. Free shipping over £300.`,
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
