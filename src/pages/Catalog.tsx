import { useState, useEffect } from "react";

const products = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: (Math.random() * 100).toFixed(2),
  description: `This is a description for Product ${i + 1}`,
}));

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [comparisonCart, setComparisonCart] = useState<number[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);

  // Load comparison cart and wishlist from local storage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("comparisonCart") || "[]");
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setComparisonCart(storedCart);
    setWishlist(storedWishlist);
  }, []);

  const handleSearch = () => {
    setSearchQuery(searchTerm);
  };

  const addToComparison = (productId: number) => {
    if (!comparisonCart.includes(productId)) {
      const updatedCart = [...comparisonCart, productId];
      setComparisonCart(updatedCart);
      localStorage.setItem("comparisonCart", JSON.stringify(updatedCart));
      alert("Product added to comparison!");
    } else {
      alert("Product already in comparison!");
    }
  };

  const addToWishlist = (productId: number) => {
    if (!wishlist.includes(productId)) {
      const updatedWishlist = [...wishlist, productId];
      setWishlist(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      alert("Product added to Wishlist!");
    } else {
      alert("Product already in Wishlist!");
    }
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.price.includes(searchQuery) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Catalog</h2>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search by name, price, or description..."
          className="w-full p-2 border border-gray-300 rounded-l"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button
          onClick={handleSearch}
          className="p-2 bg-blue-500 text-white rounded-r hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">Price: ${product.price}</p>
            <p className="text-sm text-gray-500">{product.description}</p>
            <button
              onClick={() => addToComparison(product.id)}
              className="mt-2 p-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Add to Comparison
            </button>
            <button
              onClick={() => addToWishlist(product.id)}
              className="mt-2 ml-2 p-2 bg-purple-500 text-white rounded hover:bg-purple-600"
            >
              Add to Wishlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
