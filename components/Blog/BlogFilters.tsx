"use client";

import { useState } from "react";

const categories = [
  { id: "all", label: "All" },
  { id: "market", label: "Market Analysis" },
  { id: "tips", label: "Real Estate Tips" },
  { id: "news", label: "Company News" },
];

export default function BlogFilters() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="flex justify-center gap-2 sm:gap-3 p-3 flex-wrap">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveFilter(category.id)}
          className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg px-5 text-sm font-medium transition-all duration-300 ${
            activeFilter === category.id
              ? "bg-blue-800 text-white shadow-md font-bold"
              : "bg-gray-100  text-gray-700 hover:bg-blue-700/10"
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
