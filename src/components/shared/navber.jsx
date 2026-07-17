"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, ShoppingCart, Search, Heart, Moon, Sun } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    const updateCounts = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

      const totalCartItems = cart.reduce(
        (total, item) => total + (item.quantity || 1),
        0,
      );

      setCartCount(totalCartItems);
      setWishlistCount(wishlist.length);
    };

    updateCounts();

    window.addEventListener("storage", updateCounts);
    window.addEventListener("cartUpdated", updateCounts);
    window.addEventListener("wishlistUpdated", updateCounts);

    return () => {
      window.removeEventListener("storage", updateCounts);
      window.removeEventListener("cartUpdated", updateCounts);
      window.removeEventListener("wishlistUpdated", updateCounts);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;

    setDarkMode(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleSearch = () => {
    const query = searchTerm.trim();

    if (!query) return;

    router.push(`/products?search=${encodeURIComponent(query)}`);

    setSearchTerm("");
    setShowSearch(false);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        {showSearch && (
          <div className="py-4 border-b border-gray-100 dark:border-gray-800">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
                className="flex-1 border border-gray-200 dark:border-gray-700 rounded-2xl px-5 py-3 outline-none focus:border-black dark:bg-gray-900 dark:text-white transition"
              />

              <button
                onClick={handleSearch}
                className="bg-gray-800 text-white px-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-gray-700"
              >
                Search
              </button>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center ">
            <Image
              src="/wearverse-logo.png"
              alt="WearVerse Logo"
              width={70}
              height={70}
              priority
              className="object-contain"
            />

            <span className="text-2xl font-bold tracking-wide text-black dark:text-white">
              Wear<span className="text-gray-500">Verse</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition pb-1 ${
                  pathname === link.href
                    ? "text-black dark:text-white border-b-2 border-black dark:border-white"
                    : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-5">
            {/* Theme */}
            <button
              onClick={toggleTheme}
              className="hover:text-gray-500 transition"
            >
              {darkMode ? (
                <Sun size={20} strokeWidth={1.8} />
              ) : (
                <Moon size={20} strokeWidth={1.8} />
              )}
            </button>

            {/* Search */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="hover:text-gray-500 transition"
            >
              <Search size={20} strokeWidth={1.8} />
            </button>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="relative hover:text-red-500 transition"
            >
              <Heart size={20} strokeWidth={1.8} />

              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative hover:text-gray-500 transition"
            >
              <ShoppingCart size={21} strokeWidth={1.8} />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 dark:border-gray-800 py-5 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block font-medium ${
                  pathname === link.href
                    ? "text-black dark:text-white font-semibold"
                    : "text-gray-700 dark:text-gray-300"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex gap-6 pt-2">
              <button onClick={toggleTheme}>
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button onClick={() => setShowSearch(!showSearch)}>
                <Search size={20} />
              </button>

              <Link href="/wishlist" className="relative">
                <Heart size={20} />

                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              <Link href="/cart" className="relative">
                <ShoppingCart size={20} />

                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
