import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Sparkles } from 'lucide-react';

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Handle signup logic here
    }
  };

  const InputField = ({ 
    name, 
    type = 'text', 
    placeholder, 
    icon: Icon, 
    showToggle = false 
  }: {
    name: string;
    type?: string;
    placeholder: string;
    icon: React.ElementType;
    showToggle?: boolean;
  }) => {
    const isPassword = name === 'password';
    const isConfirmPassword = name === 'confirmPassword';
    const showPasswordValue = isPassword ? showPassword : showConfirmPassword;
    const inputType = showToggle ? (showPasswordValue ? 'text' : 'password') : type;

    return (
      <div className="relative group">
        <div className={`relative transition-all duration-300 ${
          focusedField === name ? 'scale-105' : 'scale-100'
        }`}>
          <Icon className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
            focusedField === name ? 'text-purple-500' : 'text-gray-400'
          }`} />
          <input
            type={inputType}
            name={name}
            value={formData[name as keyof typeof formData]}
            onChange={handleInputChange}
            onFocus={() => setFocusedField(name)}
            onBlur={() => setFocusedField(null)}
            placeholder={placeholder}
            className={`w-full pl-12 pr-12 py-4 bg-white/10 backdrop-blur-sm border-2 rounded-xl text-white placeholder-gray-400 transition-all duration-300 outline-none ${
              focusedField === name 
                ? 'border-purple-500 shadow-lg shadow-purple-500/25' 
                : 'border-white/20 hover:border-white/40'
            } ${errors[name] ? 'border-red-500' : ''}`}
          />
          {showToggle && (
            <button
              type="button"
              onClick={() => isPassword ? setShowPassword(!showPassword) : setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-400 transition-colors"
            >
              {showPasswordValue ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          )}
        </div>
        {errors[name] && (
          <p className="text-red-400 text-sm mt-2 ml-2 animate-pulse">{errors[name]}</p>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 w-full max-w-md shadow-2xl border border-white/20 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-purple-400 mr-2" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Join Us
            </h1>
          </div>
          <p className="text-gray-300 text-lg">Create your account and start your journey</p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          <InputField
            name="name"
            placeholder="Full Name"
            icon={User}
          />

          <InputField
            name="email"
            type="email"
            placeholder="Email Address"
            icon={Mail}
          />

          <InputField
            name="password"
            placeholder="Password"
            icon={Lock}
            showToggle={true}
          />

          <InputField
            name="confirmPassword"
            placeholder="Confirm Password"
            icon={Lock}
            showToggle={true}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center group"
          >
            <span className="mr-2">Create Account</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <span className="px-4 text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        {/* Social Login */}
        <div className="space-y-3">
          <button className="w-full bg-white/5 hover:bg-white/10 border border-white/20 text-white py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105">
            Continue with Google
          </button>
          <button className="w-full bg-white/5 hover:bg-white/10 border border-white/20 text-white py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105">
            Continue with GitHub
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-400">
            Already have an account?{' '}
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;