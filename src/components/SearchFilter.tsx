import React from "react";

interface SearchFilterProps {
  search: string;
  setSearch: (value: string) => void;
  filter: string;
  setFilter: (value: string) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ search, setSearch, filter, setFilter }) => {
  return (
    <div className="flex gap-4 mb-4">
      <input
        type="text"
        placeholder="Search products..."
        className="p-2 border rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select className="p-2 border rounded" value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Furniture">Furniture</option>
      </select>
    </div>
  );
};

export default SearchFilter;