const blogPosts = [
  {
    date: "Oct 24, 2024",
    title: "Navigating the 2024 Commercial Real Estate Market",
    excerpt:
      "Dive into our comprehensive analysis of the commercial real estate landscape for the upcoming year...",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6vVj-fs8fYRGMQyaLPrEaSelr58k4FWtfQ7x1elAF3KW8K8mQTxfWZpmo_kAKuY5HDc9opeRA-CEohLIYzTddHcef9_QZLQ3wfvNB9nwBhGhxYrKibKdn70TRMm3kLW36ITOAV1TDGMq0w5cbCjKHXJlc6Oi-UTF_ULHCCTvlSGbliZzcWxBUD4v4wPkBoMMwYhCkTqmGVzKAGenk6T3kQ25vijqrEQWxSJrsC3D47bUg3a8fIN-pU-ZLB0U3lyNxHfv2vpxEYfw",
    slug: "commercial-real-estate-2024",
  },
  {
    date: "Oct 18, 2024",
    title: "Key Factors to Consider When Investing in Property",
    excerpt:
      "Learn about the crucial elements that can make or break your next real estate investment...",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDz1O08cYzuADbjI5vQ_1_YwV9yMen7WLfcIXoizzvXMavGqlnvUleVymF7Yijyui1QPS5fCM-dNpvgy0-A3X5SADcWac3LP-OD-FQjOsbq0jrmkyf-Jdxn2HtkGYrhNqw_aA2qRp1DREDVnAmV1xKozz6FzMR4eVTHSrp7AQ3w0m18lfap1G19sLP82gWZ6I2nPbWS1aEyhTYXCjT-Wwg0-FnE_hDyTgKaKkGrzqz3muD-kitVIOCfEF7GyrvfIf9r5o9xpzA8Zrk",
    slug: "property-investment-factors",
  },
  {
    date: "Oct 12, 2024",
    title: "A Glimpse into Modern Architectural Trends",
    excerpt:
      "Explore the innovative designs and materials shaping the buildings of tomorrow...",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJN2cKmen8nzdpPQaBXxMjaEcYU6whjN6iiN9_FW4oTARZwdyGjFzlGTkeO0crqi2AP8hfSKpFuh6xpLVPZ6TmklMOY1VpY1aQrTbwah54C5FFp8r1qU9u0C4zzua8JLVh454a67uaCpCkwpZLmDxmBzwnwQWsqv3oK2TfirMf2JhVyiN_8HY30zr419ArsLMOi5xoYLHug6ctvqsDBK3SgKfZRUHwd8d9IFJyNY2kYIdigg9FAvyA0phTTMjuPO7JWYymgYias5M",
    slug: "modern-architectural-trends",
  },
  {
    date: "Oct 05, 2024",
    title: "The Future of Sustainable Urban Development",
    excerpt:
      "Discover how green initiatives are transforming our cities for a better, more sustainable future...",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5AudJkaI_5iEg-OUf43sY0UDyFSerN2Qb5TMJ_J2ELn26ILezZv0lKKFIlWs5oO7SJCVTEM_DuDZvjgZNpRcv7o-jr76ezJbpkAJRgDnqqMxC2xIko8x6CfVxmfafMXQDOnWLRKPUZzqAg4NOynp6I4CgrE5nngMinR_AjFgIlzunDsvAfqRTyGmq4RCmCh90wr8AEy45LEx7i2y1tvMoZ7ayw93EI9SpKmkwgcB_iTOdXasBu75hyvXhD0rcbaPAa5dkc7jAvSI",
    slug: "sustainable-urban-development",
  },
  {
    date: "Sep 28, 2024",
    title: "Maximizing ROI: A Guide for First-Time Investors",
    excerpt:
      "Our experts share essential tips on how to get the most out of your initial property investment...",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6ExCVYnR1VLNvSOyXlUVHWTJiHH2LsCpC70883GVwG4YR2PPog8g4N9Sg25VW3usESkTOoYLwBweSGVLtluFvZh8VO7zcmuEi0jPLDgVYwkt9qL6XNxL7AmJmVtYXZA0ZAERq30-XqajXZc3UXItHu5x5CH0b1DwOgWz01t0D0Db-ndYi6FyfmVz8DnEGDJJZdlgbClRODp2LNtw-zh0alid-UJ91OlAHM8tvXGHpo_OItDhw7YFU4ofs8NoB8YJXSj6tmyy-5xA",
    slug: "maximizing-roi-guide",
  },
  {
    date: "Sep 21, 2024",
    title: "AICI Group's Q3 Market Report and Analysis",
    excerpt:
      "Get the latest insights and data from our quarterly report on market performance and trends...",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB5s354oHwVEKLArXQO0W0mkOfzqU5z41h2Lf1eLvnvbGvczQGpA1JZwBXvPgMH_ym8snZVPPDIRP5RJEMZeUV8IAwuYRjy3WQMBPn22fqwUfz-stRgBPy2JK9Wr9xlBPj_1b_yULotUk2WsJWkbKWxLtI_NFZqvzU0QV4NsbYtiuWz61zU-0ajRS5mry2_V6yvq4adwLi9H3Nioe9NWldy51C6Ju8bMZjQW2aKAFIblEVwM7t1vSkVn4t64pTdYcxXqYXEWP2NiIs",
    slug: "q3-market-report",
  },
];

export default function BlogGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 mt-8">
      {blogPosts.map((post, index) => (
        <article
          key={index}
          className="flex flex-col gap-4 pb-3 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden bg-white  border-gray-100  group"
        >
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover transform transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url("${post.image}")` }}
          />

          <div className="px-5 pb-5 flex flex-col flex-grow">
            <time className="text-gray-500 text-sm font-normal mb-1">
              {post.date}
            </time>

            <h3 className="text-gray-900 text-xl font-bold leading-tight font-display mb-2 group-hover:text-primary-blue transition-colors">
              {post.title}
            </h3>

            <p className="text-gray-600 text-sm font-normal leading-relaxed flex-grow">
              {post.excerpt}
            </p>

            <a
              href={`/blog/${post.slug}`}
              className="text-red-600 font-bold text-sm mt-4 self-start hover:underline inline-flex items-center gap-1 group/link"
            >
              <span>Read More</span>
              <span className="transform transition-transform group-hover/link:translate-x-1">
                →
              </span>
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
