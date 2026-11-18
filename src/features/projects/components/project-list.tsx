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
  const [lead, ...rest] = ordered;

  return (
    <div className="mt-14 space-y-8">
      {lead ? (
        <ProjectCard
          project={lead}
          viewLabel={viewLabel}
          outcomeLabel={outcomeLabel}
          featuredLabel={featuredLabel}
          liveDemoLabel={liveDemoLabel}
          featured
          priority
        />
      ) : null}

      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" delayChildren={0.06}>
        {rest.map((project, index) => (
          <StaggerItem key={project.slug}>
            <ProjectCard
              project={project}
              viewLabel={viewLabel}
              outcomeLabel={outcomeLabel}
              featuredLabel={featuredLabel}
              liveDemoLabel={liveDemoLabel}
              priority={index < 2}
            />
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}

function ProjectCard({
  project,
  viewLabel,
  outcomeLabel,
  featuredLabel,
  liveDemoLabel,
  featured = false,
  priority = false,
}: {
  project: Project;
  viewLabel: string;
  outcomeLabel: string;
  featuredLabel: string;
  liveDemoLabel: string;
  featured?: boolean;
  priority?: boolean;
}) {
  const outcome = project.results[0] ?? project.summary;
  const tech = project.technologies.slice(0, featured ? 5 : 3);

  if (featured) {
    return (
      <Link
        href={`/projects/${project.slug}`}
        className="group border-border/70 bg-background-secondary/35 relative grid overflow-hidden border transition-[border-color,transform,box-shadow] duration-500 hover:-translate-y-0.5 hover:border-[color-mix(in_oklab,var(--color-brand)_45%,transparent)] hover:shadow-[0_28px_90px_-48px_color-mix(in_oklab,var(--color-brand)_60%,transparent)] lg:grid-cols-[1.4fr_0.9fr]"
      >
        <div className="bg-background-secondary relative aspect-[16/10] overflow-hidden sm:aspect-[21/11] lg:aspect-auto lg:min-h-[24rem]">
          <Image
            src={project.media.cover}
            alt={project.media.coverAlt}
            fill
            priority={priority}
            sizes="(max-width: 1024px) 100vw, 62vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-[#020617]/15 to-transparent"
          />
          <div className="absolute inset-x-0 top-0 flex flex-wrap gap-2 p-4 sm:p-5">
            <MetaChip>{project.year}</MetaChip>
            <MetaChip>{project.status}</MetaChip>
            {project.featured ? <MetaChip accent>{featuredLabel}</MetaChip> : null}
            {project.demoUrl ? <MetaChip>{liveDemoLabel}</MetaChip> : null}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-8 p-6 sm:p-8">
          <div>
            <p className="text-muted-foreground font-mono text-[0.65rem] tracking-[0.18em] uppercase">
              {project.productType}
              {project.client ? ` · ${project.client}` : ""}
            </p>
            <h2 className="font-display text-foreground group-hover:text-brand mt-3 text-3xl font-semibold tracking-tight transition-colors duration-300 md:text-4xl">
              {project.name}
            </h2>
            <p className="text-foreground/90 mt-4 text-base leading-relaxed">
              {project.tagline}
            </p>
            <p className="text-muted mt-4 line-clamp-3 text-sm leading-relaxed">
              {project.summary}
            </p>
          </div>

          <div className="space-y-5">
            <div className="border-border/70 border-t pt-5">
              <p className="text-muted-foreground font-mono text-[0.65rem] tracking-[0.14em] uppercase">
                {outcomeLabel}
              </p>
              <p className="text-foreground mt-2 text-sm leading-snug">{outcome}</p>
            </div>
            <p className="text-muted-foreground font-mono text-[0.7rem] tracking-wide">
              {tech.join(" · ")}
            </p>
            <span className="text-brand inline-flex items-center gap-2 text-sm font-medium">
              {viewLabel}
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group border-border/70 bg-background-secondary/30 relative flex h-full flex-col overflow-hidden border transition-[border-color,transform,box-shadow] duration-500 hover:-translate-y-0.5 hover:border-[color-mix(in_oklab,var(--color-brand)_40%,transparent)] hover:shadow-[0_22px_70px_-48px_color-mix(in_oklab,var(--color-brand)_55%,transparent)]"
    >
      <div className="bg-background-secondary relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.media.cover}
          alt={project.media.coverAlt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[#020617]/75 via-transparent to-transparent"
        />
        <div className="absolute inset-x-0 top-0 flex flex-wrap gap-2 p-3">
          <MetaChip>{project.year}</MetaChip>
          {project.featured ? <MetaChip accent>{featuredLabel}</MetaChip> : null}
        </div>
        <div className="absolute inset-x-0 bottom-0 p-3">
          <p className="font-mono text-[0.62rem] tracking-[0.14em] text-white/70 uppercase">
            {project.productType}
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="font-display text-foreground group-hover:text-brand text-xl font-semibold tracking-tight transition-colors duration-300">
            {project.name}
          </h2>
          <span className="text-muted-foreground shrink-0 font-mono text-[0.65rem]">
            {project.status}
          </span>
        </div>
        <p className="text-foreground/90 mt-2 text-sm leading-snug">{project.tagline}</p>
        <p className="text-muted mt-3 line-clamp-2 flex-1 text-sm leading-relaxed">
          {project.summary}
        </p>
        <div className="border-border/60 mt-5 border-t pt-4">
          <p className="text-muted-foreground font-mono text-[0.6rem] tracking-[0.14em] uppercase">
            {outcomeLabel}
          </p>
          <p className="text-foreground mt-1.5 line-clamp-2 text-xs leading-snug">
            {outcome}
          </p>
          <div className="mt-4 flex items-center justify-between gap-3">
            <p className="text-muted-foreground truncate font-mono text-[0.65rem]">
              {tech.join(" · ")}
            </p>
            <span className="text-brand shrink-0 text-sm font-medium">{viewLabel} →</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function MetaChip({
  children,
  accent = false,
}: {
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <span
      className={[
        "inline-flex items-center px-2.5 py-1 font-mono text-[0.62rem] tracking-[0.14em] uppercase backdrop-blur-md",
        accent
          ? "bg-brand/90 text-primary-foreground"
          : "bg-black/45 text-white/85 ring-1 ring-white/15",
      ].join(" ")}
    >
      {children}
    </span>
  );
}
