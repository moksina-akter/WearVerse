// "use client";

// import { useEffect, useState } from "react";
// import { getCart } from "@/utils/cart";
// import { CreditCard, Truck, ShieldCheck } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";

// export default function CheckoutPage() {
//   const [cartItems, setCartItems] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     setCartItems(getCart());
//   }, []);

//   const subtotal = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0,
//   );

//   const shipping = subtotal > 3000 ? 0 : 120;

//   const total = subtotal + shipping;

//   const handleOrder = (e) => {
//     e.preventDefault();

//     localStorage.removeItem("cart");

//     toast.success("Order placed successfully 🎉");

//     setTimeout(() => {
//       router.push("/order-success");
//     }, 1500);
//   };

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold mb-10">Checkout</h1>

//       <div className="grid lg:grid-cols-3 gap-8">
//         {/* Billing Form */}
//         <div className="lg:col-span-2 bg-white border border-gray-100 rounded-3xl p-8">
//           <h2 className="text-2xl font-bold mb-6">Billing Information</h2>

//           <form onSubmit={handleOrder} className="space-y-5">
//             <div className="grid md:grid-cols-2 gap-5">
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 required
//                 className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-black"
//               />

//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 required
//                 className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-black"
//               />
//             </div>

//             <div className="grid md:grid-cols-2 gap-5">
//               <input
//                 type="text"
//                 placeholder="Phone Number"
//                 required
//                 className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-black"
//               />

//               <input
//                 type="text"
//                 placeholder="City"
//                 required
//                 className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-black"
//               />
//             </div>

//             <input
//               type="text"
//               placeholder="Address"
//               required
//               className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-black"
//             />

//             <input
//               type="text"
//               placeholder="Postal Code"
//               required
//               className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-black"
//             />

//             {/* Payment Method */}
//             <div className="pt-4">
//               <h3 className="font-semibold text-lg mb-4">Payment Method</h3>

//               <div className="grid md:grid-cols-3 gap-4">
//                 <label className="border border-gray-200 rounded-2xl p-5 cursor-pointer flex items-center gap-3">
//                   <input type="radio" name="payment" defaultChecked />
//                   Cash On Delivery
//                 </label>

//                 <label className="border border-gray-200 rounded-2xl p-5 cursor-pointer flex items-center gap-3">
//                   <input type="radio" name="payment" />
//                   bKash
//                 </label>

//                 <label className="border border-gray-200 rounded-2xl p-5 cursor-pointer flex items-center gap-3">
//                   <input type="radio" name="payment" />
//                   Card
//                 </label>
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full  text-white py-4 rounded-2xl font-semibold mt-6 hover:bg-gray-700 bg-gray-800 transition"
//             >
//               Place Order
//             </button>
//           </form>
//         </div>

//         {/* Order Summary */}
//         <div className="bg-white border border-gray-100 rounded-3xl p-8 h-fit sticky top-28">
//           <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

//           <div className="space-y-5">
//             {cartItems.map((item) => (
//               <div key={item.id} className="flex items-center gap-4">
//                 <img
//                   src={item.image}
//                   className="w-16 h-16 object-contain bg-gray-50 rounded-xl p-2"
//                 />

//                 <div className="flex-1">
//                   <h3 className="font-medium line-clamp-1">{item.name}</h3>

//                   <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
//                 </div>

//                 <p className="font-semibold">
//                   ৳{(item.price * item.quantity).toLocaleString()}
//                 </p>
//               </div>
//             ))}
//           </div>

//           <div className="border-t border-gray-300 mt-6 pt-6 space-y-4">
//             <div className="flex justify-between">
//               <span>Subtotal</span>
//               <span>৳{subtotal.toLocaleString()}</span>
//             </div>

//             <div className="flex justify-between">
//               <span>Shipping</span>
//               <span>{shipping === 0 ? "Free" : `৳${shipping}`}</span>
//             </div>

//             <div className="flex justify-between text-xl font-bold border-t border-gray-400  pt-4">
//               <span>Total</span>
//               <span>৳{total.toLocaleString()}</span>
//             </div>
//           </div>

//           {/* Features */}
//           <div className="mt-8 space-y-4 text-sm text-gray-600">
//             <div className="flex items-center gap-3">
//               <ShieldCheck size={18} />
//               Secure Checkout
//             </div>

//             <div className="flex items-center gap-3">
//               <CreditCard size={18} />
//               Multiple Payment Methods
//             </div>

//             <div className="flex items-center gap-3">
//               <Truck size={18} />
//               Fast Delivery
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { getCart } from "@/utils/cart";
import { CreditCard, Truck, ShieldCheck, Banknote, Wallet } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const router = useRouter();

  useEffect(() => {
    setCartItems(getCart());
  }, []);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const shipping = subtotal > 3000 ? 0 : 120;
  const total = subtotal + shipping;

  const handleOrder = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      localStorage.removeItem("cart");

      toast.success("Order placed successfully 🎉");

      router.push("/order-success");
    }, 1500);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="mb-10">
        <p className="text-sm text-gray-500 uppercase tracking-[4px]">
          Secure Checkout
        </p>

        <h1 className="text-3xl md:text-3xl font-bold mt-2">
          Complete Your Order
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Billing Form */}
        <div className="lg:col-span-2 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Billing Information</h2>

          <form onSubmit={handleOrder} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-black transition"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-black transition"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Phone Number"
                required
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-black transition"
              />

              <input
                type="text"
                placeholder="City"
                required
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-black transition"
              />
            </div>

            <input
              type="text"
              placeholder="Full Address"
              required
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-black transition"
            />

            <input
              type="text"
              placeholder="Postal Code"
              required
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-black transition"
            />

            {/* Coupon */}
            <input
              type="text"
              placeholder="Coupon Code (Optional)"
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-black transition"
            />

            {/* Payment Method */}
            <div className="pt-4">
              <h3 className="font-semibold text-lg mb-4">Payment Method</h3>

              <div className="space-y-4">
                <label className="flex items-center justify-between border border-gray-200 rounded-2xl p-5 cursor-pointer hover:border-black transition">
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      defaultChecked
                      className="w-5 h-5 accent-black"
                    />

                    <div>
                      <p className="font-semibold">Cash On Delivery</p>
                      <p className="text-sm text-gray-500">
                        Pay when your order arrives
                      </p>
                    </div>
                  </div>

                  <Banknote className="text-gray-500" size={24} />
                </label>

                <label className="flex items-center justify-between border border-gray-200 rounded-2xl p-5 cursor-pointer hover:border-black transition">
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="payment"
                      value="bkash"
                      className="w-5 h-5 accent-pink-500"
                    />

                    <div>
                      <p className="font-semibold">bKash</p>
                      <p className="text-sm text-gray-500">
                        Mobile payment via bKash
                      </p>
                    </div>
                  </div>

                  <Wallet className="text-pink-500" size={24} />
                </label>

                <label className="flex items-center justify-between border border-gray-200 rounded-2xl p-5 cursor-pointer hover:border-black transition">
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      className="w-5 h-5 accent-blue-500"
                    />

                    <div>
                      <p className="font-semibold">Credit / Debit Card</p>
                      <p className="text-sm text-gray-500">
                        Visa, Mastercard, Amex
                      </p>
                    </div>
                  </div>

                  <CreditCard className="text-blue-500" size={24} />
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-800 text-white py-5 rounded-2xl font-semibold mt-6 hover:bg-gray-700 transition disabled:opacity-50"
            >
              {loading ? "Processing Order..." : "Place Order"}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 h-fit sticky top-28 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

          <div className="space-y-5">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <img
                  src={item.image}
                  className="w-20 h-20 object-contain bg-gray-50 rounded-2xl p-2"
                />

                <div className="flex-1">
                  <h3 className="font-medium line-clamp-1">{item.name}</h3>

                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>

                <p className="font-semibold">
                  ৳{(item.price * item.quantity).toLocaleString()}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 mt-6 pt-6 space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>৳{subtotal.toLocaleString()}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>

              <span>{shipping === 0 ? "Free" : `৳${shipping}`}</span>
            </div>

            {shipping === 0 && (
              <p className="text-green-600 text-sm">
                🎉 You unlocked free shipping!
              </p>
            )}

            <div className="flex justify-between text-2xl font-bold border-t pt-4">
              <span>Total</span>
              <span>৳{total.toLocaleString()}</span>
            </div>
          </div>

          {/* Features */}
          <div className="mt-8 space-y-4 text-sm text-gray-600">
            <div className="flex items-center gap-3">
              <ShieldCheck size={18} />
              Secure Checkout
            </div>

            <div className="flex items-center gap-3">
              <CreditCard size={18} />
              Multiple Payment Methods
            </div>

            <div className="flex items-center gap-3">
              <Truck size={18} />
              Fast Delivery Across Bangladesh
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
