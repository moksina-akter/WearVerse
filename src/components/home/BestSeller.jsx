"use client";

import { products } from "@/data/products";
import BestSellerCard from "./BestSellerCard";

export default function BestSeller() {
  const bestProducts = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[4px] text-gray-500">
          Best Sellers
        </p>

        <h2 className="text-3xl font-bold mt-2">Customer Favorites</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {bestProducts.map((product) => (
          <BestSellerCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
