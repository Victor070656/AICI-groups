export default function Testimonials() {
  return (
    <section className="px-6 sm:px-8 lg:px-16 py-20 lg:py-32 bg-gray-50 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-red-600 font-semibold text-sm tracking-widest uppercase mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-gray-900  text-4xl lg:text-5xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-blue-800 rounded-full mx-auto"></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main testimonial */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-12 lg:p-16">
            {/* Quote icon top */}
            <div className="absolute -top-6 left-12">
              <div className="flex items-center justify-center size-16 rounded-2xl bg-gradient-to-br from-red-600 to-blue-800 text-white shadow-xl">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center justify-center gap-2 mb-8 mt-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-yellow-700 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <blockquote className="font-display text-gray-800 text-2xl lg:text-3xl italic leading-relaxed text-center mb-10">
              &ldquo;Working with AICI Group was a game-changer for our
              portfolio. Their market insight and dedication to our success were
              evident from day one. We couldn&apos;t be happier with the
              results.&rdquo;
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <div className="size-16 rounded-full bg-gradient-to-br from-red-600 to-blue-800"></div>
              <div className="text-left">
                <p className="font-sans text-gray-900  font-bold text-lg">
                  Jane Doe
                </p>
                <p className="font-sans text-gray-600  text-sm">
                  CEO, Innovate Corp
                </p>
              </div>
            </div>

            {/* Quote icon bottom */}
            <div className="absolute -bottom-6 right-12">
              <div className="flex items-center justify-center size-16 rounded-2xl bg-gradient-to-br from-blue-800 to-yellow-700 text-white shadow-xl">
                <svg
                  className="w-8 h-8 rotate-180"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex items-center justify-center gap-3 mt-12">
            <button className="size-3 rounded-full bg-gradient-to-r from-red-600 to-blue-800 shadow-lg"></button>
            <button className="size-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"></button>
            <button className="size-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"></button>
          </div>
        </div>
      </div>
    </section>
  );
}
