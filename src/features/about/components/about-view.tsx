"use client";

import { Reveal, Stagger, StaggerItem } from "@/shared/ui/motion";
import { ButtonLink } from "@/shared/ui/button-link";
import type { AboutContent, ExperienceContent, SkillsContent } from "@/content/profile";

type Labels = {
  eyebrow: string;
  philosophy: string;
  expertise: string;
  values: string;
  ctaResume: string;
  ctaContact: string;
  ctaProjects: string;
  experienceEyebrow: string;
  experienceTitle: string;
  experienceIntro: string;
  skillsEyebrow: string;
  skillsTitle: string;
  skillsIntro: string;
};

export function AboutView({
  about,
  experience,
  skills,
  labels,
}: {
  about: AboutContent;
  experience: ExperienceContent;
  skills: SkillsContent;
  labels: Labels;
}) {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <Reveal>
        <p className="text-brand font-mono text-xs tracking-[0.18em] uppercase">
          {labels.eyebrow}
        </p>
        <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {about.headline}
        </h1>
        <p className="text-muted mt-6 text-lg">{about.introduction}</p>
        <p className="text-muted mt-4 text-sm leading-relaxed">{about.summary}</p>
      </Reveal>

      <Reveal className="mt-12" id="philosophy" delay={0.05}>
        <h2 className="font-display text-xl font-semibold">{labels.philosophy}</h2>
        <p className="text-muted mt-3 text-sm leading-relaxed">{about.philosophy}</p>
      </Reveal>

      <Reveal className="mt-12" id="expertise" delay={0.08}>
        <h2 className="font-display text-xl font-semibold">{labels.expertise}</h2>
        <ul className="text-muted mt-4 list-disc space-y-2 pl-5 text-sm">
          {about.expertise.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-12" id="values">
        <h2 className="font-display text-xl font-semibold">{labels.values}</h2>
        <ul className="text-muted mt-4 list-disc space-y-2 pl-5 text-sm">
          {about.values.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="border-border mt-16 scroll-mt-24 border-t pt-12" id="experience">
        <p className="text-brand font-mono text-xs tracking-[0.18em] uppercase">
          {labels.experienceEyebrow}
        </p>
        <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight">
          {labels.experienceTitle}
        </h2>
        <p className="text-muted mt-3 max-w-2xl text-sm">{labels.experienceIntro}</p>

        <Stagger
          className="border-border mt-10 space-y-10 border-l pl-6"
          delayChildren={0.08}
        >
          {experience.roles.map((role) => (
            <StaggerItem key={role.id} className="relative">
              <span
                aria-hidden
                className="bg-brand absolute top-1.5 -left-[1.91rem] h-2.5 w-2.5 rounded-full"
              />
              <p className="text-muted-foreground font-mono text-xs">{role.period}</p>
              <h3 className="font-display mt-2 text-2xl font-semibold">{role.title}</h3>
              <p className="text-brand mt-1 text-sm">{role.organization}</p>
              <p className="text-muted mt-3 text-sm leading-relaxed">{role.summary}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Reveal>

      <Reveal className="border-border mt-16 scroll-mt-24 border-t pt-12" id="skills">
        <p className="text-brand font-mono text-xs tracking-[0.18em] uppercase">
          {labels.skillsEyebrow}
        </p>
        <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight">
          {labels.skillsTitle}
        </h2>
        <p className="text-muted mt-3 max-w-2xl text-sm">{labels.skillsIntro}</p>

        <Stagger className="mt-10 grid gap-10 sm:grid-cols-2" delayChildren={0.06}>
          {skills.groups.map((group) => (
            <StaggerItem key={group.title}>
              <h3 className="font-display text-xl font-semibold">{group.title}</h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-border-subtle text-muted hover:text-foreground border-b py-2 text-sm transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </Reveal>

      <Reveal className="mt-12 flex flex-wrap gap-3">
        <ButtonLink href="/resume">{labels.ctaResume}</ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          {labels.ctaContact}
        </ButtonLink>
        <ButtonLink href="/projects" variant="ghost">
          {labels.ctaProjects}
        </ButtonLink>
      </Reveal>
    </div>
  );
}
