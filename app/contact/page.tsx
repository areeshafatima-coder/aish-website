export const metadata = {
  title: "Contact",
  description: "Get in touch with Aish. WhatsApp, email. Enquiries, orders and custom requests.",
};

export default function ContactPage() {
  return (
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
  );
}
