import React, { useState } from "react";
import { CheckCircle, XCircle, Trophy } from "lucide-react";

const ComparisonPage: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const data = [
    {
      id: 1,
      name: "Product Alpha",
      featureA: true,
      featureB: true,
      recommended: true,
    },
    {
      id: 2,
      name: "Product Beta",
      featureA: true,
      featureB: false,
      recommended: false,
    },
    {
      id: 3,
      name: "Product Gamma",
      featureA: false,
      featureB: true,
      recommended: false,
    },
    {
      id: 4,
      name: "Product Delta",
      featureA: true,
      featureB: true,
      recommended: true,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-4xl font-bold mb-10 flex items-center justify-center gap-2 text-rose-400">
          <Trophy size={28} /> Product Comparison
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item) => {
            const isActive = selectedId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`cursor-pointer rounded-lg shadow p-6 transition ${
                  isActive
                    ? "bg-rose-700 border-rose-400"
                    : "bg-slate-800 border border-rose-600 hover:shadow-rose-600"
                }`}
              >
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-1">
                  {item.recommended && (
                    <CheckCircle size={18} className="text-green-400" />
                  )}
                  {item.name}
                </h2>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Feature A</span>
                    {item.featureA ? (
                      <CheckCircle className="text-green-400" size={16} />
                    ) : (
                      <XCircle className="text-red-500" size={16} />
                    )}
                  </div>
                  <div className="flex justify-between">
                    <span>Feature B</span>
                    {item.featureB ? (
                      <CheckCircle className="text-green-400" size={16} />
                    ) : (
                      <XCircle className="text-red-500" size={16} />
                    )}
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Recommended</span>
                    {item.recommended ? (
                      <span className="text-green-400">Yes</span>
                    ) : (
                      <span className="text-gray-400">No</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8 text-rose-400">
          {selectedId ? (
            <p>
              ✅ You selected{" "}
              <span className="font-semibold">
                {data.find((d) => d.id === selectedId)?.name}
              </span>
            </p>
          ) : (
            <p>Click on a product card to select one 🚀</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComparisonPage;
