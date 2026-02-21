export type Locale =
  | "en"   // English
  | "hi"   // Hindi
  | "bn"   // Bengali
  | "te"   // Telugu
  | "mr"   // Marathi
  | "ta"   // Tamil
  | "gu"   // Gujarati
  | "kn"   // Kannada
  | "ml"   // Malayalam
  | "pa"   // Punjabi
  | "or"   // Odia
  | "as"   // Assamese
  | "ur"   // Urdu
  | "zh"   // Chinese (Simplified)
  | "ar"   // Arabic
  | "fr"   // French
  | "de"   // German
  | "es"   // Spanish
  | "ja"   // Japanese
  | "ru";  // Russian

export interface Language {
  code: Locale;
  name: string;
  nativeName: string;
  dir: "ltr" | "rtl";
  flag: string;
}

export const LANGUAGES: Language[] = [
  { code: "en", name: "English",    nativeName: "English",    dir: "ltr", flag: "🇬🇧" },
  { code: "hi", name: "Hindi",      nativeName: "हिन्दी",       dir: "ltr", flag: "🇮🇳" },
  { code: "bn", name: "Bengali",    nativeName: "বাংলা",        dir: "ltr", flag: "🇧🇩" },
  { code: "te", name: "Telugu",     nativeName: "తెలుగు",       dir: "ltr", flag: "🇮🇳" },
  { code: "mr", name: "Marathi",    nativeName: "मराठी",        dir: "ltr", flag: "🇮🇳" },
  { code: "ta", name: "Tamil",      nativeName: "தமிழ்",        dir: "ltr", flag: "🇮🇳" },
  { code: "gu", name: "Gujarati",   nativeName: "ગુજરાતી",      dir: "ltr", flag: "🇮🇳" },
  { code: "kn", name: "Kannada",    nativeName: "ಕನ್ನಡ",        dir: "ltr", flag: "🇮🇳" },
  { code: "ml", name: "Malayalam",  nativeName: "മലയാളം",       dir: "ltr", flag: "🇮🇳" },
  { code: "pa", name: "Punjabi",    nativeName: "ਪੰਜਾਬੀ",       dir: "ltr", flag: "🇮🇳" },
  { code: "or", name: "Odia",       nativeName: "ଓଡ଼ିଆ",        dir: "ltr", flag: "🇮🇳" },
  { code: "as", name: "Assamese",   nativeName: "অসমীয়া",      dir: "ltr", flag: "🇮🇳" },
  { code: "ur", name: "Urdu",       nativeName: "اردو",         dir: "rtl", flag: "🇵🇰" },
  { code: "zh", name: "Chinese",    nativeName: "中文",          dir: "ltr", flag: "🇨🇳" },
  { code: "ar", name: "Arabic",     nativeName: "العربية",      dir: "rtl", flag: "🇸🇦" },
  { code: "fr", name: "French",     nativeName: "Français",     dir: "ltr", flag: "🇫🇷" },
  { code: "de", name: "German",     nativeName: "Deutsch",      dir: "ltr", flag: "🇩🇪" },
  { code: "es", name: "Spanish",    nativeName: "Español",      dir: "ltr", flag: "🇪🇸" },
  { code: "ja", name: "Japanese",   nativeName: "日本語",         dir: "ltr", flag: "🇯🇵" },
  { code: "ru", name: "Russian",    nativeName: "Русский",      dir: "ltr", flag: "🇷🇺" },
];

export interface Translations {
  navbar: {
    products: string;
    pricing: string;
    resources: string;
    about: string;
    contact: string;
    dashboard: string;
    login: string;
    logout: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    secure: string;
    zeroCommission: string;
  };
  login: {
    title: string;
    subtitle: string;
    emailLabel: string;
    emailPlaceholder: string;
    passwordLabel: string;
    passwordPlaceholder: string;
    signInButton: string;
    signingIn: string;
    securityNote: string;
  };
}
