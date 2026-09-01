import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { BrandLogo } from "@/design-system/brand/logo";
import { siteConfig } from "@/design-system/tokens";

export async function SiteFooter() {
  const t = await getTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-border-subtle mt-auto border-t">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <BrandLogo compact />
          <p className="text-muted mt-3 text-sm">
            {siteConfig.title} · {siteConfig.location}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <Link
            href="/projects"
            className="text-muted hover:text-brand transition-colors"
          >
            {t("work")}
          </Link>
          <Link href="/lab" className="text-muted hover:text-brand transition-colors">
            {t("lab")}
          </Link>
          <a
            href={siteConfig.links.github}
            className="text-muted hover:text-brand transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={siteConfig.links.linkedin}
            className="text-muted hover:text-brand transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.resumePdf}
            className="text-muted hover:text-brand transition-colors"
            download
          >
            CV
          </a>
          <Link href="/contact" className="text-muted hover:text-brand transition-colors">
            {t("contact")}
          </Link>
        </div>
        <p className="text-muted-foreground font-mono text-xs">
          © {year} {siteConfig.fullName}
        </p>
      </div>
    </footer>
  );
}
