import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getArchitectureContent } from "@/content/architecture";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "architecture" });
  return { title: t("eyebrow"), description: t("intro") };
}

export default async function ArchitecturePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("architecture");
  const content = getArchitectureContent(locale as Locale);

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-brand font-mono text-xs tracking-[0.18em] uppercase">
        {t("eyebrow")}
      </p>
      <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight">
        {t("title")}
      </h1>
      <p className="text-muted mt-4 max-w-2xl text-sm">{t("intro")}</p>

      <section className="border-border mt-12 border-t pt-8">
        <h2 className="font-display text-2xl font-semibold">{t("layers")}</h2>
        <ol className="mt-6 space-y-4">
          {content.layers.map((layer, index) => (
            <li key={layer.name} className="grid gap-1 sm:grid-cols-[2rem_1fr]">
              <span className="text-brand font-mono text-sm">{index + 1}</span>
              <div>
                <h3 className="text-foreground font-medium">{layer.name}</h3>
                <p className="text-muted mt-1 text-sm">{layer.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-border mt-12 border-t pt-8">
        <h2 className="font-display text-2xl font-semibold">{t("frontend")}</h2>
        <ul className="mt-6 space-y-4">
          {content.modules.map((module) => (
            <li key={module.name} className="grid gap-1 sm:grid-cols-[14rem_1fr]">
              <span className="text-foreground font-mono text-xs">{module.name}</span>
              <span className="text-muted text-sm">{module.description}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-border mt-12 border-t pt-8">
        <h2 className="font-display text-2xl font-semibold">{t("routing")}</h2>
        <ul className="mt-6 space-y-3">
          {content.routes.map((route) => (
            <li key={route.path} className="grid gap-1 sm:grid-cols-[12rem_1fr]">
              <span className="text-brand font-mono text-xs">{route.path}</span>
              <span className="text-muted text-sm">{route.purpose}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
