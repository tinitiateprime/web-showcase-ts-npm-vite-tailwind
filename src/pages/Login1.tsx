// ADVANCED LOGIN PAGE WITH DARK/LIGHT TOGGLE, PARALLAX, SOCIAL LOGINS (NO SUPABASE)

import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, Github, Facebook } from "lucide-react";
import { FcGoogle } from "react-icons/fc"; // Replacing broken Google icon

const Login1 = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Email and password are required.");
      return;
    }
    setError("");
    alert("Fake login with: " + JSON.stringify(formData));
  };

  const themeClasses = darkMode
    ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
    : "bg-gradient-to-br from-white via-slate-100 to-white text-black";

  return (
    <div
      className={`${themeClasses} relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-300`}
    >
      {/* PARALLAX BACKGROUND */}
      <div className="absolute w-full h-full overflow-hidden -z-10">
        <div className="absolute bg-indigo-500 opacity-10 blur-3xl w-[600px] h-[600px] rounded-full top-[10%] left-[15%] animate-pulse"></div>
        <div className="absolute bg-pink-500 opacity-10 blur-2xl w-[500px] h-[500px] rounded-full bottom-[10%] right-[10%] animate-ping"></div>
      </div>

      {/* TOGGLE BUTTON */}
      <button
        className="absolute top-6 right-6 bg-gray-800 text-white p-2 rounded-full text-sm shadow-md hover:scale-105"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      {/* LOGIN CARD */}
      <div className="w-full max-w-md bg-white/10 dark:bg-white/5 border border-white/20 backdrop-blur-lg p-8 rounded-xl shadow-2xl animate-fadeIn">
        <h2 className="text-3xl font-extrabold text-center mb-2 tracking-tight">Login</h2>
        <p className="text-center text-sm mb-6">Access your dashboard securely</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="text-sm mb-1 block">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm mb-1 block">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-gray-400" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-12 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-indigo-300 hover:text-white"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && <p className="text-red-400 text-sm text-center animate-pulse">{error}</p>}

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:scale-[1.02] active:scale-95 transition-transform duration-200"
          >
            Sign In
          </button>
        </form>

        {/* Social Logins */}
        <div className="mt-6">
          <p className="text-center text-sm mb-3">Or sign in with</p>
          <div className="flex justify-center space-x-4">
            <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition">
              <FcGoogle className="text-xl" />
            </button>
            <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition">
              <Facebook className="text-white" size={20} />
            </button>
            <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition">
              <Github className="text-white" size={20} />
            </button>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          Don’t have an account? <a href="/signup" className="text-indigo-400 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login1;