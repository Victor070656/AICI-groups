import {
  Building,
  Building2,
  BarChart3,
  TrendingUp,
  Scale,
  Home,
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "AICI Management Consult & Financial Advisory Services",
    description:
      "Strategic business consulting, financial planning, and investment advisory for private and corporate clients.",
  },
  {
    icon: Building,
    title: "AICI Properties Limited",
    description:
      "Specializing in estate management, property administration, and real estate investment services across Nigeria.",
  },
  {
    icon: Building2,
    title: "AICI Projects & Construction Limited",
    description:
      "Covering residential and commercial building, renovations, and civil engineering projects.",
  },
  {
    icon: Home,
    title: "AICI Facility & Property Administration Services",
    description:
      "Ensuring sustainable, safe, and efficient property operations and technical support.",
  },
  {
    icon: Scale,
    title: "AICMRCY Supply Chain and Capacity Consultancy",
    description:
      "Dedicated to optimizing supply chains, improving operational capacity, and enhancing organizational performance.",
  },
  {
    icon: TrendingUp,
    title: "AICI Multi-Family Office Services Limited",
    description:
      "Providing bespoke family office administration and wealth management solutions for high-net-worth families.",
  },
];

export default function ServicesGrid() {
  return (
    <div className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-blue-800 text-3xl md:text-4xl font-bold font-display leading-tight tracking-tight">
          Our Specialized Subsidiaries
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 text-center items-center shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <div className="text-red-600 transform transition-transform duration-300 group-hover:scale-110">
              <service.icon className="w-10 h-10" />
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
