export default function Newsletter() {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-inner">
          <h2>Join the Aish Circle</h2>
          <p>
            Be the first to know about new arrivals, exclusive offers and early access to collections.
          </p>
          <form className="newsletter-form" action="#" method="post">
            <input type="email" name="email" placeholder="Your email address" required />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
