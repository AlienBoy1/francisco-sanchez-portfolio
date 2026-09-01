import { getDocDomains } from "@/content/engineering-docs";
import { getFeatureRegistry } from "@/content/features";
import { getProjects } from "@/content/projects";
import { getTechnologyCatalog } from "@/content/technologies";
import type { Locale } from "@/i18n/routing";

export type SearchItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  type: string;
};

export function getSearchIndex(locale: Locale): SearchItem[] {
  const projects = getProjects(locale).map((project) => ({
    id: `project-${project.slug}`,
    title: project.name,
    description: project.summary,
    href: `/projects/${project.slug}`,
    type: locale === "es" ? "Trabajo" : "Work",
  }));

  const tech = getTechnologyCatalog(locale).flatMap((group) =>
    group.items.map((item) => ({
      id: `tech-${group.id}-${item.name}`,
      title: item.name,
      description: `${group.title}: ${item.note}`,
      href: "/lab/technologies",
      type: locale === "es" ? "Tecnología" : "Technology",
    })),
  );

  const docs = getDocDomains(locale).map((domain) => ({
    id: `doc-${domain.id}`,
    title: domain.title,
    description: domain.description,
    href: "/lab/docs",
    type: locale === "es" ? "Documentación" : "Documentation",
  }));

  const features = getFeatureRegistry(locale).map((feature) => ({
    id: feature.id,
    title: `${feature.id} · ${feature.name}`,
    description: `${feature.category} · ${feature.priority}`,
    href: feature.route ?? "/lab/features",
    type: "Feature",
  }));

  return [...projects, ...tech, ...docs, ...features];
}

export function searchPortfolio(locale: Locale, query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return getSearchIndex(locale).slice(0, 8);

  return getSearchIndex(locale).filter((item) => {
    const haystack = `${item.title} ${item.description} ${item.type}`.toLowerCase();
    return haystack.includes(normalized);
  });
}
