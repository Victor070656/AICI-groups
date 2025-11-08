export default function ServicesHero() {
  return (
    <div className="relative w-full rounded-xl overflow-hidden min-h-[450px] flex items-center p-8 md:p-16 mb-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("/work/img/12.jpeg")',
        }}
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col gap-6 max-w-xl text-left">
        <div className="flex flex-col gap-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold font-display leading-tight tracking-tight">
            Achieve Your Real Estate Goals with AICI Group
          </h1>
          <p className="text-base md:text-lg font-normal font-body leading-relaxed text-white/90">
            Expert consultancy and brokerage services to help you build your
            real estate future with confidence and clarity.
          </p>
        </div>
        <button className="flex min-w-[84px] w-fit cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-red-600 text-white text-base font-bold font-body tracking-wide transition-all duration-300 hover:bg-red-800 hover:shadow-lg">
          <span className="truncate">Book a Free Consultation</span>
        </button>
      </div>
    </div>
  );
}
