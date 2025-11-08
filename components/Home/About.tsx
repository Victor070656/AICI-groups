export default function About() {
  return (
    <section
      id="about"
      className="px-6 sm:px-8 lg:px-16 py-20 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div>
              <span className="inline-block text-red-600 font-semibold text-sm tracking-widest uppercase mb-4">
                About Our Company
              </span>
              <h2 className="font-display text-gray-900  text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Welcome to <span className="gradient-text">AICI Group</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-blue-800 rounded-full mt-6"></div>
            </div>

            <p className="font-sans text-gray-600  text-lg font-light leading-relaxed">
              AICI Group is a premier real estate and consultancy firm dedicated
              to delivering exceptional value to our clients. With a rich
              history of integrity and a future-focused vision, we specialize in
              creating strategic solutions across our diverse portfolio of
              services.
            </p>

            <p className="font-sans text-gray-600  text-lg font-light leading-relaxed">
              Our commitment to excellence ensures we achieve outstanding
              results in every project we undertake, building lasting
              partnerships that stand the test of time.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="font-display text-4xl font-bold gradient-text">
                  25+
                </div>
                <div className="text-gray-600 text-sm mt-2">
                  Years Experience
                </div>
              </div>
              <div className="text-center border-x border-gray-200 dark:border-gray-700">
                <div className="font-display text-4xl font-bold gradient-text">
                  500+
                </div>
                <div className="text-gray-600 text-sm mt-2">
                  Projects
                </div>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl font-bold gradient-text">
                  98%
                </div>
                <div className="text-gray-600 text-sm mt-2">
                  Satisfaction
                </div>
              </div>
            </div>

            <div>
              <button className="btn-premium group flex items-center gap-3 overflow-hidden rounded-full h-14 px-10 bg-gradient-to-r from-red-600 to-blue-800 text-white text-base font-semibold shadow-xl">
                <span>Discover Our Story</span>
                <svg
                  className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift">
              <div
                className="w-full h-[500px] lg:h-[600px] bg-center bg-no-repeat bg-cover"
                style={{
                  backgroundImage:
                    'url("/work/img/10.jpeg")',
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-to-blue-800/30 to-transparent"></div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-8 -left-8 bg-white  backdrop-blur-md rounded-2xl p-6 shadow-2xl max-w-xs hover-lift border border-gray-100 ">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center size-14 rounded-full bg-gradient-to-br from-red-600 to-blue-800 text-white">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-gray-900 ">
                    ISO 9001
                  </div>
                  <div className="text-gray-600 text-sm">
                    Certified Quality
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 right-12 w-40 h-40 bg-red-600/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
