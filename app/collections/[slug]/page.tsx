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
    title: "Pakistani Eid & Festive Dresses UK 2026 — Lehengas, Anarkalis & Shararas | Aish",
    description:
      "Shop luxury Pakistani festive & Eid dresses 2026 — handcrafted lehengas, anarkali suits, sharara sets & embroidered ensembles. UK & US delivery. Free shipping over £300.",
    keywords: [
      "pakistani festive dresses uk",
      "eid dresses uk 2026",
      "eid lehenga uk",
      "anarkali suit uk eid",
      "sharara suit uk",
      "gharara suit uk",
      "festive pakistani wear uk",
      "embroidered lehenga uk",
      "eid clothes online uk",
      "eid outfit ideas 2026",
    ],
  },
  "bridal-occasion": {
    title: "Pakistani Bridal Lehengas, Walima & Occasion Wear UK — Luxury Couture | Aish",
    description:
      "Luxury Pakistani bridal lehengas and occasion wear for walima, baraat, mehndi & reception. Handcrafted couture made to order — UK & US delivery.",
    keywords: [
      "pakistani bridal lehenga uk",
      "bridal lehenga uk",
      "pakistani wedding dresses uk",
      "walima dress uk",
      "mehndi outfit uk",
      "baraat dress uk",
      "couture bridal pakistan uk",
      "pakistani occasion wear uk",
    ],
  },
  "luxury-pret": {
    title: "Luxury Pakistani Pret Dresses UK 2026 — Eid, Festive & Occasion Wear | Aish",
    description:
      "Shop luxury Pakistani pret dresses — anarkali suits, embroidered sets & festive wear. Shorter lead times for Eid 2026. UK & US delivery. Free shipping over £300.",
    keywords: [
      "luxury pret pakistan uk",
      "pakistani pret dresses uk",
      "ready to wear pakistan uk",
      "anarkali pret uk",
      "eid pret dresses uk",
      "embroidered pret uk",
    ],
  },
  formal: {
    title: "Pakistani Formal Dresses UK — Velvet, Embroidered & Occasion Wear | Aish",
    description:
      "Shop luxury Pakistani formal dresses — velvet anarkalis, embroidered occasion wear and party dresses. Made to order. UK & US delivery. Free shipping over £300.",
    keywords: [
      "pakistani formal dresses uk",
      "formal pakistani wear uk",
      "velvet anarkali uk",
      "embroidered formal uk",
      "pakistani party dress uk",
      "occasion wear pakistani uk",
    ],
  },
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) return { title: "Collection" };
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aishofficial.shop";
  const meta = collectionMeta[slug];
  const title = meta?.title ?? `${collection.name} — Luxury Pakistani Fashion UK & US | Aish`;
  const description = meta?.description ?? `Shop ${collection.name} — luxury handcrafted Pakistani fashion. Made to order. UK & US delivery. Free shipping over £300.`;
  return {
    title,
    description,
    keywords: meta?.keywords,
    alternates: { canonical: `${baseUrl}/collections/${slug}` },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/collections/${slug}`,
      siteName: "Aish",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
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
