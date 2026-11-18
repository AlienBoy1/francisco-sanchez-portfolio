import type { Locale } from "@/i18n/routing";
import type { Project } from "./types";
import { projectMediaPaths } from "./types";

function media(locale: Locale): Project["media"] {
  const paths = projectMediaPaths("htl-quotates");
  const es = locale === "es";
  const shot = (
    index: number,
    en: { alt: string; caption: string },
    esCopy: { alt: string; caption: string },
  ) => ({
    src: paths.gallery(index),
    alt: es ? esCopy.alt : en.alt,
    caption: es ? esCopy.caption : en.caption,
  });
  return {
    cover: paths.cover,
    coverAlt: es
      ? "Dashboard HTL Quotates — proveedores, cotizaciones y KPIs"
      : "HTL Quotates dashboard — providers, quotes, and KPIs",
    gallery: [
      shot(
        1,
        {
          alt: "HTL Quotates dashboard with providers and recent quotes",
          caption: "Dashboard · providers & recent quotes",
        },
        {
          alt: "Dashboard HTL Quotates con proveedores y cotizaciones recientes",
          caption: "Dashboard · proveedores y cotizaciones",
        },
      ),
      shot(
        2,
        {
          alt: "HTL Quotates quotes table on desktop",
          caption: "Quotes table · desktop density",
        },
        {
          alt: "Tabla de cotizaciones HTL Quotates en escritorio",
          caption: "Tabla de cotizaciones · escritorio",
        },
      ),
      shot(
        3,
        {
          alt: "HTL Quotates quotes workspace",
          caption: "Cotizaciones workspace",
        },
        {
          alt: "Espacio de trabajo de cotizaciones HTL Quotates",
          caption: "Espacio de cotizaciones",
        },
      ),
      shot(
        4,
        {
          alt: "HTL Quotates catalog panels for models and parts",
          caption: "Catalog · models & part numbers",
        },
        {
          alt: "Paneles de catálogo HTL Quotates para modelos y partes",
          caption: "Catálogo · modelos y números de parte",
        },
      ),
      shot(
        5,
        {
          alt: "HTL Quotates administration users panel",
          caption: "Admin · users and roles",
        },
        {
          alt: "Panel de administración de usuarios en HTL Quotates",
          caption: "Admin · usuarios y roles",
        },
      ),
      shot(
        6,
        {
          alt: "HTL Quotates preferences panel",
          caption: "Preferences · language and theme",
        },
        {
          alt: "Panel de preferencias de HTL Quotates",
          caption: "Preferencias · idioma y tema",
        },
      ),
      shot(
        7,
        {
          alt: "HTL Quotates mobile dashboard layout",
          caption: "Mobile dashboard layout",
        },
        {
          alt: "Layout móvil del dashboard HTL Quotates",
          caption: "Dashboard en móvil",
        },
      ),
      shot(
        8,
        {
          alt: "HTL Quotates product entry surface",
          caption: "Product entry surface",
        },
        {
          alt: "Superficie de entrada del producto HTL Quotates",
          caption: "Superficie de entrada",
        },
      ),
      shot(
        9,
        {
          alt: "HTL Quotates access panel login",
          caption: "Access panel · secure entry",
        },
        {
          alt: "Panel de acceso de HTL Quotates",
          caption: "Panel de acceso · entrada segura",
        },
      ),
      shot(
        10,
        {
          alt: "HTL Quotates wide desktop capture",
          caption: "Wide desktop capture",
        },
        {
          alt: "Captura amplia de escritorio de HTL Quotates",
          caption: "Captura amplia de escritorio",
        },
      ),
    ],
  };
}

const shared = {
  slug: "htl-quotates",
  name: "HTL Quotates",
  year: "2025",
  client: "HTL",
  featured: true as const,
  technologies: ["TypeScript", "Angular", "Express", "Supabase", "PWA", "SCSS", "RBAC"],
};

export const htlQuotatesEn: Project = {
  ...shared,
  tagline:
    "Bilingual quoting PWA for catalogs, partners, logistics, and commercial operations.",
  productType: "Commercial quoting platform",
  category: "Professional",
  status: "Production",
  role: "Software Engineer — Angular quoting platform, admin controls, catalogs, and bilingual UX",
  summary:
    "Installable quoting and commercial operations app: quote pipeline, catalogs, brands, partners, logistics modules, user permissions, and activity visibility—delivered as a bilingual PWA.",
  overview:
    "HTL Quotates gives commercial teams a structured workspace for quotes and supporting catalogs. Operators move through dashboard, quotes, catalog, preferences, and admin sections with clear navigation and role-aware access.",
  problem:
    "Commercial quoting needed a dedicated system for catalogs, partners, and quote lifecycle—without exposing pricing and partner data across scattered tools.",
  solution:
    "Build an Angular PWA with Express/Supabase backend services, bilingual UI, dashboard navigation for quotes and catalogs, and admin modules for users, permissions, brands, discounts, and partners.",
  approach:
    "Feature-oriented Angular modules (auth, dashboard pages), shared core services for session/theme/preferences, and installable PWA packaging for internal commercial use.",
  architectureNotes:
    "Angular frontend with guarded dashboard routes; Express + Supabase data plane; bilingual i18n model; admin surfaces for users/permissions/activity. Portfolio copy and media exclude real quote values, partner prices, and customer lists.",
  objectives: [
    "Centralize the commercial quote lifecycle in one installable app",
    "Support catalogs and partner/admin operations with clear RBAC",
    "Deliver bilingual UX for day-to-day commercial work",
  ],
  features: [
    "Quotes workspace (cotizaciones)",
    "Catalog management surfaces",
    "Admin: users, permissions, activity logs",
    "Brands, discounts, partners, and solutions modules",
    "Preferences and account controls",
    "Bilingual EN/ES interface",
    "Installable PWA",
  ],
  challenges: [
    "Keeping commercial modules coherent under one dashboard IA",
    "Permissions that protect sensitive commercial data by default",
    "Bilingual labels and flows that stay consistent across admin and operator views",
  ],
  results: [
    "Production-shaped quoting platform for HTL commercial operations",
    "Clear separation between quotes, catalogs, and admin governance",
    "PWA delivery for installable internal use",
  ],
  lessons: [
    "Quote systems need catalog and partner context beside the quote form itself",
    "RBAC and activity visibility are product features, not afterthoughts",
    "Public cases must prove architecture without leaking commercial numbers",
  ],
  metrics: [
    { label: "Stack", value: "Angular + Supabase" },
    { label: "UX", value: "Bilingual PWA" },
    { label: "Domain", value: "Commercial ops" },
  ],
  media: media("en"),
  documentation: [
    {
      id: "why",
      title: "Why it exists",
      paragraphs: [
        "HTL Quotates exists to run commercial quoting with the surrounding catalogs and governance—not as a spreadsheet clone, but as an installable operations product.",
        "It complements HTL’s broader operations stack by specializing in the quote and catalog surface area.",
      ],
    },
    {
      id: "scope",
      title: "In scope",
      paragraphs: [
        "Quote workflow, catalogs, admin users/permissions, brands/discounts/partners, preferences, bilingual UI, PWA installability.",
        "Out of public view: real quote figures, partner commercial terms, customer PII, and internal planning documents.",
      ],
    },
    {
      id: "architecture",
      title: "Architecture notes",
      paragraphs: [
        "Angular feature modules with auth guards; dashboard sections for home, quotes, catalog, admin, and preferences; Express/Supabase services for persistence and auth.",
        "Shared core services cover theme, toast, session transitions, and user preferences.",
      ],
    },
  ],
};

export const htlQuotatesEs: Project = {
  ...shared,
  tagline:
    "PWA bilingüe de cotizaciones para catálogos, socios, logística y operaciones comerciales.",
  productType: "Plataforma de cotización comercial",
  category: "Profesional",
  status: "Producción",
  role: "Ingeniero de Software — plataforma Angular de cotizaciones, admin, catálogos y UX bilingüe",
  summary:
    "App instalable de cotizaciones y operaciones comerciales: pipeline de cotizaciones, catálogos, marcas, socios, módulos logísticos, permisos de usuario y visibilidad de actividad—entregada como PWA bilingüe.",
  overview:
    "HTL Quotates da al equipo comercial un workspace estructurado para cotizaciones y catálogos de soporte. Los operadores navegan dashboard, cotizaciones, catálogo, preferencias y admin con acceso por rol.",
  problem:
    "La cotización comercial necesitaba un sistema dedicado para catálogos, socios y ciclo de vida de cotizaciones—sin exponer precios y datos de socios en herramientas dispersas.",
  solution:
    "Construir una PWA Angular con servicios Express/Supabase, UI bilingüe, navegación de dashboard para cotizaciones y catálogos, y módulos admin de usuarios, permisos, marcas, descuentos y socios.",
  approach:
    "Módulos Angular feature-oriented (auth, páginas de dashboard), servicios core compartidos para sesión/tema/preferencias y empaquetado PWA para uso comercial interno.",
  architectureNotes:
    "Frontend Angular con rutas dashboard protegidas; plano de datos Express + Supabase; modelo i18n bilingüe; superficies admin. El copy y media del portafolio excluyen montos reales, precios de socios y listados de clientes.",
  objectives: [
    "Centralizar el ciclo de vida de cotizaciones en una app instalable",
    "Soportar catálogos y operaciones admin/socios con RBAC claro",
    "Entregar UX bilingüe para el trabajo comercial diario",
  ],
  features: [
    "Workspace de cotizaciones",
    "Superficies de gestión de catálogo",
    "Admin: usuarios, permisos, logs de actividad",
    "Módulos de marcas, descuentos, socios y soluciones",
    "Preferencias y controles de cuenta",
    "Interfaz bilingüe EN/ES",
    "PWA instalable",
  ],
  challenges: [
    "Mantener módulos comerciales coherentes bajo una sola IA de dashboard",
    "Permisos que protejan datos comerciales sensibles por defecto",
    "Flujos bilingües consistentes entre vistas de operador y admin",
  ],
  results: [
    "Plataforma de cotización con forma de producción para operaciones comerciales HTL",
    "Separación clara entre cotizaciones, catálogos y gobernanza admin",
    "Entrega PWA para uso interno instalable",
  ],
  lessons: [
    "Los sistemas de cotización necesitan contexto de catálogo y socios junto al formulario",
    "RBAC y visibilidad de actividad son features de producto",
    "Los casos públicos deben probar arquitectura sin filtrar números comerciales",
  ],
  metrics: [
    { label: "Stack", value: "Angular + Supabase" },
    { label: "UX", value: "PWA bilingüe" },
    { label: "Dominio", value: "Ops comerciales" },
  ],
  media: media("es"),
  documentation: [
    {
      id: "why",
      title: "Por qué existe",
      paragraphs: [
        "HTL Quotates existe para operar cotización comercial con catálogos y gobernanza alrededor—no como clon de hojas de cálculo, sino como producto de operaciones instalable.",
        "Complementa el stack operativo HTL especializándose en la superficie de cotizaciones y catálogo.",
      ],
    },
    {
      id: "scope",
      title: "Alcance",
      paragraphs: [
        "Flujo de cotizaciones, catálogos, usuarios/permisos admin, marcas/descuentos/socios, preferencias, UI bilingüe, PWA.",
        "Fuera de vista pública: montos reales, términos comerciales de socios, PII de clientes y documentos internos de planeación.",
      ],
    },
    {
      id: "architecture",
      title: "Notas de arquitectura",
      paragraphs: [
        "Módulos Angular con guards de auth; secciones dashboard para home, cotizaciones, catálogo, admin y preferencias; servicios Express/Supabase.",
        "Servicios core compartidos cubren tema, toast, transiciones de sesión y preferencias de usuario.",
      ],
    },
  ],
};
