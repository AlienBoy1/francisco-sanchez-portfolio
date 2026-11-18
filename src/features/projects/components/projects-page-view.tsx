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
    <div className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--color-brand)_18%,transparent),transparent_62%)]"
      />
      <div className="relative mx-auto w-full max-w-6xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-28">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end">
            <div>
              <p className="text-brand font-mono text-[0.7rem] tracking-[0.22em] uppercase">
                {eyebrow}
              </p>
              <h1 className="font-display mt-4 max-w-3xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
                {title}
              </h1>
            </div>
            <p className="text-muted max-w-md text-sm leading-relaxed sm:text-base lg:justify-self-end lg:text-right">
              {intro}
            </p>
          </div>
          <div className="border-border mt-10 flex items-center gap-4 border-t pt-5">
            <span className="bg-brand h-px w-10" />
            <p className="text-muted-foreground font-mono text-[0.65rem] tracking-[0.18em] uppercase">
              {String(projects.length).padStart(2, "0")}
            </p>
          </div>
        </Reveal>

        <ProjectList
          projects={projects}
          viewLabel={viewLabel}
          outcomeLabel={outcomeLabel}
          featuredLabel={featuredLabel}
          liveDemoLabel={liveDemoLabel}
        />
      </div>
    </div>
  );
}
