import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ResumeView } from "@/features/resume/components/resume-view";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "resume" });
  return { title: t("eyebrow") };
}

export default async function ResumePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ResumeView locale={locale as Locale} />;
}
