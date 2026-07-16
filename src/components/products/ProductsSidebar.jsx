const categories = [
  "All",
  "Panjabi",
  "Shirt",
  "T-Shirt",
  "Hoodie",
  "Jeans",
  "Polo",
];

export default function ProductsSidebar({
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="bg-white rounded-3xl border p-6 sticky top-24">
      <h2 className="text-xl font-bold mb-5">Categories</h2>

      <div className="space-y-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`w-full text-left px-4 py-3 rounded-xl transition ${
              selectedCategory === category
                ? "bg-black text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
