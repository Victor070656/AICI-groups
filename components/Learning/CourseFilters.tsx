"use client";

import { useState } from "react";

export default function CourseFilters() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [difficulty, setDifficulty] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");

  const handleReset = () => {
    setSearchQuery("");
    setCategory("all");
    setDifficulty("all");
    setDateFilter("all");
  };

  return (
    <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm mb-12">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
        {/* Search Input */}
        <div className="md:col-span-2">
          <label className="flex flex-col w-full h-12">
            <div className="flex w-full items-stretch rounded-lg h-full overflow-hidden shadow-sm">
              <div className="text-gray-500 flex bg-white items-center justify-center pl-4 border-r border-gray-200">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input
                className="flex w-full min-w-0 flex-1 resize-none overflow-hidden text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-800/50 border-none bg-white  h-full placeholder:text-gray-500 px-3 text-base font-normal font-body"
                placeholder="Search for a course..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </label>
        </div>

        {/* Filter Dropdowns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 md:col-span-3 gap-2 items-center">
          <button className="flex h-10 w-full items-center justify-between gap-x-2 rounded-lg bg-white  px-4 shadow-sm hover:bg-gray-50 transition-colors">
            <p className="text-gray-900 text-sm font-medium leading-normal font-body">
              {category === "all" ? "Category" : category}
            </p>
            <span className="material-symbols-outlined text-gray-600 ">
              expand_more
            </span>
          </button>

          <button className="flex h-10 w-full items-center justify-between gap-x-2 rounded-lg bg-white  px-4 shadow-sm hover:bg-gray-50 transition-colors">
            <p className="text-gray-900 text-sm font-medium leading-normal font-body">
              {difficulty === "all" ? "Difficulty" : difficulty}
            </p>
            <span className="material-symbols-outlined text-gray-600 ">
              expand_more
            </span>
          </button>

          <button className="flex h-10 w-full items-center justify-between gap-x-2 rounded-lg bg-white  px-4 shadow-sm hover:bg-gray-50 transition-colors">
            <p className="text-gray-900 text-sm font-medium leading-normal font-body">
              {dateFilter === "all" ? "Date" : dateFilter}
            </p>
            <span className="material-symbols-outlined text-gray-600 ">
              expand_more
            </span>
          </button>

          <button
            onClick={handleReset}
            className="col-span-2 sm:col-span-1 flex h-10 items-center justify-center gap-x-2 rounded-lg bg-white  px-4 shadow-sm hover:bg-gray-50 transition-colors sm:ml-auto"
          >
            <p className="text-blue-800 text-sm font-medium leading-normal font-body">
              Reset
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
