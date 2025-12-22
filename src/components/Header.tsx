import { Link } from "react-router-dom";
import { FaHome, FaUser, FaBriefcase, FaInfoCircle, FaNodeJs, FaTools, FaWind, FaCode } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-blue-400 to-purple-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6 flex flex-col items-center">
        {/* Title with icons */}
        <h1 className="flex flex-wrap justify-center items-center gap-3 text-3xl sm:text-4xl font-extrabold text-center mb-4 drop-shadow-md">
          <span className="flex items-center gap-1 text-lightred-200">
            <SiTypescript />
            ts
          </span>
          <span className="flex items-center gap-1 text-yellow-100">
            <FaTools />
            npm
          </span>
          <span className="flex items-center gap-1 text-green-200">
            <FaNodeJs />
            vite
          </span>
          <span className="flex items-center gap-1 text-blue-200">
            <FaWind />
            tailwind
          </span>
        </h1>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6">
          <Link
            to="/"
            className="flex items-center gap-2 hover:text-black hover:bg-white px-3 py-1 rounded transition duration-300"
          >
            <FaHome />
            Home
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2 hover:text-black hover:bg-white px-3 py-1 rounded transition duration-300"
          >
            <FaInfoCircle />
            About
          </Link>
          <Link
            to="/services"
            className="flex items-center gap-2 hover:text-black hover:bg-white px-3 py-1 rounded transition duration-300"
          >
            <FaBriefcase />
            Services
          </Link>
          <Link
            to="/profile"
            className="flex items-center gap-2 hover:text-black hover:bg-white px-3 py-1 rounded transition duration-300"
          >
            <FaUser />
            Profile
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
