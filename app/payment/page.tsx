import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import { CreditCard, Calendar, Lock, User, Mail } from "lucide-react";

export default function PaymentPage() {
  // Dummy data for order summary - in a real app, this would come from context/props
  const orderSummary = {
    item: "Luxury Apartment Booking (ID: 1)",
    price: "₦250,000",
    duration: "3 nights",
    total: "₦750,000",
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-gray-50">
      <div className="flex h-full grow flex-col">
        <Header />
        <main className="container mx-auto px-6 py-10 flex-1">
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:flex">
            {/* Payment Form Section */}
            <div className="md:w-2/3 p-8 md:p-12">
              <h1 className="font-display text-3xl md:text-4xl font-black tracking-tight text-gray-900 mb-8">
                Complete Your Booking
              </h1>
              <form className="grid grid-cols-1 gap-6">
                {/* Contact Information */}
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-gray-800">
                    Contact Information
                  </h2>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        className="pl-10 py-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        placeholder="john.doe@example.com"
                        className="pl-10 py-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div className="space-y-4 mt-6">
                  <h2 className="text-xl font-bold text-gray-800">
                    Payment Information
                  </h2>
                  <div>
                    <label
                      htmlFor="card-number"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Card Number
                    </label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="card-number"
                        placeholder="XXXX XXXX XXXX XXXX"
                        className="pl-10 py-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="expiry-date"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Expiry Date
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="expiry-date"
                          placeholder="MM/YY"
                          className="pl-10 py-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="cvc"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        CVC
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="cvc"
                          placeholder="123"
                          className="pl-10 py-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-8 w-full btn-premium flex items-center justify-center gap-3 overflow-hidden rounded-md h-12 px-6 bg-gradient-to-r from-red-600 to-blue-800 text-white text-base font-semibold shadow-xl hover:from-red-700 hover:to-blue-900 transition-all duration-300"
                >
                  <span>Pay {orderSummary.total} Now</span>
                </button>
              </form>
            </div>

            {/* Order Summary Section */}
            <div className="md:w-1/3 bg-gray-100 p-8 md:p-12 flex flex-col justify-between">
              <div className="space-y-6">
                <h2 className="font-display text-2xl font-bold text-gray-900">
                  Order Summary
                </h2>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between">
                    <span>Item:</span>
                    <span className="font-medium">{orderSummary.item}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Price per night:</span>
                    <span className="font-medium">{orderSummary.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium">{orderSummary.duration}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span>{orderSummary.total}</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-sm text-gray-500">
                <p>
                  By clicking "Pay Now", you agree to our{" "}
                  <a href="#" className="text-red-600 hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-red-600 hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
