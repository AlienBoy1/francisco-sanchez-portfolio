import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getDocDomains } from "@/content/engineering-docs";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "docs" });
  return { title: t("eyebrow"), description: t("intro") };
}

export default async function DocsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("docs");
  const domains = getDocDomains(locale as Locale);

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-brand font-mono text-xs tracking-[0.18em] uppercase">
        {t("eyebrow")}
      </p>
      <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight">
        {t("title")}
      </h1>
      <p className="text-muted mt-4 max-w-2xl text-sm">{t("intro")}</p>

      <div className="mt-12 space-y-10">
        {domains.map((domain) => (
          <section key={domain.id} className="border-border border-t pt-8">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="font-display text-2xl font-semibold">{domain.title}</h2>
              <span className="text-muted-foreground font-mono text-xs">
                {domain.path}
              </span>
            </div>
            <p className="text-muted mt-2 text-sm">{domain.description}</p>
            <ul className="mt-5 space-y-2">
              {domain.documents.map((doc) => (
                <li
                  key={doc.id}
                  className="border-border-subtle grid gap-1 border-b py-2 sm:grid-cols-[7rem_1fr]"
                >
                  <span className="text-brand font-mono text-xs">{doc.id}</span>
                  <span className="text-foreground text-sm">{doc.title}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
