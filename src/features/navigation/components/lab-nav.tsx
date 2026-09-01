"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { labNav } from "@/features/navigation/data/nav";

export function LabNav() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  return (
    <nav
      aria-label={t("lab")}
      className="border-border mb-10 flex flex-wrap gap-x-1 gap-y-2 border-b pb-4"
    >
      <Link
        href="/lab"
        className={cn(
          "px-2.5 py-1.5 text-sm transition-colors",
          pathname === "/lab" ? "text-foreground" : "text-muted hover:text-foreground",
        )}
      >
        {t("lab")}
      </Link>
      {labNav.map((item) => {
        const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "px-2.5 py-1.5 text-sm transition-colors",
              active ? "text-foreground" : "text-muted hover:text-foreground",
            )}
          >
            {t(item.key)}
          </Link>
        );
      })}
    </nav>
  );
}
