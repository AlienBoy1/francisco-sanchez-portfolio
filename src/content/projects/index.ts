import type { Locale } from "@/i18n/routing";
import { projectsByLocale } from "./data";

export type {
  Project,
  ProjectDocSection,
  ProjectGalleryItem,
  ProjectMedia,
  ProjectMetric,
} from "./types";
export { projectMediaPaths } from "./types";

export function getProjects(locale: Locale) {
  return projectsByLocale[locale];
}

export function getFeaturedProjects(locale: Locale, limit = 7) {
  const projects = projectsByLocale[locale];
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);
  return [...featured, ...rest].slice(0, limit);
}

export function getProjectBySlug(locale: Locale, slug: string) {
  return projectsByLocale[locale].find((project) => project.slug === slug);
}

export function getAllProjectSlugs() {
  return projectsByLocale.en.map((project) => project.slug);
}

export function getProjectCategories(locale: Locale) {
  return Array.from(new Set(getProjects(locale).map((project) => project.category)));
}
