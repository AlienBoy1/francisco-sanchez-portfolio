/**
 * Design tokens — primitive → semantic hierarchy (DS-3002 / DS-3003).
 * Visual values live here; components consume semantic tokens only.
 */

export const fonts = {
  display: "var(--font-family-display)",
  body: "var(--font-family-body)",
  mono: "var(--font-family-mono)",
} as const;

export const siteConfig = {
  name: "Francisco Sánchez",
  fullName: "Francisco Javier Sánchez Mariscal",
  title: "Lead Software Engineer",
  location: "Guadalajara, Jalisco, Mexico",
  description:
    "Engineering portfolio showcasing software architecture, production projects, and professional craftsmanship.",
  url: "https://francisco-sanchez-portfolio.vercel.app",
  repository: "https://github.com/AlienBoy1/francisco-sanchez-portfolio",
  resumePdf: "/CV_Francisco_Sanchez_Lead_Software_Engineer.pdf",
  links: {
    github: "https://github.com/AlienBoy1",
    linkedin: "https://www.linkedin.com/in/francisco-javier-sanchez-mariscal-2325a2268/",
    email: "tingenieriasanchez@gmail.com",
  },
} as const;
