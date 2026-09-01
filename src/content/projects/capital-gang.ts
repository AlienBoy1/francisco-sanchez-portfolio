import type { Locale } from "@/i18n/routing";
import type { Project } from "./types";
import { projectMediaPaths } from "./types";

function media(locale: Locale): Project["media"] {
  const paths = projectMediaPaths("capital-gang");
  const es = locale === "es";
  return {
    cover: paths.cover,
    coverAlt: es
      ? "Capital Gang — hero urbano Clothing · Tattoo · Culture"
      : "Capital Gang — urban hero Clothing · Tattoo · Culture",
    gallery: [
      {
        src: paths.gallery(1),
        alt: es ? "Lookbook streetwear Capital Gang" : "Capital Gang streetwear lookbook",
        caption: es ? "Lookbook — streetwear" : "Lookbook — streetwear",
      },
      {
        src: paths.gallery(2),
        alt: es ? "Lookbook mural y cultura urbana" : "Mural lookbook and urban culture",
        caption: es ? "Lookbook — mural / cultura" : "Lookbook — mural / culture",
      },
      {
        src: paths.gallery(3),
        alt: es ? "Logo principal Capital Gang" : "Capital Gang primary logo",
        caption: es ? "Identidad de marca" : "Brand identity",
      },
      {
        src: paths.gallery(4),
        alt: es ? "Isotipo Capital Gang" : "Capital Gang isotipo",
        caption: es ? "Isotipo" : "Isotipo",
      },
    ],
  };
}

const shared = {
  slug: "capital-gang",
  name: "Capital Gang",
  year: "2026",
  client: "Capital Gang",
  featured: true as const,
  demoUrl: "https://capital-gang-clothing.vercel.app/",
  technologies: [
    "TypeScript",
    "Next.js",
    "React",
    "Prisma",
    "PostgreSQL",
    "Tailwind CSS",
    "Framer Motion",
    "PWA",
    "Zustand",
  ],
};

export const capitalGangEn: Project = {
  ...shared,
  tagline:
    "Clothing · Tattoo · Culture—streetwear, studio supplies, and ink portfolio in one brand platform.",
  productType: "Brand commerce + culture platform",
  category: "Professional",
  status: "Live",
  role: "Software Engineer — Next.js App Router platform: catalog, gallery, cart, admin, and AI Studio imagery",
  summary:
    "Capital Gang is a multimodal brand site: urban clothing store, tattoo-supply shop, and tattoo gallery—with role-based admin, cart/WhatsApp-oriented checkout, and an AI Studio for catalog imagery. Live on Vercel.",
  overview:
    "Born from street, ink, and community. The public site presents three worlds (tienda, tattoo shop, galería) under one identity, while admins manage catalogs, gallery albums, orders, users, and AI-assisted product visuals.",
  problem:
    "A streetwear + tattoo brand needed one digital home for clothing, studio supplies, and portfolio culture—plus admin tooling that could keep catalogs and orders moving without a fragmented stack of tools.",
  solution:
    "Built a Next.js 15 / React 19 platform with Prisma/PostgreSQL, feature modules (catalog, tattoo-shop, gallery, orders, cart, AI Studio), Tailwind/Framer Motion surfaces, and next-pwa installability. Checkout is oriented to WhatsApp-style order flow in MXN.",
  approach:
    "Clean Architecture feature folders (domain / application / infrastructure / presentation) keep commerce, gallery, and identity separable while sharing design language and auth.",
  architectureNotes:
    "App Router pages for public and dashboard routes; Zustand for cart/UI; TanStack Query for server state; jose/bcryptjs for sessions; sharp + background-removal for AI Studio processing; optional Vercel Blob for remote images.",
  objectives: [
    "Unify clothing, tattoo supplies, and gallery under one brand experience",
    "Enable role-based admin for catalogs, gallery, and orders",
    "Support modern imagery workflows for catalog publishing",
  ],
  features: [
    "Full-bleed landing with lookbook lightbox and brand worlds",
    "Clothing store and tattoo-supply catalogs",
    "Tattoo portfolio gallery albums",
    "Cart + WhatsApp-oriented checkout",
    "Admin dashboard: products, gallery, orders, users, settings",
    "AI Studio for background removal and catalog mockups",
    "Installable PWA",
  ],
  challenges: [
    "Keeping three commercial worlds coherent without feeling like three separate sites",
    "Admin permissions and first-login access flows that stay clear for operators",
    "Heavy lookbook imagery balanced with performance on Vercel",
  ],
  results: [
    "Live brand platform at capital-gang-clothing.vercel.app",
    "Distinct visual identity with hero and lookbook assets ready for portfolio storytelling",
    "Feature-oriented architecture that can grow catalogs and gallery without rewriting the shell",
  ],
  lessons: [
    "Brand platforms need one composition first—worlds second—so the site still feels like a single product",
    "Admin and public surfaces should share tokens while optimizing for different jobs",
    "Admin and public surfaces should share brand tokens while optimizing for different jobs",
  ],
  metrics: [
    { label: "Status", value: "Live" },
    { label: "Stack", value: "Next.js + Prisma" },
    { label: "Worlds", value: "3" },
  ],
  media: media("en"),
  documentation: [
    {
      id: "product",
      title: "Product overview",
      paragraphs: [
        "Capital Gang unites moda urbana and professional tattoo culture: shop clothing, browse studio supplies, and explore ink portfolios under Clothing · Tattoo · Culture.",
        "Live product: https://capital-gang-clothing.vercel.app/ — clothing, tattoo shop, and gallery under one brand platform.",
      ],
    },
    {
      id: "surfaces",
      title: "Public & admin surfaces",
      paragraphs: [
        "Public: home, tienda, tattoo-shop, galería, nosotros, contacto, carrito.",
        "Admin: dashboard stats, product CRUDs, gallery management, orders board, users, settings, AI Studio.",
      ],
    },
  ],
};

export const capitalGangEs: Project = {
  ...shared,
  tagline:
    "Clothing · Tattoo · Culture—streetwear, insumos de estudio y portafolio de tinta en una sola plataforma.",
  productType: "Plataforma de marca + comercio",
  category: "Profesional",
  status: "En vivo",
  role: "Ingeniero de Software — plataforma Next.js App Router: catálogo, galería, carrito, admin y AI Studio",
  summary:
    "Capital Gang es un sitio de marca multimodal: tienda de ropa urbana, tattoo shop de insumos y galería de tatuajes—con admin por roles, carrito/checkout orientado a WhatsApp y AI Studio para imagery de catálogo. En vivo en Vercel.",
  overview:
    "Nacido del asfalto. El sitio público presenta tres mundos (tienda, tattoo shop, galería) bajo una identidad; el admin gestiona catálogos, álbumes, órdenes, usuarios e imagery asistido por AI.",
  problem:
    "Una marca streetwear + tattoo necesitaba un hogar digital para ropa, insumos de estudio y cultura de portafolio—más tooling admin para catálogos y órdenes sin un stack fragmentado.",
  solution:
    "Plataforma Next.js 15 / React 19 con Prisma/PostgreSQL, módulos feature (catalog, tattoo-shop, gallery, orders, cart, AI Studio), Tailwind/Framer Motion y next-pwa. Checkout orientado a flujo WhatsApp en MXN.",
  approach:
    "Carpetas Clean Architecture por feature (domain / application / infrastructure / presentation) mantienen comercio, galería e identidad separables con el mismo lenguaje visual.",
  architectureNotes:
    "App Router para rutas públicas y dashboard; Zustand para carrito/UI; TanStack Query; jose/bcryptjs para sesiones; sharp + background-removal en AI Studio; Vercel Blob opcional para imágenes remotas.",
  objectives: [
    "Unificar ropa, insumos tattoo y galería en una experiencia de marca",
    "Habilitar admin por roles para catálogos, galería y órdenes",
    "Soportar workflows modernos de imagery para publicar catálogo",
  ],
  features: [
    "Landing full-bleed con lookbook lightbox y mundos de marca",
    "Catálogos de ropa e insumos de tattoo",
    "Galería de portafolio de tatuajes",
    "Carrito + checkout orientado a WhatsApp",
    "Dashboard admin: productos, galería, órdenes, usuarios, settings",
    "AI Studio para quitar fondos y mockups de catálogo",
    "PWA instalable",
  ],
  challenges: [
    "Mantener tres mundos comerciales coherentes sin sentir tres sitios distintos",
    "Permisos admin y flujos de acceso de primer login claros para operadores",
    "Lookbook pesado equilibrado con rendimiento en Vercel",
  ],
  results: [
    "Plataforma en vivo en capital-gang-clothing.vercel.app",
    "Identidad visual distinta con hero y lookbook listos para storytelling de portafolio",
    "Arquitectura feature-oriented que puede crecer catálogos y galería sin reescribir el shell",
  ],
  lessons: [
    "Las plataformas de marca necesitan una composición primero—mundos después—para seguir leyéndose como un solo producto",
    "Admin y público deben compartir tokens pero optimizar trabajos distintos",
    "Admin y publico deben compartir tokens de marca optimizando trabajos distintos",
  ],
  metrics: [
    { label: "Estado", value: "En vivo" },
    { label: "Stack", value: "Next.js + Prisma" },
    { label: "Mundos", value: "3" },
  ],
  media: media("es"),
  documentation: [
    {
      id: "product",
      title: "Resumen de producto",
      paragraphs: [
        "Capital Gang une moda urbana y cultura de tatuaje profesional: tienda, insumos de estudio y portafolio de tinta bajo Clothing · Tattoo · Culture.",
        "Producto en vivo: https://capital-gang-clothing.vercel.app/ — ropa, tattoo shop y galeria bajo una sola plataforma de marca.",
      ],
    },
    {
      id: "surfaces",
      title: "Superficies públicas y admin",
      paragraphs: [
        "Público: home, tienda, tattoo-shop, galería, nosotros, contacto, carrito.",
        "Admin: stats, CRUD de productos, galería, órdenes, usuarios, settings, AI Studio.",
      ],
    },
  ],
};
