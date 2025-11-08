export default function ServicesCTA() {
  return (
    <div className="text-center bg-blue-800 text-white rounded-xl my-16 md:my-24 py-16 px-8">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
        <h2 className="text-3xl md:text-4xl font-bold font-display">
          Let&apos;s Build Your Real Estate Future Together
        </h2>
        <p className="text-white/90 font-body text-lg">
          Ready to take the next step? Our team of experts is here to provide
          personalized guidance and support for all your real estate needs.
        </p>
        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-red-600 text-white text-base font-bold font-body tracking-wide transition-all duration-300 hover:bg-red-800 hover:shadow-lg mt-4">
          <span className="truncate">Contact Us Today</span>
        </button>
      </div>
    </div>
  );
}
