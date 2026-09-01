"use client";

import { useTheme } from "@/infrastructure/theme/theme-provider";
import { useTranslations } from "next-intl";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => undefined;

export function ThemeToggle() {
  const t = useTranslations("theme");
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <Button
        type="button"
        variant="ghost"
        size="sm"
        aria-label={t("toggle")}
        className="h-9 w-9 px-0"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      aria-label={isDark ? t("toLight") : t("toDark")}
      className="h-9 w-9 px-0"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}
