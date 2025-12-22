import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Catalog from "./pages/Catalog";
import Comparison from "./pages/Comparison";
import ComparisonTable from "./pages/ComparisonTable";
import Wishlist from "./pages/Wishlist";
import Search from "./pages/Search";
import Forms from "./pages/Forms";
import DataTable from "./pages/DataTable";
import Infographics from "./pages/Infographics";
import Audio from "./pages/Audio";
import Video from "./pages/Video";
import Animation from "./pages/Animation";
import DragDrop from "./pages/DragDrop";
import Editor from "./pages/Editor";
import ShoppingCart from "./pages/ShoppingCart";
import Calendar from "./pages/Calendar";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Security from "./pages/Security";
import Help from "./pages/Help";

import Login1 from './pages/Login1';


const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1">
          <LeftSidebar />
          <main className="flex-1 p-6 overflow-y-auto bg-gray-100">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/comparison" element={<Comparison />} />
              <Route path="/comparisontable" element={<ComparisonTable />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/search" element={<Search />} />
              <Route path="/forms" element={<Forms />} />
              <Route path="/datatable" element={<DataTable />} />
              <Route path="/infographics" element={<Infographics />} />
              <Route path="/audio" element={<Audio />} />
              <Route path="/video" element={<Video />} />
              <Route path="/animation" element={<Animation />} />
              <Route path="/drag-drop" element={<DragDrop />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/shopping-cart" element={<ShoppingCart />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/security" element={<Security />} />
              <Route path="/help" element={<Help />} />

              <Route path="/Login1" element={<Login1/>}/>
            </Routes>
          </main>
          <RightSidebar />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
