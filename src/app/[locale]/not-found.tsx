import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ButtonLink } from "@/shared/ui/button-link";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col items-start px-4 py-24 sm:px-6">
      <p className="text-brand font-mono text-xs tracking-[0.18em] uppercase">
        {t("code")}
      </p>
      <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight">
        {t("title")}
      </h1>
      <p className="text-muted mt-4 text-sm">{t("body")}</p>
      <div className="mt-8 flex gap-3">
        <ButtonLink href="/">{t("home")}</ButtonLink>
        <ButtonLink href="/projects" variant="secondary">
          {t("projects")}
        </ButtonLink>
      </div>
      <Link href="/contact" className="text-brand mt-6 text-sm hover:underline">
        Contact
      </Link>
    </div>
  );
}
