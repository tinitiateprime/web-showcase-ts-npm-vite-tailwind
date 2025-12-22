import React from "react";

const catalogData = [
  { id: 1, name: "Product A", category: "Electronics", price: 199 },
  { id: 2, name: "Product B", category: "Clothing", price: 49 },
  { id: 3, name: "Product C", category: "Furniture", price: 299 },
  { id: 4, name: "Product D", category: "Electronics", price: 129 },
];

interface ProductListProps {
  search: string;
  filter: string;
}

const ProductList: React.FC<ProductListProps> = ({ search, filter }) => {
  const filteredData = catalogData.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter ? item.category === filter : true)
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredData.map((item) => (
        <div key={item.id} className="border p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold">{item.name}</h2>
          <p className="text-gray-600">Category: {item.category}</p>
          <p className="text-green-600 font-bold">${item.price}</p>
          <button className="mt-2 bg-blue-500 text-white p-2 rounded">View Details</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;