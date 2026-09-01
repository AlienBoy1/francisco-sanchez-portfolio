import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getTraceabilityMatrix } from "@/content/traceability";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "traceability" });
  return { title: t("eyebrow"), description: t("intro") };
}

export default async function TraceabilityPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("traceability");
  const rows = getTraceabilityMatrix(locale as Locale);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-brand font-mono text-xs tracking-[0.18em] uppercase">
        {t("eyebrow")}
      </p>
      <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight">
        {t("title")}
      </h1>
      <p className="text-muted mt-4 max-w-2xl text-sm">{t("intro")}</p>

      <div className="border-border mt-10 overflow-x-auto border-t">
        <table className="w-full min-w-[48rem] text-left text-sm">
          <thead>
            <tr className="border-border text-muted border-b">
              <th className="py-3 pr-4 font-medium">{t("feature")}</th>
              <th className="py-3 pr-4 font-medium">{t("route")}</th>
              <th className="py-3 pr-4 font-medium">{t("content")}</th>
              <th className="py-3 font-medium">{t("docs")}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.featureId} className="border-border-subtle border-b align-top">
                <td className="py-3 pr-4">
                  <p className="text-brand font-mono text-xs">{row.featureId}</p>
                  <p className="text-foreground mt-1">{row.featureName}</p>
                </td>
                <td className="py-3 pr-4">
                  <Link
                    href={row.route as "/"}
                    className="hover:text-brand font-mono text-xs"
                  >
                    {row.route}
                  </Link>
                </td>
                <td className="text-muted py-3 pr-4">{row.content}</td>
                <td className="text-muted py-3">{row.docs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
