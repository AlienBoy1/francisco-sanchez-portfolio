import { setRequestLocale } from "next-intl/server";
import { HomeHero } from "@/features/home/components/home-hero";
import { HomeNarrative } from "@/features/home/components/home-narrative";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HomeHero />
      <HomeNarrative />
    </>
  );
}
