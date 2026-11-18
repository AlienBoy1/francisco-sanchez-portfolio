import type { Locale } from "@/i18n/routing";
import type { Project } from "./types";
import { projectMediaPaths } from "./types";

function media(locale: Locale): Project["media"] {
  const paths = projectMediaPaths("htl-operations");
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
      ? "Tablero HTL Operations — KPIs SLA y módulos SOP"
      : "HTL Operations dashboard — SLA KPIs and SOP modules",
    gallery: [
      shot(
        1,
        {
          alt: "HTL Operations measurement dashboard with SLA KPI cards and SOP modules",
          caption: "Measurement board · SLA KPIs & SOP modules",
        },
        {
          alt: "Tablero de medición HTL Operations con KPIs SLA y módulos SOP",
          caption: "Tablero de medición · KPIs SLA y módulos SOP",
        },
      ),
      shot(
        2,
        {
          alt: "HTL Operations authenticated dashboard overview",
          caption: "Authenticated operations overview",
        },
        {
          alt: "Vista general autenticada del tablero HTL Operations",
          caption: "Vista general autenticada",
        },
      ),
      shot(
        3,
        {
          alt: "HTL Operations My Tasks inbox with SLA counters",
          caption: "Mis Tareas · assignment inbox",
        },
        {
          alt: "Bandeja Mis Tareas de HTL Operations con contadores SLA",
          caption: "Mis Tareas · bandeja de asignaciones",
        },
      ),
      shot(
        4,
        {
          alt: "Quality SGC hub inside HTL Operations",
          caption: "Quality / SGC hub",
        },
        {
          alt: "Hub de Calidad SGC dentro de HTL Operations",
          caption: "Hub de Calidad / SGC",
        },
      ),
      shot(
        5,
        {
          alt: "HTL Operations SOP 2 requisitions module",
          caption: "SOP 2 · Requisiciones",
        },
        {
          alt: "Módulo SOP 2 Requisiciones de HTL Operations",
          caption: "SOP 2 · Requisiciones",
        },
      ),
      shot(
        6,
        {
          alt: "HTL Operations SOP 6 project cycle module",
          caption: "SOP 6 · Ciclo de proyectos",
        },
        {
          alt: "Módulo SOP 6 Ciclo de proyectos de HTL Operations",
          caption: "SOP 6 · Ciclo de proyectos",
        },
      ),
      shot(
        7,
        {
          alt: "HTL Operations quality modules grid",
          caption: "Quality modules grid",
        },
        {
          alt: "Rejilla de módulos de calidad HTL Operations",
          caption: "Rejilla de módulos de calidad",
        },
      ),
      shot(
        8,
        {
          alt: "HTL Operations global charts analytics",
          caption: "Global charts · SLA analytics",
        },
        {
          alt: "Analítica de gráficas globales HTL Operations",
          caption: "Gráficas globales · analítica SLA",
        },
      ),
      shot(
        9,
        {
          alt: "HTL Operations mobile dashboard layout",
          caption: "Mobile operations surface",
        },
        {
          alt: "Layout móvil del tablero HTL Operations",
          caption: "Superficie operativa móvil",
        },
      ),
      shot(
        10,
        {
          alt: "HTL Operations secure login screen",
          caption: "Secure login · installable PWA",
        },
        {
          alt: "Pantalla de acceso seguro de HTL Operations",
          caption: "Login seguro · PWA instalable",
        },
      ),
      shot(
        11,
        {
          alt: "HTL Operations light-mode login",
          caption: "Auth surface · light mode",
        },
        {
          alt: "Login de HTL Operations en modo claro",
          caption: "Superficie de auth · modo claro",
        },
      ),
      shot(
        12,
        {
          alt: "HTL Operations mobile login",
          caption: "Mobile auth surface",
        },
        {
          alt: "Login móvil de HTL Operations",
          caption: "Auth en móvil",
        },
      ),
    ],
  };
}

const shared = {
  slug: "htl-operations",
  name: "HTL Operations",
  year: "2026",
  client: "HTL",
  caseStudyId: "CS-7004",
  featured: true as const,
  demoUrl: "https://htlsopsadmin.vercel.app/login",
  technologies: [
    "TypeScript",
    "React",
    "Vite",
    "Supabase",
    "Tailwind CSS",
    "PWA",
    "Vitest",
  ],
};

export const htlOperationsEn: Project = {
  ...shared,
  tagline: "Enterprise PWA for SOP control measured by business-hours SLA.",
  productType: "Internal operations PWA",
  category: "Professional",
  status: "Live",
  role: "Software Engineer — product architecture, frontend, domain services, and Supabase delivery",
  summary:
    "Authenticated enterprise PWA that unifies internal SOP workflows under SLA traffic-light monitoring, assignment inbox, notifications, quality views, and admin tooling—backed by Supabase Auth, Postgres, Storage, and Web Push.",
  overview:
    "HTL Operations digitizes internal operational control. SOPs become SLA records with structured form payloads, business-hours timers, role and SOP permissions, a unified My Tasks inbox, workspace tasks, exports, and an SGC quality hub—delivered as an installable PWA on Supabase.",
  problem:
    "Operational work was fragmented across quotes, requisitions, support, projects, design, and admin tasks—without a homogeneous green/yellow/red SLA signal based on Mexico business hours, a single assignment inbox, reliable assignee notifications, or supervisor/quality panels independent of spreadsheets or real SharePoint as system of record.",
  solution:
    "Ship a modular React SPA (Vite) as an installable PWA on Vercel, with Supabase as BaaS: Auth + RLS Postgres + Storage + Edge Function for Web Push. Core persisted SOPs (1, 2, 5, 6, 10), derived SOP8/9 views from project stages, My Tasks multi-source inbox, hibernation/trusted devices session model, Excel/PDF export, and admin settings/catalogs/logs.",
  approach:
    "Iterative, objective-driven delivery: feature-oriented SPA layers (pages/components → lib services & engines → supabase-js), lazy SOP routes, system_settings with code defaults, additive SQL applied manually, and Vitest coverage on critical engines (settings, SOP2 SLA, SOP8, exports).",
  architectureNotes:
    "Pattern: modular frontend monolith + BaaS. Browser PWA → React Router + contexts (Auth, Settings, Connection, I18n) → domain services (slaTaskEngine, notifyAssignees, myTasksService) → Supabase Auth/Postgres/Storage/Edge. Central entity sla_records (sop_type + form_data JSONB) with sla_tasks/subtasks; SOP8/9 are filtered SOP6 stage views. Security relies on JWT + RLS + RBAC (role + sop_permisos), HSTS and framing headers on Vercel.",
  objectives: [
    "Unify SOP execution under one authenticated operations surface",
    "Measure compliance with configurable business-hours SLA traffic lights",
    "Centralize assignments (My Tasks) and notify assignees (in-app + Web Push)",
    "Give supervisors workload visibility and admins runtime configuration without redeploy",
  ],
  features: [
    "Persisted SOP1 Quotes, SOP2 Requisitions (dual SLA), SOP5 Support, SOP6 Projects + Gantt, SOP10 Design (dual timer)",
    "Derived SOP8 Assembly / SOP9 Commissioning views from SOP6 stages",
    "Business-hours SLA engine (America/Mexico_City) with green/yellow/red thresholds",
    "My Tasks inbox homogenizing real tasks, virtual form_data assignees, and workspace tasks",
    "Web Push via Edge Function + session hibernation and trusted devices (1 desktop + 1 mobile)",
    "Admin users (RPC), system settings, catalogs/demo seed, activity logs",
    "SGC quality hub + Excel/PDF SLA exports",
    "PWA installability with Workbox caching of Supabase REST",
  ],
  challenges: [
    "Multi-SOP assignment notifications without blocking SLA persistence",
    "Homogenizing My Tasks across real, virtual, and workspace task sources",
    "Session keep-alive vs push: hibernation (Auth alive + UI lock) instead of logout that stopped push",
    "Trusted-device limits and push cleanup on device replacement",
    "JSONB flexibility balanced against strong typing across services and schema",
    "Phased SOP coverage—core flows live first, remaining SOP surfaces delivered iteratively",
  ],
  results: [
    "Production-shaped internal ops platform with persistence on core SOPs and a Vercel + Supabase deployment path",
    "Centralized assignee notifications and My Tasks ordered by due proximity with SLA status cards",
    "Documented dual-timer SOP10 architecture and Excel/PDF export pipeline",
    "Full engineering case study (CS-7004) covering architecture, engines, and delivery trade-offs",
  ],
  lessons: [
    "Operational products need a single assignment surface more than more SOP screens",
    "Business-hours SLA semantics are a product feature, not a cosmetic badge",
    "BaaS + RLS accelerates delivery when authorization boundaries stay explicit and reviewable",
    "Phased persistence keeps the product usable while expanding SOP coverage",
    "Clear workspace naming reduces platform lock-in without confusing stakeholders",
  ],
  metrics: [
    { label: "Core SOPs live", value: "1 · 2 · 5 · 6 · 10" },
    { label: "Stack", value: "Vite + Supabase" },
    { label: "Version", value: "0.1.0" },
  ],
  media: media("en"),
  documentation: [
    {
      id: "why",
      title: "Why it exists",
      paragraphs: [
        "HTL Operations concentrates internal SOP control and SLA monitoring so quotes, requisitions, support, projects, design, and admin work share one authenticated system of record—with traffic-light compliance on Mexico business hours.",
        "Value proposition from the product README: a dedicated platform for monitoring internal operations to improve quality management—not a marketing site.",
      ],
    },
    {
      id: "users",
      title: "Users & authorization",
      paragraphs: [
        "Typed roles: admin, supervisor, operador, visualizador (with Spanish/English aliases). Authorization also uses profiles.sop_permisos (sop1…sop12 or wildcards), profiles.area for privileged delete, and JWT metadata merged with profile claims.",
        "Functional archetypes include quote/purchase/support operators, project leads on SOP6, designers on SOP10, integration/engineering consumers of SOP8/9, supervisors on workload + workspace tasks, system admins, quality users on SGC, and limited viewers.",
      ],
    },
    {
      id: "scope",
      title: "In scope / out of scope",
      paragraphs: [
        "In scope: Auth with remember-me, hibernation, and trusted devices; CRUD for SOP1/2/5/6/10; derived SOP8/9; dashboard and charts; My Tasks; in-app and Web Push; admin users, settings, catalogs, and logs; workspace tasks; Excel/PDF export; PWA; SGC hub.",
        "Roadmap items: deeper SOP3/4/7 persistence, permissions and reports admin surfaces, broader offline sync, and expanded automated quality gates.",
      ],
    },
    {
      id: "architecture",
      title: "Architecture & data",
      paragraphs: [
        "Frontend: React 18, TypeScript, Vite, React Router with lazy chunks, Tailwind/Radix, recharts, ExcelJS/pdf-lib, and vite-plugin-pwa. Data plane: Supabase Auth, Postgres with RLS, Storage for SOP attachments, and an Edge Function for Web Push.",
        "Core graph: auth.users ↔ profiles → sla_records (form_data JSONB) → sla_tasks/subtasks; notifications; workspace_tasks; system_settings; activity_logs; catalogs. SLA traffic colors green/yellow/red with a configurable yellow threshold (default 85%).",
      ],
    },
    {
      id: "engine",
      title: "Business-hours SLA engine",
      paragraphs: [
        "The SLA engine computes business elapsed and remaining time, projects deadlines, normalizes idle/running/paused timers, and derives effective status. Traffic color: red at or above 100%, yellow at or above threshold, otherwise green.",
        "Global defaults: Mon–Fri, America/Mexico_City, typical 8–12 / 13–17 workday (8h). SOP-specific limits live in runtime settings (for example SOP2 placement/delivery dual SLA).",
      ],
    },
    {
      id: "tradeoffs",
      title: "Critical trade-offs",
      paragraphs: [
        "Vite SPA + Supabase over a full-stack Next approach for delivery speed with RLS-backed security. Polymorphic form payloads over rigid per-SOP tables for multi-SOP flexibility, with deliberate typing discipline around services.",
        "SOP8/9 as SOP6 stage views avoid schedule duplication. Workspace tasks stay independent of Microsoft licensing. Session hibernation keeps push alive. Schema changes stay additive and reviewable in a single environment.",
      ],
    },
    {
      id: "roadmap",
      title: "Near-term roadmap",
      paragraphs: [
        "Next: deepen persistence for remaining SOP surfaces, expand permissions and reports admin UIs, unify SOP5 SLA settings, broaden offline sync, and continue coverage and security hardening.",
        "Longer term: optional M365 and SMTP integrations, CI on pull requests, versioned migrations, critical E2E, and stronger observability when the business requires them.",
      ],
    },
    {
      id: "source",
      title: "Source of truth",
      paragraphs: [
        "Engineering case study: CS-7004. Live product: https://htlsopsadmin.vercel.app/login — authenticated operations PWA for SOP and SLA workflows.",
        "Architecture, engines, and delivery trade-offs are documented in the official case study.",
      ],
    },
  ],
};

export const htlOperationsEs: Project = {
  ...shared,
  tagline: "PWA empresarial para control de SOP medido con SLA en tiempo hábil.",
  productType: "PWA de operaciones internas",
  category: "Profesional",
  status: "En vivo",
  role: "Ingeniero de Software — arquitectura de producto, frontend, servicios de dominio y entrega Supabase",
  summary:
    "PWA empresarial autenticada que unifica flujos SOP internos bajo monitoreo SLA tipo semáforo, bandeja de asignaciones, notificaciones, vistas de calidad y tooling admin—con Supabase Auth, Postgres, Storage y Web Push.",
  overview:
    "HTL Operations digitaliza el control operativo interno. Los SOP se convierten en expedientes SLA con payloads estructurados, timers de tiempo hábil, permisos por rol y SOP, bandeja unificada Mis tareas, workspace tasks, exportaciones y hub SGC—entregado como PWA instalable sobre Supabase.",
  problem:
    "El trabajo operativo estaba fragmentado entre cotizaciones, requisiciones, soporte, proyectos, diseño y tareas admin—sin semáforo homogéneo verde/amarillo/rojo basado en jornada México, sin buzón único de asignaciones, sin notificaciones confiables al asignar, ni paneles de supervisión y calidad independientes de hojas de cálculo.",
  solution:
    "Entregar una SPA React modular (Vite) como PWA instalable en Vercel, con Supabase como BaaS: Auth + Postgres RLS + Storage + Edge Function para Web Push. SOPs persistentes core (1, 2, 5, 6, 10), vistas derivadas SOP8/9, bandeja Mis tareas multi-fuente, hibernación y dispositivos de confianza, export Excel/PDF y admin de settings, catálogos y logs.",
  approach:
    "Entrega iterativa por objetivos: capas feature-oriented (pages/components → lib services & engines → supabase-js), rutas SOP lazy, system_settings con defaults en código, SQL aditivo aplicado a mano y Vitest en motores críticos (settings, SLA SOP2, SOP8, exports).",
  architectureNotes:
    "Patrón: monolito frontend modular + BaaS. Browser PWA → React Router + contexts (Auth, Settings, Connection, I18n) → servicios de dominio (slaTaskEngine, notifyAssignees, myTasksService) → Supabase Auth/Postgres/Storage/Edge. Entidad central sla_records (sop_type + form_data JSONB) con sla_tasks/subtasks; SOP8/9 son vistas filtradas de etapas SOP6. Seguridad: JWT + RLS + RBAC (role + sop_permisos), HSTS y headers anti-framing en Vercel.",
  objectives: [
    "Unificar la ejecución de SOP en una sola superficie autenticada",
    "Medir cumplimiento con semáforos SLA configurables en tiempo hábil",
    "Centralizar asignaciones (Mis tareas) y notificar responsables (in-app + Web Push)",
    "Dar a supervisores visibilidad de carga y a admins configuración runtime sin redeploy",
  ],
  features: [
    "SOP1 Cotizaciones, SOP2 Requisiciones (dual SLA), SOP5 Soporte, SOP6 Proyectos + Gantt, SOP10 Diseño (dual timer) persistentes",
    "Vistas derivadas SOP8 Ensamble / SOP9 Commissioning desde etapas SOP6",
    "Motor SLA de tiempo hábil (America/Mexico_City) con umbrales verde/amarillo/rojo",
    "Mis tareas homologando tareas reales, asignaciones virtuales en form_data y workspace tasks",
    "Web Push vía Edge Function + hibernación de sesión y trusted devices (1 desktop + 1 mobile)",
    "Admin de usuarios (RPC), system settings, catálogos/seed demo, activity logs",
    "Hub SGC de calidad + exportación Excel/PDF de listados SLA",
    "PWA instalable con cache Workbox de REST Supabase",
  ],
  challenges: [
    "Notificaciones multi-SOP sin abortar la persistencia del expediente",
    "Homologar Mis tareas entre fuentes reales, virtuales y de workspace",
    "Sesión keep-alive vs push: hibernación (Auth viva + UI lock) en lugar de logout que detenía push",
    "Límite de dispositivos de confianza y limpieza de push al reemplazar",
    "Flexibilidad JSONB equilibrada con tipado fuerte en servicios y esquema",
    "Cobertura SOP por fases—flujos core primero, superficies restantes de forma iterativa",
  ],
  results: [
    "Plataforma de ops internas con forma de producción: SOP core persistentes y path de deploy Vercel + Supabase",
    "Notificaciones a asignados centralizadas y Mis tareas ordenadas por proximidad a vencimiento con cards de estado SLA",
    "Arquitectura SOP10 dual-timer documentada y pipeline de export Excel/PDF",
    "Caso de estudio de ingeniería (CS-7004) con arquitectura, motores y trade-offs de entrega",
  ],
  lessons: [
    "Los productos operativos necesitan una sola superficie de asignación más que más pantallas SOP",
    "La semántica SLA en tiempo hábil es feature de producto, no un badge cosmético",
    "BaaS + RLS acelera la entrega cuando los límites de autorización se mantienen explícitos y revisables",
    "La persistencia por fases mantiene el producto usable mientras se amplía la cobertura SOP",
    "Un naming claro del workspace reduce el lock-in de plataforma sin confundir a stakeholders",
  ],
  metrics: [
    { label: "SOP core vivos", value: "1 · 2 · 5 · 6 · 10" },
    { label: "Stack", value: "Vite + Supabase" },
    { label: "Versión", value: "0.1.0" },
  ],
  media: media("es"),
  documentation: [
    {
      id: "why",
      title: "Por qué existe",
      paragraphs: [
        "HTL Operations concentra el control de SOP internos y el monitoreo SLA para que cotizaciones, requisiciones, soporte, proyectos, diseño y trabajo admin compartan un sistema de registro autenticado—con cumplimiento tipo semáforo en jornada México.",
        "Propuesta de valor del README: plataforma dedicada al control y monitoreo de operaciones internas para mejora y gestión de la calidad—no un sitio de marketing.",
      ],
    },
    {
      id: "users",
      title: "Usuarios y autorización",
      paragraphs: [
        "Roles tipados: admin, supervisor, operador, visualizador (con alias ES/EN). También interviene profiles.sop_permisos (sop1…sop12 o wildcards), profiles.area para borrado privilegiado, y metadata JWT unida a claims del perfil.",
        "Arquetipos: operadores de cotización/compras/soporte, PM en SOP6, diseñadores en SOP10, integración/ingeniería en SOP8/9, supervisores de carga + workspace, admins de sistema, usuarios de calidad en SGC y visualizadores limitados.",
      ],
    },
    {
      id: "scope",
      title: "Dentro / fuera de alcance",
      paragraphs: [
        "Dentro: Auth con remember-me, hibernación y trusted devices; CRUD SOP1/2/5/6/10; derivados SOP8/9; dashboard y gráficas; Mis tareas; in-app + Web Push; admin de usuarios, settings, catálogos y logs; workspace tasks; export Excel/PDF; PWA; hub SGC.",
        "Roadmap: profundizar persistencia SOP3/4/7, superficies admin de permisos y reportes, sync offline más amplio y más gates de calidad automatizados.",
      ],
    },
    {
      id: "architecture",
      title: "Arquitectura y datos",
      paragraphs: [
        "Frontend: React 18, TypeScript, Vite, React Router lazy, Tailwind/Radix, recharts, ExcelJS/pdf-lib y vite-plugin-pwa. Datos: Supabase Auth, Postgres con RLS, Storage de adjuntos SOP y Edge Function para Web Push.",
        "Grafo core: auth.users ↔ profiles → sla_records (form_data JSONB) → sla_tasks/subtasks; notifications; workspace_tasks; system_settings; activity_logs; catálogos. Colores SLA verde/amarillo/rojo con umbral amarillo configurable (default 85 %).",
      ],
    },
    {
      id: "engine",
      title: "Motor SLA de tiempo hábil",
      paragraphs: [
        "El motor SLA calcula tiempo hábil transcurrido y restante, proyecta deadlines, normaliza timers idle/running/paused y deriva estado efectivo. Color: rojo ≥100 %, amarillo ≥ umbral, si no verde.",
        "Defaults globales: Lun–Vie, America/Mexico_City, jornada típica 8–12 / 13–17 (8 h). Límites por SOP en settings runtime (p. ej. dual SLA de colocación/entrega en SOP2).",
      ],
    },
    {
      id: "tradeoffs",
      title: "Trade-offs críticos",
      paragraphs: [
        "SPA Vite + Supabase frente a Next full-stack por velocidad de entrega con seguridad en RLS. Payloads polimórficos frente a tablas rígidas por SOP: flexibilidad multi-SOP con disciplina de tipado en servicios.",
        "SOP8/9 como vistas de SOP6 evitan duplicar cronograma. Las workspace tasks se mantienen independientes del licenciamiento Microsoft. La hibernación mantiene push vivo. Los cambios de esquema son aditivos y revisables.",
      ],
    },
    {
      id: "roadmap",
      title: "Roadmap cercano",
      paragraphs: [
        "Siguiente: profundizar persistencia de superficies SOP restantes, ampliar UIs admin de permisos y reportes, unificar settings SLA de SOP5, ampliar offline y continuar cobertura y endurecimiento de seguridad.",
        "Más adelante: integraciones opcionales M365 y SMTP, CI en PRs, migraciones versionadas, E2E críticos y mayor observabilidad cuando el negocio lo requiera.",
      ],
    },
    {
      id: "source",
      title: "Fuente de verdad",
      paragraphs: [
        "Caso de estudio de ingeniería: CS-7004. Producto en vivo: https://htlsopsadmin.vercel.app/login — PWA autenticada para flujos SOP y SLA.",
        "Arquitectura, motores y trade-offs de entrega documentados en el caso de estudio oficial.",
      ],
    },
  ],
};
