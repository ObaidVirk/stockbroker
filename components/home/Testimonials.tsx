import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Investor",
      avatar: "PS",
      content: "StockBroker has completely transformed my investment journey. The zero commission feature and intuitive interface make it incredibly easy to manage my portfolio.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "Trader",
      avatar: "RK",
      content: "As a day trader, I need fast execution and reliable data. StockBroker delivers on both fronts. The advanced charting tools are exceptional.",
      rating: 5
    },
    {
      name: "Anita Desai",
      role: "Long-term Investor",
      avatar: "AD",
      content: "I started with SIPs in mutual funds and gradually moved to stocks. The learning resources helped me understand the market better.",
      rating: 5
    },
    {
      name: "Vikram Mehta",
      role: "New Investor",
      avatar: "VM",
      content: "Never invested before, but StockBroker made it so simple. The customer support team guided me through every step. Highly recommended!",
      rating: 5
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-28">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Trusted by millions of investors
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            See what our customers have to say about their investment experience with StockBroker.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 pt-12 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-brand-600 mb-2">4.8/5</div>
            <div className="text-sm text-gray-600">App Store Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-brand-600 mb-2">5M+</div>
            <div className="text-sm text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-brand-600 mb-2">10M+</div>
            <div className="text-sm text-gray-600">Downloads</div>
          </div>
        </div>
      </div>
    </section>
  );
}
