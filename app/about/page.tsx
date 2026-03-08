import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { collections } from "@/lib/data";

const ASSETS = "/assets";

export const metadata: Metadata = {
  title: "About Aish",
  description:
    "Aish — luxury handcrafted Pakistani fashion. Designed in the UK. Festive wear, bridal & occasion wear for UK & US.",
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
              Aish is luxury handcrafted Pakistani fashion — designed in the UK
              and made for those who love timeless craftsmanship and modern
              elegance.
            </p>
            <p>
              We create festive wear, bridal and occasion pieces that blend
              traditional embroidery and premium fabrics with silhouettes you
              can wear with confidence. Every piece is made to order, so you get
              a perfect fit and a one-of-a-kind look.
            </p>
            <p>
              We serve the UK and US with free shipping over £300 / $300, and
              we&apos;re here to help with custom orders and styling — just
              reach out via WhatsApp or our contact page.
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
