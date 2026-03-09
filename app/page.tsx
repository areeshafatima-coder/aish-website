import Link from "next/link";
import { products, collections, heroSlides } from "@/lib/data";
import HeroSlider from "@/components/home/HeroSlider";
import ProductCard from "@/components/product/ProductCard";
import CollectionGrid from "@/components/home/CollectionGrid";
import TrustStrip from "@/components/home/TrustStrip";
import Newsletter from "@/components/home/Newsletter";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aishofficial.shop";

export const metadata = {
  title: "Pakistani Eid Dresses UK 2026 — Lehengas, Anarkalis, Shararas & Festive Wear | Aish",
  description:
    "Shop luxury Pakistani Eid dresses 2026 — handcrafted lehengas, anarkali suits, sharara sets & gharara. Designed in the UK. Free shipping over £300 / $300.",
  keywords: [
    "eid dresses uk 2026",
    "pakistani eid dresses uk",
    "eid outfits uk 2026",
    "eid collection 2026 uk",
    "anarkali suit uk",
    "sharara suit uk",
    "gharara suit uk",
    "eid lehenga uk",
    "eid clothes online uk",
    "luxury pakistani fashion uk",
    "eid party outfit uk",
    "walima dress uk",
    "pakistani eid dresses usa",
    "eid outfit ideas 2026",
    "chiffon eid dress uk",
    "velvet eid dress uk",
    "made to order eid dress uk",
  ],
  alternates: { canonical: baseUrl },
  openGraph: {
    title: "Pakistani Eid Dresses UK 2026 — Lehengas, Anarkalis & Shararas | Aish",
    description:
      "Luxury handcrafted Pakistani Eid dresses 2026 — lehengas, anarkali suits, sharara sets & festive wear. Designed in UK. Free shipping over £300 / $300.",
    url: baseUrl,
    siteName: "Aish",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pakistani Eid Dresses UK 2026 | Aish",
    description: "Luxury lehengas, anarkalis, shararas & festive wear. UK & US delivery. Free shipping over £300.",
  },
};

const faqItems = [
  {
    question: "Where can I buy luxury Pakistani Eid dresses in the UK for 2026?",
    answer:
      "Aish is a UK-based luxury Pakistani fashion brand offering handcrafted Eid dresses including lehengas, anarkali suits, sharara sets and gharara. All pieces are made to order and delivered across the UK — London, Birmingham, Manchester, Leeds — with free shipping on orders over £300.",
  },
  {
    question: "What are the most popular Pakistani Eid outfit styles for 2026?",
    answer:
      "The most popular Pakistani Eid outfits for 2026 are lehengas, anarkali suits, sharara sets, gharara suits and embroidered festive ensembles. Trending colours include sage green, dusty lilac, champagne gold, blush pink and jewel tones like emerald and sapphire. At Aish, all pieces feature hand-applied zardozi, resham and sequin embroidery on premium chiffon, organza and velvet fabrics.",
  },
  {
    question: "Can I order Pakistani Eid outfits online for delivery to the US?",
    answer:
      "Yes. Aish ships luxury Pakistani Eid dresses to the US with free shipping on orders over $300. Popular US orders include lehengas, anarkali suits, sharara sets and festive salwar kameez — all made to order with custom sizing.",
  },
  {
    question: "How long before Eid should I order a Pakistani dress?",
    answer:
      "Order at least 4–6 weeks before Eid for Luxury Pret pieces. Heavily embellished lehengas, anarkali suits and sharara sets require 6–8 weeks. With Eid 2026 on 30 March, order now to guarantee delivery in time.",
  },
  {
    question: "What is the price of Pakistani Eid dresses at Aish?",
    answer:
      "Aish Eid dresses start from £265 for Luxury Pret festive pieces, ranging up to £640 for heavily embroidered lehengas and anarkali suits. Bridal couture and sharara sets start at £1,450. Free UK shipping on orders over £300.",
  },
  {
    question: "Does Aish make custom Pakistani dresses for Eid?",
    answer:
      "Yes. Aish creates bespoke Pakistani dresses for Eid, walima, mehndi and special occasions — custom colours, sizes and embroidery designs. Contact via WhatsApp on +44 7500 547532 to discuss your requirements.",
  },
  {
    question: "What fabrics are Aish Eid dresses made from?",
    answer:
      "Aish Eid dresses are crafted in premium fabrics including chiffon, organza, velvet, net and raw silk — ideal for both UK spring weather and indoor celebrations. All embellishments including zardozi, resham, sequins and mirror work are hand-applied by skilled artisans.",
  },
  {
    question: "Does Aish deliver Pakistani Eid dresses to London, Birmingham and Manchester?",
    answer:
      "Yes. Aish delivers luxury Pakistani Eid dresses across the UK including London, Birmingham, Manchester, Leeds, Bradford, Luton, Slough and all other cities. Free UK shipping on orders over £300.",
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
