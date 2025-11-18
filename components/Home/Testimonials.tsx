"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    position: "CEO, Innovate Corp",
    rating: 5,
    content: "Working with AICI Group was a game-changer for our portfolio. Their market insight and dedication to our success were evident from day one. We couldn't be happier with the results.",
    avatar: "bg-gradient-to-br from-red-600 to-blue-800"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Managing Director, Global Properties",
    rating: 5,
    content: "AICI Properties transformed our real estate investments. Their expertise in property management and market analysis has significantly increased our portfolio value. Exceptional service!",
    avatar: "bg-gradient-to-br from-blue-800 to-green-700"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    position: "Founder, TechStart Africa",
    rating: 5,
    content: "The strategic advisory services from AMC & FAS helped us navigate complex business challenges. Their insights were invaluable in scaling our operations across multiple markets.",
    avatar: "bg-gradient-to-br from-green-700 to-purple-700"
  },
  {
    id: 4,
    name: "Robert Williams",
    position: "Operations Director, SupplyChain Solutions",
    rating: 5,
    content: "AICMRCY's supply chain optimization services reduced our operational costs by 30% while improving efficiency. Their data-driven approach is simply outstanding.",
    avatar: "bg-gradient-to-br from-purple-700 to-red-600"
  },
  {
    id: 5,
    name: "Elizabeth Thompson",
    position: "Family Office Client",
    rating: 5,
    content: "AM-FOSLTD has been instrumental in preserving our family wealth and planning for future generations. Their personalized approach and attention to detail is unmatched.",
    avatar: "bg-gradient-to-br from-yellow-700 to-blue-800"
  }
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const goToPrevious = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonialData = testimonials[currentTestimonial];

  return (
    <section className="px-6 sm:px-8 lg:px-16 py-20 lg:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-red-600 font-semibold text-sm tracking-widest uppercase mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-gray-900 text-4xl lg:text-5xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-blue-800 rounded-full mx-auto"></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main testimonial card with transition */}
          <div className="relative">
            <div
              className="bg-white rounded-3xl shadow-2xl p-12 lg:p-16 transition-all duration-500 ease-in-out transform"
              key={currentTestimonial}
            >
              {/* Quote icon top */}
              <div className="absolute -top-6 left-12">
                <div className="flex items-center justify-center size-16 rounded-2xl bg-gradient-to-br from-red-600 to-blue-800 text-white shadow-xl">
                  <Star className="w-8 h-8 fill-current" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-8 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${i < currentTestimonialData.rating ? 'text-yellow-700 fill-current' : 'text-gray-300'}`}
                    viewBox="0 0 20 20"
                  />
                ))}
              </div>

              <blockquote className="font-display text-gray-800 text-2xl lg:text-3xl italic leading-relaxed text-center mb-10 animate-fade-in">
                &ldquo;{currentTestimonialData.content}&rdquo;
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <div className={`size-16 rounded-full ${currentTestimonialData.avatar}`}></div>
                <div className="text-left">
                  <p className="font-sans text-gray-900 font-bold text-lg">
                    {currentTestimonialData.name}
                  </p>
                  <p className="font-sans text-gray-600 text-sm">
                    {currentTestimonialData.position}
                  </p>
                </div>
              </div>

              {/* Quote icon bottom */}
              <div className="absolute -bottom-6 right-12">
                <div className="flex items-center justify-center size-16 rounded-2xl bg-gradient-to-br from-blue-800 to-yellow-700 text-white shadow-xl">
                  <Star className="w-8 h-8 fill-current" />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            {/* Previous button */}
            <button
              onClick={goToPrevious}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-white/30 text-gray-700 flex items-center justify-center hover:bg-white hover:text-red-600 transition-all duration-300 shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentTestimonial
                      ? "w-3 h-3 bg-gradient-to-r from-red-600 to-blue-800 shadow-lg"
                      : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next button */}
            <button
              onClick={goToNext}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-white/30 text-gray-700 flex items-center justify-center hover:bg-white hover:text-red-600 transition-all duration-300 shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Progress bar */}
          <div className="mt-8 flex justify-center">
            <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                key={currentTestimonial}
                className="h-full bg-gradient-to-r from-red-600 to-blue-800 transition-all duration-6000 ease-linear"
                style={{
                  animation: isAutoPlaying ? 'testimonialProgress 6s linear' : 'none'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes testimonialProgress {
          from { width: 0%; }
          to { width: 100%; }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
