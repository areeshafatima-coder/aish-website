"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { NavLinksList, NavOverlayLinks } from "./NavLinks";

export default function Header() {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const pathname = usePathname() || "/";

  useEffect(() => {
    document.body.style.overflow = overlayOpen ? "hidden" : "";
  }, [overlayOpen]);

  return (
    <>
      <header className="header" role="banner">
        <div className="header__inner">
          <Link href="/" className="header__logo">
            Aish
          </Link>
          <button
            type="button"
            className="header__menu-btn"
            aria-label={overlayOpen ? "Close menu" : "Open menu"}
            aria-expanded={overlayOpen}
            aria-controls="nav-overlay"
            onClick={() => setOverlayOpen((o) => !o)}
          >
            <span className="header__menu-icon" aria-hidden="true" />
          </button>
          <nav className="header__nav" id="nav-main" aria-label="Main">
            <NavLinksList pathname={pathname} />
          </nav>
          <div className="header__actions">
            <button type="button" className="header__action" aria-label="Search">
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                <circle cx={11} cy={11} r={8} />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            <a href="#" className="header__action" aria-label="Wishlist">
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </a>
            <a href="#" className="header__action header__action--cart" aria-label="Cart (0 items)">
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1={3} y1={6} x2={21} y2={6} />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="header__cart-count">0</span>
            </a>
          </div>
        </div>
      </header>

      <div
        className={`nav-overlay ${overlayOpen ? "is-open" : ""}`}
        id="nav-overlay"
        aria-hidden={!overlayOpen}
        aria-label="Mobile menu"
      >
        <nav className="nav-overlay__nav">
          <NavOverlayLinks
            pathname={pathname}
            onLinkClick={() => setOverlayOpen(false)}
          />
        </nav>
      </div>
    </>
  );
}
