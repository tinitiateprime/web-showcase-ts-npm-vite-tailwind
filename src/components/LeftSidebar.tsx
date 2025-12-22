import { Link } from "react-router-dom";
import {
  FaHome, FaUser, FaBriefcase, FaInfoCircle, FaClipboardList,
  FaHeart, FaSearch, FaTable, FaWpforms, FaChartBar,
  FaMusic, FaVideo, FaPalette, FaMousePointer, FaPenFancy,
  FaShoppingCart, FaCalendarAlt, FaTachometerAlt, FaShieldAlt, FaQuestionCircle
} from "react-icons/fa";

const LeftSidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <nav className="space-y-4">

        {/* Main */}
        <Link to="/" className="flex items-center gap-2 text-lg hover:text-blue-400">
          <FaHome /> Home
        </Link>
        <Link to="/profile" className="flex items-center gap-2 text-lg hover:text-blue-400">
          <FaUser /> Profile
        </Link>
        <Link to="/login" className="flex items-center gap-2 text-lg hover:text-blue-400">
          🔑 Login
        </Link>
        <Link to="/Login1" className="flex items-center gap-2 text-lg hover:text-blue-400">
        login1 
        </Link>
        <Link to="/signup" className="flex items-center gap-2 text-lg hover:text-blue-400">
          📝 Signup
        </Link>
        <Link to="/catalog" className="flex items-center gap-2 text-lg hover:text-blue-400">
          📦 Catalog
        </Link>

        {/* Services Section */}
        <h3 className="text-md font-semibold mt-6">🛠 Services</h3>
        <Link to="/services" className="flex items-center gap-2 text-lg hover:text-blue-400">
          <FaBriefcase /> Services
        </Link>
        <Link to="/search" className="flex items-center gap-2 text-lg hover:text-blue-400">
          <FaSearch /> Search
        </Link>
        <Link to="/comparison" className="flex items-center gap-2 text-lg hover:text-blue-400">
          <FaClipboardList /> Comparison
        </Link>
        <Link to="/comparisontable" className="flex items-center gap-2 text-lg hover:text-blue-400">
          🗂️ Comparison Table
        </Link>
        <Link to="/forms" className="flex items-center gap-2 text-lg hover:text-blue-400">
          <FaWpforms /> Forms
        </Link>
        <Link to="/datatable" className="flex items-center gap-2 text-lg hover:text-blue-400">
          <FaTable /> Data Table
        </Link>
        <Link to="/infographics" className="flex items-center gap-2 text-lg hover:text-blue-400">
          <FaChartBar /> Infographics
        </Link>
        <Link to="/audio" className="flex items-center gap-2 text-lg hover:text-blue-400">
          <FaMusic /> Audio
        </Link>
        <Link to="/video" className="flex items-center gap-2 text-lg hover:text-blue-400">
          <FaVideo /> Video
        </Link>
        <Link to="/animation" className="flex items-center gap-2 text-lg hover:text-blue-400">
          <FaPalette /> Animation
        </Link>
        <Link to="/drag-drop" className="flex items-center gap-2 text-lg hover:text-blue-400">
          <FaMousePointer /> Drag & Drop
        </Link>
        <Link to="/editor" className="flex items-center gap-2 text-lg hover:text-blue-400">
          <FaPenFancy /> Online Editor
        </Link>
        <Link to="/shopping-cart" className="flex items-center gap-2 text-lg hover:text-blue-400">
          <FaShoppingCart /> Shopping Cart
        </Link>
        <Link to="/calendar" className="flex items-center gap-2 text-lg hover:text-blue-400">
          <FaCalendarAlt /> Calendar
        </Link>

        {/* Dashboard/Analytics/Security */}
        <h3 className="text-md font-semibold mt-6">📊 Dashboard</h3>
        <Link to="/dashboard" className="flex items-center gap-2 text-lg hover:text-blue-400">
          <FaTachometerAlt /> Dashboard
        </Link>
        <Link to="/analytics" className="flex items-center gap-2 text-lg hover:text-blue-400">
          📈 Analytics
        </Link>
        <Link to="/security" className="flex items-center gap-2 text-lg hover:text-blue-400">
          <FaShieldAlt /> Security
        </Link>

        {/* Other */}
        <Link to="/about" className="flex items-center gap-2 text-lg hover:text-blue-400">
          <FaInfoCircle /> About
        </Link>
        <Link to="/contact" className="flex items-center gap-2 text-lg hover:text-blue-400">
          📞 Contact
        </Link>
        <Link to="/wishlist" className="flex items-center gap-2 text-lg hover:text-blue-400">
          ❤️ Wishlist
        </Link>
        <Link to="/help" className="flex items-center gap-2 text-lg hover:text-blue-400">
          <FaQuestionCircle /> Help
        </Link>

      </nav>
    </div>
  );
};

export default LeftSidebar;
