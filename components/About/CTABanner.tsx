export default function CTABanner() {
  return (
    <section className="w-full py-10 md:py-20 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-red-600 text-white p-10 md:p-16 rounded-xl shadow-xl">
        <div className="flex flex-col gap-2 max-w-xl text-center md:text-left">
          <h2 className="text-3xl font-bold leading-tight font-display">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/90 text-base font-normal leading-relaxed font-body">
            Let&apos;s connect and explore how our expertise can help you
            achieve your real estate goals.
          </p>
        </div>
        <button className="flex min-w-[160px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-blue-800 text-white text-base font-bold leading-normal tracking-[0.015em] font-body shadow-lg hover:bg-blue-800/90 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap">
          <span className="truncate">Contact Us</span>
        </button>
      </div>
    </section>
  );
}
