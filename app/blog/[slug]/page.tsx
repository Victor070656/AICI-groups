import React from "react";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Heart,
  MessageCircle,
  Tag,
} from "lucide-react";

// Sample blog data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: 1,
    slug: "nigeria-real-estate-market-trends-2024",
    title: "Nigeria Real Estate Market Trends 2024",
    excerpt:
      "A comprehensive analysis of the current real estate market trends in Nigeria and investment opportunities for 2024.",
    content: `
      <p>The Nigerian real estate market has shown remarkable resilience and growth in 2024, driven by urbanization, population growth, and increasing demand for quality housing and commercial spaces.</p>

      <h3>Market Overview</h3>
      <p>The first quarter of 2024 saw significant activity in major cities including Lagos, Abuja, and Port Harcourt. Property values have appreciated by an average of 15-20% compared to the previous year, with luxury segments showing even stronger performance.</p>

      <h3>Key Trends Shaping the Industry</h3>
      <p>Several key trends are influencing the Nigerian real estate landscape:</p>
      <ul>
        <li><strong>Increased Foreign Investment:</strong> International investors are showing growing interest in Nigerian commercial properties, particularly in Lagos and Abuja.</li>
        <li><strong>Rise of Mixed-Use Developments:</strong> Developers are increasingly combining residential, commercial, and retail spaces in single projects.</li>
        <li><strong>Technology Integration:</strong> Smart home features and property technology (PropTech) are becoming standard expectations.</li>
        <li><strong>Sustainable Building Practices:</strong> Green building certifications and energy-efficient designs are gaining traction.</li>
      </ul>

      <h3>Investment Opportunities</h3>
      <p>Several sectors present compelling investment opportunities:</p>
      <ul>
        <li>Residential properties in emerging neighborhoods</li>
        <li>Commercial office spaces in business districts</li>
        <li>Industrial properties near major transportation hubs</li>
        <li>Retail spaces in high-traffic areas</li>
      </ul>

      <h3>Outlook for the Remainder of 2024</h3>
      <p>The market is expected to maintain its positive trajectory, with projected growth rates of 8-12% across major segments. The government's continued focus on infrastructure development and economic diversification is likely to further boost the real estate sector.</p>
    `,
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
    content: `
      <p>Sustainable property management has become more than just a trend—it's now a fundamental aspect of modern real estate operations that benefits property owners, tenants, and the environment.</p>

      <h3>What is Sustainable Property Management?</h3>
      <p>Sustainable property management involves implementing practices that reduce environmental impact while maintaining or improving property value and tenant satisfaction. This includes energy efficiency, water conservation, waste reduction, and use of eco-friendly materials.</p>

      <h3>Key Sustainable Practices</h3>
      <ul>
        <li><strong>Energy Management:</strong> Installing LED lighting, smart thermostats, and energy-efficient appliances</li>
        <li><strong>Water Conservation:</strong> Implementing low-flow fixtures and rainwater harvesting systems</li>
        <li><strong>Waste Reduction:</strong> Establishing recycling programs and reducing construction waste</li>
        <li><strong>Green Spaces:</strong> Maintaining sustainable landscaping and promoting biodiversity</li>
      </ul>

      <h3>Benefits for Property Owners</h3>
      <p>Implementing sustainable practices offers numerous benefits:</p>
      <ul>
        <li>Reduced operating costs through energy efficiency</li>
        <li>Increased property values and marketability</li>
        <li>Higher tenant satisfaction and retention rates</li>
        <li>Compliance with increasingly strict environmental regulations</li>
      </ul>
    `,
    author: "Michael Chen",
    date: "2024-03-10",
    readTime: "6 min read",
    category: "Property Management",
    tags: [
      "Sustainability",
      "Property Management",
      "Green Building",
      "Efficiency",
    ],
    image: "/work/img/15.jpeg",
    featured: false,
  },
  {
    id: 3,
    slug: "digital-transformation-real-estate",
    title: "Digital Transformation in Real Estate",
    excerpt:
      "How technology is reshaping the real estate industry and creating new opportunities for investors and property managers.",
    content: `
      <p>The real estate industry is undergoing a massive digital transformation, leveraging technology to streamline operations, enhance customer experiences, and create new business models.</p>

      <h3>The Rise of PropTech</h3>
      <p>Property Technology (PropTech) has revolutionized how real estate transactions are conducted, properties are managed, and investments are made. From virtual property tours to blockchain-based transactions, technology is making real estate more accessible and efficient.</p>

      <h3>Key Technologies Reshaping the Industry</h3>
      <ul>
        <li><strong>Artificial Intelligence:</strong> AI-powered property valuation and predictive analytics</li>
        <li><strong>Virtual Reality:</strong> Immersive property tours and space planning</li>
        <li><strong>Blockchain:</strong> Smart contracts and tokenized property ownership</li>
        <li><strong>Internet of Things (IoT):</strong> Smart buildings and predictive maintenance</li>
      </ul>

      <h3>Impact on Property Management</h3>
      <p>Digital tools are making property management more efficient:</p>
      <ul>
        <li>Automated maintenance requests and tracking</li>
        <li>Real-time building monitoring and energy management</li>
        <li>Digital tenant communication platforms</li>
        <li>Predictive analytics for maintenance planning</li>
      </ul>
    `,
    author: "David Williams",
    date: "2024-03-05",
    readTime: "7 min read",
    category: "Technology",
    tags: ["Technology", "PropTech", "Digital Transformation", "Innovation"],
    image: "/work/img/18.jpeg",
    featured: true,
  },
];

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | AICI Group Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <Header currentPage="blog" />
          <main className="flex flex-col flex-1 items-center justify-center">
            <div className="text-center">
              <h1 className="font-display text-gray-900 text-4xl font-bold mb-4">
                Blog Post Not Found
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                The blog post you're looking for doesn't exist or has been
                removed.
              </p>
              <a
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-blue-800 text-white font-semibold rounded-full hover-lift"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </a>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header currentPage="blog" />
        <main className="flex flex-col flex-1">
          <div className="max-w-4xl mx-auto w-full px-6 sm:px-8 lg:px-16 py-12">
            {/* Back to Blog */}
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-red-600 font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </a>

            {/* Article Header */}
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-block px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-full">
                  {post.category}
                </span>
                {post.featured && (
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white text-sm font-semibold rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <h1 className="font-display text-gray-900 text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {post.excerpt}
              </p>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-blue-800 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{post.author}</p>
                    <p className="text-sm text-gray-600">Author</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
                <div
                  className="w-full h-full bg-center bg-no-repeat bg-cover transform transition-transform duration-700 hover:scale-105"
                  style={{ backgroundImage: `url("${post.image}")` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  <Heart className="w-4 h-4" />
                  Like
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  Comment
                </button>
              </div>
            </header>

            {/* Article Content */}
            <article className="max-w-none mb-16">
              <div
                className="font-sans text-gray-700 leading-relaxed space-y-6 [&_h3]:font-display [&_h3]:text-gray-900 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-4 [&_p]:mb-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_li]:mb-2"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Tags */}
            <div className="mb-16">
              <h3 className="font-display text-gray-900 text-xl font-bold mb-4">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Posts (placeholder for future implementation) */}
            <div className="border-t pt-12">
              <h3 className="font-display text-gray-900 text-2xl font-bold mb-8">
                Related Articles
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts
                  .filter(
                    (p) => p.id !== post.id && p.category === post.category
                  )
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <a
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.slug}`}
                      className="group block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                    >
                      <div className="h-48 bg-gradient-to-br from-red-100 to-blue-100"></div>
                      <div className="p-6">
                        <span className="text-red-600 text-sm font-semibold">
                          {relatedPost.category}
                        </span>
                        <h4 className="font-display text-gray-900 text-lg font-bold mt-2 mb-3 group-hover:text-red-600 transition-colors">
                          {relatedPost.title}
                        </h4>
                        <p className="text-gray-600 text-sm overflow-hidden">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>

    </div>
  );
}
