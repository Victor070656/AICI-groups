const values = [
  {
    title: "Integrity",
    description:
      "We uphold the highest standards of honesty and ethical behavior in all of our actions.",
    image:
      "/work/img/02.jpeg",
  },
  {
    title: "Excellence",
    description:
      "We are committed to quality and strive for the best in everything we do.",
    image:
      "/work/img/03.jpeg",
  },
  {
    title: "Innovation",
    description:
      "We embrace new ideas and technologies to drive progress and create value.",
    image:
      "/work/img/04.jpeg",
  },
  {
    title: "Partnership",
    description:
      "We believe in building lasting relationships with our clients and partners based on trust.",
    image:
      "/work/img/05.jpeg",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-gray-100 w-full py-10 rounded-3xl md:py-20">
      <div className="mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col gap-4 text-center items-center mb-12">
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl font-display text-gray-900 ">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 pb-3 items-center text-center group"
            >
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl shadow-md transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl"
                style={{ backgroundImage: `url("${value.image}")` }}
              />
              <div className="mt-2">
                <h3 className="text-lg font-bold leading-normal font-display text-gray-900 ">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm font-normal leading-relaxed font-body mt-1">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
