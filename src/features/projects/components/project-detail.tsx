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

  return (
    <article>
      <div className="border-border relative isolate min-h-[min(52vh,28rem)] overflow-hidden border-b">
        <motion.div
          className="absolute inset-0"
          initial={reduceMotion ? false : { scale: 1.06, opacity: 0.85 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: reduceMotion ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={project.media.cover}
            alt={project.media.coverAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#0F172A]/75 to-[#0F172A]/30"
        />
        <motion.div
          className="relative mx-auto flex min-h-[min(52vh,28rem)] w-full max-w-5xl flex-col justify-end px-4 pt-24 pb-12 sm:px-6"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            delay: reduceMotion ? 0 : 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Link
            href="/projects"
            className="mb-6 w-fit text-sm text-white/70 transition-colors hover:text-white"
          >
            {t("back")}
          </Link>
          <p className="text-brand font-mono text-xs tracking-[0.18em] uppercase">
            {project.productType} · {project.year} · {project.status}
            {project.caseStudyId ? ` · ${project.caseStudyId}` : ""}
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl md:text-6xl">
            {project.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">{project.tagline}</p>
        </motion.div>
      </div>

      <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <Reveal>
          <div className="border-border grid gap-10 border-b pb-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-muted text-base leading-relaxed sm:text-lg">
                {project.overview ?? project.summary}
              </p>
              <p className="text-foreground mt-5 text-sm">
                <span className="font-medium">{t("role")}</span> {project.role}
              </p>
              {project.client ? (
                <p className="text-muted mt-2 text-sm">
                  <span className="text-foreground font-medium">{t("client")}</span>{" "}
                  {project.client}
                </p>
              ) : null}
            </div>

            {project.metrics && project.metrics.length > 0 ? (
              <dl className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="border-border border-l pl-4">
                    <dt className="text-muted-foreground font-mono text-xs tracking-[0.14em] uppercase">
                      {metric.label}
                    </dt>
                    <dd className="font-display text-foreground mt-2 text-lg font-semibold">
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </div>
        </Reveal>

        {project.media.gallery.length > 0 ? (
          <Reveal className="mt-12" delay={0.05}>
            <section id="gallery">
              <h2 className="font-display text-xl font-semibold">{t("gallery")}</h2>
              <Stagger className="mt-6 grid gap-6 sm:grid-cols-2" delayChildren={0.07}>
                {project.media.gallery.map((item) => (
                  <StaggerItem key={item.src}>
                    <figure>
                      <div className="border-border bg-background-secondary relative aspect-[16/10] overflow-hidden border">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                        />
                      </div>
                      {item.caption ? (
                        <figcaption className="text-muted mt-3 text-sm">
                          {item.caption}
                        </figcaption>
                      ) : null}
                    </figure>
                  </StaggerItem>
                ))}
              </Stagger>
            </section>
          </Reveal>
        ) : null}

        <Reveal className="mt-12" delay={0.08}>
          <nav
            aria-label={t("caseNav")}
            className="border-border flex flex-wrap gap-2 border-y py-4"
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
                className="text-muted hover:text-brand px-3 py-1.5 font-mono text-xs tracking-[0.12em] uppercase transition-colors duration-300"
              >
                {label}
              </a>
            ))}
          </nav>
        </Reveal>

        <Reveal className="mt-12 scroll-mt-28" delay={0.05}>
          <section id="context">
            <h2 className="font-display text-2xl font-semibold">{t("context")}</h2>
            <div className="text-muted mt-5 space-y-4 text-sm leading-relaxed">
              <p>
                <span className="text-foreground font-medium">{t("problem")} — </span>
                {project.problem}
              </p>
              <p>
                <span className="text-foreground font-medium">{t("solution")} — </span>
                {project.solution}
              </p>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="border-border text-muted hover:border-brand hover:text-foreground border px-3 py-1 font-mono text-xs transition-colors"
                >
                  {tech}
                </li>
              ))}
            </ul>
            {project.objectives && project.objectives.length > 0 ? (
              <ListSection title={t("objectives")} items={project.objectives} />
            ) : null}
          </section>
        </Reveal>

        <Reveal className="mt-14 scroll-mt-28">
          <section id="approach">
            <h2 className="font-display text-2xl font-semibold">{t("approach")}</h2>
            {project.approach ? (
              <p className="text-muted mt-4 text-sm leading-relaxed">
                {project.approach}
              </p>
            ) : null}
            {project.architectureNotes ? (
              <div className="mt-8">
                <h3 className="font-display text-lg font-semibold">
                  {t("architecture")}
                </h3>
                <p className="text-muted mt-3 text-sm leading-relaxed">
                  {project.architectureNotes}
                </p>
              </div>
            ) : null}
            <ListSection title={t("features")} items={project.features} />
            <ListSection title={t("challenges")} items={project.challenges} />
          </section>
        </Reveal>

        {project.documentation.length > 0 ? (
          <Reveal className="mt-14 scroll-mt-28">
            <section id="documentation">
              <h2 className="font-display text-2xl font-semibold">
                {t("documentation")}
              </h2>
              <p className="text-muted mt-3 max-w-2xl text-sm">
                {t("documentationIntro")}
              </p>
              <div className="mt-8 space-y-10">
                {project.documentation.map((section) => (
                  <div key={section.id} id={`doc-${section.id}`} className="scroll-mt-28">
                    <h3 className="font-display text-lg font-semibold">
                      {section.title}
                    </h3>
                    <div className="text-muted mt-3 space-y-3 text-sm leading-relaxed">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
        ) : null}

        <Reveal className="mt-14 scroll-mt-28">
          <section id="outcomes">
            <h2 className="font-display text-2xl font-semibold">{t("outcomes")}</h2>
            <ul className="text-muted mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed">
              {project.results.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {project.lessons && project.lessons.length > 0 ? (
              <ListSection title={t("lessons")} items={project.lessons} />
            ) : null}
          </section>
        </Reveal>

        <Reveal className="mt-14">
          <div className="border-border flex flex-wrap gap-3 border-t pt-10">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground hover:bg-primary-hover inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5"
              >
                {t("liveDemo")}
              </a>
            ) : null}
            {project.repositoryUrl ? (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border text-foreground hover:bg-background-secondary inline-flex h-11 items-center justify-center rounded-md border px-5 text-sm font-medium transition-colors"
              >
                {t("repository")}
              </a>
            ) : null}
            <Link
              href="/lab/docs"
              className="border-border text-foreground hover:bg-background-secondary inline-flex h-11 items-center justify-center rounded-md border px-5 text-sm font-medium transition-colors"
            >
              {t("relatedLab")}
            </Link>
          </div>
        </Reveal>
      </div>
    </article>
  );
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-8">
      <h3 className="font-display text-lg font-semibold">{title}</h3>
      <ul className="text-muted mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
