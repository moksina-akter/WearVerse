import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck } from "lucide-react";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 ">
      <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center overflow-hidden rounded-[32px] bg-gradient-to-br from-[#FAFAFA] via-[#F3F4F6] to-[#ECECEC]">
        {/* Background Blur Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gray-200/40 rounded-full blur-3xl -translate-x-20 -translate-y-20" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-300/30 rounded-full blur-3xl translate-x-20 translate-y-20" />

        {/* Left Content */}
        <div className="relative z-10 p-8 lg:p-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-600">
              2026 Premium Collection
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.05] mb-6">
            Elevate Your
            <span className="block bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent">
              Everyday Style
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-md mb-8">
            Discover premium fashion pieces designed for comfort, confidence,
            and timeless elegance.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Shop Collection
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 hover:bg-gray-400 bg-white border border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all"
            >
              Explore More
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Truck size={18} className="text-gray-700" />
              Free Shipping
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-gray-700" />
              Premium Quality
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[500px] lg:h-[700px] w-full flex items-end justify-center overflow-hidden">
          <Image
            src="https://i.ibb.co.com/QvknMxxj/1d4b977abc730b51672a3c394d5d2910-removebg-preview.png"
            alt="Premium Fashion Model"
            fill
            priority
            unoptimized
            className="object-contain object-bottom select-none drop-shadow-[0_35px_60px_rgba(0,0,0,0.18)] hover:scale-105 transition-transform duration-700"
            style={{
              maskImage:
                "linear-gradient(to top, rgba(0,0,0,1) 88%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to top, rgba(0,0,0,1) 88%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
