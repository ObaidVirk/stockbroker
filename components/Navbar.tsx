"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Menu, X, LogOut } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import LanguageSelector from "./LanguageSelector";

interface User {
  id: number;
  email: string;
  isAdmin: boolean;
}

export default function Navbar() {
  const router = useRouter();
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const response = await fetch("/api/auth/session");
      const data = await response.json();
      setUser(data.user);
    } catch (error) {
      console.error("Failed to check session:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      setUser(null);
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image 
              src="/stockbroker.guru.png" 
              alt="StockBroker.guru" 
              width={180} 
              height={45}
              className="h-10 w-auto group-hover:opacity-90 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">
              {t.navbar.products}
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">
              {t.navbar.pricing}
            </Link>
            <Link href="/resources" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">
              {t.navbar.resources}
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">
              {t.navbar.about}
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">
              {t.navbar.contact}
            </Link>
          </div>

          {/* Desktop CTA + Language Selector */}
          <div className="hidden md:flex items-center space-x-3">
            <LanguageSelector />
            {!loading && (
              <>
                {user ? (
                  <>
                    {user.isAdmin && (
                      <Link
                        href="/dashboard"
                        className="px-5 py-2.5 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg font-medium transition-colors"
                      >
                        {t.navbar.dashboard}
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 px-5 py-2.5 text-gray-700 hover:text-brand-600 font-medium transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>{t.navbar.logout}</span>
                    </button>
                  </>
                ) : (
                  <Link
                    href="/login"
                    className="text-gray-700 hover:text-brand-600 font-medium transition-colors"
                  >
                    {t.navbar.login}
                  </Link>
                )}
              </>
            )}
          </div>

          {/* Mobile: Language + Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSelector />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-gray-100">
            <Link
              href="/products"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t.navbar.products}
            </Link>
            <Link
              href="/pricing"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t.navbar.pricing}
            </Link>
            <Link
              href="/resources"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t.navbar.resources}
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t.navbar.about}
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t.navbar.contact}
            </Link>
            {!loading && (
              <div className="pt-3 space-y-2 border-t border-gray-100">
                {user ? (
                  <>
                    {user.isAdmin && (
                      <Link
                        href="/dashboard"
                        className="block px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg font-medium text-center transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {t.navbar.dashboard}
                      </Link>
                    )}
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                      className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>{t.navbar.logout}</span>
                    </button>
                  </>
                ) : (
                  <Link
                    href="/login"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.navbar.login}
                  </Link>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

