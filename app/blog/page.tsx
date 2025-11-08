import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import BlogHero from "@/components/Blog/BlogHero";
import BlogFilters from "@/components/Blog/BlogFilters";
import BlogGrid from "@/components/Blog/BlogGrid";
import Pagination from "@/components/Blog/Pagination";

export const metadata = {
  title: "AICI Group Blog - Real Estate Insights",
  description:
    "Expert insights and analysis on real estate market trends, investment strategies, and industry news.",
};

export default function BlogPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header currentPage="blog" />
        <main className="flex flex-col flex-1 items-center">
          <div className="layout-content-container flex flex-col max-w-7xl flex-1 w-full">
            <BlogHero />
            <BlogFilters />
            <BlogGrid />
            <Pagination />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
