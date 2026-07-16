"use client";

import { useState } from "react";
import ProductsSidebar from "./ProductsSidebar";
import ProductsGrid from "./ProductsGrid";

export default function ProductsPageClient({ products }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <ProductsSidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        <div className="lg:col-span-3">
          <ProductsGrid products={filteredProducts} />
        </div>
      </div>
    </section>
  );
}
