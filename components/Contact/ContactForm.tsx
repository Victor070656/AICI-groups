"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="mt-12 bg-white p-8 rounded-xl shadow-lg border border-gray-200 ">
      <h2 className="text-blue-800  font-display text-2xl font-bold leading-tight tracking-tight">
        Send Us a Message
      </h2>

      <form
        onSubmit={handleSubmit}
        className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6"
      >
        {/* Full Name */}
        <div className="sm:col-span-2">
          <label
            className="block text-sm font-medium text-gray-600"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <div className="mt-1">
            <input
              autoComplete="name"
              className="block w-full rounded-md border border-gray-300  shadow-sm focus:border-red-600 focus:ring-red-600 sm:text-sm bg-gray-50  text-gray-900  px-4 py-2"
              id="fullName"
              name="fullName"
              required
              type="text"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            className="block text-sm font-medium text-gray-600"
            htmlFor="email"
          >
            Email
          </label>
          <div className="mt-1">
            <input
              autoComplete="email"
              className="block w-full rounded-md border border-gray-300  shadow-sm focus:border-red-600 focus:ring-red-600 sm:text-sm bg-gray-50  text-gray-900  px-4 py-2"
              id="email"
              name="email"
              required
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label
            className="block text-sm font-medium text-gray-600"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <div className="mt-1">
            <input
              autoComplete="tel"
              className="block w-full rounded-md border border-gray-300  shadow-sm focus:border-red-600 focus:ring-red-600 sm:text-sm bg-gray-50  text-gray-900  px-4 py-2"
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Subject */}
        <div className="sm:col-span-2">
          <label
            className="block text-sm font-medium text-gray-600"
            htmlFor="subject"
          >
            Subject
          </label>
          <div className="mt-1">
            <input
              className="block w-full rounded-md border border-gray-300  shadow-sm focus:border-red-600 focus:ring-red-600 sm:text-sm bg-gray-50  text-gray-900  px-4 py-2"
              id="subject"
              name="subject"
              required
              type="text"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label
            className="block text-sm font-medium text-gray-600"
            htmlFor="message"
          >
            Message
          </label>
          <div className="mt-1">
            <textarea
              className="block w-full rounded-md border border-gray-300  shadow-sm focus:border-red-600 focus:ring-red-600 sm:text-sm bg-gray-50  text-gray-900  px-4 py-2"
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* reCAPTCHA Placeholder */}
        <div className="sm:col-span-2 flex justify-center my-4">
          <div className="w-72 h-20 bg-gray-200  rounded-md flex items-center justify-center">
            <p className="text-sm text-gray-500">[ reCAPTCHA Placeholder ]</p>
          </div>
        </div>

        {/* Submit Button */}
        <div className="sm:col-span-2">
          <button
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-base font-bold text-white bg-red-600 hover:bg-red-600/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 transition-all"
            type="submit"
          >
            Send Message
          </button>
        </div>

        {/* Privacy Policy */}
        <div className="sm:col-span-2">
          <p className="mt-2 text-xs text-center text-gray-600">
            By submitting this form, you agree to our{" "}
            <a
              className="font-medium text-red-600 hover:underline"
              href="/privacy"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  );
}
