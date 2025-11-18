import { Calendar, Clock, User, Star } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    slug: "nigeria-real-estate-market-trends-2024",
    title: "Nigeria Real Estate Market Trends 2024",
    excerpt:
      "A comprehensive analysis of the current real estate market trends in Nigeria and investment opportunities for 2024.",
    author: "Sarah Johnson",
    date: "2024-03-15",
    readTime: "8 min read",
    category: "Market Analysis",
    tags: ["Real Estate", "Market Trends", "Investment", "Nigeria"],
    image: "/work/img/12.jpeg",
    featured: true,
  },
  {
    id: 2,
    slug: "sustainable-property-management-practices",
    title: "Sustainable Property Management Practices",
    excerpt:
      "Learn how modern property management practices are evolving to incorporate sustainability and environmental consciousness.",
    author: "Michael Chen",
    date: "2024-03-10",
    readTime: "6 min read",
    category: "Property Management",
    tags: ["Sustainability", "Property Management", "Green Building", "Efficiency"],
    image: "/work/img/15.jpeg",
    featured: false,
  },
  {
    id: 3,
    slug: "digital-transformation-real-estate",
    title: "Digital Transformation in Real Estate",
    excerpt:
      "How technology is reshaping the real estate industry and creating new opportunities for investors and property managers.",
    author: "David Williams",
    date: "2024-03-05",
    readTime: "7 min read",
    category: "Technology",
    tags: ["Technology", "PropTech", "Digital Transformation", "Innovation"],
    image: "/work/img/18.jpeg",
    featured: true,
  },
  {
    id: 4,
    slug: "navigating-commercial-real-estate-2024",
    title: "Navigating the 2024 Commercial Real Estate Market",
    excerpt:
      "Dive into our comprehensive analysis of the commercial real estate landscape for the upcoming year and discover key investment opportunities.",
    author: "Elizabeth Thompson",
    date: "2024-03-01",
    readTime: "9 min read",
    category: "Market Analysis",
    tags: ["Commercial Real Estate", "Market Analysis", "Investment Strategy"],
    image: "/work/img/08.jpeg",
    featured: false,
  },
  {
    id: 5,
    slug: "maximizing-roi-first-time-investors",
    title: "Maximizing ROI: A Guide for First-Time Investors",
    excerpt:
      "Our experts share essential tips on how to get the most out of your initial property investment and avoid common pitfalls.",
    author: "Robert Williams",
    date: "2024-02-28",
    readTime: "7 min read",
    category: "Investment",
    tags: ["ROI", "First-Time Investors", "Property Investment", "Tips"],
    image: "/work/img/10.jpeg",
    featured: false,
  },
  {
    id: 6,
    slug: "aici-q3-2024-market-report",
    title: "AICI Group's Q3 2024 Market Report and Analysis",
    excerpt:
      "Get the latest insights and data from our quarterly report on market performance and trends across Nigeria's real estate sector.",
    author: "Sarah Johnson",
    date: "2024-02-25",
    readTime: "10 min read",
    category: "Market Report",
    tags: ["Market Report", "Q3 2024", "Data Analysis", "Nigeria Real Estate"],
    image: "/work/img/15.jpeg",
    featured: true,
  },
];

export default function BlogGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 mt-8">
      {blogPosts.map((post, index) => (
        <a
          key={index}
          href={`/blog/${post.slug}`}
          className="group flex flex-col gap-4 pb-3 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden bg-white border-gray-100"
        >
          {/* Featured Badge */}
          {post.featured && (
            <div className="absolute top-4 right-4 z-10 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Featured
            </div>
          )}

          <div className="relative">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover transform transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url("${post.image}")` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          <div className="px-5 pb-5 flex flex-col flex-grow">
            {/* Category and Read Time */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider bg-red-600/10 text-red-600 px-2 py-1 rounded-full">
                {post.category}
              </span>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Clock className="w-3 h-3" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-gray-900 text-xl font-bold leading-tight font-display mb-3 group-hover:text-red-600 transition-colors">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-gray-600 text-sm font-normal leading-relaxed flex-grow mb-4">
              {post.excerpt}
            </p>

            {/* Author and Date */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-blue-800 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-900">{post.author}</span>
              </div>
              <time className="text-xs text-gray-500">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </time>
            </div>

            {/* Read More Link */}
            <div className="flex items-center text-red-600 font-semibold text-sm hover:underline group/link">
              <span>Read More</span>
              <span className="transform transition-transform group-hover/link:translate-x-1 ml-1">
                →
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
