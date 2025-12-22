import { Rocket, Sparkles, Lightbulb, Zap, Code2, ScanEye } from "lucide-react";

const items = [
  {
    icon: <Rocket size={40} className="text-fuchsia-500 animate-spin-slow" />, 
    title: "Cosmic Launch",
    description: "Rotating rocket card with galaxy glow.",
    animation: "card-planet",
    bg: "bg-gradient-to-r from-fuchsia-200 to-pink-100",
  },
  {
    icon: <Sparkles size={40} className="text-cyan-500 animate-pulse" />, 
    title: "Crystal Sparkle",
    description: "Hypnotic glowing crystal shine.",
    animation: "card-glow",
    bg: "bg-gradient-to-br from-cyan-100 to-white",
  },
  {
    icon: <Lightbulb size={40} className="text-amber-400" />, 
    title: "Idea Bounce",
    description: "Classic bounce entrance card.",
    animation: "card-bounce",
    bg: "bg-gradient-to-br from-amber-100 to-yellow-50",
  },
  {
    icon: <Zap size={40} className="text-yellow-500 animate-wiggle" />, 
    title: "Zappy Jolt",
    description: "Hover lightning pulse with jolt.",
    animation: "card-zap",
    bg: "bg-gradient-to-bl from-yellow-100 to-orange-100",
  },
  {
    icon: <Code2 size={40} className="text-indigo-600" />, 
    title: "Code Flash",
    description: "Sliding and zoom code entry.",
    animation: "card-zoom-in",
    bg: "bg-gradient-to-r from-indigo-100 to-purple-50",
  },
  {
    icon: <Sparkles size={40} className="text-rose-500 animate-flicker" />, 
    title: "Magic Flicker",
    description: "Mystical flicker and shine.",
    animation: "card-flicker",
    bg: "bg-gradient-to-r from-rose-100 to-white",
  },
  {
    icon: <ScanEye size={40} className="text-green-500 animate-scan" />, 
    title: "Scan Vision",
    description: "Futuristic scanning effect.",
    animation: "card-scan",
    bg: "bg-gradient-to-br from-green-100 to-white",
  },
];

export default function SuperAnimatedShowcase() {
  return (
    <div className="min-h-screen p-12 animate-bgPulse">
      <h1 className="text-5xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-rose-400 animate-glow mb-12">
        ✨ Next-Level Animated Experience ✨
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            className={`rounded-3xl p-6 text-center shadow-2xl backdrop-blur-xl transition-transform transform-gpu duration-300 hover:scale-[1.07] border border-white/30 ${item.bg} ${item.animation}`}
          >
            <div className="mb-4">{item.icon}</div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h2>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      <style>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }

        .animate-wiggle {
          animation: wiggle 1.5s ease-in-out infinite;
        }

        .animate-flicker {
          animation: flicker 1.2s infinite alternate;
        }

        .animate-scan {
          animation: scanLine 2s ease-in-out infinite;
        }

        .card-bounce {
          animation: bounceIn 0.8s ease-in-out both;
        }

        .card-planet {
          animation: swirl 12s infinite ease-in-out;
        }

        .card-glow {
          animation: softGlow 2.5s ease-in-out infinite alternate;
        }

        .card-zap:hover {
          transform: rotate(1deg) scale(1.1);
          box-shadow: 0 0 25px rgba(234, 179, 8, 0.4);
        }

        .card-zoom-in {
          animation: zoomIn 1s ease forwards;
        }

        .card-flicker {
          animation: flicker 2s infinite;
        }

        .card-scan {
          animation: scanPulse 2s ease-in-out infinite;
        }

        .animate-glow {
          animation: neonPulse 3s ease-in-out infinite alternate;
        }

        .animate-bgPulse {
          background: linear-gradient(-45deg, #670a50ff, #158275ff, #291267ff, #f12222ff);
          background-size: 600% 600%;
          animation: bgPulse 16s ease infinite;
        }

        @keyframes swirl {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(-1deg); }
          50% { transform: rotate(1deg); }
        }

        @keyframes softGlow {
          0% { box-shadow: 0 0 10px #0ea5e9; }
          100% { box-shadow: 0 0 25px #0ea5e9; }
        }

        @keyframes bounceIn {
          0% { transform: translateY(50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        @keyframes zoomIn {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes flicker {
          0% { opacity: 1; }
          50% { opacity: 0.4; }
          100% { opacity: 1; }
        }

        @keyframes scanLine {
          0% { transform: scaleY(1); }
          50% { transform: scaleY(1.08); }
          100% { transform: scaleY(1); }
        }

        @keyframes scanPulse {
          0%, 100% { box-shadow: 0 0 10px #22c55e; }
          50% { box-shadow: 0 0 20px #199d9dff; }
        }

        @keyframes neonPulse {
          0% { text-shadow: 0 0 10px #a855f7, 0 0 20px #ec4899; }
          100% { text-shadow: 0 0 20px #6b1358ff, 0 0 30px #f43f5e; }
        }

        @keyframes bgPulse {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
