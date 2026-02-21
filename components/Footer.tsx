import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/stockbroker.guru.png" 
                alt="StockBroker.guru" 
                width={180} 
                height={45}
                className="h-10 w-auto hover:opacity-90 transition-opacity"
              />
            </Link>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-sm">
              Your trusted partner for smart investing. Trade stocks, mutual funds, and build wealth with zero commission.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-200 hover:bg-brand-600 rounded-lg flex items-center justify-center transition-colors group">
                <Twitter className="w-5 h-5 text-gray-600 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-200 hover:bg-brand-600 rounded-lg flex items-center justify-center transition-colors group">
                <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-200 hover:bg-brand-600 rounded-lg flex items-center justify-center transition-colors group">
                <Facebook className="w-5 h-5 text-gray-600 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-200 hover:bg-brand-600 rounded-lg flex items-center justify-center transition-colors group">
                <Instagram className="w-5 h-5 text-gray-600 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Products</h3>
            <ul className="space-y-3">
              <li><Link href="/stocks" className="text-gray-600 hover:text-brand-600 transition-colors">Stocks</Link></li>
              <li><Link href="/mutual-funds" className="text-gray-600 hover:text-brand-600 transition-colors">Mutual Funds</Link></li>
              <li><Link href="/etf" className="text-gray-600 hover:text-brand-600 transition-colors">ETFs</Link></li>
              <li><Link href="/ipo" className="text-gray-600 hover:text-brand-600 transition-colors">IPO</Link></li>
              <li><Link href="/futures" className="text-gray-600 hover:text-brand-600 transition-colors">Futures & Options</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-600 hover:text-brand-600 transition-colors">About Us</Link></li>
              <li><Link href="/pricing" className="text-gray-600 hover:text-brand-600 transition-colors">Pricing</Link></li>
              <li><Link href="/careers" className="text-gray-600 hover:text-brand-600 transition-colors">Careers</Link></li>
              <li><Link href="/press" className="text-gray-600 hover:text-brand-600 transition-colors">Press</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-brand-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link href="/help" className="text-gray-600 hover:text-brand-600 transition-colors">Help Center</Link></li>
              <li><Link href="/resources" className="text-gray-600 hover:text-brand-600 transition-colors">Resources</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-brand-600 transition-colors">Blog</Link></li>
              <li><Link href="/calculators" className="text-gray-600 hover:text-brand-600 transition-colors">Calculators</Link></li>
              <li><Link href="/market-news" className="text-gray-600 hover:text-brand-600 transition-colors">Market News</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm">
            © 2026 StockBroker. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-500 hover:text-brand-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-brand-600 transition-colors">Terms of Service</Link>
            <Link href="/disclosure" className="text-gray-500 hover:text-brand-600 transition-colors">Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
