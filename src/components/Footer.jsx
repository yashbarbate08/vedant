import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#eef7f1] text-slate-700 mt-20 border-t border-emerald-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-emerald-700 tracking-wide">
            Natural Industries
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Eco-friendly, plant-based home essentials designed for a cleaner,
            greener tomorrow.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-emerald-700 mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-emerald-600" href="#">Home</a></li>
            <li><a className="hover:text-emerald-600" href="#">Products</a></li>
            <li><a className="hover:text-emerald-600" href="#">About Us</a></li>
            <li><a className="hover:text-emerald-600" href="#">Contact</a></li>
          </ul>
        </div>

        {/* Customer Support + Your Info */}
        <div>
          <h4 className="text-lg font-semibold text-emerald-700 mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: support@naturalindustries.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Mon–Sat: 9AM – 7PM</li>
            <li><a href="#" className="hover:text-emerald-600">FAQs</a></li>
          </ul>

          {/* Your Personal Info */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-emerald-700 mb-2">Owner Contact</h4>
            <ul className="space-y-1 text-sm">
              <li>Name: <span className="font-medium text-slate-700">Vedant Barbate</span></li>
              <li>Phone: <span className="font-medium text-slate-700">+91 99231 21530</span></li>
              <li>Email: 
                <a
                  href="mailto:vedantbarbate@gmail.com"
                  className="font-medium text-emerald-700 hover:underline"
                >
                  vedantbarbate@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold text-emerald-700 mb-4">
            Stay Updated
          </h4>
          <p className="text-sm text-slate-600">
            Subscribe to receive offers & eco-friendly tips.
          </p>

          <div className="mt-4 flex items-center bg-white border border-emerald-200 rounded-xl shadow-sm overflow-hidden">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent text-slate-700 outline-none flex-1 px-3 py-2 text-sm"
            />
            <button className="bg-emerald-600 text-white px-4 py-2 text-sm font-semibold hover:bg-emerald-500 transition">
              Join
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-[#e3f3ea] py-4 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Natural Industries — Sustaining Tomorrow, Growing Together.
      </div>
    </footer>
  );
}
