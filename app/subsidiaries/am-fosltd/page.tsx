import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import { Crown, Shield, Users, TrendingUp, Heart, Scale } from "lucide-react";

export const metadata = {
  title: "AM-FOSLTD - Multi-Family Office Services",
  description: "AICI Multi-Family Office Services Limited provides bespoke family office administration and wealth management solutions for high-net-worth families and private clients.",
};

export default function AMFOSLTDPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header currentPage="subsidiaries" />
        <main className="flex flex-col flex-1 items-center">
          <div className="layout-content-container flex flex-col max-w-7xl flex-1 w-full">
            {/* Hero Section */}
            <section className="relative px-6 sm:px-8 lg:px-16 py-20 lg:py-32 bg-gradient-to-br from-red-50 to-blue-50">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-blue-800/5"></div>
              <div className="max-w-4xl mx-auto text-center relative z-10">
                <span className="inline-block text-red-600 font-semibold text-sm tracking-widest uppercase mb-6">
                  Our Subsidiaries
                </span>
                <h1 className="font-display text-gray-900 text-4xl lg:text-6xl font-bold mb-6">
                  AICI Multi-Family Office <br className="hidden sm:block" />Services Limited
                </h1>
                <p className="text-lg text-gray-600 font-light mb-8">
                  RC-8947528
                </p>
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-blue-800 text-white font-semibold rounded-full shadow-lg hover-lift">
                  <Crown className="w-5 h-5 mr-2" />
                  Exclusive Family Services
                </div>
              </div>
            </section>

            {/* Overview Section */}
            <section className="px-6 sm:px-8 lg:px-16 py-20 bg-white">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="font-display text-gray-900 text-3xl lg:text-4xl font-bold">
                      Preserving <span className="gradient-text">Family Legacy</span> Through Excellence
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      AICI Multi-Family Office Services Limited provides bespoke family office administration and wealth management solutions for high-net-worth families and private clients.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Our mission is to preserve and grow family wealth while ensuring legacy continuity through sound governance and tailored advisory.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-gray-50 rounded-2xl hover-lift">
                      <Crown className="w-12 h-12 text-red-600 mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">Bespoke Solutions</h3>
                      <p className="text-sm text-gray-600">Tailored to family needs</p>
                    </div>
                    <div className="text-center p-6 bg-gray-50 rounded-2xl hover-lift">
                      <Shield className="w-12 h-12 text-blue-800 mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">Wealth Protection</h3>
                      <p className="text-sm text-gray-600">Comprehensive asset security</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section className="px-6 sm:px-8 lg:px-16 py-20 bg-gray-50">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="font-display text-gray-900 text-3xl lg:text-4xl font-bold mb-6">
                    Core Services
                  </h2>
                  <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">
                    Comprehensive family office solutions designed for legacy preservation and wealth growth
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    "Wealth Management & Financial Planning",
                    "Estate & Succession Planning",
                    "Family Office Administration",
                    "Trust and Estate Advisory",
                    "Family Governance & Advisory",
                    "Asset Administration & Investment Oversight",
                    "Philanthropy and Legacy Advisory",
                    "Legal & Tax Structuring Support"
                  ].map((service, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover-lift card-shine border border-gray-100">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-600 to-blue-800 rounded-xl flex items-center justify-center">
                          <span className="text-white font-bold">{index + 1}</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 leading-tight">{service}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Unique Advantage Section */}
            <section className="px-6 sm:px-8 lg:px-16 py-20 bg-white">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-display text-gray-900 text-3xl lg:text-4xl font-bold mb-8">
                  Our <span className="gradient-text">Unique Advantage</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed font-light mb-12">
                  Empowering families to preserve and grow their wealth through disciplined governance and strategic foresight.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Family First</h3>
                    <p className="text-sm text-gray-600">Putting family values at the core of all decisions</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Strategic Growth</h3>
                    <p className="text-sm text-gray-600">Balanced wealth preservation and expansion</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Legacy Focus</h3>
                    <p className="text-sm text-gray-600">Ensuring generational wealth transfer</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Values Section */}
            <section className="px-6 sm:px-8 lg:px-16 py-20 bg-gradient-to-r from-red-50 to-blue-50">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="font-display text-gray-900 text-3xl lg:text-4xl font-bold mb-6">
                    Our Core Values
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover-lift">
                    <Scale className="w-12 h-12 text-red-600 mb-6" />
                    <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Integrity & Trust</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Building lasting relationships founded on transparency, ethical practices, and unwavering commitment to our clients' best interests.
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover-lift">
                    <Shield className="w-12 h-12 text-blue-800 mb-6" />
                    <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Delivering world-class family office services that exceed expectations and set industry standards for quality and innovation.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
