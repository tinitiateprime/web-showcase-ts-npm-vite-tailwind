import { LayoutDashboard } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md animate-fade-in">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <LayoutDashboard /> Dashboard
      </h1>
      <p className="text-gray-500 mt-4">Your app's overview dashboard goes here.</p>
    </div>
  );
};

export default Dashboard;
