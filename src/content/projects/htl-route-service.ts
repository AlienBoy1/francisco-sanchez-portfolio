import type { Locale } from "@/i18n/routing";
import type { Project } from "./types";
import { projectMediaPaths } from "./types";

function media(locale: Locale): Project["media"] {
  const paths = projectMediaPaths("htl-route-service");
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
      ? "Trayectorias y ruteo HTL — listado y filtros operativos"
      : "HTL routing trajectories — list and operational filters",
    gallery: [
      shot(
        1,
        {
          alt: "HTL trajectories list with status filters",
          caption: "Trayectorias · status filters",
        },
        {
          alt: "Listado de trayectorias HTL con filtros de estado",
          caption: "Trayectorias · filtros de estado",
        },
      ),
      shot(
        2,
        {
          alt: "HTL route planning workspace",
          caption: "Planificar ruta workspace",
        },
        {
          alt: "Espacio de planificación de ruta HTL",
          caption: "Espacio Planificar ruta",
        },
      ),
      shot(
        3,
        {
          alt: "HTL map-oriented routing surface",
          caption: "Map layers · routing context",
        },
        {
          alt: "Superficie de ruteo orientada a mapa HTL",
          caption: "Capas de mapa · contexto de ruteo",
        },
      ),
      shot(
        4,
        {
          alt: "HTL routing context panel",
          caption: "Routing context panel",
        },
        {
          alt: "Panel de contexto de ruteo HTL",
          caption: "Panel de contexto de ruteo",
        },
      ),
      shot(
        5,
        {
          alt: "HTL routing desktop layout",
          caption: "Desktop routing layout",
        },
        {
          alt: "Layout de ruteo HTL en escritorio",
          caption: "Layout de ruteo en escritorio",
        },
      ),
      shot(
        6,
        {
          alt: "HTL routing mobile layout",
          caption: "Mobile routing layout",
        },
        {
          alt: "Layout móvil de ruteo HTL",
          caption: "Layout de ruteo en móvil",
        },
      ),
      shot(
        7,
        {
          alt: "HTL field inicio linked to routing flows",
          caption: "Inicio linked to routing flows",
        },
        {
          alt: "Inicio de campo vinculado a flujos de ruteo HTL",
          caption: "Inicio vinculado a flujos de ruteo",
        },
      ),
      shot(
        8,
        {
          alt: "HTL routing utilities and more menu",
          caption: "Utilities · more menu",
        },
        {
          alt: "Utilidades y menú Más del ruteo HTL",
          caption: "Utilidades · menú Más",
        },
      ),
    ],
  };
}

const shared = {
  slug: "htl-route-service",
  name: "HTL Route Service",
  year: "2025",
  client: "HTL",
  featured: true as const,
  technologies: [
    "Python",
    "FastAPI",
    "SQLAlchemy",
    "OpenLayers",
    "INEGI",
    "NumPy",
    "Pandas",
  ],
};

export const htlRouteServiceEn: Project = {
  ...shared,
  tagline:
    "Mexico road-routing capability that powers trajectory planning for field operations.",
  productType: "Routing platform / service",
  category: "Professional",
  status: "Platform",
  role: "Software Engineer — routing service and map prototypes for Mexico field trajectories",
  summary:
    "Routing platform capability for suggested routes on Mexico’s road network—API-oriented services and map prototypes that support field trajectory planning across HTL products.",
  overview:
    "HTL Route Service focuses on the routing layer behind field travel: suggesting routes on map surfaces aligned with national road-network data, and exposing that capability to operational products such as Smart Sales.",
  problem:
    "Field trajectory planning needed a reusable Mexico routing capability—not one-off map scripts embedded inside every client app.",
  solution:
    "Develop routing/map service foundations with FastAPI-oriented backend tooling and OpenLayers map prototypes using national road-network layers for suggested routes.",
  approach:
    "Separate the routing concern as a platform capability: service layer for computation and map docs/prototypes for visualization, then consume it from field products.",
  architectureNotes:
    "Python service stack (FastAPI/Uvicorn/SQLAlchemy/scientific libs) with OpenLayers map documentation prototypes and INEGI/WMS-aligned layers. Public materials show capability framing only—no proprietary tariff tables or client logistics traces.",
  objectives: [
    "Provide reusable Mexico routing for field trajectory products",
    "Keep map visualization and routing computation separable",
    "Support Smart Sales and related ops surfaces without duplicating engines",
  ],
  features: [
    "Suggested-route planning on Mexico road networks",
    "Map prototype surfaces for routing visualization",
    "API-oriented service foundation for product consumption",
    "Alignment with national geospatial layers",
    "Shared capability used by field-sales tooling",
  ],
  challenges: [
    "Modeling Mexico routing as a product capability, not a demo map",
    "Keeping geospatial complexity usable for non-GIS operators",
    "Avoiding leakage of proprietary cost tables in public documentation",
  ],
  results: [
    "Reusable routing capability feeding HTL field trajectory planning",
    "Map prototypes that communicate route suggestion clearly",
    "Cleaner separation between field UX and routing engine concerns",
  ],
  lessons: [
    "Routing belongs as a platform service when multiple products need it",
    "Map UX is part of the product, not just a debug view",
    "Portfolio evidence can show architecture without publishing logistics data",
  ],
  metrics: [
    { label: "Domain", value: "Mexico routing" },
    { label: "Stack", value: "FastAPI + maps" },
    { label: "Consumers", value: "Field ops apps" },
  ],
  media: media("en"),
  documentation: [
    {
      id: "why",
      title: "Why it exists",
      paragraphs: [
        "HTL Route Service exists so Mexico routing can be shared across field products instead of being reinvented per app.",
        "It underpins trajectory planning stories in Smart Sales while remaining a distinct engineering capability.",
      ],
    },
    {
      id: "architecture",
      title: "Architecture notes",
      paragraphs: [
        "Service-oriented Python stack with FastAPI patterns; map prototypes via OpenLayers; national road-network layers for route suggestion.",
        "Field apps consume the capability; the portfolio presents brand-safe visuals and architectural narrative only.",
      ],
    },
    {
      id: "relationship",
      title: "Relationship to Smart Sales",
      paragraphs: [
        "Smart Sales is the operator-facing field product; Route Service is the routing/platform layer that makes Mexico trajectory planning credible and reusable.",
      ],
    },
  ],
};

export const htlRouteServiceEs: Project = {
  ...shared,
  tagline:
    "Capacidad de ruteo vial en México que alimenta la planeación de trayectorias de campo.",
  productType: "Plataforma / servicio de ruteo",
  category: "Profesional",
  status: "Plataforma",
  role: "Ingeniero de Software — servicio de ruteo y prototipos de mapa para trayectorias de campo en México",
  summary:
    "Capacidad de plataforma de ruteo para rutas sugeridas sobre la red vial de México—servicios orientados a API y prototipos de mapa que soportan planeación de trayectorias en productos HTL.",
  overview:
    "HTL Route Service se enfoca en la capa de ruteo detrás del viaje de campo: sugerir rutas en mapas alineados a datos de red vial nacional, y exponer esa capacidad a productos operativos como Smart Sales.",
  problem:
    "La planeación de trayectorias de campo necesitaba una capacidad de ruteo México reutilizable—no scripts de mapa aislados dentro de cada app cliente.",
  solution:
    "Desarrollar bases de servicio de ruteo/mapa con tooling backend orientado a FastAPI y prototipos OpenLayers usando capas de red vial nacional para rutas sugeridas.",
  approach:
    "Separar el ruteo como capacidad de plataforma: capa de servicio para cómputo y docs/prototipos de mapa para visualización, luego consumirlo desde productos de campo.",
  architectureNotes:
    "Stack Python (FastAPI/Uvicorn/SQLAlchemy/libs científicas) con prototipos OpenLayers y capas alineadas a INEGI/WMS. Materiales públicos muestran capacidad—sin tablas tarifarias propietarias ni trazas logísticas de clientes.",
  objectives: [
    "Proveer ruteo México reutilizable para productos de trayectoria de campo",
    "Mantener visualización de mapa y cómputo de ruteo separables",
    "Soportar Smart Sales y superficies ops relacionadas sin duplicar motores",
  ],
  features: [
    "Planeación de rutas sugeridas sobre red vial México",
    "Prototipos de mapa para visualización de ruteo",
    "Fundación de servicio orientada a API",
    "Alineación con capas geoespaciales nacionales",
    "Capacidad compartida por tooling de ventas de campo",
  ],
  challenges: [
    "Modelar el ruteo México como capacidad de producto, no como demo de mapa",
    "Mantener complejidad geoespacial usable para operadores no GIS",
    "Evitar filtrar tablas de costo propietarias en documentación pública",
  ],
  results: [
    "Capacidad de ruteo reutilizable para planeación de trayectorias HTL",
    "Prototipos de mapa que comunican sugerencia de ruta con claridad",
    "Separación más limpia entre UX de campo y motor de ruteo",
  ],
  lessons: [
    "El ruteo debe ser servicio de plataforma cuando varios productos lo necesitan",
    "La UX de mapa es parte del producto, no solo una vista de debug",
    "El portafolio puede mostrar arquitectura sin publicar datos logísticos",
  ],
  metrics: [
    { label: "Dominio", value: "Ruteo México" },
    { label: "Stack", value: "FastAPI + mapas" },
    { label: "Consumidores", value: "Apps de campo" },
  ],
  media: media("es"),
  documentation: [
    {
      id: "why",
      title: "Por qué existe",
      paragraphs: [
        "HTL Route Service existe para que el ruteo México se comparta entre productos de campo en lugar de reinventarse por app.",
        "Sustenta las historias de planeación de trayectorias en Smart Sales y permanece como capacidad de ingeniería distinta.",
      ],
    },
    {
      id: "architecture",
      title: "Notas de arquitectura",
      paragraphs: [
        "Stack Python orientado a servicio con patrones FastAPI; prototipos de mapa OpenLayers; capas de red vial nacional para sugerencia de rutas.",
        "Las apps de campo consumen la capacidad; el portafolio presenta visuals seguros y narrativa arquitectónica.",
      ],
    },
    {
      id: "relationship",
      title: "Relación con Smart Sales",
      paragraphs: [
        "Smart Sales es el producto de campo orientado al operador; Route Service es la capa de ruteo/plataforma que hace creíble y reutilizable la planeación de trayectorias en México.",
      ],
    },
  ],
};
