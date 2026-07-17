export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Aminul Hoque",
      role: "Verified Customer",
      review:
        "Amazing quality and premium fabric. The Panjabi exceeded my expectations.",
    },
    {
      id: 2,
      name: "Sarah Ahmed",
      role: "Verified Customer",
      review:
        "Fast delivery and beautiful packaging. Definitely ordering again.",
    },
    {
      id: 3,
      name: "Tanvir Hasan",
      role: "Verified Customer",
      review:
        "Perfect fitting and excellent customer service. Highly recommended.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className=" mb-14">
        <p className="text-sm uppercase tracking-[4px] text-gray-500">
          Testimonials
        </p>

        <h2 className="text-3xl font-bold mt-3 text-gray-900">
          What Our Customers Say
        </h2>

        {/* <p className="text-gray-500 mt-4">
          Thousands of customers trust WearVerse for premium quality and modern
          fashion.
        </p> */}
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Stars */}
            <div className="flex gap-1 text-yellow-400 text-xl mb-5">
              ⭐ ⭐ ⭐ ⭐ ⭐
            </div>

            {/* Review */}
            <p className="text-gray-600 leading-7 mb-6">"{review.review}"</p>

            {/* User */}
            <div>
              <h4 className="font-semibold text-gray-900">{review.name}</h4>

              <p className="text-sm text-gray-500">{review.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
