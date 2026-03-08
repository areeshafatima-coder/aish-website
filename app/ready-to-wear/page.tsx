import Link from "next/link";

export const metadata = {
  title: "Ready to Wear",
  description: "Luxury ready-to-wear Pakistani fashion. Curated pieces for UK & US.",
};

export default function ReadyToWearPage() {
  return (
    <main className="page-main">
      <section className="section">
        <div className="container">
          <div className="page-header">
            <span className="section-tag">Ready to Wear</span>
            <h1>Ready to Wear</h1>
            <p>Curated luxury pieces, ready to ship.</p>
          </div>
          <div className="content-block">
            <p>
              Our ready-to-wear collection brings together the finest Pakistani craftsmanship
              in styles that are ready to wear. Perfect for last-minute occasions, gifts, or
              when you want something special without the wait.
            </p>
            <p>
              <Link href="/new-arrivals">Browse new arrivals</Link> or{" "}
              <a href="https://wa.me/447500547532">contact us on WhatsApp</a> to enquire about
              sizes and availability.
            </p>
          </div>
          <div className="section-cta">
            <Link href="/new-arrivals" className="btn btn-primary">
              Shop New Arrivals
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
