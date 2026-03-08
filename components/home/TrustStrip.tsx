export default function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="container">
        <ul className="trust-list">
          <li>
            <span className="trust-icon">
              <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </span>
            <span>Free Delivery<br />£300 / $300</span>
          </li>
          <li>
            <span className="trust-icon">
              <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
                <circle cx={12} cy={12} r={10} />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </span>
            <span>Worldwide<br />Shipping</span>
          </li>
          <li>
            <span className="trust-icon">
              <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
                <rect x={1} y={4} width={22} height={16} rx={2} />
                <path d="M1 10h22" />
              </svg>
            </span>
            <span>Secure<br />Payment</span>
          </li>
          <li>
            <span className="trust-icon">
              <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </span>
            <span>Easy Returns<br />& Exchange</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
