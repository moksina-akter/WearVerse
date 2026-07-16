import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default function FeaturedProducts() {
  const featured = products.slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
      <div className="flex justify-between items-end mb-8 md:mb-10">
        <div>
          <p className="text-sm text-gray-500 uppercase tracking-[4px]">
            Trending Now
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
            Featured Products
          </h2>
        </div>

        <Link
          href="/products"
          className="text-sm md:text-sm text-gray-600 hover:text-black transition"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
