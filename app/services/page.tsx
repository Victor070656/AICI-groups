import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import ServicesHero from "@/components/Services/ServicesHero";
import ServicesGrid from "@/components/Services/ServicesGrid";
import FeaturedOffer from "@/components/Services/FeaturedOffer";
import ServicesCTA from "@/components/Services/ServicesCTA";

export const metadata = {
  title: "AICI Group - Services & Offers",
  description:
    "Expert consultancy and brokerage services to help you build your real estate future with confidence and clarity.",
};

export default function ServicesPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header currentPage="services" />
        <main className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 py-12 md:py-20">
          <ServicesHero />
          <ServicesGrid />
          <FeaturedOffer />
          <ServicesCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}
