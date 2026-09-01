import type { Locale } from "@/i18n/routing";

export type CaseStudy = {
  slug: string;
  id: string;
  title: string;
  overview: string;
  problem: string;
  objectives: string[];
  approach: string;
  lessons: string[];
  relatedProjectSlug: string;
};

const en: CaseStudy[] = [
  {
    slug: "qyntra-gym",
    id: "CS-7000",
    title: "Qyntra Gym",
    overview:
      "Installable gym OS PWA for members and staff—workouts, community, challenges, classes, and admin memberships—live as Qyntra Gym.",
    problem:
      "Gyms needed one digital surface for member training/community and staff operations without shipping separate native apps per platform.",
    objectives: [
      "Ship an installable member + admin gym experience",
      "Unify workouts, community, and progress",
      "Support memberships, classes, and attendance for staff",
    ],
    approach:
      "React/Vite PWA + Express on Vercel with Supabase Auth/DB and product-first landing photography.",
    lessons: [
      "Community and training must share one installable surface",
      "PWA installability is a product feature",
    ],
    relatedProjectSlug: "qyntra-gym",
  },
  {
    slug: "tunnel-del-tiempo",
    id: "CS-7001",
    title: "Tunnel del Tiempo",
    overview:
      "An interactive platform for preserving and presenting historical and cultural information.",
    problem:
      "Dense cultural content needed structured navigation and an engaging digital experience beyond static pages.",
    objectives: [
      "Organize historical content with clear information architecture",
      "Provide interactive browsing",
      "Keep performance strong under rich media",
    ],
    approach:
      "Content-driven pages, progressive disclosure, and modern frontend practices for maintainable cultural storytelling.",
    lessons: [
      "Information architecture is a product feature",
      "Cognitive load management matters as much as visual design",
    ],
    relatedProjectSlug: "tunnel-del-tiempo",
  },
  {
    slug: "htl-website",
    id: "CS-7002",
    title: "HTL Website",
    overview:
      "Corporate web platform strengthening digital presence with modern UX and maintainable architecture.",
    problem:
      "Legacy digital constraints limited scalability, UX quality, and long-term evolution of corporate communication.",
    objectives: [
      "Modernize public digital presence",
      "Improve responsiveness and performance",
      "Enable future content and product growth",
    ],
    approach:
      "Responsive marketing surfaces, performance-oriented frontend, and stakeholder-aligned delivery without disrupting operations.",
    lessons: [
      "Marketing goals and engineering quality bars can coexist with clear contracts",
      "Maintainability is a business requirement, not only a technical preference",
    ],
    relatedProjectSlug: "htl-website",
  },
  {
    slug: "nexora",
    id: "CS-7003",
    title: "NEXORA",
    overview:
      "An engineering-driven technology initiative where process, standards, and documentation are strategic assets.",
    problem:
      "Scaling products and teams often erodes quality, knowledge retention, and maintainability.",
    objectives: [
      "Encode quality into organizational processes",
      "Treat documentation as a first-class asset",
      "Build reusable engineering standards",
    ],
    approach:
      "Governance-led architecture, documentation-first delivery, and platform thinking applied at organization level.",
    lessons: [
      "Standards only work when they reduce friction",
      "Knowledge systems must scale with the team, not after it",
    ],
    relatedProjectSlug: "nexora",
  },
  {
    slug: "htl-operations",
    id: "CS-7004",
    title: "HTL Operations",
    overview:
      "Enterprise PWA that unifies internal SOP workflows under business-hours SLA monitoring, assignment inbox, notifications, quality views, and admin tooling on Supabase.",
    problem:
      "Operational work was fragmented without homogeneous SLA traffic lights, a single assignment inbox, reliable assignee notifications, or supervisor/quality panels independent of spreadsheets.",
    objectives: [
      "Unify SOP execution under one authenticated operations surface",
      "Measure compliance with business-hours SLA traffic lights",
      "Centralize assignments and notify assignees in-app and via Web Push",
    ],
    approach:
      "Modular Vite SPA + Supabase BaaS with feature-oriented services, lazy SOP routes, additive SQL, and iterative objective-driven delivery.",
    lessons: [
      "Operational products need a single assignment surface more than more SOP screens",
      "Business-hours SLA semantics are a product feature, not a cosmetic badge",
    ],
    relatedProjectSlug: "htl-operations",
  },
  {
    slug: "capital-gang",
    id: "CS-7005",
    title: "Capital Gang",
    overview:
      "Brand platform for Clothing · Tattoo · Culture—store, tattoo supplies, gallery, admin, and AI Studio imagery.",
    problem:
      "A streetwear + tattoo brand needed one digital home for commerce worlds plus admin tooling without a fragmented stack.",
    objectives: [
      "Unify clothing, tattoo shop, and gallery under one brand",
      "Enable role-based admin for catalogs and orders",
      "Support modern catalog imagery workflows",
    ],
    approach:
      "Next.js App Router + Prisma/PostgreSQL with feature Clean Architecture modules and PWA installability.",
    lessons: [
      "Brand platforms need one composition first, worlds second",
      "Brand platforms need one composition first, worlds second",
    ],
    relatedProjectSlug: "capital-gang",
  },
];

const es: CaseStudy[] = [
  {
    slug: "qyntra-gym",
    id: "CS-7000",
    title: "Qyntra Gym",
    overview:
      "PWA OS de gimnasio instalable para miembros y staff—workouts, comunidad, retos, clases y admin de membresías—en vivo como Qyntra Gym.",
    problem:
      "Los gimnasios necesitaban una superficie digital para entrenamiento/comunidad y operación de staff sin apps nativas por plataforma.",
    objectives: [
      "Entregar experiencia instalable miembros + admin",
      "Unificar workouts, comunidad y progreso",
      "Soportar membresías, clases y asistencia para staff",
    ],
    approach:
      "PWA React/Vite + Express en Vercel con Auth/DB Supabase y landing product-first.",
    lessons: [
      "Comunidad y entrenamiento deben compartir una superficie instalable",
      "La instalabilidad PWA es una feature de producto",
    ],
    relatedProjectSlug: "qyntra-gym",
  },
  {
    slug: "tunnel-del-tiempo",
    id: "CS-7001",
    title: "Tunnel del Tiempo",
    overview:
      "Plataforma interactiva para preservar y presentar información histórica y cultural.",
    problem:
      "El contenido cultural denso necesitaba navegación estructurada y una experiencia digital atractiva más allá de páginas estáticas.",
    objectives: [
      "Organizar contenido histórico con IA clara",
      "Ofrecer exploración interactiva",
      "Mantener rendimiento con medios enriquecidos",
    ],
    approach:
      "Páginas content-driven, divulgación progresiva y prácticas frontend modernas para storytelling cultural mantenible.",
    lessons: [
      "La arquitectura de información es una feature de producto",
      "Gestionar la carga cognitiva importa tanto como el diseño visual",
    ],
    relatedProjectSlug: "tunnel-del-tiempo",
  },
  {
    slug: "htl-website",
    id: "CS-7002",
    title: "HTL Website",
    overview:
      "Plataforma web corporativa que fortalece la presencia digital con UX moderna y arquitectura mantenible.",
    problem:
      "Restricciones digitales legacy limitaban escalabilidad, calidad UX y evolución de la comunicación corporativa.",
    objectives: [
      "Modernizar la presencia digital pública",
      "Mejorar responsividad y rendimiento",
      "Habilitar crecimiento futuro de contenido y producto",
    ],
    approach:
      "Superficies de marketing responsivas, frontend orientado a rendimiento y entrega alineada con stakeholders.",
    lessons: [
      "Marketing e ingeniería pueden coexistir con contratos claros",
      "La mantenibilidad es un requisito de negocio, no solo preferencia técnica",
    ],
    relatedProjectSlug: "htl-website",
  },
  {
    slug: "nexora",
    id: "CS-7003",
    title: "NEXORA",
    overview:
      "Iniciativa tecnológica impulsada por ingeniería donde procesos, estándares y documentación son activos estratégicos.",
    problem:
      "Escalar productos y equipos suele erosionar calidad, retención de conocimiento y mantenibilidad.",
    objectives: [
      "Codificar calidad en procesos organizacionales",
      "Tratar la documentación como activo de primer nivel",
      "Construir estándares de ingeniería reutilizables",
    ],
    approach:
      "Arquitectura guiada por gobernanza, entrega documentation-first y pensamiento de plataforma a nivel organizacional.",
    lessons: [
      "Los estándares solo funcionan cuando reducen fricción",
      "Los sistemas de conocimiento deben escalar con el equipo, no después",
    ],
    relatedProjectSlug: "nexora",
  },
  {
    slug: "htl-operations",
    id: "CS-7004",
    title: "HTL Operations",
    overview:
      "PWA empresarial que unifica flujos SOP internos bajo monitoreo SLA en tiempo hábil, bandeja de asignaciones, notificaciones, vistas de calidad y tooling admin sobre Supabase.",
    problem:
      "El trabajo operativo estaba fragmentado sin semáforo SLA homogéneo, buzón único de asignaciones, notificaciones confiables ni paneles de supervisión/calidad independientes de hojas de cálculo.",
    objectives: [
      "Unificar la ejecución de SOP en una sola superficie autenticada",
      "Medir cumplimiento con semáforos SLA en tiempo hábil",
      "Centralizar asignaciones y notificar responsables in-app y vía Web Push",
    ],
    approach:
      "SPA modular Vite + Supabase BaaS con servicios feature-oriented, rutas SOP lazy, SQL aditivo y entrega iterativa por objetivos.",
    lessons: [
      "Los productos operativos necesitan una sola superficie de asignación más que más pantallas SOP",
      "La semántica SLA en tiempo hábil es feature de producto, no un badge cosmético",
    ],
    relatedProjectSlug: "htl-operations",
  },
  {
    slug: "capital-gang",
    id: "CS-7005",
    title: "Capital Gang",
    overview:
      "Plataforma de marca Clothing · Tattoo · Culture—tienda, insumos tattoo, galería, admin y AI Studio.",
    problem:
      "Una marca streetwear + tattoo necesitaba un hogar digital para mundos comerciales más tooling admin sin stack fragmentado.",
    objectives: [
      "Unificar ropa, tattoo shop y galería bajo una marca",
      "Habilitar admin por roles para catálogos y órdenes",
      "Soportar workflows modernos de imagery de catálogo",
    ],
    approach:
      "Next.js App Router + Prisma/PostgreSQL con módulos Clean Architecture y PWA.",
    lessons: [
      "Las plataformas de marca necesitan una composición primero, mundos después",
      "Las plataformas de marca necesitan una composicion primero, mundos despues",
    ],
    relatedProjectSlug: "capital-gang",
  },
];

const byLocale: Record<Locale, CaseStudy[]> = { en, es };

export function getCaseStudies(locale: Locale) {
  return byLocale[locale];
}

export function getCaseStudyBySlug(locale: Locale, slug: string) {
  return byLocale[locale].find((item) => item.slug === slug);
}

export function getAllCaseStudySlugs() {
  return en.map((item) => item.slug);
}
