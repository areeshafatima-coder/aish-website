import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { collections } from "@/lib/data";

const ASSETS = "/assets";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aishofficial.shop";

export const metadata: Metadata = {
  title: "About Aish — Luxury Pakistani Fashion Brand UK | Our Story",
  description:
    "Aish is a UK-based luxury Pakistani fashion brand creating handcrafted Eid dresses, lehengas, festive wear and bridal couture. Made to order with premium fabrics. Serving UK & US.",
  alternates: { canonical: `${baseUrl}/about` },
};

export default function AboutPage() {
  return (
    <main className="page-main">
      <section className="section about-hero">
        <div className="about-hero__inner container">
          <div className="about-hero__content">
            <span className="section-tag">Our Story</span>
            <h1>About Aish</h1>
            <p className="about-hero__lead">
              Aish is a luxury handcrafted Pakistani fashion brand — designed in
              the UK and made for those who love timeless craftsmanship and
              modern elegance.
            </p>
            <p>
              We specialise in Pakistani Eid dresses, festive lehengas, bridal
              couture and occasion wear — all made to order with premium fabrics
              including net, chiffon, organza, velvet and raw silk. Every piece
              features hand-applied embellishments: zardozi, resham threadwork,
              sequins and beadwork crafted by skilled artisans.
            </p>
            <p>
              Our collections range from Luxury Pret festive pieces starting at
              £265, to heavily embroidered lehengas at £265–£640, to full
              bridal couture from £1,450. We serve the UK and US with free
              shipping on orders over £300 / $300, and offer custom sizing and
              bespoke orders via WhatsApp.
            </p>
            <p>
              Whether you&apos;re dressing for Eid, a walima, baraat or a
              milestone celebration, Aish creates pieces that are uniquely
              yours.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Get in touch
            </Link>
          </div>
          <div className="about-hero__media">
            <Image
              src={`${ASSETS}/banner-about-duo-studio.png`}
              alt="Aish luxury Pakistani fashion"
              fill
              className="about-hero__image"
              sizes="(max-width: 767px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section about-collections">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Explore</span>
            <h2>Our collections</h2>
            <p>Festive, bridal and luxury pret — all made with care.</p>
          </div>
          <div className="about-collections__grid">
            {collections.map((col) => (
              <Link
                key={col.slug}
                href={`/collections/${col.slug}`}
                className="about-collections__card"
              >
                <span className="about-collections__name">{col.name}</span>
                <span className="about-collections__cta">{col.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
