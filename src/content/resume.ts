import { siteConfig } from "@/design-system/tokens";
import {
  getAboutContent,
  getExperienceContent,
  getSkillsContent,
} from "@/content/profile";
import { getProjects } from "@/content/projects";
import type { Locale } from "@/i18n/routing";

export function getResumeContent(locale: Locale) {
  const about = getAboutContent(locale);
  const experience = getExperienceContent(locale);
  const skills = getSkillsContent(locale);
  const projects = getProjects(locale);

  return {
    identity: {
      name: siteConfig.fullName,
      title: locale === "es" ? "Lead Software Engineer" : siteConfig.title,
      location: locale === "es" ? "Guadalajara, Jalisco, México" : siteConfig.location,
      email: siteConfig.links.email,
      links: [
        { label: "GitHub", href: siteConfig.links.github },
        { label: "LinkedIn", href: siteConfig.links.linkedin },
        { label: locale === "es" ? "Portafolio" : "Portfolio", href: "/" },
      ],
    },
    summary: about.summary,
    experience: experience.roles,
    skills: skills.groups.flatMap((group) => group.items),
    selectedProjects: [
      ...projects.filter((project) => project.featured),
      ...projects.filter((project) => !project.featured),
    ]
      .slice(0, 6)
      .map((project) => ({
        name: project.name,
        summary: project.summary,
        technologies: project.technologies,
      })),
    pdfPath: siteConfig.resumePdf,
  };
}
