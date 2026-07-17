"use client";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "react-toastify";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully 🎉");
    e.target.reset();
  };
  return (
    <section className="max-w-7xl mx-auto px-4 pt-8">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="uppercase tracking-[4px] text-gray-500 text-sm">
          Contact Us
        </p>

        <h1 className="text-5xl font-bold mt-4">We'd Love To Hear From You</h1>

        <p className="text-gray-600 mt-6 leading-8">
          Have questions about our products or your order? Our team is here to
          help you anytime.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="border border-gray-100 rounded-3xl p-6 flex gap-5 items-center hover:shadow-lg transition">
            <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center">
              <MapPin size={24} />
            </div>

            <div>
              <h3 className="font-bold text-lg">Our Location</h3>
              <p className="text-gray-500">Dhaka, Bangladesh</p>
            </div>
          </div>

          <div className="border border-gray-100 rounded-3xl p-6 flex gap-5 items-center hover:shadow-lg transition">
            <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center">
              <Phone size={24} />
            </div>

            <div>
              <h3 className="font-bold text-lg">Phone Number</h3>
              <p className="text-gray-500">+880 1700-000000</p>
            </div>
          </div>

          <div className="border border-gray-100 rounded-3xl p-6 flex gap-5 items-center hover:shadow-lg transition">
            <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center">
              <Mail size={24} />
            </div>

            <div>
              <h3 className="font-bold text-lg">Email Address</h3>
              <p className="text-gray-500">support@wearverse.com</p>
            </div>
          </div>

          <div className="border border-gray-100 rounded-3xl p-6 flex gap-5 items-center hover:shadow-lg transition">
            <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center">
              <Clock size={24} />
            </div>

            <div>
              <h3 className="font-bold text-lg">Working Hours</h3>
              <p className="text-gray-500">Sat - Thu: 9:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="border border-gray-100 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-8">Send Message</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-black"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-black"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-black"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-black resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full transition-all duration-300
hover:scale-105 text-white py-4 rounded-2xl font-semibold hover:bg-gray-700 bg-gray-800 "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
