import type { MetadataRoute } from "next";
import { siteConfig } from "@/design-system/tokens";
import { getAllProjectSlugs } from "@/content/projects";
import { routing } from "@/i18n/routing";

const staticPaths = [
  "",
  "/about",
  "/projects",
  "/resume",
  "/contact",
  "/lab",
  "/lab/technologies",
  "/lab/docs",
  "/lab/github",
  "/lab/architecture",
  "/lab/features",
  "/lab/traceability",
  "/lab/search",
  "/lab/analytics",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${siteConfig.url}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : path.startsWith("/lab") ? 0.5 : 0.7,
      });
    }

    for (const slug of getAllProjectSlugs()) {
      entries.push({
        url: `${siteConfig.url}/${locale}/projects/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return entries;
}
