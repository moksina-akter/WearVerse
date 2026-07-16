import ProductCard from "../home/ProductCard";

export default function ProductsGrid({ products }) {
  return (
    <>
      <div className="flex justify-between mb-8">
        <h2 className="text-3xl font-bold">Products</h2>

        <p className="text-gray-500">Showing {products.length} products</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
