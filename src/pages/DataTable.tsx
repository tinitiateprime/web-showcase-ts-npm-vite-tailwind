import { useState, useMemo, useEffect } from "react";
import { ChevronUp, ChevronDown, Search, ArrowLeft, ArrowRight } from "lucide-react";

type Role = "Admin" | "Editor" | "Viewer";

type UserRow = {
  id: number;
  name: string;
  email: string;
  role: Role;
};

const sampleData: UserRow[] = [
  { id: 1, name: "Alice", email: "alice@example.com", role: "Admin" },
  { id: 2, name: "Bob", email: "bob@example.com", role: "Editor" },
  { id: 3, name: "Charlie", email: "charlie@example.com", role: "Viewer" },
  { id: 4, name: "Diana", email: "diana@example.com", role: "Admin" },
  { id: 5, name: "Eve", email: "eve@example.com", role: "Editor" },
  { id: 6, name: "Frank", email: "frank@example.com", role: "Viewer" },
  { id: 7, name: "Grace", email: "grace@example.com", role: "Admin" },
];

const roles: Array<"All" | Role> = ["All", "Admin", "Editor", "Viewer"];

type SortField = "name" | "email" | "role";
type SortOrder = "asc" | "desc";

const DataTable = () => {
  const [query, setQuery] = useState<string>("");
  const [sortField, setSortField] = useState<SortField>("name");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [roleFilter, setRoleFilter] = useState<"All" | Role>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = 4;

  const filteredData = useMemo<UserRow[]>(() => {
    const q = query.trim().toLowerCase();

    let data = sampleData.filter((item) => {
      const matchesQuery =
        q.length === 0 ||
        item.name.toLowerCase().includes(q) ||
        item.email.toLowerCase().includes(q) ||
        item.role.toLowerCase().includes(q);

      const matchesRole = roleFilter === "All" || item.role === roleFilter;

      return matchesQuery && matchesRole;
    });

    data = data.sort((a, b) => {
      const fieldA = String(a[sortField]).toLowerCase();
      const fieldB = String(b[sortField]).toLowerCase();

      return sortOrder === "asc"
        ? fieldA.localeCompare(fieldB)
        : fieldB.localeCompare(fieldA);
    });

    return data;
  }, [query, sortField, sortOrder, roleFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredData.length / itemsPerPage));

  // If filter reduces pages, keep currentPage valid
  useEffect(() => {
    setCurrentPage((p) => Math.min(p, totalPages));
  }, [totalPages]);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  useEffect(() => {
    // Animate rows when component mounts / page changes
    const rows = document.querySelectorAll<HTMLTableRowElement>("tr[data-animate]");
    rows.forEach((row, i) => {
      setTimeout(() => row.classList.add("animate-row"), i * 80);
    });
  }, [paginatedData]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200 p-6">
      <div className="max-w-6xl mx-auto backdrop-blur-xl bg-white/60 border border-white/40 shadow-2xl rounded-3xl p-10 animate-fadeIn">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <h2 className="text-4xl font-extrabold tracking-tight flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-500 to-purple-600 animate-glow">
            🌟 User Dashboard
          </h2>

          {/* Search and Filter */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <Search className="absolute top-3 left-3 text-gray-400" size={20} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search users..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 shadow-inner bg-white text-black focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <select
              className="px-3 py-2 rounded-xl bg-indigo-100 text-indigo-800 border border-indigo-300 outline-none"
              value={roleFilter}
              onChange={(e) => {
                setRoleFilter(e.target.value as "All" | Role);
                setCurrentPage(1);
              }}
            >
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full divide-y divide-gray-300 text-sm text-left">
            <thead className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 uppercase text-xs">
              <tr>
                {(["name", "email", "role"] as const).map((field) => (
                  <th
                    key={field}
                    onClick={() => handleSort(field)}
                    className="px-6 py-4 cursor-pointer hover:bg-indigo-200 transition-colors duration-300 select-none"
                  >
                    <div className="flex items-center gap-1">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                      {sortField === field &&
                        (sortOrder === "asc" ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        ))}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-100">
              {paginatedData.length ? (
                paginatedData.map((user) => (
                  <tr
                    key={user.id}
                    data-animate
                    className="opacity-0 translate-y-4 transition-all duration-500 ease-out hover:scale-[1.01] hover:bg-gradient-to-r from-indigo-50 to-purple-50"
                  >
                    <td className="px-6 py-4 font-semibold text-gray-800 whitespace-nowrap">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 text-gray-600 whitespace-nowrap">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            user.role === "Admin"
                              ? "bg-red-500"
                              : user.role === "Editor"
                              ? "bg-yellow-500"
                              : "bg-green-500"
                          }`}
                        />
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold inline-block shadow-md tracking-wide ${
                            user.role === "Admin"
                              ? "bg-red-200 text-red-800"
                              : user.role === "Editor"
                              ? "bg-yellow-200 text-yellow-800"
                              : "bg-green-200 text-green-800"
                          }`}
                        >
                          {user.role}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="text-center py-8 text-gray-500 italic">
                    No matching records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
          <span>
            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
            {Math.min(currentPage * itemsPerPage, filteredData.length)} of{" "}
            {filteredData.length} results
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 rounded-md border border-gray-300 hover:bg-gray-100 disabled:opacity-30"
            >
              <ArrowLeft size={16} />
            </button>

            <span>
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-2 rounded-md border border-gray-300 hover:bg-gray-100 disabled:opacity-30"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-in-out;
        }
        .animate-row {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite alternate;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0.97); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes glow {
          from {
            text-shadow: 0 0 10px #a855f7, 0 0 20px #9333ea;
          }
          to {
            text-shadow: 0 0 20px #c084fc, 0 0 30px #a78bfa;
          }
        }
      `}</style>
    </div>
  );
};

export default DataTable;
