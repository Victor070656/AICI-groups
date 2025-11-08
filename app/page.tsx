import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import Subsidiaries from "@/components/Home/Subsidiaries";
import Values from "@/components/Home/Values";
import Testimonials from "@/components/Home/Testimonials";
import CTA from "@/components/Home/CTA";
import Footer from "@/components/Home/Footer";
import ScrollToTop from "@/components/Home/ScrollToTop";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center">
          <div className="layout-content-container flex flex-col w-full flex-1">
            <Header />
            {/* <div className="h-18"></div> */}
            <main>
              <Hero />
              <About />
              <Subsidiaries />
              <Values />
              <Testimonials />
              <CTA />
            </main>
            <Footer />
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}
