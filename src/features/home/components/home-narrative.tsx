"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { ButtonLink } from "@/shared/ui/button-link";
import {
  getAboutContent,
  getExperienceContent,
  getSkillsContent,
} from "@/content/profile";
import { getFeaturedProjects } from "@/content/projects";
import type { Locale } from "@/i18n/routing";

const processSteps = ["discover", "architect", "deliver", "document"] as const;

export function HomeNarrative() {
  const t = useTranslations("home");
  const locale = useLocale() as Locale;
  const reduceMotion = useReducedMotion();
  const about = getAboutContent(locale);
  const experience = getExperienceContent(locale);
  const skills = getSkillsContent(locale);
  const featured = getFeaturedProjects(locale);
  const recentRole = experience.roles[0];
  const stackPreview = skills.groups
    .flatMap((group) => group.items)
    .slice(0, 6)
    .join(" · ");

  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-brand font-mono text-xs tracking-[0.18em] uppercase">
            {t("positioningEyebrow")}
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {t("positioningTitle")}
          </h2>
          <p className="text-muted mt-4 text-base leading-relaxed sm:text-lg">
            {t("positioningBody")}
          </p>
        </motion.div>
      </section>

      <section className="border-border-subtle bg-background-secondary/40 border-y">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-end justify-between gap-4"
          >
            <div className="max-w-2xl">
              <p className="text-brand font-mono text-xs tracking-[0.18em] uppercase">
                {t("workEyebrow")}
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                {t("workTitle")}
              </h2>
              <p className="text-muted mt-3 text-sm sm:text-base">{t("workIntro")}</p>
            </div>
            <Link
              href="/projects"
              className="text-brand text-sm font-medium underline-offset-4 hover:underline"
            >
              {t("workAll")}
            </Link>
          </motion.div>

          <ul className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {featured.map((project, index) => (
              <motion.li
                key={project.slug}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.4,
                  delay: reduceMotion ? 0 : index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link href={`/projects/${project.slug}`} className="group block">
                  <div className="border-border bg-background-secondary relative aspect-[16/10] overflow-hidden border">
                    <Image
                      src={project.media.cover}
                      alt={project.media.coverAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      priority={index === 0}
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-[#020617]/45 via-transparent to-transparent"
                    />
                  </div>
                  <h3 className="font-display group-hover:text-brand mt-4 text-xl font-semibold tracking-tight">
                    {project.name}
                  </h3>
                  <p className="text-foreground/90 mt-2 text-sm">{project.tagline}</p>
                  <p className="text-muted mt-3 text-sm leading-relaxed">
                    <span className="text-foreground font-medium">
                      {t("workOutcome")}{" "}
                    </span>
                    {project.results[0]}
                  </p>
                  <span className="text-brand mt-4 inline-flex text-sm font-medium underline-offset-4 group-hover:underline">
                    {t("workView")}
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="text-brand font-mono text-xs tracking-[0.18em] uppercase">
            {t("processEyebrow")}
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {t("processTitle")}
          </h2>
          <p className="text-muted mt-3 text-sm sm:text-base">{t("processIntro")}</p>
        </motion.div>

        <ol className="border-border mt-12 grid gap-10 border-t pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <motion.li
              key={step}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: reduceMotion ? 0 : 0.4,
                delay: reduceMotion ? 0 : index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="text-brand font-mono text-xs">0{index + 1}</p>
              <h3 className="font-display mt-3 text-xl font-semibold">
                {t(`process.${step}.title`)}
              </h3>
              <p className="text-muted mt-3 text-sm leading-relaxed">
                {t(`process.${step}.body`)}
              </p>
            </motion.li>
          ))}
        </ol>
      </section>

      <section className="border-border-subtle border-y">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-brand font-mono text-xs tracking-[0.18em] uppercase">
              {t("proofEyebrow")}
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-balance">
              {t("proofTitle")}
            </h2>
            {recentRole ? (
              <div className="mt-6">
                <p className="text-muted-foreground font-mono text-xs">
                  {recentRole.period}
                </p>
                <p className="font-display mt-2 text-xl font-semibold">
                  {recentRole.title}
                </p>
                <p className="text-brand mt-1 text-sm">{recentRole.organization}</p>
                <p className="text-muted mt-3 text-sm leading-relaxed">
                  {recentRole.summary}
                </p>
              </div>
            ) : null}
            <Link
              href="/about#experience"
              className="text-brand mt-6 inline-flex text-sm font-medium underline-offset-4 hover:underline"
            >
              {t("proofAbout")}
            </Link>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: reduceMotion ? 0 : 0.45,
              delay: reduceMotion ? 0 : 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="border-border border-t pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10"
          >
            <p className="text-muted-foreground font-mono text-xs tracking-[0.18em] uppercase">
              {t("proofStack")}
            </p>
            <p className="text-foreground mt-4 font-mono text-sm leading-relaxed">
              {stackPreview}
            </p>
            <p className="text-muted mt-6 text-sm leading-relaxed">
              {about.introduction}
            </p>
            <Link
              href="/about#skills"
              className="text-brand mt-6 inline-flex text-sm font-medium underline-offset-4 hover:underline"
            >
              {t("proofSkills")}
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="text-brand font-mono text-xs tracking-[0.18em] uppercase">
            {t("ctaEyebrow")}
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {t("ctaTitle")}
          </h2>
          <p className="text-muted mt-4 text-sm sm:text-base">{t("ctaBody")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact" size="lg">
              {t("ctaContact")}
            </ButtonLink>
            <ButtonLink href="/resume" variant="secondary" size="lg">
              {t("ctaResume")}
            </ButtonLink>
            <ButtonLink href="/lab" variant="ghost" size="lg">
              {t("ctaLab")}
            </ButtonLink>
          </div>
        </motion.div>
      </section>
    </>
  );
}
