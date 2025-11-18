import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import { Calendar, Clock, User, ArrowLeft, Star, Play, BookOpen, Award, Users, CheckCircle, BarChart, Target, Lightbulb, DollarSign } from "lucide-react";

// Sample course data - in a real app, this would come from a CMS or database
const courses = [
  {
    id: "realestate-fundamentals",
    title: "Real Estate Fundamentals Masterclass",
    description: "Master the essentials of real estate investment, property management, and market analysis in this comprehensive introductory course.",
    longDescription: "This comprehensive masterclass covers everything you need to know to get started in real estate investing and management. Whether you're a beginner or looking to solidify your foundation, this course provides practical knowledge and actionable strategies.",
    category: "Real Estate",
    level: "Beginner",
    duration: "6 weeks",
    totalHours: "24 hours",
    price: 75000,
    currency: "NGN",
    originalPrice: 100000,
    instructor: {
      name: "Dr. Sarah Johnson",
      title: "Real Estate Investment Expert",
      bio: "With over 15 years of experience in real estate investment and property management, Dr. Johnson has helped thousands of students build successful careers in real estate.",
      image: "/work/img/instructor1.jpeg",
      rating: 4.9,
      studentsCount: 12500
    },
    rating: 4.8,
    reviewsCount: 342,
    studentsCount: 5678,
    lastUpdated: "2024-03-01",
    language: "English",
    certificate: true,
    image: "/work/img/12.jpeg",
    featured: true,
    whatYouWillLearn: [
      "Understand real estate market dynamics and trends",
      "Master property valuation techniques",
      "Learn effective investment strategies",
      "Navigate legal and regulatory requirements",
      "Develop property management skills",
      "Build a successful real estate portfolio"
    ],
    modules: [
      {
        title: "Introduction to Real Estate",
        duration: "3 hours",
        lessons: [
          { title: "Course Overview and Objectives", duration: "15 min", free: true },
          { title: "Real Estate Market Fundamentals", duration: "45 min" },
          { title: "Types of Real Estate Investments", duration: "60 min" },
          { title: "Market Research and Analysis", duration: "60 min" }
        ]
      },
      {
        title: "Property Valuation Techniques",
        duration: "4 hours",
        lessons: [
          { title: "Comparative Market Analysis", duration: "60 min" },
          { title: "Income Approach Valuation", duration: "75 min" },
          { title: "Cost Approach Methods", duration: "45 min" },
          { title: "Digital Valuation Tools", duration: "60 min" }
        ]
      },
      {
        title: "Investment Strategies",
        duration: "5 hours",
        lessons: [
          { title: "Buy and Hold Strategy", duration: "60 min" },
          { title: "Fix and Flip Approach", duration: "75 min" },
          { title: "Commercial Real Estate Investing", duration: "90 min" },
          { title: "REITs and Crowdfunding", duration: "45 min" }
        ]
      },
      {
        title: "Legal and Regulatory Framework",
        duration: "4 hours",
        lessons: [
          { title: "Property Rights and Laws", duration: "60 min" },
          { title: "Contracts and Agreements", duration: "75 min" },
          { title: "Tax Implications", duration: "45 min" },
          { title: "Compliance Requirements", duration: "60 min" }
        ]
      },
      {
        title: "Property Management Essentials",
        duration: "4 hours",
        lessons: [
          { title: "Tenant Management", duration: "60 min" },
          { title: "Maintenance and Repairs", duration: "60 min" },
          { title: "Financial Management", duration: "75 min" },
          { title: "Risk Management", duration: "45 min" }
        ]
      },
      {
        title: "Building Your Portfolio",
        duration: "4 hours",
        lessons: [
          { title: "Portfolio Diversification", duration: "60 min" },
          { title: "Financing Options", duration: "75 min" },
          { title: "Exit Strategies", duration: "45 min" },
          { title: "Scaling Your Business", duration: "60 min" }
        ]
      }
    ],
    requirements: [
      "Basic understanding of business concepts",
      "Interest in real estate investment",
      "Computer with internet access",
      "Willingness to learn and apply concepts"
    ],
    targetAudience: [
      "Aspiring real estate investors",
      "Property managers looking to enhance skills",
      "Real estate agents seeking certification",
      "Anyone interested in real estate career"
    ]
  },
  {
    id: "property-management-pro",
    title: "Property Management Professional Certification",
    description: "Advanced certification program for professional property managers covering operations, finance, and legal compliance.",
    longDescription: "This advanced certification program is designed for experienced property managers who want to elevate their career prospects. Gain comprehensive knowledge of property operations, financial management, legal compliance, and advanced technology tools.",
    category: "Property Management",
    level: "Advanced",
    duration: "8 weeks",
    totalHours: "32 hours",
    price: 125000,
    currency: "NGN",
    originalPrice: 150000,
    instructor: {
      name: "Michael Chen",
      title: "Certified Property Management Expert",
      bio: "Michael Chen is a certified property management professional with over 20 years of experience managing residential and commercial properties across Nigeria.",
      image: "/work/img/instructor2.jpeg",
      rating: 4.9,
      studentsCount: 8900
    },
    rating: 4.9,
    reviewsCount: 256,
    studentsCount: 2345,
    lastUpdated: "2024-03-10",
    language: "English",
    certificate: true,
    image: "/work/img/15.jpeg",
    featured: true,
    whatYouWillLearn: [
      "Advanced property management techniques",
      "Financial planning and budgeting",
      "Legal compliance and risk management",
      "Technology integration in property management",
      "Tenant relations and conflict resolution",
      "Sustainable property practices"
    ],
    modules: [
      {
        title: "Advanced Property Operations",
        duration: "5 hours",
        lessons: [
          { title: "Operational Excellence Framework", duration: "60 min", free: true },
          { title: "Maintenance Management Systems", duration: "75 min" },
          { title: "Vendor Management", duration: "60 min" },
          { title: "Quality Control Standards", duration: "45 min" }
        ]
      },
      {
        title: "Financial Management",
        duration: "6 hours",
        lessons: [
          { title: "Budgeting and Financial Planning", duration: "90 min" },
          { title: "Financial Reporting and Analysis", duration: "75 min" },
          { title: "Revenue Optimization", duration: "60 min" },
          { title: "Cost Control Strategies", duration: "45 min" }
        ]
      }
    ],
    requirements: [
      "Minimum 2 years property management experience",
      "Basic understanding of financial concepts",
      "Property management certification (preferred)"
    ],
    targetAudience: [
      "Experienced property managers",
      "Property management company owners",
      "Real estate portfolio managers",
      "Facility management professionals"
    ]
  },
  {
    id: "investment-strategies",
    title: "Strategic Real Estate Investment",
    description: "Learn advanced investment strategies, market timing, and portfolio optimization for maximum returns in real estate.",
    longDescription: "Take your real estate investment skills to the next level with advanced strategies, market analysis techniques, and portfolio optimization methods. This course is perfect for investors looking to maximize their returns and minimize risks.",
    category: "Investment",
    level: "Intermediate",
    duration: "7 weeks",
    totalHours: "28 hours",
    price: 100000,
    currency: "NGN",
    originalPrice: 125000,
    instructor: {
      name: "Robert Williams",
      title: "Real Estate Investment Strategist",
      bio: "Robert Williams is a seasoned real estate investment strategist with a proven track record of successful investments across multiple property types and market cycles.",
      image: "/work/img/instructor3.jpeg",
      rating: 4.8,
      studentsCount: 6700
    },
    rating: 4.7,
    reviewsCount: 189,
    studentsCount: 1890,
    lastUpdated: "2024-03-05",
    language: "English",
    certificate: true,
    image: "/work/img/18.jpeg",
    featured: false,
    whatYouWillLearn: [
      "Advanced market analysis techniques",
      "Portfolio diversification strategies",
      "Risk assessment and mitigation",
      "International real estate investment",
      "Tax optimization strategies",
      "Exit planning and implementation"
    ],
    modules: [
      {
        title: "Market Analysis Mastery",
        duration: "6 hours",
        lessons: [
          { title: "Advanced Market Research Methods", duration: "75 min", free: true },
          { title: "Economic Indicators Analysis", duration: "90 min" },
          { title: "Demographic Trend Analysis", duration: "60 min" },
          { title: "Predictive Market Modeling", duration: "45 min" }
        ]
      }
    ],
    requirements: [
      "Basic real estate knowledge",
      "Understanding of investment concepts",
      "Experience with property transactions"
    ],
    targetAudience: [
      "Real estate investors",
      "Investment advisors",
      "Financial planners",
      "Wealth managers"
    ]
  }
];

export async function generateMetadata({ params }: { params: { courseId: string } }) {
  const course = courses.find(c => c.id === params.courseId);

  if (!course) {
    return {
      title: "Course Not Found",
      description: "The requested course could not be found.",
    };
  }

  return {
    title: `${course.title} | AICI Learning`,
    description: course.longDescription,
  };
}

export default function CoursePage({ params }: { params: { courseId: string } }) {
  const course = courses.find(c => c.id === params.courseId);

  if (!course) {
    return (
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <Header currentPage="learning" />
          <main className="flex flex-col flex-1 items-center justify-center">
            <div className="text-center">
              <h1 className="font-display text-gray-900 text-4xl font-bold mb-4">
                Course Not Found
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                The course you're looking for doesn't exist or has been removed.
              </p>
              <a
                href="/learning"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-blue-800 text-white font-semibold rounded-full hover-lift"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Courses
              </a>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    );
  }

  const discountPercentage = Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header currentPage="learning" />
        <main className="flex flex-col flex-1">
          {/* Hero Section */}
          <section className="relative px-6 sm:px-8 lg:px-16 py-20 lg:py-32 bg-gradient-to-br from-red-50 to-blue-50">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <a
                      href="/learning"
                      className="inline-flex items-center gap-2 text-gray-600 hover:text-red-600 font-medium transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back to Courses
                    </a>
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded-full">
                      {course.category}
                    </span>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full">
                      {course.level}
                    </span>
                    {course.featured && (
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white text-sm font-semibold rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  <h1 className="font-display text-gray-900 text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                    {course.title}
                  </h1>

                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {course.description}
                  </p>

                  {/* Course Stats */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <Star className="w-5 h-5 text-yellow-600 fill-current" />
                        <span className="font-bold text-gray-900">{course.rating}</span>
                      </div>
                      <p className="text-sm text-gray-600">{course.reviewsCount} Reviews</p>
                    </div>
                    <div className="text-center">
                      <Users className="w-5 h-5 text-blue-800 mx-auto mb-2" />
                      <p className="font-bold text-gray-900">{course.studentsCount.toLocaleString()}</p>
                      <p className="text-sm text-gray-600">Students</p>
                    </div>
                    <div className="text-center">
                      <Clock className="w-5 h-5 text-green-700 mx-auto mb-2" />
                      <p className="font-bold text-gray-900">{course.totalHours}</p>
                      <p className="text-sm text-gray-600">Total Hours</p>
                    </div>
                    <div className="text-center">
                      <Calendar className="w-5 h-5 text-purple-700 mx-auto mb-2" />
                      <p className="font-bold text-gray-900">{course.duration}</p>
                      <p className="text-sm text-gray-600">Duration</p>
                    </div>
                  </div>

                  {/* Instructor Info */}
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-blue-800 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{course.instructor.name}</p>
                      <p className="text-sm text-gray-600">{course.instructor.title}</p>
                    </div>
                  </div>
                </div>

                {/* Course Card */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden sticky top-8">
                  <div className="relative h-48 bg-gradient-to-br from-red-100 to-blue-100">
                    {course.featured && (
                      <div className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </div>
                    )}
                  </div>

                  <div className="p-8">
                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-3xl font-bold text-gray-900">
                          ₦{course.price.toLocaleString()}
                        </span>
                        <span className="text-lg text-gray-500 line-through">
                          ₦{course.originalPrice.toLocaleString()}
                        </span>
                        <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm font-semibold">
                          {discountPercentage}% OFF
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">Limited time offer</p>
                    </div>

                    {/* Enroll Button */}
                    <button className="w-full py-4 bg-gradient-to-r from-red-600 to-blue-800 text-white font-bold rounded-xl hover-lift mb-4">
                      Enroll Now
                    </button>

                    <button className="w-full py-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors mb-6">
                      <Play className="w-5 h-5 inline-block mr-2" />
                      Preview Course
                    </button>

                    {/* Features */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Lifetime Access</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Certificate of Completion</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">30-Day Money Back Guarantee</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Mobile & Desktop Access</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Course Content */}
          <section className="px-6 sm:px-8 lg:px-16 py-20 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                  {/* What You'll Learn */}
                  <div>
                    <h2 className="font-display text-gray-900 text-2xl font-bold mb-6">
                      What You'll Learn
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {course.whatYouWillLearn.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Course Modules */}
                  <div>
                    <h2 className="font-display text-gray-900 text-2xl font-bold mb-6">
                      Course Content
                    </h2>
                    <div className="space-y-4">
                      {course.modules.map((module, moduleIndex) => (
                        <div key={moduleIndex} className="bg-gray-50 rounded-xl overflow-hidden">
                          <div className="p-6 bg-white border-b">
                            <div className="flex items-center justify-between">
                              <h3 className="font-semibold text-gray-900">
                                Module {moduleIndex + 1}: {module.title}
                              </h3>
                              <span className="text-sm text-gray-600">{module.duration}</span>
                            </div>
                          </div>
                          <div className="divide-y">
                            {module.lessons.map((lesson, lessonIndex) => (
                              <div key={lessonIndex} className="p-4 hover:bg-gray-50 transition-colors">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <Play className="w-4 h-4 text-gray-400" />
                                    <span className="text-gray-700">{lesson.title}</span>
                                    {lesson.free && (
                                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
                                        FREE
                                      </span>
                                    )}
                                  </div>
                                  <span className="text-sm text-gray-500">{lesson.duration}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h2 className="font-display text-gray-900 text-2xl font-bold mb-6">
                      Requirements
                    </h2>
                    <ul className="space-y-2">
                      {course.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-bold">{index + 1}</span>
                          </div>
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Target Audience */}
                  <div>
                    <h2 className="font-display text-gray-900 text-2xl font-bold mb-6">
                      Who This Course Is For
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {course.targetAudience.map((audience, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Target className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{audience}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                  {/* Instructor Card */}
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="font-display text-gray-900 text-xl font-bold mb-4">
                      Your Instructor
                    </h3>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-blue-800 rounded-full flex items-center justify-center">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{course.instructor.name}</p>
                        <p className="text-sm text-gray-600">{course.instructor.title}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{course.instructor.bio}</p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-600 fill-current" />
                        <span className="font-semibold">{course.instructor.rating}</span>
                      </div>
                      <span className="text-gray-600">{course.instructor.studentsCount.toLocaleString()} Students</span>
                    </div>
                  </div>

                  {/* Course Features */}
                  <div className="bg-gradient-to-br from-red-50 to-blue-50 rounded-2xl p-6">
                    <h3 className="font-display text-gray-900 text-xl font-bold mb-4">
                      Course Features
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <BookOpen className="w-5 h-5 text-red-600" />
                        <div>
                          <p className="font-semibold text-gray-900">{course.modules.length} Modules</p>
                          <p className="text-sm text-gray-600">Comprehensive curriculum</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-blue-800" />
                        <div>
                          <p className="font-semibold text-gray-900">Certificate</p>
                          <p className="text-sm text-gray-600">Upon completion</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-green-700" />
                        <div>
                          <p className="font-semibold text-gray-900">Community</p>
                          <p className="text-sm text-gray-600">Join {course.studentsCount.toLocaleString()} learners</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <BarChart className="w-5 h-5 text-purple-700" />
                        <div>
                          <p className="font-semibold text-gray-900">Progress Tracking</p>
                          <p className="text-sm text-gray-600">Monitor your learning journey</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}