import type { Locale } from "@/i18n/routing";

export type ArchitectureContent = {
  layers: { name: string; description: string }[];
  modules: { name: string; description: string }[];
  routes: { path: string; purpose: string }[];
};

const en: ArchitectureContent = {
  layers: [
    {
      name: "Presentation",
      description: "App Router pages, feature UI, and design-system primitives.",
    },
    {
      name: "Application",
      description: "Feature modules owning local state, hooks, and use-cases.",
    },
    {
      name: "Domain / Content",
      description: "Typed portfolio content: projects, case studies, profile, registry.",
    },
    {
      name: "Infrastructure",
      description: "Theme, analytics, i18n, and deployment concerns.",
    },
  ],
  modules: [
    { name: "src/app/[locale]", description: "Locale-aware routes and metadata" },
    { name: "src/features/*", description: "Feature-isolated UI and behavior" },
    { name: "src/design-system", description: "Tokens and visual foundations" },
    { name: "src/content", description: "Locale-aware content sources of truth" },
    { name: "src/i18n", description: "Routing, navigation helpers, request config" },
  ],
  routes: [
    { path: "/", purpose: "Landing narrative / professional presence" },
    { path: "/about", purpose: "About + experience + skills" },
    {
      path: "/projects",
      purpose: "Work portfolio with product visuals and documented cases",
    },
    { path: "/projects/htl-operations", purpose: "HTL Operations case + live demo" },
    { path: "/projects/htl-smart-sales", purpose: "HTL Smart Sales case + live demo" },
    { path: "/projects/htl-quotates", purpose: "HTL Quotates commercial quoting case" },
    { path: "/projects/htl-route-service", purpose: "HTL Route Service platform case" },
    { path: "/projects/htl-stopwatch", purpose: "HTL StopWatch internal timing case" },
    { path: "/projects/qyntra-gym", purpose: "Qyntra Gym case + live demo" },
    { path: "/projects/capital-gang", purpose: "Capital Gang case + live demo" },
    { path: "/resume", purpose: "Resume viewer and PDF download" },
    { path: "/contact", purpose: "Contact form and professional links" },
    { path: "/lab", purpose: "Engineering Lab hub" },
    { path: "/lab/technologies", purpose: "Technology catalog" },
    { path: "/lab/docs", purpose: "Documentation browser" },
    { path: "/lab/github", purpose: "Public GitHub presence" },
    { path: "/lab/search", purpose: "Cross-portfolio search" },
    { path: "/lab/architecture", purpose: "Architecture explorer" },
    { path: "/lab/features", purpose: "Feature registry" },
    { path: "/lab/traceability", purpose: "Requirements traceability matrix" },
    { path: "/lab/analytics", purpose: "Observability and quality targets" },
  ],
};

const es: ArchitectureContent = {
  layers: [
    {
      name: "Presentación",
      description: "Páginas App Router, UI de features y primitives del design system.",
    },
    {
      name: "Aplicación",
      description: "Módulos de feature con estado local, hooks y casos de uso.",
    },
    {
      name: "Dominio / Contenido",
      description: "Contenido tipado: proyectos, casos, perfil y registro.",
    },
    {
      name: "Infraestructura",
      description: "Tema, analytics, i18n y concerns de deploy.",
    },
  ],
  modules: [
    { name: "src/app/[locale]", description: "Rutas y metadata conscientes del locale" },
    { name: "src/features/*", description: "UI y comportamiento aislados por feature" },
    { name: "src/design-system", description: "Tokens y fundamentos visuales" },
    { name: "src/content", description: "Fuentes de contenido por locale" },
    { name: "src/i18n", description: "Routing, helpers de navegación y request config" },
  ],
  routes: [
    { path: "/", purpose: "Landing narrativa / presencia profesional" },
    { path: "/about", purpose: "About + experiencia + skills" },
    {
      path: "/projects",
      purpose: "Portafolio de trabajo con visuales y casos documentados",
    },
    { path: "/projects/htl-operations", purpose: "Caso HTL Operations + demo en vivo" },
    { path: "/projects/htl-smart-sales", purpose: "Caso HTL Smart Sales + demo en vivo" },
    { path: "/projects/htl-quotates", purpose: "Caso HTL Quotates cotización comercial" },
    { path: "/projects/htl-route-service", purpose: "Caso HTL Route Service plataforma" },
    { path: "/projects/htl-stopwatch", purpose: "Caso HTL StopWatch timing interno" },
    { path: "/projects/qyntra-gym", purpose: "Caso Qyntra Gym + demo en vivo" },
    { path: "/projects/capital-gang", purpose: "Caso Capital Gang + demo en vivo" },
    { path: "/resume", purpose: "Visor de CV y descarga PDF" },
    { path: "/contact", purpose: "Formulario de contacto y links profesionales" },
    { path: "/lab", purpose: "Hub del Engineering Lab" },
    { path: "/lab/technologies", purpose: "Catálogo tecnológico" },
    { path: "/lab/docs", purpose: "Navegador de documentación" },
    { path: "/lab/github", purpose: "Presencia pública en GitHub" },
    { path: "/lab/search", purpose: "Búsqueda transversal del portafolio" },
    { path: "/lab/architecture", purpose: "Explorador de arquitectura" },
    { path: "/lab/features", purpose: "Registro de features" },
    { path: "/lab/traceability", purpose: "Matriz de trazabilidad de requisitos" },
    { path: "/lab/analytics", purpose: "Observabilidad y objetivos de calidad" },
  ],
};

export function getArchitectureContent(locale: Locale) {
  return locale === "es" ? es : en;
}
