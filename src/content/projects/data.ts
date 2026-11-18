import type { Locale } from "@/i18n/routing";
import type { Project } from "./types";
import { capitalGangEn, capitalGangEs } from "./capital-gang";
import { htlOperationsEn, htlOperationsEs } from "./htl-operations";
import { htlQuotatesEn, htlQuotatesEs } from "./htl-quotates";
import { htlRouteServiceEn, htlRouteServiceEs } from "./htl-route-service";
import { htlSmartSalesEn, htlSmartSalesEs } from "./htl-smart-sales";
import { htlStopwatchEn, htlStopwatchEs } from "./htl-stopwatch";
import { qyntraGymEn, qyntraGymEs } from "./qyntra-gym";

/** Featured Work: recent production and platform products with portfolio media. */
export const projectsByLocale: Record<Locale, Project[]> = {
  en: [
    htlOperationsEn,
    htlSmartSalesEn,
    htlQuotatesEn,
    qyntraGymEn,
    capitalGangEn,
    htlRouteServiceEn,
    htlStopwatchEn,
  ],
  es: [
    htlOperationsEs,
    htlSmartSalesEs,
    htlQuotatesEs,
    qyntraGymEs,
    capitalGangEs,
    htlRouteServiceEs,
    htlStopwatchEs,
  ],
};
