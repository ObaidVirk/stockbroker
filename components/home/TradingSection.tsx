import { Check } from "lucide-react";
import Link from "next/link";

export default function TradingSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-28">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold">
              Advanced Trading Platform
            </div>
            
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
              Professional trading tools for everyone
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Access institutional-grade trading tools with real-time market data, advanced charting, and powerful analytics. Make informed decisions with confidence.
            </p>

            <ul className="space-y-4">
              {[
                "Real-time market data and live streaming quotes",
                "Advanced charting with 100+ technical indicators",
                "Multiple order types and bracket orders",
                "Paper trading to practice without risk",
                "Market depth and order book analysis",
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-brand-600" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <Link 
              href="/products"
              className="inline-block px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-semibold transition-all hover:shadow-lg mt-4"
            >
              Explore Trading Platform
            </Link>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 shadow-2xl">
              {/* Mock Chart */}
              <div className="bg-gray-800 rounded-2xl p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-white font-bold text-lg">NIFTY 50</div>
                    <div className="text-brand-400 text-sm">NSE</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold text-xl">18,245.80</div>
                    <div className="text-green-400 text-sm">+125.40 (+0.69%)</div>
                  </div>
                </div>
                
                {/* Simplified Chart Visualization */}
                <div className="h-48 bg-gray-900 rounded-lg p-4 relative overflow-hidden">
                  <svg width="100%" height="100%" className="absolute inset-0">
                    <polyline
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="2"
                      points="0,140 50,120 100,130 150,100 200,110 250,80 300,90 350,60 400,70"
                      className="drop-shadow-lg"
                    />
                    <polyline
                      fill="url(#gradient)"
                      fillOpacity="0.3"
                      points="0,140 50,120 100,130 150,100 200,110 250,80 300,90 350,60 400,70 400,180 0,180"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Bottom Controls */}
              <div className="grid grid-cols-4 gap-2">
                <button className="px-3 py-2 bg-brand-600 text-white rounded-lg text-sm font-medium">
                  BUY
                </button>
                <button className="px-3 py-2 bg-gray-700 text-white rounded-lg text-sm font-medium">
                  SELL
                </button>
                <button className="px-3 py-2 bg-gray-700 text-white rounded-lg text-sm font-medium">
                  1D
                </button>
                <button className="px-3 py-2 bg-gray-700 text-white rounded-lg text-sm font-medium">
                  1W
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
