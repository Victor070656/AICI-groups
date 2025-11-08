"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function BlogHero() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-wrap justify-between gap-3 p-4 py-18">
      <div className="w-full text-center">
        <h1 className="text-red-600 text-4xl md:text-5xl font-black font-display tracking-tight mb-6">
          Real Estate Insights
        </h1>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mt-8">
          <label className="flex flex-col w-full h-12">
            <div className="flex w-full items-stretch rounded-lg h-full bg-gray-100 border border-gray-200 focus-within:ring-2 focus-within:ring-primary-blue">
              <div className="text-gray-500 flex items-center justify-center pl-4">
                <Search className="w-5 h-5" />
              </div>
              <input
                className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-gray-500 px-3 text-base font-normal"
                placeholder="Search blog..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
