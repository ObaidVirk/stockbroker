import { Shield, Users, Award, Target, Heart, Zap } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Your trust is our top priority. We use bank-grade security to protect your investments and data.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "We're committed to providing exceptional service and support to help you achieve your financial goals.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously innovate to provide you with cutting-edge tools and features for smarter investing.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Heart,
      title: "Transparency",
      description: "No hidden fees, no surprises. We believe in complete transparency in everything we do.",
      color: "from-orange-500 to-red-500",
    },
  ];

  const team = [
    { name: "Rajesh Kumar", role: "CEO & Co-Founder", initial: "RK" },
    { name: "Priya Sharma", role: "CTO & Co-Founder", initial: "PS" },
    { name: "Amit Patel", role: "Head of Product", initial: "AP" },
    { name: "Sneha Gupta", role: "Head of Operations", initial: "SG" },
  ];

  const milestones = [
    { year: "2020", title: "Company Founded", description: "Started with a vision to democratize investing" },
    { year: "2021", title: "1M Users", description: "Reached our first million users milestone" },
    { year: "2022", title: "Zero Commission", description: "Launched zero commission trading for all" },
    { year: "2023", title: "5M Users", description: "Grew to 5 million happy investors" },
    { year: "2024", title: "IPO Launch", description: "Expanded services to include IPO investments" },
    { year: "2026", title: "Market Leader", description: "Became India's most trusted investment platform" },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-600 to-brand-700 text-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-semibold mb-6">
              Building India&apos;s most trusted investment platform
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              We&apos;re on a mission to make investing accessible, transparent, and rewarding for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold mb-6">
              Our Mission
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              Empowering every Indian to build wealth
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We believe that everyone deserves access to high-quality investment tools and guidance. Our platform is designed to make investing simple, accessible, and transparent for investors of all levels.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              With zero commission trading, comprehensive research, and world-class{" "}
              <Link href="/contact" className="text-brand-600 hover:text-brand-700 font-medium underline underline-offset-2">customer support</Link>,
              we&apos;re helping millions of Indians achieve their financial dreams.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-semibold transition-all hover:shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-brand-500 to-brand-600 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center">
                    <Target className="w-8 h-8 text-brand-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">5M+</div>
                    <div className="text-gray-600">Active Users</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">₹10,000Cr+</div>
                    <div className="text-gray-600">Assets Managed</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                    <Shield className="w-8 h-8 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">100%</div>
                    <div className="text-gray-600">Secure Platform</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and help us serve you better every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Our Journey
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Key milestones in our growth story
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-brand-200"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="inline-block bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <div className="text-brand-600 font-bold text-lg mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brand-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              Meet Our Leadership
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-brand-500 to-brand-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4 shadow-lg">
                  {member.initial}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-3xl p-12 md:p-16 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Join millions of investors
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start your investment journey with India&apos;s most trusted platform. Open your free account today.
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
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
