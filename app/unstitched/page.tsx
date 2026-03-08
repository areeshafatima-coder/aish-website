import Link from "next/link";

export const metadata = {
  title: "Unstitched",
  description: "Unstitched Pakistani fabrics and designs. Custom stitching available. UK & US.",
};

export default function UnstitchedPage() {
  return (
    <main className="page-main">
      <section className="section">
        <div className="container">
          <div className="page-header">
            <span className="section-tag">Unstitched</span>
            <h1>Unstitched</h1>
            <p>Fabrics and designs for your tailor.</p>
          </div>
          <div className="content-block">
            <p>
              We offer a selection of unstitched fabrics and designs for those who prefer
              to get their pieces tailored locally. Ideal for a perfect fit or custom
              alterations.
            </p>
            <p>
              Enquire via WhatsApp for our current unstitched range, yardage, and pricing.
              We ship worldwide.
            </p>
          </div>
          <div className="section-cta">
            <a
              href="https://wa.me/447500547532?text=Hi%2C%20I'm%20interested%20in%20unstitched%20fabrics"
              className="btn btn-primary"
            >
              Enquire via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
