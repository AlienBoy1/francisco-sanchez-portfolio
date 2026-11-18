import type { Locale } from "@/i18n/routing";
import type { Project } from "./types";
import { projectMediaPaths } from "./types";

function media(locale: Locale): Project["media"] {
  const paths = projectMediaPaths("htl-stopwatch");
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
      ? "HTL StopWatch — sesión activa con marcas y exportación PDF"
      : "HTL StopWatch — active session with laps and PDF export",
    gallery: [
      shot(
        1,
        {
          alt: "HTL StopWatch active timing session with controls",
          caption: "Active session · pause, lap, PDF",
        },
        {
          alt: "Sesión activa de timing HTL StopWatch con controles",
          caption: "Sesión activa · pausar, lap, PDF",
        },
      ),
      shot(
        2,
        {
          alt: "HTL StopWatch desktop timing dashboard",
          caption: "Desktop timing dashboard",
        },
        {
          alt: "Dashboard de timing HTL StopWatch en escritorio",
          caption: "Dashboard de timing en escritorio",
        },
      ),
      shot(
        3,
        {
          alt: "HTL StopWatch running timer state",
          caption: "Running timer state",
        },
        {
          alt: "Estado de timer en curso en HTL StopWatch",
          caption: "Timer en curso",
        },
      ),
      shot(
        4,
        {
          alt: "HTL StopWatch lap history table",
          caption: "Lap history · structured marks",
        },
        {
          alt: "Historial de marcas de HTL StopWatch",
          caption: "Historial de marcas · registros estructurados",
        },
      ),
      shot(
        5,
        {
          alt: "HTL StopWatch idle timing surface",
          caption: "Idle timing surface",
        },
        {
          alt: "Superficie de timing en reposo de HTL StopWatch",
          caption: "Superficie de timing en reposo",
        },
      ),
      shot(
        6,
        {
          alt: "HTL StopWatch mobile timing layout",
          caption: "Mobile timing layout",
        },
        {
          alt: "Layout móvil de timing HTL StopWatch",
          caption: "Layout de timing en móvil",
        },
      ),
      shot(
        7,
        {
          alt: "HTL StopWatch header and navigation detail",
          caption: "Header · operational navigation",
        },
        {
          alt: "Detalle de header y navegación de HTL StopWatch",
          caption: "Header · navegación operativa",
        },
      ),
    ],
  };
}

const shared = {
  slug: "htl-stopwatch",
  name: "HTL StopWatch",
  year: "2025",
  client: "HTL",
  featured: true as const,
  technologies: ["TypeScript", "Vite", "PWA", "PDF", "Workbox"],
};

export const htlStopwatchEn: Project = {
  ...shared,
  tagline:
    "Installable operational timing workflows with structured PDF export for control and reporting.",
  productType: "Operational timing PWA",
  category: "Professional",
  status: "Internal",
  role: "Software Engineer — timing PWA and PDF reporting workflows for operational control",
  summary:
    "Internal HTL timing product focused on precise operational measurement and PDF report export—delivered as an installable Vite PWA for day-to-day control workflows.",
  overview:
    "HTL StopWatch supports operational timing scenarios where teams need reliable measurement and exportable records. The product emphasizes installability and report generation suitable for internal handoff and review.",
  problem:
    "Operational timing and reporting were fragmented when teams relied on generic timers plus manual export into documents.",
  solution:
    "Deliver a dedicated installable PWA oriented to timing workflows with PDF tooling for structured export—keeping the experience focused and portable.",
  approach:
    "Vite-based PWA delivery with Workbox installability and PDF libraries for exportable operational records, designed for internal HTL use.",
  architectureNotes:
    "Frontend PWA stack centered on Vite + service-worker packaging, with PDF generation/parsing libraries for report workflows. Public portfolio materials intentionally avoid payroll, personnel timing logs, and any confidential operational timestamps.",
  objectives: [
    "Provide a focused timing surface for operational control",
    "Support structured PDF export for review and handoff",
    "Keep the tool installable and lightweight for internal teams",
  ],
  features: [
    "Operational timing workflows",
    "Installable PWA packaging",
    "PDF export for structured reporting",
    "Lightweight Vite delivery for fast iteration",
  ],
  challenges: [
    "Keeping timing UX precise without becoming a generic stopwatch novelty",
    "Exporting reports that remain useful for operational review",
    "Protecting sensitive timing/ops records in any public presentation",
  ],
  results: [
    "Dedicated internal timing product within the HTL tooling set",
    "PWA delivery path for installable use",
    "PDF-oriented reporting aligned with operational handoff needs",
  ],
  lessons: [
    "Internal tools still deserve product framing and installability",
    "Export quality matters as much as the timer itself",
    "Portfolio cases for internal tools must stay capability-focused and data-safe",
  ],
  metrics: [
    { label: "Delivery", value: "Vite PWA" },
    { label: "Reports", value: "PDF export" },
    { label: "Audience", value: "Internal ops" },
  ],
  media: media("en"),
  documentation: [
    {
      id: "why",
      title: "Why it exists",
      paragraphs: [
        "HTL StopWatch exists to make operational timing a first-class internal tool—measurable, installable, and exportable—rather than a side utility.",
        "It sits alongside other HTL operations products as a focused control instrument.",
      ],
    },
    {
      id: "confidentiality",
      title: "Confidentiality",
      paragraphs: [
        "This case study describes product capability only. No personnel timing logs, payroll-adjacent data, or confidential operational records are published in the portfolio.",
      ],
    },
  ],
};

export const htlStopwatchEs: Project = {
  ...shared,
  tagline:
    "Flujos instalables de timing operativo con exportación PDF estructurada para control y reporte.",
  productType: "PWA de timing operativo",
  category: "Profesional",
  status: "Interno",
  role: "Ingeniero de Software — PWA de timing y flujos de reporte PDF para control operativo",
  summary:
    "Producto interno HTL de timing enfocado en medición operativa precisa y exportación PDF—entregado como PWA Vite instalable para flujos de control diarios.",
  overview:
    "HTL StopWatch soporta escenarios de timing operativo donde el equipo necesita medición confiable y registros exportables. El producto enfatiza instalabilidad y generación de reportes útiles para handoff y revisión interna.",
  problem:
    "El timing operativo y el reporte estaban fragmentados cuando el equipo dependía de timers genéricos más exportación manual a documentos.",
  solution:
    "Entregar una PWA dedicada e instalable orientada a flujos de timing con tooling PDF para exportación estructurada—manteniendo la experiencia enfocada y portable.",
  approach:
    "Entrega PWA basada en Vite con instalabilidad Workbox y librerías PDF para registros operativos exportables, diseñada para uso interno HTL.",
  architectureNotes:
    "Stack frontend PWA centrado en Vite + service worker, con librerías PDF para flujos de reporte. Los materiales públicos evitan logs de personal, datos cercanos a nómina y timestamps operativos confidenciales.",
  objectives: [
    "Proveer una superficie de timing enfocada para control operativo",
    "Soportar exportación PDF estructurada para revisión y handoff",
    "Mantener la herramienta instalable y ligera para equipos internos",
  ],
  features: [
    "Flujos de timing operativo",
    "Empaquetado PWA instalable",
    "Exportación PDF para reporte estructurado",
    "Entrega Vite ligera para iteración rápida",
  ],
  challenges: [
    "Mantener UX de timing precisa sin convertirse en un timer genérico",
    "Exportar reportes útiles para revisión operativa",
    "Proteger registros sensibles de timing/ops en cualquier presentación pública",
  ],
  results: [
    "Producto interno de timing dentro del set de tooling HTL",
    "Path de entrega PWA para uso instalable",
    "Reporte orientado a PDF alineado a necesidades de handoff operativo",
  ],
  lessons: [
    "Las tools internas también merecen framing de producto e instalabilidad",
    "La calidad del export importa tanto como el timer",
    "Los casos de portafolio para tools internas deben ser de capacidad y data-safe",
  ],
  metrics: [
    { label: "Entrega", value: "Vite PWA" },
    { label: "Reportes", value: "Export PDF" },
    { label: "Audiencia", value: "Ops internas" },
  ],
  media: media("es"),
  documentation: [
    {
      id: "why",
      title: "Por qué existe",
      paragraphs: [
        "HTL StopWatch existe para hacer del timing operativo una herramienta interna de primer nivel—medible, instalable y exportable—en lugar de una utilidad lateral.",
        "Se sitúa junto a otros productos de operaciones HTL como instrumento de control enfocado.",
      ],
    },
    {
      id: "confidentiality",
      title: "Confidencialidad",
      paragraphs: [
        "Este caso describe solo capacidad de producto. No se publican logs de timing de personal, datos cercanos a nómina ni registros operativos confidenciales.",
      ],
    },
  ],
};
