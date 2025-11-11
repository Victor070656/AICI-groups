import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import Link from "next/link";

export default function PropertyDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const property = {
    id: params.id,
    title: `Luxury Apartment ${params.id}`,
    price: "250,000",
    location: "Lekki, Lagos",
    description:
      "A stunning 3-bedroom apartment with a beautiful view of the city. It is fully furnished and comes with all the modern amenities you would expect.",
    image: "/work/img/11.jpeg",
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-white ">
      <div className="flex h-full grow flex-col">
        <Header />
        <main className="container mx-auto px-6 py-10">
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div>
                <h1 className="font-display text-4xl font-black tracking-tight text-gray-900 ">
                  {property.title}
                </h1>
                <p className="text-2xl font-bold text-red-600 mt-2">
                  ₦{property.price}/night
                </p>
                <p className="text-lg text-gray-600 mt-4">
                  {property.location}
                </p>
                <p className="text-base text-gray-600 mt-4">
                  {property.description}
                </p>
                <Link href="/payment">
                  <button className="mt-8 btn-premium group flex items-center gap-3 overflow-hidden rounded-full h-14 px-10 bg-gradient-to-r from-red-600 to-blue-800 text-white text-base font-semibold shadow-xl">
                    <span>Book Now</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
