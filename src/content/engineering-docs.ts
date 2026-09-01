import type { Locale } from "@/i18n/routing";

export type DocDomain = {
  id: string;
  title: string;
  description: string;
  path: string;
  documents: { id: string; title: string }[];
};

const en: DocDomain[] = [
  {
    id: "governance",
    title: "Governance",
    description: "Engineering standards, workflows, and authorization.",
    path: "docs/000-governance",
    documents: [
      { id: "GOV-0000", title: "Portfolio Engineering Standard" },
      { id: "GOV-0005", title: "Coding Standards" },
      { id: "GOV-00019", title: "Development Authorization" },
    ],
  },
  {
    id: "product",
    title: "Product",
    description: "Vision, requirements, IA, and feature catalog.",
    path: "docs/200-product",
    documents: [
      { id: "PRD-2000", title: "Product Vision" },
      { id: "PRD-2006", title: "Information Architecture" },
      { id: "PRD-2007", title: "Feature Catalog" },
      { id: "PRD-2008", title: "Product Roadmap" },
    ],
  },
  {
    id: "design",
    title: "Design System",
    description: "Tokens, color, typography, components, and motion.",
    path: "docs/300-design",
    documents: [
      { id: "DS-3000", title: "Design System Foundation" },
      { id: "DS-3002", title: "Design Tokens" },
      { id: "DS-3003", title: "Color System" },
      { id: "DS-3009", title: "Accessibility Guidelines" },
    ],
  },
  {
    id: "architecture",
    title: "Architecture",
    description: "System, frontend, routing, and performance architecture.",
    path: "docs/400-architecture",
    documents: [
      { id: "ARC-4000", title: "System Architecture" },
      { id: "ARC-4001", title: "Frontend Architecture" },
      { id: "ARC-4002", title: "Routing Architecture" },
      { id: "ARC-4009", title: "SEO Architecture" },
    ],
  },
  {
    id: "development",
    title: "Development",
    description: "Roadmap, milestones, backlog, and delivery planning.",
    path: "docs/500-development",
    documents: [
      { id: "DEV-5000", title: "Development Roadmap" },
      { id: "DEV-5002", title: "Milestones" },
      { id: "DEV-5007", title: "Backlog" },
    ],
  },
];

const es: DocDomain[] = [
  {
    id: "governance",
    title: "Gobernanza",
    description: "Estándares de ingeniería, workflows y autorización.",
    path: "docs/000-governance",
    documents: [
      { id: "GOV-0000", title: "Estándar de Ingeniería del Portafolio" },
      { id: "GOV-0005", title: "Estándares de Código" },
      { id: "GOV-00019", title: "Autorización de Desarrollo" },
    ],
  },
  {
    id: "product",
    title: "Producto",
    description: "Visión, requisitos, IA y catálogo de features.",
    path: "docs/200-product",
    documents: [
      { id: "PRD-2000", title: "Visión de Producto" },
      { id: "PRD-2006", title: "Arquitectura de Información" },
      { id: "PRD-2007", title: "Catálogo de Features" },
      { id: "PRD-2008", title: "Roadmap de Producto" },
    ],
  },
  {
    id: "design",
    title: "Design System",
    description: "Tokens, color, tipografía, componentes y motion.",
    path: "docs/300-design",
    documents: [
      { id: "DS-3000", title: "Fundamentos del Design System" },
      { id: "DS-3002", title: "Design Tokens" },
      { id: "DS-3003", title: "Sistema de Color" },
      { id: "DS-3009", title: "Guías de Accesibilidad" },
    ],
  },
  {
    id: "architecture",
    title: "Arquitectura",
    description: "Arquitectura de sistema, frontend, routing y rendimiento.",
    path: "docs/400-architecture",
    documents: [
      { id: "ARC-4000", title: "Arquitectura de Sistema" },
      { id: "ARC-4001", title: "Arquitectura Frontend" },
      { id: "ARC-4002", title: "Arquitectura de Routing" },
      { id: "ARC-4009", title: "Arquitectura SEO" },
    ],
  },
  {
    id: "development",
    title: "Desarrollo",
    description: "Roadmap, hitos, backlog y planeación de entrega.",
    path: "docs/500-development",
    documents: [
      { id: "DEV-5000", title: "Roadmap de Desarrollo" },
      { id: "DEV-5002", title: "Hitos" },
      { id: "DEV-5007", title: "Backlog" },
    ],
  },
];

export function getDocDomains(locale: Locale) {
  return locale === "es" ? es : en;
}
