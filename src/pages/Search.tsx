import React, { useState } from "react";
import { Search, XCircle, Tag, Calendar, List } from "lucide-react";

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = () => {
    if (query.trim() !== "") {
      // Dummy results
      setResults([
        `Found "${query}" in ${category || "All"} from ${startDate || "any"} to ${endDate || "any"} - 1`,
        `Found "${query}" in ${category || "All"} from ${startDate || "any"} to ${endDate || "any"} - 2`,
        `Found "${query}" in ${category || "All"} from ${startDate || "any"} to ${endDate || "any"} - 3`,
      ]);
    }
  };

  const clearSearch = () => {
    setQuery("");
    setCategory("");
    setStartDate("");
    setEndDate("");
    setResults([]);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-center text-4xl font-bold mb-8 flex justify-center items-center gap-2 text-emerald-400">
          <Search size={28} /> Advanced Search
        </h1>

        <div className="grid gap-4 mb-6 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <label className="block mb-1 text-emerald-400">Search Query</label>
            <div className="relative">
              <Search className="absolute left-3 top-3 text-emerald-500" size={16} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search here..."
                className="w-full pl-10 p-3 rounded border border-emerald-500 bg-slate-800 text-white focus:outline-none focus:ring focus:ring-emerald-400"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-emerald-400">Category</label>
            <div className="relative">
              <List className="absolute left-3 top-3 text-emerald-500" size={16} />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full pl-10 p-3 rounded border border-emerald-500 bg-slate-800 text-white focus:outline-none focus:ring focus:ring-emerald-400"
              >
                <option value="">All</option>
                <option value="Books">Books</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-1 text-emerald-400">Tags</label>
            <div className="relative">
              <Tag className="absolute left-3 top-3 text-emerald-500" size={16} />
              <input
                type="text"
                placeholder="e.g. trending, hot"
                className="w-full pl-10 p-3 rounded border border-emerald-500 bg-slate-800 text-white focus:outline-none focus:ring focus:ring-emerald-400"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-emerald-400">Start Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 text-emerald-500" size={16} />
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full pl-10 p-3 rounded border border-emerald-500 bg-slate-800 text-white focus:outline-none focus:ring focus:ring-emerald-400"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-emerald-400">End Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 text-emerald-500" size={16} />
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full pl-10 p-3 rounded border border-emerald-500 bg-slate-800 text-white focus:outline-none focus:ring focus:ring-emerald-400"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-3 mb-8 justify-center">
          <button
            onClick={handleSearch}
            className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded text-white flex items-center gap-1"
          >
            <Search size={16} /> Search
          </button>
          <button
            onClick={clearSearch}
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded text-white flex items-center gap-1"
          >
            <XCircle size={16} /> Clear
          </button>
        </div>

        {results.length > 0 ? (
          <div className="bg-slate-800 rounded shadow p-4 space-y-3">
            <h2 className="text-2xl font-semibold text-emerald-400 mb-3">Results</h2>
            <ul className="space-y-2">
              {results.map((item, index) => (
                <li
                  key={index}
                  className="border border-emerald-500 p-3 rounded hover:bg-slate-700 transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-center text-gray-400 mt-4">No results yet. Try a search above.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
