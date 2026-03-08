import type { MetadataRoute } from "next";
import { getAllProductSlugs, collections } from "@/lib/data";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://aish.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/new-arrivals",
    "/collections",
    "/about",
    "/contact",
  ];

  const collectionRoutes = collections.map((c) => `/collections/${c.slug}`);
  const productRoutes = getAllProductSlugs().map((slug) => `/products/${slug}`);

  const allRoutes = [...staticRoutes, ...collectionRoutes, ...productRoutes];

  return allRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
