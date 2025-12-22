import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Users, DollarSign, Activity, Clock } from "lucide-react";

const stats = [
  {
    title: "Total Users",
    icon: <Users size={28} />,
    value: "15,432",
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Monthly Revenue",
    icon: <DollarSign size={28} />,
    value: "$42,860",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Active Sessions",
    icon: <Activity size={28} />,
    value: "104,239",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Avg. Time",
    icon: <Clock size={28} />,
    value: "6m 12s",
    color: "from-yellow-400 to-orange-400",
  },
];

const barData = [
  { name: "Jan", users: 300 },
  { name: "Feb", users: 600 },
  { name: "Mar", users: 800 },
  { name: "Apr", users: 500 },
  { name: "May", users: 900 },
];

const lineData = [
  { month: "Jan", revenue: 2500 },
  { month: "Feb", revenue: 4200 },
  { month: "Mar", revenue: 5100 },
  { month: "Apr", revenue: 6100 },
  { month: "May", revenue: 7200 },
];

const pieData = [
  { name: "Mobile", value: 55 },
  { name: "Desktop", value: 35 },
  { name: "Tablet", value: 10 },
];

const COLORS = ["#6366F1", "#EC4899", "#10B981"];

const AdvancedDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 p-8">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 animate-glow">
        🚀 Advanced Analytics Dashboard
      </h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className={`rounded-2xl p-6 text-white shadow-xl bg-gradient-to-br ${stat.color} transition-transform hover:scale-105 backdrop-blur-md`}
          >
            <div className="flex justify-between items-center mb-3">
              <div className="text-xl font-semibold">{stat.title}</div>
              <div className="opacity-80">{stat.icon}</div>
            </div>
            <div className="text-3xl font-bold">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Bar Chart */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg">
          <h2 className="text-lg font-bold mb-4 text-indigo-700">
            📊 Monthly User Growth
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#6366F1" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg">
          <h2 className="text-lg font-bold mb-4 text-emerald-700">
            💰 Revenue Trends
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#10B981"
                strokeWidth={3}
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg">
          <h2 className="text-lg font-bold mb-4 text-pink-700">
            📱 Device Usage Share
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                label
              >
                {pieData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Glow effect */}
      <style>{`
        .animate-glow {
          animation: glow 2.5s ease-in-out infinite alternate;
        }
        @keyframes glow {
          0% {
            text-shadow: 0 0 10px #6366f1, 0 0 20px #ec4899;
          }
          100% {
            text-shadow: 0 0 20px #6366f1, 0 0 30px #ec4899;
          }
        }
      `}</style>
    </div>
  );
};

export default AdvancedDashboard;
