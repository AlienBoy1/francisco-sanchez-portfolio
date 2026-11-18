import type { Locale } from "@/i18n/routing";
import type { Project } from "./types";
import { projectMediaPaths } from "./types";

function media(locale: Locale): Project["media"] {
  const paths = projectMediaPaths("htl-smart-sales");
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
      ? "Panel de HTL Smart Sales — chat y operaciones de campo"
      : "HTL Smart Sales panel — field ops and team chat",
    gallery: [
      shot(
        1,
        {
          alt: "HTL Smart Sales desktop dashboard with sidebar navigation",
          caption: "Desktop dashboard · field operations",
        },
        {
          alt: "Dashboard de escritorio HTL Smart Sales con navegación lateral",
          caption: "Dashboard escritorio · operaciones de campo",
        },
      ),
      shot(
        2,
        {
          alt: "HTL Smart Sales mobile home metrics",
          caption: "Mobile home · metrics strip",
        },
        {
          alt: "Inicio móvil de HTL Smart Sales con métricas",
          caption: "Inicio móvil · franja de métricas",
        },
      ),
      shot(
        3,
        {
          alt: "HTL Smart Sales inicio panel for administrators",
          caption: "Inicio · admin welcome panel",
        },
        {
          alt: "Panel de inicio de administrador en HTL Smart Sales",
          caption: "Inicio · panel de bienvenida admin",
        },
      ),
      shot(
        4,
        {
          alt: "HTL Smart Sales tasks module",
          caption: "Tasks inbox for field teams",
        },
        {
          alt: "Módulo de tareas de HTL Smart Sales",
          caption: "Bandeja de tareas para equipos de campo",
        },
      ),
      shot(
        5,
        {
          alt: "HTL Smart Sales trajectories list and filters",
          caption: "Trayectorias · route tracking",
        },
        {
          alt: "Listado y filtros de trayectorias en HTL Smart Sales",
          caption: "Trayectorias · seguimiento de rutas",
        },
      ),
      shot(
        6,
        {
          alt: "HTL Smart Sales realtime team chat",
          caption: "Realtime chat · team messaging",
        },
        {
          alt: "Chat en tiempo real del equipo en HTL Smart Sales",
          caption: "Chat en tiempo real · mensajería",
        },
      ),
      shot(
        7,
        {
          alt: "HTL Smart Sales more menu and utilities",
          caption: "Más · utilities and settings entry",
        },
        {
          alt: "Menú Más y utilidades de HTL Smart Sales",
          caption: "Más · utilidades y acceso a ajustes",
        },
      ),
      shot(
        8,
        {
          alt: "HTL Smart Sales mobile responsive shell",
          caption: "Mobile shell · bottom navigation",
        },
        {
          alt: "Shell móvil responsivo de HTL Smart Sales",
          caption: "Shell móvil · navegación inferior",
        },
      ),
      shot(
        9,
        {
          alt: "HTL Smart Sales alternate dashboard view",
          caption: "Dashboard surface · alternate density",
        },
        {
          alt: "Vista alternativa del dashboard de HTL Smart Sales",
          caption: "Superficie de dashboard · densidad alternativa",
        },
      ),
      shot(
        10,
        {
          alt: "HTL Smart Sales login screen",
          caption: "Authenticated entry · demo roles",
        },
        {
          alt: "Pantalla de acceso de HTL Smart Sales",
          caption: "Acceso autenticado · roles demo",
        },
      ),
    ],
  };
}

const shared = {
  slug: "htl-smart-sales",
  name: "HTL Smart Sales",
  year: "2025",
  client: "HTL",
  featured: true as const,
  demoUrl: "https://htl-smart-sales.vercel.app",
  technologies: [
    "JavaScript",
    "Capacitor",
    "PWA",
    "Leaflet",
    "Supabase",
    "WebSocket",
    "Android",
    "iOS",
  ],
};

export const htlSmartSalesEn: Project = {
  ...shared,
  tagline:
    "Field-sales platform for trajectories, live team visibility, and Mexico route planning.",
  productType: "Field sales PWA + native shell",
  category: "Professional",
  status: "Live",
  role: "Software Engineer — field ops product: trajectories, maps, monitoring, tasks, and realtime chat",
  summary:
    "Installable field-sales platform for planning trajectories, estimating routes, tracking active trips with consent, and giving admins a live operations map—plus tasks and realtime communication.",
  overview:
    "HTL Smart Sales (v4.1) unifies field selling and supervision: salespeople plan and run trajectories across Mexico, while managers and admins monitor progress, assign work, and stay connected through in-app chat and notifications.",
  problem:
    "Field sales work was hard to coordinate without a single surface for route planning, trip status, task ownership, and supervisor visibility—especially across long Mexico itineraries.",
  solution:
    "Ship a mobile-first PWA packaged with Capacitor for Android/iOS, using map layers for trajectory planning and live monitoring, with role-based surfaces for admin, manager, and sales.",
  approach:
    "Vanilla modular SPA with dedicated admin/manager/sales views, service-worker installability, map-centric UX, and realtime channels for chat and operational signals.",
  architectureNotes:
    "Capacitor shell around a web SPA; Leaflet/OSM map surfaces; Supabase-backed services; WebSocket chat; Mexico routing integrations for trajectory estimation. Public portfolio media uses brand assets only—no live GPS, chats, or customer itineraries.",
  objectives: [
    "Give field teams one installable surface for trajectories and tasks",
    "Provide supervisors with live monitoring without fragmented tools",
    "Support Mexico-aware route planning as a product capability",
  ],
  features: [
    "Trajectory planning and active-trip workflows",
    "Admin monitoring map for team visibility",
    "Role-based experiences (admin, manager, sales)",
    "Tasks and assignment notifications",
    "Realtime chat for field coordination",
    "Installable PWA with Capacitor Android/iOS packaging",
  ],
  challenges: [
    "Keeping map UX clear on phone and desktop without clutter",
    "Balancing live visibility with privacy and consent boundaries",
    "Packaging a web SPA as a reliable native shell with Capacitor",
  ],
  results: [
    "Live field platform at htl-smart-sales.vercel.app",
    "Unified trajectories, tasks, chat, and monitoring in one product",
    "Native packaging path for Android and iOS via Capacitor",
  ],
  lessons: [
    "Field products succeed when maps, tasks, and communication share one IA",
    "Role-separated surfaces reduce cognitive load for operators vs supervisors",
    "Public storytelling must show capability without exposing operational data",
  ],
  metrics: [
    { label: "Version", value: "4.1.0" },
    { label: "Delivery", value: "PWA + Capacitor" },
    { label: "Domain", value: "Field sales MX" },
  ],
  media: media("en"),
  documentation: [
    {
      id: "why",
      title: "Why it exists",
      paragraphs: [
        "HTL Smart Sales concentrates field selling and supervision into one installable product: trajectories, route-aware planning, live monitoring, tasks, and chat.",
        "It is designed for Mexico field operations—long routes, multi-role teams, and the need for supervisors to see progress without spreadsheet sprawl.",
      ],
    },
    {
      id: "users",
      title: "Users & roles",
      paragraphs: [
        "Sales operators run day-to-day trajectories and tasks. Managers coordinate assignments and visibility. Admins oversee users and operational monitoring surfaces.",
        "Portfolio materials intentionally omit employee locations, chat transcripts, and customer itineraries.",
      ],
    },
    {
      id: "architecture",
      title: "Architecture notes",
      paragraphs: [
        "Web SPA packaged with Capacitor; Leaflet maps for planning/monitoring; Supabase services; WebSocket chat; PWA service worker for installability.",
        "Routing capabilities align with Mexico road-network planning used across HTL field tooling.",
      ],
    },
    {
      id: "source",
      title: "Public surface",
      paragraphs: [
        "Live product: https://htl-smart-sales.vercel.app — authenticated field operations platform.",
        "Screens and metrics shown publicly are sanitized brand/product representations only.",
      ],
    },
  ],
};

export const htlSmartSalesEs: Project = {
  ...shared,
  tagline:
    "Plataforma de ventas de campo para trayectorias, visibilidad en vivo y planeación de rutas en México.",
  productType: "PWA de ventas de campo + shell nativo",
  category: "Profesional",
  status: "En vivo",
  role: "Ingeniero de Software — producto de campo: trayectorias, mapas, monitoreo, tareas y chat en tiempo real",
  summary:
    "Plataforma instalable de ventas de campo para planear trayectorias, estimar rutas, dar seguimiento a viajes activos con consentimiento y ofrecer a admins un mapa operativo en vivo—más tareas y comunicación realtime.",
  overview:
    "HTL Smart Sales (v4.1) unifica venta de campo y supervisión: el equipo planea y ejecuta trayectorias en México, mientras managers y admins monitorean avance, asignan trabajo y se coordinan con chat y notificaciones.",
  problem:
    "La venta de campo era difícil de coordinar sin una sola superficie para planeación de rutas, estado del viaje, ownership de tareas y visibilidad para supervisión—especialmente en itinerarios largos en México.",
  solution:
    "Entregar una PWA mobile-first empaquetada con Capacitor para Android/iOS, con mapas para planeación y monitoreo, y superficies por rol para admin, manager y ventas.",
  approach:
    "SPA modular con vistas admin/manager/sales, instalabilidad por service worker, UX centrada en mapa y canales realtime para chat y señales operativas.",
  architectureNotes:
    "Shell Capacitor sobre SPA web; mapas Leaflet/OSM; servicios Supabase; chat WebSocket; integraciones de ruteo México. El media público usa solo assets de marca—sin GPS, chats ni itinerarios reales.",
  objectives: [
    "Dar al equipo de campo una superficie instalable para trayectorias y tareas",
    "Dar a supervisión monitoreo en vivo sin herramientas fragmentadas",
    "Soportar planeación de rutas con contexto México como capacidad de producto",
  ],
  features: [
    "Planeación de trayectorias y flujos de viaje activo",
    "Mapa de monitoreo admin para visibilidad del equipo",
    "Experiencias por rol (admin, manager, sales)",
    "Tareas y notificaciones de asignación",
    "Chat en tiempo real para coordinación de campo",
    "PWA instalable con empaquetado Capacitor Android/iOS",
  ],
  challenges: [
    "Mantener mapas claros en teléfono y escritorio sin saturación",
    "Equilibrar visibilidad en vivo con límites de privacidad y consentimiento",
    "Empaquetar una SPA web como shell nativo confiable con Capacitor",
  ],
  results: [
    "Plataforma de campo en vivo en htl-smart-sales.vercel.app",
    "Trayectorias, tareas, chat y monitoreo unificados en un producto",
    "Path nativo Android/iOS vía Capacitor",
  ],
  lessons: [
    "Los productos de campo funcionan cuando mapas, tareas y comunicación comparten una sola IA",
    "Superficies por rol reducen carga cognitiva entre operadores y supervisión",
    "El storytelling público debe mostrar capacidad sin exponer datos operativos",
  ],
  metrics: [
    { label: "Versión", value: "4.1.0" },
    { label: "Entrega", value: "PWA + Capacitor" },
    { label: "Dominio", value: "Ventas de campo MX" },
  ],
  media: media("es"),
  documentation: [
    {
      id: "why",
      title: "Por qué existe",
      paragraphs: [
        "HTL Smart Sales concentra venta de campo y supervisión en un producto instalable: trayectorias, planeación con rutas, monitoreo en vivo, tareas y chat.",
        "Está pensado para operaciones de campo en México—rutas largas, equipos multi-rol y necesidad de ver avance sin hojas de cálculo dispersas.",
      ],
    },
    {
      id: "users",
      title: "Usuarios y roles",
      paragraphs: [
        "Operadores de ventas ejecutan trayectorias y tareas. Managers coordinan asignaciones y visibilidad. Admins supervisan usuarios y superficies de monitoreo.",
        "Los materiales de portafolio omiten ubicaciones de personal, transcripts de chat e itinerarios de clientes.",
      ],
    },
    {
      id: "architecture",
      title: "Notas de arquitectura",
      paragraphs: [
        "SPA web empaquetada con Capacitor; mapas Leaflet para planeación/monitoreo; servicios Supabase; chat WebSocket; service worker PWA.",
        "Las capacidades de ruteo se alinean con el planeamiento sobre red vial de México usado en el tooling de campo HTL.",
      ],
    },
    {
      id: "source",
      title: "Superficie pública",
      paragraphs: [
        "Producto en vivo: https://htl-smart-sales.vercel.app — plataforma autenticada de operaciones de campo.",
        "Pantallas y métricas públicas son representaciones sanitizadas de marca/producto.",
      ],
    },
  ],
};
