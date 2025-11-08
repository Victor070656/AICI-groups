const subsidiaries = [
  {
    title: "AICI Real Estate",
    description:
      "Specializing in premier residential and commercial properties with unmatched market expertise.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1X334oErFy5aa3hrHg37OmRfSpDljUFtGMOFQ0BOieSFAXajDemLg5YibYYRLUYJqWmTDb5zOYqWFr-0ppG-9iedcWjKS3c1noHIeGcABJfZmu1myJylTuvmPAceXXhN9CJciZQrKCgO9eEZ27BnZU9XMTCoFFz35TaXx0dopDmc1JeFmQV3OT71MZnt3icI__BZvXXduIz1GlK_69aOh0kQEdi2uZN74l8DY-C95QmneB7uJvQaofUVuY39y5BHR6fGRBxw4mRE",
    badge: "Premium",
    badgeColor: "bg-yellow-700",
    icon: <Building className="w-6 h-6" />,
    gradient: "from-red-600 to-blue-800",
  },
  {
    title: "AICI Consulting",
    description:
      "Providing expert strategic advice for sustainable business growth and transformation.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-5Wg1J8_BSklzeEzgBjAGQA2Y96N_u0pmRsizdPz_w_OghQrH6--lCWtwlJzobouQNsL4-W5_X6AL_oFyI4KL_MIsXGn2AL6zKGFe-75GckbrfDw_CU0daivGsQmd1FvUZsu1-aRWFGU7h9fHSBpfZF4SuMxGhFFUfWlZUo68HgRcfWHvjW5lE1grz8FNHv9i_RIEMNuVyfWZbTsy0AbXTOp-sGm-Zybtpm9rMuU9APmadn32QfqlSt8klOqCFQlnbHshNL2fPe8",
    badge: "Strategic",
    badgeColor: "bg-blue-800",
    icon: <Lightbulb className="w-6 h-6" />,
    gradient: "from-blue-800 to-red-600",
  },
  {
    title: "AICI Capital",
    description:
      "Innovative financial solutions tailored to maximize your investment potential.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAFLnrxs9OI6ngf2eRvhdSpcPVGDHELOoNWJa-2Dq6NitTfMsyPWCZMcy0KBGmf2C4TrrnJ4g4tya1xcjlPKX9ziEXXJVsadG2s1RRaWVCSDRrCMKatRh6UcjuokFDEPBPllzszewGCiHs41MZKwCUVGiM5w4M8aYaLotI1pDfVoeHCSscCF7Xp3VXuxtYcFXDjLMHEqQHInABgK_1F_bcq7BBRcIT8PIdDGFNWqD90lz93kniEA3T3-7I42ohdJ1XpXqas_j2aLYU",
    badge: "Investment",
    badgeColor: "bg-yellow-700",
    icon: <DollarSign className="w-6 h-6" />,
    gradient: "from-yellow-700 to-red-600",
  },
];

import { Building, Lightbulb, DollarSign, ChevronRight } from "lucide-react";

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div
                    className={`flex items-center justify-center size-12 rounded-xl bg-gradient-to-br ${subsidiary.gradient} text-white`}
                  >
                    {subsidiary.icon}
                  </div>
                  <h3 className="font-display text-gray-900 text-2xl font-bold">
                    {subsidiary.title}
                  </h3>
                </div>

                <p className="font-sans text-gray-600 text-base leading-relaxed mb-6">
                  {subsidiary.description}
                </p>

                <a
                  href="#"
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
