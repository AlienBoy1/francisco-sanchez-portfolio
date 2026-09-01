"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";

type Theme = "light" | "dark" | "system";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark" | undefined;
  themes: Theme[];
  systemTheme: "light" | "dark" | undefined;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
const STORAGE_KEY = "theme";

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function readStoredTheme(): Theme {
  try {
    return (localStorage.getItem(STORAGE_KEY) as Theme | null) ?? "dark";
  } catch {
    return "dark";
  }
}

function applyTheme(resolved: "light" | "dark") {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(resolved);
  root.style.colorScheme = resolved;
}

function subscribeTheme(onStoreChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) onStoreChange();
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener("theme-change", onStoreChange);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener("theme-change", onStoreChange);
  };
}

function subscribeSystem(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

export function ThemeProvider({
  children,
  enableSystem = true,
}: {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: Theme;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}) {
  const theme = useSyncExternalStore(
    subscribeTheme,
    readStoredTheme,
    () => "dark" as Theme,
  );
  const systemTheme = useSyncExternalStore(
    subscribeSystem,
    getSystemTheme,
    () => "dark" as const,
  );
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  const resolvedTheme: "light" | "dark" =
    theme === "system" && enableSystem
      ? systemTheme
      : theme === "light"
        ? "light"
        : "dark";

  useEffect(() => {
    if (!mounted) return;
    applyTheme(resolvedTheme);
  }, [mounted, resolvedTheme]);

  const setTheme = useCallback((next: Theme) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
    window.dispatchEvent(new Event("theme-change"));
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      setTheme,
      resolvedTheme: mounted ? resolvedTheme : undefined,
      themes: enableSystem ? ["light", "dark", "system"] : ["light", "dark"],
      systemTheme,
    }),
    [theme, setTheme, mounted, resolvedTheme, enableSystem, systemTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    return {
      theme: "dark" as Theme,
      setTheme: () => undefined,
      resolvedTheme: undefined,
      themes: ["light", "dark", "system"] as Theme[],
      systemTheme: undefined,
    };
  }
  return ctx;
}
