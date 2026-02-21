"use client";

import Link from "next/link";
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50 via-white to-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-100 rounded-full">
              <div className="w-2 h-2 bg-brand-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-brand-700">{t.hero.badge}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 leading-tight">
              {t.hero.headline}
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
              {t.hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-semibold transition-all hover:shadow-xl group"
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-200 hover:border-brand-600 text-gray-700 hover:text-brand-600 rounded-xl font-semibold transition-all"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-brand-600" />
                <span className="text-sm text-gray-600">{t.hero.secure}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-brand-600" />
                <span className="text-sm text-gray-600">{t.hero.zeroCommission}</span>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-brand-500 to-brand-600 rounded-3xl p-8 shadow-2xl">
              {/* Mock Trading Interface */}
              <div className="bg-white rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Portfolio Value</span>
                  <span className="text-sm text-brand-600 font-semibold">+12.5%</span>
                </div>
                <div className="text-3xl font-bold text-gray-900">₹2,45,890</div>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-green-50 rounded-xl p-4">
                    <div className="text-xs text-gray-500 mb-1">Invested</div>
                    <div className="text-lg font-bold text-gray-900">₹2,18,560</div>
                  </div>
                  <div className="bg-brand-50 rounded-xl p-4">
                    <div className="text-xs text-gray-500 mb-1">Returns</div>
                    <div className="text-lg font-bold text-brand-600">₹27,330</div>
                  </div>
                </div>

                {/* Stock Cards */}
                <div className="space-y-2 pt-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">RELIANCE</div>
                        <div className="text-xs text-gray-500">+2.4%</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-sm">₹2,458</div>
                      <div className="text-xs text-brand-600">+₹58</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">TCS</div>
                        <div className="text-xs text-gray-500">+1.8%</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-sm">₹3,542</div>
                      <div className="text-xs text-brand-600">+₹63</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-brand-400 rounded-full blur-2xl opacity-50 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
