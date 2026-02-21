import { Smartphone, Shield, TrendingUp, Zap, PieChart, BookOpen } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Trading",
      description: "Execute trades in milliseconds with our advanced trading platform. Real-time market data and instant order execution.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "100% Secure & Safe",
      description: "Bank-grade security with 256-bit encryption. Your investments and data are protected with industry-leading security measures.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: PieChart,
      title: "Smart Portfolio Insights",
      description: "Get AI-powered investment recommendations and track your portfolio performance with detailed analytics and insights.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Experience",
      description: "Trade anywhere, anytime with our intuitive mobile app. Seamless experience across all your devices.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Zero Commission",
      description: "Trade stocks and invest in mutual funds with absolutely zero brokerage fees. Keep all your profits.",
      color: "from-red-500 to-rose-500"
    },
    {
      icon: BookOpen,
      title: "Learning Resources",
      description: "Access expert market analysis, educational content, and resources to make informed investment decisions.",
      color: "from-indigo-500 to-blue-500"
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Everything you need to start investing
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Powerful features and tools designed to help you make smarter investment decisions and grow your wealth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-xl hover:border-brand-200 transition-all duration-300"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
