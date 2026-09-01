"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LocaleSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className="border-border inline-flex items-center gap-1 rounded-md border px-1 py-0.5"
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((item) => (
        <button
          key={item}
          type="button"
          className={cn(
            "rounded px-2 py-1 font-mono text-xs transition-colors",
            item === locale
              ? "bg-background-secondary text-foreground"
              : "text-muted hover:text-foreground",
          )}
          aria-pressed={item === locale}
          onClick={() => router.replace(pathname, { locale: item })}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
