"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/content/projects";
import { Stagger, StaggerItem } from "@/shared/ui/motion";

export function ProjectList({
  projects,
  viewLabel,
  outcomeLabel,
  featuredLabel,
  liveDemoLabel,
}: {
  projects: Project[];
  viewLabel: string;
  outcomeLabel: string;
  featuredLabel: string;
  liveDemoLabel: string;
}) {
  const ordered = [...projects].sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
  );

  return (
    <Stagger className="mt-12 grid gap-10 sm:grid-cols-2" delayChildren={0.08}>
      {ordered.map((project) => {
        const outcome = project.results[0] ?? project.summary;
        return (
          <StaggerItem key={project.slug}>
            <Link href={`/projects/${project.slug}`} className="group block">
              <div className="border-border bg-background-secondary relative aspect-[16/10] overflow-hidden border">
                <Image
                  src={project.media.cover}
                  alt={project.media.coverAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[#020617]/75 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-90"
                />
                <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center gap-2 p-4">
                  <span className="font-mono text-[0.65rem] tracking-[0.14em] text-white/80 uppercase">
                    {project.productType}
                  </span>
                  <span className="font-mono text-[0.65rem] text-white/50">·</span>
                  <span className="font-mono text-[0.65rem] text-white/80">
                    {project.year}
                  </span>
                  {project.featured ? (
                    <>
                      <span className="font-mono text-[0.65rem] text-white/50">·</span>
                      <span className="text-brand font-mono text-[0.65rem] tracking-[0.14em] uppercase">
                        {featuredLabel}
                      </span>
                    </>
                  ) : null}
                </div>
              </div>

              <div className="mt-5">
                <div className="flex flex-wrap items-baseline gap-3">
                  <h2 className="font-display text-foreground group-hover:text-brand text-2xl font-semibold tracking-tight transition-colors duration-300">
                    {project.name}
                  </h2>
                  <span className="text-muted-foreground font-mono text-xs">
                    {project.status}
                  </span>
                </div>
                <p className="text-foreground/90 mt-2 text-sm font-medium">
                  {project.tagline}
                </p>
                <p className="text-muted mt-3 text-sm leading-relaxed">
                  {project.summary}
                </p>
                <p className="text-foreground mt-3 text-sm">
                  <span className="font-medium">{outcomeLabel}</span> {outcome}
                </p>
                <p className="text-muted-foreground mt-3 font-mono text-xs">
                  {project.technologies.slice(0, 4).join(" · ")}
                </p>
                {project.demoUrl ? (
                  <p className="text-muted-foreground mt-2 font-mono text-[0.65rem] tracking-[0.12em] uppercase">
                    {liveDemoLabel}
                  </p>
                ) : null}
                <span className="text-brand mt-4 inline-flex text-sm font-medium underline-offset-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:underline">
                  {viewLabel}
                </span>
              </div>
            </Link>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
