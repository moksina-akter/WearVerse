import Image from "next/image";

const categories = [
  {
    name: "Panjabi",
    image:
      "https://i.ibb.co.com/9mH1QFrC/ec137e2051df8e0488d46751d6dc76e7.jpg://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Shirt",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300",
  },
  {
    name: "T-Shirt",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300",
  },
  {
    name: "Hoodie",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300",
  },
  {
    name: "Jeans",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300",
  },
  {
    name: "Polo",
    image:
      "https://i.ibb.co.com/PZqZvXXm/65c244873267a6444aba78846e6a94bc.jpg://images.unsplash.com/photo-1581655353564-df123a1eb820?w=300",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Featured Categories
        </h2>

        <button className="text-sm text-gray-500 hover:text-black transition">
          View All
        </button>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-100 border border-gray-200 transition duration-300 group-hover:scale-105">
              <Image
                src={category.image}
                alt={category.name}
                width={120}
                height={120}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>

            <h3 className="mt-4 text-sm font-medium text-gray-700 group-hover:text-black transition">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
