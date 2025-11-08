const values = [
  {
    title: "Integrity",
    description:
      "We uphold the highest standards of integrity in all of our actions, building trust through transparency.",
    icon: "verified_user",
  },
  {
    title: "Innovation",
    description:
      "We pursue new creative ideas that have the potential to change the world and drive progress.",
    icon: "emoji_objects",
  },
  {
    title: "Client-Centric",
    description:
      "Our clients are at the heart of everything we do, inspiring us to exceed expectations.",
    icon: "groups",
  },
  {
    title: "Partnership",
    description:
      "We build lasting relationships based on trust, mutual respect, and shared success.",
    icon: "handshake",
  },
];

export default function Values() {
  const gradients = [
    "from-primary to-secondary",
    "from-secondary to-accent",
    "from-accent to-primary",
    "from-primary via-secondary to-accent",
  ];

  return (
    <section
      id="values"
      className="px-6 sm:px-8 lg:px-16 py-20 lg:py-32 bg-white dark:bg-gray-950 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20 dark:opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-primary dark:text-accent font-semibold text-sm tracking-widest uppercase mb-4">
            What Drives Us
          </span>
          <h2 className="font-display text-gray-900 dark:text-white text-4xl lg:text-5xl font-bold mb-6">
            Our Core Values
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto font-light">
            The principles that guide every decision we make and every
            relationship we build
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"></div>
              <div className="relative flex flex-col items-center text-center p-8 space-y-6">
                <div className="relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}
                  ></div>
                  <div
                    className={`relative flex items-center justify-center size-20 rounded-2xl bg-gradient-to-br ${gradients[index]} text-white shadow-lg transform transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}
                  >
                    <span className="material-symbols-outlined text-5xl font-light">
                      {value.icon}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-gray-900 dark:text-white text-2xl font-bold">
                  {value.title}
                </h3>
                <p className="font-sans text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                  {value.description}
                </p>

                <div
                  className={`h-1 w-12 bg-gradient-to-r ${gradients[index]} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
