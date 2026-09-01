import { siteConfig } from "@/design-system/tokens";
import type { Locale } from "@/i18n/routing";

export type GithubRepo = {
  name: string;
  description: string;
  url: string;
  topics: string[];
};

export function getGithubProfile() {
  return {
    username: "AlienBoy1",
    url: siteConfig.links.github,
    repository: siteConfig.repository,
  };
}

export function getGithubRepos(locale: Locale): GithubRepo[] {
  if (locale === "es") {
    return [
      {
        name: "francisco-sanchez-portfolio",
        description:
          "Portafolio de ingeniería documentation-first: Next.js, design tokens, i18n EN/ES y plataforma de features.",
        url: "https://github.com/AlienBoy1/francisco-sanchez-portfolio",
        topics: ["nextjs", "typescript", "portfolio", "i18n"],
      },
    ];
  }

  return [
    {
      name: "francisco-sanchez-portfolio",
      description:
        "Documentation-first engineering portfolio: Next.js, design tokens, EN/ES i18n, and platform features.",
      url: "https://github.com/AlienBoy1/francisco-sanchez-portfolio",
      topics: ["nextjs", "typescript", "portfolio", "i18n"],
    },
  ];
}
