import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import TeamHero from "@/components/Team/TeamHero";
import TeamGrid from "@/components/Team/TeamGrid";

export const metadata = {
  title: "Our Team - AICI Group Real Estate and Consultancy",
  description:
    "Discover the experienced and dedicated professionals who drive our success.",
};

export default function TeamPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header currentPage="team" />
        <main className="flex flex-col flex-1 items-center">
          <div className="layout-content-container flex flex-col max-w-7xl flex-1 w-full">
            <TeamHero />
            <TeamGrid />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
