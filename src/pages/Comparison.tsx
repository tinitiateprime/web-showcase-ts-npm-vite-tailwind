
import { useState, useEffect } from "react";
const products = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: (Math.random() * 100).toFixed(2),
  description: `This is a description for Product ${i + 1}`,
}));

const Comparison = () => {
  const [comparisonCart, setComparisonCart] = useState<number[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("comparisonCart") || "[]");
    setComparisonCart(storedCart);
  }, []);

  const removeFromComparison = (productId: number) => {
    const updatedCart = comparisonCart.filter((id) => id !== productId);
    setComparisonCart(updatedCart);
    localStorage.setItem("comparisonCart", JSON.stringify(updatedCart));
  };

  const comparedProducts = products.filter((product) => comparisonCart.includes(product.id));

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Comparison Cart</h2>
      {comparedProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {comparedProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded shadow">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">Price: ${product.price}</p>
              <p className="text-sm text-gray-500">{product.description}</p>
              <button
                onClick={() => removeFromComparison(product.id)}
                className="mt-2 p-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products added for comparison.</p>
      )}
    </div>
  );
};

export default Comparison;
