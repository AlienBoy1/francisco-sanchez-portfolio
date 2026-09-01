import type { Locale } from "@/i18n/routing";
import type { Project } from "./types";
import { projectMediaPaths } from "./types";

function media(locale: Locale): Project["media"] {
  const paths = projectMediaPaths("qyntra-gym");
  const es = locale === "es";
  return {
    cover: paths.cover,
    coverAlt: es
      ? "Qyntra Gym — landing con fotografía de entrenamiento"
      : "Qyntra Gym — training photography landing cover",
    gallery: [
      {
        src: paths.gallery(1),
        alt: es
          ? "Comunidad y conexión en Qyntra Gym"
          : "Community and connection in Qyntra Gym",
        caption: es ? "Superficie de comunidad / social" : "Community / social surface",
      },
      {
        src: paths.gallery(2),
        alt: es ? "Atmósfera de entrenamiento Qyntra" : "Qyntra training atmosphere",
        caption: es ? "Entrenamiento y progreso" : "Training and progress",
      },
      {
        src: paths.gallery(3),
        alt: es ? "Qyntra Gym como app instalable" : "Qyntra Gym as an installable app",
        caption: es ? "Producto en dispositivo / PWA" : "Product on device / PWA",
      },
      {
        src: paths.gallery(4),
        alt: es ? "Ícono de aplicación Qyntra Gym" : "Qyntra Gym app icon",
        caption: es ? "Marca e ícono PWA" : "Brand and PWA icon",
      },
    ],
  };
}

const shared = {
  slug: "qyntra-gym",
  name: "Qyntra Gym",
  year: "2025",
  client: "Qyntra",
  caseStudyId: "CS-7000",
  featured: true as const,
  demoUrl: "https://qyntagymweb.vercel.app/",
  technologies: [
    "TypeScript",
    "React",
    "Vite",
    "Express",
    "Supabase",
    "Tailwind CSS",
    "Framer Motion",
    "PWA",
    "Socket.IO",
  ],
};

export const qyntraGymEn: Project = {
  ...shared,
  tagline:
    "The gym operating system—train, connect, and measure progress in an installable PWA.",
  productType: "Gym member + admin PWA",
  category: "Professional",
  status: "Live",
  role: "Software Engineer — full-stack product: React PWA, Express API, Supabase Auth/DB, Vercel delivery",
  summary:
    "Qyntra Gym is a Spanish-language gym PWA for members and staff: live workouts, community, challenges, progress, class booking, chat, and admin memberships/attendance—deployed on Vercel with Supabase.",
  overview:
    "Branded as QYNTRA / GYM OS with the tagline “Supera tus límites.” The product pairs a marketing landing with an authenticated member app and an admin console, installable as a PWA across desktop and mobile.",
  problem:
    "Gyms needed a single digital surface for members to train and engage socially while staff managed classes, memberships, and attendance—without shipping separate native apps for every platform.",
  solution:
    "Built a Vite React client + Express API on Vercel, with Supabase Auth/DB, realtime via Socket.IO, and vite-plugin-pwa for installability. Member journeys cover workouts, social feed, challenges, and progress; admin covers users, classes, memberships, attendance, and reports.",
  approach:
    "Product-first PWA delivery: strong landing narrative, themeable member UI, Zustand client state, and a cutover path from legacy Mongo toward Supabase as the system of record.",
  architectureNotes:
    "Monorepo-style client/server on Vercel (static Vite build + serverless API). Auth and data on Supabase; realtime and push supported at the platform layer. Public marketing assets live under client/public/landing for the brand story.",
  objectives: [
    "Ship an installable gym experience for members and staff",
    "Unify workouts, community, and progress in one product surface",
    "Give admins memberships, classes, and attendance without spreadsheet chaos",
  ],
  features: [
    "Full-bleed marketing landing with PWA install path",
    "Member dashboard, live workouts, GymRat routines, and progress/XP",
    "Social feed, stories, challenges, classes, and chat",
    "Admin: users, classes, memberships, attendance, reports",
    "In-product trainer persona QySi",
    "Auth flows including OAuth callback and password recovery",
  ],
  challenges: [
    "Balancing rich member UX with admin operational needs in one PWA",
    "Auth/data cutover toward Supabase while keeping delivery continuous",
    "Installability and performance across Windows, Android, and iOS WebKit",
  ],
  results: [
    "Live production deployment at qyntagymweb.vercel.app",
    "Cohesive Qyntra brand system across landing, PWA icons, and in-app surfaces",
    "Portfolio-ready product visuals from real landing photography",
  ],
  lessons: [
    "A gym product wins when community and training share one installable surface",
    "PWA installability is a product feature, not an afterthought",
    "Brand consistency across landing, PWA icons, and in-app surfaces compounds product trust",
  ],
  metrics: [
    { label: "Status", value: "Live" },
    { label: "Stack", value: "Vite + Supabase" },
    { label: "Surface", value: "PWA" },
  ],
  media: media("en"),
  documentation: [
    {
      id: "product",
      title: "Product overview",
      paragraphs: [
        "Qyntra Gym is framed as the gym’s operating system: members train, connect, and measure evolution; staff operate classes and memberships from the same product family.",
        "Live product: https://qyntagymweb.vercel.app/ — marketing landing, member app, and admin console as one installable PWA.",
      ],
    },
    {
      id: "brand",
      title: "Brand & evolution",
      paragraphs: [
        "Brand system: Qyntra / GYM OS with training photography, community imagery, and a distinct PWA mark.",
        "Visual language relies on training photography, community imagery, and a distinct PWA mark—shown in the gallery above.",
      ],
    },
    {
      id: "stack",
      title: "Stack",
      paragraphs: [
        "Client: React 18, Vite, Tailwind, Framer Motion, Zustand, Socket.IO client, vite-plugin-pwa.",
        "Server/data: Express on Vercel with Supabase Auth and database as the system of record.",
      ],
    },
  ],
};

export const qyntraGymEs: Project = {
  ...shared,
  tagline:
    "El sistema operativo del gimnasio: entrena, conecta y mide tu evolución en una PWA instalable.",
  productType: "PWA miembros + admin",
  category: "Profesional",
  status: "En vivo",
  role: "Ingeniero de Software — producto full-stack: PWA React, API Express, Auth/DB Supabase, entrega en Vercel",
  summary:
    "Qyntra Gym es una PWA en español para miembros y staff: entrenamientos en vivo, comunidad, retos, progreso, clases, chat y admin de membresías/asistencia—desplegada en Vercel con Supabase.",
  overview:
    "Marca QYNTRA / GYM OS con el lema “Supera tus límites.” Combina landing de marketing, app de miembro autenticada y consola admin, instalable como PWA en desktop y móvil.",
  problem:
    "Los gimnasios necesitaban una sola superficie digital para que los miembros entrenaran y se relacionaran, mientras el staff gestionaba clases, membresías y asistencia—sin apps nativas por plataforma.",
  solution:
    "Cliente React/Vite + API Express en Vercel, con Auth/DB en Supabase, realtime vía Socket.IO y vite-plugin-pwa. Journeys de miembro: workouts, social, retos y progreso; admin: usuarios, clases, membresías, asistencia y reportes.",
  approach:
    "Entrega PWA product-first: landing narrativa, UI de miembro con temas, estado con Zustand y migración hacia Supabase como sistema de registro.",
  architectureNotes:
    "Cliente/servidor en Vercel (build estático Vite + API serverless). Auth y datos en Supabase; assets de marketing en client/public/landing para la historia de marca.",
  objectives: [
    "Entregar una experiencia de gimnasio instalable para miembros y staff",
    "Unificar entrenamientos, comunidad y progreso en una sola superficie",
    "Dar al admin membresías, clases y asistencia sin caos de hojas de cálculo",
  ],
  features: [
    "Landing full-bleed con ruta de instalación PWA",
    "Dashboard, workouts en vivo, rutinas GymRat y progreso/XP",
    "Feed social, stories, retos, clases y chat",
    "Admin: usuarios, clases, membresías, asistencia, reportes",
    "Persona in-product QySi",
    "Flujos de auth con OAuth y recuperación de contraseña",
  ],
  challenges: [
    "Equilibrar UX rica de miembro con operación admin en una sola PWA",
    "Cutover Auth/datos hacia Supabase manteniendo entrega continua",
    "Instalabilidad y rendimiento en Windows, Android e iOS WebKit",
  ],
  results: [
    "Despliegue en producción en qyntagymweb.vercel.app",
    "Sistema de marca Qyntra coherente en landing, íconos PWA y app",
    "Visuales de producto listos para portafolio a partir de fotografía real",
  ],
  lessons: [
    "Un producto de gimnasio gana cuando comunidad y entrenamiento comparten una superficie instalable",
    "La instalabilidad PWA es una feature de producto, no un afterthought",
    "La consistencia de marca entre landing, iconos PWA y app refuerza la confianza en el producto",
  ],
  metrics: [
    { label: "Estado", value: "En vivo" },
    { label: "Stack", value: "Vite + Supabase" },
    { label: "Superficie", value: "PWA" },
  ],
  media: media("es"),
  documentation: [
    {
      id: "product",
      title: "Resumen de producto",
      paragraphs: [
        "Qyntra Gym se plantea como el sistema operativo del gimnasio: los miembros entrenan, conectan y miden evolución; el staff opera clases y membresías en la misma familia de producto.",
        "Producto en vivo: https://qyntagymweb.vercel.app/ — landing, app de miembro y consola admin como una sola PWA instalable.",
      ],
    },
    {
      id: "brand",
      title: "Marca y evolución",
      paragraphs: [
        "Sistema de marca: Qyntra / GYM OS con fotografia de entrenamiento, comunidad e icono PWA distintivo.",
        "El lenguaje visual usa fotografía de entrenamiento, comunidad e ícono PWA—mostrados en la galería.",
      ],
    },
    {
      id: "stack",
      title: "Stack",
      paragraphs: [
        "Cliente: React 18, Vite, Tailwind, Framer Motion, Zustand, Socket.IO client, vite-plugin-pwa.",
        "Servidor/datos: Express en Vercel con Supabase Auth y base de datos como sistema de registro.",
      ],
    },
  ],
};
