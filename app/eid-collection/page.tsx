import Link from "next/link";
import { products } from "@/lib/data";
import ProductCard from "@/components/product/ProductCard";
import TrustStrip from "@/components/home/TrustStrip";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aishofficial.shop";

export const metadata = {
  title: "Pakistani Eid Dresses UK 2026 — Luxury Lehengas, Festive & Eid Outfits | Aish",
  description:
    "Shop Pakistani Eid dresses 2026 — luxury handcrafted lehengas, gharara suits & embroidered festive wear. Designed in UK. Free shipping over £300. Order now for Eid.",
  keywords: [
    // Google Trends BREAKOUT right now
    "eid dresses uk",
    "eid dress uk",
    "pakistani dresses uk",
    "pakistani dresses online uk",
    "ethnic wear uk",
    "ethnic dresses uk",
    "girls eid dress uk",
    // High-rising (+400%, +110%)
    "readymade lehenga uk",
    "ready made lehenga uk",
    "lengha uk",
    // Core Eid
    "eid dresses uk 2026",
    "pakistani eid dresses uk",
    "eid outfits uk 2026",
    "eid collection 2026 uk",
    "eid lehenga uk",
    // Style-specific
    "anarkali suit uk eid",
    "sharara suit uk",
    "gharara suit uk",
    "eid clothes online uk",
    // Occasion
    "eid party outfit uk",
    "walima dress uk",
    "mehndi outfit uk",
    // US
    "eid dresses usa 2026",
    "pakistani eid dresses usa",
    // Long tail
    "luxury eid dresses uk",
    "handcrafted eid dresses uk",
    "made to order eid dress uk",
    "pakistani eid clothes uk",
  ],
  alternates: {
    canonical: `${baseUrl}/eid-collection`,
  },
  openGraph: {
    title: "Pakistani Eid Dresses UK 2026 — Luxury Lehengas & Festive Wear | Aish",
    description:
      "Shop Pakistani Eid dresses 2026. Luxury lehengas, gharara suits & embroidered festive wear. Designed in UK. Free shipping over £300.",
    url: `${baseUrl}/eid-collection`,
    type: "website",
  },
};

const festivePieces = products.filter(
  (p) => p.category === "Festive" || p.category === "Luxury Pret"
);

const allEidPieces = festivePieces.length > 0 ? festivePieces : products;

const eidFaqItems = [
  {
    question: "Where can I buy Pakistani Eid dresses in the UK for 2026?",
    answer:
      "Aish is a UK-based luxury Pakistani fashion brand offering handcrafted Eid dresses — lehengas, anarkali suits, sharara sets, gharara and festive ensembles. All pieces are made to order with free UK delivery on orders over £300. We deliver to London, Birmingham, Manchester, Leeds, Bradford, Luton and all UK cities.",
  },
  {
    question: "What Pakistani Eid outfit styles are trending in 2026?",
    answer:
      "Trending Pakistani Eid outfits for 2026 include lehengas, anarkali suits, sharara sets, gharara and embroidered festive salwar kameez. Popular colours are sage green, dusty lilac, champagne gold, blush pink and jewel tones (emerald, sapphire, ruby). Cape-style dupattas, lightweight chiffon and organza fabrics are leading the 2026 Eid aesthetic.",
  },
  {
    question: "Can I get a Pakistani Eid dress delivered to the US?",
    answer:
      "Yes. Aish delivers luxury Pakistani Eid dresses to the US with free shipping on orders over $300. Popular US orders include lehengas, anarkali suits, sharara sets and festive salwar kameez — all made to order with custom sizing available via WhatsApp.",
  },
  {
    question: "How early should I order a Pakistani dress for Eid 2026?",
    answer:
      "With Eid 2026 on 30 March, order immediately. Luxury Pret pieces require 4–6 weeks. Heavily embellished lehengas, anarkali suits and sharara sets require 6–8 weeks. Contact us on WhatsApp +44 7500 547532 to confirm your lead time.",
  },
  {
    question: "What is the price range for Eid dresses at Aish?",
    answer:
      "Aish Eid dresses start at £265 for Luxury Pret festive pieces including anarkali suits and embroidered sets. Lehengas and sharara sets range from £265–£640. Bridal couture starts from £1,450. Free UK shipping on orders over £300 / US shipping on orders over $300.",
  },
  {
    question: "Are Aish Eid dresses made to measure?",
    answer:
      "Yes. All Aish Eid dresses — including lehengas, anarkali suits, sharara sets and gharara — are made to order with custom measurements. Contact via WhatsApp on +44 7500 547532 to provide measurements and choose colours.",
  },
  {
    question: "What fabrics are trending for Pakistani Eid dresses in 2026?",
    answer:
      "For Eid 2026, trending fabrics include chiffon, organza, velvet and raw silk. Since Eid falls in late March, velvet and georgette pieces are ideal for cooler UK weather. All Aish pieces feature hand-applied zardozi, resham, sequins, mirror work and beadwork by skilled artisans.",
  },
  {
    question: "Does Aish make anarkali suits, sharara sets and gharara for Eid?",
    answer:
      "Yes. Aish creates luxury anarkali suits, sharara sets, gharara and lehengas — all handcrafted with premium embroidery. Each piece is made to order with custom sizing. Contact via WhatsApp on +44 7500 547532 to order your Eid 2026 outfit.",
  },
  {
    question: "Where can I buy ethnic wear and readymade lehengas in the UK?",
    answer:
      "Aish offers luxury ethnic wear and readymade lehengas in the UK — also known as lengha — for Eid 2026. Our ready-to-order pieces include embroidered lehengas, anarkali suits, sharara sets and festive Pakistani dresses online. Made to order with custom sizing and delivered across the UK.",
  },
  {
    question: "Does Aish offer walima, mehndi and Eid party outfits?",
    answer:
      "Yes. Aish designs outfits for all Pakistani celebrations — Eid, walima, mehndi, baraat, engagement and formal occasions. Browse our bridal and festive collections or contact us for bespoke orders.",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: eidFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Pakistani Eid Dresses UK 2026",
  description:
    "Luxury handcrafted Pakistani Eid dresses, lehengas and festive wear for Eid 2026. UK & US delivery.",
  url: `${baseUrl}/eid-collection`,
  numberOfItems: allEidPieces.length,
  itemListElement: allEidPieces.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${baseUrl}/products/${product.slug}`,
    name: product.title,
  })),
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "Eid Collection 2026",
      item: `${baseUrl}/eid-collection`,
    },
  ],
};

export default function EidCollectionPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <main className="page-main">
        {/* Hero Banner */}
        <section className="section eid-hero-section">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true"> / </span>
              <span>Eid Collection 2026</span>
            </nav>
            <div className="page-header">
              <span className="section-tag">Eid 2026</span>
              <h1>Pakistani Eid Dresses UK 2026</h1>
              <p>
                Luxury handcrafted lehengas, embroidered ensembles &amp; festive wear.
                Made to order — UK &amp; US delivery. Free shipping over £300 / $300.
              </p>
              <div className="eid-hero-ctas">
                <a href="https://wa.me/447500547532?text=Hi%2C+I%27d+like+to+order+an+Eid+dress+for+2026" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Order via WhatsApp
                </a>
                <Link href="/collections/festive" className="btn btn-outline">
                  Festive Collection
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Eid Dresses — GEO & AEO content */}
        <section className="section eid-about-section">
          <div className="container">
            <div className="eid-intro">
              <h2>Luxury Pakistani Eid Dresses — Handcrafted in the UK</h2>
              <p>
                Aish is a UK-based luxury Pakistani fashion brand creating handcrafted Eid dresses,
                lehengas and festive wear for discerning customers in the UK and US. Every piece is
                made to order using premium fabrics — net, chiffon, organza and velvet — with
                hand-applied embellishments including zardozi, resham, sequins and beadwork.
              </p>
              <p>
                Our Eid 2026 collection features embroidered lehengas starting from £265, intricate
                festive ensembles up to £640, and bridal couture from £1,450. All orders include
                free UK shipping on purchases over £300 and free US shipping on purchases over $300.
              </p>
              <p>
                Ordering early is essential — our made-to-order pieces require 3–8 weeks for
                stitching and delivery. Contact us via WhatsApp on{" "}
                <a href="https://wa.me/447500547532" target="_blank" rel="noopener noreferrer">
                  +44 7500 547532
                </a>{" "}
                for custom sizing, colour choices, or bespoke orders.
              </p>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="section section-products">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Shop Now</span>
              <h2>Eid Dresses &amp; Festive Wear</h2>
              <p>Made to order. Delivered to UK &amp; US. Free shipping over £300 / $300.</p>
            </div>
            <div className="product-grid">
              {allEidPieces.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
            <div className="section-cta">
              <Link href="/new-arrivals" className="btn btn-outline">
                View All Dresses
              </Link>
            </div>
          </div>
        </section>

        <TrustStrip />

        {/* FAQ Section — AEO */}
        <section className="section section-faq" aria-labelledby="eid-faq-heading">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">FAQ</span>
              <h2 id="eid-faq-heading">Pakistani Eid Dresses UK — Questions Answered</h2>
              <p>Everything you need to know before ordering your Eid dress from Aish.</p>
            </div>
            <div className="faq-list">
              {eidFaqItems.map((item, i) => (
                <details key={i} className="faq-item">
                  <summary className="faq-question">{item.question}</summary>
                  <p className="faq-answer">{item.answer}</p>
                </details>
              ))}
            </div>
            <div className="section-cta" style={{ marginTop: "2.5rem" }}>
              <a
                href="https://wa.me/447500547532?text=Hi%2C+I%27d+like+to+know+more+about+your+Eid+dresses"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Ask Us on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
