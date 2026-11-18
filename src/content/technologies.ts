import type { Locale } from "@/i18n/routing";

export type TechGroup = {
  id: string;
  title: string;
  description: string;
  items: { name: string; note: string }[];
};

const en: TechGroup[] = [
  {
    id: "languages",
    title: "Languages",
    description: "Core languages used across portfolio delivery.",
    items: [
      { name: "TypeScript", note: "Strict typing for maintainable application code" },
      { name: "JavaScript", note: "Runtime and ecosystem interoperability" },
      { name: "Python", note: "Routing services and data-oriented tooling" },
      { name: "HTML / CSS", note: "Semantic structure and token-driven styling" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend platform",
    description: "Application framework and interaction layer.",
    items: [
      { name: "Next.js", note: "App Router, SSR/SSG, and deployment on Vercel" },
      { name: "React", note: "Component composition and feature modules" },
      { name: "Angular", note: "Enterprise quoting dashboards and RBAC surfaces" },
      { name: "Vite", note: "Fast SPA/PWA delivery for ops products" },
      { name: "Capacitor", note: "Native shells for field-sales Android/iOS" },
      { name: "Tailwind CSS", note: "Utility styling mapped to design tokens" },
      { name: "Framer Motion", note: "Intentional motion with reduced-motion support" },
      { name: "PWA", note: "Installable product surfaces across HTL and consumer apps" },
    ],
  },
  {
    id: "data-maps",
    title: "Data, maps & backend",
    description: "Persistence, auth, and geospatial capabilities used in shipped work.",
    items: [
      { name: "Supabase", note: "Auth, Postgres, RLS, and realtime services" },
      { name: "Prisma / PostgreSQL", note: "Typed data access for brand commerce" },
      { name: "FastAPI", note: "Mexico routing service foundations" },
      { name: "Leaflet / OpenLayers", note: "Field monitoring and routing map UX" },
    ],
  },
  {
    id: "quality",
    title: "Quality & delivery",
    description: "Tooling that protects engineering standards.",
    items: [
      { name: "ESLint / Prettier", note: "Consistent style and static analysis" },
      { name: "pnpm", note: "Deterministic package management" },
      { name: "Husky / lint-staged", note: "Pre-commit quality gates" },
      { name: "Vercel Analytics", note: "Privacy-respecting usage signals" },
    ],
  },
  {
    id: "practices",
    title: "Engineering practices",
    description: "Cross-cutting capabilities beyond specific libraries.",
    items: [
      { name: "Design Systems", note: "Token hierarchy and reusable UI primitives" },
      { name: "Clean Architecture", note: "Feature isolation and clear boundaries" },
      { name: "Accessibility", note: "Keyboard, ARIA, and contrast-first UI" },
      { name: "i18n", note: "English and Spanish locale routing" },
    ],
  },
];

const es: TechGroup[] = [
  {
    id: "languages",
    title: "Lenguajes",
    description: "Lenguajes base usados en la entrega del portafolio.",
    items: [
      { name: "TypeScript", note: "Tipado estricto para código mantenible" },
      { name: "JavaScript", note: "Interoperabilidad de runtime y ecosistema" },
      { name: "Python", note: "Servicios de ruteo y tooling orientado a datos" },
      { name: "HTML / CSS", note: "Estructura semántica y estilos por tokens" },
    ],
  },
  {
    id: "frontend",
    title: "Plataforma frontend",
    description: "Framework de aplicación y capa de interacción.",
    items: [
      { name: "Next.js", note: "App Router, SSR/SSG y deploy en Vercel" },
      { name: "React", note: "Composición de componentes y módulos por feature" },
      { name: "Angular", note: "Dashboards de cotización empresarial y RBAC" },
      { name: "Vite", note: "Entrega rápida SPA/PWA para productos ops" },
      { name: "Capacitor", note: "Shells nativos para ventas de campo Android/iOS" },
      { name: "Tailwind CSS", note: "Utilidades mapeadas a design tokens" },
      { name: "Framer Motion", note: "Motion intencional con soporte reduced-motion" },
      { name: "PWA", note: "Superficies instalables en HTL y apps de consumidor" },
    ],
  },
  {
    id: "data-maps",
    title: "Datos, mapas y backend",
    description: "Persistencia, auth y capacidades geoespaciales del trabajo entregado.",
    items: [
      { name: "Supabase", note: "Auth, Postgres, RLS y servicios realtime" },
      { name: "Prisma / PostgreSQL", note: "Acceso tipado para comercio de marca" },
      { name: "FastAPI", note: "Fundaciones de servicio de ruteo México" },
      { name: "Leaflet / OpenLayers", note: "UX de mapa para monitoreo y ruteo" },
    ],
  },
  {
    id: "quality",
    title: "Calidad y entrega",
    description: "Tooling que protege los estándares de ingeniería.",
    items: [
      { name: "ESLint / Prettier", note: "Estilo consistente y análisis estático" },
      { name: "pnpm", note: "Gestión determinística de paquetes" },
      { name: "Husky / lint-staged", note: "Quality gates en pre-commit" },
      { name: "Vercel Analytics", note: "Señales de uso respetuosas de privacidad" },
    ],
  },
  {
    id: "practices",
    title: "Prácticas de ingeniería",
    description: "Capacidades transversales más allá de librerías específicas.",
    items: [
      { name: "Design Systems", note: "Jerarquía de tokens y primitives reutilizables" },
      { name: "Clean Architecture", note: "Aislamiento de features y límites claros" },
      { name: "Accesibilidad", note: "Teclado, ARIA y contraste primero" },
      { name: "i18n", note: "Routing de locales en inglés y español" },
    ],
  },
];

export function getTechnologyCatalog(locale: Locale) {
  return locale === "es" ? es : en;
}
