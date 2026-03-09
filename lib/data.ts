export interface Product {
  slug: string;
  title: string;
  category: string;
  price: string;
  description: string[];
  image: string;
  images: string[];
  badge?: string;
  whatsappText: string;
  fabric?: string;
  care?: string;
  occasion?: string;
  deliveryNote?: string;
  relatedSlugs?: string[];
}

export interface Collection {
  slug: string;
  name: string;
  image: string;
  cta: string;
  large?: boolean;
}

export interface HeroSlide {
  image: string;
  tag: string;
  title: string;
  subtitle: string;
}

const ASSETS = "/assets";

export const products: Product[] = [
  {
    slug: "sage-reverie-couture-gown",
    title: "Sage Reverie Couture Gown",
    category: "Bridal & Occasion",
    price: "£3,200",
    description: [
      "Custom-style sage green couture gown with intricate gold embroidery layered over sheer net, designed to move fluidly and photograph beautifully from every angle.",
      "Perfect for walima, reception and high-end evening events where you want effortless elegance and refined craftsmanship. UK & US delivery.",
    ],
    image: `${ASSETS}/sage-reverie-couture-gown-1.png`,
    images: [
      `${ASSETS}/sage-reverie-couture-gown-1.png`,
    ],
    badge: "New",
    whatsappText: "Hi, I'm interested in the Sage Reverie Couture Gown (£3,200)",
    fabric: "Sheer net base with layered gold embroidery and beadwork over a soft sage lining, finished with a flowing skirt for graceful movement.",
    care: "Dry clean only. Store hanging in a garment bag and avoid pressure on embellished areas.",
    occasion: "Walima, reception, black-tie events, high-end formal evenings",
    deliveryNote: "Made to order. Please allow 8–10 weeks.",
    relatedSlugs: ["royal-maroon-bridal-lehenga", "dusky-blue-silver-train-lehenga"],
  },
  {
    slug: "champagne-gold-lehenga",
    title: "Embroidered Lehenga — Champagne Gold",
    category: "Luxury Pret",
    price: "£285",
    description: [
      "A timeless champagne gold lehenga choli crafted for those who appreciate understated luxury. Features a fitted choli with delicate gold zardozi and sequin work, a voluminous skirt with all-over embroidery, and a sheer dupatta with subtle border detailing.",
      "Made to order with premium fabrics. Perfect for mehndi, receptions, or special occasions. UK & US delivery. Free shipping on orders over £300 / $300.",
    ],
    image: `${ASSETS}/champagne-gold-lehenga-hero.png`,
    images: [`${ASSETS}/champagne-gold-lehenga-hero.png`],
    badge: "New",
    whatsappText: "Hi, I'm interested in Embroidered Lehenga — Champagne Gold (£285)",
    fabric: "Organza and raw silk with hand-embellished zardozi and sequins",
    care: "Dry clean only. Store in garment bag.",
    occasion: "Mehndi, reception, nikah, formal events",
    deliveryNote: "Made to order. Please allow 4–6 weeks for stitching and delivery.",
    relatedSlugs: ["embroidered-formal-set"],
  },
  {
    slug: "lavender-lehenga-set",
    title: "Lavender Embroidered Lehenga Set",
    category: "Festive",
    price: "£265",
    description: [
      "Soft lavender meets traditional craftsmanship in this elegant lehenga set. The choli and skirt are adorned with fine floral and geometric embroidery in complementary tones, while the dupatta adds a light, flowing finish.",
      "Ideal for Eid, weddings, and festive gatherings. Made to order. UK & US delivery. Free shipping on orders over £300 / $300.",
    ],
    image: `${ASSETS}/lavender-embroidered-lehenga-hero.png`,
    images: [`${ASSETS}/lavender-embroidered-lehenga-hero.png`],
    whatsappText: "Hi, I'm interested in Lavender Embroidered Lehenga Set (£265)",
    fabric: "Net and chiffon with threadwork and sequins",
    care: "Dry clean only. Steam on low heat.",
    occasion: "Eid, dholki, daytime weddings, festive dinners",
    deliveryNote: "Made to order. Please allow 3–5 weeks for stitching and delivery.",
    relatedSlugs: ["champagne-gold-lehenga"],
  },
  {
    slug: "maroon-velvet-embroidered",
    title: "Maroon Velvet Embroidered Outfit",
    category: "Formal",
    price: "£320",
    description: [
      "Deep maroon velvet paired with rich gold threadwork makes this outfit a standout for formal events. The luxurious fabric and hand-finished embroidery create a regal look suitable for receptions, valima, or milestone celebrations.",
      "Made to order. UK & US delivery. Free shipping on orders over £300 / $300.",
    ],
    image: `${ASSETS}/maroon-velvet-embroidered-outfit-hero.png`,
    images: [`${ASSETS}/maroon-velvet-embroidered-outfit-hero.png`],
    badge: "Bestseller",
    whatsappText: "Hi, I'm interested in Maroon Velvet Embroidered Outfit (£320)",
    fabric: "Premium velvet with hand zardozi and tilla work",
    care: "Dry clean only. Do not expose to direct sunlight for extended periods.",
    occasion: "Reception, valima, winter weddings, black-tie events",
    deliveryNote: "Made to order. Please allow 5–7 weeks for stitching and delivery.",
    relatedSlugs: ["champagne-gold-lehenga", "embroidered-formal-set"],
  },
  {
    slug: "royal-maroon-bridal-lehenga",
    title: "Royal Maroon Bridal Lehenga",
    category: "Bridal & Occasion",
    price: "£1,450",
    description: [
      "A signature Aish bridal lehenga in deep maroon velvet and antique gold, heavily hand-embellished with zardozi, resham, and crystal work across the skirt and choli.",
      "Paired with a sheer dupatta finished with a delicately scalloped border, this piece is designed for brides who want a timeless yet modern silhouette.",
    ],
    image: `${ASSETS}/royal-maroon-bridal-lehenga-hero.png`,
    images: [
      `${ASSETS}/royal-maroon-bridal-lehenga-hero.png`,
    ],
    badge: "Couture",
    whatsappText:
      "Hi, I'm interested in the Royal Maroon Bridal Lehenga (Couture, £1,450)",
    fabric:
      "Premium velvet lehenga and choli with antique gold zardozi, resham and crystal handwork; net dupatta with hand-finished borders.",
    care: "Dry clean only. Store flat in a muslin garment bag. Avoid hanging for long periods.",
    occasion: "Bridal reception, baraat, high-end South Asian weddings",
    deliveryNote:
      "Couture made-to-measure. Please allow 8–10 weeks for design confirmation, stitching and delivery.",
    relatedSlugs: ["maroon-velvet-embroidered", "champagne-gold-lehenga"],
  },
  // ——— Premium Festive Only (£3k–£10k+) ———
  // ——— Inspired by your references (festive, luxe campaign look) ———
  {
    slug: "periwinkle-silver-lehenga",
    title: "Periwinkle Silver Lehenga",
    category: "Festive",
    price: "£580",
    description: [
      "Soft periwinkle and lavender-grey lehenga with dense silver and white threadwork, sequins and beads. Fitted bodice and full-length embroidered sleeves lead into a voluminous skirt with a scalloped, ruffled overlay and a short train.",
      "A matching dupatta with silver embroidery is draped over the shoulder. Sophisticated and ethereal for receptions and special occasions. UK & US delivery.",
    ],
    image: `${ASSETS}/periwinkle-silver-lehenga-1.png`,
    images: [`${ASSETS}/periwinkle-silver-lehenga-1.png`],
    badge: "Bestseller",
    whatsappText: "Hi, I'm interested in the Periwinkle Silver Lehenga (£580)",
    fabric: "Sheer and semi-sheer fabrics with silver and white embroidery, sequins and beadwork.",
    care: "Dry clean only. Handle embellishments with care.",
    occasion: "Reception, valima, evening wedding guest, milestone celebrations",
    deliveryNote: "Made to order. Please allow 5–7 weeks.",
    relatedSlugs: ["lavender-lehenga-set", "ivory-gold-gharara-suit"],
  },
  {
    slug: "mint-silver-embroidered-ensemble",
    title: "Mint & Silver Embroidered Ensemble",
    category: "Festive",
    price: "£550",
    description: [
      "Seafoam and mint green ensemble with silver-white embroidery and delicate floral accents in soft pinks and greens. Sheer overlay top with V-neck and long sleeves, open-front jacket layer with dense beadwork and a scalloped hem, and a flowing inner skirt.",
      "The dupatta features tiered ruffles and a soft pastel floral print. Perfect for daytime weddings and festive events. UK & US delivery.",
    ],
    image: `${ASSETS}/mint-silver-ensemble-1.png`,
    images: [
      `${ASSETS}/mint-silver-ensemble-1.png`,
      `${ASSETS}/mint-silver-ensemble-opt4.png`,
      `${ASSETS}/mint-silver-ensemble-opt5.png`,
      `${ASSETS}/mint-silver-ensemble-opt6.png`,
      `${ASSETS}/mint-silver-ensemble-opt7.png`,
    ],
    whatsappText: "Hi, I'm interested in the Mint & Silver Embroidered Ensemble (£550)",
    fabric: "Net and organza with silver and white embroidery, beads and sequins; silk-style inner layer.",
    care: "Dry clean only. Store in muslin.",
    occasion: "Day wedding, mehndi, Eid, festive luncheons",
    deliveryNote: "Made to order. Please allow 5–6 weeks.",
    relatedSlugs: ["periwinkle-silver-lehenga", "sage-peach-garara-set"],
  },
  {
    slug: "dusky-blue-silver-train-lehenga",
    title: "Dusky Blue Silver Train Lehenga",
    category: "Festive",
    price: "£620",
    description: [
      "Statement dusky blue lehenga with extensive silver-toned embroidery, floral and vine motifs and a long, scalloped train. Sheer layers over a structured silhouette with fitted sleeves and a voluminous skirt that pools at the floor.",
      "A matching dupatta with the same intricate work is draped over the shoulder. Bold and luxurious for receptions and bridal guest wear. UK & US delivery.",
    ],
    image: `${ASSETS}/dusky-train-exact-threequarter-back.png`,
    images: [
      `${ASSETS}/dusky-train-exact-threequarter-back.png`,
      `${ASSETS}/dusky-train-exact-front.png`,
      `${ASSETS}/dusky-train-exact-side.png`,
      `${ASSETS}/dusky-train-exact-back.png`,
      `${ASSETS}/dusky-train-exact-angle-left.png`,
      `${ASSETS}/dusky-train-exact-6.png`,
      `${ASSETS}/dusky-train-exact-7.png`,
      `${ASSETS}/dusky-train-exact-8.png`,
      `${ASSETS}/dusky-train-exact-9.png`,
      `${ASSETS}/dusky-train-exact-10.png`,
      `${ASSETS}/dusky-train-exact-11.png`,
      `${ASSETS}/dusky-train-exact-12.png`,
    ],
    badge: "New",
    whatsappText: "Hi, I'm interested in the Dusky Blue Silver Train Lehenga (£620)",
    fabric: "Net and chiffon with dense silver embroidery, sequins and beads; long train construction.",
    care: "Dry clean only. Store flat. Avoid folding embellished areas.",
    occasion: "Reception, valima, bridal guest, formal evening events",
    deliveryNote: "Made to order. Please allow 6–8 weeks.",
    relatedSlugs: ["periwinkle-silver-lehenga", "royal-maroon-bridal-lehenga"],
  },
  {
    slug: "slate-blue-couture-lehenga",
    title: "Slate Blue Couture Lehenga",
    category: "Festive",
    price: "£640",
    description: [
      "High-end slate blue lehenga with dense silver embroidery and beadwork, styled with a sleeveless choli and long, flowing train. Shot on clean white steps for a luxury campaign feel.",
      "Includes matching dupatta and is ideal for receptions, engagement parties and premium evening events. UK & US delivery.",
    ],
    image: `${ASSETS}/slate-blue-couture-lehenga-1.png`,
    images: [
      `${ASSETS}/slate-blue-couture-lehenga-1.png`,
      `${ASSETS}/slate-blue-couture-lehenga-3.png`,
      `${ASSETS}/slate-blue-couture-lehenga-4.png`,
      `${ASSETS}/slate-blue-couture-lehenga-5.png`,
      `${ASSETS}/slate-blue-couture-lehenga-close2.png`,
    ],
    badge: "New",
    whatsappText: "Hi, I'm interested in the Slate Blue Couture Lehenga (£640)",
    fabric: "Net and chiffon with intricate silver zari, sequins and bead embellishment; layered skirt with train.",
    care: "Dry clean only. Store flat and avoid compressing embellished areas.",
    occasion: "Reception, valima, high-end wedding guest, black-tie events",
    deliveryNote: "Made to order. Please allow 6–8 weeks.",
    relatedSlugs: ["dusky-blue-silver-train-lehenga", "periwinkle-silver-lehenga"],
  },
  {
    slug: "slate-blue-net-dupatta-lehenga",
    title: "Slate Blue Net Dupatta Lehenga",
    category: "Festive",
    price: "£630",
    description: [
      "Slim-cut slate blue lehenga with all-over silver embroidery, paired with a sleeveless choli and a sheer net dupatta with a delicate silver border. Styled on white steps for a clean, modern campaign look.",
      "Perfect for high-end receptions and engagement events, with a soft, flowing train and lightweight dupatta for graceful movement. UK & US delivery.",
    ],
    image: `${ASSETS}/slate-blue-slim-lehenga-dupatta-front.png`,
    images: [
      `${ASSETS}/slate-blue-slim-lehenga-dupatta-front.png`,
      `${ASSETS}/slate-blue-slim-lehenga-dupatta-fronton.png`,
      `${ASSETS}/slate-blue-slim-lehenga-dupatta-back.png`,
      `${ASSETS}/slate-blue-slim-lehenga-dupatta-close.png`,
    ],
    badge: "New",
    whatsappText: "Hi, I'm interested in the Slate Blue Net Dupatta Lehenga (£630)",
    fabric: "Net lehenga and choli with dense silver embroidery and sequins; soft sheer net dupatta with embroidered border.",
    care: "Dry clean only. Store flat and keep the dupatta in a separate cover to protect embroidery.",
    occasion: "Reception, engagement, formal evening events, wedding guest",
    deliveryNote: "Made to order. Please allow 6–8 weeks.",
    relatedSlugs: ["slate-blue-couture-lehenga", "dusky-blue-silver-train-lehenga"],
  },
  // ——— Like first inspiration: rich colours, garara/gharara/lehenga, detailed embroidery ———
  // ——— Premium open gown: blush pink & silver ———
  {
    slug: "blush-silver-embellished-gown",
    title: "Blush Pink & Silver Embellished Gown",
    category: "Festive",
    price: "£565",
    description: [
      "Floor-length open gown in blush pink with heavy silver and white embroidery, beadwork and sequins. V-neck, embroidered sleeves and scalloped hem. Matching wide trousers and sheer ruffled dupatta with pearl trim and soft floral accents.",
      "Elegant and feminine for receptions and special occasions. UK & US delivery.",
    ],
    image: `${ASSETS}/product-blush-silver-gown-1.png`,
    images: [
      `${ASSETS}/product-blush-silver-gown-1.png`,
      `${ASSETS}/product-blush-silver-gown-2.png`,
      `${ASSETS}/product-blush-silver-gown-3.png`,
    ],
    badge: "New",
    whatsappText: "Hi, I'm interested in the Blush Pink & Silver Embellished Gown (£565)",
    fabric: "Net and organza with silver embroidery, beads and sequins; ruffled dupatta with pearl trim.",
    care: "Dry clean only. Store in garment bag.",
    occasion: "Reception, nikah, engagement, formal evening",
    deliveryNote: "Made to order. Please allow 6–8 weeks.",
    relatedSlugs: ["blush-pink-gold-lehenga", "ivory-silver-anarkali"],
  },
];

export const collections: Collection[] = [
  { slug: "luxury-pret", name: "Luxury Pret", image: `${ASSETS}/collection-luxury-pret-modern-v4.png`, cta: "Explore", large: true },
  { slug: "festive", name: "Festive", image: `${ASSETS}/collection-fit-festive-modern-1.png`, cta: "Shop" },
  { slug: "formal", name: "Formal", image: `${ASSETS}/banner-blush-gold-editorial.png`, cta: "Shop" },
  { slug: "bridal-occasion", name: "Bridal & Occasion", image: `${ASSETS}/collection-bridal-occasion-modern-v3a.png`, cta: "Discover" },
];

export const heroSlides: HeroSlide[] = [
  {
    image: `${ASSETS}/aish-banner-2-hq.png`,
    tag: "Bridal & Occasion",
    title: "Made for You.\nOnly You.",
    subtitle: "Every piece handcrafted to your measurements. Never duplicated.",
  },
  {
    image: `${ASSETS}/aish-banner-3-hq.png`,
    tag: "Bridal Couture",
    title: "A Dress as\nUnique as You.",
    subtitle: "Nikkah. Walima. Rukhsati. Every occasion, crafted with intention.",
  },
  {
    image: `${ASSETS}/aish-banner-couple-maroon.png`,
    tag: "Wedding Occasion",
    title: "Your Story.\nBeautifully Told.",
    subtitle: "Bespoke bridal wear — designed around your vision, made once, never repeated.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}
