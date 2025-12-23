import { useState, useEffect, useRef } from "react";
import {
  Code,
  Smartphone,
  Globe,
  Brain,
  Zap,
  Shield,
  ArrowRight,
  Sparkles,
  Layers,
  Palette,
  Cpu,
} from "lucide-react";

const ServicesPage: React.FC = () => {
  const [activeService, setActiveService] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Only update if cursor is within viewport
      if (e.clientX >= 0 && e.clientY >= 0) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const isClickable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        !!target.closest("button") ||
        !!target.closest("a") ||
        target.hasAttribute("onclick") ||
        target.style.cursor === "pointer" ||
        window.getComputedStyle(target).cursor === "pointer";

      // ✅ must be boolean (fix TS2345)
      setIsHovering(!!isClickable);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    setIsVisible(true);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const services = [
    {
      id: 1,
      title: "Web Development",
      icon: Code,
      description: "Cutting-edge web applications with modern frameworks",
      features: ["React & Next.js", "TypeScript", "Tailwind CSS", "API Integration"],
      price: "$2,500",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      bgGradient: "from-blue-900/20 via-purple-900/20 to-pink-900/20",
    },
    {
      id: 2,
      title: "Mobile Development",
      icon: Smartphone,
      description: "Native & cross-platform mobile applications",
      features: ["React Native", "iOS & Android", "Push Notifications", "App Store Deploy"],
      price: "$3,000",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      bgGradient: "from-green-900/20 via-emerald-900/20 to-teal-900/20",
    },
    {
      id: 3,
      title: "Cloud Solutions",
      icon: Globe,
      description: "Scalable cloud infrastructure and deployment",
      features: ["AWS/Azure Setup", "Docker & K8s", "CI/CD Pipeline", "Auto Scaling"],
      price: "$2,000",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      bgGradient: "from-orange-900/20 via-red-900/20 to-pink-900/20",
    },
    {
      id: 4,
      title: "AI Integration",
      icon: Brain,
      description: "Machine learning and AI-powered features",
      features: ["GPT Integration", "Computer Vision", "Natural Language", "Data Analysis"],
      price: "$4,000",
      gradient: "from-purple-500 via-violet-500 to-indigo-500",
      bgGradient: "from-purple-900/20 via-violet-900/20 to-indigo-900/20",
    },
    {
      id: 5,
      title: "Performance Optimization",
      icon: Zap,
      description: "Lightning-fast performance and optimization",
      features: ["Speed Optimization", "SEO Enhancement", "Core Web Vitals", "Bundle Analysis"],
      price: "$1,500",
      gradient: "from-yellow-500 via-orange-500 to-red-500",
      bgGradient: "from-yellow-900/20 via-orange-900/20 to-red-900/20",
    },
    {
      id: 6,
      title: "Security & Testing",
      icon: Shield,
      description: "Comprehensive security and quality assurance",
      features: ["Security Audit", "Penetration Testing", "Automated Testing", "Code Review"],
      price: "$1,800",
      gradient: "from-cyan-500 via-blue-500 to-indigo-500",
      bgGradient: "from-cyan-900/20 via-blue-900/20 to-indigo-900/20",
    },
  ];

  const features = [
    { icon: Layers, title: "Modern Architecture", desc: "Scalable & maintainable code" },
    { icon: Palette, title: "Stunning Design", desc: "Pixel-perfect interfaces" },
    { icon: Cpu, title: "High Performance", desc: "Optimized for speed" },
    { icon: Sparkles, title: "Innovation", desc: "Cutting-edge solutions" },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden" ref={containerRef}>
      {/* Animated cursor follower - completely non-interfering */}
      <div
        className={`fixed rounded-full pointer-events-none z-30 transition-all duration-150 ease-out ${
          isHovering
            ? "w-8 h-8 bg-gradient-to-r from-purple-400/30 to-pink-400/30 opacity-60"
            : "w-4 h-4 bg-gradient-to-r from-purple-400/40 to-pink-400/40 opacity-40"
        }`}
        style={{
          left: mousePosition.x - (isHovering ? 16 : 8),
          top: mousePosition.y - (isHovering ? 16 : 8),
          transform: `scale(${isVisible ? 1 : 0})`,
          pointerEvents: "none",
        }}
      />

      {/* Dynamic background grid */}
      <div className="fixed inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #6366f1 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, #ec4899 0%, transparent 50%),
              radial-gradient(circle at 75% 25%, #8b5cf6 0%, transparent 50%),
              radial-gradient(circle at 25% 75%, #06b6d4 0%, transparent 50%)
            `,
            backgroundSize: "100% 100%",
            animation: "pulse 8s ease-in-out infinite",
          }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 mb-8">
              <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
              <span className="text-sm font-medium">Premium Services</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Our Services
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your ideas into reality with our cutting-edge development services
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-16">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                >
                  <feature.icon className="w-6 h-6 text-purple-400 mr-3" />
                  <div>
                    <div className="font-semibold text-white">{feature.title}</div>
                    <div className="text-sm text-gray-400">{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 transition-all duration-500 hover:scale-105 hover:border-white/30 ${
                  activeService === index ? "ring-2 ring-purple-500" : ""
                }`}
                onMouseEnter={() => setActiveService(index)}
                style={{
                  // keeping your original background logic as-is
                  background: `linear-gradient(135deg, ${service.bgGradient
                    .replace("from-", "rgba(")
                    .replace("via-", ", rgba(")
                    .replace("to-", ", rgba(")
                    .replace("900/20", "900, 0.2)")})`,
                  animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                }}
              >
                {/* Animated background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10`} />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-2xl bg-gradient-to-r ${service.gradient} mr-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
                      <div className="flex items-center">
                        <span className="text-3xl font-bold text-white">{service.price}</span>
                        <span className="text-gray-400 ml-2">starting</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-300">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`w-full bg-gradient-to-r ${service.gradient} text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center group/btn cursor-pointer`}
                    onClick={() => console.log(`Clicked ${service.title}`)}
                  >
                    <span className="mr-2">Get Started</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tl from-white/10 to-transparent rounded-full blur-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Process
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A streamlined approach to bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {["Discovery", "Design", "Development", "Deployment"].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                      {index + 1}
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{step}</h3>
                  <p className="text-gray-400">
                    {index === 0 && "Understanding your needs and goals"}
                    {index === 1 && "Creating beautiful, functional designs"}
                    {index === 2 && "Building with cutting-edge technology"}
                    {index === 3 && "Launching and ongoing support"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss your ideas and create something amazing together
            </p>
            <button
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center mx-auto group cursor-pointer"
              onClick={() => console.log("Free consultation clicked")}
            >
              <span className="mr-2">Get Free Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Vite/React: no styled-jsx */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;
