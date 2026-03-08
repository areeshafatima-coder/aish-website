# Aish — High-End Brand Roadmap: Best-in-Class Every Angle

**Goal:** Elevate Aish to a top-tier luxury Pakistani fashion brand presence across UX, SEO, performance, accessibility, product experience, and technical quality. This plan uses the installed skills (Next.js, SEO/GEO, UI/UX, a11y, performance, frontend design, testing) to achieve a high-end brand-level website.

---

## 1. Brand & Positioning (Foundation)

| Objective | Actions | Skills / Notes |
|-----------|---------|----------------|
| **Clear brand voice** | Define tone (elegant, understated luxury, UK/US-friendly). Use consistently in all copy: hero, product descriptions, footer, meta. | web-design-guidelines, frontend-design |
| **Visual identity lock** | Document palette (deep green, gold, cream), typography (Cormorant Garamond, Outfit), spacing and radius in a single source. Use CSS variables everywhere. | frontend-design-system, ui-ux-pro-max |
| **Trust & credibility** | Add “As seen in” / press, Instagram feed or curated grid, optional short “Our story” page. WhatsApp and contact prominent. | — |

**Deliverables:** Brand doc (in `docs/`), design tokens in CSS, consistent copy and “About” if added.

---

## 2. UX & UI (Every Touchpoint)

| Objective | Actions | Skills / Notes |
|-----------|---------|----------------|
| **Navigation** | Keep nav minimal; add active state (`aria-current="page"`). Consider mega-menu for Collections on desktop. Ensure mobile overlay closes on route change (done). | ui-ux-pro-max, frontend-responsive-design-standards |
| **Home hierarchy** | Hero → New arrivals (primary) → Collections → Trust → Newsletter. Clear CTAs; one primary action per section. | frontend-design, web-design-guidelines |
| **Product cards** | Consistent aspect ratio, hover state (e.g. quick view or subtle zoom). Badges (New, Bestseller) clear. Ensure tap targets ≥ 44px on mobile. | frontend-design-system, accessibility-a11y |
| **Product page** | Gallery with zoom or lightbox optional; sticky “Enquire via WhatsApp” on scroll; size/fabric info if relevant. Breadcrumb and structured data. | ui-ux-pro-max, nextjs-best-practices |
| **Forms** | Contact and newsletter: labels, error states, success message. No placeholder-only labels. | accessibility-a11y, frontend-code-review |
| **Empty & error states** | 404 (done), 500, and any “no results” with clear next step (e.g. back to New Arrivals). | — |

**Deliverables:** Updated components (Header nav active state, ProductCard, Contact/Newsletter forms), optional design-system doc.

---

## 3. Performance (Speed & Core Web Vitals)

| Objective | Actions | Skills / Notes |
|-----------|---------|----------------|
| **Images** | Use Next.js `Image` for hero and product images; `sizes` and `priority` for LCP. Prefer WebP/AVIF; keep originals for quality. | performance, nextjs-app-router-patterns |
| **Fonts** | Load Cormorant Garamond and Outfit via `next/font/google` (subset, display swap) to avoid FOIT and reduce layout shift. | performance, fixing-motion-performance |
| **JS/CSS** | Rely on Next code splitting; keep client components minimal (Header, HeroSlider, ProductGallery). Lazy-load below-fold sections if needed. | nextjs-best-practices, performance-optimization |
| **Critical path** | Preconnect to Google Fonts if not using `next/font`. Preload LCP image. Defer non-critical CSS where possible. | performance |
| **Budgets** | Aim: LCP < 2.5s, CLS < 0.1, INP/FID < 200ms. Total page weight target < 1.5 MB; images above fold < 500 KB. | performance |

**Deliverables:** `next/font` in layout, `Image` on key pages, preload/preconnect where needed, Lighthouse audit log in `docs/done/` after changes.

---

## 4. SEO & GEO (Findability & AI Visibility)

| Objective | Actions | Skills / Notes |
|-----------|---------|----------------|
| **Metadata** | Every page: unique title and meta description (≤160 chars). Template “%s \| Aish”. Open Graph and Twitter cards for key pages. | seo-audit, ai-seo |
| **Structured data** | JSON-LD: Organization, WebSite (with SearchAction if you add search), Product (name, description, image, offers, brand). BreadcrumbList on listing and product pages. | seo-geo, programmatic-seo |
| **URLs & semantics** | Clean URLs (done). One H1 per page; logical heading order. Semantic HTML (header, main, nav, article, section). | seo-content-brief, accessibility-a11y |
| **Sitemap & robots** | `app/sitemap.ts` (dynamic) and `app/robots.ts` allowing crawlers and pointing to sitemap. | nextjs-app-router-patterns, seo-geo |
| **GEO / AI visibility** | Clear, factual product and category copy; schema so AI engines can cite Aish for “luxury Pakistani fashion UK/US”. Internal links (e.g. collection → products). | seo-geo, ai-seo |

**Deliverables:** `sitemap.ts`, `robots.ts`, Product + Organization + WebSite + BreadcrumbList JSON-LD, meta/OG on all routes.

---

## 5. Accessibility (Inclusive & Compliant)

| Objective | Actions | Skills / Notes |
|-----------|---------|----------------|
| **Semantic HTML** | Use `<main>`, `<nav>`, `<article>`, `<section>`; buttons for actions, links for navigation. No div/span for interactive controls. | accessibility-a11y |
| **ARIA** | Menu: `aria-expanded`, `aria-controls`, `aria-label`. Overlay: `aria-hidden` when closed. Slider: `aria-roledescription`, `aria-valuenow`/min/max or live region for current slide. | accessibility-a11y |
| **Focus & keyboard** | Visible focus ring; all interactive elements reachable and activatable by keyboard. Trap focus in mobile overlay when open. | accessibility-a11y |
| **Color & contrast** | Text/UI meet WCAG AA (4.5:1 normal text, 3:1 large). Don’t rely on color alone (e.g. badges, links). | accessibility, frontend-design |
| **Forms** | Every input has a visible `<label>`; errors associated with `aria-describedby`. Required fields marked. | accessibility-a11y |
| **Images** | Alt text for every meaningful image; decorative images `alt=""` or `role="presentation"`. | accessibility-a11y |

**Deliverables:** Audit checklist (e.g. WCAG 2.1 AA) in `docs/plan/`, fixes in components, optional `loading.tsx`/`error.tsx` with accessible messaging.

---

## 6. Products, Content & Merchandising

| Objective | Actions | Skills / Notes |
|-----------|---------|----------------|
| **Richer product model** | Add fields: `fabric`, `care`, `sizes` (or “One size” / “Made to order”), `deliveryNote`, `relatedIds[]`. Keep `slug`, `title`, `category`, `price`, `description`, `image`, `images`, `badge`, `whatsappText`. | — |
| **New products** | Add 4–8 more products (e.g. 2–3 per category: Luxury Pret, Festive, Formal, Bridal). High-res images; 3 images per product. | — |
| **Collections** | Map products to collections; filter New Arrivals by collection (e.g. “Luxury Pret”). Optional collection landing pages with description + product grid. | — |
| **Copy quality** | Product descriptions: benefit-led, occasion-focused, keyword-aware (e.g. “mehndi”, “Eid”, “reception”) without stuffing. Category pages: short, scannable intro. | seo-content-brief, ai-seo |
| **Hero & banners** | Rotate 2–3 hero slides; optional seasonal banner. All images high-res, no text baked in; alt text for each. | — |

**Deliverables:** Updated `lib/data.ts` (and optionally `lib/products.ts` / `lib/collections.ts`), new product entries, collection–product mapping, copy in data or CMS later.

---

## 7. Technical Excellence (Next.js & Code Quality)

| Objective | Actions | Skills / Notes |
|-----------|---------|----------------|
| **TypeScript** | Strict types everywhere; no `any`. Shared types for Product, Collection, HeroSlide in `lib/types.ts` or keep in `data.ts`. | nextjs-react-typescript, typescript-react-reviewer |
| **Data layer** | Keep static data in `lib/`; later, swap to API or CMS without changing page structure. Consider `getProducts()`, `getCollections()` with optional filters. | nextjs-best-practices |
| **Loading & errors** | `loading.tsx` for key routes (e.g. product); `error.tsx` with recovery. Not-found already in place. | nextjs-app-router-patterns |
| **Testing** | Unit tests for data helpers (`getProductBySlug`, etc.). E2E for: home load, nav to New Arrivals, open product, click WhatsApp. | javascript-testing-patterns, e2e-testing-patterns, webapp-testing |
| **Code review** | No duplicate logic; small components; consistent naming (BEM or similar). No unnecessary client components. | frontend-code-review, vercel-react-best-practices |

**Deliverables:** Types in one place, `loading.tsx`/`error.tsx`, test suite (e.g. Jest + Playwright or Vitest + Playwright), short “Code standards” in `docs/plan/` if useful.

---

## 8. Conversion & Trust (WhatsApp & Credibility)

| Objective | Actions | Skills / Notes |
|-----------|---------|----------------|
| **WhatsApp CTA** | One clear CTA per product (“Enquire via WhatsApp”); promo bar and footer already link. Optional: “Chat on WhatsApp” sticky on mobile. | — |
| **Trust strip** | Keep current; ensure icons have `aria-hidden` or decorative role and adjacent text is sufficient. Add “Secure checkout” / “SSL” if you add payment later. | accessibility-a11y |
| **Social proof** | If available: testimonials, star rating snippet (schema), or “As worn at…” on product. Optional Instagram feed or “Follow us” CTA. | seo-geo (Review schema) |
| **Newsletter** | Clear value (“First access, exclusive offers”); success/error state; optional double opt-in note in footer. | — |
| **Contact** | Contact form with validation and success message; contact info visible in footer and on Contact page. | — |

**Deliverables:** Consistent WhatsApp flow, optional Review/FAQ schema, newsletter success state, contact form handling (client or server action).

---

## 9. Phased Implementation (Suggested Order)

| Phase | Focus | Outcomes |
|-------|--------|----------|
| **1. Foundation** | Brand doc, design tokens, `next/font`, Next `Image` on hero + products, sitemap + robots, JSON-LD (Organization, WebSite, Product, BreadcrumbList) | Faster LCP, better SEO/GEO, consistent look |
| **2. Content & products** | 4–8 new products, richer product model, collection–product mapping, improved copy | More catalog, better internal linking and relevance |
| **3. UX & a11y** | Nav active state, focus trap in overlay, ARIA on slider, form labels and errors, contrast check | WCAG AA alignment, better keyboard/screen reader UX |
| **4. Performance & polish** | Preload LCP, image sizes/format, loading/error boundaries, optional tests | Strong Core Web Vitals, fewer runtime errors |
| **5. Conversion** | WhatsApp sticky (optional), newsletter/contact success states, trust/schema tweaks | Higher enquiry and sign-up clarity |

---

## 10. Success Metrics (How “Best-in-Class” Is Measured)

| Angle | Target / Check |
|-------|----------------|
| **Performance** | Lighthouse Performance ≥ 90; LCP < 2.5s; CLS < 0.1 |
| **SEO** | Valid meta and JSON-LD; indexable sitemap; no critical crawl errors |
| **GEO** | Product and brand info clear and structured so AI engines can cite Aish |
| **Accessibility** | WCAG 2.1 AA; keyboard and one screen reader pass (e.g. NVDA/VoiceOver) |
| **UX** | Clear hierarchy, one primary CTA per section, forms and errors understandable |
| **Brand** | Consistent voice and visual identity across all pages and copy |
| **Technical** | TypeScript strict, no unnecessary client JS, tests for critical paths |

---

## 11. Skills Used in This Plan

- **Next.js:** nextjs-best-practices, nextjs-app-router-patterns, nextjs-app-router-fundamentals, nextjs-react-typescript, vercel-react-best-practices, vercel-composition-patterns  
- **SEO / GEO:** seo-geo, seo-audit, programmatic-seo, ai-seo, seo-content-brief  
- **UI/UX & design:** ui-ux-pro-max, frontend-design, frontend-design-system, frontend-responsive-design-standards, web-design-guidelines  
- **Performance:** performance, performance-optimization, fixing-motion-performance  
- **Accessibility:** accessibility-a11y, accessibility  
- **Code quality:** frontend-code-review, typescript-react-reviewer, best-practices  
- **Testing:** webapp-testing, javascript-testing-patterns, e2e-testing-patterns  

Use this roadmap as the single “north star” for making Aish top-notch in every angle and achieving a high-end brand-level site. Prioritize Phase 1–2 first, then iterate with Phase 3–5 and metrics.
