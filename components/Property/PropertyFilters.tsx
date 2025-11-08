"use client";

import { useState } from "react";

export default function PropertyFilters() {
  const [propertyType, setPropertyType] = useState("all");
  const [location, setLocation] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [bedrooms, setBedrooms] = useState("all");

  const handleApplyFilters = () => {
    // Apply filter logic here
    console.log({ propertyType, location, priceRange, bedrooms });
  };

  const handleReset = () => {
    setPropertyType("all");
    setLocation("all");
    setPriceRange("all");
    setBedrooms("all");
  };

  return (
    <div className="flex flex-col gap-4 rounded-lg bg-gray-50 p-4 shadow-sm">
      <div className="flex flex-wrap items-center gap-4">
        {/* Property Type */}
        <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white pl-4 pr-3 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 hover:bg-gray-50 transition-colors">
          {propertyType === "all" ? "Property Type" : propertyType}
          <span className="material-symbols-outlined text-xl text-gray-600">
            expand_more
          </span>
        </button>

        {/* Location */}
        <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white  pl-4 pr-3 text-sm font-medium text-gray-900  ring-1 ring-inset ring-gray-200  hover:bg-gray-50  transition-colors">
          {location === "all" ? "Location" : location}
          <span className="material-symbols-outlined text-xl text-gray-600 ">
            expand_more
          </span>
        </button>

        {/* Price */}
        <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white  pl-4 pr-3 text-sm font-medium text-gray-900  ring-1 ring-inset ring-gray-200  hover:bg-gray-50  transition-colors">
          {priceRange === "all" ? "Price" : priceRange}
          <span className="material-symbols-outlined text-xl text-gray-600 ">
            expand_more
          </span>
        </button>

        {/* Bedrooms */}
        <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white  pl-4 pr-3 text-sm font-medium text-gray-900  ring-1 ring-inset ring-gray-200  hover:bg-gray-50  transition-colors">
          {bedrooms === "all" ? "Bedrooms" : bedrooms}
          <span className="material-symbols-outlined text-xl text-gray-600 ">
            expand_more
          </span>
        </button>

        <div className="flex-grow"></div>

        {/* Apply Button */}
        <button
          onClick={handleApplyFilters}
          className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center rounded-lg bg-blue-800 px-4 text-sm font-bold text-white shadow-sm transition-opacity hover:opacity-90"
        >
          <span>Apply Filters</span>
        </button>

        {/* Reset Button */}
        <button
          onClick={handleReset}
          className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center rounded-lg bg-gray-200 px-4 text-sm font-bold text-gray-900  transition-colors hover:bg-gray-300"
        >
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
}
