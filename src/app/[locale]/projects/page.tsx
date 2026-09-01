import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getProjects } from "@/content/projects";
import { ProjectsPageView } from "@/features/projects/components/projects-page-view";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects" });
  return { title: t("eyebrow"), description: t("intro") };
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("projects");
  const projects = getProjects(locale as Locale);

  return (
    <ProjectsPageView
      projects={projects}
      eyebrow={t("eyebrow")}
      title={t("title")}
      intro={t("intro")}
      viewLabel={t("view")}
      outcomeLabel={t("outcomeLabel")}
      featuredLabel={t("featured")}
      liveDemoLabel={t("liveDemo")}
    />
  );
}
