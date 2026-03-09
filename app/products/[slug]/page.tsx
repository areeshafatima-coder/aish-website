import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, getAllProductSlugs } from "@/lib/data";
import ProductGallery from "@/components/product/ProductGallery";
import TrustStrip from "@/components/home/TrustStrip";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product | Aish" };
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aishofficial.shop";
  const description = product.description[0]?.slice(0, 160) ?? undefined;
  return {
    title: `${product.title} | Aish — Luxury Pakistani Fashion UK`,
    description,
    alternates: { canonical: `${baseUrl}/products/${slug}` },
    openGraph: {
      title: `${product.title} | Aish`,
      description,
      url: `${baseUrl}/products/${slug}`,
      siteName: "Aish",
      type: "website",
      images: product.images[0] ? [{ url: product.images[0], alt: product.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | Aish`,
      description,
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const whatsappUrl = `https://wa.me/447500547532?text=${encodeURIComponent(
    product.whatsappText
  )}`;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aishofficial.shop";
  const productUrl = `${baseUrl}/products/${slug}`;

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: product.images,
    description: product.description.join(" "),
    brand: {
      "@type": "Brand",
      name: "Aish",
    },
    offers: {
      "@type": "Offer",
      price: product.price.replace(/[^0-9.]/g, ""),
      priceCurrency: "GBP",
      url: productUrl,
      availability: "https://schema.org/PreOrder",
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "New Arrivals",
        item: `${baseUrl}/new-arrivals`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.title,
        item: productUrl,
      },
    ],
  };

  return (
    <>
      <main className="page-main product-detail-page">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <Link href="/new-arrivals">New Arrivals</Link>
            <span aria-hidden="true"> / </span>
            <span>{product.title}</span>
          </nav>
          <div className="product-detail">
            <div className="product-detail__media">
              <ProductGallery
                images={product.images}
                title={product.title}
                badge={product.badge}
              />
            </div>
            <div className="product-detail__info">
              <span className="product-detail__category">
                {product.category}
              </span>
              <h1 className="product-detail__title">{product.title}</h1>
              <p className="product-detail__price">{product.price}</p>
              <div className="product-detail__desc">
                {product.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
                {product.fabric && (
                  <p>
                    <strong>Fabric:</strong> {product.fabric}
                  </p>
                )}
                {product.care && (
                  <p>
                    <strong>Care:</strong> {product.care}
                  </p>
                )}
                {product.occasion && (
                  <p>
                    <strong>Occasion:</strong> {product.occasion}
                  </p>
                )}
                {product.deliveryNote && (
                  <p>
                    <strong>Delivery:</strong> {product.deliveryNote}
                  </p>
                )}
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary product-detail__cta"
              >
                Enquire via WhatsApp
              </a>
              <Link href="/new-arrivals" className="product-detail__back">
                ← Back to New Arrivals
              </Link>
            </div>
          </div>
        </div>
      </main>
      <TrustStrip />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([productLd, breadcrumbLd]),
        }}
      />
    </>
  );
}
