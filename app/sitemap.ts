import type { MetadataRoute } from "next";
import { getAllProductSlugs, collections } from "@/lib/data";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://aishofficial.shop";

export default function sitemap(): MetadataRoute.Sitemap {
  const highPriorityRoutes = [
    { path: "", priority: 1.0 },
    { path: "/eid-collection", priority: 1.0 },
    { path: "/new-arrivals", priority: 0.9 },
    { path: "/collections/festive", priority: 0.9 },
    { path: "/collections/bridal-occasion", priority: 0.9 },
  ];

  const standardRoutes = [
    "/collections",
    "/collections/luxury-pret",
    "/collections/formal",
    "/about",
    "/contact",
    "/unstitched",
    "/ready-to-wear",
  ];

  const productRoutes = getAllProductSlugs().map((slug) => `/products/${slug}`);

  const highPriorityEntries = highPriorityRoutes.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency: "daily" as const,
    priority,
    lastModified: new Date(),
  }));

  const standardEntries = standardRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
    lastModified: new Date(),
  }));

  const productEntries = productRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency: "weekly" as const,
    priority: 0.85,
    lastModified: new Date(),
  }));

  return [...highPriorityEntries, ...standardEntries, ...productEntries];
}
