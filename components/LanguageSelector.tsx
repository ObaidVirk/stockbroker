"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { LANGUAGES } from "@/lib/i18n/types";
import { useLanguage } from "./LanguageProvider";

export default function LanguageSelector() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find((l) => l.code === locale)!;

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-gray-600 hover:text-brand-600 hover:bg-gray-100 transition-colors text-sm font-medium"
        aria-haspopup="listbox"
        aria-expanded={open}
        title="Select language"
      >
        <Globe className="w-4 h-4 shrink-0" />
        <span className="hidden sm:inline">{current.flag} {current.nativeName}</span>
        <span className="sm:hidden">{current.flag}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-52 max-h-80 overflow-y-auto bg-white rounded-xl shadow-xl border border-gray-100 z-50 py-1">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLocale(lang.code);
                setOpen(false);
              }}
              className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors hover:bg-gray-50 ${
                lang.code === locale
                  ? "text-brand-600 font-semibold bg-brand-50"
                  : "text-gray-700"
              }`}
              role="option"
              aria-selected={lang.code === locale}
            >
              <span className="flex items-center gap-2">
                <span className="text-base">{lang.flag}</span>
                <span className="flex flex-col text-left leading-tight">
                  <span>{lang.nativeName}</span>
                  <span className="text-xs text-gray-400 font-normal">{lang.name}</span>
                </span>
              </span>
              {lang.code === locale && <Check className="w-4 h-4 text-brand-600" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
