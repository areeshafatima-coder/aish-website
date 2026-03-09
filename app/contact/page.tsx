import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aishofficial.shop";

export const metadata: Metadata = {
  title: "Contact Aish — Pakistani Eid Dresses & Custom Orders UK | WhatsApp & Email",
  description:
    "Contact Aish for Pakistani Eid dresses, custom orders and bespoke sizing. WhatsApp +44 7500 547532 or email. UK & US enquiries welcome. Made-to-order Pakistani fashion.",
  keywords: [
    "contact aish pakistani fashion",
    "custom pakistani dress order uk",
    "bespoke eid dress uk",
    "pakistani fashion enquiry uk",
    "whatsapp pakistani dress order",
  ],
  alternates: { canonical: `${baseUrl}/contact` },
  openGraph: {
    title: "Contact Aish — Pakistani Eid Dresses & Custom Orders",
    description:
      "Contact Aish for Pakistani Eid dresses, custom orders and bespoke sizing. WhatsApp +44 7500 547532. UK & US enquiries welcome.",
    url: `${baseUrl}/contact`,
    siteName: "Aish",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Aish — Pakistani Eid Dresses & Custom Orders",
    description:
      "WhatsApp +44 7500 547532 for Pakistani Eid dresses, custom orders and bespoke sizing. UK & US.",
  },
};

const contactLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Aish",
  url: `${baseUrl}/contact`,
  description:
    "Contact Aish for enquiries about Pakistani Eid dresses, custom orders, bespoke sizing and festive wear. Available via WhatsApp and email.",
  mainEntity: {
    "@type": "Organization",
    name: "Aish",
    url: baseUrl,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+44-7500-547532",
        contactType: "customer service",
        availableLanguage: ["English", "Urdu"],
        contactOption: "TollFree",
      },
    ],
    sameAs: ["https://www.instagram.com/aish_officiall/"],
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactLd) }}
      />
      <main className="page-main">
        <section className="section contact-page">
          <div className="container">
            <div className="page-header">
              <span className="section-tag">Get in Touch</span>
              <h1>Contact</h1>
              <p>Enquiries, orders and custom requests. We&apos;re here to help.</p>
            </div>
            <div className="contact-grid">
              <div className="contact-info">
                <h2>Reach Us</h2>
                <p>
                  <strong>WhatsApp</strong>
                  <br />
                  <a href="https://wa.me/447500547532">+44 7500 547532</a>
                </p>
                <p>
                  <strong>Email</strong>
                  <br />
                  <a href="mailto:hello@aish.com">hello@aish.com</a>
                </p>
                <p>Designed in the UK · Worldwide delivery · DM for custom orders.</p>
              </div>
              <form className="contact-form" action="#" method="post">
                <label htmlFor="contact-name">Name</label>
                <input type="text" id="contact-name" name="name" required />
                <label htmlFor="contact-email">Email</label>
                <input type="email" id="contact-email" name="email" required />
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" rows={4} />
                <button type="submit" className="btn btn-primary">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
