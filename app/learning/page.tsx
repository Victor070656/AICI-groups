import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import LearningHero from "@/components/Learning/LearningHero";
import CourseFilters from "@/components/Learning/CourseFilters";
import CourseGrid from "@/components/Learning/CourseGrid";
import Pagination from "@/components/Blog/Pagination";

export const metadata = {
  title: "AICI Group - Learning",
  description:
    "Advance your career with our industry-leading courses, designed for ambitious agents, investors, and real estate professionals.",
};

export default function LearningPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white ">
      <div className="layout-container flex h-full grow flex-col">
        <Header currentPage="learning" />
        <main className="flex-1">
          <LearningHero />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <CourseFilters />
            <CourseGrid />
            <Pagination totalPages={8} />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
