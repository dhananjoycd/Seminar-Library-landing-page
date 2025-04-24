import React from "react";

const steps = [
  {
    icon: "🔍",
    title: "Explore the Collection",
    description:
      "Browse our curated Mathematics and Science books—textbooks, references, and research materials.",
    color: "bg-amber-500",
    glow: "shadow-amber-300/50",
    border: "border-amber-400",
    text: "text-amber-800",
    position: "-top-5 -left-5",
  },
  {
    icon: "📖",
    title: "Read or Borrow",
    description:
      "Enjoy our reading spaces or borrow titles with our streamlined digital checkout system.",
    color: "bg-emerald-500",
    glow: "shadow-emerald-300/50",
    border: "border-emerald-400",
    text: "text-emerald-800",
    position: "-top-5 -right-5",
  },
  {
    icon: "📊",
    title: "Track & Manage",
    description:
      "Monitor your borrowing history and organize resources with our digital dashboard.",
    color: "bg-blue-500",
    glow: "shadow-blue-300/50",
    border: "border-blue-400",
    text: "text-blue-800",
    position: "-bottom-5 -left-5",
  },
  {
    icon: "🌐",
    title: "Digital Access",
    description:
      "Access e-books and journals anytime through our online portal.",
    color: "bg-purple-500",
    glow: "shadow-purple-300/50",
    border: "border-purple-400",
    text: "text-purple-800",
    position: "-bottom-5 -right-6",
  },
];

const InfoSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28 relative">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          How Our Seminar Library Works
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the simple steps to access our vast collection of academic
          resources.
        </p>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-10 relative z-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative group ${
                index % 2 === 0 ? "md:pr-10 text-right" : "md:pl-10 text-left"
              } ${index >= 1 ? "md:mt-10" : ""}`}
            >
              {/* Connecting Dot */}

              {/* Step Card */}
              <div
                className={`relative p-6 rounded-xl bg-white border-2 ${step.border} shadow-lg ${step.glow} transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1`}
              >
                {/* Icon */}
                <div
                  className={`absolute ${step.position} w-14 h-14 flex items-center justify-center rounded-full ${step.color} text-white text-2xl font-bold ring-4 ring-white transition-transform group-hover:scale-110 group-hover:rotate-6`}
                >
                  {step.icon}
                </div>

                {/* Text */}
                <div className="ml-4">
                  <h3 className={`text-xl font-bold ${step.text} mb-3`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {/* Decorative Circles */}
                <div
                  className={`absolute -bottom-3 -right-3 w-16 h-16 rounded-full ${step.color} opacity-10 -z-10`}
                ></div>
                <div
                  className={`absolute -top-3 -right-3 w-10 h-10 rounded-full ${step.color} opacity-20 -z-10`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Blobs */}
      <div className="absolute left-0 top-0 w-full h-full overflow-hidden -z-10 opacity-10">
        <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-blue-300 blur-3xl"></div>
        <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-emerald-300 blur-3xl"></div>
      </div>
    </div>
  );
};

export default InfoSection;
