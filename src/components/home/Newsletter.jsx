"use client";

import { useState } from "react";
import { toast } from "react-toastify";
// import { toast } from "react-hot-toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      return toast.error("Please enter your email");
    }

    toast.success("Successfully subscribed!");
    setEmail("");
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 overflow-hidden rounded-[32px] bg-[#F5F1EC] border border-gray-200">
        {/* Left Image */}
        <div className="h-[280px] md:h-[340px]">
          <img
            src="https://res.cloudinary.com/x4ibumo0/image/upload/v1784293722/5359f7f154a0a7ce885494244423ab7a_lit1oj.jpg"
            alt="Fashion Model"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <p className="text-xs uppercase tracking-[4px] text-gray-500 font-medium">
            GET 10% OFF YOUR FIRST ORDER
          </p>

          <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mt-4">
            Join Our Style List
          </h2>

          <p className="text-gray-600 mt-4 leading-7">
            Sign up for exclusive offers, new arrivals, and fashion inspiration.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white px-5 py-4 rounded-2xl border border-gray-200 outline-none focus:border-black"
            />

            <button
              type="submit"
              className="bg-black text-white px-8 py-4 rounded-2xl font-semibold hover:bg-gray-800 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
