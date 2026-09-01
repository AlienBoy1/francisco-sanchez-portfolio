import type { Locale } from "@/i18n/routing";

export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectGalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectMedia = {
  cover: string;
  coverAlt: string;
  gallery: ProjectGalleryItem[];
};

export type ProjectDocSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  problem: string;
  solution: string;
  role: string;
  year: string;
  productType: string;
  client?: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  results: string[];
  category: string;
  status: string;
  featured?: boolean;
  caseStudyId?: string;
  overview?: string;
  objectives?: string[];
  approach?: string;
  architectureNotes?: string;
  lessons?: string[];
  metrics?: ProjectMetric[];
  media: ProjectMedia;
  /** Extra documented sections filled from project context packs */
  documentation: ProjectDocSection[];
  repositoryUrl?: string;
  demoUrl?: string;
};

export type ProjectLocaleMap = Record<Locale, Project[]>;

export function projectMediaPaths(slug: string) {
  const base = `/media/projects/${slug}`;
  return {
    cover: `${base}/cover.webp`,
    gallery: (index: number) => `${base}/gallery-${index}.webp`,
  } as const;
}
