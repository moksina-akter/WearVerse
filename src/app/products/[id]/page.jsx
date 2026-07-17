"use client";

import { addToWishlist } from "@/utils/wishlist";
// import { toast } from "react-toastify";
import { products } from "@/data/products";
import Link from "next/link";
import {
  Star,
  Heart,
  ShoppingBag,
  ShieldCheck,
  Truck,
  RotateCcw,
  Plus,
  Minus,
} from "lucide-react";
import { use, useState } from "react";
import { addToCart } from "@/utils/cart";
import { toast } from "react-toastify";

export default function ProductDetailsPage({ params }) {
  const { id } = use(params);

  const product = products.find((item) => item.id === parseInt(id));
  if (!product) {
    return (
      <div className="text-center py-24">
        <h1 className="text-4xl font-bold mb-5">Product Not Found</h1>

        <Link
          href="/products"
          className="bg-black text-white px-6 py-3 rounded-xl"
        >
          Back To Products
        </Link>
      </div>
    );
  }

  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || "");

  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "");

  const [quantity, setQuantity] = useState(1);

  const [wishlist, setWishlist] = useState(false);

  const relatedProducts = products
    .filter(
      (item) => item.category === product.category && item.id !== product.id,
    )
    .slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-10">
        <Link
          href="/"
          className="text-sm md:text-sm text-gray-600 hover:text-black transition"
        >
          Home
        </Link>{" "}
        /
        <Link
          href="/products"
          className="text-sm md:text-sm text-gray-600 hover:text-black transition"
        >
          Products
        </Link>{" "}
        /<span className="text-black font-medium"> {product.name}</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Image */}
        <div className="bg-[#F8F8F8] rounded-3xl p-10 flex items-center justify-center h-[600px]">
          <img
            src={product.image}
            alt={product.name}
            className="h-[90%] w-auto object-contain hover:scale-105 transition duration-500"
          />
        </div>

        {/* Info */}
        <div>
          <p className="uppercase tracking-[4px] text-sm text-gray-400">
            {product.category}
          </p>

          <h1 className="text-5xl font-bold mt-3 leading-tight">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-5">
            <Star className="fill-yellow-400 text-yellow-400 w-5 h-5" />

            <span className="font-semibold">{product.rating}</span>

            <span className="text-gray-500">({product.reviews} Reviews)</span>
          </div>

          {/* Price */}
          <h2 className="text-3xl font-black mt-6">
            ৳{product.price.toLocaleString()}
          </h2>

          {/* Description */}
          <p className="text-gray-600 leading-8 mt-6">{product.description}</p>

          {/* Product Info */}
          <div className="space-y-3 mt-8">
            <p>
              <span className="font-semibold">Brand:</span> Wear
              <span className="text-gray-500">Verse</span>
            </p>

            <p>
              <span className="font-semibold">SKU:</span> WV-{product.id}
            </p>

            <p>
              <span className="font-semibold">Stock:</span>

              <span
                className={`ml-2 font-medium ${
                  product.inStock > 0 ? "text-green-600" : "text-red-500"
                }`}
              >
                {product.inStock > 0 ? `${product.inStock} ` : "Out Of Stock"}
              </span>
            </p>
          </div>

          {/* Colors */}
          <div className="mt-10">
            <h3 className="font-semibold mb-4">Colors</h3>

            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-5 py-2 rounded-full border transition
                  ${
                    selectedColor === color
                      ? "bg-gray-800 text-white border-black"
                      : "bg-gray-100 border-gray-200 hover:border-gray-800"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mt-10">
            <h3 className="font-semibold mb-4">Size</h3>

            <div className="flex gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 rounded-xl border transition
                  ${
                    selectedSize === size
                      ? "bg-gray-800 text-white border-black"
                      : "border-gray-300 hover:border-gray-800"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-10">
            <h3 className="font-semibold mb-4">Quantity</h3>

            <div className="flex items-center gap-4">
              <button
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center"
              >
                <Minus size={16} />
              </button>

              <span className="font-semibold text-lg">{quantity}</span>

              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-10">
            <button
              onClick={() => {
                addToCart(product, quantity);
                toast.success(`${product.name} added to cart`, {
                  description: `${selectedSize} • ${selectedColor} • Qty: ${quantity}`,
                });
              }}
              className="flex-1 bg-gray-800 text-white py-4 rounded-2xl font-semibold flex justify-center items-center gap-3 hover:bg-gray-700 transition"
            >
              <ShoppingBag size={20} />
              Add To Cart
            </button>

            {/* <button
              onClick={() => setWishlist(!wishlist)}
              className="w-16 rounded-2xl border border-gray-200 flex justify-center items-center hover:bg-gray-100 transition"
            >
              <Heart className={wishlist ? "fill-red-500 text-red-500" : ""} />
            </button> */}
            <button
              onClick={() => {
                addToWishlist(product);
                toast.success("Added to wishlist ❤️");
              }}
              className="w-16 rounded-2xl border hover:text-red-400 border-gray-200 flex justify-center items-center hover:bg-gray-100  transition"
            >
              <Heart
                size={22}
                className={wishlist ? "fill-red-500 text-red-500" : ""}
              />
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 mt-12">
            {[
              {
                icon: <Truck />,
                title: "Free Shipping",
              },
              {
                icon: <RotateCcw />,
                title: "Easy Return",
              },
              {
                icon: <ShieldCheck />,
                title: "Secure Payment",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-5 text-center bg-white"
              >
                <div className="flex justify-center mb-3 text-gray-700">
                  {item.icon}
                </div>

                <p className="text-sm font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-28">
        <h2 className="text-3xl font-bold mb-10">Related Products</h2>

        <div className="grid  sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedProducts.map((item) => (
            <Link
              key={item.id}
              href={`/products/${item.id}`}
              className="bg-white border border-gray-300 rounded-3xl p-5 hover:shadow-xl transition"
            >
              <div className="bg-gray-50 rounded-2xl p-5">
                <img src={item.image} className="h-64 w-full object-contain" />
              </div>

              <h3 className="font-semibold mt-5 line-clamp-1">{item.name}</h3>

              <p className="font-bold text-xl mt-2">
                ৳{item.price.toLocaleString()}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
