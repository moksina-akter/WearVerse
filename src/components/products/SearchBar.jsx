"use client";

import { Search } from "lucide-react";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="relative w-full md:w-80">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
}
