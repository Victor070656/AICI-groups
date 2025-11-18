"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Play, Star, CheckCircle, DollarSign, ChevronLeft, ChevronRight, Building, TrendingUp, Users, Award } from "lucide-react";

const slides = [
  {
    id: 1,
    badge: "🏆 Award-Winning Excellence",
    title: "Building <span class='text-accent'>Futures</span>,<br />Delivering <span class='text-accent'>Excellence</span>",
    description: "Your trusted partner in real estate and consultancy, creating value and opportunities for a better tomorrow.",
    bgImage: "/work/img/12.jpeg",
    primaryButton: { text: "Explore Our Services", icon: <ArrowRight className="w-5 h-5" /> },
    secondaryButton: { text: "Watch Video", icon: <Play className="w-6 h-6" /> },
    stats: [
      { icon: <Star className="w-5 h-5 text-accent" />, text: "4.9/5 Client Rating" },
      { icon: <CheckCircle className="w-5 h-5 text-accent" />, text: "500+ Projects Completed" },
      { icon: <DollarSign className="w-5 h-5 text-accent" />, text: "$2B+ Assets Managed" }
    ]
  },
  {
    id: 2,
    badge: "🏢 Premium Properties",
    title: "<span class='text-accent'>Real Estate</span> Solutions<br />That Transform Lives",
    description: "Discover exceptional residential and commercial properties across Nigeria's prime locations with unmatched investment potential.",
    bgImage: "/work/img/10.jpeg",
    primaryButton: { text: "View Properties", icon: <Building className="w-5 h-5" /> },
    secondaryButton: { text: "Property Consultation", icon: <Users className="w-6 h-6" /> },
    stats: [
      { icon: <Building className="w-5 h-5 text-accent" />, text: "1000+ Properties" },
      { icon: <TrendingUp className="w-5 h-5 text-accent" />, text: "15+ Cities" },
      { icon: <Users className="w-5 h-5 text-accent" />, text: "2000+ Happy Clients" }
    ]
  },
  {
    id: 3,
    badge: "🎯 Strategic Advisory",
    title: "<span class='text-accent'>Expert Consultancy</span><br />For Business Growth",
    description: "Leverage our comprehensive business consulting and financial advisory services to drive sustainable growth and operational excellence.",
    bgImage: "/work/img/15.jpeg",
    primaryButton: { text: "Consulting Services", icon: <TrendingUp className="w-5 h-5" /> },
    secondaryButton: { text: "Free Assessment", icon: <Award className="w-6 h-6" /> },
    stats: [
      { icon: <Award className="w-5 h-5 text-accent" />, text: "25+ Years Experience" },
      { icon: <Users className="w-5 h-5 text-accent" />, text: "100+ Corporate Clients" },
      { icon: <TrendingUp className="w-5 h-5 text-accent" />, text: "95% Success Rate" }
    ]
  },
  {
    id: 4,
    badge: "🌟 Our Subsidiaries",
    title: "<span class='text-accent'>Diverse Portfolio</span>Of Expert Services",
    description: "From real estate to supply chain consultancy, our specialized subsidiaries deliver excellence across multiple sectors.",
    bgImage: "/work/img/18.jpeg",
    primaryButton: { text: "Our Subsidiaries", icon: <Building className="w-5 h-5" /> },
    secondaryButton: { text: "Learn More", icon: <Award className="w-6 h-6" /> },
    stats: [
      { icon: <Building className="w-5 h-5 text-accent" />, text: "4 Specialized Units" },
      { icon: <Users className="w-5 h-5 text-accent" />, text: "200+ Professionals" },
      { icon: <TrendingUp className="w-5 h-5 text-accent" />, text: "10 Industries Served" }
    ]
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative overflow-hidden">
      {/* Background layers with transition */}
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-red-950/70 to-blue-900/75 z-10"></div>
        <div
          className="absolute inset-0 opacity-60 z-0 transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url("${currentSlideData.bgImage}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse z-10"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse z-10"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative z-20 flex min-h-[85vh] flex-col gap-8 items-center justify-center p-6 sm:p-12 text-center">
        <div className="flex flex-col gap-6 max-w-4xl">
          {/* Badge */}
          <div className="inline-block">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20 mb-4 animate-fade-in-up">
              {currentSlideData.badge}
            </span>
          </div>

          {/* Title */}
          <h1
            className="font-display text-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight animate-fade-in-up"
            dangerouslySetInnerHTML={{ __html: currentSlideData.title }}
          ></h1>

          {/* Description */}
          <p className="font-sans text-white/95 text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto animate-fade-in-up">
            {currentSlideData.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 animate-fade-in-up">
            <button className="btn-premium group flex items-center justify-center gap-3 overflow-hidden rounded-full h-14 px-10 bg-white text-secondary text-base font-semibold shadow-2xl hover:shadow-white/20">
              <span>{currentSlideData.primaryButton.text}</span>
              {currentSlideData.primaryButton.icon}
            </button>

            <button className="flex items-center justify-center gap-3 rounded-full h-14 px-10 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white text-base font-semibold hover:bg-white/20 transition-all duration-300">
              {currentSlideData.secondaryButton.icon}
              <span>{currentSlideData.secondaryButton.text}</span>
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-white/90 text-sm animate-fade-in-up">
            {currentSlideData.stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2">
                {stat.icon}
                <span>{stat.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-4">
        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center hover:bg-white/20 transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "w-10 h-2 bg-white"
                  : "w-2 h-2 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={goToNext}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center hover:bg-white/20 transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-30">
        <div
          key={currentSlide}
          className="h-full bg-white transition-all duration-5000 ease-linear"
          style={{
            animation: isAutoPlaying ? 'slideProgress 5s linear' : 'none'
          }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes slideProgress {
          from { width: 0%; }
          to { width: 100%; }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
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
