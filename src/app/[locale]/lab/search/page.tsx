import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SearchPanel } from "@/features/search/components/search-panel";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "search" });
  return { title: t("eyebrow"), description: t("intro") };
}

export default async function SearchPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <SearchPanel />;
}
