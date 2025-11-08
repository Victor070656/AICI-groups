const services = [
  {
    icon: "real_estate_agent",
    title: "Real Estate Brokerage",
    description:
      "Expert guidance for buying, selling, and leasing residential and commercial properties.",
  },
  {
    icon: "apartment",
    title: "Property Management",
    description:
      "Comprehensive services for property owners to maximize returns and ensure peace of mind.",
  },
  {
    icon: "analytics",
    title: "Market Analysis & Research",
    description:
      "Data-driven insights and detailed market reports to inform your investment decisions.",
  },
  {
    icon: "trending_up",
    title: "Investment Consultancy",
    description:
      "Strategic advisory services for building and managing a successful real estate portfolio.",
  },
  {
    icon: "gavel",
    title: "Legal & Financial Advisory",
    description:
      "Access our network of partners for seamless legal and financial guidance through every transaction.",
  },
  {
    icon: "foundation",
    title: "Development & Planning",
    description:
      "End-to-end support for new construction projects, from initial concept to final execution.",
  },
];

export default function ServicesGrid() {
  return (
    <div className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-blue-800 text-3xl md:text-4xl font-bold font-display leading-tight tracking-tight">
          Comprehensive Real Estate & Consultancy Services
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 text-center items-center shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <div className="text-red-600 text-4xl transform transition-transform duration-300 group-hover:scale-110">
              <span className="material-symbols-outlined !text-4xl">
                {service.icon}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-blue-800 text-xl font-bold font-display">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm font-normal font-body leading-relaxed">
                {service.description}
              </p>
              <a
                href="#"
                className="text-red-600 font-bold mt-2 text-sm hover:underline inline-flex items-center gap-1 justify-center group/link"
              >
                <span>Learn More</span>
                <svg
                  className="w-4 h-4 transform transition-transform group-hover/link:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
