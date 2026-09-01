import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { labNav } from "@/features/navigation/data/nav";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "lab" });
  return { title: t("eyebrow"), description: t("intro") };
}

export default async function LabHubPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("lab");
  const tNav = await getTranslations("nav");

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-brand font-mono text-xs tracking-[0.18em] uppercase">
        {t("eyebrow")}
      </p>
      <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight">
        {t("title")}
      </h1>
      <p className="text-muted mt-4 max-w-2xl text-sm">{t("intro")}</p>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        {labNav.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="border-border hover:border-brand hover:text-brand block border px-5 py-6 transition-colors"
            >
              <span className="font-display text-xl font-semibold">{tNav(item.key)}</span>
              <p className="text-muted mt-2 text-sm">{t(`blurb.${item.key}`)}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
