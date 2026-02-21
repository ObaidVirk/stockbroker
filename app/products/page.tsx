import { TrendingUp, PieChart, Zap, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
  const products = [
    {
      icon: TrendingUp,
      title: "Stocks",
      description: "Trade in 5000+ stocks across NSE and BSE with zero brokerage on delivery trades",
      features: [
        "Real-time market data",
        "Advanced charting tools",
        "Market depth analysis",
        "Instant order execution",
      ],
      color: "from-blue-500 to-cyan-500",
      link: "/products/stocks",
    },
    {
      icon: PieChart,
      title: "Mutual Funds",
      description: "Invest in 3000+ mutual funds from top AMCs with zero commission",
      features: [
        "SIP starting ₹100",
        "Expert recommendations",
        "Portfolio tracking",
        "Tax-saving funds",
      ],
      color: "from-purple-500 to-pink-500",
      link: "/products/mutual-funds",
    },
    {
      icon: Zap,
      title: "Futures & Options",
      description: "Trade in derivatives with powerful tools and risk management features",
      features: [
        "Nifty & Bank Nifty options",
        "Stock futures & options",
        "Option chain analysis",
        "Strategy builder",
      ],
      color: "from-green-500 to-emerald-500",
      link: "/products/futures-options",
    },
    {
      icon: BarChart3,
      title: "ETFs",
      description: "Diversify your portfolio with Exchange Traded Funds",
      features: [
        "Index ETFs",
        "Gold & Silver ETFs",
        "International ETFs",
        "Low expense ratio",
      ],
      color: "from-orange-500 to-red-500",
      link: "/products/etf",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-600 to-brand-700 text-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-semibold mb-6">
              Comprehensive investment solutions
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Access a wide range of investment products to diversify your portfolio and achieve your financial goals.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Link
              key={index}
              href={product.link}
              className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:border-transparent transition-all"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <product.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-3xl font-semibold text-gray-900 mb-4 group-hover:text-brand-600 transition-colors">
                {product.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                {product.description}
              </p>

              <ul className="space-y-3 mb-6">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex items-center text-brand-600 font-semibold group-hover:translate-x-2 transition-transform">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              Why choose StockBroker?
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Professional tools and features for smart investing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Zero Commission", desc: "No brokerage fees on delivery trades" },
              { title: "Advanced Tools", desc: "Professional-grade trading platform" },
              { title: "Expert Research", desc: "In-depth analysis and recommendations" },
              { title: "Instant Execution", desc: "Lightning-fast order processing" },
              { title: "24/7 Support", desc: "Dedicated customer service team" },
              { title: "Bank-Grade Security", desc: "Your investments are always safe" },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-3xl p-12 md:p-16 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Ready to start investing?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Open your free account in minutes and get access to all investment products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-block px-8 py-4 bg-white text-brand-600 hover:bg-gray-50 rounded-xl font-semibold transition-all hover:shadow-xl"
            >
              Get Started Free
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-600 rounded-xl font-semibold transition-all"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
