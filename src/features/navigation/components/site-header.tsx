"use client";

import { useEffect, useId, useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/design-system/brand/logo";
import { primaryNav } from "@/features/navigation/data/nav";
import { ThemeToggle } from "@/features/navigation/components/theme-toggle";
import { LocaleSwitcher } from "@/features/navigation/components/locale-switcher";
import { Button } from "@/shared/ui/button";

export function SiteHeader() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="border-border-subtle bg-background/80 sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link
          href="/"
          onClick={closeMenu}
          className="shrink-0 transition-opacity hover:opacity-90"
          aria-label="Francisco Sánchez — Home"
        >
          <BrandLogo compact />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label={t("primary")}>
          {primaryNav.map((item) => {
            const active =
              item.href === "/lab"
                ? pathname === "/lab" || pathname.startsWith("/lab/")
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-2.5 py-2 text-sm transition-colors",
                  active ? "text-foreground" : "text-muted hover:text-foreground",
                )}
              >
                {t(item.key)}
                {active ? (
                  <motion.span
                    layoutId={reduceMotion ? undefined : "nav-underline"}
                    className="bg-brand absolute inset-x-2.5 -bottom-0.5 h-px"
                    transition={{
                      duration: reduceMotion ? 0 : 0.28,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                ) : null}
              </Link>
            );
          })}
          <div className="ml-2 flex items-center gap-1">
            <LocaleSwitcher />
            <ThemeToggle />
          </div>
        </nav>

        <div className="flex items-center gap-1 lg:hidden">
          <LocaleSwitcher />
          <ThemeToggle />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-9 w-9 px-0"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? t("closeMenu") : t("openMenu")}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id={menuId}
            aria-label={t("mobile")}
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="border-border-subtle max-h-[80dvh] overflow-y-auto border-t lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {primaryNav.map((item) => {
                const active =
                  item.href === "/lab"
                    ? pathname === "/lab" || pathname.startsWith("/lab/")
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={cn(
                        "block rounded-md px-3 py-3 text-base",
                        active
                          ? "bg-background-secondary text-foreground"
                          : "text-muted hover:bg-background-secondary hover:text-foreground",
                      )}
                    >
                      {t(item.key)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
