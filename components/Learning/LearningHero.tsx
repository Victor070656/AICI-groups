export default function LearningHero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div
        className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-lg items-center justify-center text-center px-4 py-10 sm:px-10 shadow-lg relative overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 51, 160, 0.2) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD8kOCc32Am5aytbTCIoud3VBgGb3SXxdELlDoA75d2-WTkDs4vPRO7y8WG21RaJvMvI55tPOIbuSPQNkiPT4xjJYloz16JWIDMSgunsxrKAp-JtVTZLV3YrEVepMXNmMJQYgJ_qjk1itEp88ySD5LGYzgMpcJ0or2fwwSxbPI_UkCaUxMeTWtEJ9GXadsdsV0jv1099a6cu3KrgESwLbtJxdzFAH2zNWq7CqW7ReaOpeUD4wjzcqqe1TtZHiwkdaA-QETIoZGlqrY")',
        }}
      >
        <div className="flex flex-col gap-4 max-w-3xl mx-auto relative z-10">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
            Elevate Your Real Estate Expertise
          </h1>
          <h2 className="text-white/95 text-base md:text-lg font-normal leading-relaxed font-body">
            Advance your career with our industry-leading courses, designed for
            ambitious agents, investors, and real estate professionals. Unlock
            your potential with expert-led training.
          </h2>
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 md:h-14 px-8 md:px-10 bg-red-600 text-white text-base md:text-lg font-bold leading-normal tracking-wide hover:shadow-xl hover:scale-105 transition-all duration-300 mx-auto mt-6 relative z-10">
          <span className="truncate">View Courses</span>
        </button>
      </div>
    </div>
  );
}
