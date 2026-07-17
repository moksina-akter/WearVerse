import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PromoBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left Banner */}
        <div className="bg-[#F5F5F2] rounded-2xl p-10 flex items-center justify-between overflow-hidden group">
          <div className="w-1/2">
            <p className="uppercase tracking-[3px] text-xs text-gray-500 font-medium mb-4">
              Limited Time Offer
            </p>

            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Summer Sale
            </h2>

            <p className="text-gray-500 mt-4 text-lg">
              Up to 50% off selected premium collections.
            </p>

            <button className="mt-8 bg-gray-800 hover:bg-gray-700 text-white px-7 py-4 rounded-2xl font-medium hover:scale-105 transition-all duration-300">
              Shop Collection →
            </button>
          </div>

          <img
            src="https://res.cloudinary.com/x4ibumo0/image/upload/v1784294794/2f6d9cc22c9932faf3e518ae7efe89b3_qunqy6.jpg"
            alt="Summer Collection"
            className="hidden md:block h-[280px] rounded-2xl object-contain group-hover:scale-105 transition duration-500"
          />
        </div>

        {/* Right Banner */}
        <div className="bg-[#F5F5F2] rounded-2xl p-10 flex items-center justify-between overflow-hidden group">
          <div className="w-1/2">
            <p className="uppercase tracking-[3px] text-xs text-gray-500 font-medium mb-4">
              New Arrivals
            </p>

            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Fresh Styles
            </h2>

            <p className="text-gray-500 mt-4 text-lg">
              Discover the latest arrivals for modern fashion.
            </p>

            <button className="mt-8 bg-gray-800 hover:bg-gray-700 text-white px-7 py-4 rounded-2xl font-medium hover:scale-105 transition-all duration-300">
              Explore Now →
            </button>
          </div>

          <img
            src="https://res.cloudinary.com/x4ibumo0/image/upload/v1784294568/28e74cabcbaf698c5744e80f604b424a_e8dibt.jpg"
            alt="New Arrivals"
            className="hidden md:block h-[280px] rounded-2xl object-contain group-hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
}
