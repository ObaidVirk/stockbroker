"use client";

import Image from "next/image";
import { 
  Bell,
  Search,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Settings,
  Menu,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const portfolioData = {
    totalValue: 2458900,
    invested: 2185600,
    returns: 273300,
    returnPercent: 12.5,
    dayChange: 15420,
    dayChangePercent: 0.63,
  };

  const holdings = [
    { symbol: "RELIANCE", name: "Reliance Industries", qty: 50, avgPrice: 2400, ltp: 2458, change: 2.4, value: 122900 },
    { symbol: "TCS", name: "Tata Consultancy Services", qty: 30, avgPrice: 3480, ltp: 3542, change: 1.8, value: 106260 },
    { symbol: "INFY", name: "Infosys Limited", qty: 40, avgPrice: 1520, ltp: 1548, change: 1.8, value: 61920 },
    { symbol: "HDFC", name: "HDFC Bank", qty: 45, avgPrice: 1620, ltp: 1638, change: 1.1, value: 73710 },
  ];

  const watchlist = [
    { symbol: "WIPRO", ltp: 385.50, change: -0.8 },
    { symbol: "ICICIBANK", ltp: 945.30, change: 1.2 },
    { symbol: "SBIN", ltp: 598.75, change: 0.5 },
    { symbol: "ITC", ltp: 412.80, change: -0.3 },
  ];

  const recentOrders = [
    { symbol: "RELIANCE", type: "BUY", qty: 10, price: 2458, status: "Completed", time: "10:30 AM" },
    { symbol: "TCS", type: "SELL", qty: 5, price: 3542, status: "Completed", time: "09:15 AM" },
    { symbol: "INFY", type: "BUY", qty: 15, price: 1548, status: "Pending", time: "Yesterday" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                <Menu className="w-6 h-6" />
              </button>
              <Link href="/" className="flex items-center">
                <Image 
                  src="/adminpanel.png" 
                  alt="Admin Panel" 
                  width={160} 
                  height={40}
                  className="h-9 w-auto hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>

            <div className="flex-1 max-w-xl mx-8 hidden md:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search stocks, mutual funds..."
                  className="w-full pl-11 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
                />
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Settings className="w-6 h-6 text-gray-600" />
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-600 rounded-full flex items-center justify-center text-white font-semibold">
                JD
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Portfolio Summary */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Portfolio Overview</h2>
                <button className="px-4 py-2 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700 transition-colors flex items-center space-x-2">
                  <Plus className="w-5 h-5" />
                  <span>Add Funds</span>
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-sm text-gray-500 mb-2">Total Value</div>
                  <div className="text-3xl font-bold text-gray-900">
                    ₹{(portfolioData.totalValue / 100000).toFixed(2)}L
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className={`flex items-center text-sm font-semibold ${portfolioData.dayChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {portfolioData.dayChange >= 0 ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                      ₹{Math.abs(portfolioData.dayChange).toLocaleString()} ({Math.abs(portfolioData.dayChangePercent)}%)
                    </div>
                    <span className="text-xs text-gray-500">Today</span>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 mb-2">Total Invested</div>
                  <div className="text-2xl font-bold text-gray-900">
                    ₹{(portfolioData.invested / 100000).toFixed(2)}L
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 mb-2">Total Returns</div>
                  <div className="text-2xl font-bold text-green-600">
                    +₹{(portfolioData.returns / 100000).toFixed(2)}L
                  </div>
                  <div className="text-sm text-green-600 font-semibold mt-1">
                    +{portfolioData.returnPercent}%
                  </div>
                </div>
              </div>
            </div>

            {/* Holdings */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Holdings</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left text-sm font-semibold text-gray-600 pb-3">Stock</th>
                      <th className="text-right text-sm font-semibold text-gray-600 pb-3">Qty</th>
                      <th className="text-right text-sm font-semibold text-gray-600 pb-3">Avg Price</th>
                      <th className="text-right text-sm font-semibold text-gray-600 pb-3">LTP</th>
                      <th className="text-right text-sm font-semibold text-gray-600 pb-3">Change</th>
                      <th className="text-right text-sm font-semibold text-gray-600 pb-3">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {holdings.map((holding, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4">
                          <div>
                            <div className="font-semibold text-gray-900">{holding.symbol}</div>
                            <div className="text-sm text-gray-500">{holding.name}</div>
                          </div>
                        </td>
                        <td className="text-right text-gray-900">{holding.qty}</td>
                        <td className="text-right text-gray-900">₹{holding.avgPrice}</td>
                        <td className="text-right font-semibold text-gray-900">₹{holding.ltp}</td>
                        <td className={`text-right font-semibold ${holding.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {holding.change >= 0 ? '+' : ''}{holding.change}%
                        </td>
                        <td className="text-right font-semibold text-gray-900">₹{holding.value.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Recent Orders</h2>
                <Link href="/orders" className="text-brand-600 hover:text-brand-700 font-semibold text-sm">
                  View All →
                </Link>
              </div>

              <div className="space-y-4">
                {recentOrders.map((order, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                        order.type === 'BUY' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {order.type}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{order.symbol}</div>
                        <div className="text-sm text-gray-500">{order.qty} shares @ ₹{order.price}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-semibold ${
                        order.status === 'Completed' ? 'text-green-600' : 'text-orange-600'
                      }`}>
                        {order.status}
                      </div>
                      <div className="text-xs text-gray-500">{order.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full py-3 bg-brand-600 text-white rounded-xl font-semibold hover:bg-brand-700 transition-colors">
                  Buy Stocks
                </button>
                <button className="w-full py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
                  Start SIP
                </button>
                <button className="w-full py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
                  Apply for IPO
                </button>
              </div>
            </div>

            {/* Watchlist */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">Watchlist</h3>
                <button className="text-brand-600 hover:text-brand-700">
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-3">
                {watchlist.map((stock, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{stock.symbol}</div>
                      <div className="text-xs text-gray-500">₹{stock.ltp}</div>
                    </div>
                    <div className={`text-sm font-semibold ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {stock.change >= 0 ? '+' : ''}{stock.change}%
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Status */}
            <div className="bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl shadow-lg p-6 text-white">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">Market Open</span>
              </div>
              <div className="text-3xl font-bold mb-1">18,245.80</div>
              <div className="text-sm opacity-90">NIFTY 50</div>
              <div className="flex items-center space-x-1 mt-2 text-green-300">
                <ArrowUpRight className="w-4 h-4" />
                <span className="text-sm font-semibold">+125.40 (0.69%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
