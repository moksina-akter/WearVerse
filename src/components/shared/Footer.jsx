import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-600 to-gray-700 text-white mt-4">
      <div className="max-w-7xl mx-auto px-4 pt-10 pb-3">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold">
              Wear<span className="text-gray-500">Verse</span>
            </h2>

            <p className="text-gray-400 mt-4 leading-7 hover:text-white">
              Premium fashion destination for modern lifestyle and timeless
              style.
            </p>

            <div className="flex gap-4 mt-6 text-xl">
              <FaFacebookF className="hover:text-gray-400 cursor-pointer transition" />
              <FaInstagram className="hover:text-gray-400 cursor-pointer transition" />
              <FaTwitter className="hover:text-gray-400 cursor-pointer transition" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Quick Links</h3>

            <div className="flex flex-col gap-3 text-gray-400 ">
              <Link className="hover:text-white" href="/">
                Home
              </Link>
              <Link className="hover:text-white" href="/products">
                Products
              </Link>
              <Link className="hover:text-white" href="/about">
                About Us
              </Link>
              <Link className="hover:text-white" href="/contact">
                Contact
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Categories</h3>

            <div className="flex flex-col gap-3 text-gray-400 ">
              <Link
                className="hover:text-white"
                href="/products?category=Panjabi"
              >
                Panjabi
              </Link>
              <Link
                className="hover:text-white"
                href="/products?category=Shirt"
              >
                Shirt
              </Link>
              <Link
                className="hover:text-white"
                href="/products?category=T-Shirt"
              >
                T-Shirt
              </Link>
              <Link
                className="hover:text-white"
                href="/products?category=Hoodie"
              >
                Hoodie
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Contact</h3>

            <div className="space-y-4 text-gray-400">
              <div className="flex hover:text-white items-center gap-3">
                <MapPin size={18} />
                Dhaka, Bangladesh
              </div>

              <div className="flex hover:text-white items-center gap-3 ">
                <Phone size={18} />
                +880 1700-000000
              </div>

              <div className="flex hover:text-white items-center gap-3">
                <Mail size={18} />
                support@wearverse.com
              </div>
            </div>
          </div>
        </div>
        {/* Newsletter */}
        {/* <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Join Our Newsletter</h2>

            <p className="text-gray-400 mt-3">
              Get updates about new arrivals, exclusive offers and fashion
              trends.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-5 py-4 rounded-2xl bg-white/10 border border-white/10 outline-none focus:border-white transition"
              />

              <button className="px-8 py-4 bg-white text-black rounded-2xl font-semibold hover:bg-gray-200 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}
        <div className="border-t border-gray-400 mt-8 pt-4 text-center text-gray-500">
          © 2026 WearVerse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
