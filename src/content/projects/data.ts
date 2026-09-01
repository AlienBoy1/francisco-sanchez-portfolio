import type { Locale } from "@/i18n/routing";
import type { Project } from "./types";
import { capitalGangEn, capitalGangEs } from "./capital-gang";
import { htlOperationsEn, htlOperationsEs } from "./htl-operations";
import { qyntraGymEn, qyntraGymEs } from "./qyntra-gym";

/** Featured Work: live products with public demos and real media. */
export const projectsByLocale: Record<Locale, Project[]> = {
  en: [htlOperationsEn, qyntraGymEn, capitalGangEn],
  es: [htlOperationsEs, qyntraGymEs, capitalGangEs],
};
