import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import PropertyGrid from "@/components/Property/PropertyGrid";

export const metadata = {
  title: "AICI Group - Short-Let Properties",
  description: "Browse our exclusive short-let properties.",
};

export default function ShortLetPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-white ">
      <div className="flex h-full grow flex-col">
        <Header currentPage="short-let" />
        <main className="container mx-auto px-6 py-10">
          <div className="flex flex-col gap-8">
            {/* Page Header */}
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="flex flex-col gap-2">
                <h1 className="font-display text-4xl font-black tracking-tight text-gray-900 ">
                  Short-Let Properties
                </h1>
                <p className="text-base font-normal text-gray-600 ">
                  Find the perfect place for your short stay.
                </p>
              </div>
            </div>

            <PropertyGrid />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
