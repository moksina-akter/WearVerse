import { ShieldCheck, Truck, Sparkles, Users } from "lucide-react";

export default function AboutPage() {
  const features = [
    {
      icon: <Sparkles size={30} />,
      title: "Premium Quality",
      description:
        "Every product is carefully selected to ensure exceptional quality and comfort.",
    },
    {
      icon: <Truck size={30} />,
      title: "Fast Delivery",
      description:
        "We provide quick and reliable delivery all across Bangladesh.",
    },
    {
      icon: <ShieldCheck size={30} />,
      title: "Secure Shopping",
      description:
        "Your payments and personal information are always protected.",
    },
    {
      icon: <Users size={30} />,
      title: "Happy Customers",
      description:
        "Thousands of customers trust WearVerse for their fashion needs.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 pt-6">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="uppercase tracking-[4px] text-gray-500 text-sm">
          About WearVerse
        </p>

        <h1 className="text-5xl font-bold mt-4 leading-tight">
          Fashion That Defines Your Style
        </h1>

        <p className="text-gray-600 mt-6 leading-8">
          WearVerse is a modern fashion destination built for people who value
          quality, comfort, and timeless style. We bring premium collections
          designed for everyday confidence and elegance.
        </p>
      </div>

      {/* Story */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
        <div>
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200"
            alt="About WearVerse"
            className="rounded-3xl w-full h-[500px] object-cover"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>

          <p className="text-gray-600 leading-8 mb-6">
            Founded with a vision to redefine fashion shopping in Bangladesh,
            WearVerse combines premium design with exceptional customer
            experience.
          </p>

          <p className="text-gray-600 leading-8 mb-6">
            From classic Panjabis to modern streetwear, our collections are
            crafted to help you express yourself with confidence.
          </p>

          <p className="text-gray-600 leading-8">
            We believe fashion should be simple, premium, and accessible to
            everyone.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="mt-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Why Choose Us</h2>

          <p className="text-gray-500 mt-3">More than just a fashion store.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-3xl p-8 text-center hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-center mb-5 text-gray-700">
                {item.icon}
              </div>

              <h3 className="font-bold text-xl mb-3">{item.title}</h3>

              <p className="text-gray-500 leading-7">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
