import { TrendingUp, PieChart, Wallet, DollarSign } from "lucide-react";
import Link from "next/link";

export default function InvestmentOptions() {
  const options = [
    {
      icon: TrendingUp,
      title: "Stocks",
      description: "Trade in 5000+ stocks across NSE and BSE with live market data",
      stats: "Zero brokerage",
      color: "from-blue-500 to-cyan-500",
      link: "/stocks"
    },
    {
      icon: PieChart,
      title: "Mutual Funds",
      description: "Invest in 3000+ mutual funds from top AMCs with expert recommendations",
      stats: "SIP starting ₹100",
      color: "from-purple-500 to-pink-500",
      link: "/mutual-funds"
    },
    {
      icon: Wallet,
      title: "ETFs",
      description: "Diversify your portfolio with Exchange Traded Funds",
      stats: "Low expense ratio",
      color: "from-green-500 to-emerald-500",
      link: "/etf"
    },
    {
      icon: DollarSign,
      title: "IPO",
      description: "Apply for upcoming IPOs and growwith new companies",
      stats: "Easy application",
      color: "from-orange-500 to-red-500",
      link: "/ipo"
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Explore investment opportunities
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Choose from a wide range of investment options tailored to your financial goals and risk appetite.
          </p>
        </div>

        {/* Investment Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {options.map((option, index) => (
            <Link 
              key={index}
              href={option.link}
              className="group p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl hover:shadow-2xl hover:border-transparent transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${option.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <option.icon className="w-7 h-7 text-white" />
                </div>
                <div className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold">
                  {option.stats}
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">
                {option.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {option.description}
              </p>

              <div className="mt-6 flex items-center text-brand-600 font-semibold group-hover:translate-x-2 transition-transform">
                Explore now →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
