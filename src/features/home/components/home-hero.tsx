"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/shared/ui/button-link";
import { brandAssets } from "@/design-system/brand/logo";
import { siteConfig } from "@/design-system/tokens";

export function HomeHero() {
  const t = useTranslations("home");
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate min-h-[min(100dvh,56rem)] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? false : { scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: reduceMotion ? 0 : 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={brandAssets.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
      </motion.div>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#0F172A]/90 to-[#0F172A]/35"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-[#020617]/40"
      />

      <div className="relative mx-auto flex min-h-[min(100dvh,56rem)] w-full max-w-6xl flex-col justify-end px-4 pt-28 pb-20 sm:px-6 sm:pb-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-white"
        >
          <p className="font-display text-4xl font-semibold tracking-tight text-balance sm:text-6xl md:text-7xl">
            {siteConfig.name}
          </p>
          <h1 className="mt-5 max-w-2xl font-sans text-xl font-normal text-balance text-white/90 sm:text-2xl">
            {t("headline")}
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/70 sm:text-lg">
            {t("subhead")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink
              href="/projects"
              size="lg"
              className="bg-primary hover:bg-primary-hover text-white"
            >
              {t("ctaProjects")}
            </ButtonLink>
            <ButtonLink
              href="/resume"
              variant="secondary"
              size="lg"
              className="border-white/35 text-white hover:bg-white/10"
            >
              {t("ctaResume")}
            </ButtonLink>
            <ButtonLink
              href="/contact"
              variant="ghost"
              size="lg"
              className="text-white hover:bg-white/10"
            >
              {t("ctaContact")}
            </ButtonLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
