import Link from "next/link";
import { products, collections, heroSlides } from "@/lib/data";
import HeroSlider from "@/components/home/HeroSlider";
import ProductCard from "@/components/product/ProductCard";
import CollectionGrid from "@/components/home/CollectionGrid";
import TrustStrip from "@/components/home/TrustStrip";
import Newsletter from "@/components/home/Newsletter";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aishofficial.shop";

export const metadata = {
  title: "Pakistani Eid Dresses UK 2026 — Luxury Lehengas & Festive Wear | Aish",
  description:
    "Shop luxury Pakistani Eid dresses 2026 — handcrafted lehengas, gharara suits & festive wear. Designed in the UK. Free shipping over £300 / $300.",
  alternates: { canonical: baseUrl },
};

const faqItems = [
  {
    question: "Where can I buy luxury Pakistani Eid dresses in the UK?",
    answer:
      "Aish offers luxury handcrafted Pakistani Eid dresses in the UK — including lehengas, embroidered ensembles and festive suits. All pieces are made to order and delivered across the UK with free shipping on orders over £300.",
  },
  {
    question: "Can I order Pakistani Eid outfits online for delivery to the US?",
    answer:
      "Yes. Aish ships luxury Pakistani Eid outfits to the US with free shipping on orders over $300. Browse our festive and luxury pret collections for Eid 2026.",
  },
  {
    question: "How long does it take to receive a made-to-order Pakistani dress?",
    answer:
      "Aish made-to-order pieces take 3–10 weeks depending on embellishment complexity. Luxury Pret pieces are available on shorter lead times of 4–6 weeks. Order now to receive in time for Eid 2026.",
  },
  {
    question: "What is the price of Pakistani Eid dresses at Aish?",
    answer:
      "Aish Eid dresses start from £265 for Luxury Pret festive pieces, ranging up to £640 for heavily embroidered lehengas. Bridal couture starts at £1,450. Free UK shipping on orders over £300.",
  },
  {
    question: "Does Aish make custom Pakistani dresses?",
    answer:
      "Yes. Aish creates custom-made Pakistani dresses for Eid, weddings and special occasions. Contact via WhatsApp on +44 7500 547532 to discuss your custom requirements and sizing.",
  },
  {
    question: "What Pakistani outfits are best for Eid 2026?",
    answer:
      "For Eid 2026, popular Pakistani outfit choices include lehengas, embroidered ensembles and festive pret sets. Aish offers a curated festive collection with hand-embroidered pieces in net, chiffon and organza fabrics — perfect for Eid prayers and celebrations.",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Luxury Pakistani Eid Dresses UK 2026",
  description:
    "Handcrafted Pakistani Eid dresses, lehengas and festive wear for UK & US",
  url: `${baseUrl}/new-arrivals`,
  numberOfItems: products.length,
  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${baseUrl}/products/${product.slug}`,
    name: product.title,
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />

      <HeroSlider slides={heroSlides} />

      <section id="new-arrivals" className="section section-products">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Eid 2026</span>
            <h2>Pakistani Eid Dresses — New Arrivals</h2>
            <p>
              Luxury handcrafted lehengas, embroidered ensembles & festive wear. Made to order for UK & US.
            </p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <div className="section-cta">
            <Link href="/eid-collection" className="btn btn-primary" style={{ marginRight: "1rem" }}>
              Shop Eid Collection
            </Link>
            <Link href="/new-arrivals" className="btn btn-outline">
              View All
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

      {/* FAQ Section — AEO: powers Google "People Also Ask" & featured snippets */}
      <section className="section section-faq" aria-labelledby="faq-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Help</span>
            <h2 id="faq-heading">Pakistani Eid Dresses — FAQ</h2>
            <p>Everything you need to know about ordering Eid dresses from Aish.</p>
          </div>
          <div className="faq-list">
            {faqItems.map((item, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-question">{item.question}</summary>
                <p className="faq-answer">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
