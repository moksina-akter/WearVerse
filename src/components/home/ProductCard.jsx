// "use client";

// import Link from "next/link";
// import { Heart, Star, ShoppingBag, ArrowRight } from "lucide-react";
// import { useState } from "react";

// export default function ProductCard({ product }) {
//   const { id, name, image, price, rating, reviews = 120, category } = product;

//   const [isWishlist, setIsWishlist] = useState(false);

//   return (
//     <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
//       {/* Image Section */}
//       <div className="relative bg-gradient-to-b from-gray-50 to-gray-100 aspect-[3/4] flex items-center justify-center p-6 overflow-hidden">
//         {/* Category */}
//         <span className="absolute top-4 left-4 bg-white text-gray-700 text-[11px] uppercase font-semibold px-3 py-1 rounded-full shadow-sm">
//           {category}
//         </span>

//         {/* Wishlist */}
//         <button
//           onClick={() => setIsWishlist(!isWishlist)}
//           className="absolute top-4 right-4 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 z-10"
//         >
//           <Heart
//             size={18}
//             className={`transition-all duration-300 ${
//               isWishlist
//                 ? "fill-red-500 text-red-500"
//                 : "text-gray-500 hover:text-red-500"
//             }`}
//           />
//         </button>

//         {/* Product Image */}
//         <img
//           src={image}
//           alt={name}
//           className="max-h-[280px] object-contain group-hover:scale-105 transition-transform duration-500"
//         />
//       </div>

//       {/* Content */}
//       <div className="p-5 flex flex-col flex-grow">
//         {/* Rating */}
//         <div className="flex items-center gap-1 mb-2">
//           <Star size={14} className="fill-yellow-400 text-yellow-400" />
//           <span className="text-sm font-medium text-gray-700">{rating}</span>
//           <span className="text-sm text-gray-400">({reviews} reviews)</span>
//         </div>
//         {/* Product Name */}
//         <Link
//           href={`/products/${id}`}
//           className="text-lg font-semibold text-gray-900 hover:text-gray-600 transition-colors line-clamp-1"
//         >
//           {name}
//         </Link>
//         {/* Price */}
//         <p className="text-2xl font-bold text-gray-900 mt-3">
//           ৳{price.toLocaleString()}
//         </p>

//         <Link
//           href={`/products/${id}`}
//           className="mt-5 w-full
// hover:scale-105 bg-gray-800 text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-700 transition-all duration-300"
//         >
//           <span>View Details</span>
//           <ArrowRight size={18} />
//         </Link>
//       </div>
//     </div>
//   );
// }
"use client";

import Link from "next/link";
import { Heart, Star, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function ProductCard({ product }) {
  const { id, name, image, price, rating, reviews = 120, category } = product;

  const [isWishlist, setIsWishlist] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.find((item) => item.id === id);

    setIsWishlist(!!exists);
  }, [id]);

  // const handleWishlist = () => {
  //   const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  //   const exists = wishlist.find((item) => item.id === id);

  //   if (exists) {
  //     const updatedWishlist = wishlist.filter((item) => item.id !== id);

  //     localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

  //     setIsWishlist(false);
  //   } else {
  //     const updatedWishlist = [...wishlist, product];

  //     localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

  //     setIsWishlist(true);
  //   }

  //   window.dispatchEvent(new Event("wishlistUpdated"));
  // };
  const handleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.find((item) => item.id === id);

    if (exists) {
      const updatedWishlist = wishlist.filter((item) => item.id !== id);

      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

      setIsWishlist(false);

      toast.info("Removed from wishlist 💔");
    } else {
      const updatedWishlist = [...wishlist, product];

      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

      setIsWishlist(true);

      toast.success("Added to wishlist ❤️");
    }

    window.dispatchEvent(new Event("wishlistUpdated"));
  };
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
      {/* Image Section */}
      <div className="relative bg-gradient-to-b from-gray-50 to-gray-100 aspect-[3/4] flex items-center justify-center p-6 overflow-hidden">
        {/* Category */}
        <span className="absolute top-4 left-4 bg-white text-gray-700 text-[11px] uppercase font-semibold px-3 py-1 rounded-full shadow-sm">
          {category}
        </span>

        {/* Wishlist */}
        <button
          onClick={handleWishlist}
          className="absolute top-4 right-4 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 z-10"
        >
          <Heart
            size={18}
            className={`transition-all duration-300 ${
              isWishlist
                ? "fill-red-500 text-red-500"
                : "text-gray-500 hover:text-red-500"
            }`}
          />
        </button>

        {/* Product Image */}
        <img
          src={image}
          alt={name}
          className="max-h-[280px] object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <Star size={14} className="fill-yellow-400 text-yellow-400" />

          <span className="text-sm font-medium text-gray-700">{rating}</span>

          <span className="text-sm text-gray-400">({reviews} reviews)</span>
        </div>

        {/* Product Name */}
        <Link
          href={`/products/${id}`}
          className="text-lg font-semibold text-gray-900 hover:text-gray-600 transition-colors line-clamp-1"
        >
          {name}
        </Link>

        {/* Price */}
        <p className="text-2xl font-bold text-gray-900 mt-3">
          ৳{price.toLocaleString()}
        </p>

        {/* Button */}
        <Link
          href={`/products/${id}`}
          className="mt-5 w-full hover:scale-105 bg-gray-800 text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-700 transition-all duration-300"
        >
          <span>View Details</span>
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
