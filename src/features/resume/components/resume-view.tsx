"use client";

import { useTranslations } from "next-intl";
import { getResumeContent } from "@/content/resume";
import type { Locale } from "@/i18n/routing";
import { Reveal, Stagger, StaggerItem } from "@/shared/ui/motion";

export function ResumeView({ locale }: { locale: Locale }) {
  const t = useTranslations("resume");
  const { identity, summary, experience, skills, selectedProjects, pdfPath } =
    getResumeContent(locale);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <Reveal className="border-border flex flex-col gap-6 border-b pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-brand font-mono text-xs tracking-[0.18em] uppercase">
            {t("eyebrow")}
          </p>
          <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight">
            {identity.name}
          </h1>
          <p className="text-muted mt-2">
            {identity.title} · {identity.location}
          </p>
        </div>
        <a
          href={pdfPath}
          download
          className="bg-primary text-primary-foreground hover:bg-primary-hover inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium transition-colors duration-300"
        >
          {t("download")}
        </a>
      </Reveal>

      <Reveal className="mt-10" delay={0.05}>
        <h2 className="font-display text-xl font-semibold">{t("summary")}</h2>
        <p className="text-muted mt-3 text-sm leading-relaxed">{summary}</p>
      </Reveal>

      <Reveal className="mt-10" delay={0.08}>
        <h2 className="font-display text-xl font-semibold">{t("experience")}</h2>
        <Stagger className="mt-6 space-y-8" delayChildren={0.06}>
          {experience.map((role) => (
            <StaggerItem key={role.id}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-foreground font-medium">
                  {role.title} · {role.organization}
                </h3>
                <span className="text-muted-foreground font-mono text-xs">
                  {role.period}
                </span>
              </div>
              <p className="text-muted mt-2 text-sm leading-relaxed">{role.summary}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Reveal>

      <Reveal className="mt-10">
        <h2 className="font-display text-xl font-semibold">{t("skills")}</h2>
        <p className="text-muted mt-3 text-sm leading-relaxed">{skills.join(" · ")}</p>
      </Reveal>

      <Reveal className="mt-10">
        <h2 className="font-display text-xl font-semibold">{t("selected")}</h2>
        <Stagger className="mt-6 space-y-6" delayChildren={0.05}>
          {selectedProjects.map((project) => (
            <StaggerItem key={project.name}>
              <h3 className="text-foreground font-medium">{project.name}</h3>
              <p className="text-muted mt-2 text-sm leading-relaxed">{project.summary}</p>
              <p className="text-muted-foreground mt-2 font-mono text-xs">
                {project.technologies.join(" · ")}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Reveal>

      <Reveal className="border-border mt-10 border-t pt-8">
        <h2 className="font-display text-xl font-semibold">{t("contact")}</h2>
        <ul className="text-muted mt-4 space-y-2 text-sm">
          <li>
            <a
              className="hover:text-brand transition-colors duration-300"
              href={`mailto:${identity.email}`}
            >
              {identity.email}
            </a>
          </li>
          {identity.links.map((link) => (
            <li key={link.href}>
              <a
                className="hover:text-brand transition-colors duration-300"
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
