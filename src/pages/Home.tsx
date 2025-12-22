
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-red-500 via-yellow-400text-white text-center py-20">
        <h1 className="text-4xl font-bold">Welcome </h1>
        <p className="text-lg mt-2">Explore, Compare, and with Ease</p>
        <div className="mt-6">
          <Link to="/catalog" className="px-6 py-3 bg-white text-blue-600 rounded-full font-semibold shadow-md hover:bg-gray-200">
            Browse Products
          </Link>
        </div>
      </section>

      {/* FEATURED SECTIONS */}
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Minimalist Card */}
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-gray-800">🛒 Select easy course for your carrer </h2>
          <p className="text-gray-600 mt-2">Find and purchase courses effortlessly.</p>
        </div>

        {/* Comparison Link */}
        <Link to="/comparison" className="bg-blue-500 text-white p-6 rounded-lg block hover:bg-blue-600">
          <h2 className="text-2xl font-semibold">📊 Compare Products</h2>
          <p className="mt-2">Use our comparison cart to make the best choice.</p>
        </Link>

        {/* Wishlist Link */}
        <Link to="/wishlist" className="bg-gray-900 text-white p-6 rounded-lg block hover:bg-gray-800">
          <h2 className="text-2xl font-semibold">❤️ Wishlist Feature</h2>
          <p className="mt-2">Save your favorite course for later.</p>
        </Link>
      </div>

      {/* CALL TO ACTION */}
      <div className="text-center py-10">
        <h3 className="text-xl font-semibold text-gray-700">Start Learning Course Today</h3>
        <Link to="/signup" className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700">
          Sign Up Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
