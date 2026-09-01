import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getFeatureRegistry } from "@/content/features";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "features" });
  return { title: t("eyebrow"), description: t("intro") };
}

export default async function FeaturesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("features");
  const features = getFeatureRegistry(locale as Locale);

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
        <table className="w-full min-w-[40rem] text-left text-sm">
          <thead>
            <tr className="border-border text-muted border-b">
              <th className="py-3 pr-4 font-medium">ID</th>
              <th className="py-3 pr-4 font-medium">{t("category")}</th>
              <th className="py-3 pr-4 font-medium">Feature</th>
              <th className="py-3 pr-4 font-medium">{t("priority")}</th>
              <th className="py-3 font-medium">{t("status")}</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature) => (
              <tr key={feature.id} className="border-border-subtle border-b">
                <td className="text-brand py-3 pr-4 font-mono text-xs">{feature.id}</td>
                <td className="text-muted py-3 pr-4">{feature.category}</td>
                <td className="py-3 pr-4">
                  {feature.route ? (
                    <Link href={feature.route as "/"} className="hover:text-brand">
                      {feature.name}
                    </Link>
                  ) : (
                    feature.name
                  )}
                </td>
                <td className="text-muted py-3 pr-4">{feature.priority}</td>
                <td className="text-muted py-3">{feature.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
