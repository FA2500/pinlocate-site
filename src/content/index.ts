import type { Lang } from "@/siteConfig";
import { en } from "./en";
import { ms } from "./ms";
import { privacyEn } from "./legal/privacy.en";
import { privacyMs } from "./legal/privacy.ms";
import { termsEn } from "./legal/terms.en";
import { termsMs } from "./legal/terms.ms";

export const content = { en, ms } as const;
export const legal = {
  privacy: { en: privacyEn, ms: privacyMs },
  terms: { en: termsEn, ms: termsMs },
} as const;

export function t(lang: Lang) {
  return content[lang];
}
