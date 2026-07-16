import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4  ">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center bg-gradient-to-r from-[#F5F5F5] via-[#EFEFEF] to-[#E5E5E5] rounded-3xl overflow-hidden">
        {/* Left Content */}
        <div className="p-8 lg:p-20 flex flex-col justify-center z-10">
          <p className="text-xs uppercase tracking-[4px] text-orange-600 font-bold mb-4">
            New Collection
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.15] mb-6">
            Discover The Latest Fashion
          </h1>

          <p className="text-gray-500 text-base md:text-lg mb-8 max-w-sm leading-relaxed">
            Premium quality clothing for your everyday style
          </p>

          <div>
            <Link
              href="/products"
              className="inline-block bg-black text-white px-10 py-4 rounded-md text-sm font-semibold tracking-wide hover:bg-gray-800 transition-all uppercase"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[450px] lg:h-[620px] w-full flex items-end justify-center overflow-hidden">
          <Image
            src="https://i.ibb.co.com/QvknMxxj/1d4b977abc730b51672a3c394d5d2910-removebg-preview.png"
            alt="Stylish fashionable man looking left"
            fill
            priority
            className="object-contain object-bottom select-none mix-blend-darken"
            style={{
              maskImage:
                "linear-gradient(to top, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to top, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
            }}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
