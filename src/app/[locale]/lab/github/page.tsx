import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getGithubProfile, getGithubRepos } from "@/content/github";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "github" });
  return { title: t("eyebrow"), description: t("intro") };
}

export default async function GithubPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("github");
  const profile = getGithubProfile();
  const repos = getGithubRepos(locale as Locale);

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-brand font-mono text-xs tracking-[0.18em] uppercase">
        {t("eyebrow")}
      </p>
      <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight">
        {t("title")}
      </h1>
      <p className="text-muted mt-4 max-w-2xl text-sm">{t("intro")}</p>

      <a
        href={profile.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand mt-6 inline-flex text-sm font-medium hover:underline"
      >
        @{profile.username} · {t("profile")}
      </a>

      <ul className="divide-border border-border mt-12 divide-y border-t">
        {repos.map((repo) => (
          <li key={repo.name} className="py-8">
            <h2 className="font-display text-2xl font-semibold">{repo.name}</h2>
            <p className="text-muted mt-3 max-w-2xl text-sm">{repo.description}</p>
            <p className="text-muted-foreground mt-3 font-mono text-xs">
              {repo.topics.join(" · ")}
            </p>
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand mt-4 inline-flex text-sm font-medium hover:underline"
            >
              {t("viewRepo")}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
