import { Clock, PlayCircle, Calendar, Star, Users } from "lucide-react";

const courses = [
  {
    id: "realestate-fundamentals",
    title: "Real Estate Fundamentals Masterclass",
    category: "Real Estate",
    difficulty: "Beginner",
    description:
      "Master the essentials of real estate investment, property management, and market analysis in this comprehensive introductory course.",
    duration: "6 weeks",
    totalHours: "24 hours",
    price: 75000,
    originalPrice: 100000,
    rating: 4.8,
    reviewsCount: 342,
    studentsCount: 5678,
    availability: "Enrolling Now",
    image: "/work/img/12.jpeg",
    buttonText: "View Course",
    buttonColor: "bg-red-600",
    featured: true,
  },
  {
    id: "property-management-pro",
    title: "Property Management Professional Certification",
    category: "Property Management",
    difficulty: "Advanced",
    description:
      "Advanced certification program for professional property managers covering operations, finance, and legal compliance.",
    duration: "8 weeks",
    totalHours: "32 hours",
    price: 125000,
    originalPrice: 150000,
    rating: 4.9,
    reviewsCount: 256,
    studentsCount: 2345,
    availability: "On-demand",
    image: "/work/img/15.jpeg",
    buttonText: "View Course",
    buttonColor: "bg-red-600",
    featured: true,
  },
  {
    id: "investment-strategies",
    title: "Strategic Real Estate Investment",
    category: "Investment",
    difficulty: "Intermediate",
    description:
      "Learn advanced investment strategies, market timing, and portfolio optimization for maximum returns in real estate.",
    duration: "7 weeks",
    totalHours: "28 hours",
    price: 100000,
    originalPrice: 125000,
    rating: 4.7,
    reviewsCount: 189,
    studentsCount: 1890,
    availability: "Enrolling Now",
    image: "/work/img/18.jpeg",
    buttonText: "View Course",
    buttonColor: "bg-blue-800",
    featured: false,
  },
];

export default function CourseGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course, index) => (
        <a
          key={index}
          href={`/learning/${course.id}`}
          className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
        >
          {/* Featured Badge */}
          {course.featured && (
            <div className="absolute top-4 right-4 z-10 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Featured
            </div>
          )}

          <div className="relative h-48 bg-gradient-to-br from-red-100 to-blue-100">
            <div
              className="w-full h-full bg-center bg-no-repeat bg-cover transform transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url("${course.image}")` }}
            />
          </div>

          <div className="p-6 flex flex-col flex-grow">
            {/* Badges */}
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-wider bg-red-600/10 text-red-600 px-2 py-1 rounded-full font-body">
                {course.category}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider bg-gray-200 text-gray-700 px-2 py-1 rounded-full font-body">
                {course.difficulty}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-gray-900 text-xl font-bold mb-2 font-display group-hover:text-red-600 transition-colors">
              {course.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4 leading-relaxed font-body flex-grow">
              {course.description}
            </p>

            {/* Rating and Students */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-600 fill-current" />
                <span className="text-sm font-semibold text-gray-900">{course.rating}</span>
                <span className="text-sm text-gray-500">({course.reviewsCount})</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Users className="w-4 h-4" />
                <span>{course.studentsCount.toLocaleString()}</span>
              </div>
            </div>

            {/* Course Info */}
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Clock className="w-4 h-4 mr-2" />
              <span>{course.duration}</span>
              <span className="mx-3">•</span>
              <span>{course.totalHours}</span>
            </div>

            {/* Price and Availability */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-gray-900">
                    ₦{course.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    ₦{course.originalPrice.toLocaleString()}
                  </span>
                </div>
                <p className="text-xs text-green-600 font-semibold">
                  Save {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}%
                </p>
              </div>
              <span className="text-sm text-gray-600">
                {course.availability}
              </span>
            </div>

            {/* CTA Button */}
            <button
              className={`w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 ${course.buttonColor} text-white text-base font-bold leading-normal tracking-wide hover:opacity-90 transition-opacity`}
            >
              <span className="truncate">{course.buttonText}</span>
            </button>
          </div>
        </a>
      ))}
    </div>
  );
}
