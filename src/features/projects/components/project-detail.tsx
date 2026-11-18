"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/content/projects";
import { Reveal, Stagger, StaggerItem } from "@/shared/ui/motion";

export function ProjectDetail({ project }: { project: Project }) {
  const t = useTranslations("projects");
  const reduceMotion = useReducedMotion();
  const gallery = project.media.gallery;
  const leadShot = gallery[0];
  const restShots = gallery.slice(1);

  return (
    <article>
      <div className="relative isolate min-h-[min(68vh,36rem)] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={reduceMotion ? false : { scale: 1.08, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: reduceMotion ? 0 : 1.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={project.media.cover}
            alt={project.media.coverAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
        </motion.div>
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.35)_0%,rgba(2,6,23,0.55)_42%,rgba(2,6,23,0.96)_100%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(ellipse_at_bottom,color-mix(in_oklab,var(--color-brand)_22%,transparent),transparent_70%)]"
        />

        <motion.div
          className="relative mx-auto flex min-h-[min(68vh,36rem)] w-full max-w-6xl flex-col justify-end px-4 pt-28 pb-12 sm:px-6 sm:pb-16"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            delay: reduceMotion ? 0 : 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Link
            href="/projects"
            className="mb-8 w-fit font-mono text-[0.7rem] tracking-[0.16em] text-white/65 uppercase transition-colors hover:text-white"
          >
            {t("back")}
          </Link>

          <div className="flex flex-wrap gap-2">
            <HeroChip>{project.productType}</HeroChip>
            <HeroChip>{project.year}</HeroChip>
            <HeroChip>{project.status}</HeroChip>
            {project.caseStudyId ? <HeroChip>{project.caseStudyId}</HeroChip> : null}
          </div>

          <h1 className="font-display mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {project.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80 sm:text-xl">
            {project.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand text-primary-foreground inline-flex h-11 items-center px-5 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5"
              >
                {t("liveDemo")}
              </a>
            ) : null}
            {project.repositoryUrl ? (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center border border-white/20 px-5 text-sm font-medium text-white/90 transition-colors hover:bg-white/10"
              >
                {t("repository")}
              </a>
            ) : null}
            <a
              href="#gallery"
              className="inline-flex h-11 items-center border border-white/20 px-5 text-sm font-medium text-white/90 transition-colors hover:bg-white/10"
            >
              {t("gallery")}
            </a>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Reveal>
          <section className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.35fr_0.85fr] lg:gap-14">
            <div>
              <p className="text-brand font-mono text-[0.65rem] tracking-[0.18em] uppercase">
                {t("caseStudy").replace(":", "")}
              </p>
              <p className="text-foreground mt-4 text-lg leading-relaxed text-pretty sm:text-xl">
                {project.overview ?? project.summary}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <MetaBlock label={t("role")} value={project.role} />
                {project.client ? (
                  <MetaBlock label={t("client")} value={project.client} />
                ) : null}
              </div>
            </div>

            <aside className="space-y-4">
              {project.metrics && project.metrics.length > 0 ? (
                <dl className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="border-border/70 bg-background-secondary/40 border px-4 py-4"
                    >
                      <dt className="text-muted-foreground font-mono text-[0.62rem] tracking-[0.16em] uppercase">
                        {metric.label}
                      </dt>
                      <dd className="font-display text-foreground mt-2 text-xl font-semibold">
                        {metric.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <div className="border-border/70 bg-background-secondary/40 border p-5">
                  <p className="text-muted-foreground font-mono text-[0.62rem] tracking-[0.16em] uppercase">
                    {t("technologies")}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 8).map((tech) => (
                      <li
                        key={tech}
                        className="border-border/80 text-muted border px-2.5 py-1 font-mono text-[0.7rem]"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </section>
        </Reveal>

        {gallery.length > 0 ? (
          <Reveal className="mt-14" delay={0.04}>
            <section id="gallery" className="scroll-mt-28">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-brand font-mono text-[0.65rem] tracking-[0.18em] uppercase">
                    {t("gallery")}
                  </p>
                  <h2 className="font-display mt-2 text-2xl font-semibold sm:text-3xl">
                    {t("gallery")}
                  </h2>
                </div>
                <p className="text-muted max-w-md text-sm leading-relaxed">
                  {t("galleryLead")}
                </p>
              </div>

              {leadShot ? (
                <figure className="border-border/70 bg-background-secondary group relative mt-8 overflow-hidden border">
                  <div className="relative aspect-[16/9] sm:aspect-[21/9]">
                    <Image
                      src={leadShot.src}
                      alt={leadShot.alt}
                      fill
                      sizes="100vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                  {leadShot.caption ? (
                    <figcaption className="text-muted border-border/60 border-t px-4 py-3 text-sm">
                      {leadShot.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ) : null}

              {restShots.length > 0 ? (
                <Stagger
                  className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
                  delayChildren={0.04}
                >
                  {restShots.map((item) => (
                    <StaggerItem key={item.src}>
                      <figure className="border-border/70 bg-background-secondary group overflow-hidden border">
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                          />
                        </div>
                        {item.caption ? (
                          <figcaption className="text-muted px-3 py-2.5 text-xs sm:text-sm">
                            {item.caption}
                          </figcaption>
                        ) : null}
                      </figure>
                    </StaggerItem>
                  ))}
                </Stagger>
              ) : null}
            </section>
          </Reveal>
        ) : null}

        <Reveal className="mt-14" delay={0.05}>
          <nav
            aria-label={t("caseNav")}
            className="sticky top-16 z-20 -mx-4 flex gap-1 overflow-x-auto border-y border-white/10 bg-[color-mix(in_oklab,var(--background)_88%,transparent)] px-4 py-3 backdrop-blur-xl sm:mx-0 sm:gap-2 sm:px-0"
          >
            {(
              [
                ["context", t("context")],
                ["approach", t("approach")],
                ["documentation", t("documentation")],
                ["outcomes", t("outcomes")],
              ] as const
            ).map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-muted hover:text-foreground hover:bg-background-secondary/80 shrink-0 px-3 py-2 font-mono text-[0.65rem] tracking-[0.14em] uppercase transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
          <aside className="hidden lg:block">
            <div className="sticky top-36 space-y-6">
              <p className="text-muted-foreground font-mono text-[0.62rem] tracking-[0.16em] uppercase">
                {t("technologies")}
              </p>
              <ul className="space-y-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="text-muted border-border/50 border-l pl-3 text-sm"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="border-border/60 space-y-2 border-t pt-6">
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand block text-sm font-medium"
                  >
                    {t("liveDemo")} →
                  </a>
                ) : null}
                <Link
                  href="/lab/docs"
                  className="text-muted hover:text-foreground block text-sm"
                >
                  {t("relatedLab")} →
                </Link>
              </div>
            </div>
          </aside>

          <div className="min-w-0 space-y-16">
            <Reveal>
              <section id="context" className="scroll-mt-32">
                <SectionEyebrow index="01" title={t("context")} />
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <TextPanel label={t("problem")} body={project.problem} />
                  <TextPanel label={t("solution")} body={project.solution} />
                </div>
                {project.objectives && project.objectives.length > 0 ? (
                  <ChipList title={t("objectives")} items={project.objectives} />
                ) : null}
              </section>
            </Reveal>

            <Reveal>
              <section id="approach" className="scroll-mt-32">
                <SectionEyebrow index="02" title={t("approach")} />
                {project.approach ? (
                  <p className="text-muted mt-6 max-w-3xl text-sm leading-relaxed sm:text-base">
                    {project.approach}
                  </p>
                ) : null}
                {project.architectureNotes ? (
                  <div className="border-border/70 bg-background-secondary/35 mt-8 border p-5 sm:p-6">
                    <p className="text-brand font-mono text-[0.62rem] tracking-[0.16em] uppercase">
                      {t("architecture")}
                    </p>
                    <p className="text-muted mt-3 text-sm leading-relaxed">
                      {project.architectureNotes}
                    </p>
                  </div>
                ) : null}
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <NumberedList title={t("features")} items={project.features} />
                  <NumberedList title={t("challenges")} items={project.challenges} />
                </div>
              </section>
            </Reveal>

            {project.documentation.length > 0 ? (
              <Reveal>
                <section id="documentation" className="scroll-mt-32">
                  <SectionEyebrow index="03" title={t("documentation")} />
                  <p className="text-muted mt-4 max-w-2xl text-sm">
                    {t("documentationIntro")}
                  </p>
                  <div className="mt-8 space-y-4">
                    {project.documentation.map((section, i) => (
                      <details
                        key={section.id}
                        id={`doc-${section.id}`}
                        className="border-border/70 bg-background-secondary/30 group open:bg-background-secondary/50 border"
                        open={i === 0}
                      >
                        <summary className="font-display cursor-pointer list-none px-5 py-4 text-base font-semibold marker:content-none sm:text-lg">
                          <span className="flex items-center justify-between gap-4">
                            {section.title}
                            <span className="text-muted-foreground font-mono text-xs transition-transform group-open:rotate-45">
                              +
                            </span>
                          </span>
                        </summary>
                        <div className="text-muted space-y-3 border-t border-white/10 px-5 py-4 text-sm leading-relaxed">
                          {section.paragraphs.map((paragraph) => (
                            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                          ))}
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              </Reveal>
            ) : null}

            <Reveal>
              <section id="outcomes" className="scroll-mt-32">
                <SectionEyebrow index="04" title={t("outcomes")} />
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {project.results.map((item, index) => (
                    <li
                      key={item}
                      className="border-border/70 bg-background-secondary/30 flex gap-4 border p-4"
                    >
                      <span className="text-brand font-mono text-xs">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-foreground/90 text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                {project.lessons && project.lessons.length > 0 ? (
                  <div className="mt-8">
                    <NumberedList title={t("lessons")} items={project.lessons} />
                  </div>
                ) : null}
              </section>
            </Reveal>

            <Reveal>
              <div className="border-border/70 flex flex-wrap gap-3 border-t pt-10">
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-primary-foreground hover:bg-primary-hover inline-flex h-11 items-center justify-center px-5 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    {t("liveDemo")}
                  </a>
                ) : null}
                {project.repositoryUrl ? (
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-border text-foreground hover:bg-background-secondary inline-flex h-11 items-center justify-center border px-5 text-sm font-medium transition-colors"
                  >
                    {t("repository")}
                  </a>
                ) : null}
                <Link
                  href="/projects"
                  className="border-border text-foreground hover:bg-background-secondary inline-flex h-11 items-center justify-center border px-5 text-sm font-medium transition-colors"
                >
                  {t("back")}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </article>
  );
}

function HeroChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center bg-white/10 px-2.5 py-1 font-mono text-[0.62rem] tracking-[0.14em] text-white/85 uppercase ring-1 ring-white/15 backdrop-blur-md">
      {children}
    </span>
  );
}

function MetaBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-border/60 border-l pl-4">
      <p className="text-muted-foreground font-mono text-[0.62rem] tracking-[0.14em] uppercase">
        {label}
      </p>
      <p className="text-foreground/90 mt-2 text-sm leading-relaxed">{value}</p>
    </div>
  );
}

function SectionEyebrow({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="text-brand font-mono text-xs tracking-[0.14em]">{index}</span>
      <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

function TextPanel({ label, body }: { label: string; body: string }) {
  return (
    <div className="border-border/70 bg-background-secondary/30 border p-5 sm:p-6">
      <p className="text-brand font-mono text-[0.62rem] tracking-[0.16em] uppercase">
        {label}
      </p>
      <p className="text-muted mt-3 text-sm leading-relaxed">{body}</p>
    </div>
  );
}

function NumberedList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-display text-lg font-semibold">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item, index) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed">
            <span className="text-muted-foreground font-mono text-[0.65rem]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-muted">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ChipList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-8">
      <h3 className="font-display text-lg font-semibold">{title}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="border-border/80 bg-background-secondary/40 text-muted max-w-full border px-3 py-2 text-xs leading-snug sm:text-sm"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
