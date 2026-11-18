import type { Locale } from "@/i18n/routing";

export type AboutContent = {
  headline: string;
  introduction: string;
  summary: string;
  philosophy: string;
  expertise: string[];
  values: string[];
};

export type SkillsContent = {
  groups: { title: string; items: string[] }[];
};

export type ExperienceContent = {
  roles: {
    id: string;
    title: string;
    organization: string;
    period: string;
    summary: string;
  }[];
};

const aboutByLocale: Record<Locale, AboutContent> = {
  en: {
    headline: "Lead Software Engineer · Full Stack Developer · Product Builder",
    introduction:
      "Production web and mobile products end-to-end—enterprise operations PWAs, field-sales platforms, commercial quoting, gym OS, and brand commerce—with architecture, UX, and documentation as first-class deliverables.",
    summary:
      "Francisco Javier Sánchez Mariscal is a software engineer based in Guadalajara, Mexico. Recent work spans HTL Operations, HTL Smart Sales, HTL Quotates, HTL Route Service, HTL StopWatch, Qyntra Gym, and Capital Gang.",
    philosophy:
      "Engineering excellence shows through process—clear architecture, accessible interfaces, measurable performance, and documentation that survives the handoff.",
    expertise: [
      "Full-stack product delivery (React, Next.js, Angular, Vite, Supabase, Prisma)",
      "Installable PWAs and Capacitor field/ops products",
      "Routing, maps, and Mexico-aware operational systems",
      "Design systems, bilingual UX, and case-study documentation",
    ],
    values: [
      "Evidence over claims",
      "Accessibility by default",
      "Performance as a feature",
      "Maintainability over shortcuts",
    ],
  },
  es: {
    headline: "Lead Software Engineer · Full Stack · Constructor de Producto",
    introduction:
      "Productos web y móviles de producción de punta a punta—PWAs de operaciones, ventas de campo, cotización comercial, OS de gimnasio y comercio de marca—con arquitectura, UX y documentación como entregables de primer nivel.",
    summary:
      "Francisco Javier Sánchez Mariscal es ingeniero de software en Guadalajara, México. Trabajo reciente: HTL Operations, HTL Smart Sales, HTL Quotates, HTL Route Service, HTL StopWatch, Qyntra Gym y Capital Gang.",
    philosophy:
      "La excelencia de ingeniería se demuestra en el proceso: arquitectura clara, interfaces accesibles, rendimiento medible y documentación que sobrevive al handoff.",
    expertise: [
      "Entrega full-stack de producto (React, Next.js, Angular, Vite, Supabase, Prisma)",
      "PWAs instalables y productos de campo/ops con Capacitor",
      "Ruteo, mapas y sistemas operativos con contexto México",
      "Design systems, UX bilingüe y documentación de casos",
    ],
    values: [
      "Evidencia por encima de afirmaciones",
      "Accesibilidad por defecto",
      "Rendimiento como feature",
      "Mantenibilidad sobre atajos",
    ],
  },
};

const skillsByLocale: Record<Locale, SkillsContent> = {
  en: {
    groups: [
      {
        title: "Languages",
        items: ["TypeScript", "JavaScript", "Python", "HTML", "CSS", "SQL"],
      },
      {
        title: "Frontend",
        items: [
          "React",
          "Next.js",
          "Angular",
          "Vite",
          "Tailwind CSS",
          "Framer Motion",
          "PWA",
          "Capacitor",
        ],
      },
      {
        title: "Backend & data",
        items: ["Supabase", "PostgreSQL", "Prisma", "Express", "FastAPI", "Auth/RLS"],
      },
      {
        title: "Maps & ops",
        items: ["Leaflet", "OpenLayers", "WebSocket", "PDF export", "RBAC"],
      },
      {
        title: "Engineering",
        items: [
          "Clean Architecture",
          "Design Systems",
          "Accessibility",
          "SEO",
          "CI-ready delivery",
        ],
      },
      {
        title: "Tooling",
        items: ["pnpm", "ESLint", "Prettier", "Git", "Vercel", "Vitest"],
      },
    ],
  },
  es: {
    groups: [
      {
        title: "Lenguajes",
        items: ["TypeScript", "JavaScript", "Python", "HTML", "CSS", "SQL"],
      },
      {
        title: "Frontend",
        items: [
          "React",
          "Next.js",
          "Angular",
          "Vite",
          "Tailwind CSS",
          "Framer Motion",
          "PWA",
          "Capacitor",
        ],
      },
      {
        title: "Backend y datos",
        items: ["Supabase", "PostgreSQL", "Prisma", "Express", "FastAPI", "Auth/RLS"],
      },
      {
        title: "Mapas y ops",
        items: ["Leaflet", "OpenLayers", "WebSocket", "Export PDF", "RBAC"],
      },
      {
        title: "Ingeniería",
        items: [
          "Clean Architecture",
          "Design Systems",
          "Accesibilidad",
          "SEO",
          "Entrega lista para CI",
        ],
      },
      {
        title: "Tooling",
        items: ["pnpm", "ESLint", "Prettier", "Git", "Vercel", "Vitest"],
      },
    ],
  },
};

const experienceByLocale: Record<Locale, ExperienceContent> = {
  en: {
    roles: [
      {
        id: "htl-suite",
        title: "Software Engineer",
        organization: "HTL Product Suite",
        period: "2025 — Present",
        summary:
          "Enterprise and field products for HTL: Operations (SOP/SLA PWA), Smart Sales (field trajectories + monitoring), Quotates (commercial quoting), Route Service (Mexico routing), and StopWatch (operational timing/PDF).",
      },
      {
        id: "qyntra-gym",
        title: "Software Engineer",
        organization: "Qyntra Gym",
        period: "2024 — Present",
        summary:
          "Full-stack gym OS PWA for members and staff: workouts, community, challenges, classes, and admin memberships/attendance—React/Vite, Express, Supabase, live on Vercel.",
      },
      {
        id: "capital-gang",
        title: "Software Engineer",
        organization: "Capital Gang",
        period: "2026 — Present",
        summary:
          "Brand commerce platform (clothing · tattoo · culture): catalogs, gallery, cart, role-based admin, and AI Studio imagery—Next.js, Prisma, PostgreSQL, PWA.",
      },
      {
        id: "portfolio-platform",
        title: "Software Engineer",
        organization: "Francisco Sánchez Portfolio",
        period: "2026 — Present",
        summary:
          "Engineering portfolio platform with bilingual IA, product-style case studies, design tokens, and documentation-first delivery.",
      },
    ],
  },
  es: {
    roles: [
      {
        id: "htl-suite",
        title: "Ingeniero de Software",
        organization: "Suite de productos HTL",
        period: "2025 — Presente",
        summary:
          "Productos empresariales y de campo para HTL: Operations (PWA SOP/SLA), Smart Sales (trayectorias + monitoreo), Quotates (cotización comercial), Route Service (ruteo México) y StopWatch (timing operativo/PDF).",
      },
      {
        id: "qyntra-gym",
        title: "Ingeniero de Software",
        organization: "Qyntra Gym",
        period: "2024 — Presente",
        summary:
          "PWA full-stack OS de gimnasio para miembros y staff: workouts, comunidad, retos, clases y admin de membresías/asistencia—React/Vite, Express, Supabase, en vivo en Vercel.",
      },
      {
        id: "capital-gang",
        title: "Ingeniero de Software",
        organization: "Capital Gang",
        period: "2026 — Presente",
        summary:
          "Plataforma de marca (clothing · tattoo · culture): catálogos, galería, carrito, admin por roles y AI Studio—Next.js, Prisma, PostgreSQL, PWA.",
      },
      {
        id: "portfolio-platform",
        title: "Ingeniero de Software",
        organization: "Portafolio Francisco Sánchez",
        period: "2026 — Presente",
        summary:
          "Plataforma de portafolio de ingeniería con IA bilingüe, casos tipo producto, design tokens y entrega documentation-first.",
      },
    ],
  },
};

export function getAboutContent(locale: Locale) {
  return aboutByLocale[locale];
}

export function getSkillsContent(locale: Locale) {
  return skillsByLocale[locale];
}

export function getExperienceContent(locale: Locale) {
  return experienceByLocale[locale];
}
