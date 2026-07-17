import Link from "next/link";
import { CheckCircle2, ShoppingBag } from "lucide-react";

export default function OrderSuccessPage() {
  const orderId = `WV${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full bg-white border border-gray-100 rounded-[32px] shadow-sm p-10 md:p-16 text-center">
        {/* Success Icon */}
        <div className="w-24 h-24 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-8">
          <CheckCircle2 size={56} className="text-green-600" strokeWidth={2} />
        </div>

        {/* Success Text */}
        <p className="text-sm uppercase tracking-[5px] text-green-600 font-semibold mb-4">
          Order Confirmed
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
          Thank You For Your Order 🎉
        </h1>

        <p className="text-gray-500 text-lg leading-8 max-w-xl mx-auto">
          Your order has been placed successfully and is now being processed.
          You will receive an order confirmation email shortly.
        </p>

        {/* Order Info */}
        <div className="bg-gray-50 rounded-3xl p-6 mt-10 text-left">
          <div className="flex justify-between py-3 border-b border-gray-200">
            <span className="text-gray-500">Order ID</span>
            <span className="font-semibold">{orderId}</span>
          </div>

          <div className="flex justify-between py-3 border-b border-gray-200">
            <span className="text-gray-500">Payment Method</span>
            <span className="font-semibold">Cash On Delivery</span>
          </div>

          <div className="flex justify-between py-3 border-b border-gray-200">
            <span className="text-gray-500">Estimated Delivery</span>
            <span className="font-semibold">3 - 5 Business Days</span>
          </div>

          <div className="flex justify-between pt-3">
            <span className="text-gray-500">Order Status</span>

            <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              Processing
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link
            href="/products"
            className=" text-white px-8 py-4 rounded-2xl font-semibold hover:bg-gray-700 bg-gray-800 transition flex items-center justify-center gap-2"
          >
            <ShoppingBag size={20} />
            Continue Shopping
          </Link>

          <Link
            href="/"
            className="border border-gray-200 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition"
          >
            Back To Home
          </Link>
        </div>
      </div>
    </section>
  );
}
