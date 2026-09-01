import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "analytics" });
  return { title: t("eyebrow"), description: t("intro") };
}

export default async function AnalyticsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("analytics");

  const targets = [
    { label: "Performance", value: "≥ 95" },
    { label: "Accessibility", value: "100" },
    { label: "Best Practices", value: "100" },
    { label: "SEO", value: "100" },
  ];

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-brand font-mono text-xs tracking-[0.18em] uppercase">
        {t("eyebrow")}
      </p>
      <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight">
        {t("title")}
      </h1>
      <p className="text-muted mt-4 text-sm">{t("intro")}</p>
      <p className="text-muted mt-4 text-sm">{t("privacy")}</p>

      <section className="border-border mt-12 border-t pt-8">
        <h2 className="font-display text-2xl font-semibold">{t("targets")}</h2>
        <ul className="mt-6 space-y-3">
          {targets.map((target) => (
            <li
              key={target.label}
              className="border-border-subtle flex items-baseline justify-between border-b py-3"
            >
              <span className="text-foreground text-sm">{target.label}</span>
              <span className="text-brand font-mono text-sm">{target.value}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
