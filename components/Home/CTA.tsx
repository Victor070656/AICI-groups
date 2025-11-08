import { Zap, ArrowRight, Phone, CheckCircle, Clock, User } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="px-6 sm:px-8 lg:px-16 py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-800 via-blue-800 to-red-800 z-0"></div>

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10 z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl z-10"></div>

      <div className="max-w-5xl mx-auto relative z-20">
        <div className="text-center space-y-8">
          {/* Icon */}
          <div className="inline-flex items-center justify-center size-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white shadow-2xl">
            <Zap className="w-10 h-10" />
          </div>

          <h2 className="font-display text-white text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Partner with Us on Your
            <br />
            Next <span className="text-accent">Project</span>
          </h2>

          <p className="font-sans text-white/95 text-lg lg:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Let&apos;s build the future together. Reach out to our team to
            discover how our expertise can bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button className="group flex items-center justify-center gap-3 overflow-hidden rounded-full h-16 px-10 bg-white text-secondary text-lg font-bold shadow-2xl hover:shadow-white/20 transform hover:-translate-y-1 transition-all duration-300">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
            </button>

            <button className="flex items-center justify-center gap-3 rounded-full h-16 px-10 bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white text-lg font-bold hover:bg-white/20 transition-all duration-300">
              <Phone className="w-5 h-5" />
              <span>Schedule a Call</span>
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-12 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>Response within 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent" />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-accent"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>No obligations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
