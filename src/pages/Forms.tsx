import React, { useState } from "react";
import { User, Mail, Lock, Phone } from "lucide-react";

const Form: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Submitted: " + JSON.stringify(form));
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="w-1/3 bg-indigo-900 text-white flex flex-col justify-center p-12 space-y-6">
        <h1 className="text-4xl font-extrabold tracking-wide">Join Us Today</h1>
        <p className="text-indigo-200 text-lg leading-relaxed">
          Fill in the form to create your account and start your journey with us.
        </p>
        <div className="text-indigo-300 italic text-sm">
          <p>“Simplicity is the ultimate sophistication.”</p>
          <p>– Leonardo da Vinci</p>
        </div>
      </div>

      {/* Right Form */}
      <div className="flex-1 bg-white flex items-center justify-center p-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-6"
          noValidate
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sign Up</h2>

          {/* Name */}
          <div className="relative">
            <User className="absolute left-3 top-3 text-indigo-600" size={20} />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full pl-10 py-3 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-indigo-600" size={20} />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full pl-10 py-3 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-indigo-600" size={20} />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full pl-10 py-3 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <Phone className="absolute left-3 top-3 text-indigo-600" size={20} />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full pl-10 py-3 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
