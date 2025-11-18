import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import { Package, Truck, Users, Target, BarChart3 } from "lucide-react";

export const metadata = {
  title: "AICMRCY - Supply Chain & Capacity Consultancy",
  description: "AICMRCY Supply Chain and Capacity Consultancy Limited is dedicated to optimizing supply chains, improving operational capacity, and enhancing organizational performance across industries.",
};

export default function AICMRCYPage() {
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
                  AICMRCY Supply Chain & <br className="hidden sm:block" />Capacity Consultancy
                </h1>
                <p className="text-lg text-gray-600 font-light mb-8">
                  BN-2997883
                </p>
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-blue-800 text-white font-semibold rounded-full shadow-lg hover-lift">
                  <Package className="w-5 h-5 mr-2" />
                  Supply Chain Excellence
                </div>
              </div>
            </section>

            {/* Overview Section */}
            <section className="px-6 sm:px-8 lg:px-16 py-20 bg-white">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="font-display text-gray-900 text-3xl lg:text-4xl font-bold">
                      Optimizing Operations for <span className="gradient-text">Maximum Efficiency</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      AICMRCY Supply Chain and Capacity Consultancy Limited is dedicated to optimizing supply chains, improving operational capacity, and enhancing organizational performance across industries.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      We bring deep expertise in logistics, procurement, and process optimization to help clients build efficient, resilient, and scalable operations.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-gray-50 rounded-2xl hover-lift">
                      <Truck className="w-12 h-12 text-red-600 mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">Logistics Excellence</h3>
                      <p className="text-sm text-gray-600">Streamlined supply chain solutions</p>
                    </div>
                    <div className="text-center p-6 bg-gray-50 rounded-2xl hover-lift">
                      <Target className="w-12 h-12 text-blue-800 mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">Process Optimization</h3>
                      <p className="text-sm text-gray-600">Enhanced operational efficiency</p>
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
                    Comprehensive supply chain and capacity solutions tailored to your industry
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    "Supply Chain Advisory & Optimization",
                    "Logistics & Procurement Strategy",
                    "Procurement & Vendor Management",
                    "Capacity Development & Training",
                    "Operational Excellence Consulting",
                    "Performance & Efficiency Audits",
                    "Logistics & Distribution Management"
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
                  Delivering efficient, resilient, and sustainable supply chain and capacity solutions tailored to client needs.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Expert Team</h3>
                    <p className="text-sm text-gray-600">Seasoned professionals with deep industry knowledge</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Data-Driven</h3>
                    <p className="text-sm text-gray-600">Analytics-based solutions for measurable results</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Package className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">End-to-End</h3>
                    <p className="text-sm text-gray-600">Complete supply chain visibility and control</p>
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
