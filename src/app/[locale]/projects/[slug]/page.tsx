import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getAllProjectSlugs, getProjectBySlug } from "@/content/projects";
import { ProjectDetail } from "@/features/projects/components/project-detail";
import { routing, type Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getAllProjectSlugs().map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(locale as Locale, slug);
  if (!project) return { title: "Project" };
  return { title: project.name, description: project.summary };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const project = getProjectBySlug(locale as Locale, slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
