const AboutSection = () => {
  const features = [
    {
      icon: "📚",
      title: "Inclusive Knowledge Hub",
      desc: "Our seminar library bridges the gap by providing equal access to academic resources for all students, regardless of their financial background. We curate both physical and digital materials to support diverse learning needs.",
      border: "border-blue-500",
      iconColor: "bg-gradient-to-br from-blue-500 to-indigo-500",
      stats: "5000+ resources available",
    },
    {
      icon: "⚡",
      title: "Streamlined Digital System",
      desc: "Modernize your research with our intuitive digital platform. Track borrowed materials, reserve seminar rooms, and access e-resources with just a few clicks - no more manual registers or waiting in lines.",
      border: "border-purple-500",
      iconColor: "bg-gradient-to-br from-purple-500 to-indigo-600",
      stats: "80% faster checkouts",
    },
    {
      icon: "🔍",
      title: "Research Empowerment",
      desc: "We specialize in academic resources that go beyond textbooks - journal collections, thesis papers, and rare seminar materials that inspire deeper investigation and critical thinking.",
      border: "border-amber-500",
      iconColor: "bg-gradient-to-br from-amber-400 to-orange-500",
      stats: "200+ specialized journals",
    },
    {
      icon: "🌐",
      title: "24/7 Digital Access",
      desc: "Our online portal gives you instant access to e-books, recorded seminars, and academic databases anytime, anywhere. Perfect for late-night study sessions or remote research.",
      border: "border-emerald-500",
      iconColor: "bg-gradient-to-br from-emerald-400 to-teal-600",
      stats: "3000+ digital assets",
    },
    {
      icon: "👥",
      title: "Collaborative Learning",
      desc: "The library isn't just about books - it's a hub for academic exchange. Reserve our seminar rooms for group discussions, presentations, or study sessions with advanced AV equipment.",
      border: "border-rose-500",
      iconColor: "bg-gradient-to-br from-rose-400 to-pink-600",
      stats: "10+ seminar spaces",
    },
    {
      icon: "🆕",
      title: "Continuous Updates",
      desc: "Our collection grows weekly with the latest publications, ensuring you have access to cutting-edge research and contemporary academic discourse in your field.",
      border: "border-indigo-500",
      iconColor: "bg-gradient-to-br from-indigo-400 to-blue-600",
      stats: "100+ new additions monthly",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-white via-blue-50 to-indigo-100 py-20 px-4 sm:px-6 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Transforming Academic Research
          </h2>
          <p className="text-xl text-blue-800 max-w-3xl mx-auto">
            Our seminar library redefines learning with cutting-edge resources
            and technology to support your academic journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`relative p-6 rounded-xl bg-white border-t-4 ${feature.border} shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Icon */}
              <div
                className={`absolute -top-6 left-6 w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl ${feature.iconColor} shadow-md`}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <div className="pt-8">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-700 mb-4">{feature.desc}</p>
                <div className="text-sm font-medium text-blue-600">
                  {feature.stats}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 text-center max-w-4xl mx-auto border border-blue-100">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Our Commitment
          </h3>
          <p className="text-gray-700 mb-6">
            As a premier academic resource center, we're dedicated to fostering
            intellectual growth through:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Comprehensive Collections",
              "Digital Innovation",
              "Research Support",
              "Accessible Learning",
              "Academic Community Building",
            ].map((item, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
