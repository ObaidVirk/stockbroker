export default function Stats() {
  const stats = [
    { value: "5M+", label: "Active Users" },
    { value: "₹10,000Cr+", label: "Assets Under Management" },
    { value: "Zero", label: "Commission Fees" },
    { value: "24/7", label: "Customer Support" },
  ];

  return (
    <section className="bg-white border-y border-gray-100">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
