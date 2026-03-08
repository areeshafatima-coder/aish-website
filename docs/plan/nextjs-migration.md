# Aish Website — Next.js Migration Plan

## Overview

Convert the static HTML/CSS/JS Aish luxury fashion site to **Next.js 14+ (App Router)** using skills-aligned patterns: Server Components by default, Client Components only for interactivity, SEO-friendly metadata, and a maintainable component structure.

---

## Architecture (App Router)

| Item | Approach |
|------|----------|
| **Router** | App Router (`app/`) |
| **Rendering** | Server Components default; Client for menu, hero slider, product gallery |
| **Styling** | Global CSS (port existing `styles.css` → `app/globals.css`) |
| **Fonts** | `next/font` (Cormorant Garamond, Outfit) |
| **Assets** | `public/assets/` (images); Next.js `Image` where beneficial |
| **Data** | Static product/collection data in `lib/data.ts` (no API for now) |

---

## Route Map

| Current | Next.js Route |
|---------|----------------|
| `index.html` | `/` |
| `new-arrivals.html` | `/new-arrivals` |
| `collections.html` | `/collections` |
| `ready-to-wear.html` | `/ready-to-wear` |
| `unstitched.html` | `/unstitched` |
| `contact.html` | `/contact` |
| `product-1.html` … `product-4.html` | `/products/[slug]` (e.g. `champagne-gold-lehenga`) |

---

## Component Structure

### Layout (shared)

- **PromoBar** — Server; top strip with WhatsApp link
- **Header** — Client; logo, nav links, mobile menu button, search/wishlist/cart
- **NavOverlay** — Client; mobile drawer, toggled by Header
- **Footer** — Server; brand, shop/help/contact links, copyright

### Home page

- **HeroSlider** — Client; 2 slides, dots, auto-rotate
- **ProductGrid** — Server; uses **ProductCard** (Server)
- **CollectionGrid** — Server; uses **CollectionCard** (Server)
- **TrustStrip** — Server
- **Newsletter** — Client (form) or Server (markup only)

### Product page

- **Breadcrumb** — Server
- **ProductGallery** — Client; main image + thumbnails
- **ProductDetail** — Server; title, price, description, WhatsApp CTA

### Reusable

- **ProductCard** — Server; image, badge, title, price, link to `/products/[slug]`
- **CollectionCard** — Server; background image, name, CTA
- **Button** — primary / outline variants

---

## Data (static)

- **Products**: slug, title, category, price, description, image paths, gallery images, WhatsApp message text.
- **Collections**: name, image, CTA, link (to `/new-arrivals` or future collection pages).
- **Hero slides**: image, tag, title, subtitle, CTA link.

Defined in `lib/data.ts` (or `lib/products.ts` + `lib/collections.ts`), imported in Server Components.

---

## SEO & Metadata

- **Root layout**: default title template `%s | Aish`, description, Open Graph.
- **Per-page**: `generateMetadata` or static `metadata` export (title, description) for `/`, `/new-arrivals`, `/collections`, `/contact`, `/products/[slug]`.
- **Product pages**: dynamic metadata from product title/description; canonical URL.

---

## Client vs Server

| Component | Why Client |
|-----------|------------|
| Header | Mobile menu button toggles overlay (useState, aria) |
| NavOverlay | Open/close state, body scroll lock |
| HeroSlider | Auto-rotation, dot click, slide state |
| ProductGallery | Thumbnail click changes main image |
| Newsletter | Form submit (optional; can be Server Action later) |

Everything else stays Server (better performance, SEO).

---

## File Structure (target)

```
app/
  layout.tsx          # Root layout: fonts, metadata, PromoBar, Header, NavOverlay, {children}, Footer
  page.tsx             # Home: HeroSlider, ProductGrid, CollectionGrid, TrustStrip, Newsletter
  globals.css          # Port of existing styles.css
  new-arrivals/
    page.tsx
  collections/
    page.tsx
  ready-to-wear/
    page.tsx
  unstitched/
    page.tsx
  contact/
    page.tsx
  products/
    [slug]/
      page.tsx        # Dynamic product page; get product by slug
components/
  layout/
    PromoBar.tsx
    Header.tsx
    NavOverlay.tsx
    Footer.tsx
  home/
    HeroSlider.tsx
    ProductGrid.tsx
    CollectionGrid.tsx
    TrustStrip.tsx
    Newsletter.tsx
  product/
    ProductCard.tsx
    ProductGallery.tsx
    Breadcrumb.tsx
  shared/
    CollectionCard.tsx
    Button.tsx
lib/
  data.ts             # products, collections, heroSlides
public/
  assets/              # Copy existing images here
```

---

## Implementation Order

1. **Scaffold**: Next.js app (TypeScript), `app/layout.tsx`, `app/globals.css`, fonts.
2. **Layout**: PromoBar, Header, NavOverlay, Footer; wire links to Next routes.
3. **Home**: HeroSlider (Client), ProductGrid, CollectionGrid, TrustStrip, Newsletter.
4. **Static pages**: new-arrivals, collections, ready-to-wear, unstitched, contact.
5. **Dynamic product**: `lib/data.ts` products with slugs, `/products/[slug]`, ProductGallery (Client), metadata.
6. **Assets**: Ensure `public/assets/` has all images; use `/assets/...` in src.
7. **Polish**: Metadata for all routes, accessibility (existing ARIA preserved), any remaining CSS.

---

## Post-Migration

- Remove or archive old `.html` files and `script.js` once Next.js version is verified.
- Optional: replace `<img>` with Next.js `<Image>` for key above-the-fold images (hero, product main).
- Optional: add `loading.tsx` / `error.tsx` for better UX.
