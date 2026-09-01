import { getFeatureRegistry } from "@/content/features";
import type { Locale } from "@/i18n/routing";

export type TraceRow = {
  featureId: string;
  featureName: string;
  route: string;
  content: string;
  docs: string;
};

export function getTraceabilityMatrix(locale: Locale): TraceRow[] {
  return getFeatureRegistry(locale)
    .filter((feature) => feature.route)
    .map((feature) => ({
      featureId: feature.id,
      featureName: feature.name,
      route: feature.route ?? "—",
      content:
        feature.id.startsWith("FEAT-01") || feature.id.startsWith("FEAT-00")
          ? "CNT-6000–6004"
          : feature.id.startsWith("FEAT-02")
            ? "CS-7000–7003 / ARC / DS"
            : "PRD-2007 / DEV",
      docs:
        feature.id.startsWith("FEAT-02") || feature.id.startsWith("FEAT-03")
          ? "PRD-2008 Phase 2–3"
          : "PRD-2007 / PRD-2008 Phase 1",
    }));
}
