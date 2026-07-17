"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Heart, Trash2 } from "lucide-react";
import { getWishlist, removeFromWishlist } from "@/utils/wishlist";

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    setWishlistItems(getWishlist());
  }, []);

  const handleRemove = (id) => {
    removeFromWishlist(id);
    setWishlistItems(getWishlist());
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto py-28 text-center">
        <Heart size={80} className="mx-auto text-red-400 mb-6" />

        <h1 className="text-4xl font-bold mb-4">Your Wishlist is Empty</h1>

        <p className="text-gray-500 mb-8">Save your favourite products here.</p>

        <Link
          href="/products"
          className="bg-gray-800 transition-all duration-300
hover:scale-105 hover:bg-gray-700 text-white px-8 py-4 rounded-2xl"
        >
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-15">My Wishlist</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition"
          >
            <div className="bg-gray-50 px-12 p-6">
              <img
                src={item.image}
                alt={item.name}
                className="h-64 w-full object-contain"
              />
            </div>

            <div className="p-5">
              <h3 className="font-semibold line-clamp-1">{item.name}</h3>

              <p className="text-2xl font-bold mt-3">
                ৳{item.price.toLocaleString()}
              </p>

              <div className="flex gap-3 mt-5">
                <Link
                  href={`/products/${item.id}`}
                  className="flex-1 bg-gray-800 transition-all duration-300
hover:scale-105 hover:bg-gray-700 text-white text-center py-3 rounded-xl"
                >
                  View Details
                </Link>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="w-12 h-12 border border-red-200 text-red-500 rounded-xl flex items-center justify-center hover:bg-red-50 transition"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
