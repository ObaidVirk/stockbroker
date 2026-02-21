"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Locale, Translations, LANGUAGES } from "@/lib/i18n/types";
import { getTranslations } from "@/lib/i18n";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: "en",
  setLocale: () => {},
  t: getTranslations("en"),
  dir: "ltr",
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Load saved locale from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("sb_locale") as Locale | null;
    if (saved && LANGUAGES.some((l) => l.code === saved)) {
      setLocaleState(saved);
    }
  }, []);

  // Persist locale + update <html> dir attribute
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("sb_locale", newLocale);
    const lang = LANGUAGES.find((l) => l.code === newLocale);
    document.documentElement.setAttribute("dir", lang?.dir ?? "ltr");
    document.documentElement.setAttribute("lang", newLocale);
  };

  const lang = LANGUAGES.find((l) => l.code === locale);

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        t: getTranslations(locale),
        dir: lang?.dir ?? "ltr",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
