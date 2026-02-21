"use client";

import { Check, X, AlertCircle } from "lucide-react";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function PricingContent() {
  const [loading, setLoading] = useState<string | null>(null);
  const [canceled, setCanceled] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("canceled") === "true") {
      setCanceled(true);
    }
  }, [searchParams]);

  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: "Free",
      description: "Perfect for beginners starting their investment journey",
      features: [
        "Zero brokerage on delivery trades",
        "₹20 per order on intraday & F&O",
        "Direct mutual fund investments",
        "Basic charting tools",
        "Market research reports",
        "Email support",
      ],
      notIncluded: [
        "Advanced charting",
        "Priority support",
        "Premium research",
      ],
      color: "gray",
      recommended: false,
    },
    {
      id: "pro",
      name: "Pro",
      price: "₹999",
      period: "/month",
      description: "For active traders who need advanced tools",
      features: [
        "Everything in Basic",
        "Zero brokerage on ALL trades",
        "Advanced charting with 100+ indicators",
        "Real-time market data",
        "Premium research & analysis",
        "Priority customer support",
        "API access for algo trading",
        "Margin trading facility",
      ],
      notIncluded: [],
      color: "brand",
      recommended: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for institutions and HNIs",
      features: [
        "Everything in Pro",
        "Dedicated relationship manager",
        "Custom trading solutions",
        "Institutional research",
        "White-label platform option",
        "Advanced risk management",
        "Multi-user accounts",
        "24/7 premium support",
      ],
      notIncluded: [],
      color: "purple",
      recommended: false,
    },
  ];

  const fees = [
    { category: "Equity Delivery", basic: "₹0", pro: "₹0", enterprise: "₹0" },
    { category: "Equity Intraday", basic: "₹20 per order", pro: "₹0", enterprise: "₹0" },
    { category: "Futures & Options", basic: "₹20 per order", pro: "₹0", enterprise: "₹0" },
    { category: "Currency Trading", basic: "₹20 per order", pro: "₹0", enterprise: "₹0" },
    { category: "Mutual Funds", basic: "₹0", pro: "₹0", enterprise: "₹0" },
  ];

  const handlePlanSelection = async (planId: string) => {
    setLoading(planId);

    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create checkout session");
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error: any) {
      console.error("Checkout error:", error);
      alert(error.message || "Failed to process checkout");
      setLoading(null);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold mb-6">
            Simple, Transparent Pricing
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-6">
            Plans that scale with your trading needs
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Choose the perfect plan for your investment journey. No hidden fees, no surprises.
          </p>
        </div>

        {canceled && (
          <div className="max-w-lg mx-auto mb-10 flex items-center space-x-3 bg-yellow-50 border border-yellow-200 text-yellow-800 px-5 py-4 rounded-xl">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm font-medium">Payment was canceled. You can choose a plan below whenever you&apos;re ready.</p>
          </div>
        )}

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 border-2 transition-all hover:shadow-2xl ${
                plan.recommended
                  ? "border-brand-500 shadow-xl scale-105"
                  : "border-gray-200 hover:border-brand-200"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-600 text-white text-sm font-semibold rounded-full">
                  Recommended
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl md:text-5xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-600 ml-2">{plan.period}</span>}
                </div>
              </div>

              <button
                onClick={() => handlePlanSelection(plan.id)}
                disabled={loading !== null}
                className={`block w-full py-3 rounded-xl font-semibold text-center mb-6 transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                  plan.recommended
                    ? "bg-brand-600 text-white hover:bg-brand-700 hover:shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {loading === plan.id ? "Processing..." : "Get Started"}
              </button>

              <div className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3 opacity-50">
                    <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-500 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Fee Comparison Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Detailed Fee Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left text-sm font-semibold text-gray-900 pb-4">Category</th>
                  <th className="text-center text-sm font-semibold text-gray-900 pb-4">Basic</th>
                  <th className="text-center text-sm font-semibold text-brand-600 pb-4">Pro</th>
                  <th className="text-center text-sm font-semibold text-gray-900 pb-4">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {fees.map((fee, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 font-medium text-gray-900">{fee.category}</td>
                    <td className="py-4 text-center text-gray-700">{fee.basic}</td>
                    <td className="py-4 text-center font-semibold text-brand-600">{fee.pro}</td>
                    <td className="py-4 text-center text-gray-700">{fee.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Is there any account opening fee?",
                a: "No, opening an account with StockBroker is completely free. There are no hidden charges.",
              },
              {
                q: "Can I upgrade or downgrade my plan anytime?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
              },
              {
                q: "Are there any withdrawal charges?",
                a: "No, we don't charge any fees for withdrawing your funds to your bank account.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit/debit cards, UPI, net banking, and bank transfers.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
export default function PricingPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-brand-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading pricing...</p>
        </div>
      </div>
    }>
      <PricingContent />
    </Suspense>
  );
}