import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Images/logo.png";

const Navbar = () => {
  const { pathname } = useLocation();

  const isActive = (path) =>
    pathname === path ? "text-emerald-700 font-semibold" : "text-slate-600";

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* LOGO / BRAND */}
        <div className="flex items-center gap-2 cursor-pointer">
          {/* If you want logo use below */}
          {/* <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" /> */}

          <div>
            <h4 className="font-bold text-2xl text-emerald-700 tracking-tight">
              Natural
            </h4>
            <h5 className="font-light text-lg text-emerald-600 -mt-1">
              Industries
            </h5>
          </div>
        </div>

        {/* NAV LINKS */}
        <div className="flex gap-12">
          <Link
            to="/"
            className={`text-lg transition relative ${isActive("/")}`}
          >
            Home
            <span className="block h-[2px] w-0 bg-emerald-600 transition-all duration-300 hover:w-full"></span>
          </Link>

          <Link
            to="/about"
            className={`text-lg transition relative ${isActive("/about")}`}
          >
            About Us
            <span className="block h-[2px] w-0 bg-emerald-600 transition-all duration-300 hover:w-full"></span>
          </Link>

          <Link
            to="/contact"
            className={`text-lg transition relative ${isActive("/contact")}`}
          >
            Contact Us
            <span className="block h-[2px} w-0 bg-emerald-600 transition-all duration-300 hover:w-full"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
