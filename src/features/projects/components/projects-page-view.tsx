"use client";

import { Reveal } from "@/shared/ui/motion";
import { ProjectList } from "@/features/projects/components/project-list";
import type { Project } from "@/content/projects";

export function ProjectsPageView({
  projects,
  eyebrow,
  title,
  intro,
  viewLabel,
  outcomeLabel,
  featuredLabel,
  liveDemoLabel,
}: {
  projects: Project[];
  eyebrow: string;
  title: string;
  intro: string;
  viewLabel: string;
  outcomeLabel: string;
  featuredLabel: string;
  liveDemoLabel: string;
}) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <Reveal>
        <p className="text-brand font-mono text-xs tracking-[0.18em] uppercase">
          {eyebrow}
        </p>
        <h1 className="font-display mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        <p className="text-muted mt-4 max-w-2xl text-sm sm:text-base">{intro}</p>
      </Reveal>
      <ProjectList
        projects={projects}
        viewLabel={viewLabel}
        outcomeLabel={outcomeLabel}
        featuredLabel={featuredLabel}
        liveDemoLabel={liveDemoLabel}
      />
    </div>
  );
}
