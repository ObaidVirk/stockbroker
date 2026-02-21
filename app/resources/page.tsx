import { BookOpen, Video, Calculator, TrendingUp, FileText, Newspaper } from "lucide-react";
import Link from "next/link";

export default function ResourcesPage() {
  const categories = [
    {
      icon: BookOpen,
      title: "Learning Center",
      description: "Master the basics of investing with our comprehensive guides",
      link: "/resources/learn",
      color: "from-blue-500 to-cyan-500",
      items: ["Beginner's Guide", "Stock Market Basics", "Technical Analysis", "Fundamental Analysis"],
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Watch expert-led video courses on trading and investing",
      link: "/resources/videos",
      color: "from-purple-500 to-pink-500",
      items: ["Trading Strategies", "Platform Tour", "Risk Management", "Market Analysis"],
    },
    {
      icon: Calculator,
      title: "Financial Calculators",
      description: "Plan your investments with our smart calculators",
      link: "/resources/calculators",
      color: "from-green-500 to-emerald-500",
      items: ["SIP Calculator", "Brokerage Calculator", "Margin Calculator", "Returns Calculator"],
    },
    {
      icon: FileText,
      title: "Research Reports",
      description: "Access in-depth market research and stock analysis",
      link: "/resources/research",
      color: "from-orange-500 to-red-500",
      items: ["Daily Market Reports", "Stock Recommendations", "Sector Analysis", "IPO Reviews"],
    },
    {
      icon: Newspaper,
      title: "Market News",
      description: "Stay updated with the latest market news and trends",
      link: "/resources/news",
      color: "from-indigo-500 to-blue-500",
      items: ["Breaking News", "Market Updates", "Company News", "Economic Indicators"],
    },
    {
      icon: TrendingUp,
      title: "Investment Strategies",
      description: "Learn proven strategies from successful investors",
      link: "/resources/strategies",
      color: "from-yellow-500 to-orange-500",
      items: ["Long-term Investing", "Day Trading", "Swing Trading", "Value Investing"],
    },
  ];

  const popularArticles = [
    {
      title: "How to Start Investing in Stock Market",
      category: "Beginner's Guide",
      readTime: "8 min read",
      image: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      title: "Understanding Technical Indicators",
      category: "Technical Analysis",
      readTime: "12 min read",
      image: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      title: "SIP vs Lump Sum: Which is Better?",
      category: "Investment Strategy",
      readTime: "6 min read",
      image: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
    {
      title: "Top 10 Blue Chip Stocks in India",
      category: "Stock Analysis",
      readTime: "10 min read",
      image: "bg-gradient-to-br from-orange-500 to-red-500",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-600 to-brand-700 text-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              Learn & Grow
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold mb-6">
              Resources to help you invest smarter
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Access comprehensive guides, tutorials, calculators, and research reports to make informed investment decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.link}
              className="group bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl hover:border-brand-200 transition-all"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">
                {category.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {category.description}
              </p>

              <ul className="space-y-2">
                {category.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-500 flex items-center">
                    <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center text-brand-600 font-semibold group-hover:translate-x-2 transition-transform">
                Explore →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Articles */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              Popular Articles
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Most read articles by our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularArticles.map((article, index) => (
              <Link
                key={index}
                href="#"
                className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className={`h-48 ${article.image} flex items-center justify-center`}>
                  <BookOpen className="w-12 h-12 text-white opacity-80" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-brand-600 transition-colors">
                    {article.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Ready to start investing?
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
              Open your free account today and get access to all our resources and tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="inline-block px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-semibold transition-all hover:shadow-xl"
              >
                Get Started Free
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-xl font-semibold transition-all"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
