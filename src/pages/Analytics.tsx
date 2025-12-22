import { BarChart2 } from "lucide-react";

const Analytics = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md animate-fade-in">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <BarChart2 /> Analytics
      </h1>
      <p className="text-gray-500 mt-4">Analyze your data and metrics.</p>
    </div>
  );
};

export default Analytics;
