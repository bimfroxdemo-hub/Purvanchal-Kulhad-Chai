export default function ProductCard({ name, price, description, onAdd }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition duration-300">

      {/* Image Placeholder */}
      <div className="h-40 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
        <span className="text-5xl">🍵</span>
      </div>

      {/* Product Info */}
      <h3 className="text-xl font-bold text-amber-900">{name}</h3>

      <p className="text-gray-600 text-sm mt-1">
        {description || "Fresh & authentic chai experience"}
      </p>

      <p className="mt-3 text-lg font-semibold text-amber-800">
        ₹{price}
      </p>

      {/* Button */}
      <button
        onClick={onAdd}
        className="mt-4 w-full bg-amber-800 text-white py-2 rounded-lg hover:bg-amber-900 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}