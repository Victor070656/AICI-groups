import { Eye, Flag } from "lucide-react";

export default function VisionMission() {
  const items = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Our Vision",
      description:
        "To be the leading and most trusted real estate consultancy, shaping skylines and building sustainable communities for future generations.",
    },
    {
      icon: <Flag className="w-8 h-8" />,
      title: "Our Mission",
      description:
        "To provide exceptional, client-centric real estate solutions through integrity, innovation, and unparalleled market expertise.",
    },
  ];

  return (
    <section className="flex flex-col gap-12 px-4 sm:px-8 lg:px-16 py-10 md:py-20">
      <div className="flex flex-col gap-4 text-center items-center">
        <h2 className="tracking-light text-3xl font-bold leading-tight sm:text-4xl md:text-5xl font-display text-gray-900 max-w-2xl">
          Our Vision and Mission
        </h2>
        <p className="text-gray-600 text-base font-normal leading-relaxed max-w-3xl font-body">
          At AICI Group, we are driven by a clear vision for the future,
          supported by a mission that guides our daily actions and commitment to
          our clients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-1 gap-4 rounded-xl border border-gray-200  bg-white p-6 flex-col shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-center size-16 rounded-full bg-red-600/10 text-red-600">
              {item.icon}
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold leading-tight font-display text-gray-900 ">
                {item.title}
              </h3>
              <p className="text-gray-600 text-base font-normal leading-relaxed font-body">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
