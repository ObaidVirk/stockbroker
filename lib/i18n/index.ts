import { Translations, Locale } from "./types";
import en from "./translations/en";
import hi from "./translations/hi";
import bn from "./translations/bn";
import te from "./translations/te";
import mr from "./translations/mr";
import ta from "./translations/ta";
import gu from "./translations/gu";
import kn from "./translations/kn";
import ml from "./translations/ml";
import pa from "./translations/pa";
import or from "./translations/or";
import as_ from "./translations/as";
import ur from "./translations/ur";
import zh from "./translations/zh";
import ar from "./translations/ar";
import fr from "./translations/fr";
import de from "./translations/de";
import es from "./translations/es";
import ja from "./translations/ja";
import ru from "./translations/ru";

export const translations: Record<Locale, Translations> = {
  en,
  hi,
  bn,
  te,
  mr,
  ta,
  gu,
  kn,
  ml,
  pa,
  or,
  as: as_,
  ur,
  zh,
  ar,
  fr,
  de,
  es,
  ja,
  ru,
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? translations["en"];
}

export * from "./types";
