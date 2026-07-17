import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Panjabi",
    image:
      "https://i.ibb.co.com/9mH1QFrC/ec137e2051df8e0488d46751d6dc76e7.jpg://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Shirt",
    image: "https://i.ibb.co.com/0p7KF95W/86ff97df7157a6db1d94e249c340cd1a.jpg",
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
    image: "https://i.ibb.co.com/PZqZvXXm/65c244873267a6444aba78846e6a94bc.jpg",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <p className="text-sm text-gray-500 uppercase tracking-[4px]">
            Categories
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            Shop By Category
          </h2>
        </div>

        <Link
          href="/products"
          className="text-sm md:text-sm text-gray-600 hover:text-black transition"
        >
          View All
        </Link>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/products?category=${category.name}`}
            className="group"
          >
            <div className="bg-white rounded-3xl border border-gray-200 p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="relative w-full h-36 overflow-hidden rounded-2xl bg-gray-50">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="mt-4 text-center">
                <h3 className="font-semibold text-gray-900">{category.name}</h3>

                <p className="text-sm text-gray-500 mt-1">
                  {category.productCount}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
