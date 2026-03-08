import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo">
              Aish
            </Link>
            <p>
              Luxury handcrafted Pakistani fashion. Designed in the UK. Serving UK & US.
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/aish_officiall/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                Instagram
              </a>
              <a href="#" aria-label="Facebook">Facebook</a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Shop</h4>
            <ul>
              <li><Link href="/new-arrivals">New Arrivals</Link></li>
              <li><Link href="/collections">Collections</Link></li>
              <li><Link href="/ready-to-wear">Ready to Wear</Link></li>
              <li><Link href="/unstitched">Unstitched</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Help</h4>
            <ul>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns & Exchange</a></li>
              <li><a href="#">Track Order</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Contact</h4>
            <ul>
              <li><a href="https://wa.me/447500547532">WhatsApp +44 7500 547532</a></li>
              <li><a href="mailto:hello@aish.com">hello@aish.com</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Aish. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
