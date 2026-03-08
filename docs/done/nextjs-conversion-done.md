# Next.js conversion — done

## Summary

The Aish static HTML/CSS/JS site has been converted to **Next.js 14 (App Router)**. All routes, layout, and behaviour match the original; plans live in **`docs/plan/`**.

---

## What’s in place

- **Scaffold**: `package.json`, `next.config.js`, `tsconfig.json`, `app/layout.tsx`, `app/globals.css` (styles ported from `styles.css`).
- **Layout**: PromoBar, Header (client: mobile menu + overlay), NavOverlay (client), Footer. All nav links use Next routes.
- **Home (`/`)**: HeroSlider (client, 2 slides, dots, auto-rotate), product grid, collection grid, trust strip, newsletter.
- **Static pages**: `/new-arrivals`, `/collections`, `/ready-to-wear`, `/unstitched`, `/contact` with same content and per-page metadata.
- **Dynamic product**: `/products/[slug]` with `generateStaticParams` for 4 products, ProductGallery (client), breadcrumb, WhatsApp CTA, dynamic metadata.
- **Data**: `lib/data.ts` — products, collections, hero slides; `getProductBySlug`, `getAllProductSlugs`.
- **Assets**: Root `assets/` copied to `public/assets/` so `/assets/...` works.
- **404**: `app/not-found.tsx`.

---

## How to run

```bash
npm run dev
```

Open **http://localhost:3000**.

- **Build**: `npm run build`
- **Start prod**: `npm run start`

---

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home: hero, new arrivals, collections, trust, newsletter |
| `/new-arrivals` | All 4 products |
| `/collections` | Collection grid |
| `/ready-to-wear` | Category page |
| `/unstitched` | Category page + WhatsApp CTA |
| `/contact` | Contact info + form |
| `/products/[slug]` | Product detail; slugs: `champagne-gold-lehenga`, `lavender-lehenga-set`, `maroon-velvet-embroidered`, `embroidered-formal-set` |

---

## Docs layout

- **Plans**: `docs/plan/` (e.g. `nextjs-migration.md`).
- **Done**: `docs/done/` (this file and any other “what’s been done” summaries).
- All project `.md` lives under **`docs/`** (see `docs/README.md`).
