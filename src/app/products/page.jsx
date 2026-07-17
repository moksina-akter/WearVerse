"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";

import ProductCard from "../../components/home/ProductCard";
import SearchBar from "@/components/products/SearchBar";
import CategoryFilter from "@/components/products/CategoryFilter";
import SortDropdown from "@/components/products/SortDropdown";

export default function ProductsPage() {
  const searchParams = useSearchParams();

  const categoryFromUrl = searchParams.get("category");
  const searchFromUrl = searchParams.get("search") || "";

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    categoryFromUrl || "All",
  );
  const [sortBy, setSortBy] = useState("default");

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category Filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory,
      );
    }

    // Search from SearchBar OR Navbar Search
    const finalSearch = search || searchFromUrl;

    if (finalSearch) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(finalSearch.toLowerCase()) ||
          product.category.toLowerCase().includes(finalSearch.toLowerCase()),
      );
    }

    // Sorting
    if (sortBy === "lowToHigh") {
      filtered.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "highToLow") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [search, searchFromUrl, selectedCategory, sortBy]);

  // Reset page on filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, searchFromUrl, selectedCategory, sortBy]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="mb-10 text-center">
        <h1 className="text-5xl font-bold text-gray-900">
          {selectedCategory === "All"
            ? "All Products"
            : `${selectedCategory} Collection`}
        </h1>
        <p className="text-gray-500 text-center mt-4">
          Discover our curated collection of premium fashion essentials designed
          for comfort, confidence, and timeless style.
        </p>
        <p className="text-gray-500 mt-2">
          <span className="text-black">({filteredProducts.length})</span>{" "}
          Products Found
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-4 justify-between mb-10">
        <SearchBar search={search} setSearch={setSearch} />

        <div className="flex gap-4 flex-wrap">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
        </div>
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold">No products found</h2>

          <p className="text-gray-500 mt-2">
            Try another category or search term.
          </p>
        </div>
      ) : (
        <>
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 mt-12 flex-wrap">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className="px-4 py-2 border rounded-xl disabled:opacity-50 hover:bg-gray-100 transition"
              >
                Prev
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`w-11 h-11 rounded-xl transition ${
                    currentPage === index + 1
                      ? "bg-gray-900 text-white"
                      : "border hover:bg-gray-100"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className="px-4 py-2 border rounded-xl disabled:opacity-50 hover:bg-gray-100 transition"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
