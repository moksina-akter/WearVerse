// "use client";

// import { useMemo, useState } from "react";
// import { products } from "@/data/products";
// import ProductCard from "../../components/home/ProductCard";
// import SearchBar from "@/components/products/SearchBar";
// import CategoryFilter from "@/components/products/CategoryFilter";
// import SortDropdown from "@/components/products/SortDropdown";

// export default function ProductsPage(searchParams) {
//   const [search, setSearch] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [sortBy, setSortBy] = useState("default");

//   const categories = [...new Set(products.map((p) => p.category))];

//   const filteredProducts = useMemo(() => {
//     let filtered = [...products];

//     if (selectedCategory !== "All") {
//       filtered = filtered.filter((p) => p.category === selectedCategory);
//     }

//     if (search) {
//       filtered = filtered.filter((p) =>
//         p.name.toLowerCase().includes(search.toLowerCase()),
//       );
//     }

//     if (sortBy === "lowToHigh") {
//       filtered.sort((a, b) => a.price - b.price);
//     }

//     if (sortBy === "highToLow") {
//       filtered.sort((a, b) => b.price - a.price);
//     }

//     return filtered;
//   }, [search, selectedCategory, sortBy]);

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-12">
//       <div className="mb-10">
//         <h1 className="text-3xl font-bold text-gray-900 mt-2">All Products</h1>
//         <p className="text-gray-500 mt-2">Discover our premium collection.</p>
//       </div>

//       <div className="flex flex-col md:flex-row gap-4 justify-between mb-8">
//         <SearchBar search={search} setSearch={setSearch} />

//         <div className="flex gap-4">
//           <CategoryFilter
//             categories={categories}
//             selectedCategory={selectedCategory}
//             setSelectedCategory={setSelectedCategory}
//           />

//           <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {filteredProducts.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </section>
//   );
// }
// "use client";

// import { useMemo, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import { products } from "@/data/products";

// import ProductCard from "../../components/home/ProductCard";
// import SearchBar from "@/components/products/SearchBar";
// import CategoryFilter from "@/components/products/CategoryFilter";
// import SortDropdown from "@/components/products/SortDropdown";

// export default function ProductsPage() {
//   const searchParams = useSearchParams();

//   // URL থেকে category নেবে
//   const categoryFromUrl = searchParams.get("category");

//   const [search, setSearch] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState(
//     categoryFromUrl || "All",
//   );
//   const [sortBy, setSortBy] = useState("default");

//   const categories = ["All", ...new Set(products.map((p) => p.category))];

//   const filteredProducts = useMemo(() => {
//     let filtered = [...products];

//     // Category Filter
//     if (selectedCategory !== "All") {
//       filtered = filtered.filter(
//         (product) => product.category === selectedCategory,
//       );
//     }

//     // Search Filter
//     if (search) {
//       filtered = filtered.filter((product) =>
//         product.name.toLowerCase().includes(search.toLowerCase()),
//       );
//     }

//     // Sorting
//     if (sortBy === "lowToHigh") {
//       filtered.sort((a, b) => a.price - b.price);
//     }

//     if (sortBy === "highToLow") {
//       filtered.sort((a, b) => b.price - a.price);
//     }

//     return filtered;
//   }, [search, selectedCategory, sortBy]);

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-12">
//       {/* Heading */}
//       <div className="mb-10">
//         <h1 className="text-4xl font-bold text-gray-900">
//           {selectedCategory === "All"
//             ? "All Products"
//             : `${selectedCategory} Collection`}
//         </h1>

//         <p className="text-gray-500 mt-2">
//           <span className="text-black ">({filteredProducts.length}) </span>
//           {} Products Found
//         </p>
//       </div>

//       {/* Filters */}
//       <div className="flex flex-col lg:flex-row gap-4 justify-between mb-10">
//         <SearchBar search={search} setSearch={setSearch} />

//         <div className="flex gap-4 flex-wrap">
//           <CategoryFilter
//             categories={categories}
//             selectedCategory={selectedCategory}
//             setSelectedCategory={setSelectedCategory}
//           />

//           <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
//         </div>
//       </div>

//       {/* Empty State */}
//       {filteredProducts.length === 0 ? (
//         <div className="text-center py-20">
//           <h2 className="text-2xl font-semibold">No products found</h2>

//           <p className="text-gray-500 mt-2">
//             Try another category or search term.
//           </p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {filteredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }
"use client";

import { useMemo, useState } from "react";
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

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900">
          {selectedCategory === "All"
            ? "All Products"
            : `${selectedCategory} Collection`}
        </h1>

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
