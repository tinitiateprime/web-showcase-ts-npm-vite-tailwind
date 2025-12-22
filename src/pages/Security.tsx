import { Shield } from "lucide-react";

const Security = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md animate-fade-in">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <Shield /> Security
      </h1>
      <p className="text-gray-500 mt-4">Manage your application security settings.</p>
    </div>
  );
};

export default Security;
