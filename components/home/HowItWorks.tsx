export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "WhatsApp Us",
      description:
        "Tell us your occasion, your vision and your measurements. Every Aish piece begins with a conversation — not a checkout button.",
    },
    {
      number: "02",
      title: "We Create It",
      description:
        "Your dress is handcrafted specifically for you — your measurements, your colours, your embellishment choices. Made once. Never duplicated.",
    },
    {
      number: "03",
      title: "Delivered to You",
      description:
        "Your finished piece is delivered to your door across the UK and US. Yours and nobody else's.",
    },
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <div className="how-it-works__header">
          <span className="how-it-works__tag">The Aish Process</span>
          <h2 className="how-it-works__heading">How Aish Works</h2>
          <p className="how-it-works__subhead">
            Aish doesn&apos;t have a checkout button. Every dress begins with a conversation.
          </p>
        </div>
        <div className="how-it-works__grid">
          {steps.map((step) => (
            <div key={step.number} className="how-it-works__step">
              <span className="how-it-works__number">{step.number}</span>
              <div className="how-it-works__divider" />
              <h3 className="how-it-works__title">{step.title}</h3>
              <p className="how-it-works__desc">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="how-it-works__cta">
          <a
            href="https://wa.me/447500547532?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20a%20bespoke%20dress%20from%20Aish"
            target="_blank"
            rel="noopener noreferrer"
            className="btn how-it-works__btn"
          >
            Begin Your Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
