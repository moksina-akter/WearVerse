"use client";

import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

export default function BestSellerCard({ product }) {
  return (
    <div className="group bg-white border border-gray-200 rounded-3xl p-5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <div className="relative bg-gray-50 rounded-2xl h-56 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 object-contain group-hover:scale-110 transition duration-500"
        />

        <span className="absolute top-3 left-3 bg-gray-500 text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
          Best Seller
        </span>
      </div>

      <div className="mt-5">
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          <Star size={14} className="fill-yellow-500" />
          <span>{product.rating}</span>
        </div>

        <h3 className="font-semibold text-lg mt-2 line-clamp-1">
          {product.name}
        </h3>

        <div className="flex items-center justify-between mt-4">
          <p className="text-2xl font-bold">
            ৳{product.price.toLocaleString()}
          </p>

          <Link
            href={`/products/${product.id}`}
            className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:scale-110 transition"
          >
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
