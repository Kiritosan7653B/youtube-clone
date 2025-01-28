"use client";
import { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <>
      <div className="flex -mb-10 mt-5">
        <h1 className="text-2xl pl-6 font-semibold text-center text-gray-900">
          YouTube
        </h1>
      </div>
      <div className="flex justify-center w-full">
        <div className="flex items-center w-full max-w-2xl border border-gray-300 rounded-full bg-white px-4 py-0 shadow-sm">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full outline-none bg-transparent text-black placeholder-gray-500"
          />

          {/* Clear Button (X) */}
          {query && (
            <button
              onClick={() => setQuery("")}
              className="px-2 text-gray-500 hover:text-black"
            >
              ✖
            </button>
          )}

          {/* Search Button */}
          <button className="px-3 border-l border-gray-300 text-gray-600 hover:bg-gray-200 rounded-r-full">
            🔍
          </button>

          {/* Voice Search Button */}
          <button className="ml-2 text-gray-600 hover:bg-gray-200 rounded-full p-2">
            🎤
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
