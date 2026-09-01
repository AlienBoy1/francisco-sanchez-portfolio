export const primaryNav = [
  { href: "/projects", key: "work" },
  { href: "/about", key: "about" },
  { href: "/resume", key: "resume" },
  { href: "/lab", key: "lab" },
  { href: "/contact", key: "contact" },
] as const;

export const labNav = [
  { href: "/lab/technologies", key: "technologies" },
  { href: "/lab/docs", key: "docs" },
  { href: "/lab/github", key: "github" },
  { href: "/lab/architecture", key: "architecture" },
  { href: "/lab/features", key: "features" },
  { href: "/lab/traceability", key: "traceability" },
  { href: "/lab/search", key: "search" },
  { href: "/lab/analytics", key: "analytics" },
] as const;

/** @deprecated Use labNav */
export const platformNav = labNav;
