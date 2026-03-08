import Link from "next/link";

const links = [
  { href: "/new-arrivals", label: "New Arrivals" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function NavLinksList({ pathname }: { pathname: string }) {
  return (
    <ul className="header__nav-list">
      {links.map(({ href, label }) => {
        const isActive = pathname === href;
        return (
          <li key={href}>
            <Link href={href} aria-current={isActive ? "page" : undefined}>
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function NavOverlayLinks({
  pathname,
  onLinkClick,
}: {
  pathname: string;
  onLinkClick?: () => void;
}) {
  return (
    <ul className="nav-overlay__list">
      {links.map(({ href, label }) => {
        const isActive = pathname === href;
        return (
          <li key={href}>
            <Link
              href={href}
              aria-current={isActive ? "page" : undefined}
              onClick={onLinkClick}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
