import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import { Building, Lightbulb, TrendingUp, Shield } from "lucide-react";

export const metadata = {
  title: "AMC & FAS Ltd - Management Consult & Financial Advisory",
  description: "AICI Management Consult & Financial Advisory Services provides strategic business consulting, financial planning, and investment advisory to private and corporate clients.",
};

export default function AMCFASPage() {
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
                  AICI Management Consult & <br className="hidden sm:block" />Financial Advisory Services Ltd
                </h1>
                <p className="text-lg text-gray-600 font-light mb-8">
      RC-1608213
                </p>
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-blue-800 text-white font-semibold rounded-full shadow-lg hover-lift">
                  <Lightbulb className="w-5 h-5 mr-2" />
                  Consulting & Advisory
                </div>
              </div>
            </section>

            {/* Overview Section */}
            <section className="px-6 sm:px-8 lg:px-16 py-20 bg-white">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="font-display text-gray-900 text-3xl lg:text-4xl font-bold">
                      Strategic Advisory for <span className="gradient-text">Growth & Success</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
      AICI Management Consult & Financial Advisory Services (AMC&FAS) provides strategic business consulting, financial planning, and investment advisory to private and corporate clients.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
      We deliver practical, data-driven solutions that enhance operational efficiency, business growth, and financial sustainability.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-gray-50 rounded-2xl hover-lift">
                      <TrendingUp className="w-12 h-12 text-red-600 mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">Growth Focused</h3>
                      <p className="text-sm text-gray-600">Driving sustainable business expansion</p>
                    </div>
                    <div className="text-center p-6 bg-gray-50 rounded-2xl hover-lift">
                      <Shield className="w-12 h-12 text-blue-800 mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">Risk Management</h3>
                      <p className="text-sm text-gray-600">Comprehensive compliance solutions</p>
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
      Comprehensive solutions tailored to your business needs
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    "Wealth Management & Financial Planning",
                    "Business & Strategy Consulting",
                    "Human Capital & Organizational Development",
                    "Portfolio and Asset Management Valuation",
                    "Risk Assessment & Corporate Compliance Advisory",
                    "Project Finance Structuring"
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
                <p className="text-xl text-gray-600 leading-relaxed font-light">
      Tailored advisory that drives growth, preserves wealth, and ensures long-term stability.
                </p>
                <div className="mt-12 inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-blue-800 text-white rounded-2xl shadow-xl">
                  <Building className="w-6 h-6" />
                  <span className="font-semibold text-lg">Trusted by Leading Organizations</span>
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
