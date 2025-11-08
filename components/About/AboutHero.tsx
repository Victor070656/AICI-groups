export default function AboutHero() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 py-10 md:py-20">
      <div
        className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 text-center relative overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.7) 100%), url("/work/img/01.jpeg")',
        }}
      >
        <div className="flex flex-col gap-4 max-w-3xl z-10">
          <h1 className="text-white text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl font-display">
            Building the Future of Real Estate
          </h1>
          <p className="text-white/95 text-base font-normal leading-relaxed sm:text-lg md:text-xl font-body">
            Discover AICI Group&apos;s legacy and commitment to excellence in
            the real estate sector.
          </p>
        </div>
      </div>
    </section>
  );
}
