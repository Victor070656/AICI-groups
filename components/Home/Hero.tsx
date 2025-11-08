import { ArrowRight, Play, Star, CheckCircle, DollarSign } from "lucide-react";

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
              <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
            </button>

            <button className="flex items-center justify-center gap-3 rounded-full h-14 px-10 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white text-base font-semibold hover:bg-white/20 transition-all duration-300">
              <Play className="w-6 h-6" />
              <span>Watch Video</span>
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-accent" />
              <span>4.9/5 Client Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>500+ Projects Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-accent" />
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
