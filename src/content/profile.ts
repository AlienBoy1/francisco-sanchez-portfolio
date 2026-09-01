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
      "I build production web products end-to-end—PWAs, operations platforms, and brand experiences—with architecture, UX, and documentation treated as first-class deliverables.",
    summary:
      "Francisco Javier Sánchez Mariscal is a software engineer based in Guadalajara, Mexico. Selected work includes HTL Operations (enterprise SOP/SLA PWA), Qyntra Gym (member + admin gym OS), and Capital Gang (clothing · tattoo · culture platform).",
    philosophy:
      "Engineering excellence shows through process—clear architecture, accessible interfaces, measurable performance, and documentation that survives the handoff.",
    expertise: [
      "Full-stack product delivery (React, Next.js, Vite, Supabase, Prisma)",
      "Installable PWAs and authenticated operational systems",
      "Design systems and token-driven UI",
      "Technical documentation and case-study depth",
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
      "Construcción de productos web de producción de punta a punta—PWAs, plataformas operativas y experiencias de marca—con arquitectura, UX y documentación como entregables de primer nivel.",
    summary:
      "Francisco Javier Sánchez Mariscal es ingeniero de software en Guadalajara, México. Trabajo seleccionado: HTL Operations (PWA SOP/SLA), Qyntra Gym (OS de gimnasio miembros + admin) y Capital Gang (clothing · tattoo · culture).",
    philosophy:
      "La excelencia de ingeniería se demuestra en el proceso: arquitectura clara, interfaces accesibles, rendimiento medible y documentación que sobrevive al handoff.",
    expertise: [
      "Entrega full-stack de producto (React, Next.js, Vite, Supabase, Prisma)",
      "PWAs instalables y sistemas operativos autenticados",
      "Design systems e UI basada en tokens",
      "Documentación técnica y profundidad de casos",
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
      { title: "Languages", items: ["TypeScript", "JavaScript", "HTML", "CSS", "SQL"] },
      {
        title: "Frontend",
        items: ["React", "Next.js", "Vite", "Tailwind CSS", "Framer Motion", "PWA"],
      },
      {
        title: "Backend & data",
        items: ["Supabase", "PostgreSQL", "Prisma", "Express", "Auth/RLS"],
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
      { title: "Lenguajes", items: ["TypeScript", "JavaScript", "HTML", "CSS", "SQL"] },
      {
        title: "Frontend",
        items: ["React", "Next.js", "Vite", "Tailwind CSS", "Framer Motion", "PWA"],
      },
      {
        title: "Backend y datos",
        items: ["Supabase", "PostgreSQL", "Prisma", "Express", "Auth/RLS"],
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
        id: "htl-operations",
        title: "Software Engineer",
        organization: "HTL Operations",
        period: "2025 — Present",
        summary:
          "Enterprise operations PWA for SOP workflows measured by business-hours SLA—Auth, dashboards, My Tasks, Web Push, Quality hub, and admin tooling on Vite + Supabase + Vercel.",
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
        id: "htl-operations",
        title: "Ingeniero de Software",
        organization: "HTL Operations",
        period: "2025 — Presente",
        summary:
          "PWA empresarial de operaciones para flujos SOP medidos con SLA en tiempo hábil—Auth, dashboards, Mis tareas, Web Push, hub de Calidad y admin en Vite + Supabase + Vercel.",
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
