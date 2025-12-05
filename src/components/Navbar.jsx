import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Images/logo.png";

const Navbar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path) =>
    pathname === path
      ? "text-emerald-700 font-semibold"
      : "text-slate-600 hover:text-emerald-600";

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* LOGO / BRAND */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <div className="-ml-1">
            <h4 className="font-bold text-2xl text-emerald-700 leading-none tracking-tight">
              Natural
            </h4>
            <p className="text-sm text-emerald-600 -mt-1">Industries</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          {["/", "/about", "/contact"].map((route, i) => {
            const labels = ["Home", "About Us", "Contact Us"];

            return (
              <Link
                key={route}
                to={route}
                className={`text-lg relative transition ${isActive(route)}`}
              >
                {labels[i]}
                <span className={`absolute left-0 bottom-0 h-[2px] bg-emerald-600 transition-all duration-300
                  ${pathname === route ? "w-full" : "w-0 group-hover:w-full"}
                `}/>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden block text-emerald-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-6">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className={`text-lg ${isActive("/")}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className={`text-lg ${isActive("/about")}`}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className={`text-lg ${isActive("/contact")}`}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
