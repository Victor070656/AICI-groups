import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import AboutHero from "@/components/About/AboutHero";
import VisionMission from "@/components/About/VisionMission";
import CoreValues from "@/components/About/CoreValues";
import CTABanner from "@/components/About/CTABanner";

export const metadata = {
  title: "About Us - AICI Group",
  description:
    "Discover AICI Group's legacy and commitment to excellence in the real estate sector.",
};

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header currentPage="about" />
        <main className="flex flex-col flex-1 items-center">
          <div className="layout-content-container flex flex-col max-w-7xl flex-1 w-full">
            <AboutHero />
            <VisionMission />
            <CoreValues />
            <CTABanner />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
