import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import { Building, Home, MapPin, Wrench, TrendingUp, Shield, Key } from "lucide-react";

export const metadata = {
  title: "AICI Properties Ltd - Real Estate & Property Management",
  description: "AICI Properties Limited specializes in estate management, property administration, and real estate investment services across Nigeria.",
};

export default function AICIPropertiesPage() {
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
                  AICI Properties Limited
                </h1>
                <p className="text-lg text-gray-600 font-light mb-8">
                  RC-7893854
                </p>
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-blue-800 text-white font-semibold rounded-full shadow-lg hover-lift">
                  <Building className="w-5 h-5 mr-2" />
                  Real Estate Excellence
                </div>
              </div>
            </section>

            {/* Overview Section */}
            <section className="px-6 sm:px-8 lg:px-16 py-20 bg-white">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="font-display text-gray-900 text-3xl lg:text-4xl font-bold">
                      Premier <span className="gradient-text">Property Management</span> Across Nigeria
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      AICI Properties Limited specializes in estate management, property administration, and real estate investment services across Nigeria.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      We manage a diverse portfolio of residential and commercial properties, including multi-family apartments, industrial assets, and private estates, with a focus on long-term value creation and efficient operations across major Nigerian cities: Lagos, Abuja, Edo, Port Harcourt, and Imo.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-gray-50 rounded-2xl hover-lift">
                      <Home className="w-12 h-12 text-red-600 mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">Premium Properties</h3>
                      <p className="text-sm text-gray-600">Residential & commercial spaces</p>
                    </div>
                    <div className="text-center p-6 bg-gray-50 rounded-2xl hover-lift">
                      <MapPin className="w-12 h-12 text-blue-800 mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">Strategic Locations</h3>
                      <p className="text-sm text-gray-600">Major cities nationwide</p>
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
                    Comprehensive property solutions tailored to maximize your real estate investments
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    "Short-Let & Long-Term Rentals",
                    "Property Management & Leasing",
                    "Facility Management & Maintenance",
                    "Project Supervision & Construction Support",
                    "Estate Recovery & Value Optimization",
                    "Lease, Tenant & Asset Administration",
                    "Real Estate Investment Advisory"
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
                  Combining technical expertise with cost efficiency to deliver projects that stand the test of time and create value through strategic property management, transparency, and trusted client relationships.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Value Creation</h3>
                    <p className="text-sm text-gray-600">Maximizing property worth through strategic management</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Trust & Transparency</h3>
                    <p className="text-sm text-gray-600">Building lasting client relationships</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Wrench className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Technical Excellence</h3>
                    <p className="text-sm text-gray-600">Expert maintenance and facility management</p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 sm:px-8 lg:px-16 py-20 bg-gradient-to-r from-red-600 to-blue-800 text-white">
              <div className="max-w-4xl mx-auto text-center">
                <Key className="w-16 h-16 mx-auto mb-6" />
                <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
                  Unlock Your Property's Potential
                </h2>
                <p className="text-lg mb-8 opacity-90">
                  Partner with AICI Properties for expert real estate management and investment services across Nigeria.
                </p>
                <div className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-bold rounded-2xl shadow-xl hover-lift cursor-pointer">
                  <span>Get Started Today</span>
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
