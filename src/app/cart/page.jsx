"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getCart, removeFromCart } from "@/utils/cart";
import {
  Plus,
  Minus,
  Trash2,
  ShieldCheck,
  RotateCcw,
  Truck,
  ArrowRight,
} from "lucide-react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(getCart());
  }, []);

  const handleRemove = (id) => {
    removeFromCart(id);
    setCartItems(getCart());
  };

  const updateQuantity = (id, type) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity:
            type === "increase"
              ? item.quantity + 1
              : Math.max(1, item.quantity - 1),
        };
      }
      return item;
    });

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const shipping = subtotal > 3000 ? 0 : 120;

  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>

        <p className="text-gray-500 mb-8">
          Add some products to continue shopping.
        </p>

        <Link
          href="/products"
          className="bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white px-1 py-4 rounded-xl"
        >
          Continue Shopping <ArrowRight size={18} />
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10">Your Cart</h1>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Cart Items */}
        <div className="lg:col-span-2 bg-white border border-gray-100 rounded-3xl p-6">
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center gap-6 border-b border-gray-300 pb-6"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-contain bg-gray-50 rounded-2xl p-3"
                />
                <div className="flex-1">
                  <h2 className="font-bold text-lg">{item.name}</h2>
                  <p className="text-gray-500 text-sm mt-1">
                    {item.selectedColor || "Default"} /
                    {item.selectedSize || "M"}
                  </p>
                  <p className="font-semibold mt-3">
                    ৳{item.price.toLocaleString()}
                  </p>
                </div>
                <div> </div>
                {/* Quantity */}
                <div className="flex items-center border border-gray-400 rounded-xl overflow-hidden">
                  <button
                    onClick={() => updateQuantity(item.id, "decrease")}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    <Minus size={16} />
                  </button>

                  <span className="px-4">{item.quantity}</span>

                  <button
                    onClick={() => updateQuantity(item.id, "increase")}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <div className="font-bold text-lg w-28 text-center">
                  ৳{(item.price * item.quantity).toLocaleString()}
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          <Link
            href="/products"
            className="inline-flex items-center mt-8 text-gray-600 hover:text-black"
          >
            ← Continue Shopping
          </Link>
        </div>

        {/* Order Summary */}
        <div className="border border-gray-100 rounded-3xl p-8 h-fit sticky top-28">
          <h2 className="text-2xl font-bold mb-8">Order Summary</h2>

          <div className="space-y-4 text-gray-600 mb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>৳{subtotal.toLocaleString()}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : `৳${shipping}`}</span>
            </div>

            <hr className="text-gray-300" />

            <div className="flex justify-between text-2xl font-bold text-black">
              <span>Total</span>
              <span>৳{total.toLocaleString()}</span>
            </div>
          </div>

          <Link
            href="/checkout"
            className="w-full block text-center bg-gray-800  text-white py-4 rounded-2xl font-semibold hover:bg-gray-700 transition"
          >
            Checkout
          </Link>
          <div className="mt-8 space-y-5 text-sm text-gray-600">
            <div className="flex gap-3 items-center">
              <ShieldCheck size={20} />
              <div>
                <p className="font-medium text-black">Secure Checkout</p>
                <p>100% secure payment</p>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <RotateCcw size={20} />
              <div>
                <p className="font-medium text-black">Easy Returns</p>
                <p>30 day return policy</p>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <Truck size={20} />
              <div>
                <p className="font-medium text-black">Free Shipping</p>
                <p>On orders over ৳3000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
