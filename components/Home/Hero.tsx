export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-red-950/70 to-blue-900/75 z-10"></div>
      <div
        className="absolute inset-0 opacity-60 z-0"
        style={{
          backgroundImage:
            'url("/work/img/12.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse z-10"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse z-10"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative z-20 flex min-h-[85vh] flex-col gap-8 items-center justify-center p-6 sm:p-12 text-center">
        <div className="flex flex-col gap-6 max-w-4xl">
          <div className="inline-block">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20 mb-4">
              🏆 Award-Winning Real Estate Excellence
            </span>
          </div>

          <h1 className="font-display text-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Building <span className="text-accent">Futures</span>,<br />
            Delivering <span className="text-accent">Excellence</span>
          </h1>

          <p className="font-sans text-white/95 text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Your trusted partner in real estate and consultancy, creating value
            and opportunities for a better tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <button className="btn-premium group flex items-center justify-center gap-3 overflow-hidden rounded-full h-14 px-10 bg-white text-secondary text-base font-semibold shadow-2xl hover:shadow-white/20">
              <span>Explore Our Services</span>
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

            <button className="flex items-center justify-center gap-3 rounded-full h-14 px-10 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white text-base font-semibold hover:bg-white/20 transition-all duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span>Watch Video</span>
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-accent"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>4.9/5 Client Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-accent"
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
              <span>500+ Projects Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>$2B+ Assets Managed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      {/* <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            className="fill-white dark:fill-gray-950"
          />
        </svg>
      </div> */}
    </section>
  );
}
