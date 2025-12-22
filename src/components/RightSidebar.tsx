import React from "react";

const RightSidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-200 p-4 hidden md:block">
      <p className="font-bold">Additional Options</p>
      <ul className="space-y-4 mt-2">
        <li><a href="/profile" className="text-blue-600">Profile</a></li>
        <li><a href="/login" className="text-blue-600">Login</a></li>
        <li><a href="/signup" className="text-blue-600">Signup</a></li>
      </ul>
    </aside>
  );
};

export default RightSidebar;
