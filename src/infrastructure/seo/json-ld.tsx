import { siteConfig } from "@/design-system/tokens";

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.fullName,
    jobTitle: siteConfig.title,
    url: siteConfig.url,
    email: siteConfig.links.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Guadalajara",
      addressRegion: "Jalisco",
      addressCountry: "MX",
    },
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin, siteConfig.repository],
    knowsAbout: [
      "Software Engineering",
      "Next.js",
      "TypeScript",
      "Software Architecture",
      "Design Systems",
    ],
  };
}
