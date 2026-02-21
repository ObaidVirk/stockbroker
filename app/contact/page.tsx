"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, TrendingUp, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const contactCards = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "support@stockbroker.guru",
      sub: "We reply within 24 hours",
      color: "from-blue-500 to-cyan-500",
      href: "mailto:support@stockbroker.guru",
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+91 1800-123-4567",
      sub: "Mon–Fri, 9 AM – 6 PM IST",
      color: "from-green-500 to-emerald-500",
      href: "tel:+911800123456",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      detail: "Chat with an expert",
      sub: "Available during market hours",
      color: "from-purple-500 to-pink-500",
      href: "#",
    },
    {
      icon: MapPin,
      title: "Office",
      detail: "Mumbai, Maharashtra",
      sub: "India – 400 001",
      color: "from-orange-500 to-red-500",
      href: "#",
    },
  ];

  const subjects = [
    "General Inquiry",
    "Enterprise Plan Enquiry",
    "Account Support",
    "Technical Issue",
    "Billing & Payments",
    "Partnership Opportunity",
    "Other",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold mb-6">
            Get in Touch
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-6">
            We&apos;d love to hear from you
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you have a question about our plans, pricing, or need a custom enterprise solution — our team is ready to help.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactCards.map((card, i) => (
            <a
              key={i}
              href={card.href}
              className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-brand-200 hover:shadow-xl transition-all"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <card.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{card.title}</h3>
              <p className="text-gray-800 text-sm font-medium mb-1">{card.detail}</p>
              <p className="text-gray-500 text-xs">{card.sub}</p>
            </a>
          ))}
        </div>

        {/* Form + Info */}
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-9 h-9 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
                <p className="text-gray-600 mb-6 max-w-sm">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                  className="px-6 py-3 bg-brand-600 text-white rounded-xl font-semibold hover:bg-brand-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
                <p className="text-gray-600 mb-8">Fill in the form below and we&apos;ll get back to you as soon as possible.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number <span className="text-gray-400">(optional)</span></label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option value="">Select a subject</option>
                        {subjects.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center space-x-2 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? "Sending..." : "Send Message"}</span>
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Side Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Enterprise CTA */}
            <div className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-2xl p-8 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Enterprise Plan</h3>
              <p className="text-brand-100 text-sm mb-6 leading-relaxed">
                Looking for a custom solution for your institution or HNI portfolio? Our enterprise team will build the perfect plan for you.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Dedicated relationship manager",
                  "Custom brokerage rates",
                  "White-label platform option",
                  "Institutional research access",
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-2 text-sm text-brand-100">
                    <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:enterprise@stockbroker.guru"
                className="inline-block w-full text-center px-5 py-3 bg-white text-brand-700 font-semibold rounded-xl hover:bg-brand-50 transition-colors"
              >
                Contact Enterprise Team
              </a>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-gray-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Business Hours</h3>
              </div>
              <div className="space-y-3 text-sm">
                {[
                  { day: "Monday – Friday", hours: "9:00 AM – 6:00 PM IST" },
                  { day: "Saturday", hours: "10:00 AM – 2:00 PM IST" },
                  { day: "Sunday", hours: "Closed" },
                  { day: "Market Hours Support", hours: "9:15 AM – 3:30 PM IST" },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between">
                    <span className="text-gray-600">{day}</span>
                    <span className={`font-medium ${hours === "Closed" ? "text-red-500" : "text-gray-900"}`}>{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
