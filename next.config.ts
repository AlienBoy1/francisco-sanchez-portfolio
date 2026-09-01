import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";
import createNextIntlPlugin from "next-intl/plugin";

const root = path.dirname(fileURLToPath(import.meta.url));
const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root,
  },
  async redirects() {
    const labPaths = [
      "technologies",
      "docs",
      "github",
      "architecture",
      "features",
      "traceability",
      "search",
      "analytics",
    ];

    const localeLab = labPaths.flatMap((segment) => [
      {
        source: `/:locale(en|es)/${segment}`,
        destination: `/:locale/lab/${segment}`,
        permanent: true,
      },
      {
        source: `/${segment}`,
        destination: `/lab/${segment}`,
        permanent: true,
      },
    ]);

    return [
      ...localeLab,
      {
        source: "/:locale(en|es)/platform",
        destination: "/:locale/lab",
        permanent: true,
      },
      { source: "/platform", destination: "/lab", permanent: true },
      {
        source: "/:locale(en|es)/experience",
        destination: "/:locale/about#experience",
        permanent: true,
      },
      { source: "/experience", destination: "/about#experience", permanent: true },
      {
        source: "/:locale(en|es)/skills",
        destination: "/:locale/about#skills",
        permanent: true,
      },
      { source: "/skills", destination: "/about#skills", permanent: true },
      {
        source: "/:locale(en|es)/case-studies",
        destination: "/:locale/projects",
        permanent: true,
      },
      { source: "/case-studies", destination: "/projects", permanent: true },
      {
        source: "/:locale(en|es)/case-studies/:slug",
        destination: "/:locale/projects/:slug",
        permanent: true,
      },
      {
        source: "/case-studies/:slug",
        destination: "/projects/:slug",
        permanent: true,
      },
      {
        source: "/:locale(en|es)/projects/altus-gym",
        destination: "/:locale/projects/qyntra-gym",
        permanent: true,
      },
      {
        source: "/projects/altus-gym",
        destination: "/projects/qyntra-gym",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
