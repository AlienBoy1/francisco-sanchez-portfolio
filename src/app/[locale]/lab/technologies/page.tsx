import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getTechnologyCatalog } from "@/content/technologies";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "technologies" });
  return { title: t("eyebrow"), description: t("intro") };
}

export default async function TechnologiesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("technologies");
  const catalog = getTechnologyCatalog(locale as Locale);

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-brand font-mono text-xs tracking-[0.18em] uppercase">
        {t("eyebrow")}
      </p>
      <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight">
        {t("title")}
      </h1>
      <p className="text-muted mt-4 max-w-2xl text-sm">{t("intro")}</p>

      <div className="mt-12 space-y-12">
        {catalog.map((group) => (
          <section key={group.id} className="border-border border-t pt-8">
            <h2 className="font-display text-2xl font-semibold">{group.title}</h2>
            <p className="text-muted mt-2 text-sm">{group.description}</p>
            <ul className="mt-6 space-y-4">
              {group.items.map((item) => (
                <li key={item.name} className="grid gap-1 sm:grid-cols-[12rem_1fr]">
                  <span className="text-foreground font-mono text-sm">{item.name}</span>
                  <span className="text-muted text-sm">{item.note}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
