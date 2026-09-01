import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "@/infrastructure/theme/theme-provider";
import { SiteHeader } from "@/features/navigation/components/site-header";
import { SiteFooter } from "@/features/navigation/components/site-footer";
import { siteConfig } from "@/design-system/tokens";
import { routing } from "@/i18n/routing";
import { PageTransition } from "@/shared/ui/page-transition";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: t("titleDefault"),
      template: t("titleTemplate"),
    },
    description: t("description"),
    openGraph: {
      title: t("titleDefault"),
      description: t("description"),
      type: "website",
      locale: locale === "es" ? "es_MX" : "en_US",
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: t("titleDefault"),
      description: t("description"),
    },
    alternates: {
      languages: {
        en: "/en",
        es: "/es",
      },
    },
    icons: {
      icon: [
        { url: "/favicon.webp", type: "image/webp" },
        { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <a
          href="#main-content"
          className="bg-primary text-primary-foreground sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <SiteFooter />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
