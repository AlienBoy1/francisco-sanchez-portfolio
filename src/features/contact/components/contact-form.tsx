"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/design-system/tokens";
import { Button } from "@/shared/ui/button";
import { Reveal } from "@/shared/ui/motion";

type FormState = { name: string; email: string; message: string };

const initialState: FormState = { name: "", email: "", message: "" };

export function ContactForm() {
  const t = useTranslations("contact");
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function validate(values: FormState): string | null {
    if (!values.name.trim()) return t("errorName");
    if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      return t("errorEmail");
    }
    if (values.message.trim().length < 10) return t("errorMessage");
    return null;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationError = validate(form);
    if (validationError) {
      setError(validationError);
      setSubmitted(false);
      return;
    }

    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:${siteConfig.links.email}?subject=${subject}&body=${body}`;
    setError(null);
    setSubmitted(true);
  }

  return (
    <Reveal className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1fr_1.1fr]">
      <div>
        <p className="text-brand font-mono text-xs tracking-[0.18em] uppercase">
          {t("eyebrow")}
        </p>
        <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight text-balance">
          {t("title")}
        </h1>
        <p className="text-muted mt-4 max-w-md text-sm leading-relaxed">{t("intro")}</p>

        <ul className="mt-8 space-y-3 text-sm">
          <li>
            <a
              className="text-foreground hover:text-brand transition-colors duration-300"
              href={`mailto:${siteConfig.links.email}`}
            >
              {siteConfig.links.email}
            </a>
          </li>
          <li>
            <a
              className="text-muted hover:text-brand transition-colors duration-300"
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="text-muted hover:text-brand transition-colors duration-300"
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <Link
              href="/lab/github"
              className="text-muted hover:text-brand transition-colors duration-300"
            >
              GitHub page
            </Link>
          </li>
        </ul>
      </div>

      <form
        onSubmit={onSubmit}
        className="border-border space-y-5 border-t pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12"
        noValidate
      >
        <Field
          id="name"
          label={t("name")}
          value={form.name}
          onChange={(value) => setForm((prev) => ({ ...prev, name: value }))}
          autoComplete="name"
        />
        <Field
          id="email"
          label={t("email")}
          type="email"
          value={form.email}
          onChange={(value) => setForm((prev) => ({ ...prev, email: value }))}
          autoComplete="email"
        />
        <div>
          <label htmlFor="message" className="text-foreground text-sm font-medium">
            {t("message")}
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={form.message}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, message: event.target.value }))
            }
            className="border-border bg-surface text-foreground ring-ring mt-2 w-full rounded-md border px-3 py-2 text-sm outline-none focus-visible:ring-2"
            required
          />
        </div>

        {error ? (
          <p role="alert" className="text-destructive text-sm">
            {error}
          </p>
        ) : null}
        {submitted && !error ? (
          <p role="status" className="text-brand text-sm">
            {t("opening")}
          </p>
        ) : null}

        <Button type="submit" size="lg">
          {t("send")}
        </Button>
      </form>
    </Reveal>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-foreground text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        className="border-border bg-surface text-foreground ring-ring mt-2 h-11 w-full rounded-md border px-3 text-sm outline-none focus-visible:ring-2"
        required
      />
    </div>
  );
}
