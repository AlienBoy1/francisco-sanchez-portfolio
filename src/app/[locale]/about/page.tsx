import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  getAboutContent,
  getExperienceContent,
  getSkillsContent,
} from "@/content/profile";
import { AboutView } from "@/features/about/components/about-view";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: t("eyebrow"), description: t("metaDescription") };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const tExp = await getTranslations("experience");
  const tSkills = await getTranslations("skills");
  const about = getAboutContent(locale as Locale);
  const experience = getExperienceContent(locale as Locale);
  const skills = getSkillsContent(locale as Locale);

  return (
    <AboutView
      about={about}
      experience={experience}
      skills={skills}
      labels={{
        eyebrow: t("eyebrow"),
        philosophy: t("philosophy"),
        expertise: t("expertise"),
        values: t("values"),
        ctaResume: t("ctaResume"),
        ctaContact: t("ctaContact"),
        ctaProjects: t("ctaProjects"),
        experienceEyebrow: tExp("eyebrow"),
        experienceTitle: tExp("title"),
        experienceIntro: tExp("intro"),
        skillsEyebrow: tSkills("eyebrow"),
        skillsTitle: tSkills("title"),
        skillsIntro: tSkills("intro"),
      }}
    />
  );
}
