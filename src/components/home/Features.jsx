import { Truck, RefreshCcw, ShieldCheck, Headphones } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Truck size={28} />,
      title: "Free Shipping",
      subtitle: "On orders over $99",
    },
    {
      icon: <RefreshCcw size={28} />,
      title: "Easy Returns",
      subtitle: "30 days return policy",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Secure Payment",
      subtitle: "100% secure checkout",
    },
    {
      icon: <Headphones size={28} />,
      title: "24/7 Support",
      subtitle: "Dedicated support",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-10 border-b border-gray-200">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-4 justify-center lg:justify-start"
          >
            <div className="text-gray-700">{feature.icon}</div>

            <div>
              <h3 className="font-semibold text-sm text-gray-900">
                {feature.title}
              </h3>

              <p className="text-xs text-gray-500">{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
