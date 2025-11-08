import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import PropertyFilters from "@/components/Property/PropertyFilters";
import PropertyGrid from "@/components/Property/PropertyGrid";
import Pagination from "@/components/Blog/Pagination";

export const metadata = {
  title: "AICI Group - Property Listings",
  description:
    "Browse our extensive collection of premium properties for sale and rent.",
};

export default function PropertiesPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-white ">
      <div className="flex h-full grow flex-col">
        <Header currentPage="properties" />
        <main className="container mx-auto px-6 py-10">
          <div className="flex flex-col gap-8">
            {/* Page Header */}
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="flex flex-col gap-2">
                <h1 className="font-display text-4xl font-black tracking-tight text-gray-900 ">
                  Our Properties
                </h1>
                <p className="text-base font-normal text-gray-600 ">
                  Showing 1-12 of 86 properties
                </p>
              </div>
            </div>

            <PropertyFilters />
            <PropertyGrid />
            <Pagination totalPages={8} />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
