import { Building, Lightbulb, Package, Crown, ChevronRight } from "lucide-react";

const subsidiaries = [
  {
    title: "AICI Properties Limited",
    description:
      "Specializing in estate management, property administration, and real estate investment services across Nigeria.",
    image: "/work/img/08.jpeg",
    badge: "Real Estate",
    badgeColor: "bg-yellow-700",
    icon: <Building className="w-6 h-6" />,
    gradient: "from-red-600 to-blue-800",
    href: "/subsidiaries/aici-properties",
  },
  {
    title: "AICI Management Consult & Financial Advisory",
    description:
      "Strategic business consulting, financial planning, and investment advisory for private and corporate clients.",
    image: "/work/img/15.jpeg",
    badge: "Consulting",
    badgeColor: "bg-blue-800",
    icon: <Lightbulb className="w-6 h-6" />,
    gradient: "from-blue-800 to-red-600",
    href: "/subsidiaries/amc-fas",
  },
  {
    title: "AICMRCY Supply Chain & Capacity Consultancy",
    description:
      "Dedicated to optimizing supply chains, improving operational capacity, and enhancing organizational performance across industries.",
    image: "/work/img/18.jpeg",
    badge: "Supply Chain",
    badgeColor: "bg-green-700",
    icon: <Package className="w-6 h-6" />,
    gradient: "from-green-700 to-blue-800",
    href: "/subsidiaries/aicmrcy",
  },
  {
    title: "AICI Multi-Family Office Services Limited",
    description:
      "Bespoke family office administration and wealth management solutions for high-net-worth families and private clients.",
    image: "/work/img/10.jpeg",
    badge: "Family Office",
    badgeColor: "bg-purple-700",
    icon: <Crown className="w-6 h-6" />,
    gradient: "from-purple-700 to-red-600",
    href: "/subsidiaries/am-fosltd",
  },
];

export default function Subsidiaries() {
  return (
    <section
      id="subsidiaries"
      className="px-6 sm:px-8 lg:px-16 py-20 lg:py-32 bg-gray-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border-2 border-blue-800 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 border-2 border-red-600 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-red-600 font-semibold text-sm tracking-widest uppercase mb-4">
            Our Portfolio
          </span>
          <h2 className="font-display text-gray-900 text-4xl lg:text-5xl font-bold mb-6">
            Our Subsidiaries
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">
            Discover our diverse range of specialized services across multiple
            sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {subsidiaries.map((subsidiary, index) => (
            <div
              key={index}
              className="group flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden hover-lift card-shine transition-all duration-500"
            >
              <div className="relative h-72 overflow-hidden">
                <div
                  className="w-full h-full bg-center bg-no-repeat bg-cover transform transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url("${subsidiary.image}")` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${subsidiary.badgeColor} text-white`}
                  >
                    {subsidiary.badge}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  {/* <div
                    className={`flex items-center justify-center size-12 rounded-xl bg-gradient-to-br ${subsidiary.gradient} text-white`}
                  >
                    {subsidiary.icon}
                  </div> */}
                  <h3 className="font-display text-gray-900 text-xl font-bold leading-tight">
                    {subsidiary.title}
                  </h3>
                </div>

                <p className="font-sans text-gray-600 text-sm leading-relaxed mb-6">
                  {subsidiary.description}
                </p>

                <a
                  href={subsidiary.href}
                  className="inline-flex items-center gap-2 text-red-600 font-semibold text-sm group/link"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4 transform transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}