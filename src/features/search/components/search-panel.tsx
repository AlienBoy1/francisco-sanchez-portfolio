"use client";

import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { searchPortfolio } from "@/content/search";
import type { Locale } from "@/i18n/routing";

export function SearchPanel() {
  const t = useTranslations("search");
  const locale = useLocale() as Locale;
  const [query, setQuery] = useState("");

  const results = useMemo(() => searchPortfolio(locale, query), [locale, query]);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-brand font-mono text-xs tracking-[0.18em] uppercase">
        {t("eyebrow")}
      </p>
      <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight">
        {t("title")}
      </h1>
      <p className="text-muted mt-4 text-sm">{t("intro")}</p>

      <label htmlFor="portfolio-search" className="sr-only">
        {t("placeholder")}
      </label>
      <input
        id="portfolio-search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={t("placeholder")}
        className="border-border bg-surface ring-ring mt-8 h-12 w-full rounded-md border px-4 text-sm outline-none focus-visible:ring-2"
      />
      <p className="text-muted-foreground mt-2 text-xs">{t("hint")}</p>

      <ul className="mt-10 space-y-4">
        {results.length === 0 ? (
          <li className="text-muted text-sm">{t("empty")}</li>
        ) : (
          results.map((item) => (
            <li key={item.id} className="border-border-subtle border-b pb-4">
              <p className="text-brand font-mono text-xs">{item.type}</p>
              <Link
                href={item.href as "/"}
                className="font-display text-foreground hover:text-brand mt-1 block text-xl font-semibold"
              >
                {item.title}
              </Link>
              <p className="text-muted mt-2 text-sm">{item.description}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
