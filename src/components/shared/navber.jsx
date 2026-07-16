"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart, Search, Heart } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-wide text-black"
          >
            Wear<span className="text-gray-500">Verse</span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-black transition duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-5">
            <button className="hover:text-gray-500 transition">
              <Search size={20} strokeWidth={1.8} />
            </button>

            <button className="hover:text-gray-500 transition">
              <Heart size={20} strokeWidth={1.8} />
            </button>

            <Link
              href="/cart"
              className="relative hover:text-gray-500 transition"
            >
              <ShoppingCart size={21} strokeWidth={1.8} />

              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-gray-100 py-5 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-gray-700 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex gap-5 pt-2">
              <Search size={20} />
              <Heart size={20} />

              <Link href="/cart" className="relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
